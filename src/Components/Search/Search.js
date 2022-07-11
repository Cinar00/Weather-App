import React, {useState} from "react";

function Search({setHavaDurumu}) {

    const api = {
        key: "688f84d3164da12bffd3748838a1ec76",
        base: "https://api.openweathermap.org/data/2.5/weather"
    }
    
    const [araParametre, setAraParemetre] = useState("");

    const ara = (e) => {
        if(e.key === "Enter") {
            //fetch(veriyi cekmek icin)
            fetch(`${api.base}?q=${araParametre}&units=metric&lang=tr&appid=${api.key}`)
            .then((veri) => veri.json())
            .then((sonuc) => {
                setAraParemetre("");
                setHavaDurumu(sonuc);
            })
        }
    }


    return(
        <div className="search">
            <input 
                className="search-input" 
                type="text" 
                placeholder="Şehir" 
                onChange={(e)=> setAraParemetre(e.target.value)}
                value={araParametre}
                onKeyPress={ara}    
            />
        </div>
    )
}

export default Search;