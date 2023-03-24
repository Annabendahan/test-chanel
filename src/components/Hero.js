import hero from "../assets/img/hero.jpg"
import { useTranslation } from 'react-i18next';
function Hero() {
    const { t, i18n } = useTranslation();
  return (
    <div className="hero">
        <img className="hero__background" src={hero} alt='img-hero'/>
        <div className="hero__label"> 
        <div className="hero__label">{t('hero.label')}
        </div></div>
    </div>
  );
}

export default Hero;