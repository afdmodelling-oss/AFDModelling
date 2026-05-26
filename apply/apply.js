const form = document.querySelector("#application-form");
const errorMessage = document.querySelector("#form-error");
const successMessage = document.querySelector("#form-success");
const submitFrame = document.querySelector(".submit-frame");
const submitButton = document.querySelector(".form-submit");
const locationField = document.querySelector("[data-location-field]");
const languageSelect = document.querySelector("#language-select");

const languageCodes = {
  en: "en",
  th: "th",
  tl: "fil",
  km: "km",
  es: "es",
  ru: "ru"
};

const languageAliases = {
  en: "en",
  th: "th",
  tl: "tl",
  fil: "tl",
  km: "km",
  es: "es",
  ru: "ru"
};

const translations = {
  en: {
    metaTitle: "Start Your Application | AFD Modelling",
    metaDescription: "Start a short private application for the AFD Modelling roster. Takes about 60 seconds.",
    skip: "Skip to form",
    ariaApplicationNav: "Application navigation",
    ariaHome: "AFD Modelling home",
    languageLabel: "Language",
    languageAria: "Select language",
    backToSite: "Back to site",
    introKicker: "First step",
    introTitle: "Start your application.",
    formAria: "Application form",
    nameLabel: "Name *",
    contactLabel: "WhatsApp or Line *",
    cityLabel: "City *",
    countryLabel: "Country *",
    socialLabel: "Instagram, TikTok, or portfolio *",
    socialPlaceholder: "@username or link",
    workLegend: "What work do you want to be considered for? *",
    workFashion: "Fashion",
    workEditorial: "Editorial",
    workSocial: "Social content",
    workSwimwear: "Swimwear",
    workAdult: "Explicit adult content",
    comfortLegend: "Comfort on camera *",
    yes: "Yes",
    no: "No",
    maybe: "Maybe",
    travelLabel: "Can you travel for shoots?",
    consentLabel: "I confirm I am 18 or older and AFD may contact me about roster review.",
    submitButton: "Send first application",
    submitting: "Sending",
    formIncomplete: "Please complete the required fields before sending.",
    interestRequired: "Choose at least one type of work you want to be considered for.",
    successKicker: "Application sent",
    successTitle: "We have your first details.",
    successText: "If your look fits the roster, AFD will contact you privately for the next step.",
    returnToSite: "Return to site",
    submitFrameTitle: "Application submission"
  },
  th: {
    metaTitle: "เริ่มสมัคร | AFD Modelling",
    metaDescription: "เริ่มใบสมัครส่วนตัวแบบสั้นสำหรับรอสเตอร์ AFD Modelling ใช้เวลาประมาณ 60 วินาที",
    skip: "ข้ามไปที่ฟอร์ม",
    ariaApplicationNav: "เมนูสำหรับการสมัคร",
    ariaHome: "หน้าแรก AFD Modelling",
    languageLabel: "ภาษา",
    languageAria: "เลือกภาษา",
    backToSite: "กลับไปที่เว็บไซต์",
    introKicker: "ขั้นแรก",
    introTitle: "เริ่มใบสมัครของคุณ",
    formAria: "ฟอร์มสมัคร",
    nameLabel: "ชื่อ *",
    contactLabel: "WhatsApp หรือ Line *",
    cityLabel: "เมือง *",
    countryLabel: "ประเทศ *",
    socialLabel: "Instagram, TikTok หรือพอร์ตโฟลิโอ *",
    socialPlaceholder: "@ชื่อผู้ใช้ หรือลิงก์",
    workLegend: "คุณต้องการได้รับการพิจารณาสำหรับงานแบบใด? *",
    workFashion: "แฟชั่น",
    workEditorial: "เอดิทอเรียล",
    workSocial: "คอนเทนต์โซเชียล",
    workSwimwear: "ชุดว่ายน้ำ",
    workAdult: "คอนเทนต์ผู้ใหญ่แบบชัดเจน",
    comfortLegend: "ความมั่นใจหน้ากล้อง *",
    yes: "ใช่",
    no: "ไม่",
    maybe: "อาจจะ",
    travelLabel: "คุณเดินทางไปถ่ายงานได้ไหม?",
    consentLabel: "ฉันยืนยันว่าฉันอายุ 18 ปีขึ้นไป และ AFD สามารถติดต่อฉันเกี่ยวกับการพิจารณารอสเตอร์ได้",
    submitButton: "ส่งใบสมัครขั้นแรก",
    submitting: "กำลังส่ง",
    formIncomplete: "กรุณากรอกช่องที่จำเป็นให้ครบก่อนส่ง",
    interestRequired: "เลือกประเภทงานอย่างน้อยหนึ่งประเภทที่คุณต้องการได้รับการพิจารณา",
    successKicker: "ส่งใบสมัครแล้ว",
    successTitle: "เราได้รับข้อมูลขั้นแรกของคุณแล้ว",
    successText: "ถ้าลุคของคุณเหมาะกับรอสเตอร์ AFD จะติดต่อคุณแบบส่วนตัวสำหรับขั้นตอนถัดไป",
    returnToSite: "กลับไปที่เว็บไซต์",
    submitFrameTitle: "การส่งใบสมัคร"
  },
  tl: {
    metaTitle: "Start Your Application | AFD Modelling",
    metaDescription: "Simulan ang maikling private application para sa AFD Modelling roster. Mga 60 segundo lang.",
    skip: "Lumaktaw sa form",
    ariaApplicationNav: "Application navigation",
    ariaHome: "AFD Modelling home",
    languageLabel: "Wika",
    languageAria: "Pumili ng wika",
    backToSite: "Balik sa site",
    introKicker: "First step",
    introTitle: "Simulan ang application mo.",
    formAria: "Application form",
    nameLabel: "Pangalan *",
    contactLabel: "WhatsApp o Line *",
    cityLabel: "City *",
    countryLabel: "Country *",
    socialLabel: "Instagram, TikTok, o portfolio *",
    socialPlaceholder: "@username o link",
    workLegend: "Anong work ang gusto mong ma-consider? *",
    workFashion: "Fashion",
    workEditorial: "Editorial",
    workSocial: "Social content",
    workSwimwear: "Swimwear",
    workAdult: "Explicit adult content",
    comfortLegend: "Comfort sa camera *",
    yes: "Oo",
    no: "Hindi",
    maybe: "Maybe",
    travelLabel: "Puwede ka bang bumiyahe para sa shoots?",
    consentLabel: "Kinukumpirma kong 18 o mas matanda ako at maaaring kontakin ako ng AFD tungkol sa roster review.",
    submitButton: "Send first application",
    submitting: "Sending",
    formIncomplete: "Pakikumpleto ang required fields bago ipadala.",
    interestRequired: "Pumili ng kahit isang uri ng work na gusto mong ma-consider.",
    successKicker: "Application sent",
    successTitle: "Nakuha na namin ang first details mo.",
    successText: "Kung fit ang look mo sa roster, kokontakin ka ng AFD privately para sa next step.",
    returnToSite: "Balik sa site",
    submitFrameTitle: "Application submission"
  },
  km: {
    metaTitle: "ចាប់ផ្តើមដាក់ពាក្យ | AFD Modelling",
    metaDescription: "ចាប់ផ្តើមពាក្យស្នើសុំឯកជនខ្លីសម្រាប់រូស្ទ័រ AFD Modelling ប្រហែល 60 វិនាទី។",
    skip: "រំលងទៅកាន់សំណុំបែបបទ",
    ariaApplicationNav: "របាររុករកសម្រាប់ការដាក់ពាក្យ",
    ariaHome: "ទំព័រដើម AFD Modelling",
    languageLabel: "ភាសា",
    languageAria: "ជ្រើសរើសភាសា",
    backToSite: "ត្រឡប់ទៅគេហទំព័រ",
    introKicker: "ជំហានដំបូង",
    introTitle: "ចាប់ផ្តើមពាក្យសុំរបស់អ្នក។",
    formAria: "សំណុំបែបបទដាក់ពាក្យ",
    nameLabel: "ឈ្មោះ *",
    contactLabel: "WhatsApp ឬ Line *",
    cityLabel: "ទីក្រុង *",
    countryLabel: "ប្រទេស *",
    socialLabel: "Instagram, TikTok ឬ portfolio *",
    socialPlaceholder: "@ឈ្មោះអ្នកប្រើ ឬតំណ",
    workLegend: "តើអ្នកចង់ឱ្យយើងពិចារណាសម្រាប់ការងារប្រភេទណា? *",
    workFashion: "Fashion",
    workEditorial: "Editorial",
    workSocial: "មាតិកាសង្គម",
    workSwimwear: "Swimwear",
    workAdult: "មាតិកាមនុស្សពេញវ័យជាក់លាក់",
    comfortLegend: "ភាពស្រួលនៅមុខកាមេរ៉ា *",
    yes: "បាទ/ចាស",
    no: "ទេ",
    maybe: "ប្រហែល",
    travelLabel: "តើអ្នកអាចធ្វើដំណើរសម្រាប់ការថតបានទេ?",
    consentLabel: "ខ្ញុំបញ្ជាក់ថាខ្ញុំមានអាយុ 18 ឆ្នាំឡើងទៅ ហើយ AFD អាចទាក់ទងខ្ញុំអំពីការពិនិត្យរូស្ទ័រ។",
    submitButton: "ផ្ញើពាក្យដំបូង",
    submitting: "កំពុងផ្ញើ",
    formIncomplete: "សូមបំពេញចន្លោះដែលត្រូវការមុនពេលផ្ញើ។",
    interestRequired: "សូមជ្រើសរើសយ៉ាងហោចណាស់មួយប្រភេទការងារដែលអ្នកចង់ឱ្យពិចារណា។",
    successKicker: "បានផ្ញើពាក្យសុំ",
    successTitle: "យើងបានទទួលព័ត៌មានដំបូងរបស់អ្នក។",
    successText: "ប្រសិនបើរូបរាងរបស់អ្នកសាកសមនឹងរូស្ទ័រ AFD នឹងទាក់ទងអ្នកដោយឯកជនសម្រាប់ជំហានបន្ទាប់។",
    returnToSite: "ត្រឡប់ទៅគេហទំព័រ",
    submitFrameTitle: "ការផ្ញើពាក្យសុំ"
  },
  es: {
    metaTitle: "Empieza Tu Aplicación | AFD Modelling",
    metaDescription: "Empieza una aplicación privada y corta para el roster de AFD Modelling. Toma unos 60 segundos.",
    skip: "Saltar al formulario",
    ariaApplicationNav: "Navegación de aplicación",
    ariaHome: "Inicio de AFD Modelling",
    languageLabel: "Idioma",
    languageAria: "Seleccionar idioma",
    backToSite: "Volver al sitio",
    introKicker: "Primer paso",
    introTitle: "Empieza tu aplicación.",
    formAria: "Formulario de aplicación",
    nameLabel: "Nombre *",
    contactLabel: "WhatsApp o Line *",
    cityLabel: "Ciudad *",
    countryLabel: "País *",
    socialLabel: "Instagram, TikTok o portafolio *",
    socialPlaceholder: "@usuario o enlace",
    workLegend: "¿Para qué tipo de trabajo quieres ser considerada? *",
    workFashion: "Moda",
    workEditorial: "Editorial",
    workSocial: "Contenido social",
    workSwimwear: "Traje de baño",
    workAdult: "Contenido adulto explícito",
    comfortLegend: "Comodidad frente a cámara *",
    yes: "Sí",
    no: "No",
    maybe: "Tal vez",
    travelLabel: "¿Puedes viajar para sesiones?",
    consentLabel: "Confirmo que tengo 18 años o más y que AFD puede contactarme sobre la revisión del roster.",
    submitButton: "Enviar primera aplicación",
    submitting: "Enviando",
    formIncomplete: "Completa los campos obligatorios antes de enviar.",
    interestRequired: "Elige al menos un tipo de trabajo para el que quieras ser considerada.",
    successKicker: "Aplicación enviada",
    successTitle: "Ya tenemos tus primeros datos.",
    successText: "Si tu look encaja con el roster, AFD te contactará en privado para el siguiente paso.",
    returnToSite: "Volver al sitio",
    submitFrameTitle: "Envío de aplicación"
  },
  ru: {
    metaTitle: "Начать Заявку | AFD Modelling",
    metaDescription: "Начните короткую частную заявку для ростера AFD Modelling. Это займет около 60 секунд.",
    skip: "Перейти к форме",
    ariaApplicationNav: "Навигация заявки",
    ariaHome: "Главная AFD Modelling",
    languageLabel: "Язык",
    languageAria: "Выбрать язык",
    backToSite: "Назад на сайт",
    introKicker: "Первый шаг",
    introTitle: "Начните заявку.",
    formAria: "Форма заявки",
    nameLabel: "Имя *",
    contactLabel: "WhatsApp или Line *",
    cityLabel: "Город *",
    countryLabel: "Страна *",
    socialLabel: "Instagram, TikTok или портфолио *",
    socialPlaceholder: "@username или ссылка",
    workLegend: "Для какой работы вы хотите быть рассмотрены? *",
    workFashion: "Fashion",
    workEditorial: "Editorial",
    workSocial: "Социальный контент",
    workSwimwear: "Swimwear",
    workAdult: "Явный контент для взрослых",
    comfortLegend: "Уверенность перед камерой *",
    yes: "Да",
    no: "Нет",
    maybe: "Возможно",
    travelLabel: "Вы можете выезжать на съемки?",
    consentLabel: "Я подтверждаю, что мне 18 лет или больше, и AFD может связаться со мной по поводу рассмотрения в ростер.",
    submitButton: "Отправить первую заявку",
    submitting: "Отправка",
    formIncomplete: "Пожалуйста, заполните обязательные поля перед отправкой.",
    interestRequired: "Выберите хотя бы один тип работы для рассмотрения.",
    successKicker: "Заявка отправлена",
    successTitle: "Мы получили ваши первые данные.",
    successText: "Если ваш образ подходит ростеру, AFD свяжется с вами лично для следующего шага.",
    returnToSite: "Назад на сайт",
    submitFrameTitle: "Отправка заявки"
  }
};

