import React,{useState} from 'react';

export default function OnOfbulb() {
    

    const [on, setOff] = useState();
    const [darkMode, setDarkMode] = useState(true);
  
    const style = {
      color: "white",
      backround: "black",
    };
  
    const darkModeHandler = () => {
      if (darkMode) {
        setDarkMode(false);
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
      } else {
        setDarkMode(true);
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
      }
    };
  


    return (
        <>
          <button className="setoficon" onClick={() => darkModeHandler()}>
            {darkMode ? (
              <>
                {" "}
                <img
                  src="https://cdn-icons-png.flaticon.com/512/6714/6714978.png"
                  width={30}
                />
                <h3>Light Mode</h3>
              </>
            ) : (
              <>
                <img
                  src="https://png.pngtree.com/element_our/20190529/ourmid/pngtree-night-icon-image_1198543.jpg"
                  width={30}
                />
                <h3>Dark Mode</h3>
              </>
            )}
          </button>
          <div>
            <h1 style={{ opacity: "0.5", fontFamily: "fantasy" }}>Bulb On-Off</h1>
          </div>
          {on ? (
            <div>
              <img
                src="https://i.ibb.co/L0hnLs2/n1-removebg-preview.png"
                width={240}
              />
              <h4>Now Bulb is ON</h4>
            </div>
          ) : (
            <div>
              <img
                src="https://i.ibb.co/jVc54wr/n2-removebg-preview.png"
                width={228}
              />
              <h4>Now Bulb is OFF</h4>
            </div>
          )}
          <button onClick={() => setOff(!on)}>{on ? "On" : "Off"}</button>
          &nbsp;&nbsp;&nbsp;
        </>
      );
    }
    