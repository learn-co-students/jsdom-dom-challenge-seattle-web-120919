document.addEventListener("DOMContentLoaded", function(){
  timerStuff()
  heart()
  comments()
})

function comments() {
  let commentForm = document.getElementById("comment-form")
  let commentsList = document.getElementById("list")
  commentForm.addEventListener("submit", function(event) {
    event.preventDefault()
    let comment = document.createElement("li")
    comment.innerText = event.target.comment.value
    commentsList.appendChild(comment)
  })
}

const counter = document.getElementById("counter")
let num = parseInt(counter.innerText)

function heart() {
  let numbers = {}
  const heart = document.getElementById("heart")
  const likeList = document.querySelector("ul")
  heart.addEventListener("click", function(){
    if (!Object.keys(numbers).includes(counter.innerText)) {
      numbers[`${counter.innerText}`] = 1
      const li = document.createElement("li")
      li.className = 'likes'
      li.innerHTML = `${counter.innerText} has been liked ${numbers[`${counter.innerText}`]} time`
      likeList.appendChild(li)
    } else {
      let likes = likeList.querySelectorAll("li")
      for(const like of likes) {
        if(like.innerText.match(/^[0-9]+/) == counter.innerText) {
          numbers[`${counter.innerText}`]++
          like.innerHTML = `${counter.innerText} has been liked ${numbers[`${counter.innerText}`]} times`
        }
      }
    }
  })
}

function timerStuff() {
  let timer = setInterval(timerStart, 1000)
  const pauseButton = document.getElementById("pause")
  const plusButton = document.getElementById("plus")
  const minusButton = document.getElementById("minus")

  function timerStart() {
    counter.innerText = num++
  }

  function timerPause() {
    pauseButton.addEventListener("click", function (){
      if (pauseButton.innerText == "pause") {
        clearInterval(timer)
        plusButton.disabled = true 
        minusButton.disabled = true
        pauseButton.innerText = "resume"
      } else {
        timer = setInterval(timerStart, 1000)
        plusButton.disabled = false
        minusButton.disabled = false
        pauseButton.innerText = "pause"
      }
    })
  }

  function timerPlus() {
      plusButton.addEventListener("click", function (){
        counter.innerText = num++
      })
    }
    
    function timerMinus() {
      minusButton.addEventListener("click", function (){
        counter.innerText = num--
      })
    }
    
timerPause()
timerPlus()
timerMinus()
timerStart()
}