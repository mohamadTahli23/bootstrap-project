
// Function to Start count when scroll to section
let nums = document.querySelectorAll(".num ")

let section = document.querySelector(".achievement")

let started = false ; // Function Started ? No


window.onscroll = function() {
    if(window.scrollY >= section.offsetTop) {
        if(!started) {
            nums.forEach((num) => startCount(num) )
        }
        started = true;
    }
}

function startCount(el) {
    let goal= el.dataset.goal;
    let count = setInterval(() => {
        el.textContent++;
        if(el.textContent == goal) {
            clearInterval(count)
        }
    }, 1000 / goal)
}




//Select All Bullets
const allBullets = document.querySelectorAll(".nav-bullets .bullet")

//Select All links 
const allLinks = document.querySelectorAll(".nav a")


function scrollTo(element) {
  element.forEach(ele => {
    ele.addEventListener("click" , (e) => {

      e.preventDefault()

      document.querySelector(e.target.dataset.section).scrollIntoView({
        behavior: 'smooth'
      })
    })
  })
  
}


scrollTo(allLinks)
scrollTo(allBullets)
