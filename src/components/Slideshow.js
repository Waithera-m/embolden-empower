import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
 
const Slideshow = () => {
    return (
      <div className="slide-container">
        <Slide>
        <div className="each-slide">
            <div className="slideImages" style={{'backgroundImage': "url(https://blackandmarriedwithkids.com/wp-content/uploads/2015/03/people-three-portrait-black-i-love-black-women-pb-FEATURE-.jpg)"}}>
              <span style={{'color': "white", 'textDecoration': 'underline'}} className="display-3 text-center">Woman</span><br />
              <span style={{'color': "white"}} className="display-4">Inspiring black women to aspire</span>
            </div>
          </div>
          <div className="each-slide">
            <div className="slideImages" style={{'backgroundImage': "url(https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fdam%2Fimageserve%2F1150881602%2F0x0.jpg%3Ffit%3Dscale)"}}>
              <span style={{'color': "white", 'text-align': "center"}} className="display-3">Embolden</span>
            </div>
          </div>
          <div className="each-slide">
            <div className="slideImages" style={{'backgroundImage': "url(https://19thnews.org/wp-content/uploads/2020/08/Dr.Afoh-Manin_KarlaGachet08-1800x1200-c-default.jpg)"}}>
              <span style={{'color': "white"}} className="display-3">Empower</span>
            </div>
          </div>
        </Slide>
      </div>
    )
}

export default Slideshow;