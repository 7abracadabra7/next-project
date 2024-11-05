import Modal from "react-modal";
import styles from "./DeleteModal.module.css";
import { useContext } from "react";
import { ModalContext } from "../providers/ContextProvider";
import deleteImg from "../images/Close.png";
import { useDeleteProduct } from "../services/mutations";

const DeleteModal = () => {
  const { modalStates, toggleModal, setSelectedProduct, selectedProduct } =
    useContext(ModalContext);
  const { mutate } = useDeleteProduct();

  const deleteHandler = () => {
    const id = selectedProduct.id;
    console.log("delete modal id:", id);
    const data = {
      ids: [id],
    };
    console.log(data);

    mutate(
      { data },
      {
        onSuccess: (data) => {
          console.log("delete successfully done", data);
        },
        onError: (error) => {
          console.log("error in delete", error);
        },
      }
    );
    setSelectedProduct(null);
    toggleModal("deleteModal");
  };

  return (
    <div>
      <Modal
        isOpen={modalStates.deleteModal}
        onRequestClose={() => toggleModal("deleteModal")}
        className={styles.modalContent}
        overlayClassName={styles.modalOverlay}
        contentLabel="Delete Product"
      >
        <img src={deleteImg} className={styles.deleteImg} alt="deleteIcon" />
        <h2 className={styles.title}>آیا از حذف این محصول مطمئن هستید؟</h2>
        <button
          className={styles.submitBtn}
          onClick={deleteHandler}
          type="submit"
        >
          حذف
        </button>
        <button
          className={styles.cancelBtn}
          type="button"
          onClick={() => toggleModal("deleteModal")}
        >
          انصراف
        </button>
      </Modal>
    </div>
  );
};

export default DeleteModal;
