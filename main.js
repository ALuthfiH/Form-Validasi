function validateForm() {
    if (document.forms["formPendaftaran"]["nama"].value == "") {
        alert("Nama belum diisi.");
        document.forms["formPendaftaran"]["nama"].focus();
        return false;
    }
    if (document.forms["formPendaftaran"]["nrp"].value == "") {
        alert("NRP belum diisi.");
        document.forms["formPendaftaran"]["nrp"].focus();
        return false;
    }
    if (document.forms["formPendaftaran"]["email"].value == "") {
        alert("Email belum diisi.");
        document.forms["formPendaftaran"]["email"].focus();
        return false;
    }
    if (document.forms["formPendaftaran"]["domisili"].value == "") {
        alert("Domisili belum diisi.");
        document.forms["formPendaftaran"]["domisili"].focus();
        return false;
    }
    if (document.forms["formPendaftaran"]["jurusan"].selectedIndex < 1) {
        alert("Departemen belum dipilih.");
        document.forms["formPendaftaran"]["jurusan"].focus();
        return false;
    }
    if (document.forms["formPendaftaran"]["status"].selectedIndex < 1) {
        alert("Status vaksin belum dipilih.");
        document.forms["formPendaftaran"]["status"].focus();
        return false;
    }

    alert("Data telah disubmit");
}