
import ProductCard from "../modules/ProductCard";
import styles from "./ProductTable.module.css";

const ProductsTable = ({ data, isLoading, isError }) => {
  return (
    <div className={styles.container}>
      <table className={styles.productTable}>
        <thead>
          <tr>
            <th>نام کالا</th>
            <th>موجودی</th>
            <th>قیمت</th>
            <th>شناسه کالا</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductsTable;
