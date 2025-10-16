const btn = document.getElementById('btn')
const textResult = document.getElementById('text-result') 
const textInput = document.getElementById('textarea')
const selectForm = document.getElementById('form-select')
const inputLabel = document.getElementById('form-input-label')
const resultLabel = document.getElementById('form-select-label')
let isDefault = true
textInput.value = ''
let inputObj = {
    lan: "Spanish",
    input: "",
}

btn.addEventListener('click', async () => {

    console.log(textInput.value)

    if ( isDefault && textInput.value ) {
        inputLabel.textContent = 'Original Text'
        resultLabel.textContent = 'Your Translation'
        btn.textContent = 'Start Over'
        textResult.innerHTML = ``
        textResult.style.display = 'block'
        inputObj.lan = selectForm.elements.myChoice.value
        inputObj.input = textInput.value
        await getTranslation( inputObj )
        isDefault = false
    } else if ( !isDefault) {
        inputLabel.textContent = 'Text to Translate'
        resultLabel.textContent = 'Select Language'
        btn.textContent = 'Translate'
        textInput.value = ''
        textResult.style.display = 'none'
        isDefault = true
    }

})

async function getTranslation( input ) {

    textResult.innerHTML = `<p class=translation>translating......<p>`

try {
    // Send form data using fetch API
    const response = await fetch("./api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(input),
    })
    console.log('tranlation received')
    const result = await response.json()
    console.log(result.translation)

    textResult.innerHTML = `<p class=translation>${result.translation}<p>`

  } catch (error) {
    return "translator is in error"
    console.error("Error:", error)
    textResult.innerHTML = `<p class=translation>translator is in error<p>`
  }

}