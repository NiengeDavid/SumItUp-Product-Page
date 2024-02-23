import React, { useState, useEffect } from "react";
import { client } from "../client";
import { content, learn } from "../utils/data";
import { Content } from "../components"; 

const ContentFeed = () => {
    const [contentTitle, setContentTitle] = useState(null);
    const [learnFeed, setLearnFeed] = useState(null);

    useEffect(() => {
      const query = content;

      client
        .fetch(query)
        .then((data) => {
          setContentTitle(data);
        })
        .catch((error) => {
            //console.log('Error fetching Content data:', error);
        })
    }, [])

    useEffect(() => {
      const query = learn;

      client
        .fetch(query)
        .then((data) => {
            setLearnFeed(data);
        })
        .catch((error) => {
            //console.log('Error fetching learn data:', error);
        })
    }, [])


  return (
    <div>
      <Content content={contentTitle} learn={learnFeed} />
    </div>
  )
}

export default ContentFeed;