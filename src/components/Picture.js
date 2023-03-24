import {gsap} from "gsap";
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import {ScrollToPlugin} from 'gsap/ScrollToPlugin'

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)


function Picture (props) {

    gsap.utils.toArray(".picture .picture__content").forEach((section, i) => {
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
        <div className="picture__content" style={{backgroundImage: `url(${props.src})`}}></div>
       
    </div>
  );
}

export default Picture;