const activePage = window.location.href;
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
        navLinks.forEach((link) => {
            link.classList.remove("active");
        });
        link.classList.add("active");
    });
});

const logo = document.querySelector('#logo');
logo.addEventListener("click", (e) => {
    navLinks.forEach((link) => {
        link.classList.remove("active");
    });
});

window.addEventListener("scroll", function() {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav a");

    let currentSection ='home';
    sections.forEach((section) => { 
        // Check if section is visible
        const sectionHeight = section.offsetHeight;
        const isVisible = window.scrollY + window.innerHeight / 2 >= section.offsetTop &&
                      window.scrollY <= section.offsetTop + sectionHeight;

        // Check if bottom of section more than half viewport
        const bottomOfSection = section.offsetTop + sectionHeight;
        const isBottomMoreThanHalf = bottomOfSection > window.scrollY + window.innerHeight / 2;

        if (isVisible && isBottomMoreThanHalf) {
        currentSection = section.id;
        }
    });

    navLinks.forEach((link) => {
        if(link.href.includes(currentSection)) {
            link.classList.add("active");
        }
        else{
            link.classList.remove("active");
        }
    });
});

const toggleBtn= document.querySelector('.toggle_btn');
const toggleBtnIcon= document.querySelector('.toggle_btn i');
const dropDownMenu= document.querySelector('.dropdown_menu');

toggleBtn.onclick= function(){
    dropDownMenu.classList.toggle('open');
    const isOpen= dropDownMenu.classList.contains('open');

    toggleBtnIcon.classList= isOpen
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars'
}

const menuLinks = document.querySelectorAll('.dropdown_menu a');

menuLinks.forEach(link => {

    link.addEventListener("click", (e) => {
        dropDownMenu.classList.remove('open');
        toggleBtnIcon.classList= 'fa-solid fa-bars';
    });

});