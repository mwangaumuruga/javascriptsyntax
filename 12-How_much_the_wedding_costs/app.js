// # `12` How Much Does the Wedding Cost?

// Here is a table of prices of a wedding catering company:

// | Nº of people | Price |
// |:---|---:|
// | Up to 50 people  | $4,000 |
// | Up to 100 people | $10,000 |
// | Up to 200 people | $15,000  |
// | More than 200 people | $20,000 |

// ## 📝 Instructions:

// 1. Write a function `getPrice` that receives the number of guests attending the wedding and returns the corresponding `price` on the console.

// ## 📎 Example:

// For example, if the user says that **20 people** are attending the wedding, the returned price should be **4000**.


let people = prompt('How many people are coming to your wedding?');
function wedding(cost){
    if (cost <= 50)
    {return('$4000')}
    else if( cost <= 100)
    {return('$10,000') }
    else if(cost <= 200)
    { return('$15,000');}
    else{ return('$20,000');}}
