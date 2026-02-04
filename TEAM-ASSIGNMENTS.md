# 👥 PHÂN CÔNG NHIỆM VỤ - 6 NGƯỜI

> **Repository:** https://github.com/DatNgyM/Task-Manager  
> **Đọc file này để biết bạn làm gì!**

---

## 📋 TÓM TẮT VAI TRÒ

| STT | Vai Trò | Người | Nhiệm Vụ Chính |
|-----|---------|-------|----------------|
| 1 | **Product Owner** | Đã hoàn thành ✅ | Setup repo, tạo branches, phân công |
| 2 | **Developer 1** | 👤 **Bạn** | Feature **Login** (2+ commits) |
| 3 | **Developer 2** | 👤 **Bạn** | Feature **Task List** (2+ commits) |
| 4 | **Developer 3** | 👤 **Bạn** | Feature **Add Task** (2+ commits) |
| 5 | **Reviewer** | 👤 **Bạn** | Review tất cả Pull Requests (3 PRs) |
| 6 | **Team Lead** | 👤 **Bạn** | Merge PRs, integration testing |
| 7 | **Scrum Master** | 👤 **Bạn** | Hỗ trợ workflow, giải quyết conflicts |

---

## 🔨 DEVELOPER 1 - LOGIN FEATURE

### 👤 Thông Tin:
- **Branch:** `feature/login`
- **Files cần làm:**
  - `src/pages/login.html`
  - `src/css/login.css`
  - `src/js/login.js`

### 📝 Yêu Cầu:
1. ✅ **Tối thiểu 2 commits hợp lệ**
2. ✅ Form đăng nhập với email và password
3. ✅ Validation email format (regex)
4. ✅ Validation password (min 6 chars)
5. ✅ Lưu user vào localStorage
6. ✅ Redirect đến task-list sau login thành công

---

### 🚀 Các Bước Thực Hiện:

#### Bước 1: Clone & Checkout

```bash
# Clone repository
git clone https://github.com/DatNgyM/Task-Manager.git
cd Task-Manager

# Checkout branch của bạn
git checkout feature/login

# Kiểm tra files
ls src/pages/
ls src/css/
ls src/js/
```

---

#### Bước 2: Commit 1 - HTML + CSS (UI)

**Làm gì:**
1. Mở `src/pages/login.html`
2. Tạo form đăng nhập với:
   - Input email (type="email")
   - Input password (type="password")
   - Button submit
3. Mở `src/css/login.css`
4. Style cho form đẹp và responsive

**Sau khi code xong:**
```bash
# Add files
git add src/pages/login.html src/css/login.css

# Commit (COPY commit message này)
git commit -m "feat: create login page UI with form and styling"

# Kiểm tra
git log --oneline
```

---

#### Bước 3: Commit 2 - JavaScript (Logic)

**Làm gì:**
1. Mở `src/js/login.js`
2. Viết code xử lý:
   - Lắng nghe submit event
   - Validate email (regex)
   - Validate password (min 6 chars)
   - Lưu vào localStorage
   - Redirect sang task-list.html

**Sau khi code xong:**
```bash
# Add files
git add src/js/login.js src/pages/login.html

# Commit (COPY commit message này)
git commit -m "feat: add login handling logic and validation"

# Kiểm tra (phải có 2 commits)
git log --oneline
```

---

#### Bước 4: Push & Tạo Pull Request

```bash
# Push branch lên GitHub
git push origin feature/login

# Trên GitHub: Tạo Pull Request
# https://github.com/DatNgyM/Task-Manager/pull/new/feature/login
# Base: develop ← Compare: feature/login
# Title: feat: add login feature
# Assign: Reviewer
```

---

### ✅ Checklist Developer 1:

- [ ] Clone repository
- [ ] Checkout feature/login
- [ ] Code HTML form
- [ ] Style CSS
- [ ] Commit 1: "feat: create login page UI with form and styling"
- [ ] Code JavaScript validation
- [ ] Code localStorage logic
- [ ] Commit 2: "feat: add login handling logic and validation"
- [ ] Push lên GitHub
- [ ] Tạo Pull Request
- [ ] Gán Reviewer
- [ ] Đợi review & fix feedback (nếu có)

