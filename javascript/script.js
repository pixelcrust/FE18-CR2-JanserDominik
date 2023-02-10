//get data from json

const json_string = [{ 
    "taskName": "Restday", 
    "image": "images/restday.jpg", 
    "description": "Regenerate your strength.", 
    "importance": 0    

},
{ 
    "taskName": "Yoga", 
    "image": "images/yoga.jpg", 
    "description": "Do yoga and stretch, for staying healthier.", 
    "importance": 0    

},
{ 
    "taskName": "Climbing", 
    "image": "images/climbing.jpg", 
    "description": "Go climbing and train the technique", 
    "importance": 0    

}, 
{ 
    "taskName": "Weight training", 
    "image": "images/weighttraining.jpg", 
    "description": "Build more strength.", 
    "importance": 0    

}];

//parse it into object
let obj_tasks = [{ 
    taskName: "Restday", 
    image: "images/restday.jpg", 
    description: "Regenerate your strength.", 
    importance: 0    

},
{ 
    taskName: "Yoga", 
    image: "images/yoga.jpg", 
    description: "Do yoga and stretch, for staying healthier.", 
    importance: 0    

},
{ 
    taskName: "Climbing", 
    image: "images/climbing.jpg", 
    description: "Go climbing and train the technique", 
    importance: 0    

}, 
{ 
    taskName: "Weight training", 
    image: "images/weighttraining.jpg", 
    description: "Build more strength.", 
    importance: 0    

}];
console.log(obj_tasks);

//create html cards
for(let j = 0; j < obj_tasks.length; j++){
    document.getElementById("main").innerHTML += `<div class="card" style="width: 18rem;">
    <img class="card-img-top" src="${obj_tasks[j].image}" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">${obj_tasks[j].taskName}</h5>
      <p class="card-text">${obj_tasks[j].description}</p>
      <p>Priority level: ${obj_tasks[j].importance}</p>
    </div>
  </div>`;
}
console.log(document.getElementsByClassName("main").innerHTML);

//add function for button
function add_priority(){

}

//add eventlistener
/*for(let i = 0; i < obj_tasks.length; i++){
    obj_tasks[i].addEventListener("click",add_priority());
}*/



