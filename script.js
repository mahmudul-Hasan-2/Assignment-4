let addButton = document.getElementById('all-btn');
let interviewButton = document.getElementById('interview-btn');
let rejectedButton = document.getElementById('rejected-btn');
let deleteButton = document.getElementById('delete-button');
let interviewCount = document.getElementById('interview-count');
let allCount = document.getElementById('all-count');
let rejectedCount = document.getElementById('rejected-count');
let count = 0;
let interviews = document.getElementsByClassName('interview');
let rejecteds = document.getElementsByClassName('rejected');
let notApplieds = document.querySelectorAll('.btn-applied');

addButton.addEventListener('click', function () {
    addButton.classList.add('btn-bg');
    interviewButton.classList.remove('btn-bg');
    rejectedButton.classList.remove('btn-bg');

    let allSection = document.getElementById('all-section');
    let count = document.getElementById('count');
    let allCount = document.getElementById('all-count');
    allCount.innerText = allSection.children.length;
    count.innerText = allSection.children.length;
});
interviewButton.addEventListener("click", function () {
    addButton.classList.remove('btn-bg');
    interviewButton.classList.add('btn-bg');
    rejectedButton.classList.remove('btn-bg');
    let box = document.getElementById('#interview-section');
    let interviewCount = document.getElementById('interview-count');
    interviewCount.innerText = box.children.length;
    getCount().innerText = box.children.length;
})
rejectedButton.addEventListener('click', function () {
    addButton.classList.remove('btn-bg');
    interviewButton.classList.remove('btn-bg');
    rejectedButton.classList.add('btn-bg');
    let count = document.getElementById('count');
    let box = document.querySelectorAll('#rejected-section .box');
    let rejectedCount = document.getElementById('rejected-count');
    rejectedCount.innerText = box.length;
    count.innerText = box.length;
});

for (let interview of interviews) {
    interview.addEventListener('click', function () {
        interviewCount.innerText = parseInt(interviewCount.innerText) + 1;
        allCount.innerText = parseInt(allCount.innerText) - 1;
        getCount().innerText = interviewCount.innerText;
        if (interviewCount.innerText >= 8) {
            interview.disabled = true;
        }
        if (allCount.innerText <= 0) {
            interview.disabled = true;
        }
    });

}

for (let rejected of rejecteds) {
    rejected.addEventListener('click', function () {
        rejectedCount.innerText = parseInt(rejectedCount.innerText) + 1;
        getCount().innerText = rejectedCount.innerText;
        allCount.innerText = parseInt(allCount.innerText) - 1;
        if (rejectedCount.innerText >= 8) {
            rejected.disabled = true;
        }
        if (allCount.innerText <= 0) {
            rejected.disabled = true;
        }
    });
}


for (let notApplied of notApplieds) {
    for (let interview of interviews) {
        interview.addEventListener('click', function () {
            notApplied.innerHTML = `<span>Interview </span>`
        });
    }
}