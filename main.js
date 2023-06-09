const paralax_all = document.querySelectorAll(".parallax");

update(window.innerWidth/2,  window.innerHeight/2);
let X = 0, Y = 0;

window.addEventListener("mousemove", (event)=>{
    X = event.clientX - window.innerWidth/2;
    Y = event.clientY - window.innerHeight/2;
    update(X,Y);


})

function update(X,Y){

    paralax_all.forEach((obj)=>{

        let sX = obj.dataset.speedx;
        let sY = obj.dataset.speedy;
        let sZ = obj.dataset.speedz;

        obj.style.transform = `translateX(calc(-50% + ${-X * sX}px)) translateY(calc(-50% + ${Y *sY}px))`;
        
    })
}

setTimeout(()=>{
    let l1 = document.querySelector(".light10");
    let l2 = document.querySelector(".light13");
    l2.style.animation = "rotate2 5s infinite ease alternate";
    l1.style.animation = "rotate1 5s infinite ease-in-out alternate";
},2000)

