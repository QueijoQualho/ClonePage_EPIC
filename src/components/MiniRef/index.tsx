import "./style.css"

type props = {
    img: string,
    title: string
}

const Card = (props:props) =>{
    return(
        <div className="Card">
            <img id="cardImg" src={props.img} alt="" />
            <h1 id="cardText">{props.title}</h1>
        </div>
    )
}

export default Card