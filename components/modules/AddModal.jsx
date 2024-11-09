import { useProduct } from "../../services/mutations";
import { useForm } from "react-hook-form";
import Modal from "react-modal";
import styles from "./AddModal.module.css";
import { useContext, useState } from "react";
import { useRouter } from "next/router";
import { ModalContext } from "../../providers/ContextProvider";

const AddModal = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { modalStates, toggleModal } = useContext(ModalContext);

  const router = useRouter();
  const onTokenInvalid = () => {
    console.log("Token is invalid, redirecting to login...");
    router.push("/login");
  };

  //====================== Mutate Product =============================

  const { mutate } = useProduct(onTokenInvalid);

  const onSubmit = (product) => {
    console.log("product", product);
    mutate(product, {
      onSuccess: (data) => console.log("data added:", data),
      onError: (error) => console.log("data didn't send", error),
    });
    toggleModal("addModal");
  };
  return (
    <div>
      <Modal
        isOpen={modalStates.addModal}
        onRequestClose={() => toggleModal("addModal")}
        className={styles.modalContent}
        overlayClassName={styles.modalOverlay}
        contentLabel="Create New Product"
      >
        <h2>ایجاد محصول جدید</h2>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <div>
            <label>نام کالا</label>
            <input
              id="name"
              placeholder={errors.name ? errors.name.message : "نام کالا"}
              className={errors.name ? styles.error : styles.normal}
              {...register("name", { required: "این فیلد الزامی است" })}
              type="text"
            />
            <label>تعداد موجودی </label>

            <input
              id="quantity"
              {...register("quantity", {
                required: "لطفا تعداد را وارد کنید ",
              })}
              type="number"
              placeholder={errors.name ? errors.quantity.message : "تعداد "}
              className={errors.quantity ? styles.error : styles.normal}
            />
            <label> قیمت</label>

            <input
              id="price"
              {...register("price", { required: "لطفا قیمت را وارد کنید" })}
              type="number"
              placeholder={errors.name ? errors.price.message : "قیمت"}
              className={errors.price ? styles.error : styles.normal}
            />
          </div>
          <button className={styles.submitBtn} type="submit">
            ایجاد
          </button>
          <button
            className={styles.cancelBtn}
            type="button"
            onClick={() => toggleModal("addModal")}
          >
            انصراف
          </button>
          {errors.name && (
            <span className={styles.error}>{errors.name.message}</span>
          )}
        </form>
      </Modal>
    </div>
  );
};

export default AddModal;
