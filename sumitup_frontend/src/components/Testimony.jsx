import React, { useEffect, useState } from 'react';
import { Testimonial } from '../components';
import { client } from "../client";
import { coverImage, headings, testimonyFeed } from "../utils/data";

const Testimony = () => {
  const [heading, setHeading] = useState(null);
  const [actualData, setActualData] = useState(null);
  const [cover, setCover] = useState(null);

  useEffect(() => {
    const query = headings;

    client
      .fetch(query)
      .then((data) => {
        setHeading(data)
        console.log(data)
      })
      .catch((error) => {
        console.log("Error fetching headings:", error);
      })
    
  }, [])

  useEffect(() => {
    const query = testimonyFeed;

    client
      .fetch(query)
      .then((data) => {
        setActualData(data);
        console.log(data);
      })
      .catch((error) => {
        console.log("Error fetching Testimonies:", error);
      })
    
  }, [])
  
  useEffect(() => {
    const query = coverImage;

    client
      .fetch(query)
      .then((data) => {
        setCover(data[0]);
        console.log(data)
      })
      .catch((error) => {
        console.error("Error fetching cover image:", error);
      });
  }, []);

  return (
    <div><Testimonial cover={cover} title={heading} testimonies={actualData} /></div>
  )
}

export default Testimony;