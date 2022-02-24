let start = document.getElementById("start")
let player = document.getElementById("player")
let pole = document.getElementById("pole")
let W = document.getElementById("W")
let A = document.getElementById("A")
let S = document.getElementById("S")
let D = document.getElementById("D")
function launch(){
    player.style.opacity = "100%"
    pole.style.backgroundImage = "url('https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F1.bp.blogspot.com%2F-8VFvzoOmNpk%2FUQKS0efTLnI%2FAAAAAAAARqU%2FFlJCpYH_Ueo%2Fs1600%2FFantasy-World-Maps-Hogwarts-Harry-Potter-2.jpg&f=1&nofb=1')"
}
let v = 0
let h = 0
let speed = 15
function up(){
    v -= speed
    if (v<0){
        alert('---')
    }
    else{
        console.log(v)
        player.style.top = v + "px"
        player.style.backgroundImage = "url('./img/1_up.png')"
        player.style.backgroundColor = "none"
    }
}
function left(){
    h -= speed
    if(h<0){
        alert('---')
    }
    else{
        console.log(h)
        player.style.left = h + "px"    
        player.style.backgroundImage = "url('./img/1_left.png')"
    }
}
function down(){
    v += speed
    if (v>470){
        alert('---')
    }
    else{
        player.style.top = v + "px"
        player.style.backgroundImage = "url('./img/1_down.png')"
    }
}
function right(){
    h += speed
    if(h>760){
        alert('---')
    }
    else{
        player.style.left = h + "px"
        player.style.backgroundImage = "url('./img/1_right.png')"
    }
}
W.addEventListener("click", up)
A.addEventListener("click", left)
S.addEventListener("click", down)
D.addEventListener("click", right)
start.addEventListener("click", launch)































































































