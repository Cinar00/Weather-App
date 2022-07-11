import React from "react";

function Result({hava}) {
    return(
        <>
            {typeof hava.main != "undefined" && (
                <div className="result">
                <div className="city">{hava.name}, {hava.sys.country}</div>
                <div className="city-info">
                    <div className="degree">{Math.round(hava.main.temp)} &#176;C</div>
                    <div className="status">{hava.weather[0].description}</div>
                </div>
            </div>
            )}
            
        </>
    )
}

export default Result;