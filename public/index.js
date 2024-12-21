const form = document.getElementById("addReportForm");
const reportCards = document.getElementById("reportCards");
const searchInput = document.getElementById("searchInput");

// Load reports from localStorage
document.addEventListener("DOMContentLoaded", loadReports);

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const dateMissing = document.getElementById("dateMissing").value;
  const location = document.getElementById("location").value;
  const description = document.getElementById("description").value;
  const photo = document.getElementById("photo").files[0];

  const reader = new FileReader();
  reader.onload = function () {
    const imageData = reader.result;
    const report = { name, age, dateMissing, location, description, imageData };
    saveReport(report);
    displayReport(report);
    form.reset();
  };

  if (photo) {
    reader.readAsDataURL(photo);
  }
});

function saveReport(report) {
  let reports = JSON.parse(localStorage.getItem("reports")) || [];
  reports.push(report);
  localStorage.setItem("reports", JSON.stringify(reports));
}

function loadReports() {
  let reports = JSON.parse(localStorage.getItem("reports")) || [];
  reports.forEach(displayReport);
}

function displayReport(report) {
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `
    <img src="${report.imageData}" alt="${report.name}">
    <h3>${report.name}</h3>
    <p><strong>Age:</strong> ${report.age}</p>
    <p><strong>Date Missing:</strong> ${report.dateMissing}</p>
    <p><strong>Location:</strong> ${report.location}</p>
    <p>${report.description}</p>
  `;
  reportCards.appendChild(card);
}

// Search functionality
searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();
  const cards = $(".card");

  cards.forEach((card) => {
    const name = card.querySelector("h3").innerText.toLowerCase();
    const location = card.querySelectorAll("p")[2].innerText.toLowerCase();
    if (name.includes(query) || location.includes(query)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});
