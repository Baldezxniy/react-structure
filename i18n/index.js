import i18next from 'i18next'
import eng from './en.json'
import rus from './ru.json'
import { initReactI18next } from 'react-i18next'

i18next.use(initReactI18next).init({
    debug: true,
    compatibilityJSON: 'v3',
    lng: 'en',
    resources: {
        en: eng,
        ru: rus
    },
    react: {
        useSuspense: false,
    }
})
export default i18next