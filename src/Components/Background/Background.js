import TakeImage from "./TakeImage";

function Background({ backgroundImage }) {
    return (
        <div className="background">
            <div className="overlay"></div>
            <TakeImage situation={backgroundImage} />
        </div>  
    )
}



export default Background;