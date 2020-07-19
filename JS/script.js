function showDesc(id) {
    var desc = document.getElementsByClassName("educationCDesc")[0].children;
    var course = document.getElementsByClassName("educationCourse")[0].children;

    for(var i = 0; i <desc.length; i++) {
        desc[i].classList.add("displaynone");
        desc[i].classList.remove("displayinline");
        course[i].classList.remove("selected");
    }

    document.getElementById(id+"a").classList.add("displayinline");
    document.getElementById(id).classList.add("selected");
}

function openNav(id){
    document.getElementById("menuIcon").classList.add("displaynone");
    document.getElementById("navBar").classList.remove("displaynone");
}

function closeNav(){
    document.getElementById("menuIcon").classList.remove("displaynone");
    document.getElementById("navBar").classList.add("displaynone");
}