// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

const modal = document.querySelector('#modal')
modal.className = "hidden"

const likeImgs = document.querySelectorAll("footer span")
likeImgs.forEach((img) => {
  console.log("img", img)
  img.addEventListener('click', likePost)
})

function likePost(event) {
  let heart = event.target.innerText
  mimicServerCall()
  .then(response => {
    console.log("heart", heart)

    if(heart === FULL_HEART) {
      event.target.innerText = EMPTY_HEART
      event.target.className = ""
    } else {
      event.target.innerText = FULL_HEART
      event.target.className = "activated-heart"
  }}

  )
  .catch((error)=> {
    console.log(error)
    modal.className = ""
    modal.innerText = `${error}`
    setTimeout(() => {
      modal.className = "hidden"
    }, 3000);

  })
}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
