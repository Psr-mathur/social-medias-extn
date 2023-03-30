import React from "react";
import wpimage from "./icons8-twitter-96.png";
export default function Twitter(){
    const handleTwitter = ()=>{
        window.open("https://twitter.com/",
                    "_blank",
                    'statusbar=no,height=650,width=850');
    }
    return (
        <div className="Twitter">
            {/* <button onClick={handleTwitter}>Twitter</button> */}
            <img src={wpimage} onClick={handleTwitter} className="images"/>
        </div>
    )
};