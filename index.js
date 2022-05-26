// function reportWindowSize(){
//     if(window.innerWidth === 956){
//         location.reload();
//     }
//     console.log(window.innerWidth)
// }
// window.onresize = reportWindowSize;

    // request to pull the google sheet
    let menuCSV = [];
    const req = new XMLHttpRequest();
    req.open("GET", 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSOhUtgq_YsSO7egE450S1KSVAx44W1gSjG1HPs_6RPfW64Fzrx7IrJUrbByVPIGv0pggi-NIa8k_0h/pub?output=csv', true);
    req.send();
    req.onload = function () {
        menuCSV = CSVToArray(req.response)// translating the CSV into Arrays
        logMenu(menuCSV)
    };

    const menuList = [];//dictionary for the menu objects
    const menuLookup = {}; //hash table for menu objects
    function logMenu(passedList) {// passing the array of menu items into the Menu populating function.
        menuCSV = passedList;
        fillMenu(passedList)
    }
    function fillMenu(passMenu) {
        menuCSV.forEach(e => { // reading the stored array of menu items and determining what category they belong to.
            if (e[5] === 'Single item') {
                menuList.push(new MenuItem(e[0], e[1], e[2], e[3], e[4]));
                menuLookup[e[0].split(' ').join(' ')] = new MenuItem(e[0], e[1], e[2], e[3], e[4]);
                menuLookup[e[0].split(' ').join(' ')].popListing();
            } else if (e[5] === 'Food Category') {
                menuList.push(new Category(e[0], e[1], e[2], e[3], e[4]));
                menuLookup[e[0].split(' ').join(' ')] = new Category(e[0], e[1], e[2], e[3], e[4]);
                menuLookup[e[0].split(' ').join(' ')].popListing();
            } else if (e[5] === 'Description') {
                menuList.push(new Description(e[0], e[1], e[2], e[3], e[4]));
                menuLookup[e[0].split(' ').join(' ')] = new Description(e[0], e[1], e[2], e[3], e[4]);
                menuLookup[e[0].split(' ').join(' ')].popListing();
            } else if (e[5] === 'Category Pizza') {
                menuList.push(new PizzaTable(e[0], e[1], e[2], e[3], e[4]));
                menuLookup[e[0].split(' ').join(' ')] = new PizzaTable(e[0], e[1], e[2], e[3], e[4]);
                menuLookup[e[0].split(' ').join(' ')].popListing();
            } else if (e[5] === 'Pizza listing') {
                menuList.push(new PizzaItem(e[0], e[1], e[2], e[3], e[4]));
                menuLookup[e[0].split(' ').join(' ')] = new PizzaItem(e[0], e[1], e[2], e[3], e[4]);
                menuLookup[e[0].split(' ').join(' ')].popListing();
            } else if (e[5] === 'Category Deep Dish') {
                menuList.push(new DeepDishTable(e[0], e[1], e[2], e[3], e[4]));
                menuLookup[e[0].split(' ').join(' ')] = new DeepDishTable(e[0], e[1], e[2], e[3], e[4]);
                menuLookup[e[0].split(' ').join(' ')].popListing();
            } else if (e[5] === 'Deep Dish listing') {
                menuList.push(new DeepDishItem(e[0], e[1], e[2], e[3], e[4]));
                menuLookup[e[0].split(' ').join(' ')] = new DeepDishItem(e[0], e[1], e[2], e[3], e[4]);
                menuLookup[e[0].split(' ').join(' ')].popListing();
            } else if (e[5] === 'Category Special Pizzas') {
                menuList.push(new SpecialPizzaTable(e[0], e[1], e[2], e[3], e[4]));
                menuLookup[e[0].split(' ').join(' ')] = new SpecialPizzaTable(e[0], e[1], e[2], e[3], e[4]);
                menuLookup[e[0].split(' ').join(' ')].popListing();
            } else if (e[5] === 'Special Pizza Listing') {
                menuList.push(new SpecialPizzaItem(e[0], e[1], e[2], e[3], e[4]));
                menuLookup[e[0].split(' ').join(' ')] = new SpecialPizzaItem(e[0], e[1], e[2], e[3], e[4]);
                menuLookup[e[0].split(' ').join(' ')].popListing();
            } else if (e[5] === 'Hogies') {
                menuList.push(new SandwichTable(e[0], e[1], e[2], e[3], e[4]));
                menuLookup[e[0].split(' ').join(' ')] = new SandwichTable(e[0], e[1], e[2], e[3], e[4]);
                menuLookup[e[0].split(' ').join(' ')].popListing();
            } else if (e[5] === 'Hogie Listing') {
                menuList.push(new SandwichItem(e[0], e[1], e[2], e[3], e[4]));
                menuLookup[e[0].split(' ').join(' ')] = new SandwichItem(e[0], e[1], e[2], e[3], e[4]);
                menuLookup[e[0].split(' ').join(' ')].popListing();
            } else if (e[5] === 'Addon') {
                menuList.push(new Addon(e[0], e[1], e[2], e[3], e[4]));
                menuLookup[e[0].split(' ').join(' ')] = new Addon(e[0], e[1], e[2], e[3], e[4]);
                menuLookup[e[0].split(' ').join(' ')].popListing();
            } else if (e[5] === 'Note') {
                menuList.push(new Note(e[0], e[1], e[2], e[3], e[4]));
                menuLookup[e[0].split(' ').join(' ')] = new Note(e[0], e[1], e[2], e[3], e[4]);
                menuLookup[e[0].split(' ').join(' ')].popListing();
            } else if (e[5] === 'Toppings') {
                menuList.push(new Toppings(e[0], e[1], e[2], e[3], e[4]));
                menuLookup[e[0].split(' ').join(' ')] = new Toppings(e[0], e[1], e[2], e[3], e[4]);
                menuLookup[e[0].split(' ').join(' ')].popListing();
            }
        });
    }
    class MenuItem { // mother class of most items takes all the available data 
        constructor(itemName, price, mediumPrice, largePrice, extraInfo) {
            this.itemName = itemName;
            this.price = price;
            this.mediumPrice = mediumPrice;
            this.largePrice = largePrice;
            this.extraInfo = extraInfo;
        }
        popListing() {
            const newDiv = document.createElement("div");
            const newName = document.createElement('p');
            const br = document.createElement('br');
            const newPrice = document.createElement('p');
            const name = document.createTextNode(`${this.itemName}`)
            const price = document.createTextNode(`${this.price}`)
            newDiv.setAttribute("id", `${this.itemName.split(' ').join('')}`);
            newDiv.setAttribute("class", "text-center food-item  col-xs-12 col-sm-6");
            newName.setAttribute("class", "bold");
            newName.appendChild(name);
            newPrice.appendChild(price);
            newDiv.appendChild(newName);
            newDiv.appendChild(newPrice);
            if(this.largePrice != ""){
                const newStrong = document.createElement('p');
                const newBr = document.createElement('br');
                const newEmContent = document.createTextNode(`${this.largePrice}`);
                newStrong.setAttribute("class", "sizes")
                newStrong.appendChild(newEmContent);
                newDiv.appendChild(newStrong);
            }
            if(this.mediumPrice != ""){
                const newEm = document.createElement('em');
                const newBr = document.createElement('br');
                const newEmContent = document.createTextNode(`${this.mediumPrice}`);
                newEm.setAttribute("class", "addon")
                newEm.appendChild(newEmContent);

                newDiv.appendChild(newEm);
            }
            menu.appendChild(newDiv)
        }
    }
    class Toppings extends MenuItem {
        constructor(itemName, price, mediumPrice, largePrice, extraInfo) {
            super(itemName, price, mediumPrice, largePrice, extraInfo)
        }
        popListing() {
            const newDiv = document.createElement("div");
            const newContent = document.createTextNode(`${this.itemName}`);
            newDiv.setAttribute("id", `${this.itemName.split(' ').join('')}`);
            newDiv.setAttribute("class", " topping col-12");
            newDiv.appendChild(newContent);
            menu.appendChild(newDiv)
        }
    }
    class Category extends MenuItem {
        constructor(itemName, price, mediumPrice, largePrice, extraInfo) {
            super(itemName, price, mediumPrice, largePrice, extraInfo)
        }
        popListing() {
            const newDiv = document.createElement("h2");
            const newContent = document.createTextNode(`${this.itemName}`);
            newDiv.setAttribute("id", `${this.itemName.split(' ').join('')}`);
            newDiv.setAttribute("class", " food-cat col-12  ");
            newDiv.appendChild(newContent);
            menu.appendChild(newDiv)
        }
    }
    class Description extends MenuItem {
        constructor(itemName, price, mediumPrice, largePrice, extraInfo) {
            super(itemName, price, mediumPrice, largePrice, extraInfo)
        }
        popListing() {
            const newDiv = document.createElement("div");
            const style = document.createElement("em");
            const newContent = document.createTextNode(`🍕${this.itemName}`);
            style.appendChild(newContent)
            newDiv.setAttribute("id", `${this.itemName.split(' ').join('')}`);
            newDiv.setAttribute("class", "text-center h5 col-lg-12 ");
            newDiv.appendChild(style);
            menu.appendChild(newDiv)
        }
    }
    class Addon extends MenuItem {
        constructor(itemName, price, mediumPrice, largePrice, extraInfo) {
            super(itemName, price, mediumPrice, largePrice, extraInfo)
        }
        popListing() {
            const newDiv = document.createElement("div");
            const style = document.createElement("em");
            const newContent = document.createTextNode(`🍕${this.itemName} ${this.price}`);
            style.appendChild(newContent)
            newDiv.setAttribute("id", `${this.itemName.split(' ').join('')}`);
            newDiv.setAttribute("class", "text-center addon col-lg-12 ");
            newDiv.appendChild(style);
            menu.appendChild(newDiv)
        }
    }
    class Note extends MenuItem {
        constructor(itemName, price, mediumPrice, largePrice, extraInfo) {
            super(itemName, price, mediumPrice, largePrice, extraInfo)
        }
        popListing() {
            const newDiv = document.createElement("div");
            const style = document.createElement("em");
            const newContent = document.createTextNode(`🍕${this.itemName}`);
            style.appendChild(newContent)
            newDiv.setAttribute("id", `${this.itemName.split(' ').join('')}`);
            newDiv.setAttribute("class", "text-center addon col-lg-12 ");
            newDiv.appendChild(style);
            menu.appendChild(newDiv)
        }
    }
    class PizzaTable extends MenuItem{
        constructor(itemName, price, mediumPrice, largePrice, extraInfo) {
            super(itemName, price, mediumPrice, largePrice, extraInfo)
        }
        popListing() {
            const newDiv = document.createElement('div');
            const newTable = document.createElement("table");
            const newDesRow = document.createElement("th");
            const newSmallRow = document.createElement("th");
            const newMedRow = document.createElement('th');
            const newLgRow = document.createElement('th');
            const newRow = document.createElement('tr');
            const newMainDes = document.createTextNode(`${this.itemName}`);
            const newSmDes = document.createTextNode(`${this.price}`);
            const newMdDes = document.createTextNode(`${this.mediumPrice}`);
            const newLgDes = document.createTextNode(`${this.largePrice}`);
            newDiv.setAttribute("id", `${this.itemName.split(' ').join(' ')}`);
            newDiv.setAttribute("class", "text-center  ");
            newTable.setAttribute("class", "text-center center col-lg-12 align-center ");
            newSmallRow.setAttribute("class", "text-center table-header");
            newMedRow.setAttribute("class", "text-center table-header");
            newLgRow.setAttribute("class", "text-center table-header");
            newTable.setAttribute("id", `pizzaMenu`);
            newDesRow.setAttribute("id", `lgPizza`);
            newSmallRow.setAttribute("id", `smallPizza`);
            newMedRow.setAttribute("id", `medPizza`);
            newLgRow.setAttribute("id", `lgPizza`);
            newDesRow.appendChild(newMainDes);
            newSmallRow.appendChild(newSmDes);
            newMedRow.appendChild(newMdDes);
            newLgRow.appendChild(newLgDes);

            newRow.appendChild(newDesRow);
            newRow.appendChild(newSmallRow);
            newRow.appendChild(newMedRow);
            newRow.appendChild(newLgRow);

            newTable.appendChild(newRow);
            menu.appendChild(newTable);
        }
    }
    class PizzaItem extends  MenuItem {
        constructor(itemName, price, mediumPrice, largePrice, extraInfo) {
            super(itemName, price, mediumPrice, largePrice, extraInfo)
        }
        popListing() {
            const newSmallRow = document.createElement("td");
            const newMedRow = document.createElement('td');
            const newLgRow = document.createElement('td');
            const newDesRow = document.createElement('td');
            const newRow = document.createElement('tr');
            const newSmDes = document.createTextNode(`${this.price}`);
            const newMdDes = document.createTextNode(`${this.mediumPrice}`);
            const newLgDes = document.createTextNode(`${this.largePrice}`);
            const newMainDes = document.createTextNode(`${this.itemName}`);
            newRow.setAttribute("id", `${this.itemName.split(' ').join('')}`);
            newDesRow.setAttribute("class", "table-item");
            newSmallRow.appendChild(newSmDes);
            newMedRow.appendChild(newMdDes);
            newLgRow.appendChild(newLgDes);
            newDesRow.appendChild(newMainDes);

            newRow.appendChild(newDesRow);
            newRow.appendChild(newSmallRow);
            newRow.appendChild(newMedRow);
            newRow.appendChild(newLgRow);

            pizzaMenu.appendChild(newRow);

        }
    }
    class DeepDishTable extends MenuItem{
        constructor(itemName, price, mediumPrice, largePrice, extraInfo) {
            super(itemName, price, mediumPrice, largePrice, extraInfo)
        }
        popListing() {
            const newDiv = document.createElement('div');
            const newTable = document.createElement("table");
            const newDesRow = document.createElement("th");
            const newSmallRow = document.createElement("th");
            const newMedRow = document.createElement('th');
            const newLgRow = document.createElement('th');
            const newRow = document.createElement('tr');
            const newMainDes = document.createTextNode(`${this.itemName}`);
            const newSmDes = document.createTextNode(`${this.price}`);
            const newMdDes = document.createTextNode(`${this.mediumPrice}`);
            const newLgDes = document.createTextNode(`${this.largePrice}`);
            newTable.setAttribute("class", "text-center center col-lg-12 align-center");
            newDiv.setAttribute("id", `${this.itemName.split(' ').join(' ')}`);
            newDiv.setAttribute("class", "text-center  col-lg-12 ");
            newSmallRow.setAttribute("class", "text-center table-header");
            newMedRow.setAttribute("class", "text-center table-header");
            newLgRow.setAttribute("class", "text-center table-header");
            newTable.setAttribute("id", `deepDishMenu`);
            newDesRow.setAttribute("id", `lgPizza`);
            newSmallRow.setAttribute("id", `smallPizza`);
            newMedRow.setAttribute("id", `medPizza`);
            newLgRow.setAttribute("id", `lgPizza`);
            newDesRow.appendChild(newMainDes);
            newSmallRow.appendChild(newSmDes);
            newMedRow.appendChild(newMdDes);
            newLgRow.appendChild(newLgDes);

            newRow.appendChild(newDesRow);
            newRow.appendChild(newSmallRow);
            newRow.appendChild(newMedRow);
            newRow.appendChild(newLgRow);

            newTable.appendChild(newRow);
            menu.appendChild(newTable);
            // menu.appendChild(newDiv);

        }
    }
    class DeepDishItem extends  MenuItem {
        constructor(itemName, price, mediumPrice, largePrice, extraInfo) {
            super(itemName, price, mediumPrice, largePrice, extraInfo)
        }
        popListing() {
            const newSmallRow = document.createElement("td");
            const newMedRow = document.createElement('td');
            const newLgRow = document.createElement('td');
            const newDesRow = document.createElement('td');
            const newRow = document.createElement('tr');
            const newSmDes = document.createTextNode(`${this.price}`);
            const newMdDes = document.createTextNode(`${this.mediumPrice}`);
            const newLgDes = document.createTextNode(`${this.largePrice}`);
            const newMainDes = document.createTextNode(`${this.itemName}`);
            newRow.setAttribute("id", `${this.itemName.split(' ').join('')}`);
            newDesRow.setAttribute("class", "table-item");
            newSmallRow.appendChild(newSmDes);
            newMedRow.appendChild(newMdDes);
            newLgRow.appendChild(newLgDes);
            newDesRow.appendChild(newMainDes);
            
            newRow.appendChild(newDesRow);
            newRow.appendChild(newSmallRow);
            newRow.appendChild(newMedRow);
            newRow.appendChild(newLgRow);

            deepDishMenu.appendChild(newRow);

        }
    }
    class SpecialPizzaTable extends MenuItem{
        constructor(itemName, price, mediumPrice, largePrice, extraInfo, tableLink) {
            super(itemName, price, mediumPrice, largePrice, extraInfo)
            this.link = tableLink;
        }
        popListing() {
            const newDiv = document.createElement('div');
            const newTable = document.createElement("table");
            const newDesRow = document.createElement("th");
            const newSmallRow = document.createElement("th");
            const newMedRow = document.createElement('th');
            const newLgRow = document.createElement('th');
            const newRow = document.createElement('tr');
            const newMainDes = document.createTextNode(`${this.itemName}`);
            const newSmDes = document.createTextNode(`${this.price}`);
            const newMdDes = document.createTextNode(`${this.mediumPrice}`);
            const newLgDes = document.createTextNode(`${this.largePrice}`);
            newTable.setAttribute("class", "text-center center col-lg-12 align-center");
            newDiv.setAttribute("id", `${this.itemName.split(' ').join(' ')}`);
            newDiv.setAttribute("class", "text-center  col-lg-12 ");
            newSmallRow.setAttribute("class", "text-center table-header");
            newMedRow.setAttribute("class", "text-center table-header");
            newLgRow.setAttribute("class", "text-center table-header");
            newTable.setAttribute("id", `specialPizzaMenu`);
            newDesRow.setAttribute("id", `lgPizza`);
            newSmallRow.setAttribute("id", `smallPizza`);
            newMedRow.setAttribute("id", `medPizza`);
            newLgRow.setAttribute("id", `lgPizza`);
            newDesRow.appendChild(newMainDes);
            newSmallRow.appendChild(newSmDes);
            newMedRow.appendChild(newMdDes);
            newLgRow.appendChild(newLgDes);

            newRow.appendChild(newDesRow);
            newRow.appendChild(newSmallRow);
            newRow.appendChild(newMedRow);
            newRow.appendChild(newLgRow);

            newTable.appendChild(newRow);
            menu.appendChild(newTable);
            // menu.appendChild(newDiv);

        }
    }
    class SpecialPizzaItem extends  MenuItem {
        constructor(itemName, price, mediumPrice, largePrice, extraInfo, tableLink) {
            super(itemName, price, mediumPrice, largePrice, extraInfo)
            this.link = tableLink;
        }
        popListing() {
            const newDesRow = document.createElement('td');
            const newSmallRow = document.createElement("td");
            const newMedRow = document.createElement('td');
            const newLgRow = document.createElement('td');
            const toppingsList = document.createElement('td')
            const newRow = document.createElement('tr');
            const newMainDes = document.createTextNode(`${this.itemName}`);
            const newSmDes = document.createTextNode(`${this.price}`);
            const newMdDes = document.createTextNode(`${this.mediumPrice}`);
            const newLgDes = document.createTextNode(`${this.largePrice}`);
            const toppingsfill = document.createTextNode(`${this.extraInfo}`)
            toppingsList.setAttribute("class", "addon")
            newRow.setAttribute("id", `${this.itemName.split(' ').join('')}`);
            newDesRow.setAttribute("class", "table-item");
            newDesRow.appendChild(newMainDes);
            newSmallRow.appendChild(newSmDes);
            newMedRow.appendChild(newMdDes);
            newLgRow.appendChild(newLgDes);
            toppingsList.appendChild(toppingsfill)

            newRow.appendChild(newDesRow);
            newRow.appendChild(newSmallRow);
            newRow.appendChild(newMedRow);
            newRow.appendChild(newLgRow);
            newRow.appendChild(toppingsList)
            let rocket = document.getElementById('specialPizzaMenu')
            rocket.appendChild(newRow);

        }
    }
    class SandwichTable extends MenuItem{
        constructor(itemName, price, mediumPrice, largePrice, extraInfo) {
            super(itemName, price, mediumPrice, largePrice, extraInfo)
        }
        popListing() {
            const newDiv = document.createElement('div');
            const newTable = document.createElement("table");
            const newDesRow = document.createElement("th");
            const newSmallRow = document.createElement("th");
            const newMedRow = document.createElement('th');
            const newRow = document.createElement('tr');
            const newMainDes = document.createTextNode(`${this.itemName}`);
            const newSmDes = document.createTextNode(`${this.price}`);
            const newMdDes = document.createTextNode(`${this.mediumPrice}`);
            newTable.setAttribute("class", "text-center  col align-center center");
            newDiv.setAttribute("id", `${this.itemName.split(' ').join(' ')}`);
            newSmallRow.setAttribute("class", "text-center table-header");
            newMedRow.setAttribute("class", "text-center table-header");
            newDiv.setAttribute("class", "text-center  col-lg-12 ");
            newTable.setAttribute("id", `sandMenu`);
            newDesRow.setAttribute("id", `lgPizza`);
            newSmallRow.setAttribute("id", `smallPizza`);
            newMedRow.setAttribute("id", `medPizza`);

            newDesRow.appendChild(newMainDes);
            newSmallRow.appendChild(newSmDes);
            newMedRow.appendChild(newMdDes);


            newRow.appendChild(newDesRow);
            newRow.appendChild(newSmallRow);
            newRow.appendChild(newMedRow);

            newTable.appendChild(newRow);
            menu.appendChild(newTable);
            // menu.appendChild(newDiv);

        }
    }
    class SandwichItem extends  MenuItem {
        constructor(itemName, price, mediumPrice, largePrice, extraInfo) {
            super(itemName, price, mediumPrice, largePrice, extraInfo)
        }
        popListing() {
            const newSmallRow = document.createElement("td");
            const newMedRow = document.createElement('td');
            const newLgRow = document.createElement('td');
            const newDesRow = document.createElement('td');
            const newRow = document.createElement('tr');
            const newSmDes = document.createTextNode(`${this.price}`);
            const newMdDes = document.createTextNode(`${this.mediumPrice}`);
            const newLgDes = document.createTextNode(`${this.largePrice}`);
            const newMainDes = document.createTextNode(`${this.itemName}`);
            newRow.setAttribute("id", `${this.itemName.split(' ').join('')}`);
            newDesRow.setAttribute("class", "table-item");
            newSmallRow.appendChild(newSmDes);
            newMedRow.appendChild(newMdDes);
            newLgRow.appendChild(newLgDes);
            newDesRow.appendChild(newMainDes);

            newRow.appendChild(newDesRow);
            newRow.appendChild(newSmallRow);
            newRow.appendChild(newMedRow);
            newRow.appendChild(newLgRow);

            sandMenu.appendChild(newRow);

        }
    }

    let menuItemsList = [];


