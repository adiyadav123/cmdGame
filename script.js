let help = document.getElementById("help")
let output = document.getElementById("output")
let input = document.getElementById("input")
let wallet = 1000;
let inventory = [];
let level = 0;
let bonus = 50000;
let amount = 0;
let command_usage = 0;
let exp = 0;
let bank = 0;
const memes = ['https://i.redd.it/a0v87gwzoge61.jpg', 'https://i.redd.it/q29egav34ee61.jpg', 'https://i.redd.it/iij16swxjie61.jpg', 'https://i.redd.it/vek7dm2hrge61.jpg', 'https://www.testbytes.net/wp-content/uploads/2019/06/Untitled-8.png', 'https://miro.medium.com/max/1000/0*Ua695vjzFHV6VNOX.png', 'https://pbs.twimg.com/media/EKkPagPXkAA__Qo.jpg', 'https://code-love.com/wp-content/uploads/2019/03/download.jpeg', 'https://www.thecoderpedia.com/wp-content/uploads/2020/06/Programming-Memes-Programmer-while-sleeping.jpg', 'https://www.thecoderpedia.com/wp-content/uploads/2020/06/Programming-Memes-Evolution-of-Memory-Storage-1024x996.jpg', 'https://www.thecoderpedia.com/wp-content/uploads/2020/06/Programming-Memes-Error-in-Code-896x1024.jpg', 'https://www.thecoderpedia.com/wp-content/uploads/2020/06/Coding-Meme-Code-Comments-be-Like-925x1024.jpg', 'https://www.thecoderpedia.com/wp-content/uploads/2020/06/Internet-Explorer-Joke-915x1024.jpg','https://preview.redd.it/0osvrtnwbn8a1.jpg?width=640&crop=smart&auto=webp&s=038109c66bf36b1baeaf42ad541f0f1c350acc27','https://preview.redd.it/5kcx9j4iho8a1.jpg?width=640&crop=smart&auto=webp&s=90339331cf9085f83a709673408ab4a328c7fde4','https://i.redd.it/6ed65tr6xn8a1.jpg', 'https://i.redd.it/bxv3r48qp78a1.jpg', 'https://i.redd.it/hivopn6ezr7a1.jpg', 'https://preview.redd.it/isdqzw9p2j7a1.png?width=640&crop=smart&auto=webp&s=4ff5a756f43d6fb685638b3e62c3575c322aed55', 'https://preview.redd.it/isdqzw9p2j7a1.png?width=640&crop=smart&auto=webp&s=4ff5a756f43d6fb685638b3e62c3575c322aed55'];

