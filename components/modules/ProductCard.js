import Image from "next/image";
import styles from "./ProductCard.module.css";

const ProductCard = (props) => {
  const { id, name, quantity, price } = props;
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
          alt="icon"
        />
        <Image
          className={styles.editBtn}
          src="/edit.png"
          width={20}
          height={20}
          alt="icon"
        />
      </td>
    </tr>
  );
};

export default ProductCard;
