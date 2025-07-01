# SDG Ferrari Dealer Coll

## Struttura del progetto

- `backend/` — Backend Python con FastAPI
  - `main.py` — Entry point FastAPI
  - `requirements.txt` — Dipendenze Python
- `frontend/` — Frontend React con Next.js
  - `package.json` — Configurazione npm
  - `pages/` — Pagine Next.js
    - `index.js` — Homepage di esempio

## Avvio rapido

### Backend
```bash
cd backend
python -m venv venv
venv\Scripts\activate  # Su Windows
pip install -r requirements.txt
uvicorn main:app --reload
```

### Frontend
```bash
cd frontend
npm install
npm run dev
```

---

Modifica i file secondo le tue esigenze!
