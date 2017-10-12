ALTER TABLE orders
ADD FOREIGN KEY (prints_id) REFERENCES prints(id)
