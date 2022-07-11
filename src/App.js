import React, {useState} from "react";
import "./index.css";

import Background from "./Components/Background/Background";
import Search from "./Components/Search/Search";
import Result from "./Components/Result/Result";

function App() {

  const [havaDurumu, setHavaDurumu] = useState({});

  return (
    <section className="app" >
      <Background backgroundImage={havaDurumu.weather && havaDurumu.weather[0].main}/>
      <div id="title">Hava Durumu</div>
      <Search setHavaDurumu={setHavaDurumu} />
      <Result hava={havaDurumu} />
    </section>
  );
}

export default App;
