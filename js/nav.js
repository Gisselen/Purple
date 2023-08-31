class navComponente{
  CriarNovoMenu(IdDoMenu,Elementos){
   let MenuEscolhido = document.getElementById(IdDoMenu)
   MenuEscolhido.innerHTML+="<ul id ='Menu_02'> </ul>"
   let MenuAcrescentar = document.getElementById("Menu_02")
   Elementos.forEach(MenuAdd => {
       MenuAcrescentar.innerHTML +="<li><a href='#'>"+MenuAdd+"</a></li>"
   });
   MenuAcrescentar.innerHTML+=""
   
  }
  CriarBarraNavUsuario(IdDoMenu,Localizacao){
      let MenuEscolhido = document.getElementById(IdDoMenu)
      MenuEscolhido.innerHTML+="<div class='localNav'><h4>"+Localizacao+"</h4></div>"

  }
}

export default navComponente 