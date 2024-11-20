import React from 'react'
import './blog.css'
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';

function Blog() {
  return (
    <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">A lot is happening, <br /> We are blogging about it.</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article imgUrl={blog01} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us explore how it is?" />
      </div>
      <div className="gpt3__blog-container_groupB">
      <Article imgUrl={blog02} date="Mar 15, 2023" text="How AI is transforming education and the way we learn?" />
      <Article imgUrl={blog03} date="Jul 10, 2023" text="Exploring AI's impact on medicine: a healthier future?" />
      <Article imgUrl={blog04} date="Oct 5, 2023" text="From industrial robots to virtual assistants: AI's revolution in industry." />
      <Article imgUrl={blog05} date="Jan 20, 2024" text="Ethics in the age of AI: how do we ensure technology is used responsibly?" />

      </div>
    </div>
  </div>
  )
}

export default Blog
