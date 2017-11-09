$(document).ready(function(){
    let currentlyLoggedInAs = localStorage.getItem("currentlyLoggedInAs");
    let users_assets = JSON.parse(localStorage.getItem(currentlyLoggedInAs + "_assets"));
    let searchQuery = localStorage.getItem("searchQuery");
    let searchQueryToLowerCase = searchQuery.toLowerCase();

    // iterate through all of the assts that the users own - filter them through the search query
    for(let i = 0; i < users_assets.length; i++){
        let itemNameToLowerCase = users_assets[i].itemName.toLowerCase();

        if(itemNameToLowerCase.indexOf(searchQueryToLowerCase) !== -1){
            $("#table_body_content").append(
                "<tr id=" + i + ">" + 
                    "<td>" + users_assets[i].itemName + "</td>" + 
                    "<td>" + 
                        "<a onclick='setIndexToDisplay(" + i + ")'>" + 
                            "<img src='" + users_assets[i].itemPicture + "' width='100' height='100' alt='Item image' class='img-thumbnail'/>" + 
                        "</a>" + 
                    "</td>" + 
                "</tr>"
            );
        }

    }
});

// When the user clicks on an image, this function determines what data to 
// display on the next page
function setIndexToDisplay(i){
    localStorage.setItem("indexToDisplay", i);
}
