# 🎉 TASK MANAGER - DỰ ÁN THỰC HÀNH GIT WORKFLOW

## 📖 Mục Lục
- [Giới Thiệu](#giới-thiệu)
- [Bắt Đầu Nhanh](#bắt-đầu-nhanh)
- [Phân Công Nhóm](#phân-công-nhóm)
- [Cấu Trúc Dự Án](#cấu-trúc-dự-án)
- [Lộ Trình](#lộ-trình)

---

## 🎯 Giới Thiệu

**Template dự án hoàn chỉnh** để thực hành:
- ✅ Git workflow (branching, PR, merge)
- ✅ Làm việc nhóm 7 người
- ✅ Code review process
- ✅ Xây dựng web app đơn giản

### Công Nghệ:
- **Frontend:** HTML5, CSS3, Vanilla JavaScript
- **Storage:** LocalStorage
- **Version Control:** Git + GitHub
- **No framework** - Giữ đơn giản!

---

## 🚀 Bắt Đầu Nhanh

### Product Owner - Setup Repository

```bash
# 1. Tạo repo trên GitHub: task-manager-group-project
# 2. Clone về máy
git clone https://github.com/YOUR-USERNAME/task-manager-group-project.git
cd task-manager-group-project

# 3. Tạo branch develop
git checkout -b develop

# 4. Copy files vào project
# 5. Commit và push
git add .
git commit -m "chore: khởi tạo dự án"
git push -u origin develop

# 6. Add collaborators: Settings → Collaborators
```

### Team Members - Clone và Setup

```bash
# 1. Clone repository
git clone https://github.com/OWNER-USERNAME/task-manager-group-project.git
cd task-manager-group-project

# 2. Checkout develop
git checkout develop

# 3. Tạo feature branch (cho Developers)
git checkout -b feature/login           # Developer 1
git checkout -b feature/task-list       # Developer 2
git checkout -b feature/add-task        # Developer 3
```

### Workflow Hàng Ngày

```bash
# 1. Pull code mới nhất
git checkout develop
git pull origin develop
git checkout feature/your-feature
git merge develop

# 2. CODE...

# 3. Commit
git add .
git commit -m "feat: mô tả công việc"

# 4. Push
git push origin feature/your-feature

# 5. Tạo Pull Request trên GitHub
```

---

## 👥 Phân Công Nhóm

### 1️⃣ Product Owner (1 người)
**Nhiệm vụ:**
- Tạo và quản lý repository
- Setup develop branch
- Add collaborators
- Review và approve PR cuối cùng
- Tạo release

**Files:** `requirements.md`

---

### 2️⃣ Scrum Master (1 người)
**Nhiệm vụ:**
- Hỗ trợ team làm việc hiệu quả
- Theo dõi tiến độ
- Giải quyết merge conflicts
- Đảm bảo đúng Git workflow

**Files:** `WORKFLOW.md`

---

### 3️⃣ Team Lead (1 người)
**Nhiệm vụ:**
- Review code
- Merge feature branches vào develop
- Integration các features
- Quản lý code quality

**Files:** `index.html`, `src/css/style.css`, `src/js/main.js`

---

### 4️⃣ Developer 1 - Login Feature
**Nhiệm vụ:**
- Tạo branch `feature/login`
- Form đăng nhập với validation
- Lưu thông tin vào localStorage
- **Ít nhất 2 commits hợp lệ**

**Files:** `src/pages/login.html`, `src/css/login.css`, `src/js/login.js`

**Commits:**
```bash
git commit -m "feat: tạo giao diện trang đăng nhập"
git commit -m "feat: thêm logic xử lý đăng nhập và validation"
```

---

### 5️⃣ Developer 2 - Task List Feature
**Nhiệm vụ:**
- Tạo branch `feature/task-list`
- Hiển thị danh sách tasks
- Filter (All/Pending/Completed)
- Đánh dấu hoàn thành và xóa
- **Ít nhất 2 commits hợp lệ**

**Files:** `src/pages/task-list.html`, `src/css/task-list.css`, `src/js/task-list.js`

**Commits:**
```bash
git commit -m "feat: tạo giao diện danh sách công việc với filters"
git commit -m "feat: thêm logic hiển thị và quản lý tasks"
```

---

### 6️⃣ Developer 3 - Add Task Feature
**Nhiệm vụ:**
- Tạo branch `feature/add-task`
- Form thêm task với validation
- Lưu vào localStorage
- Modal thông báo thành công
- **Ít nhất 2 commits hợp lệ**

**Files:** `src/pages/add-task.html`, `src/css/add-task.css`, `src/js/add-task.js`

**Commits:**
```bash
git commit -m "feat: tạo form thêm công việc mới"
git commit -m "feat: thêm logic validation và lưu task"
```

---

### 7️⃣ Reviewer (1 người)
**Nhiệm vụ:**
- Review tất cả Pull Requests
- Comment và feedback constructive
- Approve hoặc Request Changes
- Đảm bảo code quality

**Files:** `REVIEW.md`

---

## 📂 Cấu Trúc Dự Án

```
task-manager-group-project/
│
├── docs/                          # 📚 Tài liệu
│   ├── README.md                  # File này - Hướng dẫn chính
│   ├── WORKFLOW.md                # Quy trình Git chi tiết
│   ├── REFERENCES.md              # Code templates & Git commands
│   └── REVIEW.md                  # Checklist review code
│
├── src/                           # 💻 Source code
│   ├── pages/                     # HTML pages
│   │   ├── login.html            (Developer 1)
│   │   ├── task-list.html        (Developer 2)
│   │   └── add-task.html         (Developer 3)
│   │
│   ├── css/                       # Stylesheets
│   │   ├── style.css             (Team Lead)
│   │   ├── login.css             (Developer 1)
│   │   ├── task-list.css         (Developer 2)
│   │   └── add-task.css          (Developer 3)
│   │
│   ├── js/                        # JavaScript
│   │   ├── main.js               (Team Lead)
│   │   ├── login.js              (Developer 1)
│   │   ├── task-list.js          (Developer 2)
│   │   └── add-task.js           (Developer 3)
│   │
│   └── assets/                    # Images, icons
│       └── images/
│
├── index.html                     # Entry point (Team Lead)
└── .gitignore                     # Git ignore
```

---

## 🗺️ Lộ Trình

### Week 1: Setup & Start
```
Day 1-2:  Đọc docs → Setup repo → Clone
Day 3-5:  Developers: Commit 1 (HTML + CSS)
Day 6-7:  Review progress
```

### Week 2: Development & Review
```
Day 8-10:  Developers: Commit 2 (JavaScript)
Day 11-12: Create Pull Requests
Day 13-14: Code review → Fix feedback → Approve
```

### Week 3: Integration & Release
```
Day 15-17: Team Lead: Merge all → Integration → Fix bugs
Day 18-19: Final testing → PR develop → main
Day 20-21: Release v1.0.0 → Celebration! 🎉
```

---

## 🌿 Git Branch Structure

```
main (production)
  └── develop (development)
        ├── feature/login          (Developer 1)
        ├── feature/task-list      (Developer 2)
        └── feature/add-task       (Developer 3)
```

**Quy tắc:**
1. KHÔNG commit trực tiếp lên `main`
2. Mọi thay đổi qua Pull Request
3. Mỗi feature có branch riêng
4. Merge vào develop trước, main sau cùng

---

## ✅ Checklist Hoàn Thành

### Setup Phase
- [ ] Đọc docs/README.md
- [ ] Repository được tạo
- [ ] Tất cả members có access
- [ ] Develop branch setup

### Development Phase
- [ ] Mỗi developer có 2+ commits
- [ ] Pull Requests created
- [ ] Code reviewed và approved

### Completion Phase
- [ ] Tất cả features merged vào develop
- [ ] Integration completed
- [ ] Merged vào main
- [ ] Release created

---

## 📚 Tài Liệu Chi Tiết

Đọc thêm trong folder `docs/`:

1. **WORKFLOW.md** - Quy trình Git từng bước chi tiết
2. **REFERENCES.md** - Code templates và Git commands
3. **REVIEW.md** - Checklist review code

---

## 🎯 Mục Tiêu Học Tập

Sau dự án, bạn sẽ học được:

✅ **Git Skills:**
- Branching strategy
- Pull Request workflow
- Code review process
- Conflict resolution

✅ **Web Development:**
- HTML5 semantic structure
- CSS responsive design
- Vanilla JavaScript
- LocalStorage

✅ **Teamwork:**
- Role responsibilities
- Communication
- Code review etiquette
- Problem solving

---

## 💡 Tips Quan Trọng

### Cho Tất Cả:
1. 📖 Đọc docs theo thứ tự
2. 🤝 Communication là chìa khóa
3. ❓ Hỏi khi không hiểu
4. ⏰ Commit thường xuyên
5. 🧪 Test trước khi push

### Cho Developers:
1. Ít nhất 2 commits có ý nghĩa
2. Test responsive design
3. Viết PR description rõ ràng
4. Respond to review comments
5. Copy templates từ REFERENCES.md

### Cho Reviewers:
1. Review kỹ càng nhưng constructive
2. Feedback rõ ràng có ví dụ
3. Review nhanh (trong 24h)
4. Praise good code
5. Focus on learning

---

## 🆘 Khi Cần Trợ Giúp

| Vấn đề | Hỏi ai | Đọc file |
|--------|--------|----------|
| Git workflow | Scrum Master | docs/WORKFLOW.md |
| Code templates | - | docs/REFERENCES.md |
| Requirements | Product Owner | docs/WORKFLOW.md |
| Code review | Reviewer | docs/REVIEW.md |
| Merge conflict | Team Lead | docs/WORKFLOW.md |

---

## 🌟 Success Metrics

Dự án thành công khi:

✅ Tất cả 7 người hoàn thành vai trò  
✅ Mỗi developer có 2+ commits  
✅ Tất cả features merged vào main  
✅ Web app chạy không lỗi  
✅ Team học được Git workflow  
✅ Code được review properly  
✅ Good communication

---

## 🎉 Bước Tiếp Theo

1. ✅ Đọc xong file này
2. 👉 Đọc **docs/WORKFLOW.md** để hiểu chi tiết quy trình
3. 👉 Đọc **docs/REFERENCES.md** để có code templates
4. 💪 Bắt đầu coding!

---

**Good luck và have fun! 🚀**

> "The best way to learn Git is to use it with a team on a real project."

_Embrace mistakes, ask questions, help each other!_

---

_Version 2.0 - Restructured for DRY & KISS principles_  
_Last updated: February 2026_