---

## 🔨 DEVELOPER 2 - TASK LIST FEATURE

### 👤 Thông Tin:
- **Branch:** `feature/task-list`
- **Files cần làm:**
  - `src/pages/task-list.html`
  - `src/css/task-list.css`
  - `src/js/task-list.js`

### 📝 Yêu Cầu:
1. ✅ **Tối thiểu 2 commits hợp lệ**
2. ✅ Hiển thị danh sách tasks từ localStorage
3. ✅ Filter: All / Pending / Completed
4. ✅ Checkbox đánh dấu hoàn thành
5. ✅ Button xóa task
6. ✅ Empty state khi không có task

---

### 🚀 Các Bước Thực Hiện:

#### Bước 1: Clone & Checkout

```bash
# Clone repository
git clone https://github.com/DatNgyM/Task-Manager.git
cd Task-Manager

# Checkout branch của bạn
git checkout feature/task-list
```

---

#### Bước 2: Commit 1 - HTML + CSS (UI)

**Làm gì:**
1. Mở `src/pages/task-list.html`
2. Tạo UI:
   - Filter buttons (All/Pending/Completed)
   - Container cho danh sách tasks
   - Empty state message
3. Mở `src/css/task-list.css`
4. Style cho list, cards, filters

**Sau khi code xong:**
```bash
git add src/pages/task-list.html src/css/task-list.css
git commit -m "feat: create task list UI with filters"
```

---

#### Bước 3: Commit 2 - JavaScript (Logic)

**Làm gì:**
1. Mở `src/js/task-list.js`
2. Viết code:
   - Đọc tasks từ localStorage
   - Render tasks ra HTML
   - Xử lý filter (All/Pending/Completed)
   - Xử lý checkbox toggle complete
   - Xử lý button xóa task

**Sau khi code xong:**
```bash
git add src/js/task-list.js
git commit -m "feat: add task display and filter logic"
```

---

#### Bước 4: Push & Tạo Pull Request

```bash
git push origin feature/task-list

# Trên GitHub: Tạo Pull Request
# Base: develop ← Compare: feature/task-list
# Assign: Reviewer
```

---

### ✅ Checklist Developer 2:

- [ ] Clone repository
- [ ] Checkout feature/task-list
- [ ] Code HTML list structure
- [ ] Style CSS cho cards & filters
- [ ] Commit 1: "feat: create task list UI with filters"
- [ ] Code JavaScript display logic
- [ ] Code filter & delete logic
- [ ] Commit 2: "feat: add task display and filter logic"
- [ ] Push lên GitHub
- [ ] Tạo Pull Request
- [ ] Gán Reviewer
- [ ] Đợi review & fix feedback

---

## 🔨 DEVELOPER 3 - ADD TASK FEATURE

### 👤 Thông Tin:
- **Branch:** `feature/add-task`
- **Files cần làm:**
  - `src/pages/add-task.html`
  - `src/css/add-task.css`
  - `src/js/add-task.js`

### 📝 Yêu Cầu:
1. ✅ **Tối thiểu 2 commits hợp lệ**
2. ✅ Form thêm task với các fields:
   - Title (required, 3-100 chars)
   - Description (optional, textarea)
   - Priority (select: Low/Medium/High)
   - Deadline (date picker, min=today)
   - Assignee (text)
3. ✅ Validation đầy đủ
4. ✅ Lưu task vào localStorage
5. ✅ Success message sau khi thêm
6. ✅ Reset form và redirect

---

### 🚀 Các Bước Thực Hiện:

#### Bước 1: Clone & Checkout

```bash
git clone https://github.com/DatNgyM/Task-Manager.git
cd Task-Manager
git checkout feature/add-task
```

---

#### Bước 2: Commit 1 - HTML + CSS (Form UI)

**Làm gì:**
1. Mở `src/pages/add-task.html`
2. Tạo form với các fields:
   - Input title
   - Textarea description
   - Select priority
   - Input date deadline
   - Input assignee
   - Button submit
