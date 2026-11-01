import { useState } from "react";

const formAwal = { nama: "", area: "Braga", menuAndalan: "", rating: "4" };

function FormCafe({ onTambah }) {
  const [form, setForm] = useState(formAwal);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (form.nama.trim() === "" || form.menuAndalan.trim() === "") return;
    onTambah({
      nama: form.nama.trim(),
      area: form.area,
      menuAndalan: form.menuAndalan.trim(),
      rating: Number(form.rating),
    });
    setForm(formAwal);
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Catat cafe baru</h2>

      <label>
        Nama cafe
        <input name="nama" value={form.nama} onChange={handleChange} placeholder="Contoh: Kopi Toko Djawa" />
      </label>

      <label>
        Area
        <select name="area" value={form.area} onChange={handleChange}>
          <option>Braga</option>
          <option>Dago</option>
          <option>Riau</option>
          <option>Lembang</option>
          <option>Buah Batu</option>
          <option>Lainnya</option>
        </select>
      </label>

      <label>
        Menu andalan
        <input name="menuAndalan" value={form.menuAndalan} onChange={handleChange} placeholder="Contoh: Es kopi susu gula aren" />
      </label>

      <label>
        Rating (1-5)
        <input type="number" name="rating" min="1" max="5" step="0.5" value={form.rating} onChange={handleChange} />
      </label>

      <button type="submit">Tambah</button>
    </form>
  );
}

export default FormCafe;