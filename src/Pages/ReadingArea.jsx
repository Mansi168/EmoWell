import {useState} from 'react'
import Navbar from '../components/Navbar/Navbar'
import SearchBar from '../components/SearchBar/index'
import BlogList from '../components/BlogList/index'
import { blogList } from '../config/data'
import EmptyList from '../components//EmptyList/index'
import Footer from "../components/Footer/Footer";
const ReadingArea = () => {
  const [blogs, setBlogs] = useState(blogList);
  const [searchKey, setSearchKey] = useState('');

  // Search Submit
  const handleSearchSubmit = event => {
    event.preventDefault();
    handleSearchResult();
  }

  // Search Key
  const handleSearchResult = () => {
    const allBlogs = blogList;
    const filteredBlogs = allBlogs.filter(blog => 
      blog.category.toLowerCase().includes(searchKey.toLowerCase().trim())
    );
  
    setBlogs(filteredBlogs);
  };

  // Clear Search
  const handleClearSearch = () => {
    setBlogs(blogList);
    setSearchKey('');
  }

  return (
    <div>
      {/* Page Header */}
      <Navbar />

      {/* Search Bar */}
      <SearchBar 
        value={searchKey} 
        clearSearch={handleClearSearch}
        formSubmit={handleSearchSubmit} 
        handleSearchKey={(e)=>setSearchKey(e.target.value)}
      />

      {/* Blog List */}
      {!blogs.length?<EmptyList/>:<BlogList blogs={blogs}/>}
      <Footer/> 
    </div>
  )
}

export default ReadingArea;