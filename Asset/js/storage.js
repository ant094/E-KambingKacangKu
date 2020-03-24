    // Code dibawah ini digunakan untuk memanipulasi tgl pada Header Top Menu
    let arrayHari = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
    let arrayBulan = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
    let tgl = new Date();
    let hari = tgl.getDay();
    let tanggal = tgl.getDate();
    let bulan = tgl.getMonth();
    let tahun = tgl.getFullYear();
    let tanggallengkap = arrayHari[hari] + ", " + tanggal + " " + arrayBulan[bulan] + " " + tahun;

    document.getElementById("date").innerHTML = tanggallengkap;
    document.getElementById("year").innerHTML = tahun;


    // Code dibawah ini digunakan untuk memanipulasi tabel penyakit
    // Terkusus pada button page 1, page 2, dan page 3
    for (let i = 1; i <= 9; i++) {
        penyakit = "penyakit" + i;
        document.getElementById(penyakit).style.display = 'none';
        if (i <= 3) {
            document.getElementById(penyakit).style.display = 'table-row';
        }
    }
    page1.addEventListener("click", function page1() {
        for (let i = 1; i <= 9; i++) {
            penyakit = "penyakit" + i;
            document.getElementById(penyakit).style.display = 'none';
            if (i <= 3) {
                document.getElementById(penyakit).style.display = 'table-row';
            }
        }
        document.getElementById('page1').classList = 'ml-2 mr-2 b-white p-2 border-solid-1 ';
        document.getElementById('page2').classList = 'ml-2 mr-2 b-green p-2 border-solid-1 ';
        document.getElementById('page3').classList = 'ml-2 mr-2 b-green p-2 border-solid-1 ';
    });

    page2.addEventListener("click", function page2() {
        for (let i = 1; i <= 9; i++) {
            penyakit = "penyakit" + i;
            document.getElementById(penyakit).style.display = 'none';
            if (i >= 4 && i <= 6) {
                document.getElementById(penyakit).style.display = 'table-row';
            }
        }
        document.getElementById('page1').classList = 'ml-2 mr-2 b-green p-2 border-solid-1 ';
        document.getElementById('page2').classList = 'ml-2 mr-2 b-white p-2 border-solid-1 ';
        document.getElementById('page3').classList = 'ml-2 mr-2 b-green p-2 border-solid-1 ';
    });

    page3.addEventListener("click", function page3() {
        for (let i = 1; i <= 9; i++) {
            penyakit = "penyakit" + i;
            document.getElementById(penyakit).style.display = 'none';
            if (i >= 7) {
                document.getElementById(penyakit).style.display = 'table-row';
            }
        }
        document.getElementById('page1').classList = 'ml-2 mr-2 b-green p-2 border-solid-1 ';
        document.getElementById('page2').classList = 'ml-2 mr-2 b-green p-2 border-solid-1 ';
        document.getElementById('page3').classList = 'ml-2 mr-2 b-white p-2 border-solid-1 ';
    });