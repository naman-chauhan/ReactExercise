import React from "react";
import { useNavigate } from "react-router-dom";
import "./CreatePost.css";
import { Button } from "react-bootstrap-v5";

const PostItem = ({ title, indexdel, setPostDataItem }) => {
  var local = JSON.parse(localStorage.getItem("response") || "");
  const nav = useNavigate();
  // useEffect(() => {

  // }, []);

  function deletePost(e) {
    const items = JSON.parse(localStorage.getItem("posts"));
    const deletedPost = [...items];
    console.log("deletedPost : ", deletedPost);
    deletedPost.splice(indexdel, 1);
    localStorage.setItem("posts", JSON.stringify(deletedPost));
    setPostDataItem(() => {
      return JSON.parse(localStorage.getItem("posts"));
    });
  }

  const editPost = () => {
    nav("/edit", { state: { id: indexdel } });
    console.log("index in postItem : ", indexdel);
  };

  return (
    <div>
      <div className="container-fluid pd-5">
        <div className="row d-flex align-items-center justify-content-center">
          <div className="card">
            <div className="d-flex justify-content-between p-2 px-3">
              <div className="d-flex flex-row align-items-center">
                <img
                  src={local.imageUrl}
                  width="50"
                  alt="imag"
                  className="rounded-circle"
                />
                <div className="d-flex flex-column m-2">
                  <span className="font-weight-bold">{local.name}</span>
                  <small>2 Hours Ago</small>
                </div>
              </div>
              <div className="d-flex flex-row mt-1 ellipsis">
                <Button onClick={deletePost} className="bg-danger">
                  <i className="fa fa-trash fa-2x"></i>
                </Button>
                &nbsp;
                <Button className="bg-primary" onClick={editPost}>
                  <i className="fa fa-edit fa-2x"></i>
                </Button>
              </div>
            </div>
            <div className="p-2">
              <p className="text-justify">{title.title}.</p>
            </div>
            <img src={title.filevalue} alt="img" height="auto" width="100" />
            <hr />
            <div className="d-flex justify-content-between align-items-center">
              <div className="border-right-2">
                <i className="fa fa-heart fa-2x"></i>
              </div>
              <div>
                <i className="fa fa-smile fa-2x"></i>
              </div>
              <div>
                <i className="fa fa-thumbs-up fa-2x"></i>
              </div>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
