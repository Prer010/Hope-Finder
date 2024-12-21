import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 5500;

app.use(bodyParser.urlencoded({extended : true})); //middleware

const rotatingWords = ["Reuniting Families, Restoring Hope", "Finding the missing, Healing the Heart" , "Hope is the light in the darkest night"];
let index = 0;

const dynamicText = document.getElementById("dynamic-text");

function rotateText() {
  // Apply hidden class to fade out
  dynamicText.classList.add("hidden");

  setTimeout(() => {
    // Change the word
    dynamicText.textContent = rotatingWords[index];
    // Increment index or reset to 0
    index = (index + 1) % rotatingWords.length;
    // Apply visible class to fade in
    dynamicText.classList.remove("hidden");
  }, 500); // Matches the CSS transition time
};

// Rotate every 2 seconds
setInterval(rotateText, 4000);

// Initialize with the first word
dynamicText.textContent = rotatingWords[index];


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});