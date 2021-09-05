import React, { useEffect, useState, useRef } from "react";
import "./progressInvoice.css";
import { makeStyles } from "@material-ui/core/styles";
import { Helmet } from "react-helmet";
import { useDispatch } from "react-redux";
import parse from "html-react-parser";
import $ from "jquery";
import ContentEditable from "react-contenteditable";
// import { editRow } from "../../../../../../../_action/invoiceCal";
// import * as script from './script'
// import "./invoiceTable.css";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 230,
  },
}));

export default function ProgressInvoice() {
  let [indexNumber, setIndexNumber] = useState(1);
  const dispatch = useDispatch();
  // const [newIndex, setNewIndex] = useState(1);
  const classes = useStyles();
  const [loaded, setLoaded] = useState(false);
  const [companyEditable, setCompanyEditable] = useState(false);
  const [clientEditable, setClientEditable] = useState(false);
  const [amount, setAmount] = useState(null);
  const [item, setItem] = useState("0.00");

  const text = useRef("");
  // const [addTable, setAddTable] = useState([]);
  // const [quantity, setQantity] = useState(null);
  // const head = ``;
  // // let indexNumber = 1;
  // let amounts = 0;
  // let quantitys = 0;
  // // let allTotals = [];
  // let addTable = 0;

  // const invoiceDetails = ``;

  // const initialTable = ``;

  // function generateTableRow() {
  //   var emptyColumn = document.createElement("tr");

  //   emptyColumn.setAttribute("id", `${indexNumber}`);

  //   emptyColumn.innerHTML =
  //     `<td class="valueId">${indexNumber}</td>` +
  //     `<td><a class="cut">-</a><span contenteditable>Front End Consultation</span></td>` +
  //     "<td><span contenteditable>Experience Review</span></td>" +
  //     `<td class="data" id="inputAmount"><ContentEditable
  //     html=${text.current}
  //   /></td>` +
  //     `<td class="quantity" id="inputAmount" contenteditable>0</td>` +
  //     `<td class="total">$0.00</td>`;

  //   return emptyColumn;
  // }

  // const newRow = useState(``);

  const generateTableRow = `
      <tr id="1" className="valueId">
        <td>1</td>
        <td>
          <a className="cut">-</a>
          <span contentEditable={true}>Front End Consultation</span>
        </td>
        <td>
          <span contentEditable={true}>Experience Review</span>
        </td>
        <td
          // className="data"
          // contentEditable={true}
          // onChange={handleValuesChange}
          id="inputAmount"
        >
          <ContentEditable
            html={text.current}
            // onBlur={handleBlur}
            onChange={handleChange}
          />
          {/* <span> */}
          {/* 150.00 */}
          {/* </span> */}
        </td>
        <td className="quantity" id="inputAmount" contentEditable={true}>
          4
        </td>
        <td className="total">$0.00</td>
      </tr>
  `;

  // console.log(generateTableRow);

  function onClick(e) {
    var element = e.target.querySelector("[contenteditable]");

    element &&
      e.target != document.documentElement &&
      e.target != document.body &&
      element.focus();

    if (e.target.matches(".add")) {
      setIndexNumber(indexNumber++);
      setTimeout(() => {
        document
          .querySelector("table.inventory tbody")
          .append(parse(generateTableRow));
        // document.querySelector("table.inventory tbody").append(newRow);
      }, 500);
    } else if (e.target.className == "cut") {
      var el = document.getElementById(indexNumber);
      el.remove();
      setIndexNumber(indexNumber--);
    }
  }

  // useEffect(() => {
  //   $(".add").click(function () {
  //     setIndexNumber(indexNumber++);
  //     $("#table").append(newRow);
  //   });
  //   $(".cut").click(function () {
  //     $(`#${indexNumber}`).remove();
  //     setIndexNumber(indexNumber--);
  //   });
  // }, []);

  useEffect(() => {
    if (window.addEventListener) {
      document.addEventListener("click", onClick);
      // document.addEventListener("input", handleChange);
      // if (document.getElementsByClassName("data")) {
      //   // return handleChange;
      // }
      // document.addEventListener('mousewheel', updateNumber);
      // document.addEventListener('keydown', updateNumber);
      // document.addEventListener('keydown', updateInvoice);
      // document.addEventListener('keyup', updateInvoice);
      // input.addEventListener('focus', onEnterCancel);
      // input.addEventListener('mouseover', onEnterCancel);
      // input.addEventListener('dragover', onEnterCancel);
      // input.addEventListener('dragenter', onEnterCancel);
      // input.addEventListener('blur', onLeaveCancel);
      // input.addEventListener('dragleave', onLeaveCancel);
      // input.addEventListener('mouseout', onLeaveCancel);
      // input.addEventListener('drop', onFileInput);
      // input.addEventListener('change', onFileInput);
    }
  }, []);

  // const handleContentEditable = (e) => {
  //   // console.log("daniel");
  //   setItem(e.target.value);
  // };

  const handleChange = (evt) => {
    text.current = evt.target.value;
  };

  return (
    <div>
      <html>
        <body>
          <header>
            <h1>Invoice</h1>
            <small className="d-flex justify-content-center">
              click on the text to edit
            </small>

            {/* {parse(companyAddress)} */}
            <address contentEditable={true}>
              <p>Jonathan Neal</p>
              <p>
                101 E. Chapman Ave
                <br />
                Orange, CA 92866
              </p>
              <p>(800) 555-1234</p>
            </address>

            <br />
          </header>
          <article>
            <address contentEditable={true}>
              <p>
                Some Company
                <br />
                c/o Some Guy
              </p>
            </address>
            {/* {parse(clientAddress)} */}

            {/* {parse(invoiceDetails)} */}
            <table className="meta">
              <tr>
                <th>
                  <span contentEditable={true}>Invoice #</span>
                </th>
                <td>
                  <span contentEditable={true}>101138</span>
                </td>
              </tr>
              <tr>
                <th>
                  <span contentEditable={true}>Date</span>
                </th>
                <td>
                  <span contentEditable={true}>January 1, 2012</span>
                </td>
              </tr>
              <tr>
                <th>
                  <span contentEditable={true}>Amount Due</span>
                </th>
                <td>
                  <span id="prefix" contentEditable={true}>
                    $
                  </span>
                  <span>600.00</span>
                </td>
              </tr>
            </table>
            <table id="table" className="inventory">
              {/* {parse(head)} */}
              <thead>
                <tr>
                  <th contentNumber>#</th>
                  <th>
                    <span contentEditable={true}>Item</span>
                  </th>
                  <th>
                    <span contentEditable={true}>Description</span>
                  </th>
                  <th>
                    <span contentEditable={true}>Rate</span>
                  </th>
                  <th>
                    <span contentEditable={true}>Quantity</span>
                  </th>
                  <th>
                    <span contentEditable={true}>Price</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr id="1" className="valueId">
                  <td>1</td>
                  <td>
                    <a className="cut">-</a>
                    <span contentEditable={true}>Front End Consultation</span>
                  </td>
                  <td>
                    <span contentEditable={true}>Experience Review</span>
                  </td>
                  <td
                    // className="data"
                    // contentEditable={true}
                    // onChange={handleValuesChange}
                    id="inputAmount"
                  >
                    <ContentEditable
                      html={text.current}
                      // onBlur={handleBlur}
                      onChange={handleChange}
                    />
                    {/* <span> */}
                    {/* 150.00 */}
                    {/* </span> */}
                  </td>
                  <td
                    className="quantity"
                    id="inputAmount"
                    contentEditable={true}
                  >
                    4
                  </td>
                  <td className="total">$0.00</td>
                </tr>
              </tbody>
              {/* <tbody>{parse(initialTable)}</tbody> */}
            </table>
            <button className="add">+</button>
            <table className="balance">
              <tr>
                <th>
                  <span contentEditable={true}>Total</span>
                </th>
                <td>
                  <span data-prefix>$</span>
                  <span>600.00</span>
                </td>
              </tr>
              <tr>
                <th>
                  <span contenteditable>Amount Paid</span>
                </th>
                <td>
                  <span data-prefix>$</span>
                  <span contenteditable>0.00</span>
                </td>
              </tr>
              <tr>
                <th>
                  <span contenteditable>Balance Due</span>
                </th>
                <td>
                  <span data-prefix>$</span>
                  <span>600.00</span>
                </td>
              </tr>
            </table>
          </article>
          <aside>
            <h1>
              <span contenteditable>Additional Notes</span>
            </h1>
            <div contenteditable>
              <p>
                A finance charge of 1.5% will be made on unpaid balances after
                30 days.
              </p>
            </div>
          </aside>
        </body>
      </html>
    </div>
  );
}

