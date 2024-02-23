function showProjects() {
  const projects = [
    {
      image: 'https://www.meram.bel.tr/upload/medya/8_15.jpg',
      text: 'Meram Yaka Sosyal Tesisi'
    },
    {
      image: 'https://www.meram.bel.tr/upload/medya/1_89.jpg',
      text: 'Meram Yeni Proje'
    },
    {
      image: 'https://www.meram.bel.tr/upload/medya/berlika3.jpg',
      text: 'Berlika Trafik Eğitim Parkı'
    },
    {
      image: 'https://www.meram.bel.tr/upload/medya/01-1.jpg',
      text: 'Şükran Mah. Kafeterya ve Çevre Düzenlemesi'
    }
  ];

  const content = document.getElementById('content');
  content.innerHTML = '';

  projects.forEach(project => {
    const projectDiv = document.createElement('div');
    projectDiv.classList.add('project');

    const image = document.createElement('img');
    image.src = project.image;

    const text = document.createElement('p');
    text.textContent = project.text;

    projectDiv.appendChild(image);
    projectDiv.appendChild(text);
    content.appendChild(projectDiv);
  });
}

function showNews() {
  const news = [
    {
      image: 'https://www.meram.bel.tr/upload/medya/6_11.jpeg',
      text: 'MERAM BELEDİYESPOR KICK BOKS RİNGLERİNDE RÜZGAR GİBİ ESTİ Meram Belediyespor, bir ulusal turnuvada daha rüzgar gibi esti. Kulüp sporcuları, 22-29 Ocak 2024 tarihleri arasında Antalya’da gerçekleştirilen Kick Boks Türkiye Şampiyonası’nda 4’ü altın, 3’ü gümüş, 1’i bronz olmak üzere toplamda kazandığı 8 madalya ile bir büyük başarının daha altına imza attı.'
    },
    {
      image: 'https://www.meram.bel.tr/upload/medya/6_206.jpg',
      text: 'MERAM 6 ŞUBAT DEPREMLERİNDE HAYATLARINI KAYBEDENLERİ UNUTMADI Meram, Kahramanmaraş merkezli 6 Şubat Depremlerinde hayatını kaybedenleri dualarla andı. Başkan Mustafa Kavuş’un da katıldığı programın sonunda vatandaşlara Meram Belediyesi tarafından helva ikramında bulunuldu.'
    }
  ];

  const content = document.getElementById('content');
  content.innerHTML = '';

  news.forEach(item => {
    const newsDiv = document.createElement('div');
    newsDiv.classList.add('news');

    const image = document.createElement('img');
    image.src = item.image;

    const text = document.createElement('p');
    text.textContent = item.text;

    newsDiv.appendChild(image);
    newsDiv.appendChild(text);
    content.appendChild(newsDiv);
  });
}

function showEBelediye() {
  const content = document.getElementById('content');
  content.innerHTML = `
    <div class="contact-info">
      <p>Meram Belediyesi Hizmet Binası</p>
      <p>Adres: Yenişehir Mah. Azerbaycan Cad. No: 5 42010 Meram / KONYA</p>
      <p>Telefon: 0332 320 10 00</p>
      <p>Eposta: bizimmeram@meram.bel.tr</p>
      <p>Kep Adresi: merambelediyesi@hs01.kep.tr</p>
      <p>E Tebligat: 35846-96487-38597</p>
      <p>IBAN: TR33 0001 2009 5240 0007 0000 02</p>
    </div>
    <div class="help-request">
      <label for="email">Eposta Adresiniz:</label>
      <input type="email" id="email" name="email">
      <label for="message">Mesajınız:</label>
      <textarea id="message" name="message"></textarea>
      <button onclick="sendMessage()">Gönder</button>
    </div>
  `;
}

function sendMessage() {
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Burada iletişim formunun gönderilmesi işlemleri yapılabilir
}

