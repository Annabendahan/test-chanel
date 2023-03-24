import { useTranslation } from 'react-i18next';
function Cta(props) {
    const { t, i18n } = useTranslation();
  return (
    <div className="cta">
        <button className="cta__button"> 
           <p>{props.label}</p>
        </button>
    </div>
  );
}

export default Cta;