3. Mở `src/css/add-task.css`
4. Style cho form đẹp và user-friendly

**Sau khi code xong:**
```bash
git add src/pages/add-task.html src/css/add-task.css
git commit -m "feat: create add task form with validation"
```

---

#### Bước 3: Commit 2 - JavaScript (Logic)

**Làm gì:**
1. Mở `src/js/add-task.js`
2. Viết code:
   - Validate form inputs
   - Tạo task object
   - Lưu vào localStorage
   - Show success message
   - Reset form
   - Redirect sang task-list

**Sau khi code xong:**
```bash
git add src/js/add-task.js
git commit -m "feat: add task creation logic to localStorage"
```

---

#### Bước 4: Push & Tạo Pull Request

```bash
git push origin feature/add-task

# Trên GitHub: Tạo Pull Request
# Base: develop ← Compare: feature/add-task
# Assign: Reviewer
```

---

### ✅ Checklist Developer 3:

- [ ] Clone repository
- [ ] Checkout feature/add-task
- [ ] Code HTML form với validation
- [ ] Style CSS cho form
- [ ] Commit 1: "feat: create add task form with validation"
- [ ] Code JavaScript validation
- [ ] Code localStorage save logic
- [ ] Commit 2: "feat: add task creation logic to localStorage"
- [ ] Push lên GitHub
- [ ] Tạo Pull Request
- [ ] Gán Reviewer
- [ ] Đợi review & fix feedback

---

## 🔍 REVIEWER - CODE REVIEW

### 👤 Thông Tin:
- **Nhiệm vụ:** Review **TẤT CẢ 3 Pull Requests**
- **Không code gì cả** - Chỉ review!

### 📝 Yêu Cầu:
1. ✅ Review PR của Developer 1 (Login)
2. ✅ Review PR của Developer 2 (Task List)
3. ✅ Review PR của Developer 3 (Add Task)
4. ✅ Leave comments nếu có vấn đề
5. ✅ Approve khi code OK

---

### 🚀 Các Bước Thực Hiện:

#### Bước 1: Clone Repository (để test local)

```bash
git clone https://github.com/DatNgyM/Task-Manager.git
cd Task-Manager
```

---

#### Bước 2: Review PR trên GitHub

**Vào:** https://github.com/DatNgyM/Task-Manager/pulls

**Với mỗi PR:**

1. Click vào PR
2. Tab **"Files changed"** → Xem code
3. Click vào dòng code → Add comment nếu có vấn đề
4. Tab **"Conversation"** → Click **"Review changes"**

---

#### Bước 3: Review Checklist

**Functionality:**
- [ ] Feature hoạt động đúng
- [ ] Validation đầy đủ
- [ ] Không có lỗi console
- [ ] LocalStorage hoạt động OK

**Code Quality:**
- [ ] Code clean và readable
- [ ] Có comments cho logic phức tạp
- [ ] Follow coding standards (camelCase JS, kebab-case CSS)
- [ ] Không có code duplicate

**Git:**
- [ ] Có ít nhất 2 commits
- [ ] Commit messages đúng format (`feat:`, `fix:`, etc.)
- [ ] Branch name đúng (`feature/*`)

---

#### Bước 4: Leave Review

**Nếu có vấn đề:**
```markdown
## Review Feedback

❌ **Changes Requested**

### Issues Found:
1. Line 45: Email validation cần cải thiện
2. Line 78: Missing error handling

Please fix và tôi sẽ review lại!
```

**Nếu OK:**
```markdown
## Review Approved

✅ **Approved**

### Good points:
- Code clean và dễ đọc
- Validation đầy đủ
- Feature hoạt động tốt

Ready to merge! 🚀
```

---

### ✅ Checklist Reviewer:

- [ ] Clone repository
- [ ] Đọc `docs/REVIEW.md` (review guidelines)
- [ ] Review PR #1: feature/login
  - [ ] Check code quality
  - [ ] Test local
  - [ ] Leave comments
  - [ ] Approve hoặc Request changes
- [ ] Review PR #2: feature/task-list
  - [ ] Check code quality
  - [ ] Test local
  - [ ] Leave comments
  - [ ] Approve hoặc Request changes
