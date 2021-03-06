import React, { useContext, useState } from "react";
import {
  DropdownButton,
  ButtonGroup,
  Dropdown,
  SplitButton,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../App";

function Sell() {
  const { token, setToken } = useContext(UserContext);
  const handleChange = (e) => {
    setToken(e);
  };
  return (
    <div className="container border my-5">
      <div className="container">
        <h4> Stablecoin gateway - Sell</h4>
        <SplitButton
          key={"down"}
          id={`dropdown-button-drop-${"down"}`}
          drop={"down"}
          variant="secondary"
          title={token || "Choose a token"}
          className="my-5"
        >
          <Dropdown.Item onSelect={handleChange} eventKey={"token1"}>
            token1
          </Dropdown.Item>
          <Dropdown.Item onSelect={handleChange} eventKey={"token2"}>
            token2
          </Dropdown.Item>
          <Dropdown.Item onSelect={handleChange} eventKey={"token3"}>
            token3
          </Dropdown.Item>
        </SplitButton>
        <div>
          <label htmlFor="quantity">
            <input type="number" placeholder="Quantity" />
          </label>
        </div>
        <div className="mt-5">
          <h3>You will get X AOA @Preco AOA/TAOA</h3>
        </div>
        <Link to="/sell2">
          <Button variant="danger" className="px-5 my-5 text-center">
            Next
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Sell;
