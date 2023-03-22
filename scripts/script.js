let button = document.querySelector('.text')

button.addEventListener("click", () => {
    button.classList.add('glitch')
    button.innerHTML = "Please don't, it's not finished. I'm being serious";

    let glitch = document.querySelector('.glitch')

    glitch.addEventListener("click", () => {
        glitch.classList.add('egg')
        glitch.innerHTML = "Ugh... I told you...";
    })

    let egg = document.querySelector('.egg')

    egg.addEventListener("click", () => {
        let bsod = document.querySelector('.bsod');


        function openFullscreen() {
            if (bsod.requestFullscreen) {
                bsod.requestFullscreen();
            } else if (bsod.webkitRequestFullscreen) { /* Safari */
                bsod.webkitRequestFullscreen();
            }
        }
        openFullscreen()

        bsod.classList.replace('bsod', 'bsodAct')

        button.classList.remove('glitch', 'egg')

        setTimeout(() => alert('jk lol'), 4000)

        let back = document.querySelector('.back');

        back.classList.remove('backUnav')

    })


})
