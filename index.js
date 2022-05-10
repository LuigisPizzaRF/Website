//Example fetch using .
document.addEventListener('DOMContentLoaded', () => {
    let loaded = false;
    let menuCSV = [];
    const req = new XMLHttpRequest();
    req.open("GET", 'testMenu.csv', true);
    req.send();
    req.onload = function () {
        menuCSV = CSVToArray(req.response)
        logMenu(menuCSV)
    };

    const menuList = [];
    const menuLookup = {};
    function logMenu(passedList) {
        menuCSV = passedList;
        console.log(menuCSV)
        fillMenu(passedList)
    }
    function fillMenu(passMenu) {
        menuCSV.forEach(e => {
            console.log(e[5]);
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
            }
        });
    }
    class MenuItem {
        constructor(itemName, price, mediumPrice, largePrice, extraInfo) {
            this.itemName = itemName;
            this.price = price;
            this.mediumPrice = mediumPrice;
            this.largePrice = largePrice;
            this.extraInfo = extraInfo;
        }
        popListing() {
            const newDiv = document.createElement("div");
            const newContent = document.createTextNode(`${this.itemName} ${this.price}`);
            newDiv.setAttribute("id", `${this.itemName.split(' ').join('')}`);
            newDiv.setAttribute("class", "text-center h4 col-lg-4");
            newDiv.appendChild(newContent);
            menu.appendChild(newDiv)
        }
    }
    class Category extends MenuItem {
        constructor(itemName, price, mediumPrice, largePrice, extraInfo) {
            super(itemName, price, mediumPrice, largePrice, extraInfo)
        }
        popListing() {
            const newDiv = document.createElement("div");
            const newContent = document.createTextNode(`${this.itemName}`);
            newDiv.setAttribute("id", `${this.itemName.split(' ').join('')}`);
            newDiv.setAttribute("class", "text-center h2 col-lg-12 font-bold");
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
            newDiv.setAttribute("class", "text-center h2 row justify-content-center");
            newTable.setAttribute("class", "col-xs-12 text-center h2 align-center");
            newSmallRow.setAttribute("class", "text-center");
            newMedRow.setAttribute("class", "text-center");
            newLgRow.setAttribute("class", "text-center");
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
            newDiv.appendChild(newTable);
            menu.appendChild(newDiv);

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
            newDesRow.setAttribute("class", "small");
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
            newTable.setAttribute("class", "text-center h2 col-lg-12 align-center");
            newDiv.setAttribute("id", `${this.itemName.split(' ').join(' ')}`);
            newDiv.setAttribute("class", "text-center h2 col-lg-12 ");
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
            newDiv.appendChild(newTable);
            menu.appendChild(newDiv);

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
            newTable.setAttribute("class", "text-center h2 col-lg-12 align-center");
            newDiv.setAttribute("id", `${this.itemName.split(' ').join(' ')}`);
            newDiv.setAttribute("class", "text-center h2 col-lg-12 ");
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
            newDiv.appendChild(newTable);
            menu.appendChild(newDiv);

        }
    }
    class SpecialPizzaItem extends  MenuItem {
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
            newSmallRow.appendChild(newSmDes);
            newMedRow.appendChild(newMdDes);
            newLgRow.appendChild(newLgDes);
            newDesRow.appendChild(newMainDes);

            newRow.appendChild(newDesRow);
            newRow.appendChild(newSmallRow);
            newRow.appendChild(newMedRow);
            newRow.appendChild(newLgRow);

            specialPizzaMenu.appendChild(newRow);

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
            const newLgRow = document.createElement('th');
            const newRow = document.createElement('tr');
            const newMainDes = document.createTextNode(`${this.itemName}`);
            const newSmDes = document.createTextNode(`${this.price}`);
            const newMdDes = document.createTextNode(`${this.mediumPrice}`);
            const newLgDes = document.createTextNode(`${this.largePrice}`);
            newTable.setAttribute("class", "text-center h2 col align-center");
            newDiv.setAttribute("id", `${this.itemName.split(' ').join(' ')}`);
            newDiv.setAttribute("class", "text-center h2 col-lg-12 ");
            newTable.setAttribute("id", `sandMenu`);
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
            newDiv.appendChild(newTable);
            menu.appendChild(newDiv);

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
    function CSVToArray(strData, strDelimiter) {
        // Check to see if the delimiter is defined. If not,
        // then default to comma.
        strDelimiter = (strDelimiter || ",");

        // Create a regular expression to parse the CSV values.
        var objPattern = new RegExp(
            (
                // Delimiters.
                "(\\" + strDelimiter + "|\\r?\\n|\\r|^)" +
                // Quoted fields.
                "(?:\"([^\"]*(?:\"\"[^\"]*)*)\"|" +
                // Standard fields.
                "([^\"\\" + strDelimiter + "\\r\\n]*))"
            ),
            "gi"
        );
        // Create an array to hold our data. Give the array
        // a default empty first row.
        var arrData = [[]];
        // Create an array to hold our individual pattern
        // matching groups.
        var arrMatches = null;
        // Keep looping over the regular expression matches
        // until we can no longer find a match.
        while (arrMatches = objPattern.exec(strData)) {
            // Get the delimiter that was found.
            var strMatchedDelimiter = arrMatches[1];
            // Check to see if the given delimiter has a length
            // (is not the start of string) and if it matches
            // field delimiter. If id does not, then we know
            // that this delimiter is a row delimiter.
            if (
                strMatchedDelimiter.length &&
                strMatchedDelimiter !== strDelimiter
            ) {
                // Since we have reached a new row of data,
                // add an empty row to our data array.
                arrData.push([]);
            }
            var strMatchedValue;
            // Now that we have our delimiter out of the way,
            // let's check to see which kind of value we
            // captured (quoted or unquoted).
            if (arrMatches[2]) {
                // We found a quoted value. When we capture
                // this value, unescape any double quotes.
                strMatchedValue = arrMatches[2].replace(
                    new RegExp("\"\"", "g"),
                    "\""
                );
            } else {
                // We found a non-quoted value.
                strMatchedValue = arrMatches[3];
            }
            // Now that we have our value string, let's add
            // it to the data array.
            arrData[arrData.length - 1].push(strMatchedValue);
        }
        // Return the parsed data.

        return (arrData);
    }
});
