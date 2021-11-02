
//Call below query after enter button is pressed on Search Bar
$("#searchInput").on('keypress',function (e) {

    if (e.keyCode == 13) {

       let searchterm = e.target.value.toLowerCase();
       var tr = document.getElementsByTagName("tr");

       let tableRows = $('#user-data').find('tr');
       tableRows.each(function (tabledata) {
           console.log(tabledata);
       })

       //Compare table data with the SearchTerm
       for(var i = 0; i < tr.length; i++) {

           var td = tr[i].getElementsByTagName('td');

           for(var j = 0; j < td.length; j++) {
               let tdata = td[j].innerHTML.toLowerCase();

                if(tdata.indexOf(searchterm) > -1) {
                    tr[i].style.display="";
                    break;
                    
                } else {
                    tr[i].style.display="none";
                }

           }
       }

      e.preventDefault();
      
    }
 });



