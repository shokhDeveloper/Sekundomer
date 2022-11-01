window.addEventListener("load", () => {
    let minut = document.querySelector(".minut")
    let sekund = document.querySelector("sekund")
    let sekunds = 0
    let minuts= 0
    let soat = 0
    let sekundTitle = document.querySelector(".sekund_title")
    let minutTitle = document.querySelector(".minut_title")
    let soatTitle = document.querySelector(".soat_title")
    let sub = document.querySelector(".sub")
    let btn = document.querySelector(".reset")
    let refresh = document.querySelector(".refresh")
    sub.addEventListener("click", handleSub)
    function handleSub(e){
        e.preventDefault()
        let time = setInterval(() => {
            sekunds++
            sekundTitle.textContent = sekunds
            if(Number(sekundTitle.textContent) == 100 ){
                sekunds = 0
                minuts+=1
                minutTitle.textContent = minuts
            }else if(minuts >=60){
                minuts = 0
                minutTitle.textContent = minuts
                soat+=1
                soatTitle.textContent = soat
            }else if(soat>=60){
                soat = 0
                soatTitle.textContent = soat
            }
            btn.addEventListener("click", () => {
                clearInterval(time)
                    console.log("ishadi")
            })
        }, 100)
        refresh.addEventListener("click", () => {
            minuts = 0
            sekunds = 0
            soat = 0
            // sub.remove()
            time = setInterval(() => {
                sekunds++
                sekundTitle.textContent = sekunds
                if(Number(sekundTitle.textContent) == 100 ){
                    sekunds = 0
                    minuts+=1
                    minutTitle.textContent = minuts
                }else if(minuts >=60){
                    minuts = 0
                    minutTitle.textContent = minuts
                    soat+=1
                    soatTitle.textContent = soat
                }else if(soat>=60){
                    soat = 0
                    soatTitle.textContent = soat
                }
                btn.addEventListener("click", () => {
                    clearInterval(time)
                        console.log("ishadi")
                })
            }, 100)

        })

    }
})