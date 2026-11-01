import CardCafe from "./CardCafe";

function DaftarCafe({ daftarCafe }) {
  if (daftarCafe.length === 0) {
    return <p className="kosong">Belum ada data Cafe</p>;
  }

  return (
    <section className="daftar">
      {daftarCafe.map((cafe) => (
        <CardCafe
          key={cafe.id}
          nama={cafe.nama}
          area={cafe.area}
          menuAndalan={cafe.menuAndalan}
          rating={cafe.rating}
        />
      ))}
    </section>
  );
}

export default DaftarCafe;