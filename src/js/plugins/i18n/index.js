import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      hero: {
        label: 'GO TO THE MOON'
      }, 
      content: {
        title: 'OVER THE MOON *', 
        desc: 'Quatre inconnus se rencontrent dans un ascenseur pour la Lune.', 
        slider: {
            s1: {
              title1: 'PREMIERE ROCK  ', 
              title2: ' PINK BLOSSOM', 
              desc: 'La PREMIÈRE ROCK ose le rose avec sa chaîne en acier entrelacée de cuir pastel. En édition limitée.', 
              link: 'DÉCOUVREZ'
            }, 
            s2: {
              title1: 'LOREM IPSUM', 
              title2: '',
              desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In posuere eleifend blandit. Interdum et malesuada fames ac ante ipsum primis in faucibus.', 
              link: 'DÉCOUVREZ'
            }
        },
        cta1: 'DÉCOUVRIR LA SÉLECTION',
        cta2: 'TROUVEZ VOTRE BOUTIQUE', 
        end: {
          title: 'DÉCOUVRIR LES PIÈCES EN BOUTIQUE', 
          desc: 'Découvrez les nouvelles pièces dans votre boutique CHANEL'
        },
        note: '*Destination lune'
      }
    }
  },
  fr: {
    translation: {
      "Welcome to React": "Bienvenue à React et react-i18next"
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;