import React from "react"

export const SelectTimeframe=({onTimeframeSelected,})=>{
    return(
        <>
        <h2>Please select a Timeframe...</h2>
        <div>
        {['yesterday', 'today', 'tomorrow'].map((timeframes)=>{
            return(
            <button className="timeframe" key={timeframes} onClick={()=> onTimeframeSelected(timeframes)}>
                {timeframes}
            </button>
            )
        })}
        </div>
        </>
    )
}