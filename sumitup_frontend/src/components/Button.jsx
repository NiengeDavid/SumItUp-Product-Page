import React, { useState, useEffect } from "react";
import { client } from "../client";
import { buttons } from "../utils/data";
import { BuyButtons } from "../components";

const Button = () => {
  const [button, setButton] = useState(null);

  useEffect(() => {
    const query = buttons;

    client
      .fetch(query)
      .then((data) => {
        console.log(data);
        setButton(data);
      })
      .catch((error) => {
        console.error("Error fetching buttons:", error);
      });
  }, [])

  return (
    <div>
      {button && <BuyButtons data={button} />}
    </div>
  )
}

export default Button;