import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Melhorando as desconfianças',
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates tenetur sapiente animi accusamus laudantium adipisci labore quae veniam dolore, optio, accusantium corrupti maxime quas, aperiam reiciendis vel consequatur cumque reprehenderit!',
  },
  {
    title: 'Torne-se o ativo cuidado',
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates tenetur sapiente animi accusamus laudantium adipisci labore quae veniam dolore, optio, accusantium corrupti maxime quas, aperiam reiciendis vel consequatur cumque reprehenderit!',
  },
  {
    title: 'Mensagem ou não sou nada?',
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates tenetur sapiente animi accusamus laudantium adipisci labore quae veniam dolore, optio, accusantium corrupti maxime quas, aperiam reiciendis vel consequatur cumque reprehenderit!',
  },
  {
    title: 'IA Expetacular',
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates tenetur sapiente animi accusamus laudantium adipisci labore quae veniam dolore, optio, accusantium corrupti maxime quas, aperiam reiciendis vel consequatur cumque reprehenderit!',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">O futuro é agora e você só precisa realizá-lo. Entre no futuro hoje. & Faça acontecer.</h1>
      <p>Solicite acesso antecipado para começar</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
