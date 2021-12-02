import { createI18n } from "vue-i18n";

export function loadLang() {
    const context = import.meta.globEager("./lang/*.ts");
    const lang: AnyObject = {};

    let langs = Object.keys(context);
    for (let key of langs) {
        if (key === "./index.ts") return;
        let lang = context[key].lang;
        let name = key.replace(/(\.\/lang\/|\.ts)/g, '');
     
        lang[name] = lang
    }
    
    return lang
}

export const i18n = createI18n({
    // globalInjection: true,
    // legacy: false,
    locale: 'zh-cn',
    fallbackLocale: 'zh-cn',
    messages: loadLang()
})


export const i18nt = i18n.global.t

export function setLang(locale: string) {
    i18n.global.locale = locale
}