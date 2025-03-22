"use client";
import React, { useEffect, useState } from "react";
import "./advertize.css";

const Advertize = () => {
  const [time, setTime] = useState(new Date());
  const [adver, setAdver] = useState("false");

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);

    const lastDisplay = localStorage.getItem("lastDisplay");
    const lastDate = localStorage.getItem("lastDate");
    const lastHour = localStorage.getItem("lastHour");

    const currentDate = time.getDate();
    const currentHour = time.getHours();

    const lastDisplayDate = new Date(lastDisplay);
    const minutesSinceLastDisplay = Math.floor(
      (time - lastDisplayDate) / (1000 * 60)
    );

    const shouldShowAd =
      minutesSinceLastDisplay >= 5 ||
      currentDate !== parseInt(lastDate) ||
      currentHour !== parseInt(lastHour);

    if (shouldShowAd) {
      setAdver("true");
    } else {
      setAdver("false");
    }

    return () => clearInterval(interval);
  }, [time]);

  function Newtab() {
    localStorage.setItem("lastDisplay", new Date().toISOString());
    localStorage.setItem("lastDate", time.getDate().toString());
    localStorage.setItem("lastHour", time.getHours().toString());
    localStorage.setItem("truth", "false");
    window.open(
      {/*"https://www.highrevenuenetwork.com/hnq4sfr7se?key=fa60dc3aeeb0a08aa0476e80986ad233"*/
    );
  }

  return (
    <div
      className="Advertize"
      style={{ zIndex: adver === "true" ? 100 : -1 }}
      onClick={() => {
        setAdver("false");
        Newtab();
      }}
    ></div>
  );
};

export default Advertize;
