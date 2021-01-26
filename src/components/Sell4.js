import React from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

function Sell4() {
  let history = useHistory();
  return (
    <div className="container border my-5">
      <div className="container p-5">
        <h4 className="my-5">
          Transfer your tokens TAOA to the following BSN (Biance smart chain)
          address and enter the result in a TXid
        </h4>
        <h4>0xd215423aAd24dA82f782eA845aeD269E621</h4>
        <input
          type="text"
          className="form-control my-5"
          placeholder="TXid (mandatory info)"
        />
        <Button variant="danger" onClick={() => history.push("/finalPage")}>
          Done
        </Button>
      </div>
    </div>
  );
}

export default Sell4;
