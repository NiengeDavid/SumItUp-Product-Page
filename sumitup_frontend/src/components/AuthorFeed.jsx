import React, { useEffect, useState } from 'react';
import { Author } from '../components';
import { client } from "../client";
import { author, headings } from "../utils/data";


const AuthorFeed = () => {
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
      const query = author;

      client
        .fetch(query)
        .then((data) => {
            setDetails(data);
        })
        .catch((error) => {
          console.log("Error fetching Author:", error);
        });
    }, [])
    

  return (
    <div><Author title={heading} feed={details} /></div>
  )
}

export default AuthorFeed;