# ghs-website

# 🌐 GHS Website Deployment Guide

This guide outlines the steps to build and run a containerised static website using NGINX and Docker. The site is served from the `APP/` directory and packaged into a lightweight Alpine-based image.

## 📦 Prerequisites

Ensure the following are installed and configured on your system:

- [Docker](https://www.docker.com/products/docker-desktop)

## 🛠️ Step 1: Build the Docker Image

Navigate to the directory containing the `Dockerfile` and run:

```bash
docker build -t ghs-nginx-app .
```

This command builds a Docker image named `ghs-nginx-app` using the instructions defined in the `Dockerfile`.

---

## 🚀 Step 2: Run the Container

Start the container and map port 80 from the container to the local machine:

```bash
docker run -d -p 80:80 --name ghs-container ghs-nginx-app
```

### 🔍 Flags Explained

- `-d` — Runs the container in detached mode.
- `-p 80:80` — Maps port 80 on your host to port 80 in the container.
- `--name ghs-container` — Assigns a name to the running container.
- `ghs-nginx-app` — The image name built in Step 1.

---

## ✅ Step 3: Verify the Deployment

Check the container status:

docker ps

Then open your browser and visit:


http://localhost


The static site is served from the `APP/` directory.


## 🧾 Notes

- If port 80 is already in use, consider mapping to an alternative port (e.g. `-p 8080:80`) and access via `http://localhost:8080`.
- Ensure the `APP/` directory is correctly referenced in your `Dockerfile` and exists in the build context.
- For production deployments, consider container hardening, HTTPS configuration, and CI/CD integration.


## 📌 Attribution

This deployment guide was authored by **Ayomide Ajayi** and must be referenced accordingly in all derivative works or institutional integrations.

