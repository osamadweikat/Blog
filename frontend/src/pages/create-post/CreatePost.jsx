import "./create-post.css";

const CreatePost = () => {
  return (
    <section className="create-post">
      <h1 className="create-post-title">Create New Post</h1>
      <form className="create-post-form">
        <input
          type="text"
          placeholder="Post Title"
          className="create-post-input"
        />
        <select className="create-post-input">
          <option disabled value="">
            Select A Category
          </option>
          <option value="music">music</option>
          <option value="travelling">travelling</option>
        </select>
        <textarea
          className="create-post-textarea"
          placeholder="Post Description"
          rows="5"
        ></textarea>
        <input
          className="create-post-upload"
          type="file"
          name="file"
          id="file"
        />
        <button type="submit" className="create-post-btn">
          Create
        </button>
      </form>
    </section>
  );
};

export default CreatePost;
