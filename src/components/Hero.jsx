function sembunyikanJikaGagal(e) {
  e.currentTarget.style.display = "none";
}

function Hero() {
  return (
    <section className="hero">
      <div className="kolase">
        <div className="foto-bingkai">
          <img src="/foto-hero.jpg" alt="Suasana cafe di Bandung" onError={sembunyikanJikaGagal} />
        </div>
        <img src="/bunga.png" alt="" className="stiker stiker-bunga" onError={sembunyikanJikaGagal} />
        <img src="/kantong-croissant.png" alt="" className="stiker stiker-kantong" onError={sembunyikanJikaGagal} />
        <img src="/menu.png" alt="" className="stiker stiker-menu" onError={sembunyikanJikaGagal} />
        <img src="/kamera.png" alt="" className="stiker stiker-kamera" onError={sembunyikanJikaGagal} />
      </div>
      <p className="tagline">
        A tiny love letter to Bandung cafés—where every latte gets judged, every pastry gets a
        chance, and every cute spot earns its stars
      </p>
    </section>
  );
}

export default Hero;