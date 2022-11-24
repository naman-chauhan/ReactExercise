import React from "react";
import "./CreatePost.css";
const PostItem = (props) => {
    var local = JSON.parse(localStorage.getItem("response") || "");
    return (
        <div>
            <div className="container-fluid pd-5">
                <div className="row d-flex align-items-center justify-content-center">
                    <div className="card">
                        <div className="d-flex justify-content-between p-2 px-3">
                            <div className="d-flex flex-row align-items-center">
                                <img src={local.imageUrl} width="50" alt="imag" className="rounded-circle" />
                                <div className="d-flex flex-column m-2">
                                    <span className="font-weight-bold">{local.name}</span>
                                    <small>2 Hours Ago</small>
                                </div>
                            </div>
                            <div className="d-flex flex-row mt-1 ellipsis">
                                <i className="fa fa-ellipsis-h"></i>
                            </div>
                        </div>
                        <div className="p-2">
                            <p className="text-justify">props.title1</p>
                        </div>
                        <img src="https://i.imgur.com/xhzhaGA.jpg" alt="img" className="img-fluid" />
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
