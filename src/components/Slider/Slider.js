import { useTranslation } from 'react-i18next';
import {useState} from 'react';
import s1 from '../../assets/img/slider-1.jpg'
import s2 from '../../assets/img/slider-2.jpg'
import {gsap, Cubic} from "gsap";
import SliderPage from './SliderPage';


function Slider() {
    const { t, i18n } = useTranslation();
    const [slide, setSlide] = useState(0);
    const slides = 2

    const nextSlide = (elem) => {
        gsap.to(
            elem,
            {
                x: '-100vw', 
                ease: Cubic.easeOut, 
                duration: 1
            }
        )
    }
    const previousSlide = (elem) => {
        gsap.to(
            elem,
            {
                x: '0vw', 
                ease: Cubic.easeOut, 
                duration: 1
            }
        )
    }

    const setNextSlide = () => {
        console.log('clickednext')
        nextSlide(".slider__pages"); 
        setSlide(1)
    }
    const setPreviousSlide = () => {
        console.log('clickedprevious')
        previousSlide(".slider__pages"); 
        setSlide(0)
    }


  return (
    <div className="slider">
        <div className="slider__nav"> 
          <div className="slider__nav__arrows"> 
          
            <div className={`${slide === 1 ? "slider__nav__arrows__left" : "slider__nav__arrows__left__hidden" } `} onClick={setPreviousSlide}> 
            </div>
            
            <div className={`${slide === 1 ? "slider__nav__arrows__right__hidden" : "slider__nav__arrows__right" } `} onClick={setNextSlide}> 
            </div>
           
          </div>
        </div>
        <div className="slider__pages">
       <SliderPage 
            title1={t('content.slider.s1.title1')} 
            title2={t('content.slider.s1.title2')}
            desc={t('content.slider.s1.desc')}
            img={s1}
            link= {t('content.slider.s1.link')}  />
      
      <SliderPage 
            title1={t('content.slider.s2.title1')} 
            title2={t('content.slider.s2.title2')}
            desc={t('content.slider.s2.desc')}
            img={s2}
            link= {t('content.slider.s2.link')}  />

            </div>

        <div className="slider__count"> {slide+1} / {slides} </div>
    </div>
  );
}

export default Slider;