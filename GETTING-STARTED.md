# 🚀 HƯỚNG DẪN BẮT ĐẦU - NHÓM 7 NGƯỜI

> **Dành cho Product Owner và Team Members**  
> **Project:** Task Manager - Git Workflow Practice

---

## 📋 YÊU CẦU TỪ BÀI TẬP

### ✅ Yêu Cầu Chính
- ✅ **Có ít nhất 2 commits hợp lệ** mỗi developer
- ✅ **KHÔNG commit trực tiếp lên main**
- ✅ **Làm việc theo Git Flow:**
  - `main` (production) ← Merge từ develop
  - `develop` (development) ← Merge từ feature branches
  - `feature/*` (các tính năng) ← Developers làm việc
- ✅ **Pull Request & Code Review** bắt buộc
- ✅ **7 thành viên** với vai trò rõ ràng

---

## 👥 PHÂN CÔNG VAI TRÒ 7 NGƯỜI

| STT | Vai Trò | Người | Nhiệm Vụ Chính |
|-----|---------|-------|----------------|
| 1 | **Product Owner** | Bạn | Tạo repo, setup, quản lý project, add collaborators |
| 2 | **Scrum Master** | Người 2 | Hỗ trợ workflow, giải quyết conflicts Git |
| 3 | **Team Lead** | Người 3 | Review & merge PRs, integration testing |
| 4 | **Developer 1** | Người 4 | Feature **Login** (2+ commits) |
| 5 | **Developer 2** | Người 5 | Feature **Task List** (2+ commits) |
| 6 | **Developer 3** | Người 6 | Feature **Add Task** (2+ commits) |
| 7 | **Reviewer** | Người 7 | Review tất cả Pull Requests |

---

## 🎯 PHẦN 1: PRODUCT OWNER - SETUP REPOSITORY

### Bước 1: Tạo Repository trên GitHub

1. Vào GitHub: https://github.com
2. Click nút **"New"** (repository mới)
3. Điền thông tin:
   - **Repository name:** `task-manager-group-project` (hoặc tên bạn muốn)
   - **Description:** "Task Manager - Git Workflow Practice for 7 members"
   - **Public** hoặc **Private** (tùy chọn)
   - **KHÔNG** tick "Initialize with README" (vì đã có code)
4. Click **"Create repository"**

---

### Bước 2: Commit Code Hiện Tại

Mở **PowerShell** hoặc **Git Bash** tại thư mục `e:\Task-Manager`:

```bash
# 1. Kiểm tra trạng thái
git status

# 2. Add tất cả files
git add .

# 3. Commit đầu tiên (Initial commit)
git commit -m "chore: initialize Task Manager project

- Setup project structure (docs/, src/)
- Add complete documentation (README, WORKFLOW, REFERENCES)
- Create templates for 3 features (login, task-list, add-task)
- Configure .gitignore
- Version 2.0 - Restructured with DRY & KISS principles"

# 4. Đổi tên branch thành main (nếu cần)
git branch -M main
```

---

### Bước 3: Kết Nối với GitHub Repository

**Lấy URL từ GitHub** (sau khi tạo repo, GitHub sẽ hiển thị):

```bash
# Thay [USERNAME] và [REPO-NAME] bằng thông tin của bạn
git remote add origin https://github.com/[USERNAME]/task-manager-group-project.git

# Ví dụ: 
# git remote add origin https://github.com/datdat/task-manager-group-project.git

# Kiểm tra remote
git remote -v
```

---

### Bước 4: Push Main Branch

```bash
# Push branch main lên GitHub
git push -u origin main
```

**✅ Kiểm tra:** Vào GitHub repository, bạn sẽ thấy code đã lên!

---

### Bước 5: Tạo và Push Branch Develop

```bash
# 1. Tạo branch develop
git checkout -b develop

# 2. Push develop lên GitHub
git push -u origin develop
```

**✅ Kiểm tra:** Trên GitHub → tab "Branches" → Sẽ thấy 2 branches: `main` và `develop`

---

### Bước 6: Bảo Vệ Branch Main (Khuyến nghị)

**Trên GitHub:**

1. Vào repository → **Settings** → **Branches**
2. Click **"Add rule"** tại "Branch protection rules"
3. Branch name pattern: `main`
4. Tick các options:
   - ✅ **Require pull request reviews before merging**
   - ✅ **Require status checks to pass before merging**
   - ✅ **Include administrators** (nếu muốn nghiêm ngặt)
5. Click **"Create"**

**Kết quả:** Không ai (kể cả bạn) commit trực tiếp lên `main` được!

---

