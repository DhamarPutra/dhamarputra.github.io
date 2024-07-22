var opt_nama = ["Acep","Ades","Adi","Adit","Agus","Agus M","Andes","Andi","Andi, Hajj","Andrie","Ani","anto","ao","Apit","ari bjn","Arif","Aris","arjun","Asep","asep","Ashari","Atur Stok","awi darsal","Bambang","Baom","Bewok","bng ali","bng iyan","bng ucok","Budi","budi pl","Chikuray","davit","Dhani","Dian","didi","Didik","Dogol","Domik","Dul","Edi","Edit","Edwin","Eni","Feri","Galih","Genta","Gita","Hamim Abdul Jabar","Handoyo","Hasan","Hendrik","Herbal","Heri","Heri Magenta","Herman","Ihsan","ipul","iyan wates","Jay","Jefri","Jeje","Joe","joer","joko sb","Jon","jon","inyong","Karyo","Kiki","kiki","Koco","kodir","kojeck","koling","komeng","Latif","luluk","Madun","madun","mahendra","Maman","Marwan","Miharja","Minang","Mining","Mus","Muslim","nadi","nday","Nur","Omen","p jon","p.joko","Panji","Parno","Pian","Pijay","PK ASAN","pk dani","pk latip","pk rahmat","pk wiwit","pk wakim","pk robi","rakman","Ranger","reja","reni","Rijal","Robert","Robi","Roni","rt tono","Sandi","Siswanto","Soleh","Tarmidi","Tarmizi","Taslim","Tata","Teguh","Tiyo","Toni","Tuan ______","Vespa","Wahyu","Weli","Wiwit","yudi","Yudi Mitra","Yuli","Zaenal",];
var dd_nama = document.getElementById("pembeli");

for(var i = 0; i < opt_nama.length; i++) {
    var option = document.createElement("option");
    option.text = opt_nama[i];
    dd_nama.add(option);
};

var dbqty = document.querySelectorAll('.tabel input[name="qty"]');

dbqty.forEach(function(input) {
  input.addEventListener('change', function() {
    var qty = this.value;
    console.log(qty);
  });
});

var dbqty1 = document.querySelectorAll('.tabel input[name="qty1"]');

dbqty1.forEach(function(input) {
  input.addEventListener('change', function() {
    var qty1 = this.value;
    console.log(qty1);
  });
});

var dbqty2 = document.querySelectorAll('.tabel input[name="qty2"]');

dbqty2.forEach(function(input) {
  input.addEventListener('change', function() {
    var qty2 = this.value;
    console.log(qty2);
  });
});

var dbqty3 = document.querySelectorAll('.tabel input[name="qty3"]');

dbqty3.forEach(function(input) {
  input.addEventListener('change', function() {
    var qty3 = this.value;
    console.log(qty3);
  });
});

var dbqty4 = document.querySelectorAll('.tabel input[name="qty4"]');

dbqty4.forEach(function(input) {
  input.addEventListener('change', function() {
    var qty4 = this.value;
    console.log(qty4);
  });
});

var dbqty5 = document.querySelectorAll('.tabel input[name="qty5"]');

dbqty5.forEach(function(input) {
  input.addEventListener('change', function() {
    var qty5 = this.value;
    console.log(qty5);
  });
});

var dbqty6 = document.querySelectorAll('.tabel input[name="qty6"]');

dbqty6.forEach(function(input) {
  input.addEventListener('change', function() {
    var qty6 = this.value;
    console.log(qty6);
  });
});

var dbqty7 = document.querySelectorAll('.tabel input[name="qty7"]');

dbqty7.forEach(function(input) {
  input.addEventListener('change', function() {
    var qty7 = this.value;
    console.log(qty7);
  });
});

var dbqty8 = document.querySelectorAll('.tabel input[name="qty8"]');

dbqty8.forEach(function(input) {
  input.addEventListener('change', function() {
    var qty8 = this.value;
    console.log(qty8);
  });
});

var dbqty9 = document.querySelectorAll('.tabel input[name="qty9"]');

dbqty9.forEach(function(input) {
  input.addEventListener('change', function() {
    var qty9 = this.value;
    console.log(qty9);
  });
});

var inputList = document.querySelectorAll('.tabel input[name="qty"]');

inputList.forEach(function(input) {
  input.addEventListener('change', function() {
    var row = this.parentNode.parentNode;
    var harga = row.querySelector('.tabel#harga').textContent.trim().replace('Rp ', '').replace(',', '');
    var qty = this.value;
    var jumlah = parseInt(harga) * qty;
    row.querySelector('.tabel#jumlah').textContent = jumlah.toLocaleString();
  });
});

var inputList1 = document.querySelectorAll('.tabel input[name="qty1"]');

inputList1.forEach(function(input) {
  input.addEventListener('change', function() {
    var row1 = this.parentNode.parentNode;
    var harga1 = row1.querySelector('.tabel#harga1').textContent.trim().replace('Rp ', '').replace(',', '');
    var qty1 = this.value;
    var jumlah1 = parseInt(harga1) * qty1;
    row1.querySelector('.tabel#jumlah1').textContent = jumlah1.toLocaleString();
  });
});

