const reportData = [
    {
        name: "Kishore Mazumdar",
        image: "./images/mp.jpg",
        age: 16,
        gender: "Male",
        address: "Kadamtala",
        missingSince: "2024-02-15",
        missingFrom: "Central Park",
        policeStation: "Kadamatala",
        description: "Last seen wearing blue jeans and a red sweater"
    },
    {
        name: "Sreenivasan",
        image: "./images/mp.jpg",
        age: 12,
        gender: "Male",
        address: "IAF Station, Tambaram, Chennai",
        missingSince: "2024-03-01",
        missingFrom: "Near Columbus Elementary School",
        policeStation: "Aberdeen",
        description: "Last seen in school uniform"
    },
    {
        name: "Samira",
        image: "./images/mp.jpg",
        age: 19,
        gender: "Female",
        address: "Gandhinagar, Gujarat",
        missingSince: "2024-02-28",
        missingFrom: "Car Nicobar",
        policeStation: "Car Nicobar",
        description: "Last seen carrying a black backpack"
    },
    {
        name: "Heeralal Giri",
        image: "./images/mp.jpg",
        age: 8,
        gender: "Male",
        address: "Ranaghat",
        missingSince: "2024-03-05",
        missingFrom: "Local Park",
        policeStation: "Ranaghat",
        description: "Last seen in green t-shirt and shorts"
    },
    {
        name: "Maria Garcia",
        image: "./images/mp.jpg",
        age: 21,
        gender: "Female",
        address: "Parnashala",
        missingSince: "2024-02-20",
        missingFrom: "Shopping Mall",
        policeStation: "Parnashala",
        description: "Last seen wearing black dress and carrying purple purse"
    },
    {
        name: "Laxman Pujara",
        image: "./images/mp.jpg",
        age: 14,
        gender: "Male",
        address: "South Point, Near Temple",
        missingSince: "2024-03-10",
        missingFrom: "Basketball Court",
        policeStation: "Raiganj",
        description: "Last seen in basketball jersey number 23"
    },
    {
        name: "Sophia Patel",
        image: "./images/mp.jpg",
        age: 17,
        gender: "Female",
        address: "Vandoor",
        missingSince: "2024-03-08",
        missingFrom: "Near Book Store",
        policeStation: "Downtown Police Station",
        description: "Last seen wearing white hoodie and blue jeans"
    },
    {
        name: "Suleman",
        image: "./images/mp.jpg",
        age: 10,
        gender: "Male",
        address: "New Pahar Gao",
        missingSince: "2024-03-12",
        missingFrom: "School Bus Stop",
        policeStation: "Northeast Police Station",
        description: "Last seen wearing red backpack and navy blue jacket"
    },
    {
        name: "Anita Devnath",
        image: "./images/mp.jpg",
        age: 15,
        gender: "Female",
        address: "Prem Nagar",
        missingSince: "2024-03-15",
        missingFrom: "Community Center",
        policeStation: "Northwest Police Station",
        description: "Last seen in school band uniform"
    }
];

function createReportCards() {
    const reportGrid = document.getElementById('report-cards');
    
    reportData.forEach(report => {
        const card = document.createElement('div');
        card.className = 'report-card';
        
        card.innerHTML = `
            <h2>${report.name}</h2>

            <img src="${report.image}" alt="${report.name}" class="report-image">
        <div class="report-details">
        </div>

            <div class="report-details">
                <p><strong>Age:</strong> ${report.age}</p>
                <p><strong>Gender:</strong> ${report.gender}</p>
                <p><strong>Address:</strong> ${report.address}</p>
                <p><strong>Missing Since:</strong> ${report.missingSince}</p>
                <p><strong>Missing From:</strong> ${report.missingFrom}</p>
                <p><strong>Police Station:</strong> ${report.policeStation}</p>
                <p><strong>Description:</strong> ${report.description}</p>
            </div> 
        
    `;
        reportGrid.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', createReportCards);