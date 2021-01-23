Simple React project to promote Lazgar. No server-side component at this stage.

# Development environment
A Vagrant configuration is provided so you can setup quickly a development environment wether you are using a Windows, MacOS, Linux machine.

The only requirement is to install on your machine VirtualBox (https://formulae.brew.sh/cask/virtualbox) and Vagrant (https://formulae.brew.sh/cask/vagrant#default), check https://www.virtualbox.org/ and check https://www.vagrantup.com/ for other platforms.
>$ brew install --cask virtualbox  
>$ brew install --cask vagrant  

Launch the virtual machine using:
>$ vagrant up

Setup instructions are in `Vagrantfile`, all the necessary software has been installed at launch time, you will still need to set up your AWS credentials to use the provided CloudFormation script:
>$ aws configure  
>AWS Access Key ID [None]: yourkey  
> AWS Secret Access Key [None]: yoursecret  
> Default region name [None]: thetestregion  
> Default output format [None]: 

Connect to the virtual machine using:
>$ vagrant ssh 

The project files are under `/vagrant`.

When you're done you can exit your ssh session and stop the VM:
>$ vagrant halt

# Packages note
additional packages:
* widgets and responsive design
** https://material-ui.com 

# Run the demo
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

After you cloned the repository, install JavaScript dependencies:
>npm install  

In the project directory, you can run:

## `npm start`
Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

## `npm test`
Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## `npm run build`
Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

# Create a continous integration / continous delivery pipeline
You can create an AWS CodePipeline using the provided CloudFormation script:
>./deploy.sh  

The script will create in your default region and account a pipeline, a build project and 2 S3 buckets (one to store intermediate artefacts and one to deploy your Web site).

Your Web site will be available at http://lazgar-web.s3-website-us-east-1.amazonaws.com

# Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

## Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

## Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

## Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

## Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

## `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
 
# Todo

* the CloudFormation script can be improved
** no controled name for the web bucket policy
** the web bucket is not cleaned up when we delete the stack
** missing a pipeline notification
** Github connection requires a manual action

