const allMenuItems = [
    {
        name: "Earthling Joe",
        image: "../images/tsp.jpg",
        description: "Our typical, down-to-Earth cup of coffee, sourced from the finest continents of Africa & Asia. Choice of roast and sweetening.",
        price: "3.25",
        featured: false
    },
    {
        name: "Quantum Espresso",
        image: "item/quantumespresso.jpg",
        description: "Espresso made with a blended superposition of dark-roasted beans, existing in multiple flavor states simultaneously until observed.",
        price: "4.50",
        featured: true
    },
    {
        name: "Nebula Latte",
        image: "item/quantumespresso.jpg",
        description: "Swirling clouds of steamed milk with colorful galaxy-inspired syrups of your choice in a rich espresso universe.",
        price: "5.75",
        featured: true
    },
    {
        name: "Android's Dream",
        image: "item/quantumespresso.jpg",
        description: "Matcha green tea infused with lavender and silver pearls, the perfect fuel for synthetic beings.",
        price: "6.25",
        featured: true
    },
    {
        name: "Nuclear Blend",
        image: "../images/tsp.jpg",
        description: "Medium-roast coffee with an extra kick of caffeine, vitamins, and enough nuclear energy to fuel an android's supercomputer brain.",
        price: "4.25",
        featured: false
    },
    {
        name: "Absolute Zero Brew",
        image: "../xxx",
        description: "Coffee beans of any roast, brewed in slower H2O molecules just before Earth rotates one time around it's axis.",
        price: "4.25",
        featured: false
    }
]

const featuredMenuGrid = document.getElementById("featured-menu-items");
const menuGrid = document.getElementById("full-menu-items");

function MenuItemElement(item) {
    const itemContainer = document.createElement("div");
    itemContainer.className = "menu-item";

    // Image
    const imageContainer = document.createElement("div");
    imageContainer.className = "menu-item-image";
    const image = document.createElement("img");
    image.src = `../images/${item.image}`;
    image.alt = item.name;
    imageContainer.appendChild(image);

    // Content
    const contentContainer = document.createElement("div");
    contentContainer.className = "menu-item-content";
    const contentHeader = document.createElement("h3");
    contentHeader.innerText = item.name;
    const contentDetails = document.createElement("p");
    contentDetails.innerText = item.description;
    const priceTag = document.createElement("span");
    priceTag.className = "menu-item-price";
    priceTag.innerText = `$${item.price}`;
    contentContainer.append(contentHeader, contentDetails, priceTag);

    // Append All
    itemContainer.append(imageContainer, contentContainer);
    return itemContainer;
}

function MenuItemList(appender, filter) {
    if (!appender) {
        return
    }
    filter.forEach(item => {
        const itemContainer = MenuItemElement(item);
        appender.appendChild(itemContainer);
    })

}


const quizQuestions = [
    {
        ask: "What is your favorite planet in our Solar System?",
        answers: {
            "Mercury": [["Quantum Espresso", 2]],
            "Venus": [["Nuclear Blend", 2]],
            "Earth": [["Earthling Joe", 2]],
            "Mars": [["Android's Dream", 2]],
            "Jupiter": [["Nebula Latte", 2]],
            "Saturn": [["Nebula Latte", 1], ["Nuclear Blend", 1]],
            "Uranus": [["Absolute Zero Brew", 1], ["Nebula Latte", 1]],
            "Neptune": [["Absolute Zero Brew", 2]]
        }
    },
    {
        ask: "What's your favorite field of science?",
        answers: {
            "Quantum Physics": [["Quantum Espresso", 3], ["Nuclear Blend", 2], ["Absolute Zero Brew", 1]],
            "Astronomical Science": [["Nebula Latte", 2], ["Absolute Zero Brew", 1]],
            "Computer Science": [["Android's Dream", 3], ["Quantum Espresso", 2]],
            "Chemistry": [["Earthling Joe", 4], ["Quantum Espresso", 1]]
        }
    },
    {
        ask: "What is your favorite part of STEM?",
        answers: {
            "Science": [["Quantum Espresso", 2], ["Absolute Zero Brew", 3]],
            "Technology": [["Android's Dream", 2], ["Earthling Joe", 3]],
            "Engineering": [["Android's Dream", 3], ["Quantum Espresso", 2]],
            "Math": [["Nuclear Blend", 4], ["Quantum Espresso", 1]]
        }
    }
];
class MenuQuiz {
    constructor() {
        this.quizElement = document.getElementById("menu-quiz");
        this.score = allMenuItems.reduce((acc, item) => {
            acc[item.name] = 0;
            return acc;
        }, {});
    }

    resetScore() {
        Object.keys(this.score).forEach(key => this.score[key] = 0);
    }
    
    renderElement() { 
        if (this.quizElement) {
            this.quizElement.innerHTML = "";

            quizQuestions.forEach((question, index) => {
                const questionContainer = document.createElement("div");
                questionContainer.classList.add("question-container");

                const questionTitle = document.createElement("h3");
                questionTitle.innerText = question.ask;
                questionContainer.appendChild(questionTitle);

                Object.keys(question.answers).forEach(answer => {
                    const label = document.createElement("label");
                    label.classList.add("quiz-option");

                    const input = document.createElement("input");
                    input.type = "radio";
                    input.name = `question-${index}`;
                    input.value = answer;
                    input.dataset.questionIndex = index;

                    const span = document.createElement("span");
                    span.innerText = answer;

                    label.appendChild(input);
                    label.appendChild(span);
                    questionContainer.appendChild(label);
                });

                this.quizElement.appendChild(questionContainer);
            });

            const submitButton = document.createElement("button");
            submitButton.innerText = "Submit Answers";
            submitButton.classList.add("cta-button");
            submitButton.addEventListener("click", () => this.processAnswers());

            this.quizElement.appendChild(submitButton);
        }
    }
    
    processAnswers() {
        this.resetScore();

        quizQuestions.forEach((_, index) => {
            const selectedOption = document.querySelector(`input[name="question-${index}"]:checked`);
            if (selectedOption) {
                this.answerQuestion(index, selectedOption.value);
            }
        });

        this.displayResults();
    }

    answerQuestion(questionNum, selection) {
        const question = quizQuestions[questionNum];
        if (!question || !question.answers[selection]) return;

        const pointCounter = question.answers[selection];

        pointCounter.forEach(([key, val]) => {
            if (this.score[key] !== undefined) { 
                this.score[key] += val; 
            }
        })
    }

    findWinningItem() {
        const maxScore = Math.max(...Object.values(this.score));
        console.log(maxScore);
        const winningName = Object.keys(this.score).find(item => this.score[item] === maxScore);
        return [allMenuItems.find(item => item.name === winningName), maxScore];
    }

    displayResults() {
        const [winningItem, score] = this.findWinningItem();
        if (!winningItem) {
            console.error("No winning item found.");
            return;
        }

        const reccomendationTitle = document.createElement("h3");
        reccomendationTitle.innerText = `We recommend ${winningItem.name} with a score of ${score}!`
        const displayItem = MenuItemElement(winningItem);
        const displ = document.getElementById("quiz-correct");
        displ.innerHTML = "";
        displ.append(reccomendationTitle, displayItem);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    MenuItemList(featuredMenuGrid, allMenuItems.filter(item => item.featured));
    MenuItemList(menuGrid, allMenuItems);
    new MenuQuiz().renderElement();
});