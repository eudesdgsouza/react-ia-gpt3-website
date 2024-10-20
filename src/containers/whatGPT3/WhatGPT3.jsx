import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="O que é GPT-3" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">As possibilidades estão além da sua imaginação</h1>
      <p>Explorar a Biblioteca</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Chatbots" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
      <Feature title="Base de conhecimento" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
      <Feature title="Educação" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
    </div>
  </div>
);

export default WhatGPT3;
