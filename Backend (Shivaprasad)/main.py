from DBmanage import ReadAllBooks, ReadbyTitle,GetAuthUser,AddAuthUser,Delete,Update,UpdateAuthUser,Createbook
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "DELETE"],
    allow_headers=["*"],
    
)
@app.get("/api/GetAuthUser/{Username}")
def Auth(Username: str):
    RES = GetAuthUser(Username)
    print(f"GetAuthUser returned successfully!!!")
    return RES

@app.put("/api/UpdateAuthUser/{id}")
def updateuser(email_id: str,username : str,passwords: str,id:int):
    RES = UpdateAuthUser(Email_id=email_id,Passwords=passwords,Username=username,id=id)
    print(f"Updated Successfully!!!")
    return "Updated Successfully!!!"

@app.post("/api/AddAuthUser/")
def Create(Email_id: str,Username : str,Passwords: str):
    RES = AddAuthUser(Email_id,Username,Passwords)
    print(f"Created Successfully!!!")
    return "Created Successfully!!!"

# Title
# Author(s)
# Publisher
# Year of publication
# Format (PDF, ePub, etc.)
# Access link or file
# Licensing information
# Number of copies/licenses available
@app.get('/')
def Default_Route():
    return  'LIBRARY-RECOMMENDATION-SYSTEM API'
    
@app.get("/api/getdata/all")
def getdata():
    RES = ReadAllBooks()
    print(f"All data returned successfully!!!")
    return RES


@app.get("/api/getdata/{title}")
def getdatabyid(title:str):
    RES = ReadbyTitle(title)
    print(f"data of {title} returned successfully!!!")
    return RES


@app.put("/api/updatedata/{id}")
def UpdateRoute(id: int, Title:str , author: str, publisher: str, geners: str,reviews: float,userreview: str, imageurl: str):
    RES = Update(title=Title,Author=author,Publisher=publisher,Geners=geners,Imageurl=imageurl,iid=id,Reviews=reviews,UserReview=userreview)
    print(f"Updated Successfully!!!")
    return "Updated Successfully!!!"

@app.delete("/api/deletedata/{id}")
def DeleteRoute(id : int):
    RES = Delete(id)
    print(f"Deleted Successfully!!!")
    return "Deleted Successfully!!!"

# /addbook/?title=shivasbook&author=shivaprasad&publisher=shivaprasad&geners=joy&reviews=4.1
@app.post("/api/addbook/")
def Create(title:str , author: str, publisher: str, geners: str, reviews: float,userreview: str,imageurl : str):
    RES = Createbook(Title=title,Author=author,Publisher=publisher,Geners=geners,Reviews=reviews, UserReview=userreview,Imageurl=imageurl)
    print(f"Created Successfully!!!")
    return "Created Successfully!!!"
