# PDF-Translate-Using-Django
This project was meant for hands-on learning of Django MVC framework. It reads the texts from a PDF and translates it into the selected language. The original PDF and the translated PDF are stored on the server in media directory. 

![Screenshot (52)](https://user-images.githubusercontent.com/39291426/115433514-4892c500-a225-11eb-9099-2c5723e495ee.png)

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

![Screenshot (55)](https://user-images.githubusercontent.com/39291426/115433766-87c11600-a225-11eb-9b63-fc848c2df472.png)

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

![Screenshot (54)](https://user-images.githubusercontent.com/39291426/115433789-8db6f700-a225-11eb-8d6a-56328bd295b4.png)



# Database Details
This project uses postgresql as Database. Create a database named "cp2" with username "postgres" and password "1234". Run the following script 

- CREATE SEQUENCE book_mst_seq;

- CREATE SEQUENCE translation_book_map_seq;

- CREATE TYPE language_enum AS ENUM ('Chinese', 'Spanish', 'English', 'Hindi', 'Arabic', 'Bengali', 'Portuguese', 'Russian', 'Japanese', 'Indonesian');

- CREATE TABLE book_mst (id INT DEFAULT nextval ('book_mst_seq'), book_name VARCHAR(255), book_author VARCHAR(255), book_path VARCHAR(511), input_language language_enum, is_private SMALLINT, created_by INT, created_date timestamp(0) DEFAULT current_timestamp);

- CREATE TABLE translation_book_map (id INT DEFAULT nextval ('translation_book_map_seq'), book_id int references book_mst(id) on delete no action on update no action, translated_language language_enum, translated_book_path varchar(511), created_by int, created_date datetime DEFAULT current_timestamp);

# Setting up the Project
Clone the project, then open cp2 directory. Run the following commands. DO NOT RUN "python manage.py makemigrations" command. I'll keep updating the list for all the necessary commands for installing pytorch and other necessary library's for this project.
1. python manage.py migrate
2. ###Yet To update the commands.

# Run the project
To run the server you can simply use the following command.
- python manage.py runserver