let submitted = false;
let currentLanguage = "en";

const getDictionary = () => translations[currentLanguage] || translations.en;

const resolveLanguage = (language) => {
  const normalized = String(language || "").trim().toLowerCase().replace("_", "-");
  if (!normalized) return null;
  if (translations[normalized]) return normalized;

  const primary = normalized.split("-")[0];
  return languageAliases[primary] || null;
};

const getStoredLanguage = () => {
  try {
    return resolveLanguage(window.localStorage.getItem("afd-language"));
  } catch {
    return null;
  }
};

const getBrowserLanguage = () => {
  const candidates = [...(navigator.languages || []), navigator.language, navigator.userLanguage];

  for (const candidate of candidates) {
    const language = resolveLanguage(candidate);
    if (language) return language;
  }

  return "en";
};

const getInitialLanguage = () => getStoredLanguage() || getBrowserLanguage();

const persistLanguage = (language) => {
  try {
    window.localStorage.setItem("afd-language", language);
  } catch {
    // Some browser privacy modes block storage. The form should still translate.
  }
};

const translate = (key) => getDictionary()[key] || translations.en[key] || "";

const setError = (key) => {
  if (!errorMessage) return;
  errorMessage.dataset.errorKey = key || "";
  errorMessage.textContent = key ? translate(key) : "";
};