// import React, { useState } from "react";
// // import "./App.css";
// var tableRowIndex = 0;
// function TableRow({ row, handleDataChange, deleteRow }) {
//   const index = row.index;
//   const [first_name, handleChangeFirstName] = useState(row.first_name);
//   const [last_name, handleChangeLastName] = useState(row.last_name);

//   const updateValues = (e) => {
//     var inputName = e.target.name;
//     var inputValue = e.target.value;
//     if (inputName == "first_name") {
//       handleChangeFirstName(inputValue);
//     } else if (inputName == "last_name") {
//       handleChangeLastName(inputValue);
//     }

//     handleDataChange({
//       index: index,
//       first_name: first_name,
//       last_name: last_name,
//     });
//   };

//   const removeRow = () => {
//     deleteRow(index);
//   };

//   return (
//     <tr>
//       <td>{index + 1}</td>
//       <td>
//         <input
//           type="text"
//           name="first_name"
//           className="first_name"
//           placeholder="First Name"
//           value={first_name}
//           onChange={updateValues}
//         ></input>
//         <input
//           type="text"
//           name="last_name"
//           className="last_name"
//           placeholder="Last Name"
//           value={last_name}
//           onChange={updateValues}
//         ></input>
//       </td>
//       <td>
//         <button type="button" className="btn btn-remove" onClick={removeRow}>
//           &times;
//         </button>
//       </td>
//     </tr>
//   );
// }

