import React, { Component } from 'react';

export default class Slideshow extends Component {
  state = {
    clients:[
      { "src": "https://storage.googleapis.com/gd-wagtail-prod-assets/original_images/evolving_google_identity_2x1.jpg" },
      { "src": "https://www.alabamanews.net/content/uploads/2018/08/AP_507901716902.png" },
      { "src": "https://1000logos.net/wp-content/uploads/2017/08/Airbnb-logo.jpg" },
      { "src": "https://storage.googleapis.com/gd-wagtail-prod-assets/original_images/evolving_google_identity_2x1.jpg" },
      { "src": "https://www.alabamanews.net/content/uploads/2018/08/AP_507901716902.png" },
      { "src": "https://1000logos.net/wp-content/uploads/2017/08/Airbnb-logo.jpg" },
      { "src": "https://storage.googleapis.com/gd-wagtail-prod-assets/original_images/evolving_google_identity_2x1.jpg" },
      { "src": "https://www.alabamanews.net/content/uploads/2018/08/AP_507901716902.png" },
      { "src": "https://1000logos.net/wp-content/uploads/2017/08/Airbnb-logo.jpg" },      
      { "src": "https://storage.googleapis.com/gd-wagtail-prod-assets/original_images/evolving_google_identity_2x1.jpg" },
      { "src": "https://1000logos.net/wp-content/uploads/2017/08/Airbnb-logo.jpg" },      
      { "src": "https://storage.googleapis.com/gd-wagtail-prod-assets/original_images/evolving_google_identity_2x1.jpg" },
      { "src": "https://www.alabamanews.net/content/uploads/2018/08/AP_507901716902.png" },
      { "src": "https://1000logos.net/wp-content/uploads/2017/08/Airbnb-logo.jpg" }
    ]
  }
  render() {
    return (
      <div className="slideshow">
        <div class="slider">
          <div class="slide-track">
          {this.state.clients.map((client) => {
            return <div class="slide">
              <img src={client.src} height="230" width="250" alt="" />
            </div>
          })}
          </div>
        </div>
      </div>
    );
  }
}
