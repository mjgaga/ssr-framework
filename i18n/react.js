const React =  require("react")
const { createContext, useContext } = React
const {i18nFnWarp} = require("./lib")

const C = createContext(null);

function I18nProvider({i18nLib, ...children}){
    const i18n = i18nFnWarp(i18nLib)
    const useI18n = i18n.__

    return React.createElement(C.Provider, Object.assign({
        value: useI18n
    }, children));
}

function useI18n() {
    return useContext(C)
}

exports.I18nProvider = I18nProvider
exports.useI18n = useI18n