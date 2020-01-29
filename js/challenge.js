document.addEventListener("DOMContentLoaded", () => {
    const counter = document.getElementById('counter')
    const plus = document.getElementById('plus')
    const minus = document.getElementById('minus')
    const heart = document.getElementById('heart')
    const pause = document.getElementById('pause')
    const form = document.getElementById('comment-form')

    let live = true

    // As a user, I should see the timer increment every second once the page has loaded.
    let seconds = 0
    setInterval(function () {
        if (live) {
            seconds++
            counter.innerHTML = seconds
        }
    }, 1000)

    // As a user, I can manually increment and decrement the counter using the plus and minus buttons.
    plus.addEventListener("click", function () {
        if (live) {
            seconds++
            counter.innerHTML = parseInt(counter.innerHTML) + 1
        }
    })

    minus.addEventListener("click", function () {
        if (live) {
            seconds--
            counter.innerHTML = parseInt(counter.innerHTML) - 1
        }
    })

    // As a user, I can 'like' an individual number of the counter. I should see count of the number of 'likes' associated with that number.
    heart.addEventListener("click", function () {
        let likes = document.querySelector('.likes')
        if (live) {
            if (document.getElementById(`li${seconds}`) == null) {
                let li = document.createElement('li')
                li.setAttribute("id", `li${seconds}`)
                li.innerHTML = `${seconds}'s total likes: 1`
                likes.appendChild(li)
            } else {
                let li = document.getElementById(`li${seconds}`)
                let addLike = parseInt(li.innerHTML.split(":")[1]) + 1
                li.innerHTML = `${seconds}'s total likes: ${addLike}`
                likes.appendChild(li)
            }
        }
    })

    // As a user, I can pause the counter which will disable all buttons except the pause button.
    pause.addEventListener("click", function () {
        if (live) {
            pause.innerHTML = "resume"
            live = false
        } else {
            pause.innerHTML = "pause"
            live = true
        }
    })

    // As a user, I can leave comments on my gameplay.
    form.addEventListener("submit", function (event) {
        event.preventDefault()
        let input = this.children[0]
        let inputValue = input.value
        inputValue.value = ""
        let comments = document.querySelector('.comments')
        let newComment = document.createElement('p')
        newComment.innerHTML = inputValue
        comments.appendChild(newComment)
    })
})