- [ ] Review PR #3: feature/add-task
  - [ ] Check code quality
  - [ ] Test local
  - [ ] Leave comments
  - [ ] Approve hoặc Request changes

---

## ✅ TEAM LEAD - MERGE & INTEGRATION

### 👤 Thông Tin:
- **Nhiệm vụ:** Merge PRs vào develop, test integration
- **Không code features** - Chỉ merge & test!

### 📝 Yêu Cầu:
1. ✅ Merge PR #1 (Login) vào develop
2. ✅ Merge PR #2 (Task List) vào develop
3. ✅ Merge PR #3 (Add Task) vào develop
4. ✅ Test integration tất cả features
5. ✅ Tạo PR từ develop → main (final release)

---

### 🚀 Các Bước Thực Hiện:

#### Bước 1: Merge PRs (sau khi Reviewer approve)

**Trên GitHub:**

1. Vào **Pull requests** tab
2. Click vào PR đã được **Approved**
3. Kiểm tra:
   - ✅ Approved by Reviewer
   - ✅ No conflicts
   - ✅ All checks passed
4. Click **"Merge pull request"**
5. Chọn **"Create a merge commit"**
6. Click **"Confirm merge"**
7. Click **"Delete branch"** (optional)

**Lặp lại cho 3 PRs!**

---

#### Bước 2: Test Integration Local

```bash
# Clone repository
git clone https://github.com/DatNgyM/Task-Manager.git
cd Task-Manager

# Checkout develop
git checkout develop
git pull origin develop

# Mở index.html trong browser
# Test toàn bộ flow:
# 1. Login → OK?
# 2. Add task → OK?
# 3. View task list → OK?
# 4. Filter tasks → OK?
# 5. Delete task → OK?
```

---

#### Bước 3: Tạo PR Final Release (develop → main)

**Trên GitHub:**

1. Click **"New pull request"**
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
6. **Product Owner** approve → Click **"Merge"**

**🎉 Release hoàn thành!**

---

### ✅ Checklist Team Lead:

- [ ] Clone repository
- [ ] Đợi Reviewer approve tất cả PRs
- [ ] Merge PR #1: feature/login → develop
- [ ] Merge PR #2: feature/task-list → develop
- [ ] Merge PR #3: feature/add-task → develop
- [ ] Pull develop về local
- [ ] Test integration tất cả features
- [ ] Fix conflicts nếu có
- [ ] Tạo PR: develop → main
- [ ] Assign Product Owner review
- [ ] Đợi approve & merge
- [ ] 🎉 Release v1.0.0!

---

## 🛠️ SCRUM MASTER - HỖ TRỢ WORKFLOW

### 👤 Thông Tin:
- **Nhiệm vụ:** Hỗ trợ team với Git workflow, giải quyết conflicts
- **Không code** - Chỉ hỗ trợ!

### 📝 Yêu Cầu:
1. ✅ Hỗ trợ developers khi gặp vấn đề Git
2. ✅ Giải quyết merge conflicts
3. ✅ Giúp setup Git cho members
4. ✅ Monitor progress của team
5. ✅ Đảm bảo mọi người follow workflow đúng

---

### 🚀 Các Bước Thực Hiện:

#### Bước 1: Setup & Monitor

```bash
# Clone repository
git clone https://github.com/DatNgyM/Task-Manager.git
cd Task-Manager

# Checkout develop
git checkout develop

# Đọc docs
cat docs/WORKFLOW.md
cat GETTING-STARTED.md
```

---

#### Bước 2: Hỗ Trợ Team

**Khi có người hỏi:**

**Vấn đề Git commands:**
- Xem `docs/REFERENCES.md` → Có Git cheatsheet
- Hướng dẫn từng bước

**Vấn đề Conflicts:**
```bash
# 1. Update develop
git checkout develop
git pull origin develop

# 2. Merge develop vào feature
git checkout feature/login
git merge develop

# 3. Sửa conflicts trong file
# Xóa các dấu <<<<, ====, >>>>

# 4. Add và commit
git add .
git commit -m "fix: resolve merge conflict"
git push
```

