$(document).ready(function() {
    $(".ekle").click(function() {
        var nickname = $("#nick").val().trim();
        var site = $("#tur").val().trim();
        var sip = $("#siparis").val();
        var tes = $("#teslim").val();

        // Boş alan kontrolü
        if (!nickname || !site || !sip || !tes) {
            alert("Please fill in all fields.");
            return;
        }

        // Mevcut siparişleri al
        var orders = JSON.parse(localStorage.getItem("orders")) || [];

        // Yeni siparişi ekle
        orders.push({
            nickname: nickname,
            site: site,
            siparis: sip,
            teslim: tes
        });

        // Güncellenmiş siparişleri kaydet
        localStorage.setItem("orders", JSON.stringify(orders));

        // Liste sayfasına yönlendirme
        window.location.href = "liste.html";
    });
});
