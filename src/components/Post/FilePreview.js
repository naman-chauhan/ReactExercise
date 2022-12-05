import React from "react";

const FilePreview = ({ filepreview }) => {
  var cnt = 0;
  return (
    <div className="row sticky-bottom p-1">
      <div className="col-md-6 border border-primary p-1">
        <img src={filepreview} alt="noimage" height={50} width={50} />
        &nbsp;&nbsp;
        <h3 className="d-inline">Media {cnt}</h3>&nbsp;&nbsp;
        <i className="fa fa-trash fa-2x text-danger"></i>
      </div>
      {console.log("Inside file preview return", filepreview)}
    </div>
  );
};

export default FilePreview;
