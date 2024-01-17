const accordian2 = document.querySelectorAll(".question");

accordian2.forEach(accordian=>{
    const icon = document.querySelector(".icon");
    const answer = document.querySelector(".answer");

    accordian.addEventListener("click",()=>{
        icon.classList.toggle("active");
        answer.classList.toggle("active")
    })
})

