import React, { useEffect, useState } from "react";
import { Footer } from "../components";
import { client } from "../client";
import { footer, countries, socials, headings } from "../utils/data";

const FooterFeed = () => {
  const [foot, setFoot] = useState(null);
  const [heading, setHeading] = useState(null);
  const [social, setSocial] = useState(null);
  const [country, setCountry] = useState(null);

  useEffect(() => {
    const query = headings;

    client
      .fetch(query)
      .then((data) => {
        setHeading(data);
      })
      .catch((error) => {
        //console.log("Error fetching headings:", error);
      });
  }, []);

  useEffect(() => {
    const query = socials;

    client.fetch(query).then((data) => {
      setSocial(data);
    });
  }, []);

  useEffect(() => {
    const query = footer;

    client
      .fetch(query)
      .then((data) => {
        setFoot(data);
      })
      .catch((error) => {
        //console.log("Error fetching headings:", error);
      });
  }, []);

  useEffect(() => {
    const query = countries;

    client
      .fetch(query)
      .then((data) => {
        setCountry(data);
      })
      .catch((error) => {
        //console.log("Error fetching headings:", error);
      });
  }, []);

  return (
    <div>
      <Footer
        socials={social}
        countries={country}
        title={heading}
        details={foot}
      />
    </div>
  );
};

export default FooterFeed;
