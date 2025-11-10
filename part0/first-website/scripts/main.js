// Store a reference to the <h1> in a variable
const myHeading = document.querySelector("h1")

// Update the text content of the <h1>
myHeading.textContent = "Hallo User!"

// List alteration
const listItems = document.querySelectorAll('li')

const toggleDone = e => {
    if (!e.target.className) {
        e.target.className = 'done'
    } else {
        e.target.className = ''
    }
}

listItems.forEach(item => {
    item.addEventListener('click', toggleDone)
})

// Image changer
const myImage = document.querySelector('img')

const myImages = [
    {
        src: 'images/testimage.png',
        alt: 'Made with ChatGPT, Prompt: Create a picture of a baby name febtwenty. Cartoon style, big city, happy.'
    },
    {
        src: 'images/testimage2.png',
        alt: 'Made with ChatGPT, Prompt: alter the picture so it is photorealistic. Same size as the original image.'
    }
]

myImage.addEventListener('click', () => {
    const mySrc = myImage.getAttribute('src')
    if (mySrc === myImages[0].src) {
        myImage.setAttribute('src', myImages[1].src)
        myImage.setAttribute('alt', myImages[1].alt)
    } else {
        myImage.setAttribute('src', myImages[0].src)
        myImage.setAttribute('alt', myImages[0].alt)
    }
})

// Change user
let myButton = document.querySelector('.ChangeUser')
myButton.addEventListener('click', () => console.log('Klick auf change User!'))

const setUserName = () => {
    const myName = prompt('What is your name?')
    localStorage.setItem('name', myName)
    console.log(myName)
    myHeading.textContent = `What's up, ${myName}?`
}

myButton.addEventListener('click', setUserName)