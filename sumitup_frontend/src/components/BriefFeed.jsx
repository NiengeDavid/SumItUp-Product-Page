import React, { useEffect, useState } from 'react';
import { Brief } from '../components';
import { client } from "../client";
import { coverImage, headings, summary } from "../utils/data";

const BriefFeed = () => {
  const [heading, setHeading] = useState(null);
  const [actualData, setActualData] = useState(null);
  const [cover, setCover] = useState(null);

  useEffect(() => {
    const query = headings;

    client
      .fetch(query)
      .then((data) => {
        setHeading(data)
      })
      .catch((error) => {
        //console.log("Error fetching headings:", error);
      })
    
  }, [])

  useEffect(() => {
    const query = summary;

    client
      .fetch(query)
      .then((data) => {
        setActualData(data);
      })
      .catch((error) => {
        //console.log("Error fetching Testimonies:", error);
      })
    
  }, [])
  
  useEffect(() => {
    const query = coverImage;

    client
      .fetch(query)
      .then((data) => {
        setCover(data[0]);
      })
      .catch((error) => {
        //console.error("Error fetching cover image:", error);
      });
  }, []);

  return (
    <div><Brief cover={cover} title={heading} brief={actualData} /></div>
  )
}

export default BriefFeed;