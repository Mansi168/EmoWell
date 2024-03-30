/* eslint-disable react/prop-types */
import BlogItem from './BlogItem/index';
import './styles.css';

const BlogList = ({ blogs }) => {
  return (
    <div className='blogList-wrap'>
      {blogs.map((blog) => (
        // eslint-disable-next-line react/jsx-key
        <BlogItem blog={blog} />
      ))}
    </div>
  );
};

export default BlogList;