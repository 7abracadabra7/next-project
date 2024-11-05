import Image from "next/image";
import styles from "./ProductCard.module.css";
import { useContext } from "react";
import { ModalContext } from "../../providers/ContextProvider";

const ProductCard = (props) => {
  const { id, name, quantity, price } = props;
  const { toggleModal, setSelectedProduct } = useContext(ModalContext);

  const deleteHandler = (id, name, quantity, price) => {
    const addSelectedProduct = async () =>
      await setSelectedProduct({ id, name, quantity, price });
    addSelectedProduct();
    toggleModal("deleteModal");
  };

  const editHandler = (id, name, quantity, price) => {
    const addSelectedProduct = async () =>
      await setSelectedProduct({ id, name, quantity, price });
    addSelectedProduct();
    toggleModal("editModal");
  };

  return (
    <tr key={id}>
      <td>{name}</td>
      <td>{quantity}</td>
      <td>{price} هزار تومان</td>
      <td>{id}</td>
      <td>
        <Image
          className={styles.deleteBtn}
          src="/trash.png"
          width={20}
          height={20}
          onClick={() => deleteHandler(id, name, quantity, price)}
          alt="icon"
        />
        <Image
          className={styles.editBtn}
          src="/edit.png"
          width={20}
          height={20}
          onClick={() => editHandler(id, name, quantity, price)}
          alt="icon"
        />
      </td>
    </tr>
  );
};

export default ProductCard;
