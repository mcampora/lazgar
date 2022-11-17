Vagrant.configure("2") do |config|
    config.vm.box = "ubuntu/focal64"
  
    config.vm.network "forwarded_port", guest: 3000, host: 3000, host_ip: "127.0.0.1"
  
    config.vm.provider "virtualbox" do |vb|
      vb.gui = false
      vb.memory = "2048"
    end

    config.vm.provision "shell", inline: <<-SHELL
      # simple package refresh
      sudo apt-get -y update
  
      # need unzip
      sudo apt-get -y install unzip
      
      # AWS CLI
      curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
      unzip awscliv2.zip
      sudo ./aws/install
      
      # install node v15 and npm
      curl -sL https://deb.nodesource.com/setup_15.x | sudo -E bash -
      sudo apt-get install -y nodejs

      # install project packages
      cd /vagrant
      npm --stack_size=1200 install

    SHELL
  end