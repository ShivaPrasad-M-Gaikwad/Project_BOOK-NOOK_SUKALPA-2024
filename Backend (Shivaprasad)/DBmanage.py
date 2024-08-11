import pyodbc as odbc

_Driver = 'SQL SERVER'
_Server = r'SHIVAPRASAD\SQLEXPRESS'
_Database = 'Library-Recommendation-System'
_ConnectioString = f"""
    DRIVER={{{_Driver}}};SERVER={_Server};DATABASE={_Database};Trust_Connection=yes;
"""

# AddAuthUser/?Email_id=Admin%40gmail.com&Username=ADMIN&Passwords=Admin%40Admin
def AddAuthUser(Email_id: str,Username : str,Passwords: str):
    conn = odbc.connect(_ConnectioString)
    Cursor = conn.cursor()
    Cursor.execute(f"INSERT INTO Auth VALUES ('{Username}', '{Passwords}', '{Email_id}');")
    Cursor.commit()
    Cursor.close()
    conn.close()
    print("created")

# 1?email_id=upadmin%40gamail.com&username=upAdmin&passwords=uPpass
def UpdateAuthUser(id: int,Email_id: str,Username : str,Passwords: str):
    conn = odbc.connect(_ConnectioString)
    Cursor = conn.cursor()
    Cursor.execute(f"update Auth set Username = '{Username}', Passwords = '{Passwords}', Email_id = '{Email_id}' where id = {id};")
    Cursor.commit()
    Cursor.close()
    conn.close()
    print("Updated")


def GetAuthUser(username: str):
    conn = odbc.connect(_ConnectioString)
    Cursor = conn.cursor()
    Cursor.execute(f"select * from Auth where Username = '{username}'")
    result = Cursor.fetchall()

    if result:
        column_names = [col[0] for col in Cursor.description]
        for row_tuple in result:
            data_dict = dict(zip(column_names, row_tuple))
            return [data_dict]
    else:
        return {'Error' : "DATA NOT AVAILABLE IN THE DATABASE "}
    Cursor.close()
    conn.close()
# -----------------------------------------------------------------------------------------------------------------------------------------------

def ReadAllBooks():
    conn = odbc.connect(_ConnectioString)
    Cursor = conn.cursor()
    Cursor.execute('select * from [book-details]')

    result = Cursor.fetchall()
    data_dicts: list[dict] = []
    column_names = [col[0] for col in Cursor.description]
    for row_tuple in result:
        data_dict = dict(zip(column_names, row_tuple))
        data_dicts.append(data_dict) 
    Cursor.close()
    conn.close()

    return data_dicts


def ReadbyTitle(Book_Title: str):
    conn = odbc.connect(_ConnectioString)
    Cursor = conn.cursor()
    Cursor.execute(f"select * from [book-details] where Title = '{Book_Title}'")
    result = Cursor.fetchall()

    if result:
        column_names = [col[0] for col in Cursor.description]
        for row_tuple in result:
            data_dict = dict(zip(column_names, row_tuple))
            return [data_dict]
    else:
        return {'Error' : "DATA NOT AVAILABLE IN THE DATABASE "}
    Cursor.close()
    conn.close()

def Createbook(Title:str , Author: str, Publisher: str, Geners: str, Reviews: float,UserReview: str,Imageurl: str):
    conn = odbc.connect(_ConnectioString)
    Cursor = conn.cursor()
    Cursor.execute(f"insert into [book-details] values ('{Title}','{Author}','{Publisher}','{Geners}',{Reviews},'{UserReview}','{Imageurl}');")
    Cursor.commit()
    Cursor.close()
    conn.close()
    print("created")

def Delete(id: int):
    conn = odbc.connect(_ConnectioString)
    Cursor = conn.cursor()
    Cursor.execute(f"delete from [book-details] where id = {id}")
    Cursor.commit()
    Cursor.close()
    conn.close()
    print("Deleted")
    return "Deleted successfull!!!"

# 1 ?Title=up&author=up&publisher=up&Publication_Year=12&geners=egfvbh
def Update(title: str, Author:str , Publisher: str,Geners: str,Reviews: float,UserReview: str,Imageurl:str , iid: int):
    conn = odbc.connect(_ConnectioString)
    Cursor = conn.cursor()
    Cursor.execute(f"update [book-details] set Title = '{title}', Author='{Author}', Publisher='{Publisher}',Geners = '{Geners}',Reviews = {Reviews},user_review = {UserReview},Images = '{Imageurl}' where id={iid}")
    Cursor.commit()
    Cursor.close()
    conn.close()
    return "Updated successfull!!!"

# def getdatabygener():
#     conn = odbc.connect(_ConnectioString)
#     Cursor = conn.cursor()
#     Cursor.execute(f"insert into [book-details] values ('{Title}','{Author}','{Publisher}','{Geners}',{Reviews},'{Imageurl}');")
#     Cursor.commit()
#     Cursor.close()
#     conn.close()
#     print("created")

if __name__ == '__main__':
    print( GetAuthUser("Admin"))