let beg = [200, 10, 1000, "No", "Nope", "Nah"]
let fish = ["Garbage", "Common Fish", "No", "Nah", "Tropical Fish", "Shark", "No"]
let animal = ["Rabbit", "Dragon", "nothing lol", "nothing", "nothing", "Duck", "Deepak Kalal", "Snowflake", "Deer", "nothing"];
help.onclick = () => {
    alert("for earning money type 👇\n1./hunt\n2./fish\n3./beg\n4./bonus\n/bank - for bank details\n/meme - for memes \ntype /help-table for all commands")
}
// console.log(level)
input.oninput = () => {
    let randMeme = Math.floor(Math.random() * memes.length)
    let meme = memes[randMeme];
let randNum = Math.floor(Math.random() * animal.length)
// console.log(animal[randNum])
    let randAnimal = animal[randNum]
    let randBeg = Math.floor(Math.random() * beg.length);
    let beg_price = beg[randBeg];
    let randFish = Math.floor(Math.random() * fish.length);
    let fish_price = fish[randFish]

    let user = input.value;
    if (user == "/register") {
        output.textContent = "Welcome to cmdGame";
        var name = prompt("Enter your name!");
        output.textContent = `You logged in as ${name}`;
        command_usage++;
        exp += 10;
        wallet += 100;
    }
    else if (user == "/help-table") {
        exp += 10;
        wallet += 100;
        command_usage++;
        output.innerHTML = `
        <span class="output" id = "output">
        /beg - for begging money</br></br>/fish - for fishing and earning money</br></br>/hunt - for hunting and earning money</br></br>
        /register - For registering your name </br></br> /bonus - For  bonus</br></br>/balance - for know earnings</br></br>/profile - for profile</br></br>/withdraw - for sending your money from wallet to bank</br></br>/status - for knowing your level, command usage, exp, </br></br> 
        `;
    }
    else if (user == "/meme") {
        exp += 100;
        command_usage++;
        output.innerHTML = `
        <span id="output" class="output"><img src="${meme}"/></span>
        `;
    }
    else if (user == "/bank") {
        exp += 10;
        command_usage++;
        wallet += 100;
        output.textContent = `Bank balance - 💰${bank}`
    }
    else if (user == "/fish" && fish_price == "Shark") {
        exp += 10;
        command_usage++;
        wallet += 500000 + 100;
        output.textContent = `You cast out your line and brought back 🦈 ${fish_price}`;
        inventory.push(fish[randFish])
    }
    else if (user == "/fish" && fish_price == "Tropical Fish") {
        exp += 10;
        command_usage++;
        wallet += 10000 + 100;
        output.textContent = `You cast out your line and brought back 🐠 ${fish_price}`;
        inventory.push(fish[randFish])
    }
    else if (user == "/fish" && fish_price == "Nah") {
        exp += 10;
        command_usage++;
        wallet += 100;
        output.textContent = "Your fishing trip came up empty, shoes for dinner again tonight!";
    }
    else if (user == "/fish" && fish_price == "No") {
        exp += 10;
        command_usage++;
        wallet += 100;
        output.textContent = "Your fishing trip came up empty, shoes for dinner again tonight!";
    }
    else if (user == "/fish" && fish_price == "Common Fish") {
        exp += 10;
        command_usage++;
        wallet += 3000 + 100;
        output.textContent = `You cast out your line and brought back 🐟 ${fish_price}`;
        inventory.push(fish[randFish])
    }
    else if (user == "/fish" && fish_price == "Garbage") {
        command_usage++;
        exp += 10;
        wallet += 1000 + 100;
        output.textContent = `You cast out your line and brought back 💩fish ${fish_price}`;
        inventory.push(fish[randFish])
    }
    else if (user == "/beg" && beg_price == 200) {
        command_usage++;
        exp += 10;
        wallet += 200 + 100;
        output.textContent = `Oh you poor soul, take 💰 ${beg_price} coins`
    }
    else if (user == "/beg" && beg_price == 10) {
        command_usage++;
        exp += 10;
        wallet += 10 + 100;
        output.textContent = `Oh you poor soul, take 💰 ${beg_price} coins`
    }
    else if (user == "/beg" && beg_price == 1000) {
        command_usage++;
        exp += 10;
        wallet += 1000 + 100;
        output.textContent = `Oh you poor soul, take 💰 ${beg_price} coins`
    }
    else if (user == "/beg" && beg_price == "No") {
        command_usage++;
        exp += 10;
        wallet += 0 + 100;
        output.textContent = `Sorry I am also a begger`
    }
    else if (user == "/beg" && beg_price == "Nope") {
        command_usage++;
        exp += 10;
        wallet += 0 + 100;
        output.textContent = `Sorry I am also a begger`
    }
    else if (user == "/beg" && beg_price == "Nah") {
        command_usage++;
        exp += 10;
        wallet += 0 + 100;
        output.textContent = `Sorry I am also a begger`
    }
    else if (user == "/hunt" && randAnimal == "Deer") {
        exp += 10;
        command_usage++;
        wallet += 14000 + 100;
        output.textContent = `You were hunting and brought back 🦌 ${randAnimal}`;
        inventory.push(animal[randNum]);
    }
    else if (user == "/hunt" && randAnimal == "Snowflake") {
        command_usage++;
        exp += 10;
        wallet += 4000 + 100;
        output.textContent = `You went hunting and brought back ❄ ${randAnimal}`;
        inventory.push(animal[randNum]);
    }
    else if (user == "/hunt" && randAnimal == "Deepak Kalal") {
        command_usage++;
        exp += 10;
        wallet += 0 + 100;
        output.textContent = "No I can't give you money for Kashmir's Kali";
        inventory.push(animal[randNum]);
    }
    else if (user == "/hunt" && randAnimal == "Duck") {
        exp += 10;
        command_usage++;
        wallet += 2000 + 100;
        output.textContent = `You went hunting and brought back 🦆 ${randAnimal}`
        inventory.push(animal[randNum]);
    }
    else if (user == "/status") {
        exp += 10;
        command_usage++;
        wallet += 100;
        output.textContent = `level = ${level}, exp = ${exp}, commands-usage = ${command_usage}`;
    }
    else if (user == "/hunt" && randAnimal == "nothing") {
        exp += 10;
        command_usage++;
        wallet += 100;
        output.textContent = "All that time in the woods, and you couldn't catch a single thing hahaha";
    }
    else if (user == "/balance") {
        output.textContent = `💰 ${wallet + bank} coins`;
        command_usage++;
        exp += 10;
        wallet += 100;
    }
    else if (user == "/bonus") {
        var randBonus = wallet / 100 * 2;
        command_usage++;
        exp += 10;
        wallet = wallet + randBonus + 100;
        output.textContent = `Take your bonus as 💰 ${randBonus} coins`;
    }
    else if (user == "/hunt" && randAnimal == "Rabbit" ) {
        wallet = wallet + 7000 + 100;
        output.textContent = `You went hunting and brought back 🐇 ${randAnimal}`
        inventory.push(animal[randNum])
        // console.log(inventory)
        // console.log(randAnimal)
        command_usage++;
        // console.log(wallet)
        exp += 10;
    }
    else if (user == "/hunt" && randAnimal == "Dragon") {
        wallet = wallet + 30000 + 100;
        output.textContent = `You went hunting and brought back 🐉 ${randAnimal}`
        inventory.push(animal[randNum])
        command_usage++;
        exp += 10;
    }
    else if (user == "/hunt" && randAnimal == "nothing lol") {
        wallet = wallet + 100;
        exp += 10;
        command_usage++;
        output.textContent = "Imagine going into the woods to hunt something, and coming out empty handed 😂";

    }
    else if (user == "/wallet") {
        output.textContent = `you have 💰${wallet} coins`;
        command_usage++;
        exp += 10;
        wallet += 700;
    }
    else if (user == "/profile") {
        exp += 10;
        wallet += 700;
        command_usage++;
        output.textContent = `WALLET = ${wallet},\n       COMMAND USAGE = ${command_usage} times,\n  EXP = ${exp},  \nLEVEL = ${level}, ITEMS = ${inventory},         BANK = ${bank}, net worth = ${bank+wallet}`;
    }
    else if (user == "/inventory") {
        output.textContent = `${inventory}`
    }
    else if (user == "/withdraw") {
        amount = prompt("How much coins you want to withdraw")
        if (amount > wallet) {
            amount = 10 / 100 * wallet;
            console.log("Amount = ", amount)
        } else {
            amount = amount;
        }
        amount = 10 / 100 * wallet;
        wallet -= amount;
        bank = amount;
    }
    else {
        output.textContent = "Please type a valid command"
    }
    if (exp >= 50 && exp < 100) {
        level = 1;
    }
    else if (exp == 50) {
        
        wallet += 1000;
        alert("congracts you reached level 1\nYour reward = 1000 coins")
    }
    else if (exp >= 100 && exp < 150) {
        level = 2;
    }
    else if (exp == 100) {
        
        wallet += 2000;
        alert("congracts you reached level 2\nYour reward = 2000 coins")
        }
    else if (exp >= 150 && exp < 200) {
        level = 3;
    }
    else if (exp == 150) {
        
        wallet += 3000;
        alert("congracts you reached level 3\nYour reward = 3000 coins")
        }
    else if (exp >= 200 && exp < 250) {
        level = 4;
    }
    else if (exp == 200) {
        
        wallet += 4000;
        alert("congracts you reached level 4\nYour reward = 4000 coins")
        }
    else if (exp >= 250 && exp < 300) {
        wallet += 5000;
    }
    else if (exp == 250) {
        
        alert("congracts you reached level 5\nYour reward = 5000 coins")
        level = 5;
        }
    else if (exp >= 300 && exp < 350) {
        level = 6;
    }
    else if (exp == 300) {
        
        wallet += 6000;
        alert("congracts you reached level 6\nYour reward = 6000 coins")
        }
    else if (exp >= 350 && exp < 400) {
        level = 7;
    }
    else if (exp == 350) {
        
        wallet +=7000;
        alert("congracts you reached level 1\nYour reward = 7000 coins")
        }
    else if (exp >= 400 && exp < 450) {
        level = 8;
    }
    else if (exp == 400) {
        wallet += 8000;
        alert("congracts you reached level 1\nYour reward = 8000 coins")
        }
    else if (exp >= 450 && exp < 500) {
        level = 9;
    }
    else if (exp == 450) {
        wallet += 9000;
        alert("congracts you reached level 1\nYour reward = 9000 coins")
        }
    else if (exp >= 500 && exp < 550) {
        level = 10 + "Max Level";
    }
    else if (exp == 500) {
        wallet += 200000;
        alert("congracts you reached level 10\nYour reward = 200000 coins")
        }
    else {
        level = level;
    }

}