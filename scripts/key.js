const box = document.querySelector(".box")

document.addEventListener("keydown", e =>{
    let keyName = e.code === 32 ? "Space" : e.key;
    box.querySelector(".key-code").innerText = e.code;
    box.querySelector(".key-name").innerText = keyName.toUpperCase();
    box.querySelector(".key span").innerText = keyName;
    box.querySelector(".code span").innerText = e.code;
    box.classList.add("active")
})