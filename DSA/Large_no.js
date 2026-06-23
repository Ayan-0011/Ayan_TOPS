function large(arr) {

    let max = arr[0];

    for (let num of arr) {
        if (num > max) {
            max = num;
        }
    }

    return max;
}

console.log(large([50, 60, 99, 30, 20]));
