const readline = require('readline');
const dr = readline.createInterface({
   input: process.stdin,
   output: process.stdout
});

const KonversiSuhu = (TC, kode) => {
    let hasil;
    if (kode == 'F' || kode == 'f')
        hasil = (9.0 / 5.0) * TC + 32;
    else if (kode == 'R' || kode == 'r')
        hasil = (4.0 / 5.0) * TC;
    else if (kode == 'K' || kode == 'k')
        hasil = TC + 273;
    else
        hasil = 0;

    return hasil;
}

function isValidNumber(value) {
  return !isNaN(value) && value.trim() !== '';
}

dr.question('Masukkan derajat (angka): ', (derajatInput) => {
  if (!isValidNumber(derajatInput)) {
    console.log('Input derajat harus berupa angka.');
    dr.close();
    return;
  }

  const derajat = parseFloat(derajatInput);

  dr.question('Masukkan kode (string): ', (kode) => {
    if (!kode.trim()) {
      console.log('Kode tidak boleh kosong.');
      dr.close();
      return;
    }

    const hasil = KonversiSuhu(derajat, kode);
    console.log(`Derajat: ${hasil}, Kode: ${kode}`);

    dr.close();
  });
});
