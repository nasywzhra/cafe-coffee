function CardCafe({ nama, area, menuAndalan, rating }) {
  return (
    <article className="kartu">
      <div className="kartu-isi">
        <h3>{nama}</h3>
        <p className="area">{area}</p>
        <p className="menu">
          Menu andalan: <em>{menuAndalan}</em>
        </p>
      </div>
      <div className="stempel" aria-label={`Rating ${rating} dari 5`}>
        {rating}
      </div>
    </article>
  );
}

export default CardCafe;