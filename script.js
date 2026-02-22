let allCount = document.getElementById('all-count');
let interviewCount = document.getElementById('interview-count');
let rejectedCount = document.getElementById('rejected-count');

const allSection = document.getElementById('all-section');

function countAll () {
    allCount.innerText = allSection.children.length;
}

countAll();