# ghs-website
Building GHS Website


To start the container built from the Dockerfile, follow these steps using the Docker CLI:

---

### 🛠️ **1. Build the Docker Image**
First, navigate to the directory containing your Dockerfile and run:

```bash
docker build -t ghs-nginx-app .
```

This creates an image named `ghs-nginx-app`.

---

### 🚀 **2. Run the Container**
Start the container and map port 80 from the container to your local machine:

```bash
docker run -d -p 80:80 --name ghs-container ghs-nginx-app
```

- `-d`: Runs the container in detached mode.
- `-p 80:80`: Maps port 80 on your machine to port 80 in the container.
- `--name nginx-container`: Assigns a name to the container.
- `my-nginx-app`: The image name you built earlier.

---

### 🔍 **3. Verify It's Running**
Check the container status:

```bash
docker ps
```

Then open your browser and visit:  
**http://localhost**

You should see the static site served from your `APP/` directory.
