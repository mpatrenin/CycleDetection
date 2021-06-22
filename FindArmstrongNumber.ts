// Main function
const checkIfArmstrong = (input: number) => {
    let result = false;
    let inputLength = input.toString().length;
    let temp = input;
    let sum = 0;

    while (temp > 0) {
        let remainder = temp % 10;
        sum += remainder ** inputLength;
        temp = Math.floor(temp / 10);
    };

    if (sum === input && input !== 0) {
        result = true;
    };
    
    return result
}

// Test function 
const testArmstrongNumberDetection = () => {
    const inputArmstorng = 153;
    const inputNonArmstrong = 153.1;
    console.log(checkIfArmstrong(inputArmstorng));
    console.log(checkIfArmstrong(inputNonArmstrong));
    console.log(checkIfArmstrong(0));
}

testArmstrongNumberDetection();