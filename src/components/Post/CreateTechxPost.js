import React, { useEffect, useState, useRef, useCallback } from "react";
import Webcam from "react-webcam/dist/react-webcam";
import "./CreatePost.css";
import { useNavigate, useLocation } from "react-router-dom";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap-v5";
import FilePreview from "./FilePreview";

const CreateTechxPost = () => {
  var local = JSON.parse(localStorage.getItem("response") || "");
  var isWebCam = false;
  const nav = useNavigate();
  const [value, setValue] = useState("");
  const [view, setView] = useState("");
  const [post, setPost] = useState("");
  const [valueAdd, setValueAdd] = useState("");
  const location = useLocation();
  let IsEdit = location.state;
  //   let IsCreate = location.state.allowEdit;
  const [filevalues, setFileValues] = useState([]);
  const [filepreviews, setFilePreviews] = useState([]);
  const [webPicture, setWebPicture] = useState("");
  const WebcamComponent = () => <Webcam />;
  const videoConstraints = {
    width: 400,
    height: 400,
    facingMode: "user",
  };
  const webcamRef = useRef(null);
  const capture = useCallback(() => {
    const pictureSrc = webcamRef.current.getScreenshot();
    setFileValues((prevState) => [...prevState, pictureSrc]);
    nav("/create", { state: { id: null, allowEdit: true, isWebCam: false } });
  });

  const redirectHandler = () => {
    console.log("IsEdit : ", IsEdit);
    nav("/home");
  };

  const isToggleWeb = () => {
    nav("/create", { state: { id: null, allowEdit: true, isWebCam: true } });
    return 0;
  };

  const oldPost = JSON.parse(localStorage.getItem("posts"));
  useEffect(() => {
    setView(() => {
      return oldPost[IsEdit.id];
    });
    setPost(() => {
      return oldPost[IsEdit.id];
    });
    if (IsEdit.id !== null && IsEdit.allowEdit === true) {
      setValue(() => {
        return oldPost ? oldPost[IsEdit.id].title : "";
      });
    }
    if (IsEdit.id !== null && IsEdit.allowEdit === true) {
      setFileValues(() => {
        return oldPost ? oldPost[IsEdit.id].filevalue : "";
      });
    }
    console.log("filevalue : ", filevalues);
  }, []);

  //   const [posts, setPosts] = useState([{}]);

  //   useEffect(() => {
  //     localStorage.setItem("posts", JSON.stringify(posts));
  //     console.log("new note call:", posts);
  //   }, [posts]);

  const handleSubmitAdd = (e) => {
    e.preventDefault();
    if (!valueAdd) return;
    addPosts(valueAdd, filevalues);
    setValueAdd("");
    // console.log(posts);
  };

  const handleSubmitEdit = (e) => {
    e.preventDefault();
    if (!value) return;
    EditPost(value, filevalues);
    setValue("");
    console.log("post value : ", post);
  };

  const renderImages = () => {
    console.log("render images working.. : ", filevalues);
    if (filevalues) {
      return (
        <>
          {filevalues.map((img, index) => (
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

  const IsFileValue = (post) => {
    console.log("post item log : ");
    if (post) {
      return (
        <div className="col d-flex flex-column justify-content-center align-items-center">
          {/* console.log("file mul 1: ", fileVal); */}
          {post.filevalue.map((fileVal, index) => {
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
    }
  };

  const handleInputChangeEdit = (e) => {
    setValue(e.target.value);
    console.log("old view :", view);
  };

  const handleInputChangeAdd = (e) => {
    setValueAdd(e.target.value);
  };

  const uploadHandlerAdd = async (e) => {
    setFilePreviews(URL.createObjectURL(e.target.files[0]));
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    setFileValues((prevState) => [...prevState, base64]);
    console.log("file value of upload handler : ", filevalues);
  };

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  // const uploadHandlerEdit = (e) => {
  //   const fr = new FileReader();
  //   fr.onloadend = () => setFileValue((oldArray) => [...oldArray, fr.result]);
  //   fr.readAsDataURL(e.target.files[0]);
  //   console.log("upload edit", e.target.files[0]);
  // };

  const addPosts = (title, filevalue) => {
    console.log("Add posts called");
    if (localStorage.getItem("posts") === null) {
      localStorage.setItem("posts", JSON.stringify([{ title, filevalue }]));
    } else {
      const oldPost = JSON.parse(localStorage.getItem("posts"));
      const newPosts = [...oldPost, { title, filevalue }];
      console.log("old and new post here ", oldPost, newPosts);
      console.log("title : ", title);
      localStorage.setItem("posts", JSON.stringify(newPosts));
    }
    nav("/home");
  };

  const EditPost = (updatedTitle, updatedFileValue) => {
    const oldPost = JSON.parse(localStorage.getItem("posts"));
    oldPost[IsEdit.id].title = updatedTitle;
    // const fileArr = [...updatedFileValue, ...updatedEditFileValue];
    oldPost[IsEdit.id].filevalue = updatedFileValue;
    console.log("updatedFileValue : ", updatedFileValue);
    localStorage.setItem("posts", JSON.stringify(oldPost));
    // console.log("old and new post here ", oldPost, newPosts);
    nav("/home");
  };

  const goBackHome = () => {
    nav("/home");
  };

  const deletePostImg = (delIndex) => {
    const deletedPost = [...oldPost];
    deletedPost[IsEdit.id].filevalue.splice(delIndex, 1);
    localStorage.setItem("posts", JSON.stringify(deletedPost));
    setFileValues(() => {
      return deletedPost[IsEdit.id].filevalue;
    });
    console.log("delIndex : ", delIndex);
  };

  if (IsEdit.id === null && IsEdit.allowEdit === true) {
    return (
      <div>
        <Container className="vh-100">
          <Row className="vh-100 d-flex justify-content-center align-items-center">
            <Col md={8} lg={6} xs={12} className="p-4 vh-100">
              <Card>
                <Card.Body>
                  <div className="card sticky-top border-left-4 border-primary">
                    <div className="row">
                      <div className="col-6 col-sm-6">
                        <h2 className="text-primary font-weight-bold float-start">
                          Create Post
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

                    <Form onSubmit={handleSubmitAdd}>
                      <Form.Group controlId="formBasicEmail">
                        {IsEdit.isWebCam === false ? (
                          <Form.Control
                            placeholder="What's on your mind?"
                            className="create-post border-remove scroll"
                            value={valueAdd ? valueAdd : ""}
                            as="textarea"
                            autoFocus
                            rows={2}
                            onChange={handleInputChangeAdd}
                          />
                        ) : (
                          <Container>
                            <Row>
                              <Webcam
                                audio={false}
                                class="col-sm-12"
                                height={400}
                                ref={webcamRef}
                                width={450}
                                screenshotFormat="image/jpeg"
                                videoConstraints={videoConstraints}
                              />
                              <Col
                                sm={12}
                                className="p-2 d-flex justify-content-around align-items-center"
                              >
                                <Button
                                  className="text-success bg-white border border-success border-3 rounded font-weight-bold"
                                  onClick={capture}
                                >
                                  Send
                                </Button>
                                <Button
                                  className="text-danger bg-white border border-danger border-3 rounded font-weight-bold"
                                  onClick={() => {
                                    nav("/create", {
                                      state: {
                                        id: null,
                                        allowEdit: true,
                                        isWebCam: false,
                                      },
                                    });
                                  }}
                                >
                                  Cancel
                                </Button>
                              </Col>
                            </Row>
                          </Container>
                        )}
                      </Form.Group>

                      <div
                        className="container mt-3 .-sticky"
                        style={{
                          display: filepreviews.length === 0 ? "none" : "",
                        }}
                      >
                        <FilePreview filepreview={filepreviews} />
                      </div>

                      <div className="container mt-3 position-sticky">
                        <div className="row sticky-bottom">
                          <Form.Group className="col-md-6 btn p-1">
                            <label
                              htmlFor="file-upload"
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
                              // disabled={file.length === 3}
                              onChange={uploadHandlerAdd}
                            />
                          </Form.Group>
                          <Form.Group className="col-md-6 btn p-1">
                            <label
                              htmlFor="file-upload-web"
                              class="h-100 w-100 fa fa-image fa-2x custom-file-upload btn text-primary  border border-primary border-3 rounded font-weight-bold"
                            >
                              <br />
                              <br />
                              Camera
                            </label>
                            <Form.Control
                              id="file-upload-web"
                              className="col btn"
                              type="button"
                              // disabled={file.length === 3}
                              onClick={isToggleWeb}
                            />
                          </Form.Group>
                        </div>
                      </div>

                      <div className="container mt-3">
                        <div className="row">
                          <div className="col">
                            <Button
                              className="btn btn-primary text-white fw-bolder btn-block"
                              type="submit"
                            >
                              POST
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
  } else if (IsEdit.id !== null && IsEdit.allowEdit === true) {
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

                    <Form onSubmit={handleSubmitEdit}>
                      <Form.Group controlId="formBasicEmail">
                        <Form.Control
                          placeholder="What's on your mind?"
                          className="create-post border-remove scroll"
                          value={value ? value : ""}
                          as="textarea"
                          rows={2}
                          onChange={handleInputChangeEdit}
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
                              onChange={uploadHandlerAdd}
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
                              onChange={uploadHandlerAdd}
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
  } else if (IsEdit.id !== null && IsEdit.allowEdit === false) {
    if (
      localStorage.getItem("posts") !== null &&
      JSON.parse(localStorage.getItem("posts")).length > 0
    ) {
      return (
        <Container>
          <Row className="vh-100 d-flex justify-content-center align-items-center">
            <Col md={8} lg={6} xs={12}>
              <Card>
                <Card.Body>
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
                            <span className="font-weight-bold">
                              {local.name}
                            </span>
                            <br />
                            <small>2 Hours Ago</small>
                          </div>
                          <div className="col-6 col-sm-6">
                            <p className="float-end">
                              <i
                                class="fa fa-window-close fa-2x"
                                aria-hidden="true"
                                onClick={goBackHome}
                              ></i>
                            </p>
                          </div>
                        </div>
                        <hr />
                        <div className="p-2">
                          <p className="text-justify">
                            {post ? post.title : ""}
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
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      );
    }
  }
};

export default CreateTechxPost;
