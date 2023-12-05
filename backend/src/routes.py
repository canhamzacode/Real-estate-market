from fastapi import Depends, FastAPI
from src.resources import property



def add_routers(app: FastAPI, config):
    """
    Include routes
    :param app:
    :param config:
    :return: None
    """

    app.include_router(property.router, prefix="/api/v1")

    