

import {pagination, pageButtons, state} from "./pagination.js";

async function init() {

    let adminDetails = await fetchAdminDetails();
    return adminDetails;

}



//calling API
async function fetchAdminDetails() {

  try {
    var adminInfo = await fetch(
      "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json"
    );

    var adminInfoList = adminInfo.json();
    return adminInfoList;

  } catch (error) {
    return null;
  }
}



//Show admin details 
function addAdminDetails(adminDetails) {

    //clear selected checkbox on page change
    let mainCheckbox = document.getElementById('main-checkbox');

    if(mainCheckbox.checked === true) {
        mainCheckbox.checked = false;
    }

   var data = pagination(adminDetails, state.page, state.rows);
   var adminData = data.queryList;

// var dataTable = adminDetails;
    console.log(adminDetails);
    adminData.map((key) => {

        let tRow = document.createElement("tr");
        // tRow.className = "pt-5 pb-5";

        tRow.innerHTML = `<td><input class="rows-checked nohover" type="checkbox"></td>
            <td>${key.name}</td>
            <td>${key.email}</td>
            <td>${key.role}</td>
            <td>
                <a href="#" id="editEntry" class="edit">
                <button>Edit</button>
                </a>
                <a href="#" id="deleteEntry">
                <button>Delete</button>
                </a>
            </td>
        `;

    document.getElementById("user-data").appendChild(tRow);
  });

   pageButtons(data.pages, adminDetails);
}



//Toggle checkbox selection depending on main-checkbox
$('#main-checkbox').click(function (e) {
    var selected = this.checked;
    $(':checkbox').each( function () {
        this.checked = selected;
        $(this).closest('tr').toggleClass('rows-selected');
        
    })
})

// $('.rows-checked').on('click', function () {
//     $(this).closest('tr').toggleClass('rows-selected');



export {init, fetchAdminDetails, addAdminDetails};