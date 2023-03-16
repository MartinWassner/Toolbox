const wrapper = document.querySelector('.wrapper');
let qrInput = wrapper.querySelector('.form input');
let generateBtn = wrapper.querySelector('.form button');
let qrImg = wrapper.querySelector('.qr-code img');


generateBtn.addEventListener("click", ()=> {
    let qrValue = qrInput.value;
    if(!qrValue) return;
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${qrValue} `
    wrapper.classList.add("active");
})