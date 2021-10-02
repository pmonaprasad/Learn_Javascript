const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

let ticketPrice = +movieSelect.value;

populateUI();

function populateUI() {
    const getSeatsSelected = JSON.parse(localStorage.getItem('seatsSelectedIndex'));

    if(getSeatsSelected !== null && getSeatsSelected.length > 0){
        seats.forEach((seat,index) => {
            if(getSeatsSelected.indexOf(index) > -1){
                seat.classList.add('selected');
            }
        });
    }

    const getMovieSelected = localStorage.getItem('movieSelected');
    if(getMovieSelected !== null) {
        movieSelect.selectedIndex = getMovieSelected;
    }
}

//update localStorage for movies selected
function setMovieInfo(movieIndex, moviePrice) {
    localStorage.setItem('movieSelected',movieIndex);
    localStorage.setItem('priceSelected',moviePrice);
}

// Update count and total cost of tickets for selected movie
function updateSelectedCount(){
    const seatsSelected = document.querySelectorAll('.row .seat.selected');

    const seatsSelectedIndex = [...seatsSelected].map(seat => [...seats].indexOf(seat));
    console.log(seatsSelectedIndex, seatsSelected);
    localStorage.setItem('seatsSelectedIndex',JSON.stringify(seatsSelectedIndex));

    const seatSelectedCount = seatsSelected.length;
    count.innerText = seatSelectedCount;
    total.innerText = seatSelectedCount * ticketPrice;

    setMovieInfo(movieSelect.selectedIndex, movieSelect.value);
    //persistent storage

}

//movie select event 
movieSelect.addEventListener('change', e => {
    ticketPrice = +e.target.value;
    updateSelectedCount();
})

container.addEventListener('click', e => {
    if(e.target.classList.contains('seat') && !(e.target.classList.contains('occupied')))
    {
        e.target.classList.toggle('selected');
        updateSelectedCount();
    }
});

//set intial count and cost of movie
updateSelectedCount();