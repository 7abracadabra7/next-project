import Image from "next/image";
import styles from "./searchItems.module.css";
import { useRef, useEffect } from "react";

const SearchItems = ({ setSearchItem, searchItem }) => {
  const inputRef = useRef(null);
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [searchItem]);

  const searchHandler = (e) => {
    e.preventDefault();
    const search = e.target.value;
    setSearchItem(search);
  };
  return (
    <div className={styles.searchBox}>
      <Image
        width={25}
        height={25}
        className={styles.searchIcon}
        src="/search.png"
      />
      <input
        type="text"
        placeholder="جستجوی کالا"
        onChange={searchHandler}
        ref={inputRef}
        value={searchItem}
      />
      <div className={styles.userInfo}>
        <Image width={40} height={40} src="/profile.png" />
        <p>میلاد عظمی</p>
      </div>
    </div>
  );
};

export default SearchItems;
