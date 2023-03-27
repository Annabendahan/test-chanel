// Slider page 

function SliderPage(props) {

  return (
   
        <div className="slider__page"> 
          <div className="slider__page__content"> 
            <div className="slider__page__infos"> 
             <h2 className="slider__page__infos__titles">
               {props.title1}<br/>
               {props.title2}</h2>
             <p className="slider__page__infos__desc"> {props.desc}</p>
             <div className="slider__page__infos__link-section"> 
               <a className="slider__page__infos__link-section__link" href="/" >{props.link}</a>
               <div className="slider__page__infos__link-section__underline"></div>
             </div>
            
            </div>
            <div className="slider__page__img"> 
             <img src={props.img} alt="slider-img"/>
            </div>
          </div>
        </div>
       
  );
}

export default SliderPage;