/** Temporary script */
// Will reformat this next time

const introductionAnimate = anime({
    targets: ['#introduction h1', '#introduction h2', '#introduction p'],
    translateX: ['-250px', '0px'],
    opacity: [0, 1],
    delay: anime.stagger(100),
    duration: 6000
})

const contactButtonAnimate = anime({
    targets: '#introduction button',
    opacity: [0, 1],
    duration: 6000
})

const animateProfileImg = () => {
    anime({
        targets: '.bg--blob',
        opacity: [0, 1],
        translateX: function(target, index) {
            return (index - 2) * -40; 
        },
        delay: anime.stagger(200, { start: 3000 }), 
        duration: 500,
        easing: 'easeOutQuad'
    });
    
    anime({
        targets: '#profile--img',
        opacity: [0, 1],
        translateX: ['0px', '-50px'],
        delay: 2000,
        duration: 500,
        easing: 'easeInQuad'
    });
}

animateProfileImg();


const toggleNav = () => {
    const sidebar = document.getElementById("sidebar");
    
    if (sidebar.classList.contains("sidebar-opened")) {
        sidebar.style.transform = 'translateX(0%)';
    } else {
        sidebar.style.transform = 'translateX(100%)';
    }
    
    sidebar.classList.toggle("sidebar-opened");
}
document.querySelector("#sidebar--open").addEventListener("click", toggleNav);
document.querySelector("#sidebar--close").addEventListener("click", toggleNav);
document.querySelector("#sidebar--nav a").addEventListener("click", toggleNav);

const toggleTerms = (ele) => {
    const navItems = document.getElementById("nav--terms").getElementsByTagName("button");
    const termsWrapper = document.getElementsByClassName("schoolwork--wrapper");
    
    for (let navTerms of navItems) {
        if (navTerms?.id.includes(ele.id)) {
            navTerms.classList.add("nav--active"); 
        } else {
            navTerms.classList.remove("nav--active");
        }
    }

    for (let terms of termsWrapper) {
        if (ele.id.includes(terms.id)) {
            terms.classList.add("schoolwork--visible");
        } else {
            terms.classList.remove("schoolwork--visible");
        }
    }
}
