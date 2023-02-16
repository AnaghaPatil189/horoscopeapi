import React, { useEffect, useState } from "react";
import {getHoroscope} from './api.js';

export const Horoscope=({sign, timeframe})=>{
    const [horoscope, setHoroscope] = useState([]);

    useEffect(()=>{
        getHoroscope(sign, timeframe).then(setHoroscope);
    },[sign,timeframe]);

    return (
    <div>
        <h2>
            {timeframe}, your horoscope for {sign} is...
        </h2>
        <p>{horoscope}</p>
    </div>
    );
};