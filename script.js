let main_div = document.getElementById('container')
let input = document.getElementById('list_input')
let dd = null;
let a = 0
let totalGoalDone = 0
let c = 0
document.getElementById("cur").textContent = a
document.getElementById("don").textContent = totalGoalDone
document.getElementById("lef").textContent = c


function to_do_creation(){

    if(input.value !== "" ) { 
        //* defult setting if no days is chosen 
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]; 
        let today = days[new Date().getDay()]; 
        
        let chosenDay = dd ? dd : today; //* if any of the days are chosen the day will have meaning and if not it will be null(line3)
        let todayContainer = document.getElementById(chosenDay).querySelector('.day-tasks');


        let text_div = document.createElement("div")

        //* input value
        let pp = document.createElement('p')    
        pp.textContent = input.value
        pp.style.cssText = `
            font-size: 20px;
            margin: 14px;
            white-space: normal;
            word-break: break-word;
            flex-grow: 1;
        `;
        text_div.append(pp)
        

        //* button1(checkbox if user has finished his goal)
        let button1 = document.createElement("input")
        
        button1.type = "checkbox";
        button1.id = "complete";

        button1.style.cssText = `
            height: 25px;
            width: 25px;
            position: absolute;
            right: 80px;
            border: 2px solid #4e4caf;
            border-radius: 50%;
            background-color:rgb(123, 122, 180);
            cursor: pointer;
            outline: none;
            transition: all 0.2s ease-in-out;
        `;
        button1.addEventListener("change", function () {  //*this function is mainly for checking of done goals and counting tham
            button1.style.animation = "none";
            void button1.offsetWidth;
            button1.style.animation = "pop 0.3s ease";
            
            if (button1.checked) {
                button1.style.background = "#4e4caf"
                pp.style.textDecoration = "line-through";
                totalGoalDone += 1
                c -= 1
                document.getElementById("lef").textContent = c
                document.getElementById("don").textContent = totalGoalDone
                // Do something when checked
            } else {
                button1.style.background = "none"
                pp.style.textDecoration = "none";
                totalGoalDone -= 1
                c += 1
                document.getElementById("lef").textContent = c
                document.getElementById("don").textContent = totalGoalDone
                // Do something when unchecked
                
            }
        });
            
        //* button2(button that is used for removing specific goals)
        let button2 = document.createElement("button")
        
        button2.id = 'remove'
        button2.textContent = "Remove"
        button2.style.cssText = `
            height:40px; 
            width: 60px; 
            position: absolute; 
            right: 10px; 
            background-color: #feb6b8; 
            border-radius: 6px; 
            border: 6px; 
            margin-top: 2px;
            box-shadow: 0px 3px 2px 0px rgb(41, 41, 90);
            border: solid 2px rgb(70, 70, 161);
            `
        button2.addEventListener("click", function() {
            text_div.remove(); 
            if (button1.checked) {
                totalGoalDone -= 1
                document.getElementById("don").textContent = totalGoalDone
        
                }
            else {
                c -= 1
                document.getElementById("lef").textContent = c
                }
                a -= 1
                document.getElementById("cur").textContent = a
        });
        
        //*text_div(this is for styling the div which contains users goals)
        text_div.style.cssText = `
            position: relative;
            border: solid 2px;
            border-color: #4e4caf;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            background: white;
            border-radius: 6px;
            margin-top: 10px;
            box-shadow: 0px 3px 2px 0px #071b3a;
            padding-right: 160px;
            min-height: 50px;`
        


        //* appending
        text_div.append(button1)
        text_div.append(button2)
        todayContainer.append(text_div); 
        document.getElementById("list_input").value = ""
        
        document.getElementById('error_code').textContent = ""
        a += 1
        c += 1
        document.getElementById("cur").textContent = a
        document.getElementById("lef").textContent = c
        

    }
    else if(input.value == ""){
        input.value = ""
        document.getElementById('error_code').textContent = 'Theres nothing to add!'

    }
    else{
        input.value = ""
        document.getElementById('error_code').textContent = 'Text too long!'
    }   
    
}


//* function for removing evry goal
function func2(){

    document.getElementById("clear_confirm").style.display = "flex";

}

document.getElementById("yes").onclick = function () {
    //* ყველა თასქის წაშლა
    let days = document.getElementsByClassName("day-container");
    a = 0;
    totalGoalDone = 0;
    c = 0;
    document.getElementById("cur").textContent = a;
    document.getElementById("don").textContent = totalGoalDone;
    document.getElementById("lef").textContent = c;
    for (let i = 0; i < days.length; i++) {
        let taskList = days[i].querySelector('.day-tasks');
        taskList.innerHTML = "";
    }


    document.getElementById("clear_confirm").style.display = "none";
};

document.getElementById("no").onclick = function () {
    document.getElementById("clear_confirm").style.display = "none";
};


function toggleDay(dayId) {
    const dayContainer = document.getElementById(dayId);
    const taskList = dayContainer.querySelector('.day-tasks');
    const toggleButton = dayContainer.querySelector('.toggle-button');
    
    if (taskList.style.display === 'none' || taskList.style.display === '') {
        taskList.style.display = 'block';
        toggleButton.textContent = 'Hide';  // Change button text to 'Hide'
    } else {
        taskList.style.display = 'none';
        toggleButton.textContent = 'Show';  // Change button text to 'Show'
    }
}


window.onload = function () {
    let taskLists = document.querySelectorAll('.day-tasks');
    for (let i = 0; i < taskLists.length; i++) {
        taskLists[i].style.display = 'block';
    }
};