$(function () {
    var bar = '';
    bar += '<div class="container-fluid">';
    bar += '<a class="navbar-brand  rounded-2" href="index.html">'
    bar += '<img src="Images/Logo.png" alt="NC logo" class="logo">'
    bar += '</a>'
    bar += '<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">'
    bar += '<span class="navbar-toggler-icon"></span>'
    bar += '</button>'
    bar += '<div class="collapse navbar-collapse" id="navbarSupportedContent">'
    bar += '<ul class="navbar-nav me-auto mb-2 mb-lg-0 ">'
    bar += '<li class="nav-item">'
    bar += '<a class="nav-link active text-outline text-light" aria-current="page" href="index.html">Home</a>'
    bar += '</li>'
    bar += '<li class="nav-item">'
    bar += '<a class="nav-link text-outline text-light" href="about.html">Contact</a>'
    bar += '</li>'
    bar += '<li class="nav-item dropdown">'
    bar += '<a class="nav-link text-outline text-light dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Projects'
    bar += '</a>'
    bar += '<ul class="dropdown-menu bg-dark">'
    bar += '<li><a class="dropdown-item text-outline text-light" href="projects.html">Project Previews</a></li>'
    bar += '<li><hr class="dropdown-divider bg-white"></li>'
    bar += '<li><a class="dropdown-item text-outline text-light" href="#">Another action</a></li>'
    bar += '<li><a class="dropdown-item text-outline text-light" href="#">Something else here</a></li>'
    bar += '</ul>'
    bar += '</li>'
    bar += '<li class="nav-item">'
    bar += '<a class="nav-link text-outline text-light" href="about.html">Coding Challenges</a>'
    bar += '</li>'
    bar += ' </ul>'
    bar += '</div>'
    bar += '</div>'
    

    $("#main-bar").html(bar);

    var id = getValueByName("id");
    $("#" + id).addClass("active");
});

function getValueByName(name) {
    var url = document.getElementById('nav-bar').getAttribute('src');
    var param = new Array();
    if (url.indexOf("?") != -1) {
        var source = url.split("?")[1];
        items = source.split("&");
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            var parameters = item.split("=");
            if (parameters[0] == "id") {
                return parameters[1];
            }
        }
    }
}