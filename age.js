handleAge = () => {
    const input = document.getElementById("ageInput")
    validateForm(input.value);
    const age = parseInt(input.value)
    yearsToDays(age);
}

yearsToDays = (age) => {
    
    const greenting = age * 365
    
    const showAgeInDays = document.getElementById("response")

    showAgeInDays.textContent = greenting

    console.log(greenting)


}



