let input = document.getElementById('input')
let convertBtn = document.getElementById('convert-btn')
let afterTaxInput = document.getElementById('afterTax-input')
let fifteenServiceInput = document.getElementById('fifteenService-input')
let twentyServiceInput = document.getElementById('twentyService-input')

convertBtn.addEventListener("click", unitConverter)

function unitConverter() {
    // Get the current value from the input and convert to a number
    let baseValue = parseFloat(input.value);

    // Check if the input is valid
    if (isNaN(baseValue) || baseValue <= 0) {
        afterTaxInput.textContent = `Invalid input! Please enter a valid number.`;
        fifteenServiceInput.textContent = `Invalid input! Please enter a valid number.`;
        twentyServiceInput.textContent = `Invalid input! Please enter a valid number.`;
        return;
    }

    const taxValue = baseValue * (13/100); // 13% tax
    const fifteenService = baseValue * (15/100); // 15% service charge
    const twentyService = baseValue * (20/100); // 20% service charge

    afterTaxInput.textContent = ` $ ${(baseValue + taxValue).toFixed(2)} `;

    fifteenServiceInput.textContent = ` $ ${(baseValue + taxValue + fifteenService).toFixed(2)} `;
    
    twentyServiceInput.textContent = ` $ ${(baseValue + taxValue + twentyService).toFixed(2)} `;
}

