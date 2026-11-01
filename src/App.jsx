import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import RingkasanCafe from "./components/RingkasanCafe";
import FormCafe from "./components/FormCafe";
import DaftarCafe from "./components/DaftarCafe";
import TemanNgafe from "./components/TemanNgafe";
import "./App.css";

const dataAwal = [
  { id: 1, nama: "Kopi Toko Djawa", area: "Braga", menuAndalan: "Es kopi susu gula aren", rating: 4.5 },
  { id: 2, nama: "Warung Kopi Purnama", area: "Braga", menuAndalan: "Kopi tubruk dan roti bakar", rating: 4 },
  { id: 3, nama: "Noah's Barn", area: "Dago", menuAndalan: "Affogato", rating: 4.5 },
  { id: 4, nama: "Lawangwangi Creative Space", area: "Dago", menuAndalan: "Cappuccino dengan pemandangan kota", rating: 4 },
  { id: 5, nama: "Kopi Lembang Pagi", area: "Lembang", menuAndalan: "Cokelat panas dan pisang goreng", rating: 3.5 },
];

function App() {
  const [daftarCafe, setDaftarCafe] = useState(dataAwal);

  function tambahCafe(cafeBaru) {
    setDaftarCafe([...daftarCafe, { id: Date.now(), ...cafeBaru }]);
  }

  const totalRating = daftarCafe.reduce((total, cafe) => total + cafe.rating, 0);
  const rataRating = daftarCafe.length > 0 ? totalRating / daftarCafe.length : 0;

  return (
    <>
      <Header />
      <main className="app">
        <Hero />
        <RingkasanCafe jumlah={daftarCafe.length} rataRating={rataRating} />
        <div className="konten">
          <FormCafe onTambah={tambahCafe} />
          <DaftarCafe daftarCafe={daftarCafe} />
        </div>
        <TemanNgafe />
      </main>
      <footer className="footer">
        <div className="tenda" aria-hidden="true" />
        <p>made with love and a little too much caffeine</p>
      </footer>
    </>
  );
}

export default App;