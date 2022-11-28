# Getting Started with Temperature Unit Conversion

## Problem Statement

Our users are science teachers who are comfortable using the command line, a ReST API, or a
browser. In their “Unit Conversion” science unit, they want to assign students unit-conversion
problems on paper worksheets. After students turn in their completed worksheet, the teachers
want to be able to enter the questions and student responses into a computer to be graded.
Students will convert:

1. Temperatures between Kelvin, Celsius, Fahrenheit, and Rankine

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm run start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run lint:check`

### `npm run lint:fix`

Statically analyzes your code with ESLint to quickly find problems.\
See the section about [eslint](https://eslint.org/docs/latest/) for more information.

### `npm run prettier:check`

### `npm run prettier:fix`

Enforce a consistent style by parsing your code and formatting it as per defined rules with Prettier.\
See the section about [prettier](https://prettier.io/docs/en/) for more information.

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

## Infrastructure as Code

https://github.com/barya1993/unit-conversion-terraform

### Synopsis

    - Frontend is containerized and deployed on GCP cloud run.
    - Single click deployment pipeline is created for both frontend and terraform.
    - All underlying GCP infrastructure is created with Terraform - Cloud Build, Cloud Run, Google Bucket, Load Balancer, Network Endpoint Group.
    - Frontend is behind the load balancer with the capacity to route the traffic closest to the user location.

Application endpoint (external facing - publicly available): http://34.160.97.48

## Development prioritization in near future:

    1. Implementation and Integration of logs, monitoring alerts - use of CloudMonitoring, Datadog, ELK.

    2. Implementation of Authentication based User access in the Cloud Run to make it more secure.

    3. Make Terraform workspaces for commonly used components for reusability of code.

    4. Improve the CI pipeline of terraform to make it more reliable.

    5. Enable CI/CD to have multiple environments like Lates, Stage, Load, Prod

    6. Integrate and use artifact repo for code artifacts - to enable faster recovery/restore

    7. Proper versioning of code, docker images, terraform

    8. Depending on application requirement, implementation of DR

![Alt text](./assets/CICD_Architecture.jpeg?raw=true 'Title')
