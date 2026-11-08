


// const project_sections = document.querySelectorAll(".project_section");

// project_sections.forEach(project => {

//     const title = project.querySelector(".project_title");
//     const description = project.querySelector(".project_description");

//     // Hide description initially
//     description.style.display = "none";



//     // Show/hide description when title is clicked
//     title.addEventListener("click", function() {
//         if (description.style.display === "none") {
//             description.style.display = "block";
//         } else {
//             description.style.display = "none";
//         }
//     });

// });


const project_sections = document.querySelectorAll(".project_section");

project_sections.forEach(project => {

    const title = project.querySelector(".project_title");
    const description = project.querySelector(".project_description");

    title.addEventListener("click", function() {
        description.classList.toggle("active");
    });

});