var inputList2 = document.querySelectorAll('.tabel input[name="qty2"]');

inputList2.forEach(function(input) {
  input.addEventListener('change', function() {
    var row2 = this.parentNode.parentNode;
    var harga2 = row2.querySelector('.tabel#harga2').textContent.trim().replace('Rp ', '').replace(',', '');
    var qty2 = this.value;
    var jumlah2 = parseInt(harga2) * qty2;
    row2.querySelector('.tabel#jumlah2').textContent = jumlah2.toLocaleString();
  });
});

var inputList3 = document.querySelectorAll('.tabel input[name="qty3"]');

inputList3.forEach(function(input) {
  input.addEventListener('change', function() {
    var row3 = this.parentNode.parentNode;
    var harga3 = row3.querySelector('.tabel#harga3').textContent.trim().replace('Rp ', '').replace(',', '');
    var qty3 = this.value;
    var jumlah3 = parseInt(harga3) * qty3;
    row3.querySelector('.tabel#jumlah3').textContent = jumlah3.toLocaleString();
  });
});

var inputList4 = document.querySelectorAll('.tabel input[name="qty4"]');

inputList4.forEach(function(input) {
  input.addEventListener('change', function() {
    var row4 = this.parentNode.parentNode;
    var harga4 = row4.querySelector('.tabel#harga4').textContent.trim().replace('Rp ', '').replace(',', '');
    var qty4 = this.value;
    var jumlah4 = parseInt(harga4) * qty4;
    row4.querySelector('.tabel#jumlah4').textContent = jumlah4.toLocaleString();
  });
});

var inputList5 = document.querySelectorAll('.tabel input[name="qty5"]');

inputList5.forEach(function(input) {
  input.addEventListener('change', function() {
    var row5 = this.parentNode.parentNode;
    var harga5 = row5.querySelector('.tabel#harga5').textContent.trim().replace('Rp ', '').replace(',', '');
    var qty5 = this.value;
    var jumlah5 = parseInt(harga5) * qty5;
    row5.querySelector('.tabel#jumlah5').textContent = jumlah5.toLocaleString();
  });
});

var inputList6 = document.querySelectorAll('.tabel input[name="qty6"]');

inputList6.forEach(function(input) {
  input.addEventListener('change', function() {
    var row6 = this.parentNode.parentNode;
    var harga6 = row6.querySelector('.tabel#harga6').textContent.trim().replace('Rp ', '').replace(',', '');
    var qty6 = this.value;
    var jumlah6 = parseInt(harga6) * qty6;
    row6.querySelector('.tabel#jumlah6').textContent = jumlah6.toLocaleString();
  });
});

var inputList7 = document.querySelectorAll('.tabel input[name="qty7"]');

inputList7.forEach(function(input) {
  input.addEventListener('change', function() {
    var row7 = this.parentNode.parentNode;
    var harga7 = row7.querySelector('.tabel#harga7').textContent.trim().replace('Rp ', '').replace(',', '');
    var qty7 = this.value;
    var jumlah7 = parseInt(harga7) * qty7;
    row7.querySelector('.tabel#jumlah7').textContent = jumlah7.toLocaleString();
  });
});

var inputList8 = document.querySelectorAll('.tabel input[name="qty8"]');

inputList8.forEach(function(input) {
  input.addEventListener('change', function() {
    var row8 = this.parentNode.parentNode;
    var harga8 = row8.querySelector('.tabel#harga8').textContent.trim().replace('Rp ', '').replace(',', '');
    var qty8 = this.value;
    var jumlah8 = parseInt(harga8) * qty8;
    row8.querySelector('.tabel#jumlah8').textContent = jumlah8.toLocaleString();
  });
});

var inputList9 = document.querySelectorAll('.tabel input[name="qty9"]');

inputList9.forEach(function(input) {
  input.addEventListener('change', function() {
    var row9 = this.parentNode.parentNode;
    var harga9 = row9.querySelector('.tabel#harga9').textContent.trim().replace('Rp ', '').replace(',', '');
    var qty9 = this.value;
    var jumlah9 = parseInt(harga9) * qty9;
    row9.querySelector('.tabel#jumlah9').textContent = jumlah9.toLocaleString();
  });
});

//error mulu ajg
function total() {
  var jumlahList = document.querySelectorAll('.tabel[id^="jumlah"]');
  var totalJumlah = 0;
  jumlahList.forEach(function(jumlah) {
    var value = parseInt(jumlah.textContent.trim().replace(',', '').replace(',', ''));
    if (!isNaN(value)) {
      totalJumlah += value;
    }
  });
  document.getElementById("jumlahtotal").innerHTML = totalJumlah.toLocaleString();
  }
  setInterval(total, 100);

