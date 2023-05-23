import React, { useState } from "react";

export default function OnoofFan() {
  const [on, setOff] = useState();

  return (
    <>
      <div>
        <h1 style={{ opacity: "0.5", fontFamily: "fantasy" }}>Fan On-Off</h1>
      </div>
      {on ? (
        <div>
          <img src="https://cdn.dribbble.com/users/3892547/screenshots/11096911/media/e953f570282731a9e81adb0f560d6627.gif" width={240} />
          <h4>Now Fan is ON</h4>
        </div>
      ) : (
        <div>
          <img src="https://i.ibb.co/42WsD4B/fanof2.gif" width={228} />
          <h4>Now Fan is OFF</h4>
        </div>
      )}
      <button onClick={() => setOff(!on)}>{on ? "On" : "Off"}</button>
      &nbsp;&nbsp;&nbsp;
    </>
  );
}
