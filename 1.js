document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('.nav-link, .b');


    function handleMouseEvents(element, isHovering) {
        if (isHovering) {
            element.style.color = "white";
            element.style.backgroundColor = "blue";
        } else {
            element.style.color = ""; 
            element.style.backgroundColor = ""; 
        }
    }


    navLinks.forEach(link => {
        link.addEventListener("mouseenter", function() {
            handleMouseEvents(link, true);
        });
        link.addEventListener("mouseleave", function() {
            handleMouseEvents(link, false);
        });
    });
});
