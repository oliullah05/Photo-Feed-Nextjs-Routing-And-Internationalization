import "server-only"

const dictonaries = {
    en:()=>import("../dictonaries/en.json").then(module=>module.default),
    bn:()=>import("../dictonaries/bn.json").then(module=>module.default),
  
}


export const getDictonary = async(locale)=>dictonaries[locale]()