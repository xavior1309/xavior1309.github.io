document.addEventListener("DOMContentLoaded", function() {
  const jenisFilter = document.getElementById("jenis");
  const tanggalFilter = document.getElementById("tanggal");
  const tabelBody = document.querySelector("#tabelHutang tbody");
  const totalHutangCell = document.getElementById("totalHutang");
  let totalHutang = 0;

  // Data hutang simulasi
  const dataHutang = [
    { tanggal: "1199-01-01", jenis: "JAMAN MAJAPAHIT 😂", nominal: 163 },
    { tanggal: "2023-06-15", jenis: "TOKEN", nominal: 53 },
        { tanggal: "2023-06-16", jenis: "SHOPPE", nominal: 75 },
    { tanggal: "2023-06-16", jenis: "TOKEN SAUNAH", nominal: 23 },
        { tanggal: "2023-06-19", jenis: "TOKEN SAUNAH", nominal: 23 },
    { tanggal: "2023-07-10", jenis: "PULSA", nominal: 17 },
        { tanggal: "2023-08-03", jenis: "PBB", nominal: 98 },
    { tanggal: "2023-08-05", jenis: "TOKEN HANAPI", nominal: 53 },
    
    
    
    

    { tanggal: "2023-08-07", jenis: "SHOPPE", nominal: 205 },
        { tanggal: "2023-08-13", jenis: "TOKEN SAUNAH", nominal: 23 },
    { tanggal: "2023-08-13", jenis: "TOKEN HANAPI", nominal: 53 },
        { tanggal: "2023-08-14", jenis: "PULSA", nominal: 53 },
    { tanggal: "2023-08-15", jenis: "TOKEN HANAFI", nominal: 103},
        { tanggal: "2023-08-15", jenis: "TOKEN MUSHOLA", nominal: 103 },
    { tanggal: "2023-08-15", jenis: "VOUCHER AXIS", nominal: 12 },
    
    
    

    { tanggal: "2023-08-17", jenis: "TOKEN SAUNAH", nominal: 23 },
        { tanggal: "2023-08-20", jenis: "PULSA", nominal: 53 },
    { tanggal: "2023-08-21", jenis: "PAKET 30H ", nominal: 56 },
        { tanggal: "2023-08-22", jenis: "PULSA", nominal: 22 },
    { tanggal: "2023-08-22", jenis: "TOKEN HANAPI", nominal: 53 },
        { tanggal: "2023-08-22", jenis: "SHOPPE", nominal: 103 },

    // Tambahkan data lainnya di sini
  ];

  // Fungsi untuk mengupdate tabel
  function updateTable() {
    tabelBody.innerHTML = "";
    totalHutang = 0;

    const selectedJenis = jenisFilter.value;
    const selectedTanggal = tanggalFilter.value;

    dataHutang.forEach(data => {
      if ((selectedJenis === "semua" || data.jenis === selectedJenis) &&
          (selectedTanggal === "" || data.tanggal === selectedTanggal)) {
        const row = document.createElement("tr");
        const tanggalCell = document.createElement("td");
        const jenisCell = document.createElement("td");
        const nominalCell = document.createElement("td");

        tanggalCell.textContent = data.tanggal;
        jenisCell.textContent = data.jenis;
        nominalCell.textContent = data.nominal;

        row.appendChild(tanggalCell);
        row.appendChild(jenisCell);
        row.appendChild(nominalCell);

        tabelBody.appendChild(row);

        totalHutang += data.nominal;
      }
    });

    totalHutangCell.textContent = totalHutang;
  }

  jenisFilter.addEventListener("change", updateTable);
  tanggalFilter.addEventListener("change", updateTable);

  updateTable();
});



document.getElementById('playButton').addEventListener('click', function() {
    var audioPlayer = document.getElementById('audioPlayer');
    
    if (audioPlayer.paused) {
        audioPlayer.play();
        this.textContent = 'Pause Musik';
    } else {
        audioPlayer.pause();
        this.textContent = 'Putar Musik';
    }
});
