// Picture parralax component 

import {gsap} from "gsap";
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import {ScrollToPlugin} from 'gsap/ScrollToPlugin'

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

function Picture (props) {

  // Parralax method: check height difference between picture and container and handle movement on scroll
    gsap.utils.toArray(".picture__content").forEach((section, i) => {
        const heightDiff = section.offsetHeight - section.parentElement.offsetHeight;
        gsap.fromTo(section,{ 
            y: -heightDiff
          }, {
            scrollTrigger: {
              trigger: section,
              scrub: true
            },
            y: 0,
            ease: "none"
          });
        });


  return (
    <div className="picture">
        <div className="picture__content picture__content__mob" style={{backgroundImage: `url(${props.srcMob})`}}></div>
        <div className="picture__content picture__content__desk" style={{backgroundImage: `url(${props.srcDesk})`}}></div>
    </div>
  );
}

export default Picture;