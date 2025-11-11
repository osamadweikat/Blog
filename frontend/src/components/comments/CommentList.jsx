import "./comment-list.css";

const CommentList = () => {
  return (
    <div className="comment-list">
      <h4 className="comment-list-count">2 Comments</h4>
      {[1, 2].map((comment) => (
        <div key={comment} className="comment-item">
          <div className="comment-item-info">
            <div className="comment-item-user-info">
              <img
                src="/images/user-avatar.png"
                alt=""
                className="comment-item-user-photo"
              />
              <span className="comment-item-username">Youssef Abbas</span>
            </div>
            <div className="comment-item-time">4 hours ago</div>
          </div>
          <p className="comment-item-text">this is so great</p>
          <div className="comment-item-icon-wrapper">
            <i className="bi bi-pencil-square"></i>
            <i className="bi bi-trash-fill"></i>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CommentList;
