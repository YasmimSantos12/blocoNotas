let button=document.querySelector(".btn")
let tarefa=document.querySelector(".tarefa")
let blocos=document.querySelector(".blocos")

button.addEventListener('click',function(){
    if(tarefa.value!=""){
        let bloco=document.createElement("div")
        bloco.innerHTML=`
        <h3 class="bloco">${tarefa.value}</h3>
        <button class="delete" onclick="deletar(this)">Deletar</button>
        `
        blocos.appendChild(bloco)
        tarefa.value=""
    }
})
function deletar(button){
    let bloco=button.parentElement
    bloco.remove()
}
