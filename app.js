// Add DOM selectors to target input and UL movie list
var inp = document.querySelector("input");
var myMovieList = document.querySelector("ul");
var mList = {};



// Example of a simple function that clears the input after a user types something in
function clearInput() {
    inp.value = "";
}

function clearMovies() {
    // To delete all children of the <ul></ul> (meaning all <li>'s)..we can wipe out the <ul>'s innerHTML
    myMovieList.innerHTML = '';
}

// This function is executed when the user clicks [ADD MOVIE] button.
function addMovie() {
    var row = document.createElement("tr");

    if ([inp.value] in mList){
        //adds counter to the table
        mList[inp.value]+=1;
        console.log(inp.value + ' ' + mList[inp.value]);
        row.innerHTML = inp.value + (mList[inp.value]);
    
    }
    else {
  

        // Step 1: Get value of input
        var userTypedText = inp.value;
        // Step 2: Create an empty <li></li>
        var li = document.createElement("li"); // <li></li>

        // Step 3: Prepare the text we will insert INTO that li ^...example: Harry Potter
        var textToInsert = document.createTextNode(userTypedText);

        // Step 4: Insert text into li
        // <li>Harry Potter </li>
        li.appendChild(textToInsert);

        // Step 5: Insert the <li>Harry Potter</li> INTO the <ul>
        myMovieList.appendChild(li);

        // Step 6: Call the clearInput function to clear the input field
        // clearInput();
        var movieTable = document.getElementById("movieTable");

        var tableBody = document.createElement("tbody");

        //empty array to push list for tabulating
        mList[inp.value] = 1;
        console.log(inp.value + ' ' + mList[inp.value]);

        // console.log("hello: " + mList);

        //row addition
        row.innerHTML = inp.value + ' ' + (mList[inp.value]);
        document.getElementById("tbl").appendChild(row);
        tableBody.appendChild(row);

        table.appendChild(tableBody);
        // add table into table tag
        movieTable.appendChild(table);
        table.setAttribute("border", "2");
    
    }
}

  //add table and table body
  var table = document.createElement("TABLE");
  table.setAttribute("id", "tbl");
  document.getElementById("movieTable").appendChild(table);

  // header for table
  var h1 = document.createElement("th");
  h1.innerHTML = "<b> Movie Name </b>"
  document.getElementById("tbl").appendChild(h1);
  var h2 = document.createElement("th");
  h2.innerHTML = "<b> Times Watched </b>"
  document.getElementById("tbl").appendChild(h2);


function localStore() {
    //set items
    localStorage.setItem("mList", JSON.stringify(mList));
}

function loading() {
     mList = JSON.parse(localStorage.getItem(mList));

}
