import React from 'react';
import gpt3Logo from '../../logo.svg';
import './footer.css';

const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-heading">
      <h1 className="gradient__text">Você quer entrar no futuro antes dos outros?</h1>
    </div>

    <div className="gpt3__footer-btn">
      <p>Solicite acesso antecipado</p>
    </div>

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <img src={gpt3Logo} alt="gpt3_logo" />
        <p>EudesGmoes <br /> Todos os direitos reservados.</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Links</h4>
        <p>Overons</p>
        <p>Rede Social</p>
        <p>Parceiros</p>
        <p>Contato</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Empresa</h4>
        <p>Termos & Condições </p>
        <p>Política de Privacidade</p>
        <p>Contato</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Entre em contato</h4>
        <p>Eudes Gomes</p>
        <p>+55 99 99999-9999</p>
        <p>info@eudes.net</p>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>@2021 GPT-3. Todos os direito reservados.</p>
    </div>
  </div>
);

export default Footer;
