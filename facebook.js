//alert("it works for sure");
//const mainHeader = document.querySelector('h1').style.background = "red";

//data base sign up, remever to use an array
var database = [
    {
        username: 'Reinier',
        password: "crazy123"
    },
    {
        username: 'Yari',
        password: "crazy124"
    },
    {
        username: 'lucas',
        password: "crazy125"
    },
    {
        username: 'lennox',
        password: "crazy126"
    },

];

var newsFeed = [
    {
        username: "Lennox",
        timeLine: "He is a boy who cares about others"
    },
    {
        username: "Lucas",
        timeLine: "He likes to make a mess and then laughs"
    }
];

var userNamePrompt = prompt("what is your name");
var passwordUserPrompt = prompt("What/'s your password");

//here is where we check if the info is correct about the log in
//see how im checking the database making sure is the correct info the person is trying to log
function signIn (user, pass) {
   
  //if(user === database[0].username && pass === database[0].password) {
      //console.log(newsFeed);
  //} else {
        //alert("Sorry, wrong username or password");
  //}
}
signIn(userNamePrompt, passwordUserPrompt);

