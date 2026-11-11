# iREDNEW · Landing de práctica

Página de lista de espera con HTML, CSS y JavaScript simples. No requiere instalaciones, compilación ni cuentas. La inscripción es una simulación: no envía ni guarda datos y no genera avisos reales de lanzamiento.

## Abrir en el navegador

1. Abre esta carpeta y haz doble clic en `index.html`, o arrástralo al navegador.
2. Si ya tienes la extensión **Live Server** en VS Code, abre la carpeta, haz clic derecho sobre `index.html` y elige **Open with Live Server**. Los cambios se verán al guardar.
3. Alternativa si ya tienes Python 3: desde una terminal situada en esta carpeta ejecuta `python3 -m http.server 8000 --bind 127.0.0.1`, visita `http://127.0.0.1:8000` y termina el servidor con `Ctrl+C`.

No hace falta instalar Live Server ni Python para usar la primera opción. Recarga la página tras guardar cambios si la abres directamente.

## Qué hace cada archivo

| Archivo | Función |
| --- | --- |
| `index.html` | Estructura y textos de las nueve secciones, formulario y preguntas desplegables nativas. |
| `styles.css` | Colores, fuentes del sistema, ilustración del teléfono, diseño móvil y escritorio y estilos accesibles. |
| `script.js` | Intercepta el envío, valida correo y consentimiento y muestra la simulación o los errores. |
| `privacidad.html` | Política orientativa marcada como ejemplo. |
| `aviso-legal.html` | Aviso legal orientativo marcado como ejemplo. |
| `assets/logo.png` | Logo original; se muestra respetando sus proporciones. |

Los colores se cambian en las variables de `:root` al principio de `styles.css`. No se cargan fuentes ni recursos externos. El comentario de las fuentes explica cómo añadir archivos locales más adelante.

## Cómo funciona el formulario

JavaScript usa `preventDefault()` para impedir el envío. Comprueba el correo con la validación del navegador y exige el consentimiento, pero presenta errores propios junto a los campos, sin ventanas emergentes. El foco pasa al primer error y los valores se conservan. El modelo es opcional.

El campo antispam se oculta visualmente y queda fuera del recorrido de teclado. Si contiene texto, aparece el error técnico y se conservan los valores. Es una demostración, no una protección de servidor.

Al completar los campos correctamente, se oculta el formulario, se muestra el mensaje de éxito con la nota de demostración y se vacían sus campos. El resultado se anuncia mediante una región viva y recibe el foco. Recarga para volver a probar. Si JavaScript está desactivado, se muestra una explicación y el formulario permanece oculto. Los campos no tienen atributos `name`, como defensa adicional frente a una serialización accidental.

No hay `fetch`, solicitudes de envío, cookies, analítica, almacenamiento local ni base de datos. El texto `[COMPLETAR: endpoint]` es solo un comentario para una futura integración; no es una dirección activa.

## Revisión manual

Se comprobaron la sintaxis de JavaScript, los enlaces e identificadores HTML, la transparencia del logo y la lógica del formulario mediante una prueba aislada. El navegador de pruebas no estuvo disponible en esta sesión: quedan pendientes las comprobaciones visuales, de teclado y con lector de pantalla siguientes.

- Comprueba la página a 320, 390, 768 y 1440 píxeles de ancho: sin desplazamiento horizontal, con textos legibles. En móvil solo aparecen el logo y el botón en la cabecera.
- Usa Tab y Mayús+Tab: comprueba el salto al contenido, foco visible, anclas, enlaces legales y controles. Abre las preguntas con Enter o Espacio.
- Envía vacío: debe aparecer el error de correo y el de consentimiento, con foco en el correo.
- Prueba un correo mal formado; luego uno válido sin consentimiento. El foco debe señalar el error pendiente y los valores deben mantenerse.
- Envía un correo ficticio válido, sin seleccionar modelo y aceptando el consentimiento: debe aparecer el éxito y la nota de que no se guardaron datos.
- Repite el envío con un modelo seleccionado. Ninguna opción implica disponibilidad real.
- Para probar el honeypot, usa las herramientas del navegador para asignar texto al campo `website`; al enviar datos válidos debe mostrarse el error técnico, sin ocultar el formulario.
- En las herramientas del navegador, revisa Red al enviar: no debe producirse ninguna solicitud. En Almacenamiento no deben crearse cookies ni entradas de almacenamiento de la página.
- Prueba un lector de pantalla: etiquetas, errores asociados y resultado anunciado. Desactiva JavaScript y recarga para comprobar el aviso alternativo.
- Abre privacidad y aviso legal y vuelve a la landing. Revisa las marcas `[EJEMPLO]` y que el logo se vea sobre blanco sin un fondo negro.

Usa datos ficticios, por ejemplo `prueba@example.com`. No guardes datos personales en archivos o capturas del repositorio.

## Mejoras posteriores

Antes de captar personas reales: decidir un servicio de almacenamiento, revisar la identidad del responsable y los documentos jurídicos, implementar validación y protección antispam en el servidor, y definir bajas y conservación. Las comunicaciones promocionales distintas del aviso de lanzamiento necesitarían una autorización opcional separada.

Revisar modelos, proveedores y condiciones antes de presentarlos como confirmados. Las fuentes propuestas se podrían alojar localmente. También conviene realizar pruebas con usuarios y lectores de pantalla.

No se ha inicializado Git, creado commits ni publicado la página. Estos pasos quedan para una decisión posterior.