function cekdata() {
  var barang = document.getElementById("barang").value;
  var kode = document.getElementById("kode").innerHTML;
  var harga = document.getElementById("harga").innerHTML;
  // Mengatur harga dan kode berdasarkan pilihan barang
  if (barang === "") {
    harga = 0;
    kode = "";
  } else if (barang === "NCR - Top Putih") {
    harga = 59000;
    kode = "TP01";
  } else if (barang === "NCR - Bottom Merah") {
    harga = 57000;
    kode = "BM02";
  } else if (barang === "NCR - Bottom Kuning") {
    harga = 57000;
    kode = "BK03";
  } else if (barang === "NCR - Bottom Hijau") {
    harga = 57000;
    kode = "BH04";
  } else if (barang === "NCR - Bottom Biru") {
    harga = 57000;
    kode = "BB05";
  } else if (barang === "NCR - Bottom Putih") {
    harga = 57000;
    kode = "BP06";
  } else if (barang === "NCR - Middle Merah") {
    harga = 60000;
    kode = "MM07";
  } else if (barang === "NCR - Middle Kuning") {
    harga = 60000;
    kode = "MK08";
  } else if (barang === "NCR - Middle Hijau") {
    harga = 60000;
    kode = "MH09";
  } else if (barang === "NCR - Middle Biru") {
    harga = 60000;
    kode = "MB10";
  } else if (barang === "NCR - Middle Putih") {
    harga = 60000;
    kode = "MP11";
  } else if (barang === "Samson Bungkus") {
    harga = 500;
    kode = "SB12";
  } else if (barang === "Cover Lebar") {
    harga = 300;
    kode = "CL13";
  } else if (barang === "Cover Panjang") {
    harga = 300;
    kode = "CP14";
  } else if (barang === "Bot/Board") {
    harga = 300;
    kode = "BOT15";
  } else if (barang === "HVS F4 70G/75G") {
    harga = 48000;
    kode = "HF7516";
  } else if (barang === "HVS A4 70G/75G") {
    harga = 42000;
    kode = "HA7517";
  } else if (barang === "HVS F4 80G") {
    harga = 58000;
    kode = "HF8018";
  } else if (barang === "HVS A4 80G") {
    harga = 52000;
    kode = "HA8019";
  }
  if (barang === "Pilih Bahan") {
    "";
  }
  else {
    document.getElementById("no").innerHTML = 1;
  }

  // Menampilkan harga dan kode pada halaman HTML
  document.getElementById("kode").innerHTML = kode;
  document.getElementById("harga").innerHTML = harga;

  var barang1 = document.getElementById("barang1").value;
  var kode1 = document.getElementById("kode1").innerHTML;
  var harga1 = document.getElementById("harga1").innerHTML;
  // Mengatur harga1 dan kode1 berdasarkan pilihan barang1
  if (barang1 === "") {
    harga1 = 0;
    kode1 = "";
  } else if (barang1 === "NCR - Top Putih") {
    harga1 = 59000;
    kode1 = "TP01";
  } else if (barang1 === "NCR - Bottom Merah") {
    harga1 = 57000;
    kode1 = "BM02";
  } else if (barang1 === "NCR - Bottom Kuning") {
    harga1 = 57000;
    kode1 = "BK03";
  } else if (barang1 === "NCR - Bottom Hijau") {
    harga1 = 57000;
    kode1 = "BH04";
  } else if (barang1 === "NCR - Bottom Biru") {
    harga1 = 57000;
    kode1 = "BB05";
  } else if (barang1 === "NCR - Bottom Putih") {
    harga1 = 57000;
    kode1 = "BP06";
  } else if (barang1 === "NCR - Middle Merah") {
    harga1 = 60000;
    kode1 = "MM07";
  } else if (barang1 === "NCR - Middle Kuning") {
    harga1 = 60000;
    kode1 = "MK08";
  } else if (barang1 === "NCR - Middle Hijau") {
    harga1 = 60000;
    kode1 = "MH09";
  } else if (barang1 === "NCR - Middle Biru") {
    harga1 = 60000;
    kode1 = "MB10";
  } else if (barang1 === "NCR - Middle Putih") {
    harga1 = 60000;
    kode1 = "MP11";
  } else if (barang1 === "Samson Bungkus") {
    harga1 = 500;
    kode1 = "SB12";
  } else if (barang1 === "Cover Lebar") {
    harga1 = 300;
    kode1 = "CL13";
  } else if (barang1 === "Cover Panjang") {
    harga1 = 300;
    kode1 = "CP14";
  } else if (barang1 === "Bot/Board") {
    harga1 = 300;
    kode1 = "BOT15";
  } else if (barang1 === "HVS F4 70G/75G") {
    harga1 = 48000;
    kode1 = "HF7516";
  } else if (barang1 === "HVS A4 70G/75G") {
    harga1 = 42000;
    kode1 = "HA7517";
  } else if (barang1 === "HVS F4 80G") {
    harga1 = 58000;
    kode1 = "HF8018";
  } else if (barang1 === "HVS A4 80G") {
    harga1 = 52000;
    kode1 = "HA8019";
  }
  if (barang1 === "Pilih Bahan") {
    "";
  }
  else {
    document.getElementById("no1").innerHTML = 2;
  }
  // Menampilkan harga1 dan kode1 pada halaman HTML
  document.getElementById("kode1").innerHTML = kode1;
  document.getElementById("harga1").innerHTML = harga1;

  var barang2 = document.getElementById("barang2").value;
  var kode2 = document.getElementById("kode2").innerHTML;
  var harga2 = document.getElementById("harga2").innerHTML;
  // Mengatur harga2 dan kode2 berdasarkan pilihan barang2
  if (barang2 === "") {
    harga2 = 0;
    kode2 = "";
  } else if (barang2 === "NCR - Top Putih") {
    harga2 = 59000;
    kode2 = "TP01";
  } else if (barang2 === "NCR - Bottom Merah") {
    harga2 = 57000;
    kode2 = "BM02";
  } else if (barang2 === "NCR - Bottom Kuning") {
    harga2 = 57000;
    kode2 = "BK03";
  } else if (barang2 === "NCR - Bottom Hijau") {
    harga2 = 57000;
    kode2 = "BH04";
  } else if (barang2 === "NCR - Bottom Biru") {
    harga2 = 57000;
    kode2 = "BB05";
  } else if (barang2 === "NCR - Bottom Putih") {
    harga2 = 57000;
    kode2 = "BP06";
  } else if (barang2 === "NCR - Middle Merah") {
    harga2 = 60000;
    kode2 = "MM07";
  } else if (barang2 === "NCR - Middle Kuning") {
    harga2 = 60000;
    kode2 = "MK08";
  } else if (barang2 === "NCR - Middle Hijau") {
    harga2 = 60000;
    kode2 = "MH09";
  } else if (barang2 === "NCR - Middle Biru") {
    harga2 = 60000;
    kode2 = "MB10";
  } else if (barang2 === "NCR - Middle Putih") {
    harga2 = 60000;
    kode2 = "MP11";
  } else if (barang2 === "Samson Bungkus") {
    harga2 = 500;
    kode2 = "SB12";
  } else if (barang2 === "Cover Lebar") {
    harga2 = 300;
    kode2 = "CL13";
  } else if (barang2 === "Cover Panjang") {
    harga2 = 300;
    kode2 = "CP14";
  } else if (barang2 === "Bot/Board") {
    harga2 = 300;
    kode2 = "BOT15";
  } else if (barang2 === "HVS F4 70G/75G") {
    harga2 = 48000;
    kode2 = "HF7516";
  } else if (barang2 === "HVS A4 70G/75G") {
    harga2 = 42000;
    kode2 = "HA7517";
  } else if (barang2 === "HVS F4 80G") {
    harga2 = 58000;
    kode2 = "HF8018";
  } else if (barang2 === "HVS A4 80G") {
    harga2 = 52000;
    kode2 = "HA8019";
  }
  if (barang2 === "Pilih Bahan") {
    "";
  }
  else {
    document.getElementById("no2").innerHTML = 3;
  }
  // Menampilkan harga2 dan kode2 pada halaman HTML
  document.getElementById("kode2").innerHTML = kode2;
  document.getElementById("harga2").innerHTML = harga2;

  var barang3 = document.getElementById("barang3").value;
  var kode3 = document.getElementById("kode3").innerHTML;
  var harga3 = document.getElementById("harga3").innerHTML;
  // Mengatur harga3 dan kode3 berdasarkan pilihan barang3
  if (barang3 === "") {
    harga3 = 0;
    kode3 = "";
  } else if (barang3 === "NCR - Top Putih") {
    harga3 = 59000;
    kode3 = "TP01";
  } else if (barang3 === "NCR - Bottom Merah") {
    harga3 = 57000;
    kode3 = "BM02";
  } else if (barang3 === "NCR - Bottom Kuning") {
    harga3 = 57000;
    kode3 = "BK03";
  } else if (barang3 === "NCR - Bottom Hijau") {
    harga3 = 57000;
    kode3 = "BH04";
  } else if (barang3 === "NCR - Bottom Biru") {
    harga3 = 57000;
    kode3 = "BB05";
  } else if (barang3 === "NCR - Bottom Putih") {
    harga3 = 57000;
    kode3 = "BP06";
  } else if (barang3 === "NCR - Middle Merah") {
    harga3 = 60000;
    kode3 = "MM07";
  } else if (barang3 === "NCR - Middle Kuning") {
    harga3 = 60000;
    kode3 = "MK08";
  } else if (barang3 === "NCR - Middle Hijau") {
    harga3 = 60000;
    kode3 = "MH09";
  } else if (barang3 === "NCR - Middle Biru") {
    harga3 = 60000;
    kode3 = "MB10";
  } else if (barang3 === "NCR - Middle Putih") {
    harga3 = 60000;
    kode3 = "MP11";
  } else if (barang3 === "Samson Bungkus") {
    harga3 = 500;
    kode3 = "SB12";
  } else if (barang3 === "Cover Lebar") {
    harga3 = 300;
    kode3 = "CL13";
  } else if (barang3 === "Cover Panjang") {
    harga3 = 300;
    kode3 = "CP14";
  } else if (barang3 === "Bot/Board") {
    harga3 = 300;
    kode3 = "BOT15";
  } else if (barang3 === "HVS F4 70G/75G") {
    harga3 = 48000;
    kode3 = "HF7516";
  } else if (barang3 === "HVS A4 70G/75G") {
    harga3 = 42000;
    kode3 = "HA7517";
  } else if (barang3 === "HVS F4 80G") {
    harga3 = 58000;
    kode3 = "HF8018";
  } else if (barang3 === "HVS A4 80G") {
    harga3 = 52000;
    kode3 = "HA8019";
  }
  if (barang3 === "Pilih Bahan") {
    "";
  }
  else {
    document.getElementById("no3").innerHTML = 4;
  }
  // Menampilkan harga3 dan kode3 pada halaman HTML
  document.getElementById("kode3").innerHTML = kode3;
  document.getElementById("harga3").innerHTML = harga3;

  var barang4 = document.getElementById("barang4").value;
  var kode4 = document.getElementById("kode4").innerHTML;
  var harga4 = document.getElementById("harga4").innerHTML;
  // Mengatur harga4 dan kode4 berdasarkan pilihan barang4
  if (barang4 === "") {
    harga4 = 0;
    kode4 = "";
  } else if (barang4 === "NCR - Top Putih") {
    harga4 = 59000;
    kode4 = "TP01";
  } else if (barang4 === "NCR - Bottom Merah") {
    harga4 = 57000;
    kode4 = "BM02";
  } else if (barang4 === "NCR - Bottom Kuning") {
    harga4 = 57000;
    kode4 = "BK03";
  } else if (barang4 === "NCR - Bottom Hijau") {
    harga4 = 57000;
    kode4 = "BH04";
  } else if (barang4 === "NCR - Bottom Biru") {
    harga4 = 57000;
    kode4 = "BB05";
  } else if (barang4 === "NCR - Bottom Putih") {
    harga4 = 57000;
    kode4 = "BP06";
  } else if (barang4 === "NCR - Middle Merah") {
    harga4 = 60000;
    kode4 = "MM07";
  } else if (barang4 === "NCR - Middle Kuning") {
    harga4 = 60000;
    kode4 = "MK08";
  } else if (barang4 === "NCR - Middle Hijau") {
    harga4 = 60000;
    kode4 = "MH09";
  } else if (barang4 === "NCR - Middle Biru") {
    harga4 = 60000;
    kode4 = "MB10";
  } else if (barang4 === "NCR - Middle Putih") {
    harga4 = 60000;
    kode4 = "MP11";
  } else if (barang4 === "Samson Bungkus") {
    harga4 = 500;
    kode4 = "SB12";
  } else if (barang4 === "Cover Lebar") {
    harga4 = 300;
    kode4 = "CL13";
  } else if (barang4 === "Cover Panjang") {
    harga4 = 300;
    kode4 = "CP14";
  } else if (barang4 === "Bot/Board") {
    harga4 = 300;
    kode4 = "BOT15";
  } else if (barang4 === "HVS F4 70G/75G") {
    harga4 = 48000;
    kode4 = "HF7516";
  } else if (barang4 === "HVS A4 70G/75G") {
    harga4 = 42000;
    kode4 = "HA7517";
  } else if (barang4 === "HVS F4 80G") {
    harga4 = 58000;
    kode4 = "HF8018";
  } else if (barang4 === "HVS A4 80G") {
    harga4 = 52000;
    kode4 = "HA8019";
  }
  if (barang4 === "Pilih Bahan") {
    "";
  }
  else {
    document.getElementById("no4").innerHTML = 5;
  }
  // Menampilkan harga4 dan kode4 pada halaman HTML
  document.getElementById("kode4").innerHTML = kode4;
  document.getElementById("harga4").innerHTML = harga4;

  var barang5 = document.getElementById("barang5").value;
  var kode5 = document.getElementById("kode5").innerHTML;
  var harga5 = document.getElementById("harga5").innerHTML;
  // Mengatur harga5 dan kode5 berdasarkan pilihan barang5
  if (barang5 === "") {
    harga5 = 0;
    kode5 = "";
  } else if (barang5 === "NCR - Top Putih") {
    harga5 = 59000;
    kode5 = "TP01";
  } else if (barang5 === "NCR - Bottom Merah") {
    harga5 = 57000;
    kode5 = "BM02";
  } else if (barang5 === "NCR - Bottom Kuning") {
    harga5 = 57000;
    kode5 = "BK03";
  } else if (barang5 === "NCR - Bottom Hijau") {
    harga5 = 57000;
    kode5 = "BH04";
  } else if (barang5 === "NCR - Bottom Biru") {
    harga5 = 57000;
    kode5 = "BB05";
  } else if (barang5 === "NCR - Bottom Putih") {
    harga5 = 57000;
    kode5 = "BP06";
  } else if (barang5 === "NCR - Middle Merah") {
    harga5 = 60000;
    kode5 = "MM07";
  } else if (barang5 === "NCR - Middle Kuning") {
    harga5 = 60000;
    kode5 = "MK08";
  } else if (barang5 === "NCR - Middle Hijau") {
    harga5 = 60000;
    kode5 = "MH09";
  } else if (barang5 === "NCR - Middle Biru") {
    harga5 = 60000;
    kode5 = "MB10";
  } else if (barang5 === "NCR - Middle Putih") {
    harga5 = 60000;
    kode5 = "MP11";
  } else if (barang5 === "Samson Bungkus") {
    harga5 = 500;
    kode5 = "SB12";
  } else if (barang5 === "Cover Lebar") {
    harga5 = 300;
    kode5 = "CL13";
  } else if (barang5 === "Cover Panjang") {
    harga5 = 300;
    kode5 = "CP14";
  } else if (barang5 === "Bot/Board") {
    harga5 = 300;
    kode5 = "BOT15";
  } else if (barang5 === "HVS F4 70G/75G") {
    harga5 = 48000;
    kode5 = "HF7516";
  } else if (barang5 === "HVS A4 70G/75G") {
    harga5 = 42000;
    kode5 = "HA7517";
  } else if (barang5 === "HVS F4 80G") {
    harga5 = 58000;
    kode5 = "HF8018";
  } else if (barang5 === "HVS A4 80G") {
    harga5 = 52000;
    kode5 = "HA8019";
  }
  if (barang5 === "Pilih Bahan") {
    "";
  }
  else {
    document.getElementById("no5").innerHTML = 6;
  }
  // Menampilkan harga5 dan kode5 pada halaman HTML
  document.getElementById("kode5").innerHTML = kode5;
  document.getElementById("harga5").innerHTML = harga5;

  var barang6 = document.getElementById("barang6").value;
  var kode6 = document.getElementById("kode6").innerHTML;
  var harga6 = document.getElementById("harga6").innerHTML;
  // Mengatur harga6 dan kode6 berdasarkan pilihan barang6
  if (barang6 === "") {
    harga6 = 0;
    kode6 = "";
  } else if (barang6 === "NCR - Top Putih") {
    harga6 = 59000;
    kode6 = "TP01";
  } else if (barang6 === "NCR - Bottom Merah") {
    harga6 = 57000;
    kode6 = "BM02";
  } else if (barang6 === "NCR - Bottom Kuning") {
    harga6 = 57000;
    kode6 = "BK03";
  } else if (barang6 === "NCR - Bottom Hijau") {
    harga6 = 57000;
    kode6 = "BH04";
  } else if (barang6 === "NCR - Bottom Biru") {
    harga6 = 57000;
    kode6 = "BB05";
  } else if (barang6 === "NCR - Bottom Putih") {
    harga6 = 57000;
    kode6 = "BP06";
  } else if (barang6 === "NCR - Middle Merah") {
    harga6 = 60000;
    kode6 = "MM07";
  } else if (barang6 === "NCR - Middle Kuning") {
    harga6 = 60000;
    kode6 = "MK08";
  } else if (barang6 === "NCR - Middle Hijau") {
    harga6 = 60000;
    kode6 = "MH09";
  } else if (barang6 === "NCR - Middle Biru") {
    harga6 = 60000;
    kode6 = "MB10";
  } else if (barang6 === "NCR - Middle Putih") {
    harga6 = 60000;
    kode6 = "MP11";
  } else if (barang6 === "Samson Bungkus") {
    harga6 = 500;
    kode6 = "SB12";
  } else if (barang6 === "Cover Lebar") {
    harga6 = 300;
    kode6 = "CL13";
  } else if (barang6 === "Cover Panjang") {
    harga6 = 300;
    kode6 = "CP14";
  } else if (barang6 === "Bot/Board") {
    harga6 = 300;
    kode6 = "BOT15";
  } else if (barang6 === "HVS F4 70G/75G") {
    harga6 = 48000;
    kode6 = "HF7516";
  } else if (barang6 === "HVS A4 70G/75G") {
    harga6 = 42000;
    kode6 = "HA7517";
  } else if (barang6 === "HVS F4 80G") {
    harga6 = 58000;
    kode6 = "HF8018";
  } else if (barang6 === "HVS A4 80G") {
    harga6 = 52000;
    kode6 = "HA8019";
  }
  if (barang6 === "Pilih Bahan") {
    "";
  }
  else {
    document.getElementById("no6").innerHTML = 7;
  }
  // Menampilkan harga6 dan kode6 pada halaman HTML
  document.getElementById("kode6").innerHTML = kode6;
  document.getElementById("harga6").innerHTML = harga6;

  var barang7 = document.getElementById("barang7").value;
  var kode7 = document.getElementById("kode7").innerHTML;
  var harga7 = document.getElementById("harga7").innerHTML;
  // Mengatur harga7 dan kode7 berdasarkan pilihan barang7
  if (barang7 === "") {
    harga7 = 0;
    kode7 = "";
  } else if (barang7 === "NCR - Top Putih") {
    harga7 = 59000;
    kode7 = "TP01";
  } else if (barang7 === "NCR - Bottom Merah") {
    harga7 = 57000;
    kode7 = "BM02";
  } else if (barang7 === "NCR - Bottom Kuning") {
    harga7 = 57000;
    kode7 = "BK03";
  } else if (barang7 === "NCR - Bottom Hijau") {
    harga7 = 57000;
    kode7 = "BH04";
  } else if (barang7 === "NCR - Bottom Biru") {
    harga7 = 57000;
    kode7 = "BB05";
  } else if (barang7 === "NCR - Bottom Putih") {
    harga7 = 57000;
    kode7 = "BP06";
  } else if (barang7 === "NCR - Middle Merah") {
    harga7 = 60000;
    kode7 = "MM07";
  } else if (barang7 === "NCR - Middle Kuning") {
    harga7 = 60000;
    kode7 = "MK08";
  } else if (barang7 === "NCR - Middle Hijau") {
    harga7 = 60000;
    kode7 = "MH09";
  } else if (barang7 === "NCR - Middle Biru") {
    harga7 = 60000;
    kode7 = "MB10";
  } else if (barang7 === "NCR - Middle Putih") {
    harga7 = 60000;
    kode7 = "MP11";
  } else if (barang7 === "Samson Bungkus") {
    harga7 = 500;
    kode7 = "SB12";
  } else if (barang7 === "Cover Lebar") {
    harga7 = 300;
    kode7 = "CL13";
  } else if (barang7 === "Cover Panjang") {
    harga7 = 300;
    kode7 = "CP14";
  } else if (barang7 === "Bot/Board") {
    harga7 = 300;
    kode7 = "BOT15";
  } else if (barang7 === "HVS F4 70G/75G") {
    harga7 = 48000;
    kode7 = "HF7516";
  } else if (barang7 === "HVS A4 70G/75G") {
    harga7 = 42000;
    kode7 = "HA7517";
  } else if (barang7 === "HVS F4 80G") {
    harga7 = 58000;
    kode7 = "HF8018";
  } else if (barang7 === "HVS A4 80G") {
    harga7 = 52000;
    kode7 = "HA8019";
  }
  if (barang7 === "Pilih Bahan") {
    "";
  }
  else {
    document.getElementById("no7").innerHTML = 8;
  }
  // Menampilkan harga7 dan kode7 pada halaman HTML
  document.getElementById("kode7").innerHTML = kode7;
  document.getElementById("harga7").innerHTML = harga7;

  var barang8 = document.getElementById("barang8").value;
  var kode8 = document.getElementById("kode8").innerHTML;
  var harga8 = document.getElementById("harga8").innerHTML;
  // Mengatur harga8 dan kode8 berdasarkan pilihan barang8
  if (barang8 === "") {
    harga8 = 0;
    kode8 = "";
  } else if (barang8 === "NCR - Top Putih") {
    harga8 = 59000;
    kode8 = "TP01";
  } else if (barang8 === "NCR - Bottom Merah") {
    harga8 = 57000;
    kode8 = "BM02";
  } else if (barang8 === "NCR - Bottom Kuning") {
    harga8 = 57000;
    kode8 = "BK03";
  } else if (barang8 === "NCR - Bottom Hijau") {
    harga8 = 57000;
    kode8 = "BH04";
  } else if (barang8 === "NCR - Bottom Biru") {
    harga8 = 57000;
    kode8 = "BB05";
  } else if (barang8 === "NCR - Bottom Putih") {
    harga8 = 57000;
    kode8 = "BP06";
  } else if (barang8 === "NCR - Middle Merah") {
    harga8 = 60000;
    kode8 = "MM07";
  } else if (barang8 === "NCR - Middle Kuning") {
    harga8 = 60000;
    kode8 = "MK08";
  } else if (barang8 === "NCR - Middle Hijau") {
    harga8 = 60000;
    kode8 = "MH09";
  } else if (barang8 === "NCR - Middle Biru") {
    harga8 = 60000;
    kode8 = "MB10";
  } else if (barang8 === "NCR - Middle Putih") {
    harga8 = 60000;
    kode8 = "MP11";
  } else if (barang8 === "Samson Bungkus") {
    harga8 = 500;
    kode8 = "SB12";
  } else if (barang8 === "Cover Lebar") {
    harga8 = 300;
    kode8 = "CL13";
  } else if (barang8 === "Cover Panjang") {
    harga8 = 300;
    kode8 = "CP14";
  } else if (barang8 === "Bot/Board") {
    harga8 = 300;
    kode8 = "BOT15";
  } else if (barang8 === "HVS F4 70G/75G") {
    harga8 = 48000;
    kode8 = "HF7516";
  } else if (barang8 === "HVS A4 70G/75G") {
    harga8 = 42000;
    kode8 = "HA7517";
  } else if (barang8 === "HVS F4 80G") {
    harga8 = 58000;
    kode8 = "HF8018";
  } else if (barang8 === "HVS A4 80G") {
    harga8 = 52000;
    kode8 = "HA8019";
  }
  if (barang8 === "Pilih Bahan") {
    "";
  }
  else {
    document.getElementById("no8").innerHTML = 9;
  }
  // Menampilkan harga8 dan kode8 pada halaman HTML
  document.getElementById("kode8").innerHTML = kode8;
  document.getElementById("harga8").innerHTML = harga8;

  var barang9 = document.getElementById("barang9").value;
  var kode9 = document.getElementById("kode9").innerHTML;
  var harga9 = document.getElementById("harga9").innerHTML;
  // Mengatur harga9 dan kode9 berdasarkan pilihan barang9
  if (barang9 === "") {
    harga9 = 0;
    kode9 = "";
  } else if (barang9 === "NCR - Top Putih") {
    harga9 = 59000;
    kode9 = "TP01";
  } else if (barang9 === "NCR - Bottom Merah") {
    harga9 = 57000;
    kode9 = "BM02";
  } else if (barang9 === "NCR - Bottom Kuning") {
    harga9 = 57000;
    kode9 = "BK03";
  } else if (barang9 === "NCR - Bottom Hijau") {
    harga9 = 57000;
    kode9 = "BH04";
  } else if (barang9 === "NCR - Bottom Biru") {
    harga9 = 57000;
    kode9 = "BB05";
  } else if (barang9 === "NCR - Bottom Putih") {
    harga9 = 57000;
    kode9 = "BP06";
  } else if (barang9 === "NCR - Middle Merah") {
    harga9 = 60000;
    kode9 = "MM07";
  } else if (barang9 === "NCR - Middle Kuning") {
    harga9 = 60000;
    kode9 = "MK08";
  } else if (barang9 === "NCR - Middle Hijau") {
    harga9 = 60000;
    kode9 = "MH09";
  } else if (barang9 === "NCR - Middle Biru") {
    harga9 = 60000;
    kode9 = "MB10";
  } else if (barang9 === "NCR - Middle Putih") {
    harga9 = 60000;
    kode9 = "MP11";
  } else if (barang9 === "Samson Bungkus") {
    harga9 = 500;
    kode9 = "SB12";
  } else if (barang9 === "Cover Lebar") {
    harga9 = 300;
    kode9 = "CL13";
  } else if (barang9 === "Cover Panjang") {
    harga9 = 300;
    kode9 = "CP14";
  } else if (barang9 === "Bot/Board") {
    harga9 = 300;
    kode9 = "BOT15";
  } else if (barang9 === "HVS F4 70G/75G") {
    harga9 = 48000;
    kode9 = "HF7516";
  } else if (barang9 === "HVS A4 70G/75G") {
    harga9 = 42000;
    kode9 = "HA7517";
  } else if (barang9 === "HVS F4 80G") {
    harga9 = 58000;
    kode9 = "HF8018";
  } else if (barang9 === "HVS A4 80G") {
    harga9 = 52000;
    kode9 = "HA8019";
  }
  if (barang9 === "Pilih Bahan") {
    "";
  }
  else {
    document.getElementById("no9").innerHTML = 10;
  }
  // Menampilkan harga9 dan kode9 pada halaman HTML
  document.getElementById("kode9").innerHTML = kode9;
  document.getElementById("harga9").innerHTML = harga9;
};
setInterval(cekdata, 100);
function showdate() {
    var datenow = new Date();
    document.getElementById("tanggal").innerHTML = datenow.getDate() + "/" + (datenow.getMonth()+1)+ "/" + datenow.getFullYear();
    document.getElementById("waktu").innerHTML = datenow.getHours() + ":" + datenow.getMinutes();
}
showdate();
setInterval(showdate, 1000);

