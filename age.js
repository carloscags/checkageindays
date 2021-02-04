
checkAge = () => {
    
    const input = document.getElementById("checkAge")
    
    const age = parseInt(input.value)
    
    const greenting = age * 365
    
    const showAgeInDays = document.getElementById("response")

    showAgeInDays.textContent = greenting

    console.log(greenting)


}



