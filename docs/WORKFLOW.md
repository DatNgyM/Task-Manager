# 🔄 GIT WORKFLOW CHI TIẾT

## Mục Lục
- [Setup Ban Đầu](#setup-ban-đầu)
- [Developer Workflow](#developer-workflow)
- [Review Process](#review-process)
- [Merge & Integration](#merge--integration)
- [Xử Lý Conflicts](#xử-lý-conflicts)
- [Requirements](#requirements)

---

## 📋 SETUP BAN ĐẦU

### Product Owner Setup

```bash
# 1. Tạo repo trên GitHub: task-manager-group-project
# 2. Clone về máy
git clone https://github.com/username/task-manager-group-project.git
cd task-manager-group-project

# 3. Tạo branch develop
git checkout -b develop

# 4. Tạo cấu trúc folder
mkdir src\pages src\css src\js src\assets\images docs

# 5. Copy files từ template
# 6. Commit và push
git add .
git commit -m "chore: khởi tạo cấu trúc dự án"
git push -u origin develop

# 7. Add collaborators: Settings → Collaborators
```

### Team Members Clone

```bash
# 1. Clone repository
git clone https://github.com/username/task-manager-group-project.git
cd task-manager-group-project

# 2. Checkout develop
git checkout develop

# 3. Xem cấu trúc
ls
```

---

## 👨‍💻 DEVELOPER WORKFLOW

### Bước 1: Chuẩn Bị

```bash
# Đảm bảo ở develop và có code mới nhất
git checkout develop
git pull origin develop

# Kiểm tra trạng thái
git status
```

### Bước 2: Tạo Feature Branch

```bash
# Developer 1
git checkout -b feature/login

# Developer 2
git checkout -b feature/task-list

# Developer 3
git checkout -b feature/add-task

# Kiểm tra branch hiện tại
git branch
```

### Bước 3: Coding - Commit 1

```bash
# Tạo files HTML + CSS
# Developer 1 ví dụ:
# - Tạo src/pages/login.html
# - Tạo src/css/login.css

# Kiểm tra thay đổi
git status

# Add files
git add src/pages/login.html src/css/login.css

# Commit với message rõ ràng
git commit -m "feat: tạo giao diện trang đăng nhập với form và styling"

# Xem lịch sử
git log --oneline
```

### Bước 4: Coding - Commit 2+

```bash
# Tiếp tục code JavaScript
# Tạo src/js/login.js

# Add và commit
git add src/js/login.js src/pages/login.html
git commit -m "feat: thêm logic xử lý đăng nhập và validation"

# Xem lịch sử (phải có ít nhất 2 commits)
git log --oneline
```

### Bước 5: Push Lên Remote

```bash
# Push branch lên GitHub
git push -u origin feature/login

# Lần sau có thể gọn hơn
git push
```

### Bước 6: Tạo Pull Request

**Trên GitHub:**

1. Vào tab "Pull requests" → "New pull request"
2. Base: `develop` ← Compare: `feature/login`
3. Điền thông tin:

```markdown
# feat: Thêm trang đăng nhập

## Thay đổi
- Tạo giao diện trang đăng nhập
- Form với validation email và password
- Xử lý logic đăng nhập với localStorage

## Files thay đổi
- src/pages/login.html
- src/css/login.css
- src/js/login.js

## Screenshots
[Đính kèm ảnh nếu có]

## Checklist
- [x] Code chạy không lỗi
- [x] Responsive trên mobile
- [x] Có validation
- [x] 2 commits hợp lệ

## Reviewer
@reviewer-username
```

4. Assign reviewer
5. Create pull request

---

## 🔍 REVIEW PROCESS

### Reviewer Workflow

#### Bước 1: Review trên GitHub

```bash
# Option 1: Review trực tiếp trên GitHub (Recommended)
# - Vào PR → Tab "Files changed"
# - Click vào dòng code để comment
# - Submit review: Approve / Request Changes / Comment
```

#### Bước 2: Test Local (Optional)

```bash
# Checkout PR về máy để test
git fetch origin
git checkout feature/login

# Test trên browser
# Mở index.html và test chức năng
```

#### Bước 3: Leave Review

```markdown
## Review Summary

✅ **Approved** / ❌ **Changes Requested**

### Functionality
- [x] Feature hoạt động đúng
- [x] Validation đầy đủ

### Code Quality
- [x] Code clean và readable
- [x] Follow coding standards

### Issues Found
❌ Line 45: Email validation cần cải thiện
💡 Line 78: Consider extracting this to a function

Please update và I'll review again!
```

---

## ✅ MERGE & INTEGRATION

### Developer Fix Feedback

```bash
# Sửa code theo feedback
# Edit files...

# Commit changes
git add .
git commit -m "fix: cải thiện validation theo feedback reviewer"

# Push (PR tự động update)
git push

# Comment trả lời reviewer: "Đã fix, please review again @reviewer"
```

### Team Lead Merge PR

**Option 1: Merge trên GitHub (Recommended)**

```
1. Vào PR đã approved
2. Kiểm tra:
   ✅ All checks passed
   ✅ Approved by reviewer
   ✅ No conflicts
3. Click "Merge pull request"
4. Chọn "Create a merge commit"
5. Confirm merge
6. Delete branch (optional)
```

**Option 2: Merge bằng command line**

```bash
# Checkout develop
git checkout develop
git pull origin develop

# Merge feature branch
git merge feature/login --no-ff

# Giải quyết conflicts nếu có
# Push lên remote
git push origin develop

# Xóa feature branch local
git branch -d feature/login

# Xóa feature branch remote
git push origin --delete feature/login
```

---

## ⚠️ XỬ LÝ CONFLICTS

### Khi Nào Xảy Ra Conflict?

```
Developer A merge vào develop trước
Developer B merge sau → Conflict nếu cùng sửa 1 file
```

### Cách Xử Lý:

```bash
# 1. Update develop trước
git checkout develop
git pull origin develop

# 2. Merge develop vào feature branch
git checkout feature/login
git merge develop

# 3. Git sẽ báo conflict
# CONFLICT (content): Merge conflict in src/pages/login.html

# 4. Mở file bị conflict, sẽ thấy:
<<<<<<< HEAD
// Code của bạn
=======
// Code từ develop
>>>>>>> develop

# 5. Sửa bằng tay, giữ code đúng, xóa các dấu <<<<, ====, >>>>

# 6. Add file đã sửa
git add src/pages/login.html

# 7. Commit
git commit -m "fix: resolve merge conflict in login.html"

# 8. Push
git push

# 9. PR giờ sẽ không còn conflict
```

---

## ⏰ TIMELINE

### Week 1: Setup & Start
**Day 1-2:** Setup repo, clone, create branches  
**Day 3-5:** Developers: Commit 1 (HTML + CSS)  
**Day 6-7:** Review progress

### Week 2: Development
**Day 8-10:** Developers: Commit 2 (JavaScript)  
**Day 11-12:** Create Pull Requests  
**Day 13-14:** Code review → Fix → Approve

### Week 3: Integration
**Day 15-17:** Team Lead: Merge all → Integration  
**Day 18-19:** Final testing → PR develop → main  
**Day 20-21:** Release v1.0.0 🎉

---

## 📝 REQUIREMENTS

### Yêu Cầu Chung

**Công nghệ:**
- HTML5, CSS3, Vanilla JavaScript
- LocalStorage
- No frameworks

**Coding Standards:**
- Camel case cho JavaScript
- Kebab case cho CSS classes
- Indent: 4 spaces
- Comments cho logic phức tạp

**Browser Support:**
- Chrome, Firefox, Edge (latest)

**Responsive:**
- Desktop: 1200px+
- Tablet: 768px - 1199px
- Mobile: < 768px

---

### Feature Requirements

#### 1. Login Feature (Developer 1)

**Chức năng:**
- Form với email và password
- Validation email format (regex)
- Validation password (min 6 chars)
- Lưu user vào localStorage
- Redirect đến task-list sau login

**Files:**
- `src/pages/login.html`
- `src/css/login.css`
- `src/js/login.js`

**User Stories:**
- Là người dùng, tôi muốn đăng nhập để truy cập hệ thống
- Là người dùng, tôi muốn hệ thống kiểm tra thông tin đăng nhập

---

#### 2. Task List Feature (Developer 2)

**Chức năng:**
- Hiển thị danh sách tasks từ localStorage
- Filter: All / Pending / Completed
- Checkbox đánh dấu hoàn thành
- Button xóa task
- Empty state khi không có task
- Counter cho mỗi filter

**Files:**
- `src/pages/task-list.html`
- `src/css/task-list.css`
- `src/js/task-list.js`

**User Stories:**
- Là người dùng, tôi muốn xem tất cả công việc của mình
- Là người dùng, tôi muốn đánh dấu công việc đã hoàn thành
- Là người dùng, tôi muốn xóa công việc không cần thiết

---

#### 3. Add Task Feature (Developer 3)

**Chức năng:**
- Form thêm task với các fields:
  - Title (required, 3-100 chars)
  - Description (optional, textarea)
  - Priority (select: Low/Medium/High)
  - Deadline (date picker, min=today)
  - Assignee (text)
- Validation đầy đủ
- Lưu task vào localStorage
- Success modal sau khi thêm
- Reset form và redirect

**Files:**
- `src/pages/add-task.html`
- `src/css/add-task.css`
- `src/js/add-task.js`

**User Stories:**
- Là người dùng, tôi muốn tạo công việc mới
- Là người dùng, tôi muốn đặt độ ưu tiên cho công việc
- Là người dùng, tôi muốn có thông báo khi tạo thành công

---

### Git Requirements

**Branch Structure:**
```
main → develop → feature/*
```

**Commits:**
- Mỗi developer: Tối thiểu 2 commits hợp lệ
- Format: `type: description`
- Types: feat, fix, docs, style, refactor, chore

**Pull Requests:**
- Tất cả features qua PR
- Được review và approve
- Resolve conflicts trước merge
- Update với develop trước merge

---

## ✅ DEFINITION OF DONE

Feature hoàn thành khi:

1. ✅ Code chạy không lỗi
2. ✅ UI responsive (mobile, tablet, desktop)
3. ✅ Có ít nhất 2 commits hợp lệ
4. ✅ Code format đúng chuẩn
5. ✅ Có validation cơ bản
6. ✅ Pull Request được approve
7. ✅ Merged vào develop
8. ✅ Không có conflict

---

## 🚨 TÌNH HUỐNG THƯỜNG GẶP

### 1. Quên Checkout Sang Branch Mới

```bash
# Đã code nhưng quên tạo branch
git stash                          # Lưu thay đổi tạm
git checkout -b feature/login      # Tạo branch mới
git stash pop                      # Lấy thay đổi ra
git add .
git commit -m "feat: ..."
```

### 2. Commit Nhầm Branch

```bash
git reset HEAD~1                   # Undo commit, giữ changes
git checkout -b feature/login      # Tạo branch đúng
git add .
git commit -m "feat: ..."
```

### 3. File Quá Lớn

```bash
# Add vào .gitignore
echo "*.psd" >> .gitignore
echo "node_modules/" >> .gitignore
git add .gitignore
git commit -m "chore: update gitignore"
```

---

## 📞 COMMUNICATION

### Daily Standup (Optional)

**3 Questions:**
1. Hôm qua làm được gì?
2. Hôm nay sẽ làm gì?
3. Có vấn đề gì cần giúp?

### Khi Cần Hỗ Trợ:

| Vấn đề | Hỏi ai |
|--------|--------|
| Technical issues | Team Lead |
| Git workflow | Scrum Master |
| Requirements | Product Owner |
| Code review | Reviewer |

---

## 🎯 BEST PRACTICES

### DO's ✅
- Commit thường xuyên, nhỏ và có ý nghĩa
- Pull trước khi bắt đầu làm việc
- Viết commit message rõ ràng
- Test trước khi commit
- Resolve conflicts ngay

### DON'Ts ❌
- Commit trực tiếp lên main
- Force push trừ khi thực sự cần
- Commit files lớn (binary, videos)
- Commit passwords, API keys
- Ignore conflicts

---

**Maintained by:** Scrum Master  
**Version:** 2.0 - Simplified & Consolidated  
**Last updated:** February 2026
---

## 👮 SCRUM MASTER VALIDATION

**Context:** Review Pull Request cuối cùng từ `develop` → `main` (Release v1.0.0).

### Scrum Master / Team Lead Comment:

```text
LGTM (Looks Good To Me)! 🚀

Tổng kết kiểm tra Git Workflow:
1. Branch Strategy:
   ✅ Các feature branches được tách ra từ develop đúng quy trình.
   ✅ Không có commit trực tiếp (direct commit) vào main.

2. Commit Convention:
   ✅ Các commit messages rõ ràng, tuân thủ format `type: description`.
   ✅ Tác giả commits đúng với thành viên được assign task.

3. Code Quality & Conflicts:
   ✅ Đã pass qua các bước review chéo (peer review).
   ✅ Không còn conflict tồn đọng.

KL: Các thành viên thực hiện đúng workflow với git, các commit đều hợp lệ trước khi merge vào main.

Ready to merge & deploy v1.0.0! 🚢
