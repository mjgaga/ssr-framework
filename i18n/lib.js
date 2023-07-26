function _i18nFnWarp(lib) {
        return new _I18nLib(lib)
}

class _I18nLib {
    constructor(lib) {
        this.lib = lib
    }
    getLib = _ => {
        return this.lib
    }
    __ = (name, ...args) =>{
        return i18nFn(this.lib, name, ...args)
    }
}


function i18nFn(lib, name,  ...args) {
    if (!lib) {
        console.warn("[i18n] lib is empty")
        return name
    }

    const keys = name.split("/")
    if (keys.length === 1) {
        keys.unshift("default")
    }

    const namespaces = keys.slice(0, keys.length - 1)
    const itemName = keys[keys.length - 1]
    let namespaceLib = lib
    for (let namespace of namespaces) {
        namespaceLib = namespaceLib[namespace]
        if (!namespaceLib) {
            console.warn(`[i18n] can't find i18n name: ${name}`)
            return name
        }
    }

    args = args || []
    let itemValue = namespaceLib[itemName]
    if (!itemValue) {
        return name
    }

    // if  (args.length !== (itemValue.match(/%s/g) || []).length) {
    //     console.warn(`[i18n] key: [${name}] place holder count != args.length, some string was lost`)
    // }

    let arg
    while (arg = args.shift()) {
        const argType = typeof arg
        if (argType === "function") {
            itemValue = arg(itemValue)
        } else if (argType === "string" ) {
            itemValue = itemValue.replace("%s", arg)
        } else {
           console.warn(`[i18n] unknown arg type: ${argType}`)
        }
    }

    return itemValue

    // if (typeof itemValue === "function")  {
    //     return itemValue(...args)
    // } else if (typeof itemValue === "string" )  {
    //
    // }



}

exports.i18nFnWarp = _i18nFnWarp
exports.I18nLib = _I18nLib
