import React, { useEffect, useState } from 'react';
import { Buy } from '../components';
import { client } from "../client";
import { buttons, headings } from "../utils/data";

const BuyFeed = () => {
    const [details, setDetails] = useState(null);
    const [heading, setHeading] = useState(null);

    useEffect(() => {
        const query = headings;
    
        client
          .fetch(query)
          .then((data) => {
            setHeading(data)
          })
          .catch((error) => {
            console.log("Error fetching headings:", error);
          })
        
    }, [])

    useEffect(() => {
      const query = buttons;

      client
        .fetch(query)
        .then((data) => {
            setDetails(data);
        })
    }, [])

  return (
    <div><Buy title={heading} buttons={details} /></div>
  )
}

export default BuyFeed;