let input = document.getElementById('input')
let convertBtn = document.getElementById('convert-btn')
let afterTaxInput = document.getElementById('afterTax-input')
let tenServiceInput = document.getElementById('tenService-input')
let twelveServiceInput = document.getElementById('twelveService-input')
let fifteenServiceInput = document.getElementById('fifteenService-input')
let eighteenServiceInput = document.getElementById('eighteenService-input')
//let twentyServiceInput = document.getElementById('twentyService-input')




convertBtn.addEventListener("click", unitConverter)


function unitConverter() {
    const baseValue = parseFloat(input.value); 

    // Check if the input is valid
    if (isNaN(baseValue) || baseValue <= 0) {
        afterTaxInput.textContent = `Invalid input! Please enter a valid number.`;
        tenServiceInput.textContent = `Invalid input! Please enter a valid number.`;
        twelveServiceInput.textContent = `Invalid input! Please enter a valid number.`;
        fifteenServiceInput.textContent = `Invalid input! Please enter a valid number.`;
        eighteenServiceInput.textContent = `Invalid input! Please enter a valid number.`;
        return;
    }

    const taxValue = baseValue * (13/100); // 13% tax
    const tenService = baseValue * (10/100); // 10% service charge
    const twelveService = baseValue * (12/100); // 12% service charge
    const fifteenService = baseValue * (15/100); // 15% service charge
    const eighteenService = baseValue * (18/100); // 18% service charge

    afterTaxInput.innerHTML =   ` $ ${(baseValue + taxValue).toFixed(2)} 
                                    <p class="caption"> (+ ${taxValue.toFixed(2)}) </p> 
                                `;

    tenServiceInput.innerHTML = ` $ ${(baseValue + taxValue + tenService).toFixed(2)} 
                                    <p class="caption"> (+ ${tenService.toFixed(2)}) </p> 
                                `;

    twelveServiceInput.innerHTML =  ` $ ${(baseValue + taxValue + twelveService).toFixed(2)} 
                                        <p class="caption"> (+ ${twelveService.toFixed(2)}) </p> 
                                    `;

    fifteenServiceInput.innerHTML = ` $ ${(baseValue + taxValue + fifteenService).toFixed(2)} 
                                        <p class="caption"> (+ ${fifteenService.toFixed(2)}) </p> 
                                    `;
    
    eighteenServiceInput.innerHTML = ` $ ${(baseValue + taxValue + eighteenService).toFixed(2)} 
                                        <p class="caption"> (+ ${eighteenService.toFixed(2)}) </p> 
                                    `;

}




input.addEventListener("click", clearInput)

function clearInput() {
    input.value = '$0';
}
