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

    // set badge
    badge.innerText = "INTERVIEWED";
    badge.classList.add("bg-green-400");
    badge.classList.remove("bg-red-400");
    

    // clone card
    const cloneCard = ogCard.cloneNode(true);
    cloneCard.id = card + "-clone";

    // append child to parent
    interSection.appendChild(cloneCard);

    // set status
    ogCard.dataset.status = "interview";

    // set count
    interviewCount.innerText = interSection.children.length - 1;

    // default view
    if(interviewCount.innerText > 0) {
        document.getElementById('default-inter').classList.add('hidden');
    } else {
        document.getElementById('default-inter').classList.remove('hidden');
    } 
    

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
    

    // clone card
    const cloneCard = ogCard.cloneNode(true);
    cloneCard.id = card + "-clone";

    // append child to parent
    rejectSection.appendChild(cloneCard);

    // set status
    ogCard.dataset.status = "rejected";

    // set count
    rejectCount.innerText = rejectSection.children.length - 1;

    // default view
    if(rejectCount.innerText > 0){
        document.getElementById('default-reject').classList.add('hidden');
    } else {
        document.getElementById('default-reject').classList.remove('hidden');
    }
    
}

// show only clicked section
function showOnly(id, btn) {
    // get all section and buttons
    const all = document.getElementById('all-job-cards');
    const allBtn = document.getElementById('btn-all');
    const inter = document.getElementById('inter-job-cards');
    const interBtn = document.getElementById('btn-inter');
    const reject = document.getElementById('reject-job-cards');
    const rejectBtn = document.getElementById('btn-reject');

    // hide all section and remove btn class
    all.classList.add("hidden");
    allBtn.classList.remove('btn-primary');
    inter.classList.add("hidden");
    interBtn.classList.remove("btn-primary");
    reject.classList.add("hidden");
    rejectBtn.classList.remove("btn-primary");

    // show only clicked section
    const show = document.getElementById(id);
    show.classList.remove("hidden")

    // get selected btn and make it primary
    const SelectedBtn = document.getElementById(btn);
    SelectedBtn.classList.add("btn-primary");

    // set mini count
    const miniCount = document.getElementById('mini-count');
    miniCount.innerText = show.children.length - 1;

}

// only deletes cards from all section, cloned cards in interview or rejected section remains and can't be deleted now
function deleteBtn(id){
    // get the card to be deleted
    const card = document.getElementById(id);

    // remove card
    card.remove();

    // get and set total count
    const totalCount = document.getElementById('total-count');
    const totalParent = document.getElementById('all-job-cards');
    const miniCount = document.getElementById('mini-count');
    miniCount.innerText = totalParent.children.length - 1;
    totalCount.innerText = totalParent.children.length - 1;    

    if(totalCount.innerText == 0){
        document.getElementById('default-all').classList.remove('hidden');
    } else {
        document.getElementById('default-all').classList.add('hidden');
    }
}