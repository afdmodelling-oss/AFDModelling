# AFD Modelling - Model Application Form

Use this document to create the Google Form once signed in to the owning Google account. After publishing the form, copy the responder URL into `AFD_APPLICATION_FORM_URL` in `script.js`.

## Form Settings

- Title: `AFD Modelling - Model Application`
- Description: `Private application for verified adult applicants seeking consideration by AFD Modelling. Please answer accurately and upload clear current images.`
- Collect email addresses: On
- Limit to 1 response: Optional
- Connect responses to a Google Sheet named `AFD Modelling - Model Application Responses`
- File upload note: Google Forms requires respondents to sign in to a Google Account for file upload questions.

## Section 1: Eligibility

1. Email address
   - Type: Email
   - Required: Yes
2. Legal name
   - Type: Short answer
   - Required: Yes
3. Preferred name
   - Type: Short answer
   - Required: No
4. Date of birth
   - Type: Date
   - Required: Yes
5. I confirm I am 18 years of age or older.
   - Type: Multiple choice
   - Options: `Yes`, `No`
   - Required: Yes
   - Branching: `Yes` continues to Section 2. `No` goes to the ineligible end section.

## Section 2: Contact and Profile

1. Phone number
   - Type: Short answer
   - Required: Yes
2. City, state, and country
   - Type: Short answer
   - Required: Yes
3. Instagram, TikTok, or other social links
   - Type: Paragraph
   - Required: No
4. Portfolio or website link
   - Type: Short answer
   - Required: No
5. Are you currently represented by another agency?
   - Type: Multiple choice
   - Options: `Yes`, `No`
   - Required: Yes
6. If represented, list agency name and any exclusivity terms.
   - Type: Paragraph
   - Required: No

## Section 3: Model Details

1. Height
   - Type: Short answer
   - Required: Yes
2. Measurements
   - Type: Short answer
   - Required: No
3. Shoe size
   - Type: Short answer
   - Required: No
4. Hair color
   - Type: Short answer
   - Required: No
5. Eye color
   - Type: Short answer
   - Required: No
6. Tattoos, piercings, or notable distinguishing features
   - Type: Paragraph
   - Required: No
7. Modelling or performance experience
   - Type: Paragraph
   - Required: No
8. Availability and travel options
   - Type: Paragraph
   - Required: Yes

## Section 4: Uploads

1. Government ID picture for age verification
   - Type: File upload
   - Required: Yes
   - File types: Image
   - Max files: 1
   - Max file size: 10 MB
   - Prompt: `Upload a clear picture of your driver's license or government ID. You may cover your ID number and address if your name, photo, and birth date remain visible.`
2. Current headshots
   - Type: File upload
   - Required: Yes
   - File types: Image
   - Max files: 5
   - Max file size: 10 MB
   - Prompt: `Upload clear, recent headshots with minimal filters or heavy editing.`
3. Full-body digitals
   - Type: File upload
   - Required: No
   - File types: Image
   - Max files: 5
   - Max file size: 10 MB
   - Prompt: `Optional: upload current full-body digitals or simple casting images.`

## Section 5: Booking Goals

1. What types of modelling work do you want AFD to consider you for?
   - Type: Paragraph
   - Required: Yes
2. Anything else you want AFD to know before contacting you?
   - Type: Paragraph
   - Required: No

## Section 6: Consent

1. Consent and accuracy acknowledgement
   - Type: Checkboxes
   - Required: Yes
   - Option: `I confirm that I am 18 or older, the information I submitted is accurate, and AFD Modelling may review my uploads for application and age-verification purposes.`
2. Privacy acknowledgement
   - Type: Checkboxes
   - Required: Yes
   - Option: `I understand that my ID is requested for age verification and that my application materials should be treated as confidential by AFD Modelling.`

## Ineligible End Section

Title: `AFD Modelling applications are 18+ only`

Description: `Thank you for your interest. AFD Modelling only accepts applications from people who are 18 years of age or older. Please do not submit this form.`
