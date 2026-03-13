# list_tables.py
from sqlalchemy import create_engine, text

# Connect to your MySQL database (localhost / 127.0.0.1)
engine = create_engine('mysql+pymysql://root:Anusiva%400554@127.0.0.1/beautyhub')

with engine.connect() as conn:
    # Show all tables
    result = conn.execute(text("SHOW TABLES;"))
    tables = [row[0] for row in result]
    if tables:
        print("Tables in beautyhub:", tables)
    else:
        print("No tables found in 'beautyhub'.")
