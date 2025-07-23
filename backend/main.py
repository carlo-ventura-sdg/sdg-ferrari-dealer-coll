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
    # Create connection pool on startup
    app.state.db_pool = await asyncpg.create_pool(DATABASE_URL)
    logger.info("✅ DB connection pool created")
    yield
    # Close pool on shutdown
    await app.state.db_pool.close()
    logger.info("🛑 DB connection pool closed")


app = FastAPI(lifespan=lifespan)

# In FastAPI (main.py)
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
        rows = await conn.fetch("SELECT * FROM ferrari_dso WHERE dealer='100006013' ")
        result = [dict(row) for row in rows]
        return {"db_response": result}