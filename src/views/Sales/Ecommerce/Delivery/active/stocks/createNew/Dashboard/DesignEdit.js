// import React, { useRef, useEffect, useState } from "react";
// import { Button } from "@material-ui/core";
// import parse from "html-react-parser";
// import styled from "styled-components";
// import SendTo from "./sendTo";
// import sample from "../example/sample.json";

// import {
//   Switch,
//   Route,
//   Link,
//   useRouteMatch,
//   withRouter,
// } from "react-router-dom";

// // import '../src'

// import EmailEditor from "react-email-editor";

// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   position: relative;
//   height: 100%;
// `;

// const Bar = styled.div`
//   flex: 1;
//   background-color: #61dafb;
//   color: #000;
//   padding: 10px;
//   display: flex;
//   max-height: 60px;

//   h1 {
//     flex: 1;
//     font-size: 16px;
//     text-align: left;
//   }

//   button {
//     flex: 1;
//     padding: 10px;
//     margin-left: 10px;
//     font-size: 14px;
//     font-weight: bold;
//     background-color: #000;
//     color: #fff;
//     border: 0px;
//     max-width: 150px;
//     cursor: pointer;
//   }

//   a {
//     flex: 1;
//     padding: 10px;
//     margin-left: 10px;
//     font-size: 14px;
//     font-weight: bold;
//     color: #fff;
//     border: 0px;
//     cursor: pointer;
//     text-align: right;
//     text-decoration: none;
//     line-height: 160%;
//   }
// `;

// const DesignEdit = (props) => {
//   let ref = useRef(null);
//   const [open, setOpen] = React.useState(false);
//   const [state, setState] = useState(0);
//   const [Htm, setHtm] = useState("<h1>Nothing here yet</h1>");
//   const [designDetails, setDesignDetails] = React.useState(null);
//   const [disabled, setDisabled] = React.useState(true);

//   const handleOpen = () => {
//     // setOpen(true);
//     setState(1);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   const saveDesign = () => {
//     ref.current.saveDesign((design) => {
//       console.log("saveDesign", design);
//       alert("Design JSON has been logged in your developer console.");
//     });
//   };

//   // unlayer.init({
//   //   id: "editor-container",
//   //   displayMode: "",
//   // });
//   const exportHtml = () => {
//     ref.current.exportHtml(
//       (data) => {
//         const { design, html } = data;
//         // console.log("exportHtml", html);
//         setHtm(html);
//         setDisabled(false);
//         alert("Output HTML has been logged in your developer console.");
//       },
//       { cleanup: true }
//     );
//   };

//   const onDesignLoad = (data) => {
//     console.log("onDesignLoad", data);
//     return data;
//   };

//   const onLoad = () => {
//     // you can load your template here;
//     if (ref.current) {
//       const templateJson = {};
//       ref.current.editor.addEventListener("onDesignLoad", onDesignLoad());
//       ref.current.editor.loadDesign(sample);
//     }
//   };

//   function One() {
//     return (
//       <>
//         <Bar>
//           {/* <button onClick={saveDesign}>Save Design</button> */}
//           <button onClick={exportHtml}>Save design</button>
//           <button>Cancel</button>
//           <button onClick={handleOpen} disabled={disabled}>
//             Send
//           </button>
//         </Bar>

//         <EmailEditor ref={ref} onLoad={onLoad} />
//       </>
//     );
//   }

//   function Two() {
//     return (
//       <div>
//         <Button onClick={setState(0)}>Back</Button>
//         <div>{Htm ? <div>{parse(Htm)}</div> : "Null now"}</div>
//       </div>
//     );
//   }

//   const pages = [<One />, <Two />];

//   return (
//     <Container>
//       {pages[state]}
//       <SendTo saveDesign={Two} handleClose={handleClose} open={open} />
//     </Container>
//   );
// };

// export default withRouter(DesignEdit);

import React, { useRef, useState } from "react";
import sample from "../example/sample.json";
import EmailEditor from "react-email-editor";
import parse from "html-react-parser";

const App = () => {
  const emailEditorRef = useRef(null);
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
    // you can load your template here;
    if (emailEditorRef.current) {
      // emailEditorRef.current.editor.addEventListener("onDesignLoad", onDesignLoad());
      emailEditorRef.current.editor.loadDesign(sample);
    }
  };

  // const onLoad = () => {
  //   console.log(emailEditorRef);
  //   if (emailEditorRef.current) {
  //     // emailEditorRef.current.editor.addEventListener(
  //     //   "onDesignLoad",
  //     //   onDesignLoad()
  //     // );
  //     emailEditorRef.current.editor.loadDesign(sample);
  //   } else {
  //     setTimeout(() => {
  //       // emailEditorRef.current.editor.addEventListener(
  //       //   "onDesignLoad",
  //       //   onDesignLoad()
  //       // );
  //       emailEditorRef.current.editor.loadDesign(sample);
  //     }, 3000);
  //   }
  // };

  const pages = [<One />, <Two />];

  return pages[state];
};

export default App;
