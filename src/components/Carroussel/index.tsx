import Card from "../MiniRef";
import "./style.css";

const Carroussel = () => {
  return (
    <div className="banner">
      <div className="imgGrande"></div>
      <div className="vComp">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>

      </div>
    </div>
  );
};

export default Carroussel;
