import React from 'react';

const Portfolio = () => {
  return (
    <div id="portfolio">
      <section class="scroll-panel" id="portfolio">
        <div class="row">
          <h2 class="text-center title">PORTFOLIO</h2>
          <div class="space"></div>
          <div class="col-xs-12 col-md-4">
            <div class="thumbnail">
              <p class="lead text-center">Tribute Page</p>
              <img alt=" " src="https://preview.ibb.co/m6eUMk/steve_jobs_new_zpsm86aps6x.jpg" class="images"/>
              <a id="links" href="https://codepen.io/kingisaac95/full/VjbpQA/" target="blank"><button class="btn btn-default btn-block">View Project</button></a>
            </div>
          </div>
          <div class="col-xs-12 col-md-4">
            <div class="thumbnail">
              <p class="lead text-center">My Portfolio</p>
              <img alt=" " src="https://preview.ibb.co/cgrb1k/portfolio_zpszpddezkz.png" class="images"/>
              <a id="links" href="https://codepen.io/kingisaac95/full/AXrpVr/" target="blank"><button class="btn btn-default btn-block">View Project</button></a>
            </div>
          </div>
          <div class="col-xs-12 col-md-4">
            <div class="thumbnail">
              <p class="lead text-center">Calladom Solutions Ltd.</p>
              <img alt=" " src="https://preview.ibb.co/e3CKnQ/calladom.png" class="images"/>
              <a id="links" href="https://kingisaac95.github.io/calladom/" target="blank"><button class="btn btn-default btn-block">View Project</button></a>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xs-12 col-md-4">
            <div class="thumbnail">
              <p class="lead text-center">Simple Login Page</p>
              <img alt=" " src="https://preview.ibb.co/jp0Qu5/login_zpsibwapeh8.png" class="images"/>
              <a id="links" href="https://codepen.io/kingisaac95/full/mEGbGv/" target="blank"><button class="btn btn-default btn-block">View Project</button></a>
            </div>
          </div>
          <div class="col-xs-12 col-md-4">
            <div class="thumbnail">
              <p class="lead text-center">Random Quote Machine</p>
              <img alt=" " src="https://preview.ibb.co/gvh5u5/random_quote_zpshghdcmqx.png" class="images"/>
              <a id="links" href="https://codepen.io/kingisaac95/full/ZBXQmo/" target="blank"><button class="btn btn-default btn-block">View Project</button></a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
