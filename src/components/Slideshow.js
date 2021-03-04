import React, { Component } from 'react';

export default class Slideshow extends Component {
  state = {
    clients:[
      { "src": "https://storage.googleapis.com/gd-wagtail-prod-assets/original_images/evolving_google_identity_2x1.jpg" },
      { "src": "https://www.alabamanews.net/content/uploads/2018/08/AP_507901716902.png" },
      { "src": "http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG" },
      { "src": "https://storage.googleapis.com/gd-wagtail-prod-assets/original_images/evolving_google_identity_2x1.jpg" },
      { "src": "https://www.alabamanews.net/content/uploads/2018/08/AP_507901716902.png" },
      { "src": "http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG" },
      { "src": "https://storage.googleapis.com/gd-wagtail-prod-assets/original_images/evolving_google_identity_2x1.jpg" },
      { "src": "https://www.alabamanews.net/content/uploads/2018/08/AP_507901716902.png" },
      { "src": "http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG" },      
      { "src": "https://storage.googleapis.com/gd-wagtail-prod-assets/original_images/evolving_google_identity_2x1.jpg" },
      { "src": "http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG" },      
      { "src": "https://storage.googleapis.com/gd-wagtail-prod-assets/original_images/evolving_google_identity_2x1.jpg" },
      { "src": "https://www.alabamanews.net/content/uploads/2018/08/AP_507901716902.png" },
      { "src": "http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG" }
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
