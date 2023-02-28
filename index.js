const milisecond=document.querySelector('#milisecond')
const second=document.querySelector('#second')
const minute=document.querySelector('#minute')
const hour=document.querySelector('#hour')
const startTime=document.querySelector('#start')
const pauseTime=document.querySelector('#pause')
const stopTime=document.querySelector('#reset')
const castTime=document.querySelector('#cast')
const cast=document.querySelector('#cast-time')
let updateTime=null

function timer(){
    let time= parseInt(milisecond.innerText)
    if(time<999){
        if(time<9){
            milisecond.innerText= "00" +(time+1)
        }
        else if(time<99){
            milisecond.innerText="0"+(time+1)
        }
        else{
            milisecond.innerText=time+1
        }
    }
    else{
        milisecond.innerText="000"
        let timeSec=parseInt(second.innerText)+1
        if(timeSec<59){
            if(timeSec<9)
            {
                second.innerText="0"+timeSec
            }else{
                second.innerText=timeSec
            }
        }else{
            second.innerText="00"
            let timeMin=parseInt(minute.innerText)+1
            if(timeMin<59){
                if(timeMin<10){
                    second.innerText="0"+timeMin
                }else{
                    second.innerText=timeMin
                }
            }else{
                minute.innerText="00"
                let timeHr=parseInt(hour.innerText)+1
                if(timeHr<10){
                    hour.innerText="0"+timeHr
                }else{
                    hour.innerText=timeHr
                }
            }
        }
    }
   
}

function startWatch(){
    pauseTime.addEventListener("click",pauseWatch)
    stopTime.addEventListener("click",stopWatch)
    castTime.addEventListener("click",castValue)
    updateTime=setInterval(timer,1)
    startTime.removeEventListener("click",startWatch)
}

startTime.addEventListener("click",startWatch)

function pauseWatch(){
    if(pauseTime.innerText=="Pause"){
        clearInterval(updateTime)
        pauseTime.innerText="Continue"
    }else{
        pauseTime.innerText="Pause"
        updateTime=setInterval(timer,1)
    }
}

function stopWatch(){
    clearInterval(updateTime)
    milisecond.innerText="000"
    second.innerText="00"
    minute.innerText="00"
    hour.innerText="00"
    pauseTime.innerText="Pause"
    startTime.addEventListener("click",startWatch)

    pauseTime.removeEventListener("click",pauseWatch)
    stopTime.removeEventListener("click",stopWatch)
    castTime.removeEventListener("click",castValue)
}
function castValue(){

    let temp=`${hour.innerText} : ${minute.innerText} : ${second.innerText} : ${milisecond.innerText}`
    const node=document.createElement("p")
    const textnode=document.createTextNode(temp)
    node.appendChild(textnode)
    cast.appendChild(node)
}