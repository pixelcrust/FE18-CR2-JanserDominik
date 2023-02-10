//get data from json

const json_string = `[{ 
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

}]`;

//parse it into object
let obj_tasks = JSON.parse(json_string);

//create html cards
for(let j = 0; j < obj_tasks.length; j++){
    document.getElementById("main").innerHTML += `
    <div>
        <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="${obj_tasks[j].image}" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${obj_tasks[j].taskName}</h5>
                <p class="card-text">${obj_tasks[j].description}</p>
                <div class="row row-cols-2">
                    <span> Priority level: </span>
                    <div class="priority_container">
                        <p class="priority"> ${obj_tasks[j].importance}</p>
                    </div>
                </div>  
                <button class="priority_button">+1</button>
            </div>
        </div>
    </div>`;
  change_priority_color(j);
}

//get a list of buttons
let list_buttons = document.getElementsByClassName("priority_button");

//add function for button
//function add_priority()
//sort function
function sort_priority(){
    //obj_tasks
}

//add eventlistener
//priority color function
function change_priority_color(i){
    if(obj_tasks[i].importance < 2){
        document.getElementsByClassName("priority_container")[i].innerHTML = `<p class="priority bg-success rounded-1"> ${obj_tasks[i].importance}</p>`;
    }
    else if(obj_tasks[i].importance < 4){
        document.getElementsByClassName("priority_container")[i].innerHTML = `<p class="priority bg-warning rounded-1"> ${obj_tasks[i].importance}</p>`;
    }
    else{
        document.getElementsByClassName("priority_container")[i].innerHTML = `<p class="priority bg-danger rounded-1"> ${obj_tasks[i].importance}</p>`;
    }
}

for(let i = 0; i < list_buttons.length; i++){
    list_buttons[i].addEventListener("click",function()
        {
            obj_tasks[i].importance ++;
            change_priority_color(i);

            console.log("i pressed the stupid button");
        });
    console.log(obj_tasks[i].importance);
}

//sort event listener
document.getElementById("button_sort").addEventListener("click",sort_priority());
