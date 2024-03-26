const button = document.querySelector('button')
const input = document.querySelector('input')
const output = document.querySelector('output')


button.addEventListener('click',()=> {
    //console.log('test')
    //alert('test')
    const mails = input.value
    const kilometres = mails * 1.609
    output.innerHTML = kilometres.toFixed(3)

})