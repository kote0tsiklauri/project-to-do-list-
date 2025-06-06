let main_div = document.getElementById('container')
let input = document.getElementById('list_input')
let dd = null;
let a = 0
let totalGoalDone = 0
let c = 0
document.getElementById("cur").textContent = a
document.getElementById("don").textContent = totalGoalDone
document.getElementById("lef").textContent = c


function to_do_creation() {

    if (input.value !== "") {

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



        //* this function is mainly for checking of done goals and counting them
        button1.addEventListener("change", function () {
            button1.style.animation = "none";
            void button1.offsetWidth;
            button1.style.animation = "pop 0.3s ease";

            if (button1.checked) {
                button1.style.background = "#4e4caf";
                text_div.style.borderColor = "#00ff00";
                pp.style.textDecoration = "line-through";
                totalGoalDone += 1;
                c -= 1;
                document.getElementById("lef").textContent = c;
                document.getElementById("don").textContent = totalGoalDone;
            
            } else {
                button1.style.background = "none";
                pp.style.textDecoration = "none";
                text_div.style.borderColor = "#4895ef";
                totalGoalDone -= 1;
                c += 1;
                document.getElementById("lef").textContent = c;
                document.getElementById("don").textContent = totalGoalDone;

                
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
            background-color:rgb(255, 255, 255); 
            border-radius: 6px; 
            border: 6px; 
            margin-top: 2px;
            box-shadow: 0px 3px 2px 0px rgb(13, 27, 43);
            border: solid 2px #4895ef;
        `
        button2.addEventListener("click", function () {
            text_div.remove();
            if (main_div.children.length === 1) { // Only the empty-msg left
                document.getElementById("empty-msg").style.display = "block";
            }
            if (button1.checked) {
                totalGoalDone -= 1;
                document.getElementById("don").textContent = totalGoalDone;
            } else {
                c -= 1;
                document.getElementById("lef").textContent = c;
            }
            a -= 1;
            document.getElementById("cur").textContent = a;
        });

        //* text_div(this is for styling the div which contains users goals)
        text_div.style.cssText = `
            position: relative;
            border: solid 2px;
            border-color: #4895ef;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            background: white;
            border-radius: 6px;
            margin-top: 10px;
            box-shadow: 0px 3px 2px 0px rgb(13, 27, 43);
            padding-right: 150px;
            min-height: 50px;
        `

        document.getElementById("empty-msg").style.display = "none";
        //* appending
        text_div.append(button1)
        text_div.append(button2)
        main_div.append(text_div);


        document.getElementById("list_input").value = ""
        
        document.getElementById('error_code').textContent = ""
        a += 1
        c += 1
        document.getElementById("cur").textContent = a
        document.getElementById("lef").textContent = c

    }
    else if (input.value == "") {
        input.value = ""
        document.getElementById('error_code').textContent = 'Theres nothing to add!'
        
    }

}

//* function for removing evry goal
function func2() {
    document.getElementById("clear_confirm").style.display = "flex";

}

document.getElementById("yes").onclick = function () {
    // Reset all counts
    a = 0;
    c = 0;
    totalGoalDone = 0;

    // Update the numbers shown on screen
    document.getElementById("cur").textContent = a;
    document.getElementById("don").textContent = totalGoalDone;
    document.getElementById("lef").textContent = c;

    // Remove all tasks (except the empty message)
    let tasks = document.getElementById("container").children;
    for (let i = tasks.length - 1; i >= 0; i--) {
        if (tasks[i].id !== "empty-msg") {
            tasks[i].remove();
        }
    }

    // Show the "empty" message again
    document.getElementById("empty-msg").style.display = "block";

    // Close the confirm popup
    document.getElementById("clear_confirm").style.display = "none";

    // Clear the input box
    document.getElementById("list_input").value = "";
};

document.getElementById("no").onclick = function () {
    document.getElementById("clear_confirm").style.display = "none";
};



document.getElementById("menu-toggle").addEventListener("click", function() {
    const navList = document.getElementById("nav-list");

    // Only toggle if screen width is 540px or less
    if (window.innerWidth <= 540) {
        if (navList.style.display === "flex") {
            navList.style.display = "none";
        } else {
            navList.style.display = "flex";
        }
    }
});

window.onload = function () {

    let taskLists = document.querySelectorAll('.day-tasks');
    for (let i = 0; i < taskLists.length; i++) {
        taskLists[i].style.display = 'block';
    }

    //* მისასალმებელი ტექტი
    const greeting = document.createElement("div");
    greeting.id = "greet";
    greeting.style.cssText = `
        display: flex;
        flex-direction: column;
        position: fixed;
        top: 0;
        left: 0;
        height: 100vh;
        width: 100vw;
        background-color: rgba(0,0,0,0.5);
        justify-content: center;
        align-items: center;
        z-index: 1000;
    `;

    const innerDiv = document.createElement("div");
    innerDiv.style.cssText = `
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: white;
        padding: 20px;
        border-radius: 10px;
        text-align: center;
        box-shadow: 0px 5px 10px rgba(0,0,0,0.3);
    `;

    const text = document.createElement("p");
    text.style.cssText = `
        margin-bottom: 15px;
        font-size: 18px;
    `;

    const message = "Welcome! Here, you are free to do as you like.";
    let i = 0;

    function typeText() {
        if (i < message.length) {
            text.textContent += message.charAt(i);
            i++;
            setTimeout(typeText, 50); //* speed (milliseconds)
        } 
    }

    typeText();

    const nextGreet = document.createElement("button");
    nextGreet.textContent = "Next";
    nextGreet.style.cssText = `
        height: 40px;
        width: 80px;
        background-color: #004e89;
        border-radius: 6px;
        border: none;
        color: white;
        box-shadow: 0px 3px 2px 0px rgb(41, 41, 90);
    `;

    innerDiv.appendChild(text)
    innerDiv.appendChild(nextGreet);
    greeting.appendChild(innerDiv);
    document.body.appendChild(greeting);

    // შემდეგი ტექსტის func
    nextGreet.onclick = function () {
        document.body.removeChild(greeting);

        // მეორე ტექსტი
        const secondGreeting = document.createElement("div");
        secondGreeting.id = "greet";
        secondGreeting.style.cssText = `
            display: flex;
            flex-direction: column;
            position: fixed;
            top: 0;
            left: 0;
            height: 100vh;
            width: 100vw;
            background-color: rgba(0,0,0,0.5);
            justify-content: center;
            align-items: center;
            z-index: 1000;
        `;

        const secondInnerDiv = document.createElement("div");
        secondInnerDiv.style.cssText = `
            display: flex;
            flex-direction: column;
            align-items: center;
            background-color: white;
            padding: 20px;
            border-radius: 10px;
            text-align: center;
            box-shadow: 0px 5px 10px rgba(0,0,0,0.3);
        `;

        const secondText = document.createElement("p");
        secondText.style.cssText = `
            margin-bottom: 15px;
            font-size: 18px;
        `;

        const message2 = "Make your own goals with no limits or any hidden feature";
        let i = 0;

        function typeText() {
            if (i < message2.length) {
                secondText.textContent += message2.charAt(i);
                i++;
                setTimeout(typeText, 50); //* speed (milliseconds)
            } 
        }

        typeText()

        const finishBtn = document.createElement("button");
        finishBtn.textContent = "Finish";
        finishBtn.style.cssText = `
            height: 40px;
            width: 80px;
            background-color:rgb(17, 211, 40);
            border-radius: 10px;
            border: none;
            box-shadow: 0px 3px 2px 0px rgb(10, 46, 3);
            cursor: pointer;
        `;

        finishBtn.onclick = function () {
            document.body.removeChild(secondGreeting);
        };

        
        secondInnerDiv.appendChild(secondText);
        secondInnerDiv.appendChild(finishBtn);
        secondGreeting.appendChild(secondInnerDiv);
        document.body.appendChild(secondGreeting);
    };
    

    
};