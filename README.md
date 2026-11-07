# Node.js EKS DevOps Project

An end-to-end DevOps project demonstrating automated application delivery to AWS EKS.

## Technologies

- Node.js
- Docker
- GitHub Actions
- Docker Hub
- Trivy
- AWS EKS
- Terraform
- Kubernetes
- Helm
- ArgoCD
- AWS Load Balancer Controller
- AWS Secrets Manager
- CloudWatch

## GitHub Repositories

Application:
https://github.com/Arunkumar230296/nodejs-eks-app

Infrastructure:
https://github.com/Arunkumar230296/nodejs-eks-infra

## Application Features

- Health check endpoint: /health
- Application endpoint: /
- Automated application tests
- Docker containerization
- Kubernetes deployment
- ALB Ingress configuration

## CI/CD Workflow

1. Push application changes to GitHub.
2. GitHub Actions installs dependencies.
3. Runs tests and code checks.
4. Performs dependency security audit.
5. Builds the Docker image.
6. Scans the image using Trivy.
7. Pushes the image to Docker Hub.
8. Updates the Kubernetes deployment image.
9. ArgoCD synchronizes changes to EKS.

## Infrastructure

Terraform provisions the AWS infrastructure, including the VPC, EKS cluster, worker nodes, IAM roles, and CloudWatch infrastructure logs.

## Deployment

ArgoCD monitors the application repository and synchronizes Kubernetes manifests with the EKS cluster.

Additional AWS components such as AWS Load Balancer Controller and Secrets Store CSI Driver require installation and configuration.

## Monitoring

CloudWatch is used for AWS infrastructure and EKS control-plane logs. Container log collection requires a configured logging agent.

## Project Status

Application files and infrastructure configuration are maintained in separate repositories. AWS integrations and deployment components must be configured and validated before production deployment.
