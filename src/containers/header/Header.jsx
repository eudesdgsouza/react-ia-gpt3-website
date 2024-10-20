import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text"> Construa algo incrível com GPT-3 OpenAI</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, earum deserunt nostrum alias reiciendis blanditiis placeat sint ducimus. Dignissimos tempore illum quasi obcaecati perferendis tempora aspernatur dicta consectetur. Assumenda, laudantium?</p>

      <div className="gpt3__header-content__input">
        <input type="email" placeholder="Seu endereço de email" />
        <button type="button">Comece já!</button>
      </div>

      <div className="gpt3__header-content__people">
        <img src={people} />
        <p>1.600 pessoas solicitaram acesso para visita nas últimas 24 horas</p>
      </div>
    </div>

    <div className="gpt3__header-image">
      <img src={ai} />
    </div>
  </div>
);

export default Header;
