var content = document.getElementById("qouteContent")
var author = document.getElementById("quoteAuthor")
var qoutes = [
    {
        qoute: "Be yourself; everyone else is already taken.",
        author: "― Oscar Wilde",
    },
    {
        qoute: "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
        author: "― Marilyn Monroe",
    },
    {
        qoute: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
        author: "― Albert Einstein",
    },
    {
        qoute: "So many books, so little time.",
        author: "― Frank Zappa",
    },
    {
        qoute: "A room without books is like a body without a soul",
        author: "― Marcus Tullius Cicero",
    },
    {
        qoute: "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind",
        author: "― Bernard M. Baruch",
    },
    {
        qoute: "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
        author: "― Dr. Seuss",
    },
    {
        qoute: "You only live once, but if you do it right, once is enough.",
        author: "― Mae West",
    },
    {
        qoute: "Be the change that you wish to see in the world.",
        author: "― Mahatma Gandhi",
    },
]

function randomIndex(qoutes){
    var number = Math.floor(Math.random() * qoutes.length);
    return number
}

function generateQoute(){
    randomIndex(qoutes)
    content.innerHTML = qoutes[randomIndex(qoutes)].qoute;
    author.innerHTML = qoutes[randomIndex(qoutes)].author;
}