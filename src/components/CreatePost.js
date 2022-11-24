import React, { useState } from "react";
import "./HomePage.css";
import "./CreatePost.css";
import { useNavigate } from "react-router-dom";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap-v5";

const CreatePost = ({ post, index, addPosts }) => {
    const nav = useNavigate();
    const [value, setValue] = useState("");
    const redirectHandler = () => {
        nav("/home");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!value) return;
        addPosts(value);
        setValue("");
    };

    const handleInputChange = (e) => {
        setValue(e.target.value);
    };

    return (
        <div>
            <Container>
                <Row className="vh-100 d-flex justify-content-center align-items-center">
                    <Col md={8} lg={6} xs={12} className="p-4">
                        <Card>
                            <Card.Body>
                                <div className="card sticky-top border-left-4 border-primary">
                                    <div className="row">
                                        <div className="col-6 col-sm-6">
                                            <h2 className="text-primary font-weight-bold float-start">Create Post</h2>
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
                                                type="text"
                                                placeholder="What's on your mind?"
                                                className="create-post"
                                                value={value}
                                                onChange={handleInputChange}
                                            />
                                        </Form.Group>
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
                                <div className="container mt-3 position-sticky">
                                    <div className="row sticky-bottom">
                                        <div className="col btn border border-primary border-3">
                                            <i class="fa fa-image fa-3x p-2 text-primary" aria-hidden="true"></i>
                                            <p className="text-primary">Photo/Video</p>
                                        </div>
                                        <div className="col btn border border-primary border-3">
                                            <i class="fa fa-camera fa-3x p-2 text-primary" aria-hidden="true"></i>
                                            <p className="text-primary">Camera</p>
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

export default CreatePost;
