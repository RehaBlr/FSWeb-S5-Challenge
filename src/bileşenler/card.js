import axios from "axios";

const Card = (makale) => {
  // GÖREV 5
  // ---------------------
  // Aşağıda gördüğünüz işaretlemeyi döndürmesi gereken bu fonksiyonu uygulayın.
  // Tek argümanı olarak "anabaslik", "yazarFoto" ve "yazarAdı" özelliklerine sahip bir "makale" nesnesi alır.
  // Kullanılan etiketler, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  // Bir kullanıcı bir kartı tıkladığında makalenin başlığının konsola kaydedilmesi için click event dinleyicisi ekleyin.
  //
  // <div class="card">
  //   <div class="headline">{ anabaslik }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ yazarFoto }>
  //     </div>
  //     <span>{ yazarAdı } tarafından</span>
  //   </div>
  // </div>
  //
  const { anabaslik, yazarFoto, yazarAdi } = makale;

  const cardDiv = document.createElement("div");
  const headlineDiv = document.createElement("div");
  const authorDiv = document.createElement("div");
  const imgDiv = document.createElement("div");
  const img = document.createElement("img");
  const span = document.createElement("span");

  cardDiv.classList.add("card");
  headlineDiv.classList.add("headline");
  authorDiv.classList.add("author");
  imgDiv.classList.add("img-container");

  headlineDiv.textContent = anabaslik;
  img.src = yazarFoto;
  span.textContent = yazarAdi;

  cardDiv.appendChild(headlineDiv);
  cardDiv.appendChild(authorDiv);

  authorDiv.appendChild(imgDiv);
  authorDiv.appendChild(span);

  imgDiv.appendChild(img);

  return cardDiv;
};

const cardEkleyici = (secici) => {
  // GÖREV 6
  // ---------------------
  // Tek bağımsız değişkeni olarak bir css seçici alan bu fonksiyonu uygulayın.
  // Makaleleri bu uç noktadan almalıdır: `http://localhost:5001/api/makaleler` (console.log ile test edin!!).
  // Bununla birlikte, makaleler tek bir düzenli dizi halinde organize edilmemiştir. Yanıtı yakından inceleyin!
  // Card bileşenini kullanarak yanıttaki her makale nesnesinden bir kart oluşturun.
  // Her cardı, fonksiyona iletilen seçiciyle eşleşen DOM'daki öğeye ekleyin.
  //
  // const cardContainer = document.querySelector(secici);
  // const cards = Card(res.data.makaleler);
  //     cardContainer.appendChild(cards);
  axios
    .get(`http://localhost:5001/api/makaleler`)
    .then(function (res) {
      const articles = res.data.makaleler;
      Object.keys(articles).map((article) => {
        // console.log(article);
        articles[article].map((item) => {
          // console.log(item);
          document.querySelector(secici).appendChild(Card(item));
        });
      });

      // console.log(res.data);
    })
    .catch(function (err) {
      console.log(err);
    });
};

export { Card, cardEkleyici };
