const Header = (baslik, tarih, yazi) => {
  // GÖREV 1
  // ---------------------
  // Bu fonksiyon argüman olarak `baslik`, `tarih` ve `temp` alarak aşağıdaki yapıyı döndürecek.
  // Kullanılan html etiketleri, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  //
  //  <div class="header">
  //    <span class="date">{ tarih }</span>
  //    <h1>{ baslik }</h1>
  //    <span class="temp">{ yazi }</span>
  //  </div>
  //
  const headerDiv = document.createElement("div");
  const dateSpan = document.createElement("span");
  const baslikH1 = document.createElement("h1");
  const tempSpan = document.createElement("span");

  headerDiv.classList.add("header");
  dateSpan.classList.add("date");
  tempSpan.classList.add("temp");

  dateSpan.textContent = tarih;
  baslikH1.textContent = baslik;
  tempSpan.textContent = yazi;

  headerDiv.appendChild(dateSpan);
  headerDiv.appendChild(baslikH1);
  headerDiv.appendChild(tempSpan);
  // return document.querySelector(".header-container").appendChild(headerDiv);
  return headerDiv;
};

// console.log(Header("baş", 12, "yazilar"));

const headerEkleyici = (secici) => {
  // GÖREV 2
  // ---------------------
  // Tek argümanı olarak bir css seçici alan bu fonksiyonu uygulayın.
  // Görev 1'de tanımladığınız Header bileşenini kullanarak bir header oluşturun (baslik,tarih,yazi parametrelerini kendi isteğinize göre belirleyin)
  // Oluşturulan header'i, verilen seçiciyle eşleşen DOM'daki öğeye eklemelidir.
  //
  // İPUCU: querySelector bir string alabilir (bknz: querySelector("#wrapper"))
  // fakat aynı zamanda bir değişken de alabilir (bknz: querySelector(secici))

  // const headerEkleyici =(secici)= {
  //   const headerItem = Header("başlık", "12.12.2012", "yazilar");
  //   const headerContainer =document.querySelector(secici);
  //   headerContainer.appendChild(headerItem);

  // }
  document.querySelector(secici).append(Header("baş", "12.12.2012", "yazilar"));
};

export { Header, headerEkleyici };
