let numbers = [];

for (let i = 0; i < 10; i++) {
    let num = parseInt(prompt("Enter a number:"));
    numbers.push(num);
}

console.log("Unsorted array:", numbers);

function bubbleSort(arr) {
    let n = arr.length;
    let swapped;

    for (let i = 0; i < n - 1; i++) {
        swapped = false;

        for (let j = 0; j < n - i - 1; j++) {
            console.log(`Comparing ${arr[j]} and ${arr[j + 1]}`);

            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;

                swapped = true;
                console.log(`Swapped: ${arr[j]} and ${arr[j + 1]}`);
            }
        }

        if (!swapped) {
            break;
        }

        console.log("Array after pass " + (i + 1) + ":", arr);
    }
}

bubbleSort(numbers);

console.log("Sorted array:", numbers);