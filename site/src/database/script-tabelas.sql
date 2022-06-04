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
('China'), ('Finlandia'), ('Alemanha'), ('Indonesia'), ('Japão'), ('Coreia do sul'), ('Tailândia'), ('Turquia'), ('Inglaterra'), ('Vietnam'), ('chinese taipe');

insert into usuario (nomeUsuario, email, senha, fkMapa, fkTimePubg)
	values ('admin', 'admin@gmail.com', 'admin123', 1, 5);

insert into usuario(nomeUsuario, email, senha, fkTimePubg)
values ('Thiago', 'thiago@gmail.com', 'thiago123', 3),
		('Joel', 'joel13@gmail.com', 'joel123', 6),
        ('Carlos', 'carlos@gmail.com', 'carlos123', 8),
        ('Gomes', 'gomes@gmail.com', 'gomes123', 7),
        ('Tamara', 'tamara@gmail.com', 'tamara123', 10),
        ('Gustavo', 'gustavo@gmail.com', 'gustavo123', 9),
        ('Luan', 'luan13@gmail.com', 'luan123', 5),
        ('Fernando', 'fernando@gmail.com', 'fernando123', 9),
        ('Fernanda', 'fernanda@gmail.com', 'fernanda123', 11),
        ('Ricardo', 'ricardo@gmail.com', 'ricardo123', 13),
        ('João', 'joao13@gmail.com', 'joao123', 12),
        ('Bruno', 'bruno@gmail.com', 'bruno123', 14),
        ('Rafael', 'rafael@gmail.com', 'rafael123', 16),
        ('Vitor', 'vitor@gmail.com', 'vitor123', 1),
        ('Maria', 'maria@gmail.com', 'maria123', 2),
        ('Gabriela', 'gabriela@gmail.com', 'gabriela123', 4);
    
select * from usuario;
select * from mapa;
select * from timePubg;