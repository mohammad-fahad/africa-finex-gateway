import React from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

function Sell3() {
  let history = useHistory();
  return (
    <div className="container border my-5">
      <div className="container p-5">
        <input
          type="text"
          className="form-control"
          placeholder="Enter Your IBAN account details to be credited"
        />
        <div className="mt-5">
          <a href="#">
            <h4>Where can I find my IBAN</h4>
          </a>
          <Button variant="danger" onClick={() => history.push("/sell4")}>
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Sell3;
