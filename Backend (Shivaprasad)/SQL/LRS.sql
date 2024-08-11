create database [Library-Recommendation-System]

Use [Library-Recommendation-System]

-- Title
-- Author(s)
-- Publisher

create table [book-details] (id int identity(1,1) primary key,Title Varchar(150),Author varchar(150),Publisher Varchar(150), Geners varchar(150),Reviews float,user_review varchar(2000),Images varchar(1000))



insert into [book-details] values ('test','test','test','Horror',4.3,'edcfvghuiydtfxcvbhuytyrdgfchgvbhgyft','url1');
insert into [book-details] values ('test2','test2','test2',2000,'romance')

--drop table [book-details]





select * from [book-details] where Gener = 'horror'

delete from [book-details] where id = 29



create table Auth (id int identity(1,1) primary key,Username varchar(150) unique,Passwords varchar(150),Email_id varchar(150))

insert into Auth values ('Admin','Admin','Admin@gmail.com')
--drop table Auth

truncate table Auth


select * from Auth 
select * from nf 

USE your_database_name;

INSERT INTO [book-details] (Title, Author, Publisher, Geners, Reviews, user_review, Images) VALUES
('To Kill a Mockingbird', 'Harper Lee', 'HarperCollins', 'Fiction', 4.8, 'Excellent', 'https://i.postimg.cc/6p46K7kk/To-Kill-AMocking-Bird.jpg'),
('The Great Gatsby', 'F. Scott Fitzgerald', 'Scribner', 'Fiction', 4.5, 'Excellent', 'https://i.postimg.cc/nhppyd2x/The-Great-Gatsby.jpg'),
('Pride and Prejudice', 'Jane Austen', 'Penguin Classics', 'Fiction', 4.6, 'Excellent', 'https://i.postimg.cc/QtX7VkjZ/Pride-And-Prejudice.jpg'),
('The Catcher in the Rye', 'J.D. Salinger', 'Brown and Company', 'Fiction', 4.3, 'Excellent', 'https://i.postimg.cc/HnRSXsWm/Thecather-In-The-Eye.jpg'),
('Gone Girl', 'Gillian Flynn', 'Crown Publishing Group', 'Thriller', 4.1, 'Excellent', 'https://i.postimg.cc/T13V18r6/Gone-Girl-Gillian-Flynn.jpg'),
('The Girl with the Dragon Tattoo', 'Stieg Larsson', 'Alfred A. Knopf', 'Thriller', 4.2, 'Excellent', 'https://i.postimg.cc/N0Gmpqzr/The-Girl-With-The-Dragon-Tattoo.jpg'),
('Big Little Lies', 'Liane Moriarty', 'Amy Einhorn Book', 'Thriller', 4.4, 'Excellent', 'https://i.postimg.cc/jdgbLzr0/Big-Little-Lies.jpg'),
('The Da Vinci Code', 'Dan Brown', 'Doubleday', 'Thriller', 4.0, 'Good', 'https://i.postimg.cc/NfSQd1C8/The-Da-Vinci-Code.jpg'),
('In the Woods', 'Tana French', 'Viking Adult', 'Thriller', 4.3, 'Excellent', 'https://i.postimg.cc/SsfWrQy8/In-The-Woods.jpg'),
('Dune', 'Frank Herbert', 'Chilton Books', 'Science Fiction', 4.7, 'Excellent', 'https://i.postimg.cc/j2568V3j/Dune.jpg'),
('Ender''s Game', 'Orson Scott Card', 'Tor Books', 'Science Fiction', 4.6, 'Excellent', 'https://i.postimg.cc/zBMF3zk1/Enders-Game.jpg'),
('Neuromancer', 'William Gibson', 'Ace Books', 'Science Fiction', 4.5, 'Excellent', 'https://i.postimg.cc/gJ417ZdH/Neuromance.jpg'),
('Snow Crash', 'Neal Stephenson', 'Bantam Books', 'Science Fiction', 4.4, 'Excellent', 'https://i.postimg.cc/g2ksMTjQ/Snow-Crash.jpg'),
('The Left Hand of Darkness', 'Ursula K. Le Guin', 'Harper & Row', 'Science Fiction', 2.6, 'Average', 'https://i.postimg.cc/14xt8TTt/The-Left-Hand-Of-Darkness.jpg'),
('The Hobbit', 'J.R.R. Tolkien', 'George Allen & Unwin', 'Fantasy', 4.8, 'Excellent', 'https://i.postimg.cc/zBV2BPK4/The-Hobbit.jpg'),
('Harry Potter and the Sorcerer''s Stone', 'J.K. Rowling', 'Scholastic (US)', 'Fantasy', 4.9, 'Excellent', 'https://i.postimg.cc/bwG2Mt7H/Harry-Potter-Ans-The-Sorcers-Stone.jpg'),
('A Game of Thrones', 'George R.R. Martin', 'Bantam Books', 'Fantasy', 4.7, 'Excellent', 'https://i.postimg.cc/t443pnhM/Game-Of-Thrones.jpg'),
('The Name of the Wind', 'Patrick Rothfuss', 'DAW Books', 'Fantasy', 4.6, 'Excellent', 'https://i.postimg.cc/MZ4HvM2L/The-Name-Of-The-Wind.jpg'),
('The Lies of Locke Lamora', 'Scott Lynch', 'Bantam Books', 'Fantasy', 4.5, 'Excellent', 'https://i.postimg.cc/3JxM59c5/The-Lies-Locker-Lamora.jpg'),
('Outlander', 'Diana Gabaldon', 'Delacorte Press', 'Romance', 4.4, 'Excellent', 'https://i.postimg.cc/66vV6GyH/Outlander.jpg'),
('The Notebook', 'Nicholas Sparks', 'Warner Books', 'Romance', 4.3, 'Excellent', 'https://i.postimg.cc/Sx0vNhS9/NoteBook.jpg'),
('Me Before You', 'Jojo Moyes', 'Pamela Dorman Books', 'Romance', 4.2, 'Excellent', 'https://i.postimg.cc/ZntwYPZS/Me-Before-You.jpg'),
('Eleanor Oliphant Is Completely Fine', 'Gail Honeyman', 'Viking Penguin', 'Romance', 4.5, 'Excellent', 'https://i.postimg.cc/W4m3fT3w/Eleanor-Oil-Phant-Is-Completely.jpg'),
('Sapiens: A Brief History of Humankind', 'Yuval Noah Harari', 'Harper', 'Classic', 4.8, 'Excellent', 'https://i.postimg.cc/dtmJY4vJ/Sapians.jpg'),
('Educated', 'Tara Westover', 'Random House', 'Classic', 4.7, 'Excellent', 'https://i.postimg.cc/VsWhsTSZ/Educated.jpg'),
('Becoming', 'Michelle Obama', 'Crown Publishing Group', 'Classic', 4.9, 'Excellent', 'https://i.postimg.cc/1z10qm2G/Becoming-By-Michella-Obama.jpg'),
('The Immortal Life of Henrietta Lacks', 'Rebecca Skloot', 'Crown', 'Classic', 4.6, 'Excellent', 'https://i.postimg.cc/668hgmrG/The-Immortal-Life-Of-Henritta-Lacks.jpg'),
('The Wright Brothers', 'David McCullough', 'Simon & Schuster', 'Classic', 4.5, 'Excellent', 'https://i.postimg.cc/L8543jKR/The-Wright-Brothers.jpg');

create table userv (id int identity(1,1) primary key,borrowed varchar(150))

exec sp_rename '',''

select * from userv
