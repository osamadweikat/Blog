import "./post-details.css";
import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { posts } from "../../dummyData";

const PostDetails = () => {
  const { id } = useParams();
  const post = posts.find((p) => p._id === +id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="post-details">
      <div className="post-details-image-wrapper">
        <img src={post.image} alt="" className="post-details-image" />
        <form className="update-post-image-form">
          <label htmlFor="file" className="update-post-label">
            <i className="bi bi-image-fill"></i>
            Select new image
          </label>
          <input type="file" name="file" id="file" />
          <button type="submit">Upload</button>
        </form>
      </div>
      <h1 className="post-details-title">{post.title}</h1>
      <div className="post-details-user-info">
        <img src={post.user.image} alt="" className="post-details-user-image" />
        <div className="post-details-user">
          <strong>
            <Link to="/profile/1">{post.user.username}</Link>
          </strong>
          <span>{post.createdAt}</span>
        </div>
      </div>
      <p className="post-details-description">
        {post.description} ... Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Incidunt quis a omnis aut sit earum atque eveniet
        ratione sint animi illo id accusamus obcaecati dolore voluptatibus
        aperiam qui, provident fuga? Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Quibusdam neque odit soluta? Fugiat, dolores!
        Laboriosam rem quod, explicabo similique aliquam unde sed vel
        distinctio, fugiat ab aperiam odio nesciunt quas?
      </p>
      <div className="post-details-icon-wrapper">
        <div>
          <i className="bi bi-hand-thumbs-up"></i>
          <small>{post.likes.length} likes</small>
        </div>
        <div>
          <i className="bi bi-pencil-square"></i>
          <i className="bi bi-trash-fill"></i>
        </div>
      </div>
    </section>
  );
};

export default PostDetails;
