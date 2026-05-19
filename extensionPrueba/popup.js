const mensaje = document.getElementById("mensaje");
const apiUrl = document.getElementById("apiUrl");
const botonCargar = document.getElementById("botonCargar");
const resultado = document.getElementById("resultado");

botonCargar.addEventListener("click", async () => {
  const url = apiUrl.value.trim();

  if (!url) {
    mostrarMensaje("Escribe la URL de tu API.", true);
    return;
  }

  mostrarMensaje("Cargando datos...");
  resultado.innerHTML = "";
  botonCargar.disabled = true;

  try {
    const respuesta = await fetch(url);

    if (!respuesta.ok) {
      throw new Error(`La API respondio con estado ${respuesta.status}`);
    }

    const datos = await respuesta.json();
    pintarDatos(datos);
    mostrarMensaje("Datos cargados correctamente.");
  } catch (error) {
    mostrarMensaje(`No se pudieron cargar los datos: ${error.message}`, true);
  } finally {
    botonCargar.disabled = false;
  }
});

function pintarDatos(datos) {
  const registros = Array.isArray(datos) ? datos : datos.data;

  if (!Array.isArray(registros) || registros.length === 0) {
    resultado.innerHTML = '<p class="estado">No hay registros para mostrar.</p>';
    return;
  }

  const columnas = Object.keys(registros[0]);
  const tabla = document.createElement("table");
  const thead = document.createElement("thead");
  const tbody = document.createElement("tbody");

  thead.innerHTML = `
    <tr>
      ${columnas.map((columna) => `<th>${escaparHtml(columna)}</th>`).join("")}
    </tr>
  `;

  registros.forEach((registro) => {
    const fila = document.createElement("tr");

    fila.innerHTML = columnas
      .map((columna) => `<td>${escaparHtml(String(registro[columna] ?? ""))}</td>`)
      .join("");

    tbody.appendChild(fila);
  });

  tabla.append(thead, tbody);
  resultado.replaceChildren(tabla);
}

function mostrarMensaje(texto, esError = false) {
  mensaje.textContent = texto;
  mensaje.classList.toggle("error", esError);
}

function escaparHtml(texto) {
  return texto
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
