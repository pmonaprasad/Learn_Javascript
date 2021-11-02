
import {addAdminDetails} from "./admin_page.js";

var state = {
    'page' : 1,
    'rows' : 10,
    'window' : 5,
}

//implement pagination functionality
function pagination(queryList, page, rows) {

    var trimStart = (page - 1) * rows;
    var trimEnd = trimStart + rows;
    var trimmedData = queryList.slice(trimStart, trimEnd);
    var pages = Math.round(queryList.length / rows);

    return {
        'queryList' : trimmedData,
        'pages' : pages,
        }
}

//create pageButtons and page must change on clicking buttons
function pageButtons(pages, adminDetails) {

    let paginationDisplay = document.getElementById('pagination-display');
    
    paginationDisplay.innerHTML=``;

    //Keep a check of visited and not visited pages
    var left = (state.page - Math.floor(state.window / 2))
    var right = (state.page + Math.floor(state.window / 2))

    if(left < 1) {
        left = 1;
        right = state.window;
    }

    if(right > pages) {
        left = pages - (state.window - 1);

        if(left < 1) {
            left = 1;
        }
        right = pages;
    }


    //Create page buttons
    for(var page = left; page <= right; page ++){
        
        paginationDisplay.innerHTML += `<button value=${page}
        class="page btn btn-sm">${page}</button>`;
    }

        if(state.page != 1) {
            paginationDisplay.innerHTML = `<button value=${1}
            class="page btn btn-sm end-button">&laquo; First</button>` + paginationDisplay.innerHTML;
        }

        if(state.page != pages) {
            paginationDisplay.innerHTML += `<button value=${pages}
            class="page btn btn-sm end-button">Last &#187;</button>`;
        }


    //Change page after page button click event
    $('.page').on('click', function() {
        $('#user-data').empty();
        state.page = Number($(this).val());
        addAdminDetails(adminDetails);
    })
}


export {pagination, pageButtons, state};