function Header() {
  return (
    <header className="header">
      <div className="header-isi">
        <span className="rekomendasi">Recommendation from</span>
        <h1>Cafe Coffee</h1>
      </div>
      <div className="tenda" aria-hidden="true" />
    </header>
  );
}

export default Header;