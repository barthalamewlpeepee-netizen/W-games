const games = [
    {
        name: "Game",
        category: "Arcade",
        image: "images/example.svg",
        url: "games/example/index.html"
    }

    // Add games above this line using:
    // {
    //     name: "Your Game",
    //     category: "Action",
    //     image: "images/yourgame.jpg",
    //     url: "games/yourgame/index.html"
    // },
];

const gameGrid = document.getElementById("gameGrid");
const search = document.getElementById("search");
let currentCategory = "All";

function displayGames() {
    gameGrid.innerHTML = "";
    const searchText = search.value.toLowerCase();

    const filteredGames = games.filter(game =>
        game.name.toLowerCase().includes(searchText) &&
        (currentCategory === "All" || game.category === currentCategory)
    );

    if (!filteredGames.length) {
        gameGrid.innerHTML = '<div class="no-games">No games found.</div>';
        return;
    }

    filteredGames.forEach(game => {
        const card = document.createElement("div");
        card.className = "game-card";
        card.innerHTML = `
            <img class="game-image" src="${game.image}" alt="${game.name}">
            <div class="game-info">
                <h3>${game.name}</h3>
                <div class="game-category">${game.category}</div>
                <a class="play-button" href="${game.url}">PLAY</a>
            </div>`;
        gameGrid.appendChild(card);
    });
}

function filterGames(category) {
    currentCategory = category;
    displayGames();
}

search.addEventListener("input", displayGames);
displayGames();
