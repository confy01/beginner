let quotes = [
    {quote:"The purpose of our lives is to be happy.",
    author:"Dalai Lama"},
    {quote:"Life is what happens when you’re busy making other plans.",
    author:"John Lennon"},
    {quote:"Get busy living or get busy dying.",
    author:"Stephen King"},
    {quote:"You only live once, but if you do it right, once is enough.",
    author:"Mae West"},
    {quote:"Many of life’s failures are people who did not realize how close they were to success when they gave up.",
    author:"Thomas A. Edison"}
];
function generate(){
    const random = parseInt(Math.random()*quotes.length);
    document.getElementById('quote').innerHTML= quotes[random].quote;
    document.getElementById("author").innerHTML = quotes[random].author

}
