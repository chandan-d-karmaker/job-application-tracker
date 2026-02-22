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

    // if user clicks button again
    if(ogCard.dataset.status === 'interview') return;
    if(ogCard.dataset.status === 'rejected'){
        const preClone = document.getElementById(card + '-clone');
        if(preClone) preClone.remove();
        rejectCount.innerText--;
    }

    // set badge and count
    badge.innerText = "INTERVIEWED";
    badge.classList.add("bg-green-400");
    badge.classList.remove("bg-red-400");
    interviewCount.innerText = interSection.children.length;

    // clone card
    const cloneCard = ogCard.cloneNode(true);
    cloneCard.id = card + "-clone";

    // append child to parent
    interSection.appendChild(cloneCard);

    // set status
    ogCard.dataset.status = "interview";

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

    // if user clicks button again
    if(ogCard.dataset.status === 'rejected') return;
    if(ogCard.dataset.status === 'interview'){
        const preClone = document.getElementById(card + '-clone');
        if(preClone) preClone.remove();
        interviewCount.innerText--;
    }

    // set badge and count
    badge.innerText = "REJECTED";
    badge.classList.add("bg-red-400");
    rejectCount.innerText = rejectSection.children.length;

    // clone card
    const cloneCard = ogCard.cloneNode(true);
    cloneCard.id = card + "-clone";

    // append child to parent
    rejectSection.appendChild(cloneCard);

    // set status
    ogCard.dataset.status = "rejected";

    
}

// show only clicked section
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