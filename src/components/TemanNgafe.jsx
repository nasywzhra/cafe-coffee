import { useState, useEffect } from "react";
import CardTeman from "./CardTeman";

const URL_API = "https://jsonplaceholder.typicode.com/users";

const TAHAN_LOADING = false;

const PESAN_TEMAN = [
  "i wanna explore cute cafes too, text me!",
  "found a new aesthetic cafe? tell me!",
  "let's cafe-hop, i'll handle the photos!",
  "coffee first, gossip later. text me!",
  "need a cafe with fast wifi, any ideas?",
  "next stop: the best croissant in town!",
];

function TemanNgafe() {
  const [status, setStatus] = useState("loading"); 
  const [daftarTeman, setDaftarTeman] = useState([]);
  const [pesanError, setPesanError] = useState("");
  const [percobaan, setPercobaan] = useState(0);

  useEffect(() => {
    const pengendali = new AbortController();

    async function ambilDataTeman() {
      try {
        const respons = await fetch(URL_API, { signal: pengendali.signal });

        if (!respons.ok) {
          throw new Error(`Server membalas dengan kode ${respons.status}.`);
        }

        const data = await respons.json();
        setDaftarTeman(data);
        setStatus("success");
      } catch (error) {
        if (error.name === "AbortError") return;

        if (error instanceof TypeError) {
          setPesanError("Tidak bisa terhubung ke server. Periksa koneksi internetmu.");
        } else {
          setPesanError(error.message);
        }
        setStatus("error");
      }
    }

    if (!TAHAN_LOADING) {
      ambilDataTeman();
    }

    return () => pengendali.abort();
  }, [percobaan]);

  function cobaLagi() {
    setStatus("loading");
    setPercobaan((angka) => angka + 1);
  }

  return (
    <section className="teman">
      <div className="teman-judul">
        <h2>Teman Ngafe</h2>
        <p>Where coffee meets new friendships.</p>
      </div>

      {status === "loading" && (
        <div className="status-box" role="status">
          <div className="spinner" aria-hidden="true" />
          <p>Memuat daftar teman ngafe...</p>
        </div>
      )}

      {status === "error" && (
        <div className="status-box" role="alert">
          <p>Gagal memuat data. {pesanError}</p>
          <button type="button" onClick={cobaLagi}>
            Coba Lagi
          </button>
        </div>
      )}

      {status === "success" && (
        <ul className="daftar-teman">
          {daftarTeman.map((teman, index) => (
            <CardTeman
              key={teman.id}
              nama={teman.name}
              username={teman.username}
              kota={teman.address.city}
              email={teman.email}
              pesan={PESAN_TEMAN[index % PESAN_TEMAN.length]}
            />
          ))}
        </ul>
      )}
    </section>
  );
}

export default TemanNgafe;