const setLanguage = (language, options = {}) => {
  currentLanguage = resolveLanguage(language) || "en";
  const dictionary = getDictionary();

  document.documentElement.lang = languageCodes[currentLanguage] || "en";
  document.title = dictionary.metaTitle;

  const description = document.querySelector('meta[name="description"]');
  const ogTitle = document.querySelector('meta[property="og:title"]');
  const ogDescription = document.querySelector('meta[property="og:description"]');

  if (description) description.content = dictionary.metaDescription;
  if (ogTitle) ogTitle.content = dictionary.metaTitle;
  if (ogDescription) ogDescription.content = dictionary.metaDescription;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (dictionary[key]) element.textContent = dictionary[key];
  });

  document.querySelectorAll("[data-i18n-attr]").forEach((element) => {
    element.dataset.i18nAttr.split(",").forEach((pair) => {
      const [attribute, key] = pair.split(":").map((part) => part.trim());
      if (attribute && key && dictionary[key]) {
        element.setAttribute(attribute, dictionary[key]);
      }
    });
  });

  if (languageSelect) languageSelect.value = currentLanguage;
  if (submitButton && form && form.classList.contains("is-submitting")) {
    submitButton.textContent = dictionary.submitting;
  }
  if (errorMessage?.dataset.errorKey) setError(errorMessage.dataset.errorKey);

  if (options.persist) persistLanguage(currentLanguage);
};

