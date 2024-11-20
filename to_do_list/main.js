work="";
function addTask(){
inp=document.querySelector("#todolist");
hide=document.querySelector("#list");
if(inp.value===" "){
    alert("please enter your task")
    return;
}
list=document.createElement("li")
list.innerHTML=inp.value  + "<button class='dlt-btn' onclick='deletetodo(this)' > Delete </button>  " + "<br><br>" 
list.addEventListener("click",function(){
this.classList.toggle('completed')
});

hide.appendChild(list);
inp.value=" ";
}

function deletetodo(button){
li=button.parentElement;
li.remove()
}