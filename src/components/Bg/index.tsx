import "./style.css";

type props = {
  img: string;
  title: string;
  info: string;
};

const Bg = (props: props) => {
  return (
    <div style={{ backgroundImage: `url(${props.img})` }} className="imgGrande">
      <div className="infos">
        <h1>{props.title}</h1>
        <h3>{props.info}</h3>
        <button>Jogar</button>
      </div>
    </div>
  );
};

export default Bg;
