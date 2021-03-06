//console.log('Hello World!')
//document.querySelector('form').addEventListener('submit', addMovie)
let message = document.querySelector('#message')

let addMovie = (event) => {
    event.preventDefault();
    const inputField = document.querySelector('input')
    let movie = document.createElement('li')
    let movieTitle = document.createElement('span')

    movieTitle.textContent = inputField.value

    movieTitle.addEventListener('click', crossOffMovie)

    movie.appendChild(movieTitle)

    let deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'X'
    deleteBtn.addEventListener('click', deleteMovie)
    movie.appendChild(deleteBtn)

    document.querySelector('ul').appendChild(movie)
}

const deleteMovie = (event) => {
    event.target.parentNode.remove()
    message.textContent = 'Movie Deleted'
}

const crossOffMovie = (event) => {
    event.target.classList.toggle('checked')
    if (event.target.classList.contains('checked') === true){
        message.textContent = 'Movie Watched!'
    } else {
        message.textContent = 'Movie Added Back!'
    }
}

document.querySelector('form').addEventListener('submit', addMovie)