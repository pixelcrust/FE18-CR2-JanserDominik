
//parse it into object
let obj_tasks = JSON.parse(data);

//function to create html cards
function create_the_cards(){
    for(let j = 0; j < obj_tasks.length; j++){  //loop for all tasks
        document.getElementById("main").innerHTML += `
        <div>
            <div class="card shadow m-3 rounded-3" style="width: 18rem;">
                <img class="card-img-top p-3" src="${obj_tasks[j].image}" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">${obj_tasks[j].taskName}</h5>
                    <p class="card-text">${obj_tasks[j].description}</p>
                    <div class="row row-cols-2">
                        <h6> Priority level: </h6>
                        <div class="priority_container">
                            <p class="priority"> ${obj_tasks[j].importance}</p>
                        </div>
                    </div>  
                    <button class="priority_button">Priority +1</button>
                </div>
            </div>
        </div>`; //write into the html
    change_priority_color(j); //set the colors for the priority 
    }
}

//create the cards
create_the_cards();

//get a list of buttons
let list_buttons = document.getElementsByClassName("priority_button");

//sort function
function sort_priority(){
    obj_tasks.sort((a,b) => {   //sort the array of objects
        return(a.importance - b.importance);
    });
    document.getElementById("main").innerHTML = ``; //delete the cards in the html
    create_the_cards(); //create the cards with the new order
    add_event_to_buttons(); //add an event to the newly created buttons
}


//priority color function
function change_priority_color(i){
    if(obj_tasks[i].importance < 2){ //see how the priority is and create a <p> with the backgroundcolour acordingly
        document.getElementsByClassName("priority_container")[i].innerHTML = `<p class="priority bg-success rounded-1 p-1"> ${obj_tasks[i].importance}</p>`;
    }
    else if(obj_tasks[i].importance < 4){
        document.getElementsByClassName("priority_container")[i].innerHTML = `<p class="priority bg-warning rounded-1 p-1"> ${obj_tasks[i].importance}</p>`;
    }
    else{
        document.getElementsByClassName("priority_container")[i].innerHTML = `<p class="priority bg-danger rounded-1 p-1"> ${obj_tasks[i].importance}</p>`;
    }
}

//function to add the event to all the button, to not write it doubly
function add_event_to_buttons(){
    for(let i = 0; i < list_buttons.length; i++){ //go through all buttons
        list_buttons[i].addEventListener("click",function()
            {
                obj_tasks[i].importance ++; //add 1 to the importance
                change_priority_color(i); //change the color depending on the importance
            });
    }
}

//add the eventlistener to all +1 buttons
add_event_to_buttons();

//sort event listener
document.getElementById("button_sort").addEventListener("click",sort_priority);
