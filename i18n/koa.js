const fs = require("fs");
const path = require("path");
const acceptLanguage = require('accept-language');
const {defaultLanguage:defaultLanguageName} = require("../argv")

const {i18nFnWarp} = require("./lib")

const LanguageNameEnUS = "en", LanguageNameZhTW = "zh"
acceptLanguage.languages([LanguageNameEnUS, LanguageNameZhTW]);

exports.KoaMiddleware = function (ctx, next) {
    const zh_TW = loadLangLib("./locals/zh-tw.json")
    const en_US = loadLangLib("./locals/en-us.json")

    const defaultLanguage = {[LanguageNameZhTW]:zh_TW, [LanguageNameEnUS]:en_US}[defaultLanguageName]

    const language = ctx.query.language || acceptLanguage.get(ctx.get("accept-language"))
    let i18nLib
    switch (language) {
        default:
            i18nLib = defaultLanguage
            break
        case LanguageNameEnUS:
            i18nLib = en_US;
            break
        case LanguageNameZhTW:
            i18nLib = zh_TW;
            break

    }

    ctx.i18n = i18nFnWarp(i18nLib)
    return next()
}

function loadLangLib(libPath) {
    if (process.env.NODE_ENV !== "production") {
       return  JSON.parse(fs.readFileSync(path.resolve(__dirname, libPath)).toString())
    } else {
        return require(libPath)
    }
}