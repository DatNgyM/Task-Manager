# 🔍 CODE REVIEW CHECKLIST

## 🎯 Mục Tiêu Review

Code review để:
- Đảm bảo code quality
- Chia sẻ kiến thức
- Học hỏi từ nhau
- Maintain standards

---

## ✅ CHECKLIST

### 1. Functionality

```
[ ] Code chạy không lỗi
[ ] Chức năng đúng requirements
[ ] Xử lý edge cases
[ ] Validation đầy đủ
[ ] Error handling hợp lý
```

### 2. Code Quality

```
[ ] Code dễ đọc, dễ hiểu
[ ] Tên biến/function có ý nghĩa
[ ] Function không quá dài (< 50 lines)
[ ] Không có code duplicate (DRY)
[ ] Comments cho logic phức tạp
```

**Ví dụ:**

```javascript
// ❌ BAD
function f1(x, y) {
    return x + y;
}

// ✅ GOOD
function calculateTotal(price, tax) {
    return price + tax;
}
```

### 3. Coding Standards

```
[ ] Indentation đồng nhất (4 spaces)
[ ] Camel case cho JavaScript
[ ] Kebab case cho CSS classes
[ ] No trailing whitespace
[ ] File kết thúc bằng newline
```

### 4. HTML Quality

```
[ ] Semantic HTML (header, main, section)
[ ] Proper heading hierarchy (h1 > h2 > h3)
[ ] Labels cho form inputs
[ ] Alt text cho images
[ ] No inline styles
```

### 5. CSS Quality

```
[ ] No !important (trừ khi cần)
[ ] CSS class names có ý nghĩa
[ ] Reusable classes
[ ] Organized CSS
[ ] Mobile-first approach
```

### 6. JavaScript Quality

```
[ ] No console.log() trong production
[ ] Error handling với try-catch
[ ] No global variables
[ ] LocalStorage usage hợp lý
[ ] No magic numbers (use constants)
```

**Ví dụ:**

```javascript
// ✅ GOOD
const MAX_TASKS = 100;
try {
    const tasks = JSON.parse(localStorage.getItem('tasks'));
} catch (error) {
    console.error('Failed to load tasks:', error);
}

// ❌ BAD
var x = 100;  // Global
let tasks = JSON.parse(localStorage.getItem('tasks'));  // No error handling
```

### 7. Responsive Design

```
[ ] Mobile responsive (< 768px)
[ ] Tablet responsive (768px - 1199px)
[ ] Desktop responsive (1200px+)
[ ] No horizontal scroll
[ ] Touch-friendly buttons (≥ 44x44px)
```

### 8. Git Requirements

```
[ ] Branch name đúng format (feature/*)
[ ] Commit messages clear
[ ] Có ít nhất 2 commits hợp lệ
[ ] No files ngoài scope
```

---

## 📝 REVIEW PROCESS

### Step 1: Quick Overview

```
1. Đọc PR description
2. Xem list files changed
3. Hiểu feature làm gì
4. Check số lượng commits
```

### Step 2: Code Review

```
1. Review từng file
2. Check theo checklist
3. Click dòng code để comment
4. Đưa ra suggestions cụ thể
```

### Step 3: Testing (Optional)

```bash
# Checkout PR về máy để test
git fetch origin
git checkout feature/login

# Test chức năng
# Mở browser, test UI và logic
```

### Step 4: Leave Review

```
1. Tổng hợp comments
2. Chọn: Approve / Request Changes / Comment
3. Submit review
```

---

## 💬 COMMENT TEMPLATES

### ✅ Approval

```markdown
Great work! 

✅ Functionality works as expected
✅ Code is well-organized
✅ Responsive design looks good
✅ Follows coding standards

Approved to merge! 🎉
```

### ❌ Request Changes

```markdown
Good progress! A few things to fix:

❌ Line 45: Email validation is missing
❌ Line 78: Function too long, consider breaking down
❌ Missing mobile responsive styles

Please update and I'll review again!
```

### 💡 Suggestions

```markdown
💡 Line 23: Consider using const instead of let

💡 Line 56: This could be a utility function:
​```javascript
function formatDate(date) {
    return new Date(date).toLocaleDateString('vi-VN');
}
​```
```

---

## 🎯 REVIEW PRIORITIES

### Must Fix (Blocking):
- Code không chạy
- Security issues
- Breaking existing features
- Không đúng requirements

### Should Fix (Non-blocking):
- Code quality issues
- Performance concerns
- Missing error handling
- Bad naming

### Nice to Have:
- Refactoring opportunities
- Additional features
- Documentation improvements

---

## 🤝 REVIEW ETIQUETTE

### DO's ✅

- Be constructive and helpful
- Explain WHY something should change
- Provide code examples
- Praise good code
- Ask questions instead of demanding
- Review promptly (within 24h)

### DON'Ts ❌

- Don't be rude or harsh
- Don't just say "this is bad"
- Don't approve without reading
- Don't block PR for minor issues

---

## 📋 REVIEW TEMPLATE

```markdown
## Review Summary

**Feature:** [Feature name]
**Developer:** @username
**Status:** ✅ Approved / ❌ Changes Requested

---

## Checks

### Functionality
- [x] Feature works
- [x] Requirements met
- [x] No bugs

### Code Quality
- [x] Clean and readable
- [x] Follows standards
- [x] Proper error handling

### UI/UX
- [x] Responsive design
- [x] Good UX
- [x] Consistent design

---

## Comments

### Major Issues
[List blocking issues]

### Minor Issues
[List non-blocking issues]

### Suggestions
[List improvements]

---

## Next Steps
[What developer needs to do]
```

---

## 🔧 REVIEW TOOLS

### Browser DevTools:
- Elements: Check HTML structure
- Console: Check for errors
- Network: Check requests
- Responsive: Test mobile

### VSCode:
- Check code formatting
- Look for linter errors
- Test locally with Live Server

---

## 📞 WHEN TO ASK FOR HELP

Hỏi Team Lead hoặc Scrum Master nếu:
- Không hiểu code logic
- Không chắc có nên approve không
- Có conflict giữa reviewers
- Developer không respond

---

**Maintained by:** Reviewer  
**Version:** 2.0 - Simplified  
**Last updated:** February 2026