const track = (eventName, parameters = {}) => {
  if (typeof window.gtag !== "function") return;
  window.gtag("event", eventName, {
    transport_type: "beacon",
    ...parameters
  });
};

const getCheckedInterests = () => [...form.querySelectorAll('input[name="entry.1720834154"]:checked')];

languageSelect?.addEventListener("change", (event) => setLanguage(event.target.value, { persist: true }));
setLanguage(getInitialLanguage());

form?.addEventListener("submit", (event) => {
  setError("");

  if (!form.checkValidity()) {
    event.preventDefault();
    form.reportValidity();
    setError("formIncomplete");
    return;
  }

  if (getCheckedInterests().length === 0) {
    event.preventDefault();
    setError("interestRequired");
    return;
  }

  const data = new FormData(form);
  const city = String(data.get("city") || "").trim();
  const country = String(data.get("country") || "").trim();
  locationField.value = [city, country].filter(Boolean).join(", ");
  const adultContentSelected = getCheckedInterests().some((input) => input.value === "Explicit adult content");

  submitted = true;
  form.classList.add("is-submitting");
  submitButton.disabled = true;
  submitButton.textContent = translate("submitting");

  track("lead_form_submit", {
    form_name: "short_application",
    work_interest_count: getCheckedInterests().length,
    adult_content_selected: adultContentSelected
  });
});

submitFrame?.addEventListener("load", () => {
  if (!submitted) return;

  form.hidden = true;
  successMessage.hidden = false;
  successMessage.focus?.();
});
