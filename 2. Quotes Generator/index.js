const quotes = [
    {
        quote: "You must be the change you wish to see in the world.",
        author: "Mahatma Gandhi"
    },
    {
        quote: "The only thing we have to fear is fear itself.",
        author: "Franklin D. Roosevelt"
    },
    {
        quote: "It is during our darkest moments that we must focus to see the light.",
        author: "Aristotle"
    },
    {
        quote: "Go confidently in the direction of your dreams! Live the life you've imagined.",
        author: "Henry David Thoreau"
    },
    {
        quote: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
        author: "Ralph Waldo Emerson"
    },
];

let description = document.getElementById("description");
let author = document.getElementById("author");
let btn = document.getElementById('btn');
// console.log(btn);

btn.addEventListener("click", function handleClick() {
    let randomNum = Math.floor(Math.random() * quotes.length);
    console.log(randomNum);
    description.innerHTML = (quotes[randomNum].quote);
    author.innerHTML = (quotes[randomNum].author);
}
);

