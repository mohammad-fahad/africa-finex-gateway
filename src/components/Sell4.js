import React, { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { UserContext } from "../App";

function Sell4() {
  let history = useHistory();
  const { account, finalWalletSell, token } = useContext(UserContext);
  const [txid, setTxid] = useState("");

  const postSell = () => {
    const bulkData = { account, finalWalletSell, token, txid };

    fetch("https://salty-earth-57944.herokuapp.com/sell", {
      method: "POST",
      body: JSON.stringify(bulkData),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          alert("Successful");
          history.push("/finalPage");
        }
      });
  };
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
          onBlur={(e) => setTxid(e.target.value)}
        />
        <Button variant="danger" onClick={postSell}>
          Done
        </Button>
      </div>
    </div>
  );
}

export default Sell4;
