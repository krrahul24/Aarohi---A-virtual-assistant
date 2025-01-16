let btn = document.querySelector("#btn")
let content = document.querySelector("#content")
let voice = document.querySelector("#voice")

function speak(text) {
    let text_speak = new SpeechSynthesisUtterance(text)
    text_speak.rate = 1
    text_speak.pitch = 1
    text_speak.volume = 1
    text_speak.lang = "hi-GB"
    window.speechSynthesis.speak(text_speak)
}

function wishMe() {
    let day = new Date()
    let hours = day.getHours()
    if (hours >= 0 && hours < 12) {
        speak("Good Morning Sir")
    }
    else if (hours >= 12 && hours < 16) {
        speak("Good afternoon Sir")
    } else {
        speak("Good Evening Sir")
    }
}
window.addEventListener('load', () => {
    wishMe()
})

let speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
let recognition = new speechRecognition()
recognition.continuous = true;
recognition.onresult = (event) => {
    let currentIndex = event.resultIndex
    let transcript = event.results[currentIndex][0].transcript
    content.innerText = transcript
    takeCommand(transcript.toLowerCase())
}

btn.addEventListener("click", () => {
    recognition.start()
    voice.style.display = "block"
    btn.style.display = "none"
})
function takeCommand(message) {
    voice.style.display = "none"
    btn.style.display = "flex"
    if (message.includes("aarohi") || message.includes("hello")) {
        speak("hello sir,what can i help you?")
    }
    else if (message.includes("who are you")) {
        speak("i am virtual assistant ,created by Rahul Sir")
    } 
    else if (message.includes("open youtube")) {
        speak("opening youtube...")
        window.open("https://youtube.com/", "_blank")
    }

    else if (message.includes("do you love me")|| message.includes("kya tum mujhse pyar karti ho")) {
        speak("yes sir i am always love you")
    } 

    else if (message.includes("who is your owner") || message.includes("who is your father") || message.includes("tumko kisne banaya") ) {
        speak("my owner is kr.rahul sir")
    } 

    else if (message.includes("how old are you")|| message.includes("tum kitne sal ki ho")) {
        speak("I am a virtual machine so I have no age.")
    } 

    else if (message.includes("where are you from") || message.includes("tum kahan se ho") || message.includes("tum kahan rahti ho")) {
        speak("i am from your heart")
    } 

    else if (message.includes("can you listen me") || message.includes("kya tum mujhe sun sakti ho") || message.includes("tum kahan rahti ho")) {
        speak("yes sir")
    } 

    else if (message.includes("will you be my girlfriend") || message.includes("kya tum meri girlfriend banogi") || message.includes("tum kahan rahti ho")) {
        speak("sorry sir i am virtual machine but i'm always here for you")
    } 

    else if (message.includes("i am very sad today") || message.includes("aaj bahut udaas hun") || message.includes("tum kahan rahti ho")) {
        speak("oh! don't wory can you tell me what happened")
    } 

    else if (message.includes("what is your name") ||message.includes("tumhara naam kya hai") ) {
        speak("my name is aarohi")
    } 

    else if (message.includes("thanks") || message.includes("thank you so much")) {
        speak("your welcome")
    } 

    else if (message.includes("bye") || message.includes("good bye")) {
        speak("Good bye sir, it was nice to talk to you sir")
    } 

    else if (message.includes("how are you") || message.includes("kaisi ho")) {
        speak("i am fine sir and you")
    } 

    else if (message.includes("i am also fine") || message.includes("main bhi theek hu")) {
        speak("that's good sir")
    }

    else if (message.includes("open google")) {
        speak("opening google...")
        window.open("https://google.com/", "_blank")
    }

    else if (message.includes("open linkedin")) {
        speak("opening linkedin...")
        window.open("linkedin://", "_blank")
    }
    else if (message.includes("open spotify")) {
        speak("opening spotify...")
        window.open("spotify://", "_blank")
    }
    else if (message.includes("open notepad")) {
        speak("opening notepad...")
        window.open("notepad://", "_blank")
    }
    else if (message.includes("open facebook")) {
        speak("opening facebook...")
        window.open("https://facebook.com/", "_blank")
    }
    else if (message.includes("open instagram")) {
        speak("opening instagram...")
        window.open("https://instagram.com/", "_blank")
    }
    else if (message.includes("open calculator")) {
        speak("opening calculator..")
        window.open("calculator://")
    }
    else if (message.includes("open whatsapp")) {
        speak("opening whatsapp..")
        window.open("whatsapp://")
    }

    else if (message.includes("open camera")) {
        speak("opening camera..")
        window.open("camera://")
    }

    else if (message.includes("open phone")) {
        speak("opening camera..")
        window.open("phone://")
    }

    else if (message.includes("open twitter")) {
        speak("opening twitter..")
        window.open("https://x.com/")
    }

    else if (message.includes("open threads")) {
        speak("opening threads..")
        window.open("https://www.threads.net/?hl=en")
    }
    

    else if (message.includes("time")) {
        let time = new Date().toLocaleString(undefined, { hour: "numeric", minute: "numeric" })
        speak(time)
    }
    else if (message.includes("date")) {
        let date = new Date().toLocaleString(undefined, { day: "numeric", month: "short" })
        speak(date)
    }
    else {
        let finalText = "According to google" + message.replace("Aarohi", "") || message.replace("Aarohi", "")
        speak(finalText)
        window.open(`https://www.google.com/search?q=${message.replace("Aarohi", "")}`, "_blank")
    }
}