import React, { Component } from 'react';

export default class Slideshow extends Component {
  state = {
    clients:[
      { "src": "https://i2.wp.com/artysan.co.in/wp-content/uploads/2018/06/cropped-CADD-NEW-1.jpg?zoom=1.5&w=3840&ssl=1" },
      { "src": "https://secureservercdn.net/160.153.137.167/mhq.97f.myftpupload.com/wp-content/uploads/2018/08/cropped-unnamed-1.jpg" },
      { "src": "https://secureservercdn.net/160.153.137.167/mhq.97f.myftpupload.com/wp-content/uploads/2018/12/images.png" },
      { "src": "https://secureservercdn.net/160.153.137.167/mhq.97f.myftpupload.com/wp-content/uploads/2018/08/cropped-dufl.png" },
      { "src": "https://secureservercdn.net/160.153.137.167/mhq.97f.myftpupload.com/wp-content/uploads/2018/08/cropped-campus.png" },
      { "src": "https://secureservercdn.net/160.153.137.167/mhq.97f.myftpupload.com/wp-content/uploads/2018/08/cropped-ladli-3.png" },
      { "src": "https://secureservercdn.net/160.153.137.167/mhq.97f.myftpupload.com/wp-content/uploads/2018/08/cropped-spark-2.png" },
      { "src": "https://secureservercdn.net/160.153.137.167/mhq.97f.myftpupload.com/wp-content/uploads/2019/06/cropped-blossom.png" },
      { "src": "https://secureservercdn.net/160.153.137.167/mhq.97f.myftpupload.com/wp-content/uploads/2018/06/oceanview.png" }
    ]
  }
  render() {
    return (
      <div className="slideshow">
        <div class="slider">
          <div class="slide-track">
          {this.state.clients.map((client) => {
            return <div class="slide">
              <img src={client.src} height="200" width="250" alt="" />
            </div>
          })}
          </div>
        </div>
      </div>
    );
  }
}
