# TorqueLab

This project I built focuses on building and deploying a full-stack application with an emphasis on modern containerization and infrastructure practices. The goal was to gain hands-on experience with Docker, Kubernetes, and production-style service architecture.

---

## Tech Stack

**Frontend**
- React
- Vite
- TypeScript
- Nginx (static file serving)

**Backend**
- Node.js
- Express
- TypeScript

**Infrastructure**
- Docker (multi-stage builds)
- Docker Compose (local orchestration)
- Kubernetes
  - Deployments
  - Services (ClusterIP)
  - Ingress (NGINX)

---

## Key Concepts Applied

### Containerization
- Built production-ready Docker images for both frontend and backend
- Implemented multi-stage builds for optimized image size
- Managed runtime environments and dependency installation

### Frontend Deployment
- Compiled static assets using Vite
- Served production build via Nginx
- Configured SPA routing using `try_files`

### Backend Services
- Containerized Node.js API
- Exposed internal service ports for inter-service communication

### Service Orchestration
- Defined Kubernetes Deployments for frontend and backend
- Configured Services for internal networking
- Implemented label selectors for pod routing

### Ingress and Networking
- Configured NGINX Ingress Controller
- Routed traffic using host and path-based rules
- Managed separation between frontend (`/`) and backend (`/api`)

### Debugging and Troubleshooting
- Diagnosed container runtime issues
- Resolved port forwarding and service exposure problems
- Debugged Nginx configuration and static file serving
- Investigated Kubernetes networking (endpoints, selectors, ingress behavior)

---

## Local Development

Run with Docker Compose:

```bash
docker compose up --build
```

- Frontend: http://localhost
- Backend: http://localhost:3000

---

## Kubernetes Deployment

Apply manifests:

```bash
kubectl apply -f k8s/
```


Resources include:
- Deployments for frontend and backend
- ClusterIP Services
- Ingress configuration for routing

---

## Summary

This project demonstrates practical experience with:
- Containerizing full-stack applications
- Managing multi-service architectures
- Configuring and debugging Kubernetes resources
- Implementing ingress-based routing
- Bridging local development and production-style infrastructure