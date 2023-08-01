const inputTask=document.getElementById("id-iput");
const addBtn=document.getElementById("btn");
const list=document.getElementById("my-list");
const delet=document.getElementsByClassName("delet");

const listArray=Array.from(list.children);
const deletArray=Array.from(delet);
console.log(listArray);

addBtn.addEventListener('click' , (e)=>{
e.preventDefault();
let newText=inputTask.value ;

let li=document.createElement("li");

let paragraph=document.createElement("p");
paragraph.textContent=newText;

let delBtn=document.createElement("button");
delBtn.type=("submit");
delBtn.textContent="delet";
li.appendChild(paragraph);
li.appendChild(delBtn);
list.appendChild(li);
});

listArray.forEach((item) => {
    item.addEventListener('click', (e)=> {
        item.classList.add("hidden");
        // listArray.pop(item);
    })
});


