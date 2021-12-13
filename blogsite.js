
function myFunction() {

    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;


    var y = document.getElementById("page1");
    if (y.style.display === "none") {
        y.style.display = "flex";
    } 
    else {
        y.style.display = "none";
    }


    var x = document.getElementById("page2");
    if (x.style.display === "flex") {
        x.style.display = "none";
    }
    else {
        x.style.display = "flex";
    }
}
