import React from 'react';

const Service = () => {
  return (
    <div id="service">
      <div className="service-title">
        <h1>What We Serve</h1>
      </div>
      <div className="row">
        <div className="column1">
          <div className="brunch"/>
          <h1>Wall Solution</h1>
        </div>
        <div className="column2">
          <div className="dinner"/>
          <h1>Art Solution</h1>
        </div>
        <div className="column3">
          <div className="party"/>
          <h1>Workshops</h1>
        </div>
      </div>
      <div class="row">
        <div class="walk">
          <h2>Order Canvases</h2>
        </div>
        <div class="call">
          <h2>Wall Art</h2>
        </div>
        <div class="online">
          <h2>Brush Lettering</h2>
        </div>
      </div>
    </div>
  );
}

export default Service;
