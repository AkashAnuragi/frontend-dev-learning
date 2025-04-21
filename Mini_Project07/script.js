let block = document.querySelector("#block");
let unblock = document.querySelector("#unblock");


block.addEventListener("click", () => {
    localStorage.setItem("block",true);
    show();
});

unblock.addEventListener("click", () => {
    localStorage.setItem("block",false);
    show();
});

function show() {
    if(localStorage.getItem("block") === 'false'){
        document.querySelector("#status span").textContent = "Not Blocked";
    }
    else{
        document.querySelector("#status span").textContent = "Blocked";
    }
}
show();