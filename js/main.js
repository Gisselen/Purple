import navComponente from "./nav.js"
import Banner from "./banner.js"


let Menus = ["Home","Produtos","Contato"]
let nav = new navComponente();

nav.CriarNovoMenu("barra_01", Menus)
nav.CriarBarraNavUsuario("barra_01","Home")

let B = new Banner();
let BannerInfo = ["<h1>Compra Rápida</h1> <br> <h3>Compre isso mais rápido....</h3>","<h1>Compre Roupas da moda</h1> <br> <h3>Moda</h3>","<h1>Oferta</h1>"]
B.CriarBanner("banner_1")
B.ModificaBanner("banner_1",BannerInfo,0)

let BannerIndex = 0
setInterval(() => {
    if(BannerIndex >= 2){
        BannerIndex = 0
    }
    B.ModificaBanner("banner_1",BannerInfo,BannerIndex)
    BannerIndex +=1
},3000)


//buttons
document.getElementById("btBannerProximo").addEventListener("click",()=>{
    if(BannerIndex >= 2){
        BannerIndex = 0
    }
    else{
        BannerIndex +=1
    }
    B.ModificaBanner("banner_01",BannerInfo,BannerIndex)
})

document.getElementById("btBannerAnterior").addEventListener("click",()=>{
    if(BannerIndex <= 0){
        BannerIndex = 2
    }
    else{
        BannerIndex <=1
    }
    B.ModificaBanner("banner_01",BannerInfo,BannerIndex)
})
