# library-system-API

# Setup Instructions
1. Clone the repository: --git clone <your-repo-link>
2.Install dependencies:npm install
3. Create a `.env` file and add:MONGO_URI=your_mongodb_connection_string
PORT=8080.
4. Start the server:npm run dev

END POINTS
---
Authors
- POST /api/author → Create author  
- GET /api/authors → Get all authors  
- GET /api/authors/:id → Get single author  
- PUT /api/author/:id → Update author  
- DELETE /api/author/:id → Delete author  

---
 Books
- POST /api/book → Create book  
- GET /api/books → Get all books
- GET /api/books?p=2 → get book with pagination
- GET /api/books/:id → Get single book  
- PUT /api/book/:id → Update book  
- DELETE /api/book/:id → Delete book  

---
 Students
- POST /api/students → Create student  
- GET /api/students → Get all students  
- GET /api/student/:id → Get one student
- PUT /api/student/:id → Update student  

---
Library Attendants
- POST /api/attendants → Create attendant  
- GET /api/attendants → Get all attendants  

---
Borrow & Return

 Borrow Book
PATCH /api/book/:id/borrow

Request body:
json
{
  "studentId": "xxx",
  "attendantId": "xxx",
  "returnDate": "2026-04-10"
}

Return Book
PATCH /api/book/:id/return
