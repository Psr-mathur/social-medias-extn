import React from "react";
import teleimg from "./icons8-telegram-app-96.png";
export default function Telegram(){
    const handleTelegram = ()=>{
        window.open("https://web.telegram.org/",
                    "_blank",
                    'statusbar=no,height=650,width=850');
    }
    return (
        <div className="Telegram">
            {/* <button onClick={handleTelegram}>Telegram</button> */}
            <img src={teleimg} onClick={handleTelegram} className="images"/>
        </div>
    )
};