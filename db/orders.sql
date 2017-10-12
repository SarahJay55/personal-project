CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    username_id INTEGER,
    prints_id INTEGER,
    size TEXT,
    print_type TEXT,
    quantity INTEGER
)