# 📚 Library Management System

## 📌 รายละเอียดโปรเจกต์

โปรเจกต์นี้เป็นระบบ **Library Management System** ที่พัฒนาขึ้นเพื่อสาธิตการออกแบบระบบแบบ **Client–Server Architecture** และ **Layered Architecture** โดยแยกหน้าที่ของ Frontend และ Backend ออกจากกันอย่างชัดเจน

---

## 🏗 Architecture Overview

### 🔹 Frontend (Client)

* HTML / CSS / JavaScript (Vanilla JS)
* รันด้วย `python3 -m http.server`
* ทำหน้าที่แสดงผล UI และเรียก API จาก Backend

### 🔹 Backend (Server)

* Node.js + Express
* ออกแบบแบบ Layered Architecture

  * Routes
  * Controllers
  * Services
  * Repositories
* ให้บริการในรูปแบบ REST API

### 🔹 Database

* SQLite
* เก็บข้อมูลหนังสือในรูปแบบไฟล์ `library.db`

---

## 🔄 System Architecture

* Frontend และ Backend แยกกันรันคนละพอร์ต
* Frontend ติดต่อ Backend ผ่าน HTTP (JSON)
* Backend ไม่ serve UI (API only)

---

## ▶️ วิธีรันโปรเจกต์

### 1️⃣ Backend

```bash
cd midterm/backend
node server.js
```

เมื่อรันสำเร็จ จะเห็นลิงก์:

```
http://192.168.56.101:3000
http://192.168.56.101:3000/api/books
```

---

### 2️⃣ Frontend

```bash
cd midterm/frontend/public
./start-frontend.sh
```

เปิด Browser ที่:

```
http://localhost:8000
```

---

## ✨ Features

* เพิ่มหนังสือ (Add Book)
* แก้ไขข้อมูลหนังสือ (Edit Book)
* ยืม / คืนหนังสือ (Borrow / Return)
* ลบหนังสือ (Delete Book)
* กรองหนังสือตามสถานะ (All / Available / Borrowed)

---

## 🧪 การทดสอบระบบ

* ทดสอบผ่าน Frontend UI
* ทดสอบผ่าน REST API ด้วย `curl`
* ตรวจสอบ Network Request ผ่าน Browser DevTools

---

## 📖 สรุป

โปรเจกต์นี้แสดงให้เห็นถึงการแยกความรับผิดชอบของระบบ (Separation of Concerns) และการทำงานแบบ Client–Server อย่างชัดเจน เหมาะสำหรับใช้เป็นตัวอย่างในการเรียนรู้สถาปัตยกรรมซอฟต์แวร์