function kirim() {
  var pembeli = document.getElementById("pembeli").value;
  if (pembeli == "Pilih Nama") {
    alert("Pilih Nama Terlebih Dahulu");
    return false;
  }
  else {
    change_tlp();
    push();
  }
}

function change_tlp() {
  var tlp = document.getElementById("tlp").value;
	var change = tlp.replace(/\D/g, '');
	if (change.startsWith('08')) {
  		change = '62' + change.substr(1);
	}
  document.getElementById("tlp").value = change;
}

const pembeli = document.getElementById("pembeli");
const tlp = document.getElementById("tlp");
const tanggal = document.getElementById("tanggal");
const waktu = document.getElementById("waktu");
const barang = document.getElementById("barang");
const barang1 = document.getElementById("barang1");
const barang2 = document.getElementById("barang2");
const barang3 = document.getElementById("barang3");
const barang4 = document.getElementById("barang4");
const barang5 = document.getElementById("barang5");
const barang6 = document.getElementById("barang6");
const barang7 = document.getElementById("barang7");
const barang8 = document.getElementById("barang8");
const barang9 = document.getElementById("barang9");
const qty = document.getElementById("dbqty").value;
const qty1 = document.getElementById("dbqty1").value;
const qty2 = document.getElementById("dbqty2").value;
const qty3 = document.getElementById("dbqty3").value;
const qty4 = document.getElementById("dbqty4").value;
const qty5 = document.getElementById("dbqty5").value;
const qty6 = document.getElementById("dbqty6").value;
const qty7 = document.getElementById("dbqty7").value;
const qty8 = document.getElementById("dbqty8").value;
const qty9 = document.getElementById("dbqty9").value;

function push() {
	firebase.database().ref('Toko Kertas').push({
		"Nama Pembeli": pembeli.value,
    "Nomor Telepon": "wa.me/" + tlp.value,
    "Tanggal Pembelian": tanggal.value,
    "Jam Pembelian": waktu.value,
    "1": barang.value + qty + "Rim",
    "2": barang1.value + qty1 + "Rim",
    "3": barang2.value + qty2 + "Rim",
    "4": barang3.value + qty3 + "Rim",
    "5": barang4.value + qty4 + "Rim",
    "6": barang5.value + qty5 + "Rim",
    "7": barang6.value + qty6 + "Rim",
    "8": barang7.value + qty7 + "Rim",
    "9": barang8.value + qty8 + "Rim",
    "10": barang9.value + qty9 + "Rim"
	});
}