//Make icons selected....
let icons = document.querySelectorAll("#icons");
let icon1 = document.querySelector(".icon1");
let icon2 = document.querySelector(".icon2");
let icon3 = document.querySelector(".icon3");
let icon4 = document.querySelector(".icon4");
let icon5 = document.querySelector(".icon5");


icons.forEach(function (ele) {
    ele.addEventListener("click", function (event) {
        console.log(event.currentTarget);
        icons.forEach(function (event2) {
            event2.classList.remove("selected")
        })
        event.currentTarget.classList.add("selected");
    })
});


//Create submit and it's condition...
let sub = document.querySelector("#moving");
let Main_content = document.querySelector(".content");




sub.addEventListener("click", function () {
    if (icon1.classList.contains("selected") ||
        icon2.classList.contains("selected") ||
        icon3.classList.contains("selected") ||
        icon4.classList.contains("selected") ||
        icon5.classList.contains("selected")) {
        Main_content.style.display = "none";
        //Create thank div...
        let Main_thank = document.createElement("div");
        Main_thank.classList.add("thank_content");
        //Create section 1...
        let Main_thank_section1 = document.createElement("div");
        Main_thank_section1.classList.add("thank_content_section1");
        //Create the main image in section 1...
        let Main_thank_section1_image = document.createElement("img");
        Main_thank_section1_image.src = "images/illustration-thank-you.svg"
        Main_thank_section1_image.classList.add("image_view");
        //Add to section 1....
        Main_thank_section1.appendChild(Main_thank_section1_image);
        //Create section 2...
        let Main_thank_section2 = document.createElement("div");
        Main_thank_section2.classList.add("thank_content_section2");
        //Create nested title of section 2 ...
        let Main_thank_section2_p = document.createElement("p");
        Main_thank_section2_p.classList.add("thank_content_section2_p")
        //Create the condition of the submit...
        if (icon1.classList.contains("selected")) {
            Main_thank_section2_p.innerHTML = `you selected ${icon1.innerHTML} of 5`;
        } else if (icon2.classList.contains("selected")) {
            Main_thank_section2_p.innerHTML = `you selected ${icon2.innerHTML} of 5`;
        } else if (icon3.classList.contains("selected")) {
            Main_thank_section2_p.innerHTML = `you selected ${icon3.innerHTML} of 5`;
        } else if (icon4.classList.contains("selected")) {
            Main_thank_section2_p.innerHTML = `you selected ${icon4.innerHTML} of 5`;
        } else if (icon5.classList.contains("selected")) {
            Main_thank_section2_p.innerHTML = `you selected ${icon5.innerHTML} of 5`;
        }
        //Add to section 2...
        Main_thank_section2.appendChild(Main_thank_section2_p);
        //Create section 3 ...
        let Main_thank_section3 = document.createElement("div");
        Main_thank_section3.classList.add("thank_content_section3")
        //Add first p to it.....
        let Main_thank_section3_p1 = document.createElement("p");
        Main_thank_section3_p1.innerHTML = `Thank you!`;
        Main_thank_section3_p1.classList.add("thank_content_section3_p1");
        Main_thank_section3.appendChild(Main_thank_section3_p1);
        //Add second p to it....
        let Main_thank_section3_p2 = document.createElement("p");
        Main_thank_section3_p2.innerHTML = `We appreciating you taking
    the time to give rating. if you ever need support.
    don't hesitate to get in touch`
        Main_thank_section3_p2.classList.add("thank_content_section3_p2");
        Main_thank_section3.appendChild(Main_thank_section3_p2);

        Main_thank.appendChild(Main_thank_section1)
        Main_thank.appendChild(Main_thank_section2);
        Main_thank.appendChild(Main_thank_section3);
        document.body.appendChild(Main_thank);
    }
});
