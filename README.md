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

# Static Web site

* public/ contains the resources
* scripts/ contains the deployment scripts
    * deploy.sh launch a cloudformation script to ensure bucket creation and proper settings, then push the content of public/ to this bucket``
    * website.yaml is the cloudformation script

