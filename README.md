# Loki + Grafana + Promtail + Node.js Logging Stack (Ubuntu Deploy Ready)

This project provides a complete logging stack using Docker Compose for use on a Linux (Ubuntu) host.

## 📦 Components

- **Loki** – log aggregation system
- **Grafana** – metrics/logs dashboard
- **Promtail** – log collector from host & Docker containers
- **Node.js API** – example app that sends logs to Loki

---

## ✅ Requirements

- Linux-based system (tested on Ubuntu 22.04)
- Docker
- Docker Compose

---

## ⚙️ Installation Steps

### 1. Install Docker and Docker Compose

```
sudo apt update
sudo apt install -y docker.io docker-compose
sudo systemctl enable docker
sudo usermod -aG docker $USER
newgrp docker
```

### 2. Clone or extract the project

```
unzip loki-grafana-logging-stack-with-promtail.zip
cd loki-grafana-logging-stack
```

### 3. Start the stack

```
docker-compose up -d --build
```

> This will build the Node.js API, start Loki, Promtail, and Grafana.

---

## 🌐 Access Services

| Service | URL |
|--------|-----|
| Grafana | [http://localhost:3001](http://localhost:3001) |
| Node.js API | [http://localhost:3000](http://localhost:3000) |

**Grafana Login:**  
Username: `admin`  
Password: `admin`

---

## 📊 Grafana Usage

1. Navigate to **Configuration → Data Sources → Add Data Source**
2. Choose **Loki**
3. Set URL: `http://loki:3100`
4. Save & Test

### 🔍 Explore Logs

Use these example queries in the **Explore** section:

- `{job="node-api"}` – Logs from Node.js app
- `{job="docker-logs"}` – Logs from all Docker containers
- `{job="systemd-journal"}` – System logs from host via journald

---

## 📁 File Structure

```
.
├── docker-compose.yml
├── loki-config.yaml
├── promtail-config.yaml
├── grafana-storage/ (volume)
├── loki-data/ (volume)
└── api/
    ├── Dockerfile
    ├── package.json
    └── index.js
```

---

## 📌 Notes

- Promtail is configured to collect logs from:
  - `/var/log/journal`
  - `/var/lib/docker/containers/*/*.log`
- All volumes are persistent and managed by Docker Compose

---

## 🧼 Stopping and Cleaning Up

```
docker-compose down -v
```

---

## 🙋 Need Help?

Feel free to open an issue or contact the maintainer.