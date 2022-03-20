import React from 'react'
import { blog01, blog02, blog03, blog04, blog05 } from './imports.js';
import Article from '../../components/article/Article';
import './blog.css'
const Blog = () => {
  return (
    <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">A lot is happening, <br /> We are blogging about it.</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article imgUrl={blog01} date="March 18, 2022" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={blog02} date="March 18, 2022" text="GPT-3 and Open AI allows organizations to make better decisions. Let us exlore how it is?" />
        <Article imgUrl={blog03} date="March 18, 2022" text="GPT-3 and Open AI can help designers and artists make quick tweaks to visuals. Let us exlore how it is?" />
        <Article imgUrl={blog04} date="March 18, 2022" text="GPT-3 and Open AI drives down the time taken to perform a task. Let us exlore how it is?" />
        <Article imgUrl={blog05} date="March 18, 2022" text="GPT-3 and Open AI augments the capabilities of differently abled individuals. Let us exlore how it is?" />
      </div>
    </div>
  </div>
  )
}

export default Blog