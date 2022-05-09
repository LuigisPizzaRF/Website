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
        // for (const rocket of menuCSV) {
        //     const newDiv = document.createElement("div");
        //     // and give it some content
        //     const newContent = document.createTextNode(`${rocket[0]} ${rocket[1]}`);
        //     newDiv.setAttribute("id", `${rocket[0].split(' ').join('')}`);
        //     newDiv.setAttribute("class", "text-center h5 col-lg-4")
        //     // add the text node to the newly created div
        //     newDiv.appendChild(newContent);
        //     if (rocket[1] === "") {
        //         newDiv.setAttribute("class", "text-center h3 col-lg-12")
        //     }
        //     // add the newly created element and its content into the DOM
        //     const currentDiv = document.getElementById("menu");
        //     menu.appendChild(newDiv)
        //     if(loaded!=true){
        //         logMenu(menuCSV)
        //         loaded = true;
        //     }
        //     // document.body.insertBefore(newDiv, currentDiv);
        // }
    };
    
    const menuList = [];
    const menuLookup = {};
    function logMenu(passedList){
        menuCSV = passedList;
        console.log(menuCSV)
        fillMenu(passedList)
    }
    function fillMenu(passMenu) {
        menuCSV.forEach(e => {
            console.log(e[0]);
          menuList.push(new MenuItem(e[0], e[1]));
          menuLookup[e[0].split(' ').join('')] = new MenuItem(e[0], e[1]);
          menuLookup[e[0].split(' ').join('')].popListing()
        });
    }
    class MenuItem {
        constructor(itemName, price) {
            this.itemName = itemName;
            this.price = price;
        }
        popListing() {
            const newDiv = document.createElement("div");
            const newContent = document.createTextNode(`${this.itemName} ${this.price}`);
            newDiv.setAttribute("id", `${this.itemName.split(' ').join('')}`);
            newDiv.setAttribute("class", "text-center h5 col-lg-4");
            newDiv.appendChild(newContent);
            menu.appendChild(newDiv)
        }
    }
    class Category {
        constructor(itemName, price) {
            this.itemName = itemName;
            this.price = price;
        }
        popListing() {
            const newDiv = document.createElement("div");
            const newContent = document.createTextNode(`${this.itemName} ${this.price}`);
            newDiv.setAttribute("id", `${this.itemName.split(' ').join('')}`);
            newDiv.setAttribute("class", "text-center h3 col-lg-12");
            newDiv.appendChild(newContent);
            menu.appendChild(newDiv)
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
