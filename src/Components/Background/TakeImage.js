import yagmurlu from "../../images/rainy.jpg";
import  bulutlu from "../../images/cloud.jpg";
import  sisli from "../../images/foggy.jfif";
import  karli from "../../images/karli.jpg";
import  gokkusagi from "../../images/rainbow-weather.jpg";
import  firtinali from "../../images/storm.png";
import  gunesli from "../../images/sunny.jpg";

function TakeImage({situation}) {
    switch (situation) {
        case "Rain":
            return <img className="background-image" src={yagmurlu} alt="Rain" />
        case "Drizzle":
            return <img className="background-image" src={yagmurlu} alt="Drizzle" />
        case "Clear":
            return <img className="background-image" src={gunesli} alt="Clear" />
        case "Mist":
            return <img className="background-image" src={sisli} alt="Mist" />
        case "Snow":
            return <img className="background-image" src={karli} alt="Snow" />
        case "Storm":
            return <img className="background-image" src={firtinali} alt="Storm" />
        case "Clouds":
            return <img className="background-image" src={bulutlu} alt="Clouds" />
        default:
            return <img className="background-image" src={gokkusagi} alt="rainbow-weather" />
    }
}


export default TakeImage;