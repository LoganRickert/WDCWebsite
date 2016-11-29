
var courseList = [
    {
        Name: "Responsive Websites",
        Desc: "In this course, you get to learn about how to create responsive webpages!",
        Img: "img/nopicture.png"
    },
    {
        Name: "Modern HTML5",
        Desc: "In this course, you get to learn about how to create responsive webpages!",
        Img: "img/nopicture.png"
    },
    {
        Name: "PHP7 Changes",
        Desc: "In this course, you get to learn about how to create responsive webpages!",
        Img: "img/nopicture.png"
    },
    {
        Name: "Introduction to Flexbox",
        Desc: "In this course, you get to learn about how to create responsive webpages!",
        Img: "img/nopicture.png"
    },
]

function NewResults(id, search) {
    id.innerHTML = "";
    for (var c in courseList) {
        var v = courseList[c]
        if (v.Name.toLowerCase().indexOf(search) !== -1) {
            id.innerHTML += '\
                <article class="body-rowitems body-team">\
                            <ul>\
                                <li>\
                                    <img src="' + v.Img + '">\
                                    <h3>' + v.Name + '</h3>\
                                    <p>' + v.Desc + '</p>\
                                </li>\
                            </ul>\
                        </article>\
            '
        }
    }
}

var searchResults = document.getElementById("courselist");

if (searchResults) {
    var searchbox = document.getElementById("search");
    searchbox.value = "";
    NewResults(searchResults, "");
    
    searchbox.addEventListener('input', function() {
        console.log(searchbox.value);
        NewResults(searchResults, searchbox.value.toLowerCase());
    }, false);
}
