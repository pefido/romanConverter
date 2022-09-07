//this directory should contain utilities functions to be used in other components

//this object maps int numbers to the roman notation
enum ROMAN_MAP {
    'M' = 1000,
    'D' = 500,
    'C' = 100,
    'L' = 50,
    'X' = 10,
    'V' = 5,
    'I' = 1,
}

//this object maps the beharior from the int number to the exception range
const EXCEPTION_MAP = {
    [ROMAN_MAP.M]: 100,
    [ROMAN_MAP.D]: 100,
    [ROMAN_MAP.C]: 10,
    [ROMAN_MAP.L]: 10,
    [ROMAN_MAP.X]: 1,
    [ROMAN_MAP.V]: 1,
    [ROMAN_MAP.I]: 0,
};

//this array contains ordered int values that we should process to roman values
// const ROMAN_ORDER = [1000, 500, 100, 50, 10, 5, 1];
const ROMAN_ORDER = [
    ROMAN_MAP.M,
    ROMAN_MAP.D,
    ROMAN_MAP.C,
    ROMAN_MAP.L,
    ROMAN_MAP.X,
    ROMAN_MAP.V,
    ROMAN_MAP.I,
];

export const calculate = function(inputNumber: number) {
    let finalRoman = '';
    let evaluateNumber = inputNumber;
    let i = 0;

    while(evaluateNumber > 0) {
        let currentStep = ROMAN_ORDER[i];

        if(evaluateNumber < currentStep) {
            let exceptionRange = EXCEPTION_MAP[currentStep];
            //shortcircuit the code if we need to go to the next step of the loop
            if( (currentStep - evaluateNumber) > exceptionRange  ) {
                i++;
                continue;
            }

            //this part of the code addresses the scenario where there is an exception to the main rule. There is a symbol that is subtracted to the next one
            finalRoman = 
                finalRoman + 
                ROMAN_MAP[exceptionRange] + 
                ROMAN_MAP[currentStep];
                evaluateNumber = evaluateNumber - (currentStep - exceptionRange);

        } else {//this is the main scenario
            finalRoman += ROMAN_MAP[currentStep];
            evaluateNumber = evaluateNumber - currentStep;
        }
    }

    return finalRoman;
};
