# Basic Capture the Flag Challenge 🚩

This is a quick and easy capture the flag challenge with the ability to root the box without the need
for additional pen-testing tools.

## Quick Start

- Create a new ubuntu ec2 instance on AWS (other cloud providers are available)
- SSH into the box and clone or copy the `/website` directory under the default user
  - `scp -i <rsa_key> -r website ubuntu@<ec2-ip-dns>:/home/ubuntu/website`
- Create a hugo's user on the box with a random hash password (make sure to save this for later)
  - `sudo adduser hugo`
- Enable ssh password authentication:
  - `sudo nano /etc/ssh/sshd_config`
  - change the line `PasswordAuthentication no` to `PasswordAuthentication yes`
  - change the line `PermitRootLogin no` to `PermitRootLogin yes`
  - Save the file and run:
  - `sudo service ssh restart`
- Log out as the ubuntu user and log back in as hugo
- Set hugo's account flag in the home directory:
  - `echo <FLAG> > flag.txt`
- Create a new directory for hugo's calculator app
- Copy the `progress_notes.txt` file across into this directory and fill it out with a public calculator repo
- In the calculator repo folder, generate an ssh key without a passphrase:
  - `ssh-keygen -t rsa -m PEM`
- Commit this to the repo and then revert the commit
- Log out and back into the default user and add this public key to the authorized keys for the root user
  - `sudo echo "paste your key in here" >> /root/.ssh/authorized_keys`
-