### Bước 7: Add Collaborators (6 thành viên còn lại)

**Trên GitHub:**

1. Vào repository → **Settings** → **Collaborators**
2. Click **"Add people"**
3. Nhập **username** hoặc **email** của từng người
4. Gửi invitation
5. Họ vào email → Accept invitation

**Lặp lại 6 lần** cho 6 thành viên còn lại.

---

### Bước 8: Share Repository URL với Team

**Gửi cho team:**

```
Repository URL: https://github.com/[USERNAME]/task-manager-group-project

Các bạn làm theo:
1. Accept invitation từ GitHub (check email)
2. Clone repository: 
   git clone https://github.com/[USERNAME]/task-manager-group-project.git
3. Đọc file GETTING-STARTED.md (file này) để biết vai trò
4. Đọc docs/README.md để biết chi tiết công việc
```

---

## 👨‍💻 PHẦN 2: TEAM MEMBERS - CLONE & SETUP

### Developer 1, 2, 3 và các thành viên khác:

```bash
# 1. Clone repository (sau khi accept invitation)
git clone https://github.com/[USERNAME]/task-manager-group-project.git

# 2. Vào thư mục project
cd task-manager-group-project

# 3. Kiểm tra branches
git branch -a

# 4. Checkout sang develop
git checkout develop

# 5. Xem cấu trúc
ls
```

**✅ Hoàn thành:** Bạn đã có code trên máy!

---

## 🔨 PHẦN 3: DEVELOPERS - BẮT ĐẦU CODING

### 📌 Quick Reference - Commit Messages Cho Copy

**Developer 1 - Login:**
```bash
# Commit 1
git commit -m "feat: create login page UI with form and styling"

# Commit 2
git commit -m "feat: add login handling logic and validation"
```

**Developer 2 - Task List:**
```bash
# Commit 1
git commit -m "feat: create task list UI with filters"

# Commit 2
git commit -m "feat: add task display and filter logic"
```

**Developer 3 - Add Task:**
```bash
# Commit 1
git commit -m "feat: create add task form with validation"

# Commit 2
git commit -m "feat: add task creation logic to localStorage"
```

---

### Developer 1 - Login Feature

```bash
# 1. Đảm bảo ở develop và có code mới nhất
git checkout develop
git pull origin develop

# 2. Tạo feature branch
git checkout -b feature/login

# 3. Coding Commit 1 (HTML + CSS)
# - Mở src/pages/login.html → Code form login
# - Mở src/css/login.css → Style cho form

# Sau khi code xong:
git add src/pages/login.html src/css/login.css
git commit -m "feat: create login page UI with form and styling"

# 4. Coding Commit 2 (JavaScript)
# - Mở src/js/login.js → Code logic validation

git add src/js/login.js
git commit -m "feat: add login handling logic and validation"

# 5. Push lên GitHub
git push -u origin feature/login

# 6. Tạo Pull Request trên GitHub
# - Base: develop ← Compare: feature/login
# - Assign Reviewer
```

---

### Developer 2 - Task List Feature

```bash
# 1. Checkout develop
git checkout develop
git pull origin develop

# 2. Tạo feature branch
git checkout -b feature/task-list

# 3. Coding - Commit 1 (HTML + CSS)
git add src/pages/task-list.html src/css/task-list.css
git commit -m "feat: create task list UI with filters"

# 4. Coding - Commit 2 (JavaScript)
git add src/js/task-list.js
git commit -m "feat: add task display and filter logic"

# 5. Push
git push -u origin feature/task-list

# 6. Tạo Pull Request
```

---

### Developer 3 - Add Task Feature

```bash
# 1. Checkout develop
git checkout develop
git pull origin develop

# 2. Tạo feature branch
git checkout -b feature/add-task

# 3. Coding - Commit 1 (HTML + CSS)
git add src/pages/add-task.html src/css/add-task.css
git commit -m "feat: create add task form with validation"

# 4. Coding - Commit 2 (JavaScript)
git add src/js/add-task.js
git commit -m "feat: add task creation logic to localStorage"

# 5. Push
git push -u origin feature/add-task

# 6. Tạo Pull Request
```

---

## 🔍 PHẦN 4: REVIEWER - REVIEW PULL REQUESTS

### Workflow Review:

1. **Vào GitHub** → Tab **"Pull requests"**
2. Click vào PR cần review
3. Tab **"Files changed"** → Xem code changes
4. Click vào dòng code → **Add comment** nếu có vấn đề
5. Tab **"Conversation"** → Click **"Review changes"**:
   - **Comment:** Chỉ comment, không approve/reject
   - **Approve:** Code OK, có thể merge
   - **Request changes:** Code cần sửa
