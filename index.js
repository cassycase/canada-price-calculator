let input = document.getElementById('input')
let convertBtn = document.getElementById('convert-btn')
let afterTaxInput = document.getElementById('afterTax-input')
let tenServiceInput = document.getElementById('tenService-input')
let twelveServiceInput = document.getElementById('twelveService-input')
let fifteenServiceInput = document.getElementById('fifteenService-input')
let eighteenServiceInput = document.getElementById('eighteenService-input')
//let twentyServiceInput = document.getElementById('twentyService-input')

// Initial value with proper formatting
input.value = '$0';


//clear dollar sign from the input value to select value
input.addEventListener('focus', function() {
 // Always reset to empty when clicking $0, preserve other values
    if (this.value === '$0') {
        this.value = '';
    } else {
        // Remove $ but keep existing numbers
        this.value = this.value.replace('$', '');
    }
    this.select();
});

//Add back dollar sign and only display decimals when using decimals
input.addEventListener('blur', function() {
    let rawValue = this.value.replace(/[^0-9.]/g, '');
    
    // Handle empty/zero values
    if (!rawValue || rawValue === '.') {
        this.value = '$0';
        return;
    }

    // Format based on user input
    const hasDecimal = rawValue.includes('.');
    const numericValue = parseFloat(rawValue);
    
    if (hasDecimal) {
        // Show 2 decimals if user entered decimal
        this.value = `$${numericValue.toFixed(2)}`;
    } else {
        // Show whole number if no decimal entered
        this.value = `$${numericValue}`;
    }
});


input.addEventListener('input', function() {
    // Real-time validation
    this.value = this.value
        .replace(/[^0-9.]/g, '') // Remove non-numeric
        .replace(/(\..*)\./g, '$1'); // Prevent multiple decimals
});


convertBtn.addEventListener("click", unitConverter)


function unitConverter() {
    const rawValue = input.value.replace(/[^0-9.]/g, '') || '0'; //updated 
    const baseValue = parseFloat(rawValue); //updated from input.value to rawValue

    // Check if the input is valid
    if (baseValue <= 0) {
        afterTaxInput.innerHTML = `
                                    <p class="error">"Please enter an amount greater than $0 !"</p>
        `;
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


// reset to zero
input.addEventListener("click", clearInput)

function clearInput() {
    input.value = '';
}