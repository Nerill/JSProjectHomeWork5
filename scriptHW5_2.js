(() => {
    const turnButton = document.querySelector(".redBtn");
    const bodyElem = document.querySelector("body");
    const labelElem = document.querySelector(".lastTurn");
    
    if(localStorage.getItem("Date") === null)
        localStorage.setItem("Date", setCurDate());
    
    if(localStorage.getItem("buttonState") !== null){
        if(localStorage.getItem("buttonState") === 'Turn on' ){
            turnButton.textContent = 'Turn on';
            darkPage();
        }
        else{    
            turnButton.textContent = 'Turn off'
            lightPage();
        }
    }
    
    function changeTurnOffOn(event){
        if(turnButton.textContent === 'Turn off'){
            turnButton.textContent = 'Turn on';
            localStorage.setItem("buttonState", 'Turn on');
            localStorage.setItem('Date', setCurDate());
            darkPage();
        }
        else{
            turnButton.textContent = 'Turn off'
            localStorage.setItem("buttonState", 'Turn off');
            localStorage.setItem('Date', setCurDate());
            lightPage();
        }
    }
    
    function setCurDate(){
        const curDate = new Date();
        return curDate.getDate()+'-'+(curDate.getMonth()+1)+'-'+curDate.getFullYear()+' '
                +curDate.getHours() + ":" + curDate.getMinutes() + ":" + curDate.getSeconds();
    }
    
    function darkPage() {
        bodyElem.style.backgroundColor = '#404040';
        labelElem.style.color = 'white';
        labelElem.textContent = 'Last turn off: ' + localStorage.getItem('Date');
    }
    
    function lightPage() {
        bodyElem.style.backgroundColor = '#F5F5F5';
        labelElem.style.color = 'black';
        labelElem.textContent = 'Last turn on: ' + localStorage.getItem('Date');
    }
    
    turnButton.addEventListener('click', changeTurnOffOn);
    })()