    var tanggallengkap = new String();
    var namahari = ("Minggu Senin Selasa Rabu Kamis Jumat Sabtu");
    namahari = namahari.split(" ");
    var namabulan = ("Januari Februari Maret April Mei Juni Juli Agustus September Oktober November Desember");
    namabulan = namabulan.split(" ");
    var tgl = new Date();
    var hari = tgl.getDay();
    var tanggal = tgl.getDate();
    var bulan = tgl.getMonth();
    var tahun = tgl.getFullYear();
    tanggallengkap = namahari[hari] + ", " +tanggal + " " + namabulan[bulan] + " " + tahun;

    document.getElementById("date").innerHTML = tanggallengkap;


let page1 = document.getElementById('page1');
let page2 = document.getElementById('page2');
let page3 = document.getElementById('page3');


for (let i = 1; i < 10; i++) {
    let penyakit = 'penyakit'+i;
     penyakit = document.getElementById(penyakit);    
}
penyakit1.style.display = 'table-row';
penyakit2.style.display = 'table-row';
penyakit3.style.display = 'table-row';
penyakit4.style.display = 'none';
penyakit5.style.display = 'none';
penyakit6.style.display = 'none';
penyakit7.style.display = 'none';
penyakit8.style.display = 'none';
penyakit9.style.display = 'none';

function pageA() {
    
    penyakit1.style.display = 'table-row';
    penyakit2.style.display = 'table-row';
    penyakit3.style.display = 'table-row';
    penyakit4.style.display = 'none';
    penyakit5.style.display = 'none';
    penyakit6.style.display = 'none';
    penyakit7.style.display = 'none';
    penyakit8.style.display = 'none';
    penyakit9.style.display = 'none';
}
function pageB() {
    penyakit1.style.display = 'none';
    penyakit2.style.display = 'none';
    penyakit3.style.display = 'none';
    penyakit4.style.display = 'table-row';
    penyakit5.style.display = 'table-row';
    penyakit6.style.display = 'table-row';
    penyakit7.style.display = 'none';
    penyakit8.style.display = 'none';
    penyakit9.style.display = 'none';
}
    function pageC() {
   


        penyakit1.style.display = 'none';
        penyakit2.style.display = 'none';
        penyakit3.style.display = 'none';
        penyakit4.style.display = 'none';
        penyakit5.style.display = 'none';
        penyakit6.style.display = 'none';
        penyakit7.style.display = 'table-row';
        penyakit8.style.display = 'table-row';
        penyakit9.style.display = 'table-row';
    }

   

page1.addEventListener("click", pageA);
page2.addEventListener("click", pageB);
page3.addEventListener("click", pageC);

