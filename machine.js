function getShow(id) {
    let allSection = document.getElementById('all-section');
    let notAvailable = document.getElementById('not-available');
    let interviewSection = document.getElementById('interview-section');
    let rejectedSection = document.getElementById('rejected-section');

    allSection.style.display = "none";
    interviewSection.style.display = "none";
    rejectedSection.style.display = "none";

    let select = document.getElementById(id);
    select.style.display = "block";
    if (allSection.length === 0) {
        notAvailable.style.display = "block";
    } else {
        notAvailable.style.display = "none";
    }
}
// let count = document.getElementById('count');
function getCount () {
    let count = document.getElementById('count');
    return count;
}