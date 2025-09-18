# Finance Dashboard

Una dashboard React per la gestione delle finanze personali. Supporta login simulato, ruoli utente, Redux, transazioni, chiamate API e stili Bootstrap.

## Caratteristiche

- Login con ruoli (user / admin)
- Routing dinamico con React Router
- Gestione stato globale con Redux Toolkit
- Azioni asincrone con Redux Thunk
- JSON Server come backend fittizio (mock API)
- Bootstrap per UI responsive
- Form controllati con validazione (vedi `TransactionForm.jsx`)
- Aggiunta transazioni in tempo reale tramite il form
- Pagine protette per admin

## Struttura progetto

```
src/
├── App.jsx
├── main.jsx
├── components/
│   └── TransactionForm.jsx
├── pages/
│   ├── Home.jsx
│   ├── Login.jsx
│   ├── Dashboard.jsx
│   ├── Transactions.jsx
│   ├── TransactionDetail.jsx
│   └── AdminPanel.jsx
├── redux/
│   ├── store.js
│   ├── authSlice.js
│   └── transactionSlice.js
├── styles/
│   └── global.css
├── api.js
├── assets/
│   └── background.jpg
```

## Come avviare il progetto

### 1. Clona o scarica il progetto:
```bash
git clone <url>
cd finance-dashboard
```

### 2. Installa le dipendenze:
```bash
npm install
```

### 3. Avvia il frontend React:
```bash
npm run dev
```

### 4. In un'altra finestra, avvia JSON Server:
```bash
npm run json-server
```

Apri:
- React app: http://localhost:5173
- JSON API: http://localhost:3000

## Script disponibili

```json
"scripts": {
  "dev": "vite",
  "json-server": "json-server --watch db.json --port 3000"
}
```

## Endpoints API (`db.json`)
- /transactions → lista transazioni
- /users → utenti fittizi (admin/user)

## Ruoli e Accessi

| Pagina           | User | Admin |
|------------------|------|--------|
| Home             | Sì   | Sì     |
| Dashboard        | Sì   | Sì     |
| Transactions     | Sì   | Sì     |
| Admin Panel      | No   | Sì     |

## Tech Stack

- React + Vite
- Redux Toolkit + Thunk
- React Router DOM
- Axios
- JSON Server
- Bootstrap

## File importanti

- components/TransactionForm.jsx – form controllato con Redux
- pages/Transactions.jsx – include form e lista
- redux/transactionSlice.js – gestione async delle transazioni
- redux/store.js – configurazione Redux store
- App.jsx – routing e layout principali
- db.json – database mock per JSON Server

## Note

Il login è simulato. Nessuna password o token reale viene gestito.

## TODO Futuro

- [ ] Filtri e paginazione reali sulle transazioni
- [ ] Grafici dinamici (Chart.js o Recharts)
- [ ] Esportazione CSV
- [ ] Notifiche toast per conferme o errori
