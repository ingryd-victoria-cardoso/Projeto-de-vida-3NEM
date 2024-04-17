const botoes = document.querySelectorAll(."botao");
 const-textos =document.querySelectorAll(".aba-conteudo");
for(let i=0;i <botoes.length;i++) {
 botoes[i].onclick = function(){

 
   for (let j=0;j<botoes.length;j++){
    botoes{j}.classlit.remove("ativo");
    textos{j}.classlit.remove("ativo");
   }
    
    botoes[i].classlit.add("ativo");
    textos[i].classlit.add("ativo");
   }
 }
    
const contadores = document.querySelectorAll(".contador");
const tempoObjetivo1= new Date()

contadores[0].textContent ="contagem regressiva";
