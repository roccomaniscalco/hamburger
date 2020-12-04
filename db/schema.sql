drop database if exists burgers_db
create database burgers_db
use burgers_db;

create table burgers
(
    id int not null auto_increment primary key,
    burger_name varchar(250) not null,
    devoured boolean not null default false,
)