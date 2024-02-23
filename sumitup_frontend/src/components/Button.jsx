import React, { useState, useEffect } from "react";
import { client } from "../client";
import { buttons, benue, abuja, jos } from "../utils/data";
import { BuyButtons } from "../components";

const Button = () => {
  const [button, setButton] = useState(null);
  const [benueButton, setBenueButton] = useState(null);
  const [abujaButton, setAbujaButton] = useState(null);
  const [josButton, setJosButton] = useState(null);

  useEffect(() => {
    const query = buttons;

    client
      .fetch(query)
      .then((data) => {
        setButton(data);
      })
      .catch((error) => {
        //console.error("Error fetching online buttons:", error);
      });
  }, [])

  useEffect(() => {
    const query = benue;

    client
      .fetch(query)
      .then((data) => {
        setBenueButton(data);
      })
      .catch((error) => {
        //console.error("Error fetching benue buttons:", error);
      });
  }, [])

  useEffect(() => {
    const query = abuja;

    client
      .fetch(query)
      .then((data) => {
        setAbujaButton(data);
      })
      .catch((error) => {
        //console.error("Error fetching abuja buttons:", error);
      });
  }, [])

  useEffect(() => {
    const query = jos;

    client
      .fetch(query)
      .then((data) => {
        setJosButton(data);
      })
      .catch((error) => {
        //console.error("Error fetching jos buttons:", error);
      });
  }, [])
  

  return (
    <div>
      {button && <BuyButtons data={button} benue={benueButton} jos={josButton} abuja={abujaButton} />}
    </div>
  )
}

export default Button;