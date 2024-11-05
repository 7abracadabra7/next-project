import SearchItems from "../components/modules/SearchItems";
import ProductsTable from "../components/templates/ProductsTable";
import styles from "../styles/main.module.css";
import Image from "next/image";
import { useState } from "react";
import AddModal from "../components/modules/AddModal";
import EditModal from "../components/modules/EditModal";
import DeleteModal from "../components/modules/DeleteModal";
import { useContext } from "react";
import { useFetchProducts } from "../services/query";
import { ModalContext } from "../providers/ContextProvider";

export default function Home() {
  //======================= Modal ========================
  const { toggleModal, modalStates } = useContext(ModalContext);
  const [pageNumber, setPageNumber] = useState(1);
  const [searchItem, setSearchItem] = useState("");

  //======================= Fetching Data ===================

  const { data, isLoading, isError, isPending, error } = useFetchProducts(
    pageNumber,
    searchItem
  );

  if (isPending) return <p>Loading...</p>;

  if (error) return <p>Something went wrong!</p>;
  console.log(data.data);

  //==========================================================

  return (
    <>
      <div className={styles.main}>
        <div className={styles.container}>
          <SearchItems setSearchItem={setSearchItem} searchItem={searchItem} />

          <div className={styles.productManagement}>
            <div className={styles.title}>
              <Image src="/setting-3.png" width={30} height={40} />

              <h2>مدیریت کالا</h2>
            </div>
            <button
              onClick={() => toggleModal("addModal")}
              className={styles.addProductBtn}
            >
              افزودن محصول
            </button>
          </div>
          {modalStates.addModal && <AddModal />}
          {modalStates.editModal && <EditModal />}
          {modalStates.deleteModal && <DeleteModal />}
          <ProductsTable           data={data.data}
          isLoading={isLoading}
          isError={isError}/>
        </div>
        <button
        className={pageNumber == 1 ? styles.disableBtn : styles.button}
        onClick={() => setPageNumber((page) => page - 1)}
      >
        قبل
      </button>
      <span>{pageNumber}</span>
      <button
        className={
          pageNumber == data.totalPages ? styles.disableBtn : styles.button
        }
        onClick={() => setPageNumber((page) => page + 1)}
      >
        بعد
      </button>
      </div>
    </>
  );
}
