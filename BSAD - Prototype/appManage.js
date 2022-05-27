document.getElementById("appResults").addEventListener("click", clickAppResult);
var selectedNode;


function searchTable() {

    var searchType = document.getElementById("searchSelect").value;

    var searchTypeIndex = 0;
    if (searchType == "ID") {
        searchTypeIndex = 0;
    } else if (searchType == "NAME") {
        searchTypeIndex = 1;
    }

    var searchInput = document.getElementById("searchInput").value.toLowerCase();
    var table = document.getElementById("appResults");
    var tableRow = table.getElementsByTagName("tr");

    for (i = 0; i < tableRow.length; i++) {
        var data = tableRow[i].getElementsByTagName("td")[searchTypeIndex];
        if (data) {
            var tableId = data.innerText.toLowerCase();
            if (tableId.indexOf(searchInput) == -1) {
                tableRow[i].style.display = "none";
            } else {
                tableRow[i].style.display = "";
            }
        }
    }

}

function clickAppResult(event) {

    if (event.target.nodeName === "TD") {
        if (selectedNode) {
            selectedNode.style.backgroundColor = "";
        }

        selectedNode = event.target.parentNode;
        selectedNode.style.backgroundColor = "#707070"
    }


}