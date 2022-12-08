/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import "../Home/HomePage.css";
import "./CreatePost.css";
import { useNavigate, useLocation } from "react-router-dom";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap-v5";
import { map } from "@firebase/util";

const EditPost = () => {
  const nav = useNavigate();
  const [post, setPost] = useState("");
  const [value, setValue] = useState("");
  // const [filevalue, setFileValue] = useState("");
  const location = useLocation();
  const index = location.state.id;
  const redirectHandler = () => {
    nav("/home");
  };

  //   const [posts, setPosts] = useState([{}]);

  useEffect(() => {
    const oldPost = JSON.parse(localStorage.getItem("posts"));
    console.log("inside useEffect data is :", oldPost);
    setPost(() => {
      return oldPost[index];
    });
    setValue(() => {
      return oldPost[index].title;
    });
    localStorage.setItem("posts", JSON.stringify(oldPost));
    // setFileValue((oldArray) => [...oldArray[index].filevalue]);
    console.log("old post data : ", post);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    EditPost(value, post.filevalue);
    setValue("");
    // console.log(posts);
  };

  const deletePostImg = (delIndex) => {
    if (post) {
      // post.filevalue.splice(delIndex, 1);
      setPost((current) => {
        current.filevalue.splice(delIndex, 1);
        return current;
      });
      // localStorage.setItem("posts", JSON.stringify(post));
    }

    console.log("deleted post ", post);

    // setPost((prevState) => prevState.filevalue.splice(delIndex, 1));
  };

  const renderImages = () => {
    console.log("render images working.. : ", post);
    if (post) {
      return (
        <>
          {post.filevalue.map((img, index) => (
            <div className="col-md-12 border border-primary rounded p-3 m-2 d-flex justify-content-between">
              <img
                className="rounded"
                src={img}
                alt="noimage"
                height={50}
                width={50}
              />
              <h3 className="d-inline">Media {index}</h3>
              <i
                className="fa fa-times fa-2x text-danger"
                style={{ cursor: "pointer" }}
                onClick={() => deletePostImg(index)}
              ></i>
            </div>
          ))}
        </>
      );
    }
  };

  // const removeImg

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  const uploadHandler = (e) => {
    const fr = new FileReader();
    fr.onloadend = () =>
      setPost((prevState) => (prevState.filevalue = fr.result));
    fr.readAsDataURL(e.target.files[0]);
    console.log(e.target.files[0]);
  };

  const EditPost = (updatedTitle, updatedFileValue) => {
    const oldPost = JSON.parse(localStorage.getItem("posts"));
    oldPost[index].title = updatedTitle;
    oldPost[index].filevalue = updatedFileValue;
    const newPost = [...oldPost];
    localStorage.setItem("posts", JSON.stringify(newPost));
    // console.log("old and new post here ", oldPost, newPosts);
    nav("/home");
  };

  return (
    <div>
      <Container className="vh-150">
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12} className="p-4 vh-100">
            <Card>
              <Card.Body>
                <div className="card sticky-top border-left-4 border-primary">
                  <div className="row">
                    <div className="col-6 col-sm-6">
                      <h2 className="text-primary font-weight-bold float-start">
                        Edit Post
                      </h2>
                    </div>
                    <div className="col-6 col-sm-6">
                      <p className="float-end">
                        <i
                          class="fa fa-window-close fa-2x"
                          aria-hidden="true"
                          onClick={redirectHandler}
                        ></i>
                      </p>
                    </div>
                  </div>

                  <hr />

                  <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Control
                        placeholder="What's on your mind?"
                        className="create-post border-remove scroll"
                        value={value}
                        as="textarea"
                        rows={2}
                        onChange={handleInputChange}
                      />
                    </Form.Group>
                    <div className="container mt-3 position-sticky">
                      <div className="row d-flex flex-column justify-content-center align-items-center sticky-bottom">
                        {renderImages()}
                      </div>
                    </div>

                    <div className="container mt-3 position-sticky">
                      <div className="row sticky-bottom">
                        <Form.Group className="col-md-6 btn p-1">
                          <label
                            for="file-upload"
                            class="h-100 w-100 fa fa-image fa-2x custom-file-upload btn text-primary  border border-primary border-3 rounded font-weight-bold"
                          >
                            <br />
                            <br />
                            Photo/Video
                          </label>
                          <Form.Control
                            id="file-upload"
                            className="col btn"
                            type="file"
                            onChange={uploadHandler}
                          />
                        </Form.Group>
                        <Form.Group className="col-md-6 btn p-1">
                          <label
                            for="file-upload"
                            class="h-100 w-100 fa fa-camera fa-2x custom-file-upload btn text-primary  border border-primary border-3 rounded"
                          >
                            <br />
                            <br />
                            Camera
                          </label>
                          <Form.Control
                            id="file-upload"
                            className="col btn border border-danger border-3 "
                            type="file"
                            accept="image/*"
                            capture="environment"
                            onChange={uploadHandler}
                          />
                        </Form.Group>
                      </div>
                    </div>
                    <div className="container mt-3">
                      <div className="row">
                        <div className="col">
                          <Button
                            className="btn btn-warning text-white fw-bolder btn-block"
                            type="submit"
                          >
                            UPDATE
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Form>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default EditPost;
