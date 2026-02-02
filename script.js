function hitungUsia() {
    const input = document.getElementById("tanggalLahir").value;
    const hasil = document.getElementById("hasil");

    if (input === "") {
        hasil.innerHTML = "⚠️ Masukkan tanggal lahir!";
        return;
    }

    const lahir = new Date(input);
    const hariIni = new Date();

    // Hitung usia
    let tahun = hariIni.getFullYear() - lahir.getFullYear();
    let bulan = hariIni.getMonth() - lahir.getMonth();
    let hari = hariIni.getDate() - lahir.getDate();

    if (hari < 0) {
        bulan--;
        hari += 30;
    }

    if (bulan < 0) {
        tahun--;
        bulan += 12;
    }

    // Hitung ulang tahun berikutnya
    let ulangTahun = new Date(
        hariIni.getFullYear(),
        lahir.getMonth(),
        lahir.getDate()
    );

    if (ulangTahun < hariIni) {
        ulangTahun.setFullYear(hariIni.getFullYear() + 1);
    }

    const selisihHari = Math.ceil(
        (ulangTahun - hariIni) / (1000 * 60 * 60 * 24)
    );

    // Hari lahir
    const namaHari = ["Minggu","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu"];
    const hariLahir = namaHari[lahir.getDay()];

    hasil.innerHTML = `
        📌 Usia: ${tahun} tahun, ${bulan} bulan, ${hari} hari <br>
        📅 Hari lahir: ${hariLahir} <br>
        🎉 Ulang tahun lagi: ${selisihHari} hari lagi
    `;
}
