#ExtendAPI

### Introduction
The ExtendAPI program is a Node.js web API service using the Express.js framework that acts as a proxy to the Extend API. Follow the steps below to run the program on your local machine.

#### Clone the Repository
To clone the repository, open your command line terminal and type the following command:

```
git clone https://github.com/kwanhlee/ExtendAPI.git
```
This will create a local copy of the ExtendAPI program on your machine.

#### Install Dependencies
Navigate to the root directory of the program and run the following command to install all the package dependencies:

```
npm install
```
This will install all the necessary packages required to run the program.

#### Create .env File
Create a new file named .env in the root directory of the program using the following command:

```
touch .env
```
The .env file is used to store environment variables required by the program.

#### Initialize Environment Variables
Open the .env file and add the following two lines to set up environment variables:

```
EXTEND_API_TOKEN="[YOUR_EXTEND_API_TOKEN]"
NODE_ENV="dev"
```
Replace [YOUR_EXTEND_API_TOKEN] with your Extend API token. You can obtain an API token by signing up for a Extend account and generating an API token in the Extend Dashboard.

The NODE_ENV variable sets the environment to "dev" for development purposes.

#### Run the Program
After installing the dependencies and setting up the environment variables, you can run the program locally by using the following command:

```
npm run dev
```
This command will start the program and make it available at http://localhost:3000. You can access the ExtendAPI web application by opening a web browser and navigating to this address.

The routes of the API and method to use the service is documented here: https://app.swaggerhub.com/apis-docs/KWANHLEE_1/Extend/v2023-02-12 

Congratulations! You have successfully installed and run the ExtendAPI program on your local machine.

### Running Tests
**Jest** is the Javascript testing framework used to test the basic routes of the API.

**supertest** library is used to mock HTTP requests to the local server

#### Install Jest and Supertest
Navigate to project directory and run the following commands:
```
npm install jest --save-dev
npm install supertest --save-dev
```

#### Change .env variable
In order to run the test, we need to modify the variables to:

```
EXTEND_API_TOKEN="[YOUR_EXTEND_API_TOKEN]"
NODE_ENV="test"
```
**Make sure the EXTEND_API_TOKEN is updated to the latest valid token**

#### Run the test
Run the following command in the root directory
```
npm test
```