// function Table() {
//   const [talbeRows, setRows] = useState([
//     {
//       index: 0,
//       first_name: "",
//       last_name: "",
//     },
//   ]);

//   // Receive data from TableRow
//   const handleChange = (data) => {
//     talbeRows[data.index] = data;
//   };

//   // Add New Table Row
//   const addNewRow = () => {
//     tableRowIndex = parseFloat(tableRowIndex) + 1;
//     var updatedRows = [...talbeRows];
//     updatedRows[tableRowIndex] = {
//       index: tableRowIndex,
//       first_name: "",
//       last_name: "",
//     };
//     setRows(updatedRows);
//   };

//   // Remove Table row if rows are count is more than 1
//   const deleteRow = (index) => {
//     if (talbeRows.length > 1) {
//       var updatedRows = [...talbeRows];
//       var indexToRemove = updatedRows.findIndex((x) => x.index == index);
//       if (indexToRemove > -1) {
//         updatedRows.splice(indexToRemove, 1);
//         setRows(updatedRows);
//       }
//     }
//   };

//   return (
//     <div className="customers">
//       <table className="table" id="customers">
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Name</th>
//             <th></th>
//           </tr>
//         </thead>
//         <tbody>
//           {talbeRows.map((row, index) => {
//             if (row)
//               return (
//                 <TableRow
//                   key={index}
//                   row={row}
//                   handleDataChange={handleChange}
//                   deleteRow={deleteRow}
//                 ></TableRow>
//               );
//           })}
//         </tbody>
//       </table>
//       <div>
//         <button className="btn-add" onClick={addNewRow}>
//           +Add
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Table;
