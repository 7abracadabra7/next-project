import styles from "../../styles/form.module.css";
import Link from "next/link";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { useLogin } from "../../services/mutations";
import Cookies from "js-cookie";
import { useState } from "react";
import { useRouter } from "next/router";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { mutate } = useLogin();
  const [loginError, setLoginError] = useState("");
  const router = useRouter();

  const onSubmit = (data) => {
    mutate(data, {
      onSuccess: (data) => {
        Cookies.set("token", `${data.data.token}`, { expires: 7 });
        console.log("data sent", Cookies.get("token"));
        router.push("/");
      },
      onError: (error) => {
        console.log("error:", error.response.data.message);
        if (error.response.data.message == "Invalid credentials") {
          setLoginError("اطلاعات وارد شده نادرست است");
        } else {
          setLoginError("خطایی رخ داده است");
        }
      },
    });
  };

  return (
    <div>
      <div className={styles.container}>
        <h1 className={styles.header}>بوتکمپ بوتواستارت</h1>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <div className={styles.topSide}>
            <Image
              src="/Union.png"
              alt="Example Image"
              width={80}
              height={81}
            />
            <h1>فرم ورود</h1>
          </div>
          <div className={styles.inputContainer}>
            <input
              {...register("username", { required: "این فیلد الزامی است" })}
              type="text"
              id="username"
              placeholder={
                errors.username ? errors.username.message : "نام کاربری"
              }
              className={errors.username ? styles.error : styles.normal}
            />
            <input
              id="password"
              {...register("password", { required: "این فیلد الزامی است" })}
              type="password"
              placeholder={
                errors.password ? errors.password.message : "رمز عبور"
              }
              className={errors.password ? styles.error : styles.normal}
            />
          </div>
          <button type="submit" className={styles.formButton}>
            ورود
          </button>
          {loginError && <p className={styles.error}>{loginError}</p>}
          <div className={styles.rightAlign}>
            <Link className={styles.link} href="/registration">
              ایجاد حساب کاربری!
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
