const posts = [
  "posts/post1.jpg", "posts/post2.jpg", "posts/post3.jpg", "posts/post4.jpg",
  "posts/post5.jpg", "posts/post6.jpg", "posts/post7.jpg", "posts/post8.jpg",
  // adicione mais nomes de arquivos aqui quando subir suas fotos
].map(src => ({src: images/${src}, locked: Math.random() > 0.3})); // 70% locked aleatório

posts.forEach(p => {
  const div = document.createElement('div');
  div.className = post ${p.locked ? 'locked' : ''};
  div.innerHTML = `
    <img loading="lazy" src="${p.src}" ${!p.locked ? onclick="openLb('${p.src}')" : ''}>
    ${p.locked ? `
    <div class="overlay">
      <h3>Só pros assinantes 🔥</h3>
      <p>Compra um pack que libero tudo sem censura 💦</p>
      <button class="btn-vip" onclick="openPacks()">Ver Packs</button>
    </div>` : ''}
  `;
  document.getElementById('grid').appendChild(div);
});

function openLb(src) {
  document.getElementById('lb-img').src = src;
  document.getElementById('lightbox').style.display = 'flex';
}
function openWhatsApp() { window.open('https://wa.me/5541988887777', '_blank'); }
function openPacks() { document.getElementById('packsModal').style.display = 'flex'; }
function openMimos() { document.getElementById('mimosModal').style.display = 'flex'; }
function closeModal(id) { document.getElementById(id).style.display = 'none'; }

function showPix(val, desc) {
  document.getElementById('valor').innerText = val;
  document.getElementById('desc').innerText = desc;
  closeModal('packsModal'); closeModal('mimosModal');
  document.getElementById('pixModal').style.display = 'flex';
}

function copyPix() {
  navigator.clipboard.writeText('766623e7-1488-40e0-b191-70eafb963e81');
  alert('Chave copiada! Manda comprovante no WhatsApp 🔥');
}

// Coloque os modais completos no index.html (vou dar abaixo)
