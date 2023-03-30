import React from "react";
import instaimge from "./icons8-instagram-96.png";
export default function Instagram(){
    const handleInstagram = ()=>{
        window.open("https://www.instagram.com/",
                    "_blank",
                    'statusbar=no,height=650,width=850');
    }
    return (
        <div className="Instagram">
            {/* <button onClick={handleInstagram}>Instagram</button> */}
            <img src={instaimge} onClick={handleInstagram} className="images"/>
        </div>
    )
};