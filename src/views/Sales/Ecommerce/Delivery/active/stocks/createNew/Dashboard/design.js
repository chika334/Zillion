// import React from "react";
// import parse, { domToReact } from "html-react-parser";

// const html = localStorage.zillion

// const options = {
//   replace: ({ attribs, children }) => {
//     if (!attribs) {
//       return;
//     }

//     if (attribs.id === "main") {
//       return <h1 style={{ fontSize: 42 }}>{domToReact(children, options)}</h1>;
//     }

//     if (attribs.class === "prettify") {
//       return (
//         <span style={{ color: "hotpink" }}>
//           {domToReact(children, options)}
//         </span>
//       );
//     }
//   },
// };
// const HelloWorldText = () => parse(html, options);

// export default HelloWorldText;
