import React from "react";
import "./style.css";
import Telegram from "./Components/Telegram";
import Whatsapp from "./Components/Whatsapp";
import Instagram from "./Components/Instgram";
import Twitter from "./Components/Twitter";

export default function App(){
    return (
        <div className="home">
            <Whatsapp/>
            <Telegram/>
            <Instagram/>
            <Twitter/>
        </div>
    )
}


