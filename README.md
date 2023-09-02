Simple React project to promote Lazgar.  
No server-side component at this stage.  

# Development environment
Dependencies can be installed on your host, this said a Vagrant configuration is provided so you can setup quickly a development environment wether you are using a Windows, MacOS, Linux machine.

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

# Run the demo
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

After you cloned the repository, install JavaScript dependencies:
>$ npm install  

>$ npm start
Runs the app in development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

>$ npm test
Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

>$ npm run build
Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

# Continuous integration / continuous delivery pipeline
The repo contains a Github Actions workflow.

It relies on a programatic AWS id which has to be created upfront and stored as secrets in the repo.  

The workflow create or update the infrastructure pieces using CloudFormation (ex. bucket, ...).  
Then build and upload the Web site in the appropriate bucket.  

The Web site is available at http://lazgar.s3-website-eu-west-1.amazonaws.com
An external DNS entry is rerouting https://lazgar.net to this URL

# multi account access
I applied the guidelines at https://stackoverflow.com/questions/3860112/multiple-github-accounts-on-the-same-computer  
In a nutshell I'm using ssh access.  
I created and registered a RSA key and changed my repo origin.  
> git remote set-url origin git@github.com:mcampora/lazgar.git

# Todo
* ...