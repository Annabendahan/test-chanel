import Picture from './Picture'
import { useTranslation } from 'react-i18next';
import giedre from '../assets/img/giedre.jpg'
import imari from '../assets/img/imari.jpg'


function Content() {
    const { t, i18n } = useTranslation();
  return (
    <div className="content">
         <div className="content__title-section">
            <h1> {t('content.title')}</h1>
            <p> {t('content.desc')} </p>
        </div>
        <Picture src={giedre} /> 
        <Picture src={imari} /> 
       
    </div>
  );
}

export default Content;