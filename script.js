let interviewList = [];
let rejectedList = [];
let allCount = document.getElementById('all-count');
let interviewCount = document.getElementById('interview-count');
let rejectedCount = document.getElementById('rejected-count');

let allButton = document.getElementById('all-btn');
let interviewButton = document.getElementById('interview-btn');
let rejectedButton = document.getElementById('rejected-btn');

const allSection = document.getElementById('all-section');

const allSectionContainer = document.querySelector('section');
const interviewSection = document.getElementById('interview-section')

function countAll() {
    allCount.innerText = allSection.children.length; //8
    interviewCount.innerText = interviewList.length;
    rejectedCount.innerText = rejectedList.length;
}

countAll();

function toggleStyle(id) {

    // Adding Blue bg for all
    allButton.classList.add('btn-color');
    interviewButton.classList.add('btn-color');
    rejectedButton.classList.add('btn-color');

    // Removing Blue bg for all
    allButton.classList.remove('add-btn');
    interviewButton.classList.remove('add-btn');
    rejectedButton.classList.remove('add-btn');


    // console.log(id);

    const selected = document.getElementById(id);

    // Adding black Bg for current button
    selected.classList.remove('btn-color');
    selected.classList.add('add-btn');
}

allSectionContainer.addEventListener('click', function (event) {
    console.log(event.target.classList.contains("interview"));
    if (event.target.classList.contains("interview")) {
        const parentNode = event.target.parentNode.parentNode;
        const jobName = parentNode.querySelector('.job-name').innerText;
        const postName = parentNode.querySelector('.post-name').innerText;
        const right = parentNode.querySelector('.right').innerText;
        const title = parentNode.querySelector('.title').innerText;
        const btnApplied = parentNode.querySelector('.btn-applied').innerText;
        const footerContentInfo = parentNode.querySelector('.footer-content-info').innerText;
        const interview = parentNode.querySelector('.footer-content-info').innerText;
        const rejected = parentNode.querySelector('.rejected').innerText;
        const cardInfo = {
            jobName,
            postName,
            right,
            title,
            btnApplied,
            footerContentInfo,
            interview,
            rejected
        }

        const jobExist = interviewList.find(item => item.jobName === cardInfo.jobName);

        if (!jobExist) {
            interviewList.push(cardInfo);
        }

        renderInterview();
    }
});

function renderInterview() {
    interviewSection.innerHTML = "";

    for (let interview of interviewList) {
        console.log(interview);
        let div = document.createElement('div');
        div.style.color = 'white';
        div.style.padding = '24px';
        div.style.border = '1px solid #F1F2F4';
        div.style.borderRadius = '8px';
        div.style.marginBottom = '16px';
        div.innerHTML = `
        <div class="header-content">
                    <div class="left">
                        <h3 class="job-name">Mobile First Corp</h3>
                        <p class="post-name">React Native Developer</p>
                    </div>
                    <div class="right">
                        <i class="fa-regular fa-trash-can delete-button"></i>
                    </div>
                </div>

                <p class="title">Remote • Full-time • $130,000 - $175,000</p>

                <div class="footer-content">
                    <button class="btn-applied">Not Applied</button>
                    <p class="footer-content-info">Build cross-platform mobile applications using React Native. Work on products used by millions of
                        users worldwide.</p>
                </div>

                <div class="footer-btn">
                    <button class="interview">INTERVIEW</button>
                    <button class="rejected">REJECTED</button>
                </div>
        `

        /**
         * background: white;
    padding: 24px;
    border: 1px solid #F1F2F4;
    border-radius: 8px;
    margin-bottom: 16px;
         */
    }
}