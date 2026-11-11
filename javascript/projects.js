
// Select all elements with the class "project_section"
const project_sections = document.querySelectorAll(".project_section");

// Loop through each project section individually
project_sections.forEach(project => {

    // Find the title element inside the current project section
    const title = project.querySelector(".project_title");

    // Find the description element inside the current project section
    const description = project.querySelector(".project_description");

    // Add a click event listener to the title
    title.addEventListener("click", function() {

        // Select all project description elements on the page
        document.querySelectorAll(".project_description").forEach(item => {

            // Check if this description is NOT the one that was clicked
            if (item !== description) {

                // Remove the "active" class to close the other description
                item.classList.remove("active");

            } // End of the if statement

        }); // End of the loop through all descriptions

        // Toggle the "active" class on the clicked description (open or close it)
        description.classList.toggle("active");

    }); // End of the click event listener

}); // End of the loop through all project sections
