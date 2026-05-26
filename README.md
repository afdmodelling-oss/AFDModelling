# AFD Modelling Recruitment Site

This folder contains a static recruitment landing page and short application form for AFD Modelling.

## Files

- `index.html` - Homepage application form.
- `about/index.html` - Previous editorial homepage/about page.
- `styles.css` - Responsive premium visual design.
- `script.js` - About-page CTA wiring, language switching, and reveal interactions.
- `apply/apply.js` - Application form behavior, translations, analytics, and work-option toggles.
- `FORM_SPEC.md` - Google Form structure and settings.
- `image 1.jpg` through `image 6.jpg` - Existing visual assets used by the site.

## Form URL

The about page routes application CTAs to the homepage form with:

```js
const AFD_APPLICATION_FORM_URL = "/";
```

## Application Toggles

The application form has an optional work-category toggle in `apply/apply.js`:

```js
const SHOW_EXPLICIT_ADULT_CONTENT_OPTION = false;
```

Keep it `false` for ad campaign landing pages. Set it to `true` and deploy when that option should be visible on the public form.
