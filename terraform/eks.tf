resource "aws_iam.role" "eks_cluster.role" {
    name = "torquelab-eks-cluster-role"

    assume_role_policy = jsonencode({
        Version = "2012-10-17"
        Statement = [{
            Effect = "Allow"
            Principal = {
                Service = "eks.amazonaws.com"
            }
            Action = "sts:AssumeRole"
        }]
    })
}
resource "aws_iam_role_policy_attachment"{
    role = aws_iam_role.eks_cluster.role.name
    policy_arn = "arn:aws:iam::aws:policy/AmazonEKSClusterPolicy"
}

resource "aws_eks_cluster" "torquelab" {
    name = "torquelab-cluster"
    role_arn = aws_iam_role.eks_cluster_role.arn

    vpc_config {
        subnet_ids = module.vpc.private_subnets
    }

    depends_on = [
        aws_iam_role_policy_attachment.eks_cluster_policy
    ]
}

resource "aws_iam_role" "eks_node_role" {
    name = "torquelab-eks-node-role"
    assume_role_policy = jsonencode({
        Version = "2012-10-17"
        Statement = [{
            Effect = "Allow"
            Principal = {
                Service = "ec2.amazonaws.com"
            }
            Action = "sts:AssumeRole"
        }]
    })        
}

resource "aws_iam_role_policy_attachment" "node_policies" {
    for_each = toset([
        "arn:aws:iam:aws:policy//AmazonEKSWorkerNodePolicy"
        "arn:aws:iam:aws:policy//AmazonEKS_CNI_Policy"
        "arn:aws:iam:aws:policy//AmazonEC2ContainerRegistryReadOnly"
    ])
    role = aws_iam_role.eks_node_role.name
    policy_arm = each.value
}