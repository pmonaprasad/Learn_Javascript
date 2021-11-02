
//delete rows with selected checkboxes
function deleteSelectedRows(checkedInputs){

    let tableRef = document.getElementById("user-data");

    for(let k=checkedInputs.length-1; k>=0; k--){
        let deleteIndex = checkedInputs[k];

        console.log(checkedInputs[k], deleteIndex);
        tableRef.deleteRow(deleteIndex);

    }

}



 //delete row on clicking delete icon
 $('#user-data').on('click', '#deleteEntry', function(){

    var tabledata = document.getElementById('user-data');
    var index = $(this).closest('tr').index();
    $(this).closest('tr').toggleClass('.rows-selected');
    tabledata.deleteRow(index);
    
    alert('Row Deleted Successfully');

});

export {deleteSelectedRows};