const calculateBMI = (heightInMeters, weightInKilograms) => {
    let bmi = weightInKilograms / (heightInMeters/100)**2;
    return bmi.toPrecision(4).toString();
    // could return bmi.toFixed() which returns a precision string
}

console.log(calculateBMI(180, 80)); // "24.69"


