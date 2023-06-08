# 🍋 Little Lemon

Hello 👋 Welcome to my capstone project for [course 8](https://www.coursera.org/learn/meta-front-end-developer-capstone?specialization=meta-front-end-developer) of Coursera's (9-course) [Meta Front-End Developer Professional Certificate](https://www.coursera.org/professional-certificates/meta-front-end-developer).

This is a (hypothetical) web app for the Little Lemon restaurant built using React. The app's crowning feature is--*🎶 cue the marching band 🥁🎵*--a form for handling table bookings 👏 (OK, I'll admit it's no [Resy](https://resy.com/resyos/) but, hey, if it looks like a form, clicks like a form, and clacks like a form, it's...A FORM! 💃🎉 Client-side validation, FTW.)

This capstone project is a culmination of all the web development skills covered in the first seven courses of the professional certificate:

  1. 💻 [Introduction to Front-End Development](https://www.coursera.org/learn/introduction-to-front-end-development?specialization=meta-front-end-developer)
  2. 💻 [Programming with JavaScript](https://www.coursera.org/learn/programming-with-javascript?specialization=meta-front-end-developer)
  3. 💻 [Version Control](https://www.coursera.org/learn/introduction-to-version-control?specialization=meta-front-end-developer)
  4. 💻 [HTML and CSS in Depth](https://www.coursera.org/learn/html-and-css-in-depth?specialization=meta-front-end-developer)
  5. 💻 [React Basics](https://www.coursera.org/learn/react-basics?specialization=meta-front-end-developer)
  6. 💻 [Advanced React](https://www.coursera.org/learn/advanced-react?specialization=meta-front-end-developer)
  7. 💻 [Principles of UX/UI Design](https://www.coursera.org/learn/principles-of-ux-ui-design?specialization=meta-front-end-developer)

---
### **👩‍💻 Live Demo**

Check out the app
[here]().

P.S. Please excuse the "under construction" pages. It's not quite a full-fledged website yet, as the focal point of this assignment was the table booking system. [*You may say I'm a dreamer, but I'm not the only one*](https://www.youtube.com/watch?v=YkgkThdzX-8)--to date, 20,906 front-end hopefuls already enrolled in this [penultimate course of the professional certificate](https://www.coursera.org/learn/meta-front-end-developer-capstone?specialization=meta-front-end-developer)!--I just couldn't let the anchor tags and buttons--on a *hypothetical* app for a *fictitious* client, for a *non-existent* restaurant--link to 😲*gasp*😲 nothing. Anyway, *I hope someday you'll join us*...for Little Lennmon's (imaginary) ribbon cutting. 🦄👾👻

---

### **Grading Criteria**
+ 👍 **Has the learner followed the design and implementation of the UX UI?**
  + Here's the link to the Figma file, where you'll find both the wireframe and prototype for Little Lemon's homepage (created pre-coding):
  https://www.figma.com/file/hmPzcAyT9VojtFHJwCwJQM/Little-Lemon?type=design&node-id=0%3A1&t=qHY20PbbfH962JGZ-1
  + Note, for this project, we were given a bunch of random assets, a general style guide/UI kit (see "style guide" page in the above Figma file), and a *rough* layout for the homepage's UI. Sooo...the UI and content for the app's other pages were pretty much open to our own creative interpretation 👩‍🎨🎨 FWIW, I think the finished product is on brand 😉
  + The booking form UI and the pages related to it (namely, the booking confirmation and terms & conditions pages) are simplified versions of the ones I designed for the *Principles of UX/UI Design* course:
  https://www.figma.com/file/GwOVlhlULhv3Be7O3lmL8y/Meta-UX%2FUI-Design---Final-Assessment?type=design&node-id=0%3A1&t=0Y7Dd1E1AgRDBiw2-1

<br/>

+ 👍 **Are there appropriate accessibility tags applied?**
  + I added aria labels where needed--basically, wherever semantic HTML tags were lacking.
    + E.g., the footer's navigation sections and the main nav bar's toggle buttons/nav links drawer (for mobile/tablet screens).
  + I also added `aria-hidden="true"` to both the decorative and non-decorative svg icons (i.e., components from the `react-icons` library). See icons on booking confirmation page and on mobile/tablet nav bar.
    + Since the interactive/functional icons that serve as buttons/links are already wrapped in semantic `<button>` and `<a>` tags with descriptive aria labelling, `aria-hidden="true"` on the nested icon element [helps to prevent confusion for assistive technologies](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-hidden).

<br/>

+ 👍 **Does the web app contain unit tests?**
    + I wrote six unit tests using Jest 🧪. See `BookingForm.test.js` in `src` folder. In the terminal, run the `npm test` command inside the project's root directory to check that all tests are passing.
    + ⚠️ FYI, test #2 might be a little buggy. Simply re-run test if it fails, it should pass on second (or third 🫤) go. The received test output--`new Date()`--might be one millisecond behind the expected UTC timestamp output. *Ughhhh* 🧘‍♀️. (The digits preceding the `Z` at the end of the returned string represent the milliseconds, btw.)

<br/>

+ 👍 **Is the booking form functional and applying validation?**
  + `formValidation.js` contains the app's form validation functions.
  + `api.js` contains the code that dynamically populates the form with "live data" for the *choose time* dropdown menu based on date selection.
    + ⚠️ In `index.html`, per course instructions, I added a `<script>` tag that links to the original api url but, for some reason, I couldn't access the functions this way--despite no issues in [plain vanilla JS](https://codepen.io/duckduck_goose/pen/eYQYaLV). In JSX land, though, I get a scolding--in menacing red text--that (perfectly well-defined!) `fetchAPI` and `submitAPI` are..."undefined". 🤕🤔 So I gave up on the script.

  <br/>

  + *Required* fields
    + You won't be able to submit the form without filling in the following fields:
      - *first name* - As long as the input is not an empty string, it's "valid". To be as inclusive as possible--will accept symbols/numbers, and heck, even one-letter names--e.g., [X Æ A-12](https://www.bbc.com/news/world-us-canada-52557291) or [P](https://en.wikipedia.org/wiki/Sean_Combs) as in *P. Diddy*.
      - *last name* - same as above, min length = 1. E.g., [B](https://en.wikipedia.org/wiki/Cardi_B) as in *Cardi B* or [G](https://en.wikipedia.org/wiki/Kenny_G)  as in *Kenny G.*--these are "valid", won't trigger an error message.
      - *email*
      - *date* - I added a `min` attribute to the date input, and set its value to the current date to prevent any date before it from being selected.
      - *time*
      - *guests*
      - and agreeing to *terms & conditions*.

  <br/>

  + *Book Table* submit button
    + This will be disabled (grayed out) until the form is complete and free of errors. A disabled submit button displays (on hover):
      1. a `not-allowed` cursor (🚫)
      2. a tooltip reminding the user to *"please complete all required fields"* (all marked with a red asterisk).

  <br/>

  + Error messages
    + Using the appropriate attributes provides native HTML form validation:
      + `type="email"` in the `<input>` tag for basic email validation
      + `minLength` to specify a minimum length for an `<input>` of `type="text"`, for the first and last name fields
      + `min` & `max` to define an allowable numeric range for the guests field
      + `required` for all required fields
      + `disabled` to make the *Book Table* button unclickable when form is incomplete
    + The below custom error messages show up for invalid inputs only after the user has interacted with the field and when that input is no longer in focus--not while the user is typing or interacting with a menu.
      + ⚠️ Please enter your first name.
      + ⚠️ Please enter your last name.
      + ⚠️ Please enter a valid email address.
      + ⚠️ Please select a time from the dropdown.

  <br/>

  + Required fields with default values (and no custom error messages):
    + *Number of guests* field - defaults to 2. If the user does not make changes to this field, the app assumes that the party size is 2. No explicit user error message is necessary because choosing 0 guests is not an option.
    + *Choose date* field - defaults to the current date (today):
      1. on initial visit to booking page
      2. or if user clears the field, then returns to the form after navigating away from it

      If user changes the date, though, this will trigger a warning under the *choose time* dropdown menu, asking the user to select a time based on the new date selection. Otherwise, if untouched, user's date input will remain the current date (`new Date()`), and available times shown in dropdown will be based on that date.

  <br/>

  + Terms & Conditions / `LocalStorage` (persisting form data)
    + Clicking on link will navigate user away from the booking page, but when they return to it, thanks to `localStorage`, all inputs (if any) will be saved--except a cleared date field and/or a time slot that's no longer available, in which case, the time input field's value will revert to its default: an empty string.

  <br />

  + Successful form submissions
    + User will be directed to the booking confirmation page, where their booking details (based on form submission inputs) are summarized.
    + `utils.js` - contains the code responsible for reformatting form submission inputs before displaying them on the booking confirmation page.
    + Google Calendar integration - not actually implemented. Theoretically, clicking on the calendar icon would allow the user to easily add the event to their calendar--with all event details conveniently prepopulated. Right now the calendar button just links to the general *calendar.google.com* page.
    + Google Maps directions - If Little Lemon were a real restaurant, its actual location--not the location of some random (placeholder) Chicago Mediterranean restaurant--would be pinned in the embedded interactive map. But you get the idea...

  <br/>

  + *Whew!* Turns out a simple form *isn't*...so simple, after all.

<br/>

+ 👍 **Are the semantics and responsiveness of the web app correct?**
  + re: Semantics
    + Homepage
      + Landmark elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`) define its general structure
    + Booking Form
      + `<form>` - this component's parent element
      + `<label>` - used to give context to `<input>` and `<select>` elements within the `<form>` element
      + `<select>` - used for dropdown menus, with nested `<option>` tags, one for each option in the menu
    + General
        + `<button>` - used for all buttons. Icon buttons are wrapped within `<button>` tags.
        + `<a>` - used for all links. Icon links are wrapped within anchor tags.
        + `<h1>`, `<h2>`, `<h3>`, and `<h4>` heading tags - used throughout to establish content hierarchy
        + `<img>` (complete with descriptive `alt` text!) - used for all images (that are not icons)
        + `<ul>` - used for unordered (navigation) lists, in conjunction with nested `<li>` tags, one for each child list item
        + `<article>` - used for standalone content within its parent `<section>` element
    + Open Graph `<meta>` tags are included in the `<head>` section of `index.html`
  + re: Responsiveness
    + CSS media queries handled most of the heavy lifting.
    + Main nav bar - I used React's `useState` hook to track the current viewport width, and the `useEffect` hook to listen for any window `resize` events--a joint effort 🤝 resulting in a dynamic nav bar render based on screen size.
      + 🕵️‍♀️ Notice that the nav links of a bigger screen (size 1200px and up) change 🪄 to--*POOF! MAGIC!*--a ✨hamburger menu icon✨ when the screen size falls under 1200px.

<br/>

+ 👍 **Has the learner committed the project to a Git repository?**
    + You're l👀king at the repo right now 😁

<br/>
<br/>

<div align="center">
  <i>One small step for front-end development, one giant leap for the World Wide Web.</i>
  <br/>
  <br/>
  <img width="70%" src="./src/assets/finish-line.gif">
  <p style="font-size: 2rem; font-weight: bold;">FINIS 🏁</p>

</div>