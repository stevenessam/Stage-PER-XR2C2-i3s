// Import required modules
const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');

// Create an Express application
const app = express();
const PORT = 3000;

// Middleware to parse JSON and urlencoded request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Load existing projects data from projects.json
let projectsData = require('./data/projects.json');

// Serve projects data
app.get('/projects', (req, res) => {

    res.sendFile(path.join(__dirname, 'data', 'projects.json'));
});
app.use('/mediaFiles', express.static('mediaFiles'));

// Serve Json_Structure.json
app.get('/Json_Structure.json', (req, res) => {
    res.sendFile(path.join(__dirname, 'data', 'Json_Structure.json'));
});

// Handle form submission
app.post('/submit-form', (req, res) => {
    const formData = req.body;
    const projectId = generateUniqueID(); // Generate unique ID for the project
    projectsData[projectId] = formData; // Add form data to projectsData object

    saveProjectsData(projectsData); // Save updated projectsData to projects.json

    res.send('Form submitted successfully');
});

// Generate unique ID for the new project
function generateUniqueID() {
    let maxId = 0;
    const filePath = path.join(__dirname, 'data', 'projects.json');
    try {
        const data = fs.readFileSync(filePath, 'utf8');
        const projectsArray = JSON.parse(data);
        if (projectsArray.length > 0) {
            maxId = Math.max(...projectsArray.map(project => project.id));
        }
    } catch (error) {
        console.error('Error reading projects.json:', error);
    }
    return maxId + 1; // Increment the maximum ID to generate a new unique ID
}

// Save projectsData to projects.json
function saveProjectsData(data) {
    const filePath = path.join(__dirname, 'data', 'projects.json');
    try {
        // Convert the projectsData object to an array of projects with IDs
        const projectsArray = Object.keys(data).map(id => ({
            id: parseInt(id),
            ...data[id]
        }));
        // Write the updated projectsArray to projects.json file
        fs.writeFileSync(filePath, JSON.stringify(projectsArray, null, 2));
        console.log('Data saved to projects.json successfully');
    } catch (error) {
        console.error('Error saving data to projects.json:', error);
    }
}

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
