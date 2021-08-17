const init = () => {
  const inputForm = document.querySelector('form')

  inputForm.addEventListener('submit', (event) => {
    event.preventDefault()

    const input = event.target.children[1].value

    console.log("Input", input)

    fetch(`http://localhost:3000/movies/${input}`)
    .then(response => {
      console.log(response)
      if (response.status == 404) {
        response = {
          "title": "⚠️Not found⚠️",
          "summary": "There was an error finding that movie."
        }
        return response
      } else {
        return response.json()
      }
    })
    .then(data => {
      console.log(data)
      const title = document.querySelector('section#movieDetails h4');
      const summary = document.querySelector('section#movieDetails p');
      title.innerText = data.title;
      summary.innerText = data.summary;
    })
  })
}

document.addEventListener('DOMContentLoaded', init);
