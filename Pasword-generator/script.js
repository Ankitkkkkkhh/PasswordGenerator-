const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerSet = "abcdefghijklmnopqrstuvwxyz"
const numberSet = "1234567890"
const symbolSet = "~!@#$%^&*()_+/"

//imp selector
const passBox = document.getElementById("pass-box")
const totalchar = document.getElementById("total-char")
const upperInput = document.getElementById("upper-case")
const lowerInput = document.getElementById("lower-case")
const nuberInput = document.getElementById("numbers")
const symbolInput = document.getElementById("symbols")




const getRandomDate =(dataSet)=>{
return dataSet[Math.floor(Math.random() *dataSet.length)]
}

const generatePassword = (password ="")=>{
    if (upperInput.checked) {
        password+=getRandomDate(upperSet)
    }
    if (lowerInput.checked) {
        password+=getRandomDate(lowerSet)
    }
    if (nuberInput.checked) {
        password+=getRandomDate(numberSet)
    }
    if (symbolInput.checked) {
        password+=getRandomDate(symbolSet)
    }

    if (password.length < totalchar.value) {
        return generatePassword(password)
    }       
    passBox.innerText=truncateString(password,totalchar.value);
    console.log(password);
}

document.getElementById("btn").addEventListener(
    "click",
    function(){
        generatePassword();
    }
)

generatePassword()

function truncateString(str, num) {
    if (str.length > num) {
        let subStr = str.substring(0, num);
        return subStr;
    } else {
        return str;
    }
}