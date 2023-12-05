from typing import Annotated, List
from fastapi import APIRouter, Query
from src.models.schema import property

from pydantic import BaseModel

class GeneralReturn(BaseModel):
    message: str | None
    error: str | None
    status: int


router = APIRouter(prefix="/property", tags=["Property"])


@router.get("/")
async def get_properties(q: Annotated[str, Query(description="this accept the search query being made")] = None, page: Annotated[int | None, Query(description="from the name it the current paginated index", gt=0)] = 1
                         , limit: Annotated[int | None, Query(description="This is the max number of items to be return. Max is 30", gt=0)] = 10):
    
    """
    ## ma nigga stop playin
    
    """
    
    if not limit or limit > 30:
        limit = 10
    
    print(q, page)
    
    
    pb = property.PropertiesReturn(search=q, limit=limit, page=page)
    
    
    return pb.model_dump()


@router.get("/get_feed", response_model=List[property.PropertyBase])
async def get_feed(page: Annotated[int | None, Query(description="from the name it the current paginated index", gt=0)] = 1
                         , limit: Annotated[int | None, Query(description="This is the max number of items to be return. Max is 30", gt=0)] = 10):
    
    """
    ## returns array or properties
    
    """
    
    if not limit or limit > 30:
        limit = 10
    
    pb = property.PropertiesReturn()
    
    return [pb]


@router.get("get", response_model=property.PropertyBase)
async def get_property(id: Annotated[str, Query(description="this accept the search query being made")] = None):    
    
    pb = property.PropertyBase()
    return pb

@router.post("add", response_model=GeneralReturn)
async def add_property(property: property.PropertyBase):


    g = GeneralReturn()
    g.status = 200
    return g

@router.post("update", response_model=GeneralReturn)
async def update_property(property: property.PropertyBase):
    
    g = GeneralReturn()
    g.status = 200
    return g

@router.delete("delete", response_model=GeneralReturn)
async def delete_property(id: Annotated[str, Query(description="this accept the search query being made")] = None):
    return {"message": "these are the properties"}

