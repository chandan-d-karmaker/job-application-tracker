// badge change and count tracker

function interviewClick(id, card) {
    // get badge and card
    const badge = document.getElementById(id);
    const ogCard = document.getElementById(card);

    // get parent div
    const interSection = document.getElementById('inter-job-cards');
    const rejectSection = document.getElementById('reject-job-cards');

    // get count
    const interviewCount = document.getElementById('interview-count');
    const rejectCount = document.getElementById('rejected-count');

    // set badge and count
    badge.innerText = "INTERVIEWED";
    badge.classList.add("bg-green-400");
    badge.classList.remove("bg-red-400");

    interviewCount.innerText++;

    // append child to parent
    interSection.appendChild(ogCard);

    // if(badge.innerText === "INTERVIEWED") return;

}

function rejectClick(id, card) {
    // get badge and card
    const badge = document.getElementById(id);
    const ogCard = document.getElementById(card);

    // get parent div
    const interSection = document.getElementById('inter-job-cards');
    const rejectSection = document.getElementById('reject-job-cards');

    // get count
    const interviewCount = document.getElementById('interview-count');
    const rejectCount = document.getElementById('rejected-count');

    // get badge and card
    badge.innerText = "REJECTED";
    badge.classList.add("bg-red-400");

    rejectCount.innerText++;

    // append child to parent
    rejectSection.appendChild(ogCard);
}

function showOnly(id) {
    // get all section
    const all = document.getElementById('all-job-cards');
    const inter = document.getElementById('inter-job-cards');
    const reject = document.getElementById('reject-job-cards');

    // hide all section
    all.classList.add("hidden");
    inter.classList.add("hidden");
    reject.classList.add("hidden");

    // show only clicked section
    const show = document.getElementById(id);
    show.classList.remove("hidden")

}