// Function to retrieve repositories from GitHub API
async function getRepositories(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error retrieving repositories:', error);
        return [];
    }
}

// Function to filter repositories based on the '<portfolio>' tag
function filterPortfolioRepositories(repositories) {
    return repositories.filter(repo => repo.topics.includes('portfolio'));
}

// Function to get repository details such as title, description, and languages
async function getRepositoryDetails(repo) {
    const { name, description, languages_url, html_url } = repo;

    try {
        const response = await fetch(languages_url);
        const data = await response.json();
        const languages = Object.keys(data);

        return { name, description, languages, html_url };
    } catch (error) {
        console.error(`Error retrieving details for repository '${name}':`, error);
        return { name, description, languages: [], html_url };
    }
}

// Function to create a card element for a repository
// Function to create a card element for a repository
function createRepositoryCard(repo) {
    const { name, description, html_url, languages } = repo;

    // Create card elements
    const card = document.createElement('li');
    card.classList.add('card');

    const cardInner = document.createElement('div');
    cardInner.classList.add('card-inner');

    const cardTitle = document.createElement('h3');
    cardTitle.textContent = name;

    const cardDescription = document.createElement('p');
    cardDescription.textContent = description;



    const cardLink = document.createElement('a');
    cardLink.href = html_url;
    cardLink.classList.add("fa-solid", "fa-arrow-up-right-from-square");

    const icon = document.createElement('i');
    icon.classList.add('fas', 'fa-code');


    const cardTop =document.createElement('div');
    cardTop.classList.add("top")
    cardTop.appendChild(icon);
    cardTop.appendChild(cardLink)

    const cardLanguages = document.createElement('ul');
    cardLanguages.classList.add('languages');

    // Add language elements with different colors
    languages.forEach(language => {
        const languageItem = document.createElement('li');
        languageItem.textContent = language;
        languageItem.style.color = getLanguageColor(language);
        cardLanguages.appendChild(languageItem);

    });
    // Add language elements with different colors
    languages.forEach(language => {
        const languageItem = document.createElement('li');
        languageItem.textContent = language;
        languageItem.style.color = getLanguageColor(language);
        cardLanguages.appendChild(languageItem);

    });

    // Append elements to the card


    cardInner.appendChild(cardTop);
    cardInner.appendChild(cardTitle);
    cardInner.appendChild(cardDescription);
    cardInner.appendChild(cardLanguages);
    card.appendChild(cardInner);

    return card;
}

function createRepositoryCardHidden(repo) {
    const { name, description, html_url, languages } = repo;

    // Create card elements
    const card = document.createElement('li');
    card.classList.add('card-hidden');

    const cardInner = document.createElement('div');
    cardInner.classList.add('card-inner');

    const cardTitle = document.createElement('h3');
    cardTitle.textContent = name;

    const cardDescription = document.createElement('p');
    cardDescription.textContent = description;

    const cardLink = document.createElement('a');
    cardLink.href = html_url;
    cardLink.textContent = 'View Repo';

    const cardLanguages = document.createElement('ul');
    cardLanguages.classList.add('languages');

    // Add language elements with different colors
    languages.forEach(language => {
        const languageItem = document.createElement('li');
        languageItem.textContent = language;
        languageItem.style.backgroundColor = getLanguageColor(language);
        cardLanguages.appendChild(languageItem);
    });

    // Append elements to the card
    cardInner.appendChild(cardTitle);
    cardInner.appendChild(cardDescription);
    cardInner.appendChild(cardLink);
    cardInner.appendChild(cardLanguages);
    card.appendChild(cardInner);

    return card;
}


// Function to get the color for a language
function getLanguageColor(language) {
    // Define the colors for different languages
    const languageColors = {
        JavaScript: '#f1e05a',
        Python: '#3572A5',
        Java: '#b07219',
        Ruby: '#701516',
        // Add more language colors as needed
    };

    // Check if the language has a defined color
    if (language in languageColors) {
        return languageColors[language];
    } else {
        return '#ccc'; // Default color if no specific color is defined
    }
}

// Main function to scan GitHub repositories with the '<portfolio>' tag and create repository cards
async function scanPortfolioRepositories(githubUrl) {
    const repositories = await getRepositories(githubUrl);
    const portfolioRepositories = filterPortfolioRepositories(repositories);

    const repositoryDetails = await Promise.all(portfolioRepositories.map(repo => getRepositoryDetails(repo)));

    // Create repository cards
    const otherCardsDiv = document.getElementById('other-cards');
    repositoryDetails.forEach(repo => {
        const card = createRepositoryCard(repo);
        otherCardsDiv.appendChild(card);
    });


    repositoryDetails.forEach(repo => {
        const card = createRepositoryCard(repo);
        otherCardsDiv.appendChild(card);
    });

    repositoryDetails.forEach(repo => {
        const card = createRepositoryCardHidden(repo);
        otherCardsDiv.appendChild(card);
    });
    repositoryDetails.forEach(repo => {
        const card = createRepositoryCardHidden(repo);
        otherCardsDiv.appendChild(card);
    });
    repositoryDetails.forEach(repo => {
        const card = createRepositoryCardHidden(repo);
        otherCardsDiv.appendChild(card);
    });



    // Perform further operations with the repository details as needed
}

// Example usage
const githubUrl = 'https://api.github.com/users/OliverReeves2020/repos'; // Replace {username} with the GitHub username
scanPortfolioRepositories(githubUrl);



// ... Existing JavaScript code ...

function handleSeeMoreClick() {
    const seeMoreButton = document.getElementById('see-more-button');
    const cards = document.getElementsByClassName('card-hidden');
    const cardGrid = document.getElementById('other-cards');




    if (seeMoreButton.textContent === 'See More') {
        // Show hidden cards
        Array.from(cards).forEach((card, index) => {
            const delay = index * 0.3; // Delay calculation based on index (adjust as needed)
            card.style.display = 'block';
            card.style.animation = `fadeIn 0.4s ease`;
            card.style.animationDelay = `${delay}s`;
            card.style.animationFillMode = 'forwards';

        });

        cardGrid.classList.add("show-all")
        seeMoreButton.textContent = 'See Less';
    } else if (seeMoreButton.textContent === 'See Less') {
        // Hide cards
        Array.from(cards).forEach(card => {
            card.style.display = 'none';
            card.style.animation = '';
        });
        seeMoreButton.textContent = 'See More';
        cardGrid.classList.remove("show-all")
    }

}

// Function to handle the "See More" button click event

// Add event listener to the "See More" button
const seeMoreButton = document.getElementById('see-more-button');
seeMoreButton.addEventListener('click', handleSeeMoreClick);
