



export function databr (dt){
    let dia = String(dt).substr(8,10)
    let ano = String(dt).substr(0,4)
    let mes =String(dt).substr(5,7)
    let databrasil = `${dia}+/${mes}+/${ano}`
    return databrasil
}