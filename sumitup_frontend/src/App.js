import React, { Suspense, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { GlobalDebug } from "./utils/remove-consoles";


//import Login from "./components/Login";
import Home from './container/Home';


const App = () => {
  /**
   * @REMOVE_CONSOLES
   * // remove the working of console logs
   * // remove any accidental use of console logs
   */
  useEffect(() => {
    (process.env.NODE_ENV === "production" ||
     process.env.REACT_APP_ENV === "STAGING") &&
      GlobalDebug(false);
  }, []);

  console.log("I am just another dummy console log, suppose to be suppressed 🙂");

  return (
    <>
      <Suspense fallback={<h3>Loading...</h3>} >
        <Routes>
          {/* <Route path="Login" element={<Login />} /> */}
          <Route path="/*" element={<Home />} />
        </Routes>
      </Suspense>
      
    </>
    
  );
};

export default App;
