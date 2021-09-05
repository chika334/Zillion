import React, { useRef, useEffect, useState } from "react";
import { Container } from "@material-ui/core";
// import Design from "./design";
import EmailEditor from "react-email-editor";
import { JsonTable } from "react-json-to-html";

export default function Company(props) {
  const [values, setValues] = useState("");
  let ref = useRef(null);
  console.log(props);

  localStorage.setItem("zillion", props.location.state);

  const onLoad = () => {
    // you can load your template here;
    if (ref.current) {
      // const templateJson = {};
      ref.current.editor.loadDesign(props.location.state);
    }
  };

  useEffect(() => {
    const data = props.location.state.replace(
      /\<(\?xml|(\!DOCTYPE[^\>\[]+(\[[^\]]+)?))+[^>]+\>/g,
      ""
    );
    setValues(data);
    console.log(data);
  });

  return (
    // <Container>
    // <JsonTable json={props.location.state} />
    // <EmailEditor onLoad={onLoad} />
    <div dangerouslySetInnerHTML={{ __html: values }} />
    // <Design data={props.location.state} />
    // </Container>
  );
}
