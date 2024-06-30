 var quote = [
 {   
     quote: "  “Be yourself; everyone else is already taken.” ",
     author: "― Oscar Wilde ",
 },

 {
    quote:  " “So many books, so little time.” ",
    author: " ― Frank Zappa "   ,
 },

 {
   quote:" “A room without books is like a body without a soul.”",
   author:"― Marcus Tullius Cicero " ,
 },
 
 {
    quote: "“You only live once, but if you do it right, once is enough.”" ,
    author: " ― Mae West",
 },
 
 {
    quote: " “Be the change that you wish to see in the world.”" ,
    author: "― Mahatma Gandhi",
 },
  
 {
    quote: "“If you tell the truth, you donot have to remember anything.”",
    author: "― Mark Twain ",
 },
 
 {
    quote: "“Always forgive your enemies; nothing annoys them so much.”",
    author: "― Oscar Wilde",
 },
   
 {
    quote: " “Without music, life would be a mistake.”",
    author: " ― Friedrich Nietzsche ",
 },
 
 {
    quote: " “Good friends, good books, and a sleepy conscience: this is the ideal life.”",
    author: " ― Mark Twain ",
 },
 
 
 {
  quote : " “Life is what happens to us while we are making other plans.”" ,
  author  :  "  ― Allen Saunders",
 },
  
   
]



function getQoutes(){
   var num = Math.floor(Math.random()*quote.length);
   console.log(num);
   document.getElementById("qoute").innerHTML = quote[num].quote;
   document.getElementById("author").innerHTML = quote[num].author;
   
}


