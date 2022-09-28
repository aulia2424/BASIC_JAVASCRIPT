var http = require("http");
http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-type": "text/html" });
    res.end("Hello World");
  })
  .listen(8080);

/*
     Apa itu node js?
   node js adalah js runtime yang di bangun dalam js engine V8 punya google chrome (node js bukan bahasa pemrogramaan fungsinya untuk menjalankan sripct.js, jadi js tadinya sangat ketergantungan V8 atau engine yang ada di browser, dengan menggunakan node js kita tidak perlu membuka browser untuk menjalankan js)

   Apa maksut dari runtime?
   dimana kita menjalanka/mengeksekusi code kita

   Pembuat node js
   Ryan Dahl tahun 2009 menggunakan event loop, tujuan dia membuat node js supaya V8 engine bisa di jalankan di luar sistem browser.

   Karakteristik Node js
   1. Asynchronous & Event Driven
   2. Non-Blocking
   3. Single Threaded but Highly Scable
   4. Cross Platform
   5. MIT License
   6. NPM (node package manager)

   Fitur Utama Node Js
   1. File System
   2. Buffer
   3. Http & Https
   4. REPL
   5. Console
   6. Crypto
   7. Zlib

   Node Js VS Php?
   tahun dibuat | php 1994 | Node JS 2009
   engine | Php Zend Engine | Node JS Google's V8 Engine
   eksekusi code | php Multi-Thread, Synchronous | Node JS Single-Thread, Asynchronous
   web server | php Apache/ISS | Node JS berjalan di runtime sendiri 
   package manager | php composer | Node JS NPM

   NodeJS cocok untuk..
   - Dynamic Single Page Application (SPA)
   - Realtime App (Chat, Multiplayer)
   - API
   - Streamng App
   - Microservices
   - Command Line Tool
   - MERN (MONGO DB, EXPRESS, REACT, NODE), MEAN (MONGO DB, EXPRESS, ANGULAR, NOD), MEVN (MONGO DB, EXPRESS, VIEW, NOD)


   ilmu apa yang harus kita pahami sebelum belajar Node JS?
   - Javascript Dasar
   - Javascript Lanjutan (Modern JS / ES6)
*/

// NodeJS is a runtime environment for executing Javascript code

/*
Synchronous sistemnya menunggu
const getUserSatu = require("./scr/getUserSync");

const getUserSatu = getUserSync(1);
console.log(userSatu);

const userDua = getUserSync(2);
console.log(userDua);

const halo = "Hello Au!";
console.log(halo);

 saya ingin menjapatkan data daru user sesuai dengan id yang saya kirimkan ke fungsi getUserSync, getUserSync  ngambil dari tempat lain, tempat lain bisa ngambil dari file lain atau bisa request secara external melalui API, pokonya saya ingin mengambil data user yang IPnya 1, setelah di dapatkan tampilkan data user itu begitupun data user dengan IP 2 setelah di dapatkan cetak usernya, yang ketiga hanya menyimpan string ke dalam variable lalu kita cetak stringnya dan minta data keluar.
 pada saatu memproses user yang pertama membutuhkan waktu 3 detik, user dua 2 detik dan user 3 1 detik.
*/

/*
  Asynchronous
const getUser = require("./src/getUser");
const user1 = getUser(1, (user1) => {
  console.log(user1);
});

const user2 = getUser(2, (user1) => {
  console.log(user1);
});

const haloo = "Hello aul!";
console.log(haloo);
 prosesnya sama, minta data user1,user2,isi variable cetak.
 tapi menggunakan gaya Asynchronous, pada saat kita mau meminta data user1 kita kirimkan idnya kita tambahkan callback, callback ini adalah sebuah fungsi yang dijalanan ketika fungsi luarnya selesai dijalankan.
*/

/*
  Synchronous
const getUserSync = (id) => {
  const nama = id === 1 ? "aulia martha" : "12 rpl";
  return { id, nama };
};

const userSatu = getUserSync(1);
console.log(userSatu);

const userDua = getUserSync(2);
console.log(userDua);

const halo = "halo aul";
console.log(halo);
*/
//  saya ingin meminculkan id yang valienya satu dan dua dan nama aulia martha : 12 rpl
// eval untuk mengubah tipe data menjadi matematika

const getUser = (id, cb) => {
  const time = id === 1 ? 3000 : 2000;
  setTimeout(() => {
    const nama = id === 1 ? "Aulia Matha" : "kelas 12";
    cb({ id, nama });
  }, time);
};

const userSatu = getUser(1, (hasil) => {
  console.log(hasil);
});

const userDua = getUser(2, (hasil) => {
  console.log(hasil);
});

const halo = "hello aulll";
console.log(halo);
