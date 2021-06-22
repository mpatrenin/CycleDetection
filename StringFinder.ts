// Main function

const checkIfBalancedBrackets = (input: string) => {
    let result = true;
    let stack: string[] = [];

    // Checking if string is empty
    if (!input) {
        result = false;
        return result;
    };

    let bracketsPairs = {
        '{': '}',
        '[': ']',
        '(': ')'
    };

    let closed = {
        '}': true,
        ']': true,
        ')': true
    };
    
    for (const char of input) {
        if (bracketsPairs[char]) {
            stack.push(char);
        } else if (closed[char]) {
            const topOfTheStack = stack.pop();
            
            if (bracketsPairs[topOfTheStack] !== char) {
                result = false;
                break;
            }

        }
    };

    if (stack.length > 0) {
        result = false;
    };

    return result
};

// Test function 

const testCheckIfBalancedBrackets = () => {
    const balancedString = "u 2141 dasd[({@asd})][]asdsad()()";
    const unbalancedString = "asda[sd{@}[]asdsad(22222)([)";
    const onlyleftbraces = "{{{{{{{{{{{{{{{";
    const onlyrightbraces = ")))))))"
    const emptyString = "";

    console.log(checkIfBalancedBrackets(balancedString));
    console.log(checkIfBalancedBrackets(onlyleftbraces));
    console.log(checkIfBalancedBrackets(onlyrightbraces));
    console.log(checkIfBalancedBrackets(unbalancedString));
    console.log(checkIfBalancedBrackets(emptyString));
};

testCheckIfBalancedBrackets()