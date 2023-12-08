import uvicorn
from fastapi import FastAPI, Request
from src.config.settings import Settings
from src.config.db import init_db
from src.routes import add_routers


from fastapi.middleware.cors import CORSMiddleware


def create_app(_config: Settings):
    _app = FastAPI()

    _app.add_middleware(
        CORSMiddleware,
        allow_origins=["*"],
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )


    @_app.get("/")
    def index():
        return {"message": "hmm if you are seing this. the app is up and running"}

    add_routers(app=_app, config=_config)
    return _app


# Load configuration
config = Settings.load_config()

# Create app
app = create_app(config)



# Initialize database
init_db(app)

if __name__ == '__main__':
    uvicorn.run("main:app", port=config.PORT)
