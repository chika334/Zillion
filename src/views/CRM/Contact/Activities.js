import React from "react";
import { GiCheckMark } from "react-icons/gi";
import errorIcon from "../../../css/images/errorIcon.png";
import success from "../../../css/images/success.png";

export default function Task() {
  const [value, setValue] = React.useState(false);

  const handleSelectClick = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <table id="customersCreateNew">
        <tr>
          <th className="text-center">#</th>
          <th className="text-center">Name</th>
          <th className="text-center">Task Type</th>
          <th className="text-center">Number</th>
          <th className="text-center">Created on</th>
          <th className="text-center">Due on</th>
        </tr>
        <tr>
          <td className="allnew mt-3">
            <img src={success} width="20" />
            <img src={errorIcon} width="20" />
          </td>
          <td>Anonymous</td>
          <td>Call</td>
          <td>000000000</td>
          {/* first */}
          <td>10:08:23</td>
          <td>$2000</td>
        </tr>
        <tr>
          <td className="allnew mt-3">
            <img src={success} width="20" />
            <img src={errorIcon} width="20" />
          </td>
          <td>Anonymous</td>
          <td>Meeting</td>
          <td>000000000</td>
          {/* second */}
          <td>10:08:23</td>
          <td>$2000</td>
        </tr>
        <tr>
          <td className="allnew mt-3">
            <img src={success} width="20" />
            <img src={errorIcon} width="20" />
          </td>
          <td>Anonymous</td>
          <td>Conference</td>
          <td>000000000</td>
          {/* third */}
          <td>10:08:23</td>
          <td>$2000</td>
        </tr>
        <tr>
          <td className="allnew mt-3">
            <img src={success} width="20" />
            <img src={errorIcon} width="20" />
          </td>
          <td>Anonymous</td>
          <td>Mail</td>
          <td>000000000</td>
          {/* fourth */}
          <td>10:08:23</td>
          <td>$2000</td>
        </tr>
        <tr>
          <td className="allnew mt-3">
            <img src={success} width="20" />
            <img src={errorIcon} width="20" />
          </td>
          <td>Anonymous</td>
          <td>Call</td>
          <td>000000000</td>
          {/* fifth */}
          <td>10:08:23</td>
          <td>$2000</td>
        </tr>
        <tr>
          <td className="allnew mt-3">
            <img src={success} width="20" />
            <img src={errorIcon} width="20" />
          </td>
          <td>Anonymous</td>
          <td>Meeting</td>
          <td>000000000</td>
          {/* sixth */}
          <td>10:08:23</td>
          <td>$2000</td>
        </tr>
        <tr>
          <td className="allnew mt-3">
            <img src={success} width="20" />
            <img src={errorIcon} width="20" />
          </td>
          <td>Anonymous</td>
          <td>Call</td>
          <td>000000000</td>
          {/* seventh */}
          <td>10:08:23</td>
          <td>$2000</td>
        </tr>
        <tr>
          <td className="allnew mt-3">
            <img src={success} width="20" />
            <img src={errorIcon} width="20" />
          </td>
          <td>Anonymous</td>
          <td>Text</td>
          <td>000000000</td>
          {/* eighth */}
          <td>10:08:23</td>
          <td>$2000</td>
        </tr>
        <tr>
          <td className="allnew mt-3">
            <img src={success} width="20" />
            <img src={errorIcon} width="20" />
          </td>
          <td>Anonymous</td>
          <td>Email</td>
          <td>000000000</td>
          {/* ninth */}
          <td>10:08:23</td>
          <td>$2000</td>
        </tr>
        <tr>
          <td className="allnew mt-3">
            <img src={success} width="20" />
            <img src={errorIcon} width="20" />
          </td>
          <td>Anonymous</td>
          <td>Call</td>
          <td>000000000</td>
          {/* tenth */}
          <td>10:08:23</td>
          <td>$2000</td>
        </tr>
      </table>
    </div>
  );
}
