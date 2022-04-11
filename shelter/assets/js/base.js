// Navbar

const navbarLinks = document.querySelectorAll('.navbar__link');

navbarLinks.forEach(link => {
    link.addEventListener('click', () => {
        navbarLinks.forEach(link => link.classList.remove('active'));
        link.classList.add('active');
    });
});

// Modal

const petInfo = [
    {
        name: 'Jennifer',
        img: './assets/images/modal-jen.png',
        type: 'Dog - Labrador',
        info: 'Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won\'t hesitate to play up a storm in the house if she has all of her favorite toys.',
        attributes: [
            ['Age', '2 months'],
            ['Inoculations', 'none'],
            ['Diseases', 'none'],
            ['Parasites', 'none'],
        ]
    }
]
const slideButtons = document.querySelectorAll('.slide-btn');
const closeBtn = document.querySelector('.modal__close');
const modal = document.querySelector('#modal');
const modalImg = modal.querySelector('#modal__img');
const modalTitle = modal.querySelector('#modal__title');
const modalType = modal.querySelector('#modal__type');
const modalInfo = modal.querySelector('#modal__info');
const modalAttributes = modal.querySelector('#modal__attributes');

const closeModal = () => {
    modal.classList.remove('active');
    modalImg.src = '';
    modalImg.alt = '';
    modalTitle.innerHTML = '';
    modalType.innerHTML = '';
    modalInfo.innerHTML = '';
    modalAttributes.innerHTML = '';
}

closeBtn.addEventListener('click', closeModal);

slideButtons.forEach(button => {
    button.addEventListener('click', () => {
        const current = petInfo.find(pet => pet.name === button.dataset.slide) || petInfo[0];
        const isPetsPage = modal.dataset.page === 'pets';
        current.attributes.forEach(attribute => {
            const dlEl = document.createElement('dl');
            const dtEl = document.createElement('dt');
            const ddEl = document.createElement('dd');
            dlEl.classList.add('modal__attribute');
            dtEl.classList.add('modal__attribute-title');
            ddEl.classList.add('modal__attribute-value');
            dtEl.innerHTML = attribute[0];
            ddEl.innerHTML = attribute[1];
            dlEl.appendChild(dtEl);
            dlEl.appendChild(ddEl);
            modalAttributes.appendChild(dlEl);
        });
        modal.classList.add('active');
        modalImg.src = isPetsPage ? '.' + current.img : current.img;
        modalImg.alt = current.name
        modalTitle.innerHTML = current.name;
        modalType.innerHTML = current.type;
        modalInfo.innerHTML = current.info;
    })
});


