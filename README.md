# 📌 Gerenciador de Tarefas Colaborativo (Estilo Trello)

Gerenciador de tarefas colaborativo em tempo real, inspirado no **Trello**, desenvolvido com **Node.js, Express, MongoDB, Socket.IO (backend)** e **React + Vite + Socket.IO Client (frontend)**.

Permite criar **boards, listas e cards**, com **atualizações instantâneas via WebSockets**. Ideal para equipes que desejam gerenciar tarefas de forma simples e colaborativa.

---

## 🏗️ Arquitetura

```text
          ┌───────────────────────────┐
          │         Frontend          │
          │  React + Vite + Socket.IO │
          │  (UI, chamadas API)       │
          └───────────▲───────────────┘
                      │ HTTP + WS
                      ▼
          ┌───────────────────────────┐
          │         Backend           │
          │ Node.js + Express +       │
          │ MongoDB + Socket.IO       │
          │ (APIs REST + Eventos)     │
          └───────────▲───────────────┘
                      │
                      ▼
          ┌───────────────────────────┐
          │         Banco             │
          │       MongoDB             │
          │ Boards, Lists, Cards      │
          └───────────────────────────┘
```

---

## 🚀 Tecnologias Utilizadas

* **Backend:** Node.js, Express, MongoDB, Mongoose, Socket.IO
* **Frontend:** React, Vite, Axios, Socket.IO Client
* **Outros:** Dotenv, Nodemon, CORS

---

## ⚙️ Como rodar o projeto

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/kanban-collab.git
cd kanban-collab
```

### 2. Configurar o Backend

```bash
cd backend
npm install
cp .env.example .env
```

No arquivo `.env` configure:

```env
PORT=4000
MONGO_URI=mongodb://localhost:27017/kanban
```

Inicie o servidor:

```bash
npm run dev
```

### 3. Configurar o Frontend

```bash
cd ../frontend
npm install
npm run dev
```

O frontend ficará disponível em:
👉 `http://localhost:5173`

---

## 📖 Modo de Uso

1. Abra o frontend no navegador.
2. Crie um novo **Board** (projeto).
3. Dentro do board, adicione **listas** (etapas, ex: To Do, Doing, Done).
4. Em cada lista, adicione **cards** (tarefas).
5. As alterações são **sincronizadas em tempo real** entre todos os usuários conectados.

---

## 🖼️ Prints & Documentação

* Adicione prints da aplicação em:

  ```
  docs/screenshots/
  ```

Exemplo:

```
docs/screenshots/home.png
docs/screenshots/board.png
```

---

## 📌 Melhorias Futuras

* Autenticação de usuários.
* Permissões por board.
* Drag & Drop com persistência no banco.
* Notificações em tempo real.

---

📢 Projeto criado para aprendizado de **arquitetura fullstack + WebSockets**.

---

Quer que eu já gere esse **README.md** dentro do mesmo `.zip` do projeto que você baixou (com o front/back juntos)?