6. Submit review

### Review Checklist (xem `docs/REVIEW.md` để chi tiết):

**Functionality:**
- [ ] Feature hoạt động đúng
- [ ] Validation đầy đủ
- [ ] Không có lỗi console

**Code Quality:**
- [ ] Code clean và readable
- [ ] Có comments cho logic phức tạp
- [ ] Follow coding standards

**Git:**
- [ ] Có ít nhất 2 commits
- [ ] Commit messages rõ ràng
- [ ] Branch name đúng format

---

## ✅ PHẦN 5: TEAM LEAD - MERGE PULL REQUESTS

### Sau khi PR được approve:

**Option 1: Merge trên GitHub (Khuyến nghị)**

1. Vào PR đã **Approved**
2. Kiểm tra:
   - ✅ Approved by Reviewer
   - ✅ No conflicts
3. Click **"Merge pull request"**
4. Chọn **"Create a merge commit"**
5. Click **"Confirm merge"**
6. Click **"Delete branch"** (optional)

**Option 2: Merge bằng command line**

```bash
# 1. Checkout develop
git checkout develop
git pull origin develop

# 2. Merge feature branch
git merge feature/login --no-ff

# 3. Push
git push origin develop

# 4. Xóa branch (optional)
git branch -d feature/login
git push origin --delete feature/login
```

---

## 🎉 PHẦN 6: FINAL RELEASE (develop → main)

### Sau khi merge tất cả 3 features vào develop:

**Team Lead tạo PR từ develop → main:**

1. Trên GitHub → **"New pull request"**
2. Base: `main` ← Compare: `develop`
3. Title: `release: Task Manager v1.0.0`
4. Description:
   ```markdown
   ## Release v1.0.0
   
   ### Features
   - ✅ Login feature (Developer 1)
   - ✅ Task list feature (Developer 2)
   - ✅ Add task feature (Developer 3)
   
   ### Testing
   - [x] All features tested
   - [x] Integration testing completed
   - [x] No conflicts
   
   Ready for production! 🚀
   ```
5. Assign **Product Owner** để review cuối
6. **Product Owner** approve → Merge vào `main`

**🎉 Hoàn thành! Release v1.0.0**

---

## 📊 WORKFLOW DIAGRAM

```
┌─────────────────────────────────────────────┐
│  MAIN (Production)                          │
│  ❌ KHÔNG commit trực tiếp                  │
│  ✅ Chỉ merge từ develop qua PR            │
└──────────────▲──────────────────────────────┘
               │
               │ PR: develop → main (final release)
               │
┌──────────────┴──────────────────────────────┐
│  DEVELOP (Development)                      │
│  ⚠️  Chỉ merge từ feature branches         │
└──┬───────────┬────────────┬─────────────────┘
   │           │            │
   │ PR1       │ PR2        │ PR3
   │           │            │
   ▼           ▼            ▼
┌──────┐  ┌──────────┐  ┌──────────┐
│LOGIN │  │TASK-LIST │  │ADD-TASK  │
│Dev 1 │  │Dev 2     │  │Dev 3     │
│2+    │  │2+        │  │2+        │
│commits│  │commits   │  │commits   │
└──────┘  └──────────┘  └──────────┘
```

---

## ✅ CHECKLIST TỔNG HỢP

### Phase 1: Setup (Product Owner)
- [ ] Tạo GitHub repository
- [ ] Commit code lên main
- [ ] Tạo và push branch develop
- [ ] Bảo vệ branch main (optional)
- [ ] Add 6 collaborators
- [ ] Share repo URL với team

### Phase 2: Clone (All Members)
- [ ] Accept GitHub invitation
- [ ] Clone repository
- [ ] Checkout branch develop
- [ ] Đọc documentation

### Phase 3: Development (Developers)
- [ ] Developer 1: feature/login (2+ commits)
- [ ] Developer 2: feature/task-list (2+ commits)
- [ ] Developer 3: feature/add-task (2+ commits)
- [ ] Mỗi developer tạo Pull Request

### Phase 4: Review (Reviewer)
- [ ] Review PR của Developer 1
- [ ] Review PR của Developer 2
- [ ] Review PR của Developer 3

### Phase 5: Integration (Team Lead)
- [ ] Merge PR 1 vào develop
- [ ] Merge PR 2 vào develop
- [ ] Merge PR 3 vào develop
- [ ] Test integration

### Phase 6: Release (Product Owner + Team Lead)
- [ ] Tạo PR develop → main
- [ ] Final review
- [ ] Merge vào main
- [ ] Release v1.0.0 🎉

