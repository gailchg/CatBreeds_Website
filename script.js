// Cat breeds data
const catBreeds = [
    {
        id: 1,
        name: "Persian",
        origin: "Iran (Persia)",
        description: "Known for their long, luxurious coats and sweet personalities, Persian cats are one of the most popular and recognizable breeds.",
        image: "assets/persian.jpg",
        traits: ["Long Hair", "Calm", "Gentle"]
    },
    {
        id: 2,
        name: "Maine Coon",
        origin: "United States",
        description: "One of the largest domesticated cat breeds, Maine Coons are known for their intelligence, playful personality, and tufted ears.",
        image: "assets/maine-coon.jpg",
        traits: ["Long Hair", "Playful", "Intelligent"]
    },
    {
        id: 3,
        name: "Siamese",
        origin: "Thailand",
        description: "Siamese cats are known for their striking blue eyes, vocal nature, and social personality. They form strong bonds with their owners.",
        image: "assets/siamese.jpg",
        traits: ["Short Hair", "Vocal", "Social"]
    },
    {
        id: 4,
        name: "Bengal",
        origin: "United States",
        description: "Bengal cats have wild-looking markings like leopards or ocelots but with the temperament of a domestic cat. They are active and playful.",
        image: "assets/bengal.jpg",
        traits: ["Short Hair", "Playful", "Active"]
    },
    {
        id: 5,
        name: "Sphynx",
        origin: "Canada",
        description: "Known for their lack of fur, Sphynx cats are energetic, intelligent, and very affectionate. They require regular bathing to remove oil buildup.",
        image: "assets/sphynx.jpg",
        traits: ["Hairless", "Affectionate", "Hypoallergenic"]
    },
    {
        id: 6,
        name: "Ragdoll",
        origin: "United States",
        description: "Ragdolls are large, affectionate cats known for going limp when held. They have striking blue eyes and a semi-longhaired coat.",
        image: "assets/ragdoll.jpg",
        traits: ["Long Hair", "Calm", "Affectionate"]
    },
    {
        id: 7,
        name: "Scottish Fold",
        origin: "Scotland",
        description: "Recognizable by their unique folded ears, Scottish Folds are sweet-tempered cats that adapt well to various living situations.",
        image: "assets/scottish-fold.jpg",
        traits: ["Short Hair", "Calm", "Adaptable"]
    },
    {
        id: 8,
        name: "Russian Blue",
        origin: "Russia",
        description: "Russian Blues are known for their short, dense blue-gray coat and green eyes. They are reserved but form strong bonds with their families.",
        image: "assets/russian-blue.jpg",
        traits: ["Short Hair", "Reserved", "Hypoallergenic"]
    }
];

// Function to display cat breeds
function displayCats(filter = "all") {
    const catGrid = document.getElementById("catGrid");
    catGrid.innerHTML = "";
    
    const filteredCats = filter === "all" 
        ? catBreeds 
        : catBreeds.filter(cat => {
            let searchTrait;
            switch(filter) {
                case "longhair":
                    searchTrait = "Long Hair";
                    break;
                case "shorthair":
                    searchTrait = "Short Hair";
                    break;
                case "hypoallergenic":
                    searchTrait = "Hypoallergenic";
                    break;
                case "playful":
                    searchTrait = "Playful";
                    break;
                default:
                    searchTrait = filter;
            }
            
            return cat.traits.some(trait => trait === searchTrait);
        });
    
    filteredCats.forEach(cat => {
        const catCard = document.createElement("div");
        catCard.className = "cat-card";
        
        catCard.innerHTML = `
            <img src="${cat.image}" alt="${cat.name}" class="cat-image">
            <div class="cat-info">
                <h3 class="cat-name">${cat.name}</h3>
                <p class="cat-origin">Origin: ${cat.origin}</p>
                <p class="cat-description">${cat.description}</p>
                <div class="cat-traits">
                    ${cat.traits.map(trait => `<span class="trait">${trait}</span>`).join("")}
                </div>
            </div>
        `;
        
        catGrid.appendChild(catCard);
    });
}

// Initialize the page with all cats
document.addEventListener("DOMContentLoaded", () => {
    displayCats();
    
    // Add event listeners to filter buttons
    const filterButtons = document.querySelectorAll(".nav-item");
    filterButtons.forEach(button => {
        button.addEventListener("click", function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove("active"));
            // Add active class to clicked button
            this.classList.add("active");
            // Filter cats based on button data
            const filter = this.getAttribute("data-filter");
            displayCats(filter);
        });
    });
});