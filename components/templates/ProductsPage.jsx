//========================================
import Image from "next/image";
import { useState, useContext, useEffect } from "react";
import { useRouter } from "next/router";
//============== Styles =======================
import styles from "./ProductsPage.module.css";
//============== Components ===================
import SearchItems from "../modules/SearchItems";
import ProductsTable from "../templates/ProductsTable";
import AddModal from "../modules/AddModal";
import EditModal from "../modules/EditModal";
import DeleteModal from "../modules/DeleteModal";
//===================== Others ==========================
import { useFetchProducts } from "../../services/query";
import { ModalContext } from "../../providers/ContextProvider";
import { api } from "../../services/config";

const ProductsPage = () => {
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
  data && console.log(data.data);



  return (
    <div>
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
          {data && (
            <ProductsTable
              data={data.data}
              isLoading={isLoading}
              isError={isError}
            />
          )}
        </div>
        <button
          className={pageNumber == 1 ? styles.disableBtn : styles.button}
          onClick={() => setPageNumber((page) => page - 1)}
        >
          قبل
        </button>
        <span>{pageNumber}</span>
        {data && (
          <button
            className={
              pageNumber == data.totalPages ? styles.disableBtn : styles.button
            }
            onClick={() => setPageNumber((page) => page + 1)}
          >
            بعد
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;
