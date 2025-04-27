document.addEventListener('DOMContentLoaded', () => {
  let isDefault = true;

  const container = document.querySelector('.container');

  // Rendiamo il footer "cicciotto" 
  const footer = document.querySelector('.footer');
  footer.style.fontSize = '1.1em';
  footer.style.fontWeight = '700';
  footer.style.padding = '20px 0';

  // Selettore immagine profilo e contatore click
  const profileImg = document.getElementById('profileImg');
  let profileClicks = 0;
  profileImg.style.transition = 'transform 0.2s ease';

  // Gestore clic profilo
  function handleProfileClick() {
    profileClicks++;
    if (profileClicks < 4) {
      // Doppio salto
      function jump() {
        profileImg.style.transform = 'translateY(-10px)';
        setTimeout(() => { profileImg.style.transform = 'translateY(0)'; }, 150);
      }
      jump();
      setTimeout(jump, 200);
    }
    if (profileClicks === 4) {
      // Al quarto click, cambio immagine definitiva e rimuovo listener
      profileImg.src = 'profilod.png';
      profileImg.removeEventListener('click', handleProfileClick);
    }
  }
  profileImg.addEventListener('click', handleProfileClick);

function setDynamicBackground() {
  const h = new Date().getHours();
  document.body.style.backgroundImage = h >= 17
    ? "sfondo/skyboxntt2.jpg"
    : "sfondo/skyboxgrn2.jpg";
}
  setDynamicBackground();

  // Wave animation
  (function () {
    const el = document.getElementById('username');
    const txt = el.textContent;
    el.textContent = '';
    for (let i = 0; i < txt.length; i++) {
      const s = document.createElement('span');
      s.textContent = txt[i];
      s.style.animationDelay = (i * 0.1) + 's';
      el.appendChild(s);
    }
  })();

  // Modal privacy
  const modal = document.getElementById('privacyModal');
  document.getElementById('privacyLink').onclick = () => modal.style.display = 'flex';
  modal.querySelector('.close').onclick = () => modal.style.display = 'none';
  window.addEventListener('click', e => {
    if (e.target === modal) modal.style.display = 'none';
  });

  // Random site per 💞
  const sites = [
    'Cloudyland.html',
    'Buttons_Oasis.html',
    'ComingSoon2.html'
  ];
  const heartLink = document.getElementById('heartLink');
  heartLink.onclick = e => {
    e.preventDefault();
    const randomPage = sites[Math.floor(Math.random() * sites.length)];
    window.location.href = randomPage;
  };

  // Associazione link ai bottoni (stato default)
  const b1 = document.getElementById('btn1');
  const b2 = document.getElementById('btn2');
  const b3 = document.getElementById('btn3');
  const b4 = document.getElementById('btn4');

  function setDefaultLinks() {
    b1.style.display = 'block';
    b1.textContent = '#Caricature';
    b1.onclick = () => window.open('Caricature.html', '_blank');
    b2.textContent = '#CV';
    b2.onclick = () => window.open('Portfolio.html', '_blank');
    b3.textContent = '/*Linkedin';
    b3.onclick = () => window.open('https://www.linkedin.com/in/tuo-profilo', '_blank');
    b4.textContent = '/*Tumblr';
    b4.onclick = () => window.open('https://tuo-username.tumblr.com', '_blank');
    heartLink.style.display = 'inline';

    // Ripristino sfondo dinamico e container visibile
    setDynamicBackground();
    container.style.opacity = '1';
  }
  setDefaultLinks();

  // Toggle Change con transizione
  document.getElementById('changeBtn').onclick = () => {
    container.style.transition = 'opacity 0.5s ease-in-out';
    container.style.opacity = '0';

    setTimeout(() => {
      const img         = document.getElementById('profileImg');
      const eLnk        = document.getElementById('emailLink');
      const line2       = document.querySelector('.line2');
      const titleEl     = document.querySelector('h1.name');
      const subtitle    = document.querySelector('p.subtitle');
      const privacyLink = document.getElementById('privacyLink');
      const modalContent= document.querySelector('.modal-content');
      const modalText   = modalContent.querySelector('p');
      const userEl      = document.getElementById('username');
      const modalTitle  = document.querySelector('.modal-content h2');

      if (isDefault) {
        // Stato HACK
        if (profileClicks < 4) img.src = 'profilo2.png';
        eLnk.href = 'mailto:collettivo.hack@gmail.com';
        titleEl.textContent = 'HACK';
        subtitle.innerHTML = 'Found the Duo<br>| Co-founder of HACK |';
        privacyLink.textContent = 'In collaboration with Adriana Ribalcenco';
        modalContent.style.background = 'rgba(0, 255, 13, 0.873)';
        modalTitle.textContent = 'BIO';
        modalText.innerHTML = `
        <H> è espressione e formula binaria di due unità distinte ma che agiscono 
        sotto un unico nome. Nato nel 2021 dalla collaborazione di Chiara Bertasini 
        e Adriana Ribalcenco, il duo artistico inizia ad interrogarsi sulla condizione 
        odierna dell'essere nativi digitali, dove le strutture di apprendimento 
        riferite all'uso della tecnologia si rivelano innate. HACK sviluppa la propria 
        pratica artistica derubando i fenomeni e i linguaggi dalla società mediale e 
        del sistema computazionale, andando ad architettare un blocco ideologico che si 
        presenta come pixel di una realtà ex novo.`;

        // Sfondo unico per HACK
        document.body.style.transition = 'background-image 0.5s ease-in-out';
        document.body.style.backgroundImage = "sfondo/skybox3.jpg";

        // Nascondo b1 e cuoricino
        b1.style.display = 'none';
        heartLink.style.display = 'none';

        // Nuovi bottoni e link
        b2.textContent = 'PORT_H';
        b2.onclick = () => window.open('Portfolio_H.html', '_blank');
        b3.textContent = '/*Instagram';
        b3.onclick = () => window.open('https://www.instagram.com/tuo_profilo', '_blank');
        b4.textContent = '/*Web_Site';
        b4.onclick = () => window.open('https://www.tuo-sito.com', '_blank');

        // Wave nuovo username
        userEl.textContent = '';
        '@_spacehack_'.split('').forEach((char, i) => {
          const span = document.createElement('span');
          span.textContent = char;
          span.style.animationDelay = `${i * 0.1}s`;
          userEl.appendChild(span);
        });

        line2.style.marginLeft = '-98%';
      } else {
        // Stato default
        if (profileClicks < 4) img.src = 'profilo1.png';
        eLnk.href = 'mailto:chiarabertasini@hotmail.it';
        titleEl.textContent = '©hiara';
        subtitle.innerHTML = 'Media Artist_Net-Art Student…';
        privacyLink.textContent = 'Privacy Policy';
        modalContent.style.background = 'rgba(249, 146, 235, 0.979)';
        modalTitle.textContent = '°.☆°Privacy Policy°☆.';
        modalText.innerHTML = `Non raccogliamo alcun dato personale. Questo sito non utilizza cookie né tracker. Tutte le informazioni restano
        sul tuo dispositivo. <br /> <br /> © 2025 - Tutti i diritti sono riservati. Ti invito a provare a creare la tua personale pagina di
        link se vuoi, buona fortuna :)`;

        setDefaultLinks();

        userEl.textContent = '';
        '@chiara_bertasini'.split('').forEach((char, i) => {
          const span = document.createElement('span');
          span.textContent = char;
          span.style.animationDelay = `${i * 0.1}s`;
          userEl.appendChild(span);
        });

        line2.style.marginLeft = '0';
      }

      // Fade-in
      container.style.opacity = '1';
      isDefault = !isDefault;
    }, 500);
  };
});
