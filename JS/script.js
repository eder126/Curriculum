function showInfo(elem) {
    var infor = document.getElementById(elem.id+'a');
    var tags = document.getElementsByName("Edu");
    var subs = document.getElementsByName("info");
    for(var i = 0; i < subs.length; i++){
        subs[i].classList.remove("displayinline");
        tags[i].classList.remove("heavy");
        subs[i].classList.add("displaynone");
    }
    elem.classList.add("heavy");
    infor.classList.add("displayinline");
};

function openNav(){
    document.getElementsByClassName("sidebar")[0].style.width = "10%";
    document.getElementsByClassName("divParent")[0].style.width = "90%";
    document.getElementsByClassName("divParent")[0].style.marginLeft = "10%";
};

function closeNav(){
    document.getElementsByClassName("sidebar")[0].style.width = "0";
    document.getElementsByClassName("divParent")[0].style.width = "100%";
    document.getElementsByClassName("divParent")[0].style.marginLeft = "0";
};