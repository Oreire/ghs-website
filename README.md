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

Containerised Image Pushed to Doxker Hub Registry
1. docker tag ghs-nginx-appv5 oresky73/ghs-nginx-appv5:latest

2. docker push oresky73/ghs-nginx-appv5:latest

## Validation of Image for DevSecOps

1. Appying container hardening, 
2. Secure build practices, 
3. Documentation standards.


## ✅ DevSecOps Compliance Validation for `ghs-nginx-appv5`

Based on current best practices, your image should meet the following criteria:

### 🔐 **1. Secure the Build Process**
- **Use a minimal base image**: ✅ `nginx:alpine` is lightweight and reduces attack surface.
- **Remove unnecessary files**: ✅ `RUN rm -rf ./*` clears default content.
- **Avoid secrets in Dockerfile**: Ensure no hardcoded credentials or tokens are present.
- **Use multi-stage builds** *(optional)*: For larger apps, this isolates build tools from runtime.

### 🧪 **2. Scan the Image**
- Use tools like **Trivy**, **Grype**, or **Docker Scout** to scan for vulnerabilities:
  ```bash
  trivy image ghs-nginx-appv5
  ```

### 🔏 **3. Sign and Verify**
- Use **Docker Content Trust (DCT)** to sign images:
  ```bash
  export DOCKER_CONTENT_TRUST=1
  docker push oresky73/ghs-nginx-appv5:latest
  ```

### 🔐 **4. Registry Security**
- ✅ Pushing to Docker Hub under `oresky73` is valid.
- Ensure **2FA is enabled** on your Docker Hub account.
- Set repository visibility and access controls appropriately.

### 🧰 **5. Runtime Security**
- Run containers as **non-root** where possible.
- Use `read-only` file systems and limit capabilities:
  ```bash
  docker run --read-only --cap-drop ALL ...
  ```

