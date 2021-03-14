// alert('hello')

function print1To255() {
    document.write('<h3>Printing all the integers from 1 to 255.</h3><p>');
    for (let i = 1; i <= 255; i++) {
        document.write(`${i}  `);
    }
    document.write(`</p> `)
}
// print1To255();


function printIntsAndSum0To255() {
    document.write('<h3>Printing integers from 0 to 255, and with each integer printing the sum so far</h3><p>');
    var sum = 0;
    for (let i = 0; i <= 255; i++) {
        sum +=i;
        document.write(`==${i}, ${sum};==`);
    }
    document.write(`</p> `)
}
// printIntsAndSum0To255();


function printMaxOfArray(arr) {
    document.write('<h3>Finding and printing its largest element.</h3>');
    var max= arr[0];    
    for (let i = 1; i <= 255; i++) {
        max < arr[i]? max = arr[i]: null;
    }
    document.write(`<p>The largest element is ${max}</p>`);
}
// printMaxOfArray([1,2,93,6,-100]);


function returnOddsArray1To255() {
    newArr=[];
    for (let i = 1; i <= 255; i++) {
        i%2 ==1 ? newArr[newArr.length] = i: null;
    }
    return newArr;    
}
// console.log(returnOddsArray1To255());


function returnArrayCountGreaterThanY(arr, y) {
    count = 0;
    for (let i = 0; i < arr.length; i++) {
        arr[i]>y ? count++ : null;
    }
    document.write(`<p>You have ${count} entries greater than ${y}</p>`);
}
// returnArrayCountGreaterThanY([1,2,3,-4,-5,6,-66,43], 5);


function printMaxMinAverageArrayVals(arr) {
    var max=arr[0], min=arr[0], sum = 0;
    for (let i = 0; i < arr.length; i++) {
        max < arr[i]? max = arr[i]: null;
        min > arr[i]? min = arr[i]: null;
        sum +=arr[i];
    }
    document.write(`<p>Your entries has maximum of ${max}, minimum of ${min} with an average of ${sum/ arr.length}</p>`);
}
// printMaxMinAverageArrayVals([1,2,3,-4,-5,6,-66,43]);


function swapStringForArrayNegativeVals(arr) {
    var newArr=[];
    for (let i = 0; i < arr.length; i++) {
        0 > arr[i]? newArr[i] = 'Codebits': newArr[i] =arr[i];
    }
    return newArr;
}
// console.log(swapStringForArrayNegativeVals([1,2,3,-4,-5,6,-66,43]));


function printOdds1To255() {
    document.write('<h3>Printing all odd integers from 1 to 255.</h3><p>');
    for (let i = 1; i <= 255; i++) {
        i%2==1? document.write(`${i}  `): null;
    }
    document.write(`</p> `)
}
// printOdds1To255();


function printArrayVals(arr) {
    for (let i = 0; i < arr.length; i++) {
        document.write(`<p>${arr[i]}</p>`);
    }
}
// printArrayVals([1,2,3,-4,-5,6,-66,43]);


function printAverageOfArray(arr) {
    var sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum +=arr[i];
    }
    document.write(`<p>Average is ${sum/ arr.length}</p>`);
}
// printAverageOfArray([1,2,3,-4,-5,6,-66,43]);


function squareArrayVals(arr) {
    var newArr=[];
    for (let i = 0; i < arr.length; i++) {
        newArr[i] =arr[i]**2;
    }
    return newArr;
}
// console.log(squareArrayVals([1,2,3,-4,-5,6,-66,43]));


function zeroOutArrayNegativeVals(arr) {
    var newArr=[];
    for (let i = 0; i < arr.length; i++) {
        0 > arr[i]? newArr[i] = 0: newArr[i] =arr[i];
    }
    return newArr;
}
// console.log(zeroOutArrayNegativeVals([1,2,3,-4,-5,6,-66,43]));


function zeroOutArrayNegativeVals(arr) {
    var newArr=[];
    for (let i = 0; i < arr.length; i++) {
        i == arr.length -1? newArr[i] = 0: newArr[i] =arr[i+1];
    }
    return newArr;
}
// console.log(zeroOutArrayNegativeVals([1,2,3,-4,-5,6,-66,43]));
