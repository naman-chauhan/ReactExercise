import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./CreatePost.css";
import { Col, Row, Container, Card, Form, Button } from "react-bootstrap-v5";

const PostItem = ({ title, indexdel, setPostDataItem }) => {
  var local = JSON.parse(localStorage.getItem("response") || "");
  const [post, setPost] = useState("");
  const nav = useNavigate();

  useEffect(() => {
    const oldPost = JSON.parse(localStorage.getItem("posts"));
    setPost(() => {
      return oldPost[1];
    });
    console.log("old post :", post);
  }, []);

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
  const viewPost = () => {
    nav("/create", { state: { id: indexdel, allowEdit: false } });
  };

  const editPost = (e) => {
    e.stopPropagation();
    nav("/create", { state: { id: indexdel, allowEdit: true } });
    console.log("index in postItem : ", indexdel);
  };

  const IsFileValue = (post) => {
    console.log("post item log : ");
    if (post.filevalue) {
      const fileMul = post.filevalue;
      return (
        <div className="col d-flex flex-column justify-content-center align-items-center">
          {/* console.log("file mul 1: ", fileVal); */}
          {fileMul.map((fileVal, index) => {
            return (
              <img
                className="p-1 img-rounded"
                style={{ borderRadius: "30% !important" }}
                src={post.filevalue[index]}
                // src={title.filevalue ? title.filevalue[0] : ""}
                alt="img"
                height={250}
                width={450}
              />
            );
          })}
        </div>
      );
    } else {
      return (
        <>
          <img src="https://www.ncenet.com/wp-content/uploads/2020/04/no-image-png-2.png" />
        </>
      );
    }
  };

  return (
    <Container>
      <Row className="vh-100 d-flex justify-content-center align-items-center">
        <Col md={8} lg={6} xs={12}>
          <Card>
            <Card.Body>
              <div onClick={viewPost}>
                <div className="container-fluid ">
                  <div className="row d-flex align-items-center justify-content-center">
                    <div className="card">
                      <div className="d-flex justify-content-between">
                        <div className="col-2 col-sm-2">
                          <img
                            src={local.imageUrl}
                            width="50"
                            alt="imag"
                            className="rounded-circle"
                          />
                        </div>
                        <div className="col-6 col-sm-6">
                          <span className="font-weight-bold">{local.name}</span>
                          <br />
                          <small>2 Hours Ago</small>
                        </div>
                        <div className="col-6 col-sm-6">
                          <p className="float-end">
                            <i
                              class="fa fa-window-close fa-2x"
                              aria-hidden="true"
                            ></i>
                          </p>
                        </div>
                      </div>
                      <hr />
                      <div className="p-2">
                        <p className="text-justify">
                          This HTML file is a template. If you open it directly
                          in the browser, you will see an empty page. You can
                          add webfonts, meta tags, or analytics to this file.
                          The build step will place the bundled scripts into the
                          tag. To begin the development, run `npm start` or
                          `yarn start`. To create a production bundle, use `npm
                          run build` or `yarn build`.
                        </p>
                      </div>
                      <div className="cotainer">
                        <div className="row d-flex justify-content-center align-items-center">
                          {IsFileValue(post)}
                        </div>
                      </div>
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
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default PostItem;
