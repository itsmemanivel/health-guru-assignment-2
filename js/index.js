var table = document.getElementById("table");


function upNdown(direction) {


    getSelectedRow();


    setTimeout(move.bind(null, direction), 100);



}





var index;

function getSelectedRow() {

    var table = document.getElementById("table");



    for (var i = 1; i < table.rows.length; i++) {

        table.rows[i].onclick = function() {

            if (typeof index !== "undefined") {
                table.rows[index].classList.toggle("selected");
            }

            index = this.rowIndex;
            this.classList.toggle("selected");
            console.log(index);

        }





    }
}



function move(direction) {

    var rows = document.getElementById("table").rows,
        parent = rows[index].parentNode;


    console.log(rows[index])
    if (direction === "up") {
        if (index > 1) {
            parent.insertBefore(rows[index], rows[index - 1]);
            // when the row go up the index will be equal to index - 1
            index--;
        }
    }

    if (direction === "down") {
        if (index < rows.length - 1) {
            parent.insertBefore(rows[index + 1], rows[index]);
            // when the row go down the index will be equal to index + 1
            index++;
        }
    }

}