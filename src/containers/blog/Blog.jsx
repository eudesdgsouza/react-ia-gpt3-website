import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">Muita coisa está acontecendo, <br /> E vamos postar sempre as novidades.</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article imgUrl={blog01} date="Setembro 26, 2024" text="GPT-3 e Open AI são o futuro. Vamos explorar?" />
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={blog02} date="Setembro 26, 2024" text="GPT-3 e Open AI são o futuro. Vamos explorar?" />
        <Article imgUrl={blog03} date="Setembro 26, 2024" text="GPT-3 e Open AI são o futuro. Vamos explorar?" />
        <Article imgUrl={blog04} date="Setembro 26, 2024" text="GPT-3 e Open AI são o futuro. Vamos explorar?" />
        <Article imgUrl={blog05} date="Setembro 26, 2024" text="GPT-3 e Open AI são o futuro. Vamos explorar?" />
      </div>
    </div>
  </div>
);

export default Blog;
