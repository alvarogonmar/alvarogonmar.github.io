function arreglarWeb() {

  // Cambiar logo de Google
  const logoGoogle = document.querySelector('svg[aria-label="Google"]');

  if (logoGoogle) {
    const mensaje = document.createElement('span');

    mensaje.textContent = "[ ALGORITMO EXTRACTIVISTA ]";
    mensaje.style.color = "#ff3333";
    mensaje.style.fontWeight = "bold";
    mensaje.style.fontSize = "20px";

    logoGoogle.replaceWith(mensaje);
  }

  // Cambiar imagen de Pull&Bear
  const img = document.querySelector('img[src*="pullandbear"]');

  if (img) {
    img.src = chrome.runtime.getURL("imagen.png");
  }

  // Banner rojo
  if (!document.getElementById('banner-decolonial')) {

    const banner = document.createElement('div');

    banner.id = 'banner-decolonial';

    banner.textContent = "⚠️ Alerta: Estás en un lugar extractivista.";

    banner.style.cssText = `
      background-color: #ff3333;
      color: white;
      text-align: center;
      padding: 7px;
      font-family: monospace;
      font-size: 12px;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      z-index: 999999;
    `;

    document.body.style.marginTop = "35px";

    document.body.appendChild(banner);
  }
}

window.addEventListener('load', arreglarWeb);