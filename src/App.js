import './App.css';
import React, { useState } from "react";
import burgerMenu from'./menu_btn.svg';
import Menu from './burgerMenu/Menu';
import Slider from './Slider/Slider';
import pointer from './Group.svg';



function App() {

  const [menuActive, setMenuActive] = useState(false)

  const items = [{value:"парковка", href:"/parkovka"},
  {value:"страховка", href:"/strahovka"},
  {value:"бензин", href:"/benzin"},
  {value:"обслуживание", href:"/obcluzivanie"}]

  return (
    <div className="app">
      <div className="nav">
        <div className="burger-btn" >
          <img src={burgerMenu} alt="no download" onClick={() => setMenuActive(!menuActive)}></img>
        </div>
        <div className="lang">
          <span>Eng</span>
        </div>
      </div>

      <Menu active = {menuActive} setActive = {setMenuActive} items={items}/>
      
      <div className="main">
        <div className="header">
          <p>Need for drive</p>
          <div className="ukaz">
            <img src={pointer}/>
            <span>Ульяновск</span> 
          </div>
        </div>
        <div className="heroblock">
          <h1 className="head">Каршеринг<br/><span>Need for drive</span></h1>
          <p>Поминутная аренда авто твоего города</p>
          <button>Забронировать</button>
        </div>
        <div className="footer">
          <span className="promo">© 2016-2019 «Need for drive»</span>
          <span>8 (495) 234-22-44</span>
        </div>
      </div>
      <Slider/>
    </div>
  );
}

export default App;
