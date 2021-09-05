import React from "react";
import ImageUpload from "./imageUpload";
import Dashbord from "./Dashboard";
import Example from "./example";

export default function Index() {
  return (
    <div className="activeProducts">
      <div className="container">
        {/* Create new */}
        {/* <ImageUpload /> */}
        {/* <Dashbord /> */}
        <Example />
      </div>
    </div>
  );
}
