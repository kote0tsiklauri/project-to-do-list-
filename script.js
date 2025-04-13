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

    if(input.value !== "" && input.value.length < 45) { 
        //* defult setting if no days is chosen 
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]; 
        let today = days[new Date().getDay()]; 
        
        let chosenDay = dd ? dd : today; //* if any of the days are chosen the day will have meaning and if not it will be null(line3)
        let todayContainer = document.getElementById(chosenDay);


        let text_div = document.createElement("div")

        //* input value
        let pp = document.createElement('p')    
        pp.textContent = input.value
        pp.style.fontSize = "20px"
        pp.style.marginTop = "7px".at
        pp.style.marginLeft = "7px"
        pp.style.margin = "14px"
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
            top: 11px;
            border: 2px solid #4e4caf;
            border-radius: 50%;
            background-color:rgb(123, 122, 180);
            cursor: pointer;
            outline: none;
            transition: all 0.2s ease-in-out;
        `;
        button1.addEventListener("change", function () {  //*this function is mainly for checking of done goals and counting tham
            button1.style.animation = "none";
            void button1.offsetWidth; // Trigger reflow to restart the animation
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
            height: 50px;
            display: flex;
            background: white;
            border-radius: 6px;
            margin-top: 10px;
            box-shadow: 0px 3px 2px 0px #071b3a;`
        
        


        
        

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
    function remove(){
        text_div.innerHTML = ''
        
    
}
    

}

//* function for removing specific goals(line69 might be changed)


//* function for removing evry goal
function func2(){
    let days = document.getElementsByClassName("day-container");
    a = 0
    totalGoalDone = 0
    c = 0
    document.getElementById("cur").textContent = a
    document.getElementById("don").textContent = totalGoalDone
    document.getElementById("lef").textContent = c
    for (let i = 0; i < days.length; i++) {
        while (days[i].children.length > 2) {
            days[i].removeChild(days[i].lastChild);
        }
    }
}






