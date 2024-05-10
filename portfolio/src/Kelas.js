import React from "react";
import "./Kelas.css";
import coretan from './img/coretan.png';
import dosen from './img/dosen.png';
import informasi from './img/informasi.png';
import leaf from './img/leaf.png';
import mahasiswa from './img/mahasiswa.png';
import main from './img/main.png';

function Kelas() {
  return (
    <div class="kelas">
      <header>
        <div class="logo-container">
          <img
            src="https://unpam.ac.id/wp-content/uploads/2021/02/logo-unpam-300x291.png"
            alt="Logo"
            class="logo"
          />
          <span class="nama-kelas">03TPLM012</span>
        </div>
        <nav>
          <ul>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#menu">Menu</a>
            <a href="shop.php">Shop</a>
          </ul>
          <div class="plus-line-home">
            <span class="plus-home">+</span>
            <div class="line-home"></div>
          </div>
        </nav>
      </header>
      <main>
        <div class="home" id="home">
          <div class="welcome-home">
            <div class="up-square-home"></div>
            <span class="teks-home">WELCOME</span>
          </div>
          <div align="center" class="foto-kelas-home">
            <img src={main} alt="" class="img-main-home" />
          </div>
        </div>
        <div class="about" id="about">
          <div class="head-about">
            <div class="line-about"></div>
            <span class="teks-about">Tentang Kami</span>
            <div class="line-about"></div>
          </div>
          <div class="fill-about">
            <img src={leaf} alt="" class="leaf-about" />
            <p class="teks-fill-about">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem
              quisquam alias ipsa repellendus facilis deleniti dolore eos
              asperiores, pariatur laudantium veniam aliquam possimus eligendi
              nemo magnam officiis corrupti sed eaque? Lorem ipsum dolor, sit
              amet consectetur adipisicing elit. Et deserunt eaque consequatur
              ratione ipsam! Alias consequatur, enim impedit possimus eaque
              placeat quia error quo vero sapiente id reiciendis sunt numquam.
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus doloribus natus, officiis nam laborum at delectus
              corrupti quas mollitia unde enim, ex quasi sit, saepe a quidem.
              Unde, dignissimos perspiciatis.
            </p>
          </div>
        </div>
        <div class="menu" id="menu">
          <div class="container-menu">
            <div class="containerB-menu">
              <img src={dosen} alt="" class="container-img-menu" />
              <span class="teks-container-menu">dosen</span>
              <img src={coretan} alt="" class="coretan-img-menu" />
            </div>
            <div class="containerT-menu">
              <img src={mahasiswa} alt="" class="container-img-menu" />
              <span class="teks-container-menu">mahasiswa</span>
              <img src={coretan} alt="" class="coretan-img-menu" />
            </div>
            <div class="containerB-menu">
              <img src={informasi} alt="" class="container-img-menu" />
              <span class="teks-container-menu">informasi</span>
              <img src={coretan} alt="" class="coretan-img-menu" />
            </div>
          </div>
          <div class="garis-menu">
            <div class="garis1-menu"></div>
            <div class="garis2-menu"></div>
          </div>
        </div>
      </main>
      <footer></footer>
    </div>
  );
}
export default Kelas;