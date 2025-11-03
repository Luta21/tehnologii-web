// Selectăm primul, ultimul și rândurile impare
let firstRow = document.querySelector("tbody tr:first-child");
let lastRow = document.querySelector("tbody tr:last-child");
let oddRows = document.querySelectorAll("tbody tr:nth-child(odd)");

// Primul rând - albastru
if(firstRow){
    firstRow.style.backgroundColor = "blue";
}

// Ultimul rând - verde
if(lastRow){
    lastRow.style.backgroundColor = "green";
}

// Rândurile impare - violet (atenție să nu suprascrii primul și ultimul)
if(oddRows && oddRows.length > 0){
    for(let item of oddRows){
        // Evităm primul și ultimul rând
        if(item !== firstRow && item !== lastRow){
            item.style.backgroundColor = "violet";
        }
    }
}
