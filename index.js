const btn = document.getElementById('btn')
const textResult = document.getElementById('text-result') 
const textInput = document.getElementById('textarea')
let isDefault = true
textInput.value = ''
let inputObj = {
    lan: "Spanish",
    input: "",
}

btn.addEventListener('click', () => {

    console.log(textInput.value)

    if ( isDefault && textInput.value ) {
        togglePage()
        inputObj.input = textInput.value
        getTranslation( inputObj )
        isDefault = false
    } else if ( !isDefault) {
        defaultPage()
        isDefault = true
    }

})

async function togglePage(input) {
    textResult.style.display = 'block'
}

function defaultPage() {
    textResult.style.display = 'none'
    textInput.value = ''
}

async function getTranslation( input ) {

try {
    // Send form data using fetch API
    const response = await fetch("./api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(input),
    })
    const result = await JSON.parse(response).result

    textResult.innerHTML = `${result}`

  } catch (error) {
    return "translator is in error"
    console.error("Error:", error)
  }

}