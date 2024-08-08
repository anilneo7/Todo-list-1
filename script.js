const inputBox=document.getElementById("input-box");
const listContainer=document.getElementById("list-container");

function addTask(){
    if(inputBox.value===""){
        alert("Add some task...");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        //adding cross at the end of task
        let span=document.createElement("span"); //Q- why only span tag,why not div?|ans-div breaks line while span is inline
        span.innerHTML="\u00d7"; // "\u00d7" will add a cross
        li.appendChild(span);
    }
    //after writing task the input-box will become empty
    inputBox.value="";
    //after adding task save it on localStorage
    saveData();
}
//javascript for delete tasks
listContainer.addEventListener("click",function(e){
    //if user clicks on task(</li>) then 
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData(); // why saveData() here?| ans- saveData() function is called after adding or deleting a task to ensure that the changes made to the task list are reflected in the local storage. 
    }
    //if the user clicks on cross then
    //using === cuz it checks type also
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();//parentElement of SPAN is LI
        saveData(); // why saveData() here?| ans- saveData() function is called after adding or deleting a task to ensure that the changes made to the task list are reflected in the local storage. 
    }
},false); //why "false" intially?| ans- for bubbling phase in useCapture(i.e. the 3rd parameter of eventListener)
//add a feature so that when user clicks enter(after writing task) then task get created

//storing task data in localStorage(or our browser)
function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}
//display the data whenever we open the website
function showDataOnSite(){
    listContainer.innerHTML=localStorage.getItem("data");
}
showDataOnSite(); //shows previous data ,when site is opened again
