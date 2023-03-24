import hero from "../assets/img/hero.jpg"
import { useTranslation } from 'react-i18next';
function Hero() {
    const { t, i18n } = useTranslation();
  return (
    <div className="hero">
        <div className="hero__label"> 
           <p>{t('hero.label')}</p>
        </div>
    </div>
  );
}

export default Hero;