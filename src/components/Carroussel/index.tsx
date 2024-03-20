import { useState } from "react";
import Bg from "../Bg";
import Card from "../MiniRef";
import "./style.css";

type content = {
  img: string;
  title: string;
  info: string ;
};

const carroussel: content[] = [
  {
    img: "https://1.bp.blogspot.com/-_pphTiG8TPw/YHW1WITFfjI/AAAAAAAAfWE/uroCYGSEB5IPT-_N6E6Vy3_nl16DNFYTwCLcBGAsYHQ/w1200-h630-p-k-no-nu/disco-elysium-final-cut-capa.jpg",
    title: "Disco Elysium",
    info: "Kim é tipo o melhor pessonagem dos jogos",
  },
  {
    img: "https://cdn2.unrealengine.com/egs-genshin-impact-4-5-carousel-desktop-1280x720-4bbbd1a11eb3.jpg?h=720&amp;quality=medium&amp;resize=1&amp;w=1280",
    title: "Genshin Impact",
    info: "A versão 4.5 deixa Chiori jogável e te convida a administrar uma loja de poções em Mondstadt com Jean e Lisa.",
  },
  {
    img: "https://cdn2.unrealengine.com/egs-black-myth-wukong-carousel-desktop-1920x1080-5382ee8aadea.jpg?h=720&amp;quality=medium&amp;resize=1&amp;w=1280",
    title: "Black Myth: Wukung",
    info: "Encare os desafios e as maravilhas do mundo para desvendar a verdade obscura por trás de uma lenda gloriosa do passado.",
  },
  {
    img: "https://cdn2.unrealengine.com/egs-dead-by-daylight-all-things-wicked-carousel-desktop-1920x1080-436f25abec89.jpg?h=720&amp;quality=medium&amp;resize=1&amp;w=1280",
    title: "Dead By DayLight",
    info: "Encare o desconhecido em All Things Wicked, Coisas Nefastas, de Dead by Daylight.",
  },
  {
    img: "https://cdn2.unrealengine.com/egs-horizon-forbidden-west-carousel-desktop-1920x1080-358478b6468a.jpg?h=720&amp;quality=medium&amp;resize=1&amp;w=1280" ,
    title: "Horizon Forbidden West",
    info: "Vivencie o épico Horizon Forbidden West™ completo, incluindo conteúdo bônus e a expansão Burning Shores.",
  },
  {
    img: "https://cdn2.unrealengine.com/egs-expeditions-carousel-desktop-1920x1080-4597dcd7ea34.jpg?h=720&amp;quality=medium&amp;resize=1&amp;w=1280",
    title: 'Expeditions: A MudRunner Game',
    info: 'Embarque em expedições científicas com esta nova aventura off-road dos criadores de MudRunner e SnowRunner.'
  }
  
];

const card: content[] = [
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgpVZ0KLfprA7bbP-VeQsyGGD2akDRnGWbG67BdvfQmw&s",
    title: "Disco Elysium",
    info: "mo brisa",
  },
  {
    img: "https://cdn2.unrealengine.com/en-egs-genshin-impact-4-5-carousel-thumb-1200x1600-624f8a22f3cf.jpg?h=128&amp;quality=medium&amp;resize=1&amp;w=96",
    title: "Genshin Impact",
    info: ''
  },
  {
    img: 'https://cdn2.unrealengine.com/egs-black-myth-wukong-carousel-thumb-1200x1600-7e45f3779a38.jpg?h=128&amp;quality=medium&amp;resize=1&amp;w=96',
    title: 'Black Myth: Wukung',
    info: ''
  },
  {
    img: 'https://cdn2.unrealengine.com/egs-dead-by-daylight-all-things-wicked-carousel-thumb-1200x1600-0e004aed0588.jpg?h=128&amp;quality=medium&amp;resize=1&amp;w=96',
    title: 'Dead by Daylight',
    info: ''
  },
  {
    img: 'https://cdn2.unrealengine.com/egs-expeditions-carousel-thumb-1200x1600-72e70037d7b0.jpg?h=128&amp;quality=medium&amp;resize=1&amp;w=96',
    title: 'Expeditions: A MudRunner Game',
    info: ''
  },
  {
    img: 'https://cdn2.unrealengine.com/egs-horizon-forbidden-west-carousel-thumb-1200x1600-011a41336cf9.jpg?h=128&amp;quality=medium&amp;resize=1&amp;w=96',
    title: 'Horizon Forbidden West™',
    info: ''
  }


];

const Carroussel = () => {

  // eslint-disable-next-line no-var
  var [img, setImg] = useState(0)

  if(img == carroussel.length){
    img = 0
  }

  setTimeout(()=>{setImg(img + 1)}, 3000)

  return (
    <div className="banner">
      <Bg
        img={carroussel[img].img}
        title={carroussel[img].title}
        info={carroussel[img].info}
      />
      <div className="vComp">

        {card.map((e) => (
          <Card img={e.img} title={e.title} />
        ))}
      </div>
    </div>
  );
};

export default Carroussel;
