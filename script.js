const hamburger = document.querySelector('.navbar-main__toggler');
const collapsedNavbar = document.querySelector('.navbar-main');
const closeIcon = document.querySelector('.navbar-button__close');

hamburger.addEventListener('click', () => {
  collapsedNavbar.style.display = 'flex';
  hamburger.style.display = 'none';
});

closeIcon.addEventListener('click', () => {
  collapsedNavbar.style.display = 'none';
  hamburger.style.display = 'block';
});

const staff = [
  {
    name: 'Trish',
    title: 'Founder & CEO',
    description:
      'Trish is a passionate outdoor enthusiast with over 30 years of experience as a world traveller. Her first overseas trip was a 5 year stint where she worked her way around the world.',
    image: './images/staff1.jfif',
    class: 'staff1',
  },
  {
    name: 'Jorgen',
    title: 'Manager, North Operations',
    description:
      'Jorgen has been living and guiding in Ecuador for the past 10 years. He was born in Sweden in the town of Kiruna, but decided to swap the Arctic Circle for the Equator almost 20 years ago.',
    image: './images/staff2.jfif',
    class: 'staff2',
  },
  {
    name: 'Rolando',
    title: 'Manager, South America Operations',
    description:
      'Rolando (“Rolo”) lives for the outdoors and adventure. Also a recognized conservationist, Rolando provides our travellers with an unmatched level of connectivity to the real Panama.',
    image: './images/staff3.jpg',
    class: 'staff3',
  },
  {
    name: 'Meghan',
    title: 'Operations Director',
    description:
      'Meghan has been working at BikeHike Adventures as the Director of Operations for the past 15 years. Her passion for travel was passed on to her by her parents.',
    image: './images/staff4',
    class: 'staff4',
  },
  {
    name: 'Miguel',
    title: 'Liason, Spain',
    description:
      'Miguel was born in the beautiful Andean city of Cusco where he learned to speak Quechua at the age of three. He now also speaks English and Spanish fluently.',
    image: './images/staff5.jpg',
    class: 'staff5',
  },
  {
    name: 'Saaid',
    title: 'Manager, East Operations',
    description:
      'Saaid comes from the village of Tagleft, in the Central High Atlas Mountains. He  has established a niche as a mountain biking and road cycling guide and has a superb knowledge of the back roads of Morocco. ',
    image: './images/staff6.jpg',
    class: 'staff6',
  },
];

const StaffSection = document.querySelector('.all-staff-members');

function createStaffMember(allowStaff) {
  let i = 0;
  staff.every((member) => {
    if (i > allowStaff) {
      return false;
    }
    const staffer = document.createElement('article');
    staffer.innerHTML += `
      <div class='staff__img'>
      <img src='${member.image}' alt=''>
      </div>
      <div class='staff__description'>
        <h3>${member.name}</h3>
        <h4>${member.title}</h4>
        <hr>
        <p>${member.description}</p>
      </div>
    `;
    staffer.classList.add(member.class);
    staffer.classList.add('staff');
    StaffSection.appendChild(staffer);
    i += 1;
    return true;
  });
}

const staffInside = document.querySelector('.staff-inside');
let isDisplayingCards = false;
staffInside.addEventListener('click', () => {
  if (isDisplayingCards) {
    StaffSection.innerHTML = '';
    createStaffMember(1);
    staffInside.querySelector('#more-btn').innerHTML = 'SEE MORE';
    staffInside.querySelector('#more-btn-ico').classList.add('fa-chevron-down');
    staffInside.querySelector('#more-btn-ico').classList.remove('fa-chevron-up');
    isDisplayingCards = !isDisplayingCards;
  } else {
    StaffSection.innerHTML = '';
    createStaffMember(staff.length);
    staffInside.querySelector('#more-btn').innerHTML = 'SEE LESS';
    staffInside.querySelector('#more-btn-ico').classList.remove('fa-chevron-down');
    staffInside.querySelector('#more-btn-ico').classList.add('fa-chevron-up');
    isDisplayingCards = !isDisplayingCards;
  }
});

function loadCards() {
  StaffSection.innerHTML = '';
  if (window.innerWidth < 768) {
    createStaffMember(1);
  } else {
    createStaffMember(staff.length);
    document.querySelector('.staff-inside').classList.toggle('active');
  }
}

loadCards();

window.addEventListener('resize', () => {
  staffInside.dispatchEvent(new Event('click'));
});
