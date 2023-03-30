import React from "react";
import wpimage from "./icons8-whatsapp-96.png";
export default function Whatsapp(){
    const handlewhatsapp = ()=>{
        window.open("https://web.whatsapp.com/",
                    "_blank",
                    'statusbar=no,height=650,width=850');
    }
    return (
        <div className="Whatsapp">
            {/* <button onClick={handlewhatsapp}>Whatsapp</button> */}
            <img src={wpimage} onClick={handlewhatsapp} className="images"/>
        </div>
    )
};