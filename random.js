const qouteText = document.querySelector(".qoute");
let qouteBtn = document.querySelector("button");
let authorName = document.querySelector(".author .name")
let soundBtn = document.querySelector(".sound")
let copyBtn = document.querySelector(".copy")
let twitterBtn = document.querySelector(".twitter")
function randomQoute (){
    qouteBtn.classList.add("loading")
    qouteBtn.innerText = "Loading Qoute...."
    fetch("https://api.quotable.io/random").then(res => res.json())
    .then(result =>{
        console.log(result);
        qouteText.innerText = result.content;
        authorName.innerText = result.author;
        qouteBtn.innerText = "New Qoute"
        qouteBtn.classList.remove("loading")
    })
}

soundBtn.addEventListener("click",()=>{
    let utterance  = new SpeechSynthesisUtterance(`${qouteText.innerText} by ${authorName.innerText}`)
    speechSynthesis.speak( utterance)
})

copyBtn.addEventListener("click",()=>{
        navigator.clipboard.writeText(qouteText.innerText)
})

twitterBtn.addEventListener("click", ()=>{
    let tweeter = `https://twitter.com/intent/tweet?url=${qouteText.innerText}`
    window.open(tweeter, "_blank")
})


qouteBtn.addEventListener("click", randomQoute)