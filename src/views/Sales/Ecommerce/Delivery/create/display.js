import React, { useEffect, useState } from "react";
import { useSelector, connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { saveCSS } from "../../../../../_action/saveCss";
import parse, { attributesToProps, domToReact } from "html-react-parser";
import Style from "style-it";
import { Button } from "@material-ui/core";
// import Shopping from "../../../../../css/images/shoppingCart.png";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import FormPop from "./formPop";
import $ from "jquery";
import firebaseDb from "./firebase";
// import { Helmet } from "react-helmet";
// import menuBtnImg from "./templates/fifthTemplate/w3images/menu-btn.png";
// import ShoppingCart from "./templates/fifthTemplate/w3images/shoppingCart.png";

function Display(props) {
  const saveCss = useSelector((state) => state.saveCss);
  const [done, setDone] = useState(false);
  const [open, setOpen] = useState(false);
  const [html, setHtml] = useState("");
  const [css, setCss] = useState(null);

  useEffect(() => {
    var urlRef = firebaseDb.child("templates").child("companyName");
    urlRef.once("value", function (snapshot) {
      snapshot.forEach(function (child) {
        // console.log(child.key, ":", child.val());
        if (child.key === "html") {
          setHtml(child.val());
        } else {
          setCss(child.val());
        }
        // setSave(true);
        // setOpen(false);
      });
    });
  });

  // useEffect(() => {
  const cartId = document.getElementById("cart");
  $(document).ready(function () {
    $(cartId).click(function (e) {
      setOpen(true);
      console.log("daniel");
    });
  });
  // }, []);

  const handleClose = () => {
    setOpen(false);
  };

  // console.log(open);

  return Style.it(
    css,
    <div>
      {open ? <FormPop open={open} handleClose={handleClose} /> : ""}
      <div>
        <div>
          {/* <div dangerouslySetInnerHTML={{ __html: html }} /> */}
          <div>{parse(html)}</div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(connect(null, { saveCSS })(Display));
