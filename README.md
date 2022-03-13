# UWHackathonProject
This project is created for a hackathon between Northeastern University and United Way.

# Project Description

Our project provides a way to collect more granular data from the individuals in communities who benefit from United Way's funding. This project consists of a web app that users receiving support at food hubs can access and fill out to obtain a QR code. They are then able to scan this QR code everytime they return to the foodhub. This gives us a low friction way to track how frequently some users go to a certain foodhub, roughly how many people are being serviced, and how many are going to more than one food hub supported by United Way. Our project also contains an additional form that can be filled out by community individuals monthly, biannually, or as often as United Way would like to collect this granular data. The information in this ongoing granular data collection could then ultimately be used to generate community specific metrics, to measure the success of a project in a community, by the community's own terms.

# Usage

The users for this application will be both United Way, and the individuals in communities that are being served by United Way's funding support.

This data collection will provide United Way with sound information from the individuals that they are directly helping, which can then be used for equitable funding allocation, knowledge sharing at community of practice meetings, and even fundraising.

# Visuals

Examples of our initial intake form and a recurring form, which could be further developed with insight from a community specialist:

![](sign_up.png)

![](survey.png)

The following image demonstrate the type of dashboard that could be built with this information after long term data collection:

![](View_Current_Projects_Dashboard.PNG)

This first dashboard image depicts one way this data could be visualized after several years of collection. On the lefthand side, note that the user can select from different projects that they have funded, to view stats. Among these stats may be a multi-year graph that shows how many people have used a particular food hub over the years, the demographic breakdown of people using that food hub, as well as important metrics, unique to that community, and articulated by individuals in that community through our recurring surveys. Our dashboard can also have a breakdown of success with important community metrics over the years, and a general success score, based on how well the organizers of that particular project were able to meet the articulated needs of the community over the years.

![](Evaluate_New_Projects_Dashboard.PNG)

This second dashboard image depicts a process for evaluating incoming grant proposals from organizations asking for funding. United Way can view if a new proposal is coming from an applicant they have worked with before (and have data on), or if the proposal is coming from an entirely new organization, and a community that we don't yet have data on. In this example, the user has selected a form for a project from a new applicant that United Way has not yet worked with. They can select the demographics served by this incoming project (from the application), and view past projects that serve a similar demographic breakdown. There is then a section for United Way to answer questions about the application, and generate a score to help asess the application.

# Installation and Requirements

## Back - end

In the first step, download `homebrew` which is a open source package management software. Once installed, open the terminal on a Mac / Window and type `brew install mysql`. <br>

Next, download the project files from `Code` on Github. Unzip the files, open `mysql` and `run createDB.sql` in it. <br>

For the remaining files, open in any `Java IDE`, open `applications.properties` to update instance, id and password to your configuration.

For the final step, run the `main.java` file.

## Front - end
### Available Scripts

In the project directory, you can run:

#### `npm install`
To install the dependencies package.

#### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

# Roadmap

There are both short term and long term steps for this project. In the short term, the next steps are to transfer the website from a local host to live production, usable by the communities that recieve funding and support from United Way.
