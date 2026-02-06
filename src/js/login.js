// ===================================
// LOGIN.JS
// Developer 1: Logic đăng nhập
// ===================================

console.log('Login module loaded - Developer 1 🚀');

// Lấy form element
const loginForm = document.getElementById('loginForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const rememberMeCheckbox = document.getElementById('rememberMe');

// Kiểm tra khi trang load
document.addEventListener('DOMContentLoaded', function() {
    // Kiểm tra nếu đã đăng nhập rồi
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
        const user = JSON.parse(currentUser);
        console.log('User already logged in:', user.email);
        
        // Nếu đã đăng nhập, có thể redirect hoặc hiển thị thông báo
        // window.location.href = 'task-list.html';
    }

    // Load email từ localStorage nếu có remember me
    const rememberedEmail = localStorage.getItem('rememberedEmail');
    if (rememberedEmail) {
        emailInput.value = rememberedEmail;
        rememberMeCheckbox.checked = true;
    }
});

// Xử lý submit form
loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Lấy các giá trị từ form
    const email = emailInput.value.trim();
    const password = passwordInput.value;
    const rememberMe = rememberMeCheckbox.checked;
    
    // Clear error messages trước
    clearErrors();
    
    // Validate
    if (validateForm(email, password)) {
        // Xử lý đăng nhập thành công
        handleSuccessfulLogin(email, rememberMe);
    }
});

// Hàm validate form
function validateForm(email, password) {
    let isValid = true;
    
    // Validate Email
    if (!email) {
        showError('emailError', 'Email không được để trống');
        isValid = false;
    } else if (!isValidEmail(email)) {
        showError('emailError', 'Email không hợp lệ (ví dụ: example@email.com)');
        isValid = false;
    }
    
    // Validate Password
    if (!password) {
        showError('passwordError', 'Mật khẩu không được để trống');
        isValid = false;
    } else if (password.length < 6) {
        showError('passwordError', 'Mật khẩu phải có ít nhất 6 ký tự');
        isValid = false;
    }
    
    return isValid;
}

// Hàm kiểm tra email hợp lệ
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Hàm hiển thị lỗi
function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.style.display = 'block';
    }
}

// Hàm xóa tất cả lỗi
function clearErrors() {
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(function(error) {
        error.textContent = '';
        error.style.display = 'none';
    });
}

// Hàm xử lý đăng nhập thành công
function handleSuccessfulLogin(email, rememberMe) {
    // Tạo object user
    const user = {
        email: email,
        loginTime: new Date().toISOString(),
        lastActivity: new Date().toISOString()
    };
    
    // Lưu thông tin user vào localStorage
    localStorage.setItem('currentUser', JSON.stringify(user));
    
    // Xử lý remember me
    if (rememberMe) {
        localStorage.setItem('rememberedEmail', email);
    } else {
        localStorage.removeItem('rememberedEmail');
    }
    
    // Log thông tin
    console.log('Login successful:', user);
    
    // Hiển thị thông báo thành công
    alert('Đăng nhập thành công! 🎉\n\nChào mừng ' + email);
    
    // Redirect sang trang danh sách công việc
    setTimeout(function() {
        window.location.href = 'task-list.html';
    }, 500);
}

// Thêm real-time validation khi người dùng nhập
emailInput.addEventListener('blur', function() {
    const email = emailInput.value.trim();
    if (email && !isValidEmail(email)) {
        showError('emailError', 'Email không hợp lệ');
    }
});

passwordInput.addEventListener('input', function() {
    clearErrors();
});

// Clear error khi focus vào input
emailInput.addEventListener('focus', function() {
    document.getElementById('emailError').textContent = '';
});

passwordInput.addEventListener('focus', function() {
    document.getElementById('passwordError').textContent = '';
});
