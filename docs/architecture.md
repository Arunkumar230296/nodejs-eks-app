# Node.js EKS DevOps Project Architecture

## Project Overview

Node.js application deployed on AWS EKS using automated CI/CD and GitOps.

## GitHub Repositories

1. nodejs-eks-app - Application source code and deployment configuration.
2. nodejs-eks-infra - Terraform infrastructure automation.

## Application CI/CD Pipeline

1. Developer pushes code to GitHub.
2. GitHub Actions checks out the code.
3. Installs Node.js dependencies.
4. Runs application tests.
5. Runs code syntax checks.
6. Performs dependency security audit.
7. Builds Docker image.
8. Scans image using Trivy.
9. Pushes image to Docker Hub.
10. Updates Kubernetes deployment image.
11. ArgoCD detects the Git change and synchronizes EKS.

## AWS Infrastructure

Terraform provisions:

- VPC and public subnets
- Internet Gateway
- EKS cluster
- Managed worker nodes
- IAM roles and policies
- CloudWatch control-plane and VPC flow logs
- KMS encryption

## Kubernetes Deployment

- Deployment manages application pods.
- Service exposes pods internally.
- AWS Load Balancer Controller manages ALB Ingress.
- ArgoCD manages application deployment.

## Security

- GitHub Actions uses Docker Hub secrets.
- Trivy scans container images.
- Kubernetes containers run as non-root.
- AWS IAM controls resource access.
- AWS Secrets Manager stores application secrets.

## Monitoring

CloudWatch collects configured AWS infrastructure and EKS control-plane logs.

Container-level logging requires a logging agent such as Fluent Bit or CloudWatch Observability.

## GitOps

ArgoCD monitors the application repository and automatically synchronizes deployment changes to the EKS cluster.
