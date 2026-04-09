# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.



# Elementum1 Project

## 🚀 How to Run the Project (Docker)

### 1. Build the Docker image

```bash
docker build -t elementum1 .
```

### 2. Run the container

```bash
docker run -p 8080:80 elementum1
```

### 3. Open in browser

http://localhost:8080

---

## 📦 Tech Stack

* React (Vite)
* Docker
* Nginx

---

## ✅ Notes

* Ensure Docker Desktop is running before executing commands.
* The app runs on port 8080.
