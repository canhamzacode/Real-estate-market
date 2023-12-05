from pydantic import BaseModel, EmailStr
from typing import List

class ContactBase(BaseModel):
    phone_number: str
    email: EmailStr

class Location(BaseModel):
    lat: float
    long: float

class PropertyBase(BaseModel):
    id: str | None
    display_image_id: str | None
    video_id: str | None
    address: str | None
    price: float | None
    size: float | None
    no_of_bedrooms: int | None
    description: str | None
    amenities: list[str] | None
    contact: ContactBase | None
    location: Location | None
    active: bool | None

class PropertiesReturn(BaseModel):
    search: str
    limit: int
    page: int
    total: int
    data: List[PropertyBase] | None



    
    
    
    
    