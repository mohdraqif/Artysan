import React from 'react';
import {Link} from 'react-router-dom'

const Blog = () => {
  return (
    <div className="first" id="blog">
      <div className="service-title">
        <h1>What We Think</h1>
      </div>
      <main id="blog">
        <div className="blog-info">
          <div className="job job-1">
            <img src={require('../images/img6.jpg')} width="330" height="230px" alt="1"/>
            <button className="fancy-button bg-gradient1"><a href="https://medium.com/@mohdraqif1/i-wish-i-never-regret-about-these-things-in-my-life-again-3697ba705e18" target="_blank" rel="noopener noreferrer">Read more</a></button>
            <p>Regret is a negative cognitive/emotional state where one feels sad or disappointed, feeling a sense of loss or sorrow at what might have been or wished we could undo a previous choice we made. Here’s what I came up with . . . .</p>
          </div>

          <div className="job job-2">
            <img src={require('../images/img1.jpg')} width="330" height="230px" alt="1"/>
            <button className="fancy-button bg-gradient1"><a href="https://medium.com/@mohdraqif1/the-experts-advice-5836aea2aca3" target="_blank" rel="noopener noreferrer">Read more</a> </button>
            <p>“Of Course! I wanna WIN but …… HOW can I? WHY must I? WHAT if so and so? What will ‘they’ think?” and the list goes on. “Solution, Dude! Solution! What’s the solution? You have any?”. “Surely I got ONE” . . . .</p>
          </div>

          <div className="job job-3">
            <img src={require('../images/img5.jpg')} width="330" height="230px" alt="1"/>
            <button className="fancy-button bg-gradient1"><a href="https://medium.com/@mohdraqif1/the-espr-rule-for-programmers-cffb34b88aab" target="_blank" rel="noopener noreferrer">Read more</a> </button>
            <p>No doubt, programmers are special editions amidst the people but it should be that there are few points to consider too. I always try to find the best routine for my overall day that can keep me productive in the best way . . . .</p>
          </div>
      </div>
    </main>
  </div>
  );
}

export default Blog;
