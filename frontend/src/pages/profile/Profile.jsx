import "./profile.css";
import { useEffect, useState } from "react";
import PostList from "../../components/posts/PostList";
import { posts } from "../../dummyData";
import { toast } from "react-toastify";
import swal from "sweetalert";

const Profile = () => {
  const [file, setFile] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (!file) return toast.warning("There is no file!");

    console.log("image uploaded");
  };

  const deleteAccountHandler = () => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover your account!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("Account has been deleted!", {
          icon: "success",
        });
      } else {
        swal("Something went wrong!");
      }
    });
  };

  return (
    <section className="profile">
      <div className="profile-header">
        <div className="profile-image-wrapper">
          <img
            src={file ? URL.createObjectURL(file) : "/images/user-avatar.png"}
            alt=""
            className="profile-image"
          />
          <form onSubmit={formSubmitHandler}>
            <abbr title="Choose profile photo">
              <label
                htmlFor="file"
                className="bi bi-camera-fill upload-profile-photo-icon"
              ></label>
            </abbr>
            <input
              type="file"
              name="file"
              id="file"
              style={{ display: "none" }}
              onChange={(e) => setFile(e.target.files[0])}
            />
            <button type="submit" className="upload-profile-photo-btn">
              upload
            </button>
          </form>
        </div>
        <h1 className="profile-username">Osama Dweikat</h1>
        <p className="profile-bio">
          Hello my name is Osama I am a Full Stack developer.
        </p>
        <div className="user-date-joined">
          <strong>Date Joined: </strong>
          <span>Tue Nov 11 2025</span>
        </div>
        <button className="profile-update-btn">
          <i className="bi bi-file-person-fill"></i>
          Update Profile
        </button>
      </div>
      <div className="profile-posts-list">
        <h2 className="profile-posts-list-title">Osama Posts</h2>
        <PostList posts={posts} />
      </div>
      <button onClick={deleteAccountHandler} className="delete-account-btn">
        Delete Your Account
      </button>
    </section>
  );
};

export default Profile;
