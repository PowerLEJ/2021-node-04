-- CRUD : Create, Read, Update, Delete
-- SQL : Structured Query Language

-- Create
-- INSERT INTO books (bookName, writer, content ) VALUES ('별주부전', '까북이','용왕이 나의 간을...');
-- INSERT INTO books SET bookName='구운몽전', writer='구운몽', content='나비가 나를 ...';

-- Update
-- UPDATE books SET bookName="별주세요", writer="거북이" WHERE id=2;

-- Delete
-- DELETE FROM books WHERE id=3;

-- Read
-- SELECT * FROM books ORDER BY id DESC; -- ASC는 오름차순

-- SELECT * FROM books ORDER BY id DESC LIMIT 10, 5; --시작레코드, 갯수
-- SELECT COUNT(*) FROM books;
-- SELECT * FROM books WHERE id = 1;
-- SELECT * FROM books WHERE bookName LIKE '%길동%';
-- SELECT * FROM books WHERE bookName LIKE '%길동%' OR content LIKE '%나를%';

-- JOIN
-- SELECT books.*, files.id AS fid, files.oriname, files.savename FROM books LEFT JOIN files ON books.id = files.bookid ORDER BY books.id DESC