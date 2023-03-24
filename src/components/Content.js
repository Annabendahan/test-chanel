import Picture from './Picture'
import Slider from './Slider/Slider'
import Cta from './Cta'
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
        <Slider/>
        <Cta label={t('content.cta1')} />
        <Picture src={imari} /> 
        <div className="content__end-section">
            <h2> {t('content.end.title')}</h2>
            <p  className="content__end-section__desc"> {t('content.end.desc')} </p>
            <Cta label={t('content.cta2')} />
        </div>
        <div className="content__note">{t('content.note')}</div>
    </div>
  );
}

export default Content;