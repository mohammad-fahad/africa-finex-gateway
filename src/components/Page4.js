import React, { useContext, useEffect } from "react";
import { useId } from "react-id-generator";
import { UserContext } from "../App";
import { Button } from "react-bootstrap";

function Page4({ children, ...rest }) {
  const [htmlId] = useId();
  const { finalWallet, setFinalWallet } = useContext(UserContext);

  //  would fetch my post this way... As I don't have the Bank API so I couldn't do it.
  // const postSell = () => {
  //     fetch("https://salty-earth-57944.herokuapp.com/buy", {
  //       method: "POST",
  //       body: JSON.stringify(),
  //       headers: {
  //         "Content-type": "application/json; charset=UTF-8",
  //       },
  //     });
  // };

  return (
    <div className="container border my-5">
      <div className="container p-5">
        <h4 className="my-5">Transfers funds to the following account</h4>
        <div className="my-5">
          <h3>IBAN: ABCDEFG1234567</h3>
          <h3>Swap ID: {htmlId}</h3>
        </div>
        <h4>
          As soon as the funds are received the transaction to your BSC wallet
          will be made the following address.
        </h4>
        <h4 className="my-5">{finalWallet}</h4>
        <a href="#" className="text-center">
          <h4>Doubts? Discord or Telegram</h4>
        </a>
        <div className="text-center">
          <Button variant="danger" className="px-5 mt-5 ">
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Page4;
