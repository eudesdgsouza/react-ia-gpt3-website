import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      <h4>Solicite acesso antecipado para começar</h4>
      <h1 className="gradient__text">As possibilidades são <br /> além da sua imaginação</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati aliquid dignissimos, nulla beatae minima quidem quisquam nesciunt molestiae, voluptatibus qui ab ut eligendi ea rerum exercitationem minus, voluptate ipsa quas?</p>
      <h4>Solicite acesso antecipado para começar</h4>
    </div>
  </div>
);

export default Possibility;
