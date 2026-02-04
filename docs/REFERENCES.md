# 📚 REFERENCES - Code Templates & Git Commands

## Mục Lục
- [Code Templates](#code-templates)
- [Git Cheatsheet](#git-cheatsheet)
- [Design System](#design-system)

---

## 💻 CODE TEMPLATES

### Developer 1 - Login Feature

#### `src/pages/login.html`

```html
<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Đăng Nhập - Task Manager</title>
    <link rel="stylesheet" href="../css/style.css">
    <link rel="stylesheet" href="../css/login.css">
</head>
<body>
    <div class="login-container">
        <div class="login-box">
            <h1>🔐 Đăng Nhập</h1>
            
            <form id="loginForm">
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" id="email" required placeholder="example@email.com">
                    <span class="error" id="emailError"></span>
                </div>

                <div class="form-group">
                    <label for="password">Mật khẩu</label>
                    <input type="password" id="password" required placeholder="Nhập mật khẩu">
                    <span class="error" id="passwordError"></span>
                </div>

                <button type="submit" class="btn btn-primary">Đăng Nhập</button>
            </form>

            <p class="back-link">
                <a href="../../index.html">← Quay về trang chủ</a>
            </p>
        </div>
    </div>

    <script src="../js/main.js"></script>
    <script src="../js/login.js"></script>
</body>
</html>
```

#### `src/css/login.css`

```css
.login-container {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    padding: 2rem;
}

.login-box {
    background: white;
    padding: 3rem;
    border-radius: 10px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.2);
    width: 100%;
    max-width: 400px;
}

.login-box h1 {
    text-align: center;
    margin-bottom: 2rem;
    color: #333;
}

.form-group {
    margin-bottom: 1.5rem;
}

.form-group label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 500;
}

.form-group input {
    width: 100%;
    padding: 0.8rem;
    border: 2px solid #e0e0e0;
    border-radius: 5px;
    transition: border-color 0.3s;
}

.form-group input:focus {
    outline: none;
    border-color: #667eea;
}

.error {
    display: block;
    color: #f56565;
    font-size: 0.875rem;
    margin-top: 0.25rem;
    min-height: 1.2rem;
}

@media (max-width: 768px) {
    .login-box {
        padding: 2rem;
    }
}
```

#### `src/js/login.js`

```javascript
const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    
    // Clear errors
    document.getElementById('emailError').textContent = '';
    document.getElementById('passwordError').textContent = '';
    
    let isValid = true;
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById('emailError').textContent = 'Email không hợp lệ';
        isValid = false;
    }
    
    // Password validation
    if (password.length < 6) {
        document.getElementById('passwordError').textContent = 'Mật khẩu phải có ít nhất 6 ký tự';
        isValid = false;
    }
    
    if (isValid) {
        const user = {
            email: email,
            loginTime: new Date().toISOString()
        };
        localStorage.setItem('currentUser', JSON.stringify(user));
        
        alert('Đăng nhập thành công! 🎉');
        window.location.href = 'task-list.html';
    }
});
```

---

### Developer 2 - Task List Feature

#### `src/pages/task-list.html`

```html
<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Danh Sách Công Việc</title>
    <link rel="stylesheet" href="../css/style.css">
    <link rel="stylesheet" href="../css/task-list.css">
</head>
<body>
    <header>
        <nav>
            <h1>📋 Task Manager</h1>
            <ul>
                <li><a href="../../index.html">Trang Chủ</a></li>
                <li><a href="task-list.html" class="active">Danh Sách</a></li>
                <li><a href="add-task.html">Thêm Mới</a></li>
            </ul>
        </nav>
    </header>

    <main class="container">
        <div class="header-actions">
            <h2>📝 Danh Sách Công Việc</h2>
            <a href="add-task.html" class="btn btn-primary">+ Thêm Mới</a>
        </div>

        <div class="filters">
            <button class="filter-btn active" data-filter="all">
                Tất cả (<span id="countAll">0</span>)
            </button>
            <button class="filter-btn" data-filter="pending">
                Chưa làm (<span id="countPending">0</span>)
            </button>
            <button class="filter-btn" data-filter="completed">
                Hoàn thành (<span id="countCompleted">0</span>)
            </button>
        </div>

        <div id="taskList" class="task-list"></div>

        <div id="emptyState" class="empty-state" style="display: none;">
            <p>📭 Chưa có công việc nào</p>
            <a href="add-task.html" class="btn">Tạo công việc đầu tiên</a>
        </div>
    </main>

    <script src="../js/main.js"></script>
    <script src="../js/task-list.js"></script>
</body>
</html>
```

#### `src/js/task-list.js`

```javascript
let currentFilter = 'all';

document.addEventListener('DOMContentLoaded', function() {
    loadTasks();
    setupFilters();
});

function setupFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            filterButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            currentFilter = this.dataset.filter;
            loadTasks();
        });
    });
}

function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const taskListEl = document.getElementById('taskList');
    const emptyStateEl = document.getElementById('emptyState');
    
    let filteredTasks = tasks;
    if (currentFilter === 'completed') {
        filteredTasks = tasks.filter(t => t.completed);
    } else if (currentFilter === 'pending') {
        filteredTasks = tasks.filter(t => !t.completed);
    }
    
    // Update counts
    document.getElementById('countAll').textContent = tasks.length;
    document.getElementById('countPending').textContent = tasks.filter(t => !t.completed).length;
    document.getElementById('countCompleted').textContent = tasks.filter(t => t.completed).length;
    
    if (filteredTasks.length === 0) {
        taskListEl.style.display = 'none';
        emptyStateEl.style.display = 'block';
        return;
    }
    
    taskListEl.style.display = 'flex';
    emptyStateEl.style.display = 'none';
    
    taskListEl.innerHTML = filteredTasks.map(task => `
        <div class="task-item ${task.completed ? 'completed' : ''}">
            <div class="task-content">
                <div class="task-header">
                    <input type="checkbox" ${task.completed ? 'checked' : ''} 
                           onchange="toggleTask(${task.id})">
                    <h3>${task.title}</h3>
                </div>
                <p>${task.description || 'Không có mô tả'}</p>
                <div class="task-meta">
                    <span class="priority-${task.priority}">${task.priority}</span>
                    ${task.deadline ? `<span>📅 ${task.deadline}</span>` : ''}
                </div>
            </div>
            <button class="btn-delete" onclick="deleteTask(${task.id})">Xóa</button>
        </div>
    `).join('');
}

function toggleTask(taskId) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const task = tasks.find(t => t.id === taskId);
    if (task) {
        task.completed = !task.completed;
        localStorage.setItem('tasks', JSON.stringify(tasks));
        loadTasks();
    }
}

function deleteTask(taskId) {
    if (confirm('Bạn có chắc muốn xóa?')) {
        let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks = tasks.filter(t => t.id !== taskId);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        loadTasks();
    }
}
```

---

### Developer 3 - Add Task Feature

#### `src/pages/add-task.html`

```html
<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Thêm Công Việc</title>
    <link rel="stylesheet" href="../css/style.css">
    <link rel="stylesheet" href="../css/add-task.css">
</head>
<body>
    <header>
        <nav>
            <h1>📋 Task Manager</h1>
            <ul>
                <li><a href="../../index.html">Trang Chủ</a></li>
                <li><a href="task-list.html">Danh Sách</a></li>
                <li><a href="add-task.html" class="active">Thêm Mới</a></li>
            </ul>
        </nav>
    </header>

    <main class="container">
        <h2>➕ Thêm Công Việc Mới</h2>
        
        <form id="addTaskForm" class="task-form">
            <div class="form-group">
                <label for="title">Tiêu đề <span class="required">*</span></label>
                <input type="text" id="title" required placeholder="Ví dụ: Hoàn thành báo cáo">
                <span class="error" id="titleError"></span>
            </div>

            <div class="form-group">
                <label for="description">Mô tả</label>
                <textarea id="description" rows="4" placeholder="Mô tả chi tiết..."></textarea>
            </div>

            <div class="form-row">
                <div class="form-group">
                    <label for="priority">Độ ưu tiên</label>
                    <select id="priority">
                        <option value="low">Thấp</option>
                        <option value="medium" selected>Trung bình</option>
                        <option value="high">Cao</option>
                    </select>
                </div>

                <div class="form-group">
                    <label for="deadline">Deadline</label>
                    <input type="date" id="deadline">
                </div>
            </div>

            <div class="form-group">
                <label for="assignee">Người phụ trách</label>
                <input type="text" id="assignee" placeholder="Tên người phụ trách">
            </div>

            <div class="form-actions">
                <button type="submit" class="btn btn-primary">✅ Thêm Công Việc</button>
                <a href="task-list.html" class="btn">❌ Hủy</a>
            </div>
        </form>
    </main>

    <div id="successModal" class="modal">
        <div class="modal-content">
            <div class="success-icon">✅</div>
            <h3>Thành công!</h3>
            <p>Công việc đã được thêm</p>
            <button class="btn" onclick="window.location.href='task-list.html'">Xem danh sách</button>
        </div>
    </div>

    <script src="../js/main.js"></script>
    <script src="../js/add-task.js"></script>
</body>
</html>
```

#### `src/js/add-task.js`

```javascript
const addTaskForm = document.getElementById('addTaskForm');
const modal = document.getElementById('successModal');

addTaskForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const title = document.getElementById('title').value.trim();
    const description = document.getElementById('description').value.trim();
    const priority = document.getElementById('priority').value;
    const deadline = document.getElementById('deadline').value;
    const assignee = document.getElementById('assignee').value.trim();
    
    document.getElementById('titleError').textContent = '';
    
    let isValid = true;
    
    if (title.length < 3 || title.length > 100) {
        document.getElementById('titleError').textContent = 'Tiêu đề phải từ 3-100 ký tự';
        isValid = false;
    }
    
    if (isValid) {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        const newTask = {
            id: Date.now(),
            title: title,
            description: description,
            priority: priority,
            deadline: deadline,
            assignee: assignee,
            completed: false,
            createdAt: new Date().toISOString()
        };
        
        tasks.push(newTask);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        
        modal.style.display = 'block';
        addTaskForm.reset();
    }
});

// Set minimum date to today
const deadlineInput = document.getElementById('deadline');
const today = new Date().toISOString().split('T')[0];
deadlineInput.setAttribute('min', today);
```

---

## 🎨 DESIGN SYSTEM

### Colors

```css
:root {
    /* Primary */
    --primary: #667eea;
    --primary-dark: #764ba2;
    
    /* Status */
    --success: #48bb78;
    --error: #f56565;
    --warning: #ed8936;
    
    /* Neutral */
    --bg: #f4f4f4;
    --text: #333;
    --text-light: #666;
    --border: #e0e0e0;
}
```

### Typography

```css
body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 16px;
    line-height: 1.6;
}
```

### Spacing

```css
/* Use rem units */
--spacing-sm: 0.5rem;   /* 8px */
--spacing-md: 1rem;     /* 16px */
--spacing-lg: 2rem;     /* 32px */
--spacing-xl: 3rem;     /* 48px */
```

---

## 📘 GIT CHEATSHEET

### Setup Commands

```bash
# Clone repository
git clone https://github.com/username/repo.git
cd repo

# Checkout develop
git checkout develop

# Create feature branch
git checkout -b feature/your-feature
```

### Daily Workflow

```bash
# Pull latest code
git checkout develop
git pull origin develop
git checkout feature/your-feature
git merge develop

# Check status
git status
git diff

# Add and commit
git add .
git commit -m "feat: your message"

# Push
git push origin feature/your-feature
```

### Branch Operations

```bash
# List branches
git branch              # Local
git branch -a           # All (local + remote)

# Switch branch
git checkout branch-name

# Create and switch
git checkout -b new-branch

# Delete branch
git branch -d branch-name              # Local
git push origin --delete branch-name   # Remote

# Update branches list
git fetch origin
```

### Commit Messages

```bash
# Format: type: description

# Types:
feat:     # New feature
fix:      # Bug fix
docs:     # Documentation
style:    # Formatting
refactor: # Code refactoring
test:     # Tests
chore:    # Maintenance

# Examples:
git commit -m "feat: add login validation"
git commit -m "fix: resolve email regex bug"
git commit -m "docs: update README"
```

### View History

```bash
# View commits
git log                    # Full
git log --oneline          # Short
git log --oneline -5       # Last 5

# View changes
git diff                   # Unstaged
git diff --staged          # Staged
git diff HEAD~1            # Last commit

# View specific commit
git show <commit-hash>
```

### Undo Changes

```bash
# Discard changes (not staged)
git checkout -- filename
git checkout -- .

# Unstage files
git reset HEAD filename
git reset HEAD .

# Undo last commit (keep changes)
git reset HEAD~1

# Undo last commit (discard changes)
git reset --hard HEAD~1
```

### Merge & Conflicts

```bash
# Merge branch
git checkout develop
git merge feature/login

# When conflict occurs:
# 1. Open conflicted files
# 2. Find markers: <<<<<<<, =======, >>>>>>>
# 3. Edit and save
# 4. Add resolved files
git add filename

# 5. Commit
git commit -m "fix: resolve merge conflict"
```

### Stash (Save temporarily)

```bash
# Save changes
git stash
git stash save "message"

# List stashes
git stash list

# Apply stash
git stash apply        # Keep stash
git stash pop          # Apply and remove

# Drop stash
git stash drop stash@{0}
git stash clear        # Clear all
```

### Remote Operations

```bash
# View remotes
git remote -v

# Fetch (download, don't merge)
git fetch origin

# Pull (fetch + merge)
git pull origin develop

# Push
git push origin branch-name
git push -u origin branch-name    # First time
```

### Useful Commands

```bash
# View branch graph
git log --oneline --graph --all

# Search commits
git log --grep="keyword"

# See who changed each line
git blame filename

# Clean untracked files
git clean -n           # Dry run
git clean -f           # Execute
```

---

## 💡 TIPS & TRICKS

### Commit Best Practices

```bash
# ✅ GOOD
git commit -m "feat: add email validation to login form"

# ❌ BAD
git commit -m "update"
git commit -m "fix stuff"
```

### Before Committing

```bash
# Check what you're committing
git status
git diff

# Test your changes
# Open in browser, test functionality
```

### Before Creating PR

```bash
# Ensure you have latest code
git checkout develop
git pull origin develop
git checkout feature/your-feature
git merge develop

# Ensure you have 2+ commits
git log --oneline

# Push
git push origin feature/your-feature
```

---

## 🔗 Resources

- [Git Documentation](https://git-scm.com/doc)
- [GitHub Guides](https://guides.github.com/)
- [MDN Web Docs](https://developer.mozilla.org/)
- [JavaScript.info](https://javascript.info/)

---

**Version:** 2.0  
**Last updated:** February 2026
