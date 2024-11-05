import { useEditProduct } from "../../services/mutations";
import { useForm } from "react-hook-form";
import { useContext, useEffect } from "react";
import { ModalContext } from "../../providers/ContextProvider";
import Modal from "react-modal";
import styles from "./AddModal.module.css";

const EditModal = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { modalStates, toggleModal, selectedProduct, setSelectedProduct } =
    useContext(ModalContext);

  //====================== Mutate Product =============================

  const { mutate } = useEditProduct();

  const onSubmit = (product) => {
    const id = selectedProduct.id;
    const data = { id: id, ...product };
    console.log("editedData:", data);
    mutate(data, {
      onSuccess: (data) => console.log("new data", data),
      onError: (error) => console.log(error),
    });

    toggleModal("editModal");
  };

  useEffect(() => {
    if (modalStates.editModal) {
      reset({
        name: selectedProduct.name,
        quantity: selectedProduct.quantity,
        price: selectedProduct.price,
      });
    }
  }, [modalStates.editModal, reset]);

  return (
    <div>
      <Modal
        isOpen={modalStates.editModal}
        onRequestClose={() => toggleModal("editModal")}
        className={styles.modalContent}
        overlayClassName={styles.modalOverlay}
        contentLabel="Edit Product"
      >
        <h2> ویرایش اطلاعات </h2>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <div>
            <label>نام کالا</label>
            <input
              {...register("name", { required: "این فیلد الزامی است" })}
              type="text"
              id="name"
              placeholder={errors.name ? errors.name.message : "نام کالا"}
              className={errors.name ? styles.error : styles.normal}
            />
            <label>تعداد موجودی </label>

            <input
              id="quantity"
              {...register("quantity", {
                required: "لطفا تعداد را وارد کنید ",
              })}
              type="number"
              placeholder={errors.quantity ? errors.quantity.message : "تعداد "}
              className={errors.quantity ? styles.error : styles.normal}
            />
            <label> قیمت</label>

            <input
              id="price"
              {...register("price", { required: "لطفا قیمت را وارد کنید" })}
              type="number"
              placeholder={errors.price ? errors.price.message : "قیمت"}
              className={errors.price ? styles.error : styles.normal}
            />
          </div>
          <button className={styles.submitBtn} type="submit">
            ثبت اطلاعات جدید
          </button>
          <button
            className={styles.cancelBtn}
            type="button"
            onClick={() => toggleModal("editModal")}
          >
            انصراف
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default EditModal;
