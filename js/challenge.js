document.addEventListener("DOMContentLoaded", () => {
    counter();
    manualCounter();
    likeCounter();
    leaveComment();

    let timer = true  
});

function counter(){  //increment counter every second
    const counter = document.getElementById('counter')
    let timer = setInterval(startTimer, 1000)
    function startTimer(){
        counter.innerHTML = num++
    }
}

function manualCounter(){
    const plus = document.getElementById('plus')
    const minus = document.getElementById('minus')
    const pause = document.getElementById('pause')
    pause.innerHTML = "Pause"

    plus.addEventListener("click", function () {
            if (timer) {
                counter.innerHTML = seconds++ 
            }
        }
    minus.addEventListener("click", function () {
            if (timer) {
                counter.innerHTML = seconds--
            }
        }
    pause.addEventListener("click", function () {
        plus.disabled = false
        minus.disabled = false
        pause.innerText = "Resume"  // pause button text shows "resume."
    }
}

function likeCounter(){
// user can 'like' a number and see count of
// the number of 'likes' of that number.
    const heart = document.getElementById('heart')
//number of likes added to <ul class='likes'></ul> =>  .likes
}


function leaveComment(){
document.getElementById("comment-form").addEventListener("submit", function(event) {
    event.preventDefault();
    newComment(event.target.comment.value);
    event.target.reset();
    });
}

function newComment(comment) {
    let commentList = document.geElementById('list');
    let newComments = document.createElement('li');
    newComments.textContent = comment;
    commentList.appendChild(newComments);
}