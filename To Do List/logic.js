var input = document.getElementsByClassName("in")[0];
var add = document.getElementsByClassName("add")[0];
var tasks = document.getElementsByClassName("box")[0];

function addToList(){
    var item = document.createElement("div");
    var taskdetails = document.createElement("input");
    taskdetails.value=input.value;
    taskdetails.classList.add('listeditem');

    var del = document.createElement("button");
    del.classList.add('delete');
    del.innerHTML="DELETE";
    
    tasks.appendChild(item);
    item.appendChild(taskdetails);
    item.appendChild(del);
    input.value="";
    
    del.addEventListener("click",() => {
       tasks.removeChild(item); 
    });
    
}


add.addEventListener("click",addToList);