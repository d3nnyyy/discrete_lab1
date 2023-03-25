const form1 = document.getElementById('form1');
const form2 = document.getElementById('form2');
const uniqueElementsResult1 = document.querySelector('#unique-elements-result1');
const uniqueElementsResult2 = document.querySelector('#unique-elements-result2');

form1.addEventListener('submit', event => {
    event.preventDefault();
    const input1 = document.querySelector('#array-input1');
    const arrayInputValue1 = input1.value.trim();
    const array1 = arrayInputValue1.split(/\s+/).map(item => parseInt(item.trim())).filter(item => !isNaN(item));
    // const uniqueArray = [...new Set(array1)];

    let tempArray = Array(array1.length).fill(0);
    let k = 0;
    for (let i = 0; i < array1.length; i++) {
        let isDuplicate = false;
        for (let j = 0; j < k; j++) {
            if (array1[i] === tempArray[j]) {
                isDuplicate = true;
                break;
            }
        }
        if (!isDuplicate) {
            tempArray[k] = array1[i];
            k++;
        }
    }
    const uniqueArray = tempArray.filter(item => item !== 0);

    uniqueElementsResult1.textContent = `Результат: [${uniqueArray.join(', ')}]`;
});

form2.addEventListener('submit', event => {
    event.preventDefault();
    const input2 = document.querySelector('#array-input2');
    const input3 = document.querySelector('#array-input3');
    const arrayInputValue2 = input2.value.trim();
    const arrayInputValue3 = input3.value.trim();
    const array2 = arrayInputValue2.split(/\s+/).map(item => parseInt(item.trim())).filter(item => !isNaN(item));
    const array3 = arrayInputValue3.split(/\s+/).map(item => parseInt(item.trim())).filter(item => !isNaN(item));
    const cartesianProduct = [];
    let index = 0;
    for (let i = 0; i < array2.length; i++) {
        for (let j = 0; j < array3.length; j++) {
            // cartesianProduct.push([array2[i], array3[j]]);
            cartesianProduct[index] = [array2[i], array3[j]];
            index++;
        }
    }
    uniqueElementsResult2.textContent = `Декартовий добуток: [${cartesianProduct.join(' ; ')}]`;
});