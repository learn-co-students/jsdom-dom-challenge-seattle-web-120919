document.addEventListener("DOMContentLoaded", function(){
  timerStuff()
  heart()
})

function timerStuff() {
    const counter = document.getElementById("counter")
    let num = parseInt(counter.innerText)
    let frozen = 0
    const pp = document.getElementById("pause")
    
    function timerStart() {
        pp.innerText = "pause"
        if (pp.innerText == "pause") {
        var interval = setInterval(function() {
        counter.innerText = num++
        }, 1000)
      } else {
        clearInterval(interval)
      }
    }

    function timerPause() {
    pp.addEventListener("click", function (){
      if (pp.innerText == "pause") {
        pp.innerText = "resume"
      } else {
        timerStart()
      }
    })
    }

    function timerPlus() {
        const button = document.getElementById("plus")
        button.addEventListener("click", function (){
          counter.innerText = num++
        })
      }
      
      function timerMinus() {
        const button = document.getElementById("minus")
        button.addEventListener("click", function (){
          counter.innerText = num--
        })
      }
      
  timerPlus()
  timerMinus() 
  timerPause()     
  timerStart()
}

function heart() {
    const heart = document.getElementById("heart")
    const likeList = document.querySelector("ul")
    heart.addEventListener("click", function(){
      let x = 1
      let likes = document.getElementsByClassName("likes")
      for (const element of likes) {
          console.log(parseInt(element.innerText) + "element")
          console.log(num)
          if (parseInt(element.innerText) == num) {
            console.log("true")
          } 
      }
      const li = document.createElement("li")
      li.className = 'likes'
      li.innerHTML = `${num} has been liked ${x} time`
      likeList.appendChild(li)
    })
}