import { ReactComponent as SearchIcon } from "assets/icon-search.svg";

import styles from "./Search.module.scss";
import { Button } from "components/Button";
import { useRef } from "react";

interface SearchProps {
  hasError: boolean;
  onSubmit: (text: string) => void;
}

type FormFields = {
  username: HTMLInputElement;
};

export const Search = ({ hasError, onSubmit }: SearchProps) => {
  const searchRef = useRef<HTMLInputElement | null>(null);

  const handleSubbmit = (event: React.FormEvent<HTMLFormElement & FormFields>) => {
    event.preventDefault();

    // console.log(event.currentTarget.username.value);
    // console.log(event.currentTarget);
    const text = searchRef.current?.value ? searchRef.current?.value : "";
    onSubmit(text);
    if (searchRef.current) searchRef.current.value = "";
  };

  return (
    <form onSubmit={handleSubbmit} autoComplete="off">
      <div className={styles.search}>
        <label className={styles.label} htmlFor="search">
          <SearchIcon />
        </label>
        <input
          type="text"
          className={styles.textField}
          id="search"
          placeholder="Search GitHub username..."
          name="username"
          ref={searchRef}
        />
        {hasError && <div className={styles.error}>No result</div>}
        <Button>Search</Button>
      </div>
    </form>
  );
};
