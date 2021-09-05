import React, { useRef, useState } from "react";
import styled from "styled-components";
import SendTo from "../Dashboard/sendTo";
import parse from "html-react-parser";
import EmailEditor from "react-email-editor";
import sample from "./sample.json";

// import '../src'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100%;
`;

const Bar = styled.div`
  flex: 1;
  background-color: #61dafb;
  color: #000;
  padding: 10px;
  display: flex;
  max-height: 40px;

  h1 {
    flex: 1;
    font-size: 16px;
    text-align: left;
  }

  button {
    flex: 1;
    padding: 10px;
    margin-left: 10px;
    font-size: 14px;
    font-weight: bold;
    background-color: #000;
    color: #fff;
    border: 0px;
    max-width: 150px;
    cursor: pointer;
  }
`;

const Example = (props) => {
  const emailEditorRef = useRef(null);
  const [open, setOpen] = React.useState(false);
  const [designDetails, setDesignDetails] = React.useState(null);
  const [disabled, setDisabled] = React.useState(true);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const saveDesign = () => {
    emailEditorRef.current.editor.saveDesign((design) => {
      console.log("saveDesign", design);
      setDesignDetails(design);
      setDisabled(false);
      alert("Design JSON has been logged in your developer console.");
    });
  };

  // const exportHtml = () => {
  //   emailEditorRef.current.editor.exportHtml((data) => {
  //     const { design, html } = data;
  //     console.log("exportHtml", html);
  //     setDesignDetails(html);
  //     setDisabled(false);
  //     alert("Output HTML has been logged in your developer console.");
  //   });
  // };
  const exportHtml = () => {
    emailEditorRef.current.editor.exportHtml((data) => {
      const { design, html } = data;
      setHtm(html);
      console.log(html);
      //   console.log(design);
    });
  };

  const onDesignLoad = (data) => {
    console.log("onDesignLoad", data);
    return data;
  };

  const onLoad = () => {
    console.log(emailEditorRef);
    if (emailEditorRef.current) {
      // emailEditorRef.current.editor.addEventListener(
      //   "onDesignLoad",
      //   onDesignLoad()
      // );
      emailEditorRef.current.editor.loadDesign(sample);
    } else {
      setTimeout(() => {
        // emailEditorRef.current.editor.addEventListener(
        //   "onDesignLoad",
        //   onDesignLoad()
        // );
        emailEditorRef.current.editor.loadDesign(sample);
      }, 3000);
    }
  };

  const [state, setstate] = useState(0);
  const [Htm, setHtm] = useState("<h1>Nothing here yet</h1>");

  function One() {
    return (
      <div>
        <div>
          <button onClick={exportHtml}>Export HTML</button>
        </div>

        <div>
          <button
            onClick={() => {
              setstate(1);
            }}
          >
            Next
          </button>
        </div>

        <EmailEditor ref={emailEditorRef} onLoad={onLoad} />
      </div>
    );
  }

  function Two() {
    return (
      <div className="gap-y-6">
        <button onClick={() => setstate(0)}>Back</button>

        <div className="my-10">
          {Htm ? <div>{parse(Htm)}</div> : "Null now"}
        </div>
      </div>
    );
  }

  const pages = [<One />, <Two />];

  return pages[state];

  // return (
  //   <Container>
  //     <Bar>
  //       {/* <h1>React Email Editor (Demo)</h1> */}

  //       {/* <button onClick={exportHtml}>Export HTML</button> */}
  //       {/* <button onClick={saveDesign}>Save Design</button> */}
  //       <button onClick={exportHtml}>Save design</button>
  //       <button>Cancel</button>
  //       <button onClick={handleOpen} disabled={disabled}>
  //         Send
  //       </button>
  //     </Bar>

  //     <React.StrictMode>
  //       {/* <EmailEditor
  //         ref={(emailEditorRef) => (this.editor = emailEditorRef)}
  //         onLoad={loadDesign}
  //       /> */}
  //       <EmailEditor ref={emailEditorRef} onLoad={onLoad} />
  //       <SendTo
  //         saveDesign={designDetails}
  //         handleClose={handleClose}
  //         open={open}
  //       />
  //     </React.StrictMode>
  //   </Container>
  // );
};

export default Example;
