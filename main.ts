// Get elements from the form and output area
const generateResumeButton = document.getElementById('generateResume') as HTMLButtonElement;

// Function to handle resume generation and opening it in a new page
generateResumeButton.addEventListener('click', () => {
    // Get the values from the form
    const fullName = (document.getElementById('fullName') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;

    const degree = (document.getElementById('degree') as HTMLInputElement).value;
    const university = (document.getElementById('university') as HTMLInputElement).value;
    const graduationYear = (document.getElementById('graduationYear') as HTMLInputElement).value;

    const jobTitle = (document.getElementById('jobTitle') as HTMLInputElement).value;
    const company = (document.getElementById('company') as HTMLInputElement).value;
    const jobDescription = (document.getElementById('jobDescription') as HTMLTextAreaElement).value;

    const skills = (document.getElementById('skills') as HTMLInputElement).value.split(',');

    // Generate the resume content in HTML format
    const resumeHtml = `
        <h3 contenteditable="true">${fullName}</h3>
        <p contenteditable="true"><strong>Email:</strong> ${email} | <strong>Phone:</strong> ${phone}</p>

        <h4>Education</h4>
        <p contenteditable="true"><strong>${degree}</strong> - ${university}, ${graduationYear}</p>

        <h4>Work Experience</h4>
        <p contenteditable="true"><strong>${jobTitle}</strong> - ${company}</p>
        <p contenteditable="true">${jobDescription}</p>

        <h4>Skills</h4>
        <ul>${skills.map(skill => `<li contenteditable="true">${skill.trim()}</li>`).join('')}</ul>
    `;

    // Open this generated resume in a new window
    openResumeInNewPage(resumeHtml);
});

function openResumeInNewPage(resumeHtml: string) {
    // Open a new window/tab
    const newWindow = window.open('', '_blank');
  if (newWindow) {
        // Write the HTML content into the new window
        newWindow.document.write(`
            <html>
              <head>
                <title>Your Editable Resume</title>
                <link rel="stylesheet" href="style.css">
                <style>
                  body {
                    font-family: Arial, sans-serif;
                    background-color: #f7f9fa;
                    margin: auto;
                    marhin left:20px:
                    padding: auto;
                  }
                  .container {
                    text-shadow: #1b7de6;
                    border-radius: 50px;
                    width: 60%;
                    margin: auto;
    
                    background-color: rgb(248, 253, 253);
                    padding: 40px;
                    box-shadow: 0px 10px 10px rgba(10, 10, 10, 0.1);
                    margin-top: 50px;
                    margin-bottom: 50px;
                  }
                  h1, h2 {
                    text-align: center;
                    text-decoration-line: underline;
                    text-shadow: 60px;
                  }
                  button {
                    display: block;
                    width: 40%;
                    padding: 10px;
                    background-color: #6b8dfc;
                    color: white;
                    border-radius: 40px;
                    cursor: pointer;
                    margin: 20px auto;
                  }
                  button:hover {
                    background-color: #0056b3;
                  }
                </style>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.9.2/html2pdf.bundle.min.js"></script>
              </head>
              <body>
              
                <div class="container">
                  <h1>Your Resume</h1>
                  <div id="resumeContent">${resumeHtml}</div>
                  <center>
                    <button id="downloadResumeButton">Download as PDF</button>
                  </center>
                  <script>
                    document.getElementById('downloadResumeButton').addEventListener('click', () => {
                      const element = document.getElementById('resumeContent');
                      if (element) {
                       
                        html2pdf().from(element).save('resume.pdf');
                        
                      }
                    });
                  </script>
                </div>
              </body>
            </html>
        `);

        // Close the document writing process
       newWindow.document.close();
    }
}
