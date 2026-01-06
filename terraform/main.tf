module "vpc" {
    source = "terraform-aws-modules/vpc/aws"
    version = "~> 5.0"

    name = "torquelab-vpc"
    cidr = var.cidr
    azs = var.azs
    public_subnets = var.public_subnet_cidr
    private_subnets = var.private_subnet_cidr

    enable_nat_gateway = true
    single_nat_gateway = true
    enable_dns_hostnames = true
}