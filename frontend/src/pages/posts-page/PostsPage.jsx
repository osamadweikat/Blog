import "./posts-page.css";
import PostList from "../../components/posts/PostList";
import Sidebar from "../../components/sidebar/Sidebar";
import { posts, categories } from "../../dummyData";
import Pagination from "../../components/pagination/Pagination";

const PostsPage = () => {
  return (
    <>
      <section className="posts-page">
        <PostList posts={posts} />
        <Sidebar categories={categories} />
      </section>
      <Pagination />
    </>
  );
};

export default PostsPage;
