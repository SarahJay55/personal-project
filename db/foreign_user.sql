ALTER TABLE orders
ADD FOREIGN KEY (username_id) REFERENCES users(id)
