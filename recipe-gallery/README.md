# Recipe Gallery (AD311 Assignment)

This project is a simple React application that displays a gallery of recipes. It was built as part of the AD311 coursework to demonstrate component creation, props usage, list rendering, and basic testing with normal and edge-case data.

---

## 📂 Project Structure

recipe-gallery/
src/
App.jsx
RecipeGallery.jsx
edgeCases.js   ← stored here for assignment testing
main.jsx
index.html
package.json
vite.config.js


---

## 🥗 Features

- Displays a gallery of recipe cards  
- Each card shows:
  - Recipe title  
  - Ingredients list  
  - Image  
- Clean, centered layout  
- Easy to swap between normal and edge-case test data during the assignment video  

---

## 🧪 Test Cases (Required by Assignment)

### ✅ Normal Test Cases (3)
These are hard‑coded directly inside `RecipeGallery.jsx`:

- Valid title  
- Valid ingredients list  
- Valid image URL  

### ⚠️ Edge Cases (3)
Stored in GitHub inside:

src/edgeCases.js


Edge cases include:

- Missing title  
- Empty ingredients list  
- Broken image URL  

During the video demonstration, these are copied from GitHub and pasted into `RecipeGallery.jsx` to show how the component behaves with imperfect data.

---

## ▶️ Running the Project

Install dependencies:

```bash
npm install

Start the development server:

npm run dev

The app will be available at:

http://localhost:5173

🎥 Video Demonstration Requirements
The assignment video includes:

Showing the normal test cases running in the browser

Opening GitHub → navigating to edgeCases.js

Copying the edge-case array

Replacing the normal array in RecipeGallery.jsx

Saving → React refreshes → edge cases appear

Explaining:

Missing title

Empty ingredients

Broken image

Discussing time/space complexity (O(n))

🧠 Complexity Analysis
Time Complexity: O(n) — the component maps through the recipe list once

Space Complexity: O(n) — storing the recipe array in memory

📄 Notes
This project uses Vite for fast development

Images use https://picsum.photos for simple placeholder photos

Edge cases are intentionally imperfect to satisfy assignment requirements

✔️ Author
David Davis
North Seattle College — AD311