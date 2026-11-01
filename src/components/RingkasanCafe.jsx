function RingkasanCafe({ jumlah, rataRating }) {
  return (
    <section className="ringkasan">
      <div>
        <strong>{jumlah}</strong>
        <span>cafe tercatat</span>
      </div>
      <div>
        <strong>{jumlah > 0 ? rataRating.toFixed(1) : "-"}</strong>
        <span>rata-rata rating</span>
      </div>
    </section>
  );
}

export default RingkasanCafe;