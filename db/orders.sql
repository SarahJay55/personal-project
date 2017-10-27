create table orders (
    id serial primary key,
    prints_id integer references prints (id),
    email varchar(100)
    )