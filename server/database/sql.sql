create table users(
	id int primary key,
	name nvarchar(20),
	created_at timestamp default current_timestamp,
	updated_at timestamp default current_timestamp
)

