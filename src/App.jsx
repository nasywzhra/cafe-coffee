import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import RingkasanCafe from "./components/RingkasanCafe";
import FormCafe from "./components/FormCafe";
import DaftarCafe from "./components/DaftarCafe";
import "./App.css";

const dataAwal = [
  { id: 1, nama: "Kopi Cantel Braga ", area: "Braga", menuAndalan: "Kopi Susu OG / Kopi Susu Cantel", rating: 4.5 },
  { id: 2, nama: "Lapinea Cafe", area: "Lembang", menuAndalan: "aneka pastry & kopi yang enak", rating: 4 },
  { id: 3, nama: "ManA Social Cafe", area: "Buah Batu", menuAndalan: "Butterscotch Latte", rating: 4.5 },
  { id: 4, nama: "Jabarano Coffee", area: "Braga", menuAndalan: "Chocolate Signature & Dirty Latte", rating: 4 },
  { id: 5, nama: "Up’s Coffee & Eatery", area: "Batununggal", menuAndalan: "Affogato coffee dengan view city light yang cantik", rating: 4.5 },
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
      </main>
      <footer className="footer">
        <div className="tenda" aria-hidden="true" />
        <p>made with love and a little too much caffeine</p>
      </footer>
    </>
  );
}

export default App;