import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "./Home.css";
import pastel from "./img/pastel.jpg";
import risol from "./img/risol.jpg";
import lontong from "./img/lontong.jpg";
import bolu from "./img/bolu.jpg";
import lemper from "./img/lemper.jpg";

function Home() {
  return (
    <div class="home">
      <header>
        <h1>Waroenk Snack</h1>
        <nav>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#tentang">About Us</a>
            </li>
            <li>
              <a href="#produk">Products</a>
            </li>
            <li>
              <a href="#contact">Contact Us</a>
            </li>
            <li>
              <a href="/kelas">Class</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <section class="hero" id="tentang">
          <h1>Selamat Datang Di Waroenk Snack</h1>
          <p>
            Kami Menyediakan Berbagai Macam Snack,
            <br />
            Dari Yang Basah Maupun Kering
          </p>
          <button>Learn More</button>
        </section>
        <section class="produk services" id="produk">
          <h2>Produk Kami</h2>
          <div class="produk-gambar">
            <img src={pastel} alt="Produk 1" />
            <img src={risol} alt="Produk 2" />
            <img src={lontong} alt="Produk 3" />
            <img src={bolu} alt="Produk 4" />
            <img src={lemper} alt="Produk 5" />
          </div>
        </section>
        <section class="services">
          <h2>Jasa Kami</h2>
          <ul>
            <li>
              <h3>Satuan</h3>
              <p>
                Disini Kamu Bisa Membeli Beberapa Produk Kami Dalam Jumlah Yang
                Sedikit.
                <br />
                &nbsp;
              </p>
            </li>
            <li>
              <h3>Paketan</h3>
              <p>
                Disini Kamu Bisa Membeli Beberapa Produk Kami Dalam Jumlah Yang
                Banyak.
                <br />
                &nbsp;
              </p>
            </li>
            <li>
              <h3>Snack Time</h3>
              <p>
                Kami Menyediakan Snack Dalam Kemasan Yang Berisi Beberapa Produk
                Kami(Kustom).
                <br />
                &nbsp;
              </p>
            </li>
          </ul>
        </section>
        <section class="contact-us" id="contact">
          <h2>Contact Us</h2>
          <div class="contact-info">
            <p>
              <strong>Alamat:</strong> Jl. Masjid Darussalam Gang Lipin RT
              005/RW 014 No.33
            </p>
            <p>
              <strong>No.Tlp:</strong> 0812-1227-9645
            </p>
            <p>
              <strong>Email:</strong> waroenksnack11@gmail.com
            </p>
          </div>
        </section>
        <a
          href="https://api.whatsapp.com/send?phone=6281212279645"
          target="_blank"
          class="wa-float"
        >
          <img
            src="https://www.freeiconspng.com/thumbs/logo-whatsapp-png/logo-whatsapp-png-pic-0.png"
            class="img"
          />
          <span class="teks">WhatsApp</span>
        </a>
      </main>
      <footer>
        <p>&copy; 2023 Waroenk Snack</p>
      </footer>
    </div>
  );
}

export default Home;