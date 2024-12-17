My Project
A React-based project for configuring and visualizing screen installations with options for niche dimensions, and receptacle boxes, and downloading the final configuration as a PDF.
Features
Canvas Visualization:
Displays TV screens, niche boxes, receptacle boxes, and floor lines.
Adjustable parameters for screen dimensions, niche gaps, and installation type (niche/flat wall).
Configuration Panel:
Dropdowns to select screens, media players, mounts, and receptacle boxes.
Toggle buttons for screen orientation (horizontal/vertical) and installation type (niche/flat wall).
Input fields to customize niche gap, floor distance, and niche depth variance.
Info Panel:
Displays selected screen dimensions, niche dimensions, and receptacle box dimensions.
PDF Download:
Allows users to fill out project details and download the configuration as a PDF.
Tech Stack
Frontend: React, Material-UI
PDF Generation: html2canvas, jsPDF
Version Control: Git and GitHub

How to Install and Run the Project
1. Clone the Repository
git clone https://github.com/NimishMahjan/LedScreepPlacer.git
cd my-project

2. Install Dependencies
npm install

3. Run the Project
npm start

This will run the app in development mode. Open http://localhost:3000 to view it in the browser.
Usage Guide
Select Options:
Use the Configuration Panel to select screen, media player, mount, and receptacle box from the dropdowns.
Adjust parameters like floor distance, niche depth, and niche gap using the input fields.
View Visualization:
The Canvas updates dynamically based on the selected options and parameters.
Download PDF:
Fill out the Project Details (Project Title, Drawer, Department, Screen Size, Date) and click the Download button to export the configuration as a PDF.
Troubleshooting
Dependencies Not Installing:
Ensure Node.js and npm are installed:
node -v
npm -v
Port Conflict:
If port 3000 is in use, run:
npx kill-port 3000

Contributing
Contributions are welcome! Please follow these steps:
Fork the repository.
Create a new branch:
git checkout -b feature-branch
Make your changes.
Commit your changes:
git commit -m "Add new feature"
Push to your branch:
git push origin feature-branch
Submit a pull request.



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
