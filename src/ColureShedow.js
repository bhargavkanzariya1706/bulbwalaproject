 import React,{useState} from 'react';
 
 export default function ColureShedow() {
    const [hori, setHori] = useState(10);
    const [veri, setVeri] = useState(10);
    const [blur, setBlur] = useState(10);
    const [color, setColor] = useState("yellow");
  
    return (
      <div className="App">
        <div className="controls">
          <label>HORIZONTAL LENGHT : </label>
          <input
            fullwidht
            type="range"
            min="-200"
            max="200"
            value={hori}
            onChange={(e) => setHori(e.target.value)}
          />
          <br />
          <label>VERTICAL LENGTH : </label>
          <input
            type="range"
            min="-200"
            max="200"
            value={veri}
            onChange={(e) => setVeri(e.target.value)}
          />
          <br />
          <label>BLUR : </label>
          <input
            type="range"
            min="-200"
            max="200"
            value={blur}
            onChange={(e) => setBlur(e.target.value)}
          />
          <br />
          <label>COLOR : </label>
          <input
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
        </div>
        <br />
        <div>
          <div
            className="box"
            style={{ boxShadow: `${hori}px ${veri}px ${blur}px ${color}` }}
          >
            <p className="center">
              {" "}
              box-shadow : {hori}px {veri}px {blur}px {color}
            </p>
          </div>
        </div>
      </div>
   );
 }
 