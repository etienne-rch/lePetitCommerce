let slideActive = document.querySelector(".slide-active");
let prevBtn = document.querySelector(".prev-btn")
let nextBtn = document.querySelector(".next-btn")



function previous() {

    let slideActive = document.querySelector(".slide-active");
    let linkSlide=slideActive.getAttribute('src')
    

    console.log(linkSlide)

    switch(linkSlide){
        case "../assets/img/Outerwear/carousel/aubracdenim1_1120.webp":
            slideActive.setAttribute('src', '../assets/img/Outerwear/carousel/aubracdenimblousonstone1_1984.webp')
            break
        case "../assets/img/Outerwear/carousel/aubracdenimblousonstone1_1984.webp":
            slideActive.setAttribute('src', '../assets/img/Outerwear/carousel/aubracdenim2_f8e70eff-7c6e-42b5-8d28-cd7241168b71_720x.webp')
            break
        case "../assets/img/Outerwear/carousel/aubracdenim2_f8e70eff-7c6e-42b5-8d28-cd7241168b71_720x.webp":
            slideActive.setAttribute('src', '../assets/img/Outerwear/carousel/aubracdenim1_1120.webp')
            break
    }
}

prevBtn.onclick = () => {
    previous()
}

function next(){

    let slideActive = document.querySelector(".slide-active");
    let linkSlide=slideActive.getAttribute('src')

    console.log(linkSlide)

    switch(linkSlide){
        case "../assets/img/Outerwear/carousel/aubracdenim1_1120.webp":
            slideActive.setAttribute('src', '../assets/img/Outerwear/carousel/aubracdenim2_f8e70eff-7c6e-42b5-8d28-cd7241168b71_720x.webp')
            break
        case "../assets/img/Outerwear/carousel/aubracdenim2_f8e70eff-7c6e-42b5-8d28-cd7241168b71_720x.webp":
            slideActive.setAttribute('src', '../assets/img/Outerwear/carousel/aubracdenimblousonstone1_1984.webp')
            break
        case "../assets/img/Outerwear/carousel/aubracdenimblousonstone1_1984.webp":
            slideActive.setAttribute('src', '../assets/img/Outerwear/carousel/aubracdenim1_1120.webp')
            break
    }
}

nextBtn.onclick = () => {
    next()
}
