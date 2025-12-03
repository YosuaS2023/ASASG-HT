let n = 5;
let A = [3, 5, 3, 24, 9];

for(let i = 0; i < n; i++) {
    console.log(`membaca variable A array[${i}] = ${A[i]}`); 
}

let sum = 0;

for(let i = 0; i < n; i++) {
    sum += A[i];
}

let AM = sum / n

console.log(`isi am = ${AM}`);
