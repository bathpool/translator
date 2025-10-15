const btn = document.getElementById('btn')
const textResult = document.getElementById('text-result') 
const textInput = document.getElementById('textarea')
let isDefault = true
textInput.value = ''

btn.addEventListener('click', () => {

    console.log(textInput.value)

    if ( isDefault && textInput.value ) {
        togglePage()
        getTranslation()
        isDefault = false
    } else if ( !isDefault) {
        defaultPage()
        isDefault = true
    }

})

function togglePage() {
    textResult.style.display = 'block'


}

function defaultPage() {
    textResult.style.display = 'none'
    textInput.value = ''
}

function getTranslation() {
    

}