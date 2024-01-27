const inputBox = document.querySelector("#input-box");
const listItem = document.querySelector("#list-container");
const btn1 = document.querySelector("#btn");

btn1.addEventListener("click", ()=>{
    if(inputBox.value === ""){
        alert("Add Task first");
    }else{let list = document.createElement("li");
list.innerHTML = inputBox.value;
listItem.appendChild(list);
saveData();
let span = document.createElement("span");
span.innerHTML = ("\u00d7");
list.appendChild(span)
};
inputBox.value = "";
saveData();
});

listItem.addEventListener("click", (e)=>{
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked")
        saveData();
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }; 
    saveData();
});

saveData=()=>{
    localStorage.setItem("data", listItem.innerHTML);
};

showData = ()=>{
  listItem.innerHTML = localStorage.getItem("data")
};
showData();
