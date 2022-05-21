-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!
/* para workbench - local - desenvolvimento */
create database pubgEsports;

use pubgEsports;

create table usuario(
	idUsuario int primary key auto_increment,
    nomeUsuario varchar(100),
    email varchar(100),
    senha varchar(12)
);

create table mapa(
	idMapa int primary key auto_increment,
    nomeMapa varchar(100)
);

create table timepubg(
	idTimePubg int primary key auto_increment,
    nomeTime varchar(100)
);

alter table usuario add column fkMapa int;
alter table usuario add column fkTimePubg int;

alter table usuario add foreign key (fkMapa) references mapa(idMapa);
alter table usuario add foreign key (fkTimePubg) references timePubg(idTimePubg);
 
insert into mapa(nomeMapa) values ('Erangel'), ('Miramar'), ('Sanhok'), ('Vikendi'), ('Taego');
insert into timePubg(nomeTime) values ('Brasil'), ('Canada'), ('Argentina'), ('Eua'), ('Australia'), 
('China'), ('Finlandia'), ('Alemanha'), ('Indonesia'), ('Japão'), ('Coreia do sul'), ('Tailândia'), ('Turquia'), ('Inglaterra'), ('Vietnam'), ('Nações unidas');

insert into usuario (nomeUsuario, email, senha, fkMapa, fkTimePubg)
	values ('admin', 'admin@gmail.com', 'admin123', 1, 5);
    
select * from usuario;
select * from mapa;
select * from timePubg;