/** @jsxImportSource @emotion/react */
import { IoSearch } from "react-icons/io5";
import * as s from "./styles";

function Header() {
  return (
    <div>
      <div css={s.container}>
        <input css={s.searchInput} type="text" />
        <button css={s.searchButton}>
          <IoSearch />
        </button>
      </div>

      <div>
        <input type="radio" id="all" name="filter"/>
        <label htmlFor="all">전체</label>
        <input type="radio" id="complete"/>
        <label htmlFor="complete">완료</label>
        <input type="radio" id="all" name="filter"/>
        <label htmlFor="incomplete">미완료</label>
      </div>
    </div>
  );
}

export default Header;
