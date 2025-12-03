const readline = require('readline');
const dr = readline.createInterface({
   input: process.stdin,
   output: process.stdout
});

dr.question(`Masukkan menu: (1. Kubus, 2.Balok, 3.Luas lingkaran): `, (menu) => {
    if(menu == 1) {
        dr.question(`Masukkan sisi balok: `, (sisi) => {
            let hasil = sisi * sisi * sisi;
            console.log(`volume kubus dari sisi ${sisi} adalah: ${hasil}`);
            dr.close();
        })
    }
    else if(menu == 2) {
        dr.question(`Masukkan panjang balok: `, (panjang) => {
            dr.question(`Masukkan lebar balok: `, (lebar) => {
                dr.question(`Masukkan tinggi balok: `, (tinggi) => {
                    let hasil = panjang * lebar * tinggi;
                    console.log(`Volume balok adalah: ${hasil}`);
                    dr.close();
                })
            })
        })
    }
    else if(menu == 3) {
        let PI = 3.14;
        dr.question(`Masukkan jari-jari segitiga: `, (jari_jari) => {
            let hasil = PI * (jari_jari * jari_jari);
            console.log(`Hasil luas segitiga dari ${jari_jari} adalah: ${hasil}`)
        });
    }
    else {
        console.log(`Anda harus memilih nomor 1 -3 saja!`);
    }
})
