import Link from "next/link";
import styles from "../styles/form.module.css";
import Image from "next/image";

const Registration = () => {
  return (
    <div>
      <div className={styles.container}>
        <h1 className={styles.header}>بوتکمپ بوتواستارت</h1>
        <form className={styles.form}>
          <div className={styles.topSide}>
            <Image
              src="/Union.png"
              alt="Example Image"
              width={80}
              height={81}
            />
            <h1>فرم ثبت نام</h1>
          </div>
          <div className={styles.inputContainer}>
            <input
              type="text"
              id="username"
              placeholder="نام کاربری"
              className={styles.normal}
            />
            <input
              id="password"
              type="password"
              placeholder="رمز عبور"
              className={styles.normal}
            />
            <input
              id="confirmPassword"
              type="password"
              placeholder="تکرار رمز عبور"
              className={styles.normal}
            />
          </div>
          <button type="submit" className={styles.formButton}>
            ثبت نام
          </button>
          <div className={styles.rightAlign}>
            <Link className={styles.link} href="/login">
              حساب کاربری دارید؟
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;
