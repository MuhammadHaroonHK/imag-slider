let next = document.getElementById("nextbtn");
let back = document.getElementById("backbtn");
let frames = document.getElementsByClassName("fram");

next.addEventListener('click', () => {
    for (let i = 0; i < frames.length; i++) {
        frames[i].scrollLeft += 900;
    }
});

back.addEventListener('click', () => {
    for (let i = 0; i < frames.length; i++) {
        frames[i].scrollLeft -= 900;
    }    
});
