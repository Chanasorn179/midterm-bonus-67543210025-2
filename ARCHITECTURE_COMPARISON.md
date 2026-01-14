# Architecture Comparison

เอกสารฉบับนี้จัดทำขึ้นเพื่อเปรียบเทียบความแตกต่างระหว่าง  
**Layered Architecture (ก่อนปรับปรุง)** และ  
**Client–Server Architecture (หลังปรับปรุงระบบ)**  
ที่ใช้ในโครงงาน Library Management System

---

## Layered Architecture (Before)

ในระยะแรก ระบบถูกออกแบบโดยใช้ Layered Architecture  
ซึ่ง Frontend และ Backend ยังอยู่ภายในโปรเจกต์เดียวกัน  
และมีการเรียกใช้งานกันโดยตรง

### Pros:
- โครงสร้างระบบเข้าใจง่าย เหมาะสำหรับระบบขนาดเล็ก
- แยกหน้าที่ของโค้ดออกเป็นชั้น (Layer) เช่น Controller, Service, Repository
- พัฒนาได้รวดเร็ว และตั้งค่าไม่ซับซ้อน
- เหมาะสำหรับการเรียนรู้พื้นฐานการออกแบบระบบ

### Cons:
- Frontend และ Backend ผูกติดกันแน่น (Tight Coupling)
- ไม่เหมาะกับระบบที่ต้องขยายในอนาคต
- ไม่สามารถแยกการรัน Frontend และ Backend ออกจากกันได้
- ไม่สะท้อนการทำงานแบบระบบจริงในสภาพแวดล้อม Client–Server

---

## Client–Server Architecture (After)

หลังจากปรับปรุง ระบบถูกออกแบบใหม่ให้เป็น Client–Server Architecture  
โดยแยก Frontend และ Backend ออกจากกันอย่างชัดเจน  
และสื่อสารกันผ่าน REST API

### Pros:
- แยก Frontend และ Backend อย่างชัดเจน (Loose Coupling)
- Frontend และ Backend สามารถพัฒนาและรันแยกกันได้
- รองรับการขยายระบบในอนาคตได้ง่าย
- สอดคล้องกับการพัฒนาระบบจริงในอุตสาหกรรม
- สามารถรองรับ Client หลายประเภทได้ (Web, Mobile, etc.)

### Cons:
- โครงสร้างระบบซับซ้อนมากขึ้น
- ต้องจัดการเรื่องการสื่อสารผ่านเครือข่าย
- ต้องคำนึงถึง CORS และรูปแบบ API
- ใช้เวลาในการออกแบบมากกว่าระบบแบบรวมศูนย์

---

## Changes Made

### 1. Separation
- แยก Frontend และ Backend ออกเป็น 2 โปรเจกต์อย่างชัดเจน
- Frontend ทำหน้าที่แสดงผลและรับคำสั่งจากผู้ใช้
- Backend ทำหน้าที่เป็น REST API และจัดการฐานข้อมูล

---

### 2. Communication
- เปลี่ยนการเรียกใช้งานภายในระบบ  
  เป็นการสื่อสารผ่าน REST API
- ใช้โปรโตคอล HTTP และรูปแบบข้อมูล JSON
- Frontend ไม่สามารถเข้าถึงฐานข้อมูลโดยตรง

---

### 3. CORS
- เพิ่ม CORS middleware ใน Backend
- เพื่ออนุญาตให้ Client ที่รันอยู่คนละ origin  
  สามารถเรียกใช้งาน API ได้
- แก้ปัญหาการเรียก API ข้ามเครื่อง (Local ↔ VM)

---

### 4. API Response Format
- กำหนดรูปแบบการตอบกลับของ API ให้เป็นมาตรฐานเดียวกัน
- ใช้โครงสร้าง:
  ```json
  {
    "success": true,
    "data": {},
    "timestamp": "ISO-8601"
  }
