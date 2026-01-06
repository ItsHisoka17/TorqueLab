variable "aws_region" {
    description = "AWS Region for TorqueLab Servers"
    type = string
    default = "us-east-1"
}

variable "cidr" {
    description = "IPv4 cidr Block for the VPC"
    type = string
    default = "10.0.0.0/16"
}

variable "public_subnet_cidr" {
    description = "Public Subnet cidr Blocks"
    type = list(string)
    default = ["10.0.101.0/24", "10.0.102.0/24"]
}

variable "private_subnet_cidr" {
    description = "Private Subnect cidr Blocks"
    type = list(string)
    default = ["10.0.1.0/24", "10.0.2.0/24"]
}

variable "azs" {
  description = "Availability Zones"
  type        = list(string)
  default     = ["us-east-1a", "us-east-1b"]
}