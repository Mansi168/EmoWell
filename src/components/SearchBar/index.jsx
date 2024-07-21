import './styles.css';
import { BsSearch } from "react-icons/bs";
// eslint-disable-next-line react/prop-types
const SearchBar = ({ formSubmit, value, handleSearchKey, clearSearch }) => (
  <div className='searchBar-wrap'>
    <form onSubmit={formSubmit}>
      <input
        type='text'
        placeholder='Search By Category'
        value={value}
        onChange={handleSearchKey}
      />
      {value && <span onClick={clearSearch}>X</span>}
      <button><BsSearch fontSize={20}/></button>
    </form>
  </div>
);

export default SearchBar;