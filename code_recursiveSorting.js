function merge(arr1, arr2) {
    let i = 0;
    let j = 0;
    let result = [];

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            result.push(arr1[i]);
            i++;
        } else {
            result.push(arr2[j]);
            j++;
        }
    }

    
    while (i < arr1.length) {
        result.push(arr1[i]);
        i++;
    }

    while (j < arr2.length) {
        result.push(arr2[j]);
        j++;
    }

    return result; 
}

function mergeSort(arr) {
    if (arr.length === 0) {
        return []; 
    }

    if (arr.length === 1) {
        return arr; 
    }

    const middleIndex = Math.floor(arr.length / 2);
    const left = arr.slice(0, middleIndex);
    const right = arr.slice(middleIndex);

    
    return merge(mergeSort(left), mergeSort(right));
}

const sorted = mergeSort([2, -9, 8, 19, 0, 5, -3]);
console.log(sorted);
