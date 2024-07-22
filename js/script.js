$(".page-scroll").on("click", function (e) {
  // ambil isi href
  var tujuan = $(this).attr("href");

  // ambil element bersangkut
  var elemenTujuan = $(tujuan);

  // pastikan elemen tujuan ada
  if (elemenTujuan.length) {
    // pindahkan scroll
    $("html, body").animate(
      {
        scrollTop: elemenTujuan.offset().top - 50,
      },
      500
    ); // durasi animasi dalam milidetik (1000ms = 1s)
  }

  e.preventDefault();
});
