
const validateForm = (age) => {
    
    
    if(age === '' || age === null) {
        window.alert("Fild with empty value")
        throw Error('Error validating form');
    }
    
    let ageNumber = parseInt(age)

    if(ageNumber === NaN) {
        window.alert("Not a number")
        throw Error('Error validating form');
    }

    if(ageNumber <= 0) {
        window.alert("Number cannot be negative")
        throw Error('Error validating form');        
    }
   
    
}

