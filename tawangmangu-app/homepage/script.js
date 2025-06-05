document.addEventListener("DOMContentLoaded", () => {
  const btnLainnya = document.getElementById("btn-lainnya");
  btnLainnya.addEventListener("click", () => {
    const waNumber = "6281234567890"; // ganti nomor WA kamu
    const waUrl = `https://wa.me/${waNumber}`;
    window.open(waUrl, "_blank");
  });

  const layananButtons = document.querySelectorAll(".btn-layanan[data-layanan]");
  layananButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const layanan = btn.getAttribute("data-layanan");
      window.location.href = `../layanan/${layanan}.html`;
    });
  });

  // Toggle search input
  const btnSearch = document.getElementById("btn-search");
  const searchSection = document.querySelector(".search-section");
  btnSearch.addEventListener("click", () => {
    searchSection.classList.toggle("hidden");
    if (!searchSection.classList.contains("hidden")) {
      document.getElementById("search-input").focus();
    }
  });

  // Simple search filter layanan
  const searchInput = document.getElementById("search-input");
  const layananList = document.getElementById("layanan-list");

  searchInput.addEventListener("input", () => {
    const filter = searchInput.value.toLowerCase();
    layananButtons.forEach((btn) => {
      const text = btn.textContent.toLowerCase();
      btn.style.display = text.includes(filter) ? "" : "none";
    });
  });

  // Keranjang sederhana (count)
  const btnCart = document.getElementById("btn-cart");
  const cartCount = document.getElementById("cart-count");
  let cartItems = 0;

  btnCart.addEventListener("click", () => {
    alert(`Keranjangmu saat ini berisi ${cartItems} item.`);
    // nanti bisa dikembangkan dengan halaman keranjang
  });

  // Profil modal
  const btnProfile = document.getElementById("btn-profile");
  const profileModal = document.getElementById("profile-modal");
  const closeProfile = document.getElementById("close-profile");

  btnProfile.addEventListener("click", () => {
    profileModal.classList.remove("hidden");
  });

  closeProfile.addEventListener("click", () => {
    profileModal.classList.add("hidden");
  });

  window.addEventListener("click", (e) => {
    if (e.target === profileModal) {
      profileModal.classList.add("hidden");
    }
  });
});
