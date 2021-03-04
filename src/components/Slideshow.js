import React, { Component } from 'react';

export default class Slideshow extends Component {
  state = {
    clients:[
      { "src": "https://storage.googleapis.com/gd-wagtail-prod-assets/original_images/evolving_google_identity_2x1.jpg" },
      { "src": "https://www.alabamanews.net/content/uploads/2018/08/AP_507901716902.png" },
      { "src": "https://lh3.googleusercontent.com/proxy/TVKgMeyJAFlLiW0QEh0kAzPOA-c9Z1BPFobrluooRILSKJjiXDhprpl6plcmLC-d8DwW5pYdxvtHEMIGlWNa1pFl5sOVvcMmAJm5KXvfnM6VnDxEkLsFJqG0JEjcN4559F1pcHJPtcSIhP90L7O7zw5zWLMK4LI" },
            { "src": "https://storage.googleapis.com/gd-wagtail-prod-assets/original_images/evolving_google_identity_2x1.jpg" },
      { "src": "https://www.alabamanews.net/content/uploads/2018/08/AP_507901716902.png" },
      { "src": "https://lh3.googleusercontent.com/proxy/TVKgMeyJAFlLiW0QEh0kAzPOA-c9Z1BPFobrluooRILSKJjiXDhprpl6plcmLC-d8DwW5pYdxvtHEMIGlWNa1pFl5sOVvcMmAJm5KXvfnM6VnDxEkLsFJqG0JEjcN4559F1pcHJPtcSIhP90L7O7zw5zWLMK4LI" },      { "src": "https://storage.googleapis.com/gd-wagtail-prod-assets/original_images/evolving_google_identity_2x1.jpg" },
      { "src": "https://www.alabamanews.net/content/uploads/2018/08/AP_507901716902.png" },
      { "src": "https://lh3.googleusercontent.com/proxy/TVKgMeyJAFlLiW0QEh0kAzPOA-c9Z1BPFobrluooRILSKJjiXDhprpl6plcmLC-d8DwW5pYdxvtHEMIGlWNa1pFl5sOVvcMmAJm5KXvfnM6VnDxEkLsFJqG0JEjcN4559F1pcHJPtcSIhP90L7O7zw5zWLMK4LI" },      { "src": "https://storage.googleapis.com/gd-wagtail-prod-assets/original_images/evolving_google_identity_2x1.jpg" },
      { "src": "https://www.alabamanews.net/content/uploads/2018/08/AP_507901716902.png" },
      { "src": "https://lh3.googleusercontent.com/proxy/TVKgMeyJAFlLiW0QEh0kAzPOA-c9Z1BPFobrluooRILSKJjiXDhprpl6plcmLC-d8DwW5pYdxvtHEMIGlWNa1pFl5sOVvcMmAJm5KXvfnM6VnDxEkLsFJqG0JEjcN4559F1pcHJPtcSIhP90L7O7zw5zWLMK4LI" },      { "src": "https://storage.googleapis.com/gd-wagtail-prod-assets/original_images/evolving_google_identity_2x1.jpg" },
      { "src": "https://www.alabamanews.net/content/uploads/2018/08/AP_507901716902.png" },
      { "src": "https://lh3.googleusercontent.com/proxy/TVKgMeyJAFlLiW0QEh0kAzPOA-c9Z1BPFobrluooRILSKJjiXDhprpl6plcmLC-d8DwW5pYdxvtHEMIGlWNa1pFl5sOVvcMmAJm5KXvfnM6VnDxEkLsFJqG0JEjcN4559F1pcHJPtcSIhP90L7O7zw5zWLMK4LI" }
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
