# Extension Prueba con datos de Aiven

La extension muestra datos de la tabla `usuarios` de tu base MySQL en Aiven.

Flujo:

1. La extension llama a `http://localhost:3000/datos`.
2. La API local consulta Aiven.
3. La API devuelve JSON.
4. El popup de la extension muestra los registros.

## Ejecutar la API

Desde esta carpeta:

```bash
cd extensionPrueba
npm install
npm start
```

El archivo `.env` debe tener:

```env
DB_NAME=TU_NOMBRE_DE_BASE_DE_DATOS
DB_PASSWORD=TU_PASSWORD_DE_AIVEN
DB_HOST=TU_HOST_DE_AIVEN
DB_PORT=TU_PUERTO_DE_AIVEN
DB_USER=TU_USUARIO_DE_AIVEN
PORT=tu_puerto_local_para_la_api
```

La consulta actual es:

```sql
SELECT * FROM usuarios LIMIT 20
```

Para probar:

```text
http://localhost:3000/datos
```

## Usar la extension

1. Abre `chrome://extensions`.
2. Activa modo desarrollador.
3. Carga la carpeta `extensionPrueba`.
4. Abre la extension desde el icono de extensiones.
5. Presiona `Cargar datos`.
