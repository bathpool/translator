const btn = document.getElementById('btn')
const textResult = document.getElementById('text-result') 

btn.addEventListener('click', () => {
    textResult.classList.toggle('active')
})

