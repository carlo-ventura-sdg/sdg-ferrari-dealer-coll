import logging
from fastapi import FastAPI
import os
from dotenv import load_dotenv
from contextlib import asynccontextmanager
import asyncpg
from fastapi.middleware.cors import CORSMiddleware


load_dotenv()

DATABASE_URL = os.getenv("DATABASE_URL")

logger = logging.getLogger("uvicorn.error")


async def lifespan(app: FastAPI):
    app.state.db_pool = await asyncpg.create_pool(DATABASE_URL)
    logger.info("✅ DB connection pool created")
    yield
    await app.state.db_pool.close()
    logger.info("🛑 DB connection pool closed")


app = FastAPI(lifespan=lifespan)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/dealerData")
async def get_data():
    async with app.state.db_pool.acquire() as conn:
        rows = await conn.fetch("SELECT * FROM ferrari_dso WHERE dealer='100006013' AND market='USA'")
        result = [dict(row) for row in rows]
        return {"db_response": result}
    
@app.get("/regionData")
async def get_data():
    async with app.state.db_pool.acquire() as conn:
        rows = await conn.fetch("SELECT * FROM ferrari_dso WHERE market='USA' AND dso_status='In Process'")
        result = [dict(row) for row in rows]
        return {"reg_response": result}
    
@app.get("/monthDSO")
async def get_data():
    async with app.state.db_pool.acquire() as conn:
        rows = await conn.fetch("SELECT * FROM ferrari_month_dso WHERE month LIKE '%2025%'")
        grouped = {}

    for row in rows:
        row_dict = dict(row)
        month = row_dict["month"]
        dso = row_dict["dso"]
        
        if month not in grouped:
            grouped[month] = []
        
        grouped[month].append(dso)

    return {"month_response": grouped}
