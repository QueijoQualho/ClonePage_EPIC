import globoPng from "../../assets/globo.png";
import userPng from "../../assets/do-utilizador.png";
import logoPng from "../../assets/Epic_Games_logo.png";

import "./style.css";

const Header = () => {
  return (
    <header>
      <img src={logoPng} alt="" className="logo" />
      <span className="separator">|</span>
      <nav className="main_nav">
        <h3>STORE</h3>
        <div className="rightside">
          <ul>
            <li>
              <a href="/distribution">Distribuição</a>
            </li>
            <li>
              <a href="/support">Suporte</a>
            </li>
            <li>
              <a href="/unreal-engine">Unreal Engine</a>
            </li>
          </ul>
        </div>
        <div className="leftside">
          <a href="/link1">
            <img src={globoPng} width={32} alt="" />
          </a>
          <a href="/link2">
            <img src={userPng} width={32} alt="" />
          </a>
          <a className="download">Download</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
