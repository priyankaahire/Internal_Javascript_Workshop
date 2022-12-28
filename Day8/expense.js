const expense = [
    {id: 1, desc:"Zomato", amount:231.00},
    {id: 2, desc:"Amazon", amount: 550.00},
    {id: 3, desc: "Recharfe", amount: 175.00}
];

//console.log(expense);

const above200 = expense.filter( trans => trans.amount >= 200);
console.log({above200});

//const sum           =     expense.reduce((total, trans) => total + trans);
//console.log({sum}); //[object Object][object Object][object Object]

//const sum           =     expense.reduce((total, trans) => total + trans.amount);
//console.log({sum}); //{ sum: '[object Object]550175' }
//*                                                                              | initializer
//*                                                                              v
const sum           =     expense.reduce((total, trans) => total + trans.amount, 0);
//#                                        0      {}        0       231  
console.log({sum});

const highValue  = expense
                    .filter( trans => trans.amount >= 200)
                    .reduce( (total, trans)  => total + trans.amount, 0);
console.log(highValue);

//* Mapping one array to another
const language = ['c', 'C++', 'Python', 'Java', 'javascript', 'C#', 'Dart'];
// const lanagauge = [1, 2, 3]
const langLength = language.map(lang => {return {lang: lang.length}});
console.log(langLength);

const langLength2 = language.map(lang => {return {[lang]: lang.length}});
console.log(langLength2); // ^ [lang] => display key


const allLanguage = language.reduce((str, lang) => str + ", "+ lang);
console.log(allLanguage);
const easy = language.join(", ");
const notSugessted = language.toString(); //^ it will give a space btn string and even it migh be not work in non number 
console.log(notSugessted);