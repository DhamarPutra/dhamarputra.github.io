function total() {
  var qtypastel = document.getElementById("qty").value;
  var qtyrisol = document.getElementById("qty1").value;
  var qtylontong = document.getElementById("qty2").value;
  var qtyabon = document.getElementById("qty3").value;
  var qtyayam = document.getElementById("qty4").value;
  var qtybolu = document.getElementById("qty5").value;

  var total_pastel = qtypastel * 3000;
  document.getElementById("total-pastel").innerHTML = total_pastel.toLocaleString("id-ID", { style: "currency", currency: "IDR" });
  var total_risol = qtyrisol * 3000;
  document.getElementById("total-risol").innerHTML = total_risol.toLocaleString("id-ID", { style: "currency", currency: "IDR" });
  var total_lontong = qtylontong * 3000;
  document.getElementById("total-lontong").innerHTML = total_lontong.toLocaleString("id-ID", { style: "currency", currency: "IDR" });
  var total_abon = qtyabon * 3500;
  document.getElementById("total-abon").innerHTML = total_abon.toLocaleString("id-ID", { style: "currency", currency: "IDR" });
  var total_ayam = qtyayam * 4500;
  document.getElementById("total-ayam").innerHTML = total_ayam.toLocaleString("id-ID", { style: "currency", currency: "IDR" });
  var total_bolu = qtybolu * 65000;
  document.getElementById("total-bolu").innerHTML = total_bolu.toLocaleString("id-ID", { style: "currency", currency: "IDR" });

  var total_all = total_pastel + total_risol + total_lontong + total_abon + total_ayam + total_bolu;
  document.getElementById("total-all").innerHTML = total_all.toLocaleString("id-ID", { style: "currency", currency: "IDR" });
}
setInterval(total, 100);

function reset() {
  document.getElementById("qty").value = "";
  document.getElementById("qty1").value = "";
  document.getElementById("qty2").value = "";
  document.getElementById("qty3").value = "";
  document.getElementById("qty4").value = "";
  document.getElementById("qty5").value = "";
  document.getElementById("nama").value = "";
}

//database
const qty = document.getElementById("qty");
const qty1 = document.getElementById("qty1");
const qty2 = document.getElementById("qty2");
const qty3 = document.getElementById("qty3");
const qty4 = document.getElementById("qty4");
const qty5 = document.getElementById("qty5");
const nama = document.getElementById("nama");
const nota = document.getElementById("nota");
const tanggal = document.getElementById("tanggal");
const jam = document.getElementById("jam");

function push() {
  firebase.database().ref('Kasir').push({
    pastel: qty.value + " Pcs",
    risol: qty1.value + " Pcs",
    lontong: qty2.value + " Pcs",
    abon: qty3.value + " Pcs",
    ayam: qty4.value + " Pcs",
    bolu: qty5.value + " Loyang",
    nama: nama.value,
    nota: nota.value,
    tw: tanggal.value + " / " + jam.value
  });
  document.getElementById("qty").value = "";
  document.getElementById("qty1").value = "";
  document.getElementById("qty2").value = "";
  document.getElementById("qty3").value = "";
  document.getElementById("qty4").value = "";
  document.getElementById("qty5").value = "";
  document.getElementById("nama").value = "";
};

function no() {
  firebase.database().ref('Kasir').orderByKey().on("value", (snap) => {
    document.getElementById("nota").innerHTML = snap.numChildren() + 1;
    document.getElementById("notashow").innerHTML = snap.numChildren() + 1;
  });
}
setInterval(no, 100);

function showdate() {
  var datenow = new Date();
  document.getElementById("tanggal").innerHTML = datenow.getDate() + "-" + (datenow.getMonth()+1)+ "-" + datenow.getFullYear();
  document.getElementById("jam").innerHTML = datenow.getHours() + ":" + datenow.getMinutes();
  document.getElementById("tanggalshow").innerHTML = datenow.getDate() + "-" + (datenow.getMonth()+1)+ "-" + datenow.getFullYear();
  document.getElementById("jamshow").innerHTML = datenow.getHours() + ":" + datenow.getMinutes();
}
setInterval(showdate, 100);