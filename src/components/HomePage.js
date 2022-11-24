import React from "react";
import "./HomePage.css";
import Post from "./Post";

import { useNavigate } from "react-router-dom";
import { Col, Row, Container, Card, Form } from "react-bootstrap-v5";

const HomePage = ({ post, index, addPosts }) => {
    const nav = useNavigate();
    const createPost = () => {
        nav("/create");
    };
    return (
        <div>
            <Container>
                <Row className="vh-100 d-flex justify-content-center align-items-center">
                    <Col md={8} lg={6} xs={12} className="p-4">
                        <Card>
                            <Card.Body>
                                <div className="card sticky-top border-left-4 border-primary">
                                    <h2 className="display-4">
                                        Tech <sub className="display-2 text-primary">X</sub>
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
                                    <Post post={post} index={index} addPosts={addPosts} />
                                    <Post post={post} index={index} addPosts={addPosts} />
                                </div>

                                <div className="container sticky-bottom border border-primary border-2 rounded bg bg-white">
                                    <div className="row">
                                        <div className="col btn btn-lg">
                                            <i class="fa fa-home fa-3x " aria-hidden="true"></i>
                                        </div>
                                        <div className="col btn btn-lg">
                                            <i class="fa fa-user fa-3x" aria-hidden="true"></i>
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
