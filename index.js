const soundCloud = document.querySelector('.sound-cloud');
const off = document.querySelector('#off');
const on = document.querySelector('#on');
const myAudio = document.querySelector('#myAudio');

off.addEventListener('click', () => soundTrack('off'));
on.addEventListener('click', () => soundTrack('on'));

const soundTrack = (soundState) => {
    if (soundState === 'off') {
        on.style.display = 'block';
        off.style.display = 'none';
        soundCloud.style.color = "#00bfff";
        myAudio.play();
    }
    else if (soundState === 'on') {
        on.style.display = 'none';
        off.style.display = 'block';
        soundCloud.style.color = "#f50057";
        myAudio.pause();
    }
}

// Play music functionality

const btnBars = document.querySelector('.bars');
const btnTimes = document.querySelector('.times');
const SideNav = document.querySelector('.aside');


// btnBars.addEventListener('click', () => myFunc('open'));
// btnTimes.addEventListener('click', () => myFunc('close'));

const myFunc = (navCondition) => {
    if (navCondition === 'open') {
        SideNav.classList.add('show-nav');
        btnTimes.style.display = "block";
        btnBars.style.display = "none";
    }
    else if (navCondition === 'close') {
        SideNav.classList.remove('show-nav');
        btnTimes.style.display = "none";
        btnBars.style.display = "block";
    }
}


// Part 2 of the website starts here //  // Part 2 of the website starts here //  // Part 2 of the website starts here //

$(document).ready(function () {
    if (!$("#myCanvas").tagcanvas({
        textColour: "#00bfff",
        outlineColour: "transparent",
        reverse: true,
        depth: 0.8,
        maxSpeed: 0.1,
        weight: true,
    }, "tags")) {
        // something went wrong hide the canvas //
        $("#myCanvasContainer");
    }
})


// contact section functionality starts here //

const nameInput = document.querySelector('.name')
const emailInput = document.querySelector('.email')
const subjectInput = document.querySelector('.subject')
const textareaInput = document.querySelector('.textarea')

const contactForm = document.querySelector('.contact-form')

contactForm.addEventListener("submit", (evt) => {
    evt.preventDefault()
    validateInput()
})


const validateInput = () => {

    let email = emailInput.value
    let textarea = textareaInput.value

    if (!email && !textarea) {
        setError(emailInput.parentElement)
        setError(textareaInput.parentElement)
        showMessage('Please fill all the required fields before sending')
    }

    else if (!email && textarea) {
        setError(emailInput.parentElement)
        showMessage('Oops! Email field cannot be Empty, Please Check')
    }

    else if (email && !textarea) {
        setError(textareaInput.parentElement)
        showMessage('Please write a messasge before sending')
    }

    else if (email && textarea) {

        emailjs.sendForm(
        'service_e0btjgg',
        'template_pucose6', 
        contactForm, 
        'InLlp97Yb5a7Qn5l-'
        
        );
        setSuccess(emailInput.parentElement)
        setSuccess(textareaInput.parentElement)
        showMessage('Message sent successfully', '#00bfff')
        textareaInput.value = ''
        nameInput.value = ''
        emailInput.value = ''
        subjectInput.value = ''
    }
} 

const setError = (input) => {
    if (input.classList.contains("success")) {
        input.classList.remove("success")
    }
    else {
        input.classList.add("error")
    }
}

const setSuccess = (input) => {
    if (input.classList.contains("error")) {
        input.classList.remove("error")
    }
    else {
        input.classList.add("success")
    }
}


const messageDiv = document.querySelector('.message')
const showMessage = (message, updateColor) => {
  const divContent = document.createElement('div')
  divContent.textContent = message
  divContent.classList.add("message-content")
  divContent.style.backgroundColor = updateColor

  messageDiv.prepend(divContent)

  messageDiv.style.transform = `translate(${(0, 0)}%)`

setTimeout(() => {

    divContent.classList.add("hide")

    divContent.addEventListener("transitionend"), () => {
        divContent.remove();
    }

}, 5000)

}



//my doodle code

const img = document.querySelector('.myVector img');
const doodles = document.querySelector('.doodles');

img.addEventListener ('mouseenter',() => {
doodles.style.display = "flex";

});

img.addEventListener ('mouseleave',() => {
    doodles.style.display = "none";
 
    });