**Vấn đề Push bị reject:**
```bash
git pull origin [branch-name] --rebase
git push
```

---

### 📊 Monitor Progress

**Check trên GitHub:**
- https://github.com/DatNgyM/Task-Manager/branches
- https://github.com/DatNgyM/Task-Manager/pulls
- https://github.com/DatNgyM/Task-Manager/commits/develop

**Theo dõi:**
- [ ] Developer 1 đã push chưa?
- [ ] Developer 2 đã push chưa?
- [ ] Developer 3 đã push chưa?
- [ ] Reviewer đã review chưa?
- [ ] Team Lead đã merge chưa?

---

### ✅ Checklist Scrum Master:

- [ ] Clone repository
- [ ] Đọc hết tài liệu (docs/)
- [ ] Hiểu rõ Git workflow
- [ ] Monitor progress team
- [ ] Hỗ trợ khi có người hỏi
- [ ] Giải quyết conflicts
- [ ] Đảm bảo mọi người follow workflow
- [ ] Report progress cho Product Owner

---

## 📚 TÀI LIỆU THAM KHẢO

### Đọc trước khi bắt đầu:

1. **`GETTING-STARTED.md`** - Hướng dẫn tổng quan
2. **`docs/README.md`** - Chi tiết cho từng vai trò
3. **`docs/WORKFLOW.md`** - Git workflow từng bước
4. **`docs/REFERENCES.md`** - Code templates & Git commands
5. **`docs/REVIEW.md`** - Review checklist (cho Reviewer)

---

## 🆘 KHI GẶP VẤN ĐỀ

| Vấn đề | Hỏi ai | File tham khảo |
|--------|--------|----------------|
| Git commands | Scrum Master | `docs/REFERENCES.md` |
| Code templates | Xem docs | `docs/REFERENCES.md` |
| Workflow | Scrum Master | `docs/WORKFLOW.md` |
| Review code | Reviewer | `docs/REVIEW.md` |
| Technical issues | Team Lead | - |
| Conflicts | Scrum Master | `docs/WORKFLOW.md` |

---

## 🎯 TIMELINE ĐỀ XUẤT

**Không bắt buộc, nhưng nên tham khảo:**

- **Ngày 1-2:** Developers code Commit 1 (HTML + CSS)
- **Ngày 3-4:** Developers code Commit 2 (JavaScript)
- **Ngày 5:** Developers push & tạo PRs
- **Ngày 6-7:** Reviewer review tất cả PRs
- **Ngày 8:** Developers fix feedback
- **Ngày 9:** Team Lead merge PRs
- **Ngày 10:** Team Lead test integration & tạo PR final
- **Ngày 11:** Release v1.0.0 🎉

---

## ✅ CHECKLIST TỔNG HỢP

### Developers (1, 2, 3):
- [ ] Clone repository
- [ ] Checkout feature branch
- [ ] Code Commit 1 (HTML + CSS)
- [ ] Code Commit 2 (JavaScript)
- [ ] Push branch
- [ ] Tạo Pull Request
- [ ] Fix feedback từ Reviewer

### Reviewer:
- [ ] Clone repository
- [ ] Review 3 PRs
- [ ] Leave comments
- [ ] Approve hoặc Request changes

### Team Lead:
- [ ] Merge 3 PRs vào develop
- [ ] Test integration
- [ ] Tạo PR develop → main
- [ ] Release v1.0.0

### Scrum Master:
- [ ] Monitor progress
- [ ] Hỗ trợ team
- [ ] Giải quyết conflicts
- [ ] Report progress

---

## 🎉 KẾT LUẬN

**Mỗi người có vai trò rõ ràng!**

- ✅ **Developers:** Code features (2+ commits)
- ✅ **Reviewer:** Review code quality
- ✅ **Team Lead:** Merge & integration
- ✅ **Scrum Master:** Hỗ trợ workflow

**Theo dõi progress:**  
https://github.com/DatNgyM/Task-Manager/projects

**Chúc team thành công! 🚀**

---

**Version:** 1.0  
**Created:** February 2026  
**For:** Task Manager Project - 7 Members
