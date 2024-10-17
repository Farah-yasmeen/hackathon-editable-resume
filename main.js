// Get elements from the form and output area
var generateResumeButton = document.getElementById('generateResume');
// Function to handle resume generation and opening it in a new page
generateResumeButton.addEventListener('click', function () {
    // Get the values from the form
    var fullName = document.getElementById('fullName').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var degree = document.getElementById('degree').value;
    var university = document.getElementById('university').value;
    var graduationYear = document.getElementById('graduationYear').value;
    var jobTitle = document.getElementById('jobTitle').value;
    var company = document.getElementById('company').value;
    var jobDescription = document.getElementById('jobDescription').value;
    var skills = document.getElementById('skills').value.split(',');
    // Generate the resume content in HTML format
    var resumeHtml = "\n        <h3 contenteditable=\"true\">".concat(fullName, "</h3>\n        <p contenteditable=\"true\"><strong>Email:</strong> ").concat(email, " | <strong>Phone:</strong> ").concat(phone, "</p>\n\n        <h4>Education</h4>\n        <p contenteditable=\"true\"><strong>").concat(degree, "</strong> - ").concat(university, ", ").concat(graduationYear, "</p>\n\n        <h4>Work Experience</h4>\n        <p contenteditable=\"true\"><strong>").concat(jobTitle, "</strong> - ").concat(company, "</p>\n        <p contenteditable=\"true\">").concat(jobDescription, "</p>\n\n        <h4>Skills</h4>\n        <ul>").concat(skills.map(function (skill) { return "<li contenteditable=\"true\">".concat(skill.trim(), "</li>"); }).join(''), "</ul>\n    ");
    // Open this generated resume in a new window
    openResumeInNewPage(resumeHtml);
});
function openResumeInNewPage(resumeHtml) {
    // Open a new window/tab
    var newWindow = window.open('', '_blank');
    if (newWindow) {
        // Write the HTML content into the new window
        newWindow.document.write("\n            <html>\n              <head>\n                <title>Your Editable Resume</title>\n                <link rel=\"stylesheet\" href=\"style.css\">\n                <style>\n                  body {\n                    font-family: Arial, sans-serif;\n                    background-color: #f7f9fa;\n                    margin: auto;\n                    marhin left:20px:\n                    padding: auto;\n                  }\n                  .container {\n                    text-shadow: #1b7de6;\n                    border-radius: 50px;\n                    width: 60%;\n                    margin: auto;\n    \n                    background-color: rgb(248, 253, 253);\n                    padding: 40px;\n                    box-shadow: 0px 10px 10px rgba(10, 10, 10, 0.1);\n                    margin-top: 50px;\n                    margin-bottom: 50px;\n                  }\n                  h1, h2 {\n                    text-align: center;\n                    text-decoration-line: underline;\n                    text-shadow: 60px;\n                  }\n                  button {\n                    display: block;\n                    width: 40%;\n                    padding: 10px;\n                    background-color: #6b8dfc;\n                    color: white;\n                    border-radius: 40px;\n                    cursor: pointer;\n                    margin: 20px auto;\n                  }\n                  button:hover {\n                    background-color: #0056b3;\n                  }\n                </style>\n                <script src=\"https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.9.2/html2pdf.bundle.min.js\"></script>\n              </head>\n              <body>\n              \n                <div class=\"container\">\n                  <h1>Your Resume</h1>\n                  <div id=\"resumeContent\">".concat(resumeHtml, "</div>\n                  <center>\n                    <button id=\"downloadResumeButton\">Download as PDF</button>\n                  </center>\n                  <script>\n                    document.getElementById('downloadResumeButton').addEventListener('click', () => {\n                      const element = document.getElementById('resumeContent');\n                      if (element) {\n                       \n                        html2pdf().from(element).save('resume.pdf');\n                        \n                      }\n                    });\n                  </script>\n                </div>\n              </body>\n            </html>\n        "));
        // Close the document writing process
        newWindow.document.close();
    }
}
