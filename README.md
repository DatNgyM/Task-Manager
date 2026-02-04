# 📋 Task Manager - Git Workflow Project

> **Template dự án thực hành Git workflow và teamwork cho 7 người**

## 🚀 Bắt Đầu Nhanh

### 1. Đọc Tài Liệu (Bắt buộc!)

**📖 Đọc theo thứ tự:**

```
1. docs/README.md          ← BẮT ĐẦU TẠI ĐÂY! 
2. docs/WORKFLOW.md        ← Quy trình Git chi tiết
3. docs/REFERENCES.md      ← Code templates & Git commands
4. docs/REVIEW.md          ← Checklist review (cho Reviewer)
```

### 2. Clone Repository

```bash
git clone <repo-url>
cd task-manager-group-project
git checkout develop
```

### 3. Xem Vai Trò của Bạn

Mở `docs/README.md` → Tìm vai trò → Follow hướng dẫn

---

## 📂 Cấu Trúc Project

```
task-manager-group-project/
├── docs/                      # 📚 Tất cả tài liệu ở đây
│   ├── README.md             # Hướng dẫn chính (BẮT ĐẦU ĐÂY!)
│   ├── WORKFLOW.md           # Quy trình Git + Requirements
│   ├── REFERENCES.md         # Templates + Git cheatsheet
│   └── REVIEW.md             # Checklist review code
│
├── src/                       # 💻 Source code
│   ├── pages/                # HTML pages
│   ├── css/                  # Stylesheets  
│   ├── js/                   # JavaScript
│   └── assets/               # Images, icons
│
├── index.html                 # Entry point
└── README.md                  # File này
```

---

## 👥 Vai Trò (7 Người)

| Vai Trò | Số Người | Nhiệm Vụ Chính |
|---------|----------|----------------|
| Product Owner | 1 | Tạo repo, quản lý project |
| Scrum Master | 1 | Hỗ trợ workflow, giải quyết conflicts |
| Team Lead | 1 | Review code, merge, integration |
| Developer 1 | 1 | Login feature |
| Developer 2 | 1 | Task list feature |
| Developer 3 | 1 | Add task feature |
| Reviewer | 1 | Review tất cả PRs |

**Mỗi Developer:** Ít nhất 2 commits hợp lệ + Pull Request

---

## 🌿 Git Workflow

```
main (production)
  └── develop (development)
        ├── feature/login
        ├── feature/task-list
        └── feature/add-task
```

**Quy tắc:**
- ❌ KHÔNG commit trực tiếp lên `main`
- ✅ Mọi thay đổi qua Pull Request
- ✅ Mỗi feature có branch riêng
- ✅ Code phải được review trước khi merge

---

## 💻 Công Nghệ

- **Frontend:** HTML5, CSS3, Vanilla JavaScript
- **Storage:** LocalStorage
- **Version Control:** Git + GitHub
- **No framework** - Giữ đơn giản!

---

## 📅 Timeline

- **Week 1:** Setup + Start development
- **Week 2:** Complete features + Code review
- **Week 3:** Integration + Release

---

## 🎯 Mục Tiêu Học Tập

✅ Git branching & Pull Request workflow  
✅ Code review process  
✅ Team collaboration  
✅ Web development basics  
✅ Problem solving skills

---

## 📚 Tài Liệu Chi Tiết

### Bắt buộc đọc:
- 📖 **[docs/README.md](docs/README.md)** - Hướng dẫn đầy đủ

### Đọc khi cần:
- 🔄 **[docs/WORKFLOW.md](docs/WORKFLOW.md)** - Git workflow chi tiết
- 📝 **[docs/REFERENCES.md](docs/REFERENCES.md)** - Code templates
- ✅ **[docs/REVIEW.md](docs/REVIEW.md)** - Review checklist

---

## ✅ Quick Checklist

**Đã làm chưa?**

- [ ] Đọc `docs/README.md`
- [ ] Clone repository
- [ ] Biết vai trò của mình
- [ ] Tạo feature branch (developers)
- [ ] Đọc code templates
- [ ] Bắt đầu coding!

---

## 🆘 Cần Trợ Giúp?

| Vấn đề | Đọc file |
|--------|----------|
| Không biết bắt đầu | `docs/README.md` |
| Git commands | `docs/REFERENCES.md` |
| Code templates | `docs/REFERENCES.md` |
| Workflow chi tiết | `docs/WORKFLOW.md` |
| Review code | `docs/REVIEW.md` |

---

## 🎉 Ready to Start?

**👉 MỞ VÀ ĐỌC: [docs/README.md](docs/README.md)**

---

_Project designed for Git workflow practice & team collaboration learning_

**Version:** 2.0 - Restructured (DRY & KISS principles)  
**Last updated:** February 2026

---

## 📝 Changelog

### v2.0 (2026-02-04)
- ✨ Restructured: Clean folder organization
- 📚 Consolidated docs (10 files → 4 files)
- 🗂️ Source code moved to `src/`
- 🎯 Applied DRY & KISS principles
- 📖 Improved documentation clarity

### v1.0 (2026-02-01)
- Initial release