---

## 📚 TÀI LIỆU THAM KHẢO

Trong project có sẵn các tài liệu chi tiết:

- 📖 **`docs/README.md`** - Hướng dẫn đầy đủ cho từng vai trò
- 🔄 **`docs/WORKFLOW.md`** - Chi tiết Git workflow từng bước
- 📝 **`docs/REFERENCES.md`** - Git commands & code templates
- ✅ **`docs/REVIEW.md`** - Review checklist chi tiết
- 🏗️ **`docs/STRUCTURE.md`** - Cấu trúc project

---

## 🆘 XỬ LÝ SỰ CỐ

### Quên tạo feature branch, đã code trên develop?

```bash
git stash                      # Lưu code tạm
git checkout -b feature/login  # Tạo branch đúng
git stash pop                  # Lấy code ra
git add .
git commit -m "..."
```

### Bị conflict khi merge?

```bash
# 1. Update develop
git checkout develop
git pull origin develop

# 2. Merge develop vào feature
git checkout feature/login
git merge develop

# 3. Sửa conflict trong file
# 4. Add và commit
git add .
git commit -m "fix: resolve merge conflict"
git push
```

### Push bị reject?

```bash
git pull origin [branch-name] --rebase
git push
```

---

## 📝 COMMIT MESSAGE CONVENTION

### Format Chuẩn:

```
<type>: <subject>

<body (optional)>
```

### Types (Loại commit):

| Type | Khi nào dùng | Ví dụ |
|------|--------------|-------|
| `feat` | Thêm tính năng mới | `feat: create login page UI` |
| `fix` | Sửa bug | `fix: resolve password validation issue` |
| `docs` | Thay đổi documentation | `docs: update README with setup steps` |
| `style` | Thay đổi style/CSS | `style: improve button hover effects` |
| `refactor` | Refactor code | `refactor: extract validation to utils` |
| `test` | Thêm tests | `test: add login form validation tests` |
| `chore` | Các thay đổi khác | `chore: initialize project structure` |

### Ví Dụ Commit Messages Tốt:

```bash
# ✅ GOOD - Ngắn gọn, rõ ràng, tiếng Anh
git commit -m "feat: create login page UI with form and styling"
git commit -m "feat: add login handling logic and validation"
git commit -m "fix: resolve email validation bug"
git commit -m "style: update responsive layout for mobile"

# ✅ GOOD - Có body để giải thích chi tiết
git commit -m "feat: add task filter functionality

- Add dropdown for filter selection
- Implement filter logic for pending/completed tasks
- Update UI to show active filter"
```

### Ví Dụ Commit Messages Không Tốt:

```bash
# ❌ BAD - Quá chung chung
git commit -m "update code"
git commit -m "fix bug"
git commit -m "done"

# ❌ BAD - Tiếng Việt (không chuẩn)
git commit -m "thêm tính năng login"
git commit -m "sửa lỗi"

# ❌ BAD - Quá dài, không rõ ràng
git commit -m "thêm login và sửa bug validation và update css và thêm button"
```

### Rules:

1. ✅ **Sử dụng tiếng Anh** (chuẩn quốc tế)
2. ✅ **Bắt đầu bằng type:** `feat:`, `fix:`, `docs:`, etc.
3. ✅ **Subject ngắn gọn** (< 50 chars)
4. ✅ **Dùng động từ nguyên mẫu:** "add", "fix", "update" (không dùng "added", "fixed")
5. ✅ **Không viết hoa chữ đầu** sau dấu hai chấm
6. ✅ **Không dùng dấu chấm** cuối subject

---

## 💡 TIPS QUAN TRỌNG

### DO's ✅
- ✅ Commit thường xuyên với message rõ ràng
- ✅ Pull trước khi bắt đầu code
- ✅ Test code trước khi commit
- ✅ Tạo PR sớm để review
- ✅ Trả lời feedback nhanh chóng

### DON'Ts ❌
- ❌ KHÔNG commit trực tiếp lên main
- ❌ KHÔNG force push (trừ khi biết rõ)
- ❌ KHÔNG commit files lớn (videos, binary)
- ❌ KHÔNG commit passwords, API keys
- ❌ KHÔNG ignore conflicts

---

## 🎯 BẮT ĐẦU NGAY

**Product Owner (Bạn) bắt đầu từ [PHẦN 1](#phần-1-product-owner---setup-repository)**

Sau khi setup xong, share file này cho team và họ làm theo phần của mình!

---

**Chúc nhóm thành công! 🚀**

**Version:** 1.0  
**Created:** February 2026  
**For:** Task Manager Group Project (7 members)
