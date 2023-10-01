


function showCourses() {
    const courses = document.getElementById("licourses");
    if (courses.style.display == "block")
        courses.style.display = "none"
    else
        courses.style.display = "block"

}
function mobshowCourses() {
    const courses = document.getElementById("moblicourses");
    if (courses.style.display == "block")
        courses.style.display = "none"
    else
        courses.style.display = "block"

}
window.addEventListener("load" , ()=>{
    document.getElementById("preloader").style.display = "none";
});
function hideinfo(){
    document.getElementById("guestsubs").style.display = "none" ;
}
    function scrollToSection(id) {
        var targetSection = document.getElementById(id);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' }); // Smooth scrolling
        }
    }
