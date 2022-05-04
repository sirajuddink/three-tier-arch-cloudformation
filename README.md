Challenge 1: 
1. CF will deploy VPC, Subnets and NAT Gateways for the Private Subnet.
2. There are three YAML file in this repo 
	- VPC Creation
	- RDS
	- Application Stack

Steps to be  followed:
	1. Deploy VPC Stack first
	2. Deploy RDS
	3. Deploy Application Stack

Note: This CF will only deploy a infra, to deploy a application like Java or NodeJS or any other code CF template will require modification in Userdata to install and deploy the code on the instances and in the SG Port as of now the internal app server is set to listen on port 3000 but it can be change to any other port like 8080 as per the application port and route the request via Route53 to Internal Load Balancer to reach the application server and from application server to the RDS MySQL DB. 

This CF will only create a RDS instance but to create table and insert the Data in it Lambda can be utilized to be trigger using SSM Document in combination with SSM State Manager once the RDS is launched.

This CF can also be automated through the Jenkins or CodePipeline so that no user interference is require. 

