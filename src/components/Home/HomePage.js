import React, { useState, useEffect } from "react";
import "./HomePage.css";
import Post from "../Post/Post";

import { useNavigate } from "react-router-dom";
import { Col, Row, Container, Card, Form } from "react-bootstrap-v5";

const HomePage = () => {
  const nav = useNavigate();

  const [postdata, setPostData] = useState([{}]);

  useEffect(() => {
    if (localStorage.getItem("posts") === null) {
      localStorage.setItem(
        "posts",
        JSON.stringify([
          {
            title: "!!..Create Your Post First..!!",
            filevalue:
              "https://www.ncenet.com/wp-content/uploads/2020/04/no-image-png-2.png",
          },
        ])
      );
    }
  }, []);

  useEffect(() => {
    setPostData(() => {
      return JSON.parse(localStorage.getItem("posts"));
    });
  }, [postdata]);

  console.log("postdata", postdata);

  const createPost = () => {
    nav("/create");
  };
  return (
    <div>
      <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            <Card>
              <Card.Body>
                <div className="card sticky-top border-left-4 border-primary">
                  <h2 className="display-4">
                    Tech <sub className="display-2 text-primary bold">X</sub>
                  </h2>
                  <div className="mb-3">
                    <Form>
                      <Form.Group className="m-3" controlId="formBasicEmail">
                        <Form.Control
                          type="text"
                          placeholder="What's on your mind?"
                          className="p-3 text-center border border-primary rounded"
                          onClick={createPost}
                        />
                      </Form.Group>
                      {/* <div className="d-grid">
                        <Button variant="primary" type="submit">
                          Login
                        </Button>
                      </div> */}
                    </Form>
                  </div>
                </div>

                <div className="mt-3">
                  {postdata.map((post, index) => (
                    <Post post={post} index={index} setPostData={setPostData} />
                  ))}
                </div>

                <div className="container sticky-bottom border border-primary border-2 rounded bg bg-white">
                  <div className="row">
                    <div className="col btn btn-lg">
                      <i className="fa fa-home fa-3x " aria-hidden="true"></i>
                    </div>
                    <div className="col btn btn-lg">
                      <i className="fa fa-user fa-3x" aria-hidden="true"></i>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomePage;
