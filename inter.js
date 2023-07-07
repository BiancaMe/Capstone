function dynamicInter() {
  const inter1 = {
    img1: 'css/img/pngwing.com.png',
    img2: 'css/img/perfil-1.jpg',
    img3: 'css/img/band-1-1.jpg',
    name: 'Anthony Kiedis',
    band: 'Red Hot Chili Peppers',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium culpa iusto nobis, soluta vero harum, dolor voluptates obcaecati non blanditiis odio',
  };
  const inter2 = {
    img1: 'css/img/pngwing.com.png',
    img2: 'css/img/perfil-2.jpg',
    img3: 'css/img/band-2-2.jpg',
    name: 'Clemens Rehbein',
    band: 'Milky Chance',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium culpa iusto nobis, soluta vero harum, dolor voluptates obcaecati non blanditiis odio',
  };

  const inter3 = {
    img1: 'css/img/pngwing.com.png',
    img2: 'css/img/perfil-3.jpg',
    img3: 'css/img/band4-4.jpg',
    name: 'JonBon Jovi',
    band: 'Bon Jovi',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium culpa iusto nobis, soluta vero harum, dolor voluptates obcaecati non blanditiis odio',
  };

  const inter4 = {
    img1: 'css/img/pngwing.com.png',
    img2: 'css/img/perfil-4.jpg',
    img3: 'css/img/band-3-3.jpg',
    name: 'Roberto Musso',
    band: 'Cuarteto de Nos',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium culpa iusto nobis, soluta vero harum, dolor voluptates obcaecati non blanditiis odio',
  };

  const interInfo = {
    inter1, inter2, inter3, inter4,
  };

  const inter = document.createElement('div');
  inter.setAttribute('id', 'interviwes');

  // h2
  const h2 = document.createElement('h2');
  h2.setAttribute('id', 'bands-h');
  const text1 = document.createTextNode('Interviews');
  h2.appendChild(text1);
  inter.appendChild(h2);

  // hr
  const hr = document.createElement('hr');
  hr.setAttribute('class', 'hr orange');
  inter.appendChild(hr);

  // div id=bands-c
  const divBand = document.createElement('div');
  divBand.setAttribute('id', 'bands-c');
  inter.appendChild(divBand);

  // ul id=band-grid
  const ulBand = document.createElement('ul');
  ulBand.setAttribute('id', 'band-grid');
  divBand.appendChild(ulBand);

  Object.values(interInfo).forEach((v) => {
    // li class=band-item
    const liBand = document.createElement('li');
    liBand.setAttribute('class', 'band-item');
    ulBand.appendChild(liBand);

    // div id=bg-perfil
    const divPerfil = document.createElement('div');
    divPerfil.setAttribute('class', 'bg-perfil');
    // images
    const img1 = document.createElement('img');
    img1.setAttribute('class', 'bg-perfil');
    img1.setAttribute('alt', '');

    img1.setAttribute('src', v.img1);
    divPerfil.appendChild(img1);

    const img2 = document.createElement('img');
    img2.setAttribute('class', 'perfil');
    img2.setAttribute('alt', 'image singer');
    img2.setAttribute('src', v.img2);
    divPerfil.appendChild(img2);

    const img3 = document.createElement('img');
    img3.setAttribute('class', 'hidden');
    img3.setAttribute('alt', '');
    img3.setAttribute('src', v.img3);
    divPerfil.appendChild(img3);

    // div class = content
    const divContent = document.createElement('div');
    divContent.setAttribute('class', 'content');
    liBand.append(divPerfil, divContent);

    // h3 class name
    const h3 = document.createElement('h3');
    h3.setAttribute('class', 'name');
    const text2 = document.createTextNode(v.name);
    h3.appendChild(text2);
    divContent.appendChild(h3);

    // p class = band-group
    const p1 = document.createElement('p');
    p1.setAttribute('class', 'band-group');
    const text3 = document.createTextNode(v.band);
    p1.appendChild(text3);
    divContent.appendChild(p1);

    // hr
    const hr2 = document.createElement('hr');
    hr2.setAttribute('class', 'hr');
    divContent.appendChild(hr2);

    // p class = i-text
    const p2 = document.createElement('p');
    p2.setAttribute('class', 'i-text');
    const text4 = document.createTextNode(v.text);
    p2.appendChild(text4);
    divContent.appendChild(p2);
  });

  // Partner
  const partner = document.createElement('div');
  partner.setAttribute('class', 'partner');

  // h2
  const partH = document.createElement('h2');
  partH.setAttribute('class', 'part-h');
  const text5 = document.createTextNode('Partner');
  partH.appendChild(text5);
  partner.appendChild(partH);
  // hr
  const hr3 = document.createElement('hr');
  hr3.setAttribute('class', 'hr');
  partner.appendChild(hr3);
  // div class = sponsor
  const sponsor = document.createElement('div');
  sponsor.setAttribute('class', 'sponsor');
  partner.appendChild(sponsor);

  // a mozilla
  const as1 = document.createElement('a');
  as1.setAttribute('class', 'mozilla');
  const types = document.createTextNode('Mozilla');
  as1.appendChild(types);
  sponsor.appendChild(as1);
  // a google
  const as2 = document.createElement('a');
  as2.setAttribute('class', 'google');
  const types2 = document.createTextNode('Google');
  as2.appendChild(types2);
  sponsor.appendChild(as2);
  // a spotify
  const as3 = document.createElement('a');
  as3.setAttribute('class', 'spotify');
  const types3 = document.createTextNode('Spotify');
  as3.appendChild(types3);
  sponsor.appendChild(as3);
  // a youtuve
  const as4 = document.createElement('a');
  as4.setAttribute('class', 'youtuve');
  const types4 = document.createTextNode('Youtube');
  as4.appendChild(types4);
  sponsor.appendChild(as4);
  // Wihite end
  const white = document.createElement('div');
  white.setAttribute('class', 'white-end');

  // div class=  org-info white-end
  const whiteDiv = document.createElement('div');
  whiteDiv.setAttribute('class', 'organization white-end');
  const whiteDiv2 = document.createElement('div');
  whiteDiv2.setAttribute('class', 'org-info white-end ');
  white.append(whiteDiv, whiteDiv2);

  const aw = document.createElement('a');
  const textw1 = document.createTextNode('Yesterland');
  aw.appendChild(textw1);
  whiteDiv.appendChild(aw);

  const aw2 = document.createElement('p');
  const textw2 = document.createTextNode(' ©Yesterland Inc. Rights Reserved');
  aw2.appendChild(textw2);
  whiteDiv2.appendChild(aw2);
  const section = document.querySelector('#interviwes-section');
  section.append(inter, partner, white);
}

window.addEventListener('load', dynamicInter);