import React from "react";
import { withRouter } from "react-router-dom";
// import AdvertTable from "./otherDesigns/tableDesign";

function AllRFP(props) {
  return (
    <div>
      <div className="container">
        <table id="customersCreateNew">
          <tr>
            <th className="text-center">#</th>
            <th className="text-center">Number</th>
            <th className="text-center">Creation Date</th>
            <th className="text-center">Customer</th>
            <th className="text-center">Sales Person</th>
          </tr>
          <tr>
            <td></td>
            <td>RFP-210502-00001</td>
            <td>10-01-2021</td>
            <td>Victor</td>
            <td>800</td>
          </tr>
          <tr>
            <td></td>
            <td>RFP-210502-00001</td>
            <td>10-01-2021</td>
            <td>Bill</td>
            <td>900</td>
          </tr>
          <tr>
            <td></td>
            <td>RFP-210502-00001</td>
            <td>10-01-2021</td>
            <td>Smith</td>
            <td>900</td>
          </tr>
          <tr>
            <td></td>
            <td>RFP-210502-00001</td>
            <td>10-01-2021</td>
            <td>Paul</td>
            <td>900</td>
          </tr>
          <tr>
            <td></td>
            <td>RFP-210502-00001</td>
            <td>10-01-2021</td>
            <td>sam</td>
            <td>900</td>
          </tr>
          <tr>
            <td></td>
            <td>RFP-210502-00001</td>
            <td>10-01-2021</td>
            <td>Peter</td>
            {/* sixth */}
            <td>900</td>
          </tr>
          <tr>
            <td></td>
            <td>RFP-210502-00001</td>
            <td>10-01-2021</td>
            <td>Paul</td>
            <td>900</td>
          </tr>
          <tr>
            <td></td>
            <td>RFP-210502-00001</td>
            <td>10-01-2021</td>
            <td>tom</td>
            <td>900</td>
          </tr>
          <tr>
            <td></td>
            <td>RFP-210502-00001</td>
            <td>10-01-2021</td>
            <td>Cat</td>
            <td>900</td>
          </tr>
          <tr>
            <td></td>
            <td>RFP-210502-00001</td>
            <td>10-01-2021</td>
            <td>shine</td>
            <td>900</td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default withRouter(AllRFP);
