import Image from "next/image";
import styles from "./searchItems.module.css";

const SearchItems = () => {
  return (
    <div className={styles.searchBox}>
      <Image
        width={25}
        height={25}
        className={styles.searchIcon}
        src="/search.png"
      />
      <input type="text" placeholder="جستجوی کالا" />
      <div className={styles.userInfo}>
        <Image width={50} height={50} src="/profile.png" />
        <p>میلاد عظمی</p>
      </div>
    </div>
  );
};

export default SearchItems;
