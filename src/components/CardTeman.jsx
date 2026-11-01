function CardTeman({ nama, username, kota, email, pesan }) {
  return (
    <li className="kartu-teman">
      <div className="avatar" aria-hidden="true">
        <svg
          viewBox="0 0 24 24"
          width="34"
          height="34"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="8" r="4" />
          <path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8" />
        </svg>
      </div>
      <h3>{nama}</h3>
      <p className="teman-info">@{username} · {kota}</p>
      <p className="teman-pesan">“{pesan}”</p>
      <p className="teman-email">{email}</p>
    </li>
  );
}

export default CardTeman;