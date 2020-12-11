!Static Web site
* public/ contains the resources
* scripts/ contains the deployment scripts
** deploy.sh launch a cloudformation script to ensure bucket creation and proper settings, then push the content of public/ to this bucket``
** website.yaml is the cloudformation script