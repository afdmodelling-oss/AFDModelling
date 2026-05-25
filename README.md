# AFD Modelling Recruitment Site

This folder contains a static recruitment landing page for AFD Modelling.

## Files

- `index.html` - Site markup and content.
- `styles.css` - Responsive premium visual design.
- `script.js` - CTA wiring, language switching, and reveal interactions.
- `FORM_SPEC.md` - Google Form structure and settings.
- `image 1.jpg` through `image 6.jpg` - Existing visual assets used by the site.

## Form URL

After creating the Google Form from `FORM_SPEC.md`, replace the placeholder in `script.js`:

```js
const AFD_APPLICATION_FORM_URL = "https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform";
```

Until the placeholder is replaced, the apply buttons are visually present but disabled to avoid sending applicants to a broken URL.
