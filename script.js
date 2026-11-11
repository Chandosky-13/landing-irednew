"use strict";

// Esta versión solo demuestra la interfaz. [COMPLETAR: endpoint]
// Antes de conectar un servicio real, revisar los textos jurídicos y el consentimiento.
// No hay peticiones de red, cookies ni almacenamiento del correo o del modelo.
const form = document.querySelector("#waitlist-form");
const email = document.querySelector("#email");
const consent = document.querySelector("#consent");
const honeypot = document.querySelector("#website");
const technicalError = document.querySelector("#technical-error");
const result = document.querySelector("#form-result");

function showFieldError(field, errorId, invalid) {
  field.setAttribute("aria-invalid", String(invalid));
  document.getElementById(errorId).hidden = !invalid;
}

// Se registra el manejador antes de mostrar el formulario: si el script no carga,
// el navegador no ofrece un formulario que pueda enviar información por accidente.
form.addEventListener("submit", (event) => {
  event.preventDefault();
  technicalError.hidden = true;

  const invalidEmail = !email.validity.valid;
  const invalidConsent = !consent.checked;
  showFieldError(email, "email-error", invalidEmail);
  showFieldError(consent, "consent-error", invalidConsent);

  if (invalidEmail || invalidConsent) {
    (invalidEmail ? email : consent).focus();
    return;
  }

  // Un campo trampa rellenado bloquea la demostración y conserva los valores.
  if (honeypot.value.trim() !== "") {
    technicalError.hidden = false;
    technicalError.focus();
    return;
  }

  form.hidden = true;
  const message = document.createElement("p");
  message.className = "success-title";
  message.tabIndex = -1;
  message.textContent = "¡Gracias! Te has apuntado a la lista de espera de iREDNEW. Te avisaremos cuando tengamos información confirmada sobre el lanzamiento.";
  const note = document.createElement("p");
  note.className = "success-note";
  note.textContent = "[EJEMPLO] Demostración: no se ha guardado ningún dato.";
  result.replaceChildren(message, note);
  // El foco queda en el resultado visible y la región viva anuncia su contenido.
  message.focus();
  form.reset();
});

// Tras un error, se retira el aviso cuando el usuario corrige el campo.
email.addEventListener("input", () => {
  if (email.validity.valid) showFieldError(email, "email-error", false);
});
consent.addEventListener("change", () => {
  if (consent.checked) showFieldError(consent, "consent-error", false);
});

form.hidden = false;
