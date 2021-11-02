
//enable edit row feature on clicking edit icon
$('#user-data').on('click','.edit',function(){

    let rowData = $(this).parents('tr').find('td');

    $(this).closest('tr').css('background-color','rgb(227, 223, 211)');

    $.each(rowData, function(){

        $(this).prop('contenteditable',true);
        let editButton = $(this).find("#editEntry");
        let editHtml = document.getElementById('editEntry');
        console.log(editHtml);

        editHtml.innerHTML = `<button>Save</button>`;

        if(editButton.hasClass("edit")) {
            console.log("True");
            editButton.addClass("save").removeClass("edit");
        }

    });


    //save row data after clicking on Save button
    $('#user-data').on('click', ".save", function(){
        console.log("save");
        $.each(rowData, function(){

            $(this).prop('contenteditable',false);
            let editButton = $(this).find("#editEntry");
            let editHtml = document.getElementById('editEntry');

            editHtml.innerHTML = `<button>Edit</button>`;

            if(editButton.hasClass("save")) {
                console.log("True");
                editButton.addClass("edit").removeClass("save");
            }

        })
        
        alert("Row updated successfully");
    })
    
})  