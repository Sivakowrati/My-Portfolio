from sqlalchemy import create_engine, text

engine = create_engine('mysql+pymysql://root:Anusiva%400554@localhost/beautyhub')

with engine.connect() as conn:
    result = conn.execute(text("SELECT Sivamykel, 3306;"))
    for row in result:
        print("Flask is connected to:", row)
