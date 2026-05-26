const form = document.querySelector("#application-form");
const errorMessage = document.querySelector("#form-error");
const successMessage = document.querySelector("#form-success");
const submitFrame = document.querySelector(".submit-frame");
const submitButton = document.querySelector(".form-submit");
const locationField = document.querySelector("[data-location-field]");

let submitted = false;

const setError = (message) => {
  if (!errorMessage) return;
  errorMessage.textContent = message;
};

const track = (eventName, parameters = {}) => {
  if (typeof window.gtag !== "function") return;
  window.gtag("event", eventName, {
    transport_type: "beacon",
    ...parameters
  });
};

const getCheckedInterests = () => [...form.querySelectorAll('input[name="entry.1720834154"]:checked')];

form?.addEventListener("submit", (event) => {
  setError("");

  if (!form.checkValidity()) {
    event.preventDefault();
    form.reportValidity();
    setError("Please complete the required fields before sending.");
    return;
  }

  if (getCheckedInterests().length === 0) {
    event.preventDefault();
    setError("Choose at least one type of work you want to be considered for.");
    return;
  }

  const data = new FormData(form);
  const city = String(data.get("city") || "").trim();
  const country = String(data.get("country") || "").trim();
  const widerOpportunities = String(data.get("wider_opportunities") || "").trim();
  locationField.value = [city, country].filter(Boolean).join(", ");

  const portfolioField = form.querySelector('[name="entry.266439194"]');
  if (portfolioField && widerOpportunities) {
    const portfolioValue = portfolioField.value.trim();
    portfolioField.value = [portfolioValue, `Wider opportunities: ${widerOpportunities}`].filter(Boolean).join(" | ");
  }

  submitted = true;
  form.classList.add("is-submitting");
  submitButton.disabled = true;
  submitButton.textContent = "Sending";

  track("lead_form_submit", {
    form_name: "short_application",
    work_interest_count: getCheckedInterests().length,
    wider_opportunities: widerOpportunities
  });
});

submitFrame?.addEventListener("load", () => {
  if (!submitted) return;

  form.hidden = true;
  successMessage.hidden = false;
  successMessage.focus?.();
});
