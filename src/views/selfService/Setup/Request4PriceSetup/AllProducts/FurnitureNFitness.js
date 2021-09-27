import React from "react";
import { Products } from "../../../../../Data/Products";
import { Card } from "@material-ui/core";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

export default function FurnitureNFitness() {
  const [visible, setVisible] = React.useState(true);

  const handleShow = () => {
    setVisible(!visible);
  };
  return (
    <div className="mt-5">
      <div>
        <h3 style={{ float: "left" }}>Furniture & Fitness</h3>
        <VisibilityIcon onClick={handleShow} />
        <VisibilityOffIcon onClick={handleShow} />
      </div>
      <div className="mt-5">
        {Products.items.map((allData, i) => (
          <>
            {visible === true ? (
              <Card
                style={{
                  width: "250px",
                  height: "80px",
                  marginLeft: "10px",
                  marginBottom: "10px",
                  float: "left",
                }}
              >
                <img
                  style={{ float: "left" }}
                  src={allData.image}
                  width="90px"
                  height="100px"
                />
                <div>
                  <h5 style={{ fontWeight: "20px" }}>{allData.title}</h5>
                  <small>{allData.text}</small>
                  <div />
                  <small>{allData.small}</small>
                </div>
              </Card>
            ) : (
              ""
            )}
          </>
        ))}
      </div>
    </div>
  );
}
