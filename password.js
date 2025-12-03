const readline = require('readline');
const password = readline.createInterface({
   input: process.stdin,
   output: process.stdout
});

let logged = false;
let password_list = ["admin12345", "adm123", "test123", "XC32", "abcdef"];

password.question('Masukkan password admin yang terdaftar? ', (answer) => {
    for(let i = 0; i < 5; i++) {
        if(password_list[i] == answer) {
            logged = true;
            break;
        }
    }

    if(logged == true) {
        console.log(`login berhasil dengan password ${answer}`);
    }
    else {
        console.log(`login gagal`);
    }
    password.close();
});
