import SearchItems from "../components/modules/SearchItems";
import ProductsTable from "../components/templates/ProductsTable";
import styles from "../styles/main.module.css";

export default function Home() {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.container}>
          <SearchItems />

          <div className={styles.productManagement}>
            <div className={styles.title}>
              {/* <img src={setting3} alt="icon" /> */}
              <h2>مدیریت کالا</h2>
            </div>
            <button className={styles.addProductBtn}>افزودن محصول</button>
          </div>
          <ProductsTable />
        </div>
      </div>
    </>
  );
}
