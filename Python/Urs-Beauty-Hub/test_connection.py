from sqlalchemy import create_engine, text  # <-- import text

# Connection string (password URL-encoded)
engine = create_engine('mysql+pymysql://root:Anusiva%400554@localhost/beautyhub')

try:
    with engine.connect() as connection:
        # Wrap the SQL in text()
        result = connection.execute(text("SHOW TABLES;"))
        tables = [row[0] for row in result]
        print("Tables in beautyhub:", tables)
except Exception as e:
    print("Error:", e)
