let main_div = document.getElementById('container')
let a = 3
let totalGoalDone = 0
let c = 3
document.getElementById("cur").textContent = a
document.getElementById("don").textContent = totalGoalDone
document.getElementById("lef").textContent = c


//* rendom task creation
tasks = [" Organize one small area of your room or workspace.","Run for 20-minute.","Read 10 pages of any book.","Go 1 hour without any screens (no phone, laptop, or TV).","Do 15 squats, 10 push-ups, and 30 seconds of planking.","Write a short journal entry about how you’re feeling.","Drink at least 2 liters of water today.","Try a new recipe or cook something from scratch.","Study for any subject for at least 2 hours"]


for (let i = tasks.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [tasks[i], tasks[j]] = [tasks[j], tasks[i]];
}

const selectedTasks = tasks.slice(0, 3);


for (let i = 0;i < selectedTasks.length;i++) {
    const text_div = document.createElement("div");
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
    padding-right: 160px;
    min-height: 60px;
    `

   

    const taskItem = document.createElement("p");
    taskItem.style.cssText = `
        padding: 10px;
        font-size: 20px;
        margin: 0;
        white-space: normal;
        word-break: break-word;
    `;
    taskItem.textContent = selectedTasks[i];

    let button1 = document.createElement("input")
    button1.type = "checkbox";
    button1.id = "complete";
    button1.style.cssText = `
        height: 25px;
        width: 25px;
        position: absolute;
        right: 10px;
        border: 2px solid #4e4caf;
        border-radius: 50%;
        background-color:rgb(123, 122, 180);
        cursor: pointer;
        outline: none;
        transition: all 0.2s ease-in-out;
    `;

    //* text timer display
    const timerDisplay = document.createElement('span')
    timerDisplay.style.cssText = `
        position: absolute;
        right: 80px;
        font-weight: bold;
        color: #009900;
    `;

    //* timer and countdown
    const originalTime = 86400; // 24 hours in seconds
    let timeLeft = originalTime;
    let interval;

    function updateTimerDisplay() {
        const hrs = Math.floor(timeLeft / 3600);
        const mins = Math.floor((timeLeft % 3600) / 60);
        const secs = timeLeft % 60;

        const h = ('0' + hrs).slice(-2);
        const m = ('0' + mins).slice(-2);
        const s = ('0' + secs).slice(-2);

        timerDisplay.textContent = `${h}:${m}:${s}`;
    }

    function startTimer() {
        updateTimerDisplay();

        interval = setInterval(() => {
            timeLeft--;
            updateTimerDisplay();

            if (timeLeft <= originalTime * 0.5 && timeLeft > originalTime * 0.25) {
                timerDisplay.style.color = "#f92";
            } else if (timeLeft <= originalTime * 0.25) {
                timerDisplay.style.color = "#ff8c00";
            }

            if (timeLeft <= 0) {
                clearInterval(interval);
                timerDisplay.textContent = "Time's up!";
                timerDisplay.style.color = "#ff0000";
                text_div.style.borderColor = "#ff595e";
                setTimeout(() => text_div.remove(), 1000);
            }
        }, 1000);
    }

    startTimer();

    button1.addEventListener("change", function () {
        button1.style.animation = "none";
        void button1.offsetWidth;
        button1.style.animation = "pop 0.3s ease";
    
        if (button1.checked) {
            button1.style.background = "#4e4caf";
            text_div.style.borderColor = "#00ff00";
            taskItem.style.textDecoration = "line-through";
            totalGoalDone += 1;
            document.getElementById("don").textContent = totalGoalDone;
    
            document.getElementById("cur").textContent = a;
    
            c -= 1;
            document.getElementById("lef").textContent = c;
    
            timerDisplay.style.color = "#00ff00";
            clearInterval(interval);
    
        }  else {
            button1.style.background = "none";
            taskItem.style.textDecoration = "none";
            text_div.style.borderColor = "#4895ef";
            totalGoalDone -= 1;
            document.getElementById("don").textContent = totalGoalDone;
        
            document.getElementById("cur").textContent = a;
            c += 1;
            document.getElementById("lef").textContent = c;
        
            timerDisplay.style.color = "#009900";
        
            clearInterval(interval);
            startTimer(); // resume the timer using saved timeLeft
        }
        if (totalGoalDone === 3) {
            let congrats = document.createElement("div");
        
            congrats.style.cssText = `
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
                z-index: 9999;
            `;
        
            const innerDiv1 = document.createElement("div");
            innerDiv1.style.cssText = `
                display: flex;
                flex-direction: column;
                align-items: center;
                background-color: white;
                padding: 20px;
                border-radius: 10px;
                text-align: center;
                box-shadow: 0px 5px 10px rgba(0,0,0,0.3);
                max-width: 400px;
            `;
        
            const text = document.createElement("p");
            text.style.cssText = `
                margin-bottom: 15px;
                font-size: 18px;
                line-height: 1.4;
            `;
        
            const message2 = "Congrats! You have completed all your daily tasks. Keep up the good work!";
            let i = 0;
        
            function typeText() {
                if (i < message2.length) {
                    text.textContent += message2.charAt(i);
                    i++;
                    setTimeout(typeText, 50); // typing speed
                }
            }
            typeText();
        
            const finishBtn = document.createElement("button");
            finishBtn.textContent = "Finish";
            finishBtn.style.cssText = `
                height: 40px;
                width: 100px;
                background-color: rgb(17, 211, 40);
                color: white;
                font-weight: bold;
                border-radius: 10px;
                border: none;
                margin-top: 10px;
                box-shadow: 0px 3px 2px 0px rgb(10, 46, 3);
                cursor: pointer;
                transition: background-color 0.2s;
            `;
        
            finishBtn.onmouseover = () => finishBtn.style.backgroundColor = "rgb(15, 180, 35)";
            finishBtn.onmouseout = () => finishBtn.style.backgroundColor = "rgb(17, 211, 40)";
            
            finishBtn.onclick = function () {
                document.body.removeChild(congrats);
            };
        
            innerDiv1.appendChild(text);
            innerDiv1.appendChild(finishBtn);
            congrats.appendChild(innerDiv1);
            document.body.appendChild(congrats);
        }
    });
    text_div.append(timerDisplay)
    text_div.appendChild(taskItem);
    text_div.append(button1)
    main_div.appendChild(text_div);
}



window.onload = function () {


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

    const message = "Welcome!Get ready to challenge yourself—each day, you'll receive three random tasks to complete.";
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

        const message2 = "Ready to start? Your first three tasks are just around the corner...";
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