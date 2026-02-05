// ===================================
// ADD-TASK.JS
// Developer 3: Logic thêm công việc
// ===================================

const addTaskForm = document.getElementById('addTaskForm');
const modal = document.getElementById('successModal');

// Form submission handler
addTaskForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const title = document.getElementById('title').value.trim();
    const description = document.getElementById('description').value.trim();
    const priority = document.getElementById('priority').value;
    const deadline = document.getElementById('deadline').value;
    const assignee = document.getElementById('assignee').value.trim();
    
    // Clear previous errors
    document.getElementById('titleError').textContent = '';
    
    let isValid = true;
    
    // Validate title (3-100 characters)
    if (title.length < 3 || title.length > 100) {
        document.getElementById('titleError').textContent = 'Tiêu đề phải từ 3-100 ký tự';
        isValid = false;
    }
    
    // If validation passes, save to localStorage
    if (isValid) {
        // Get existing tasks or initialize empty array
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        
        // Create new task object
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
        
        // Add to tasks array
        tasks.push(newTask);
        
        // Save to localStorage
        localStorage.setItem('tasks', JSON.stringify(tasks));
        
        // Show success modal
        modal.style.display = 'block';
        
        // Reset form
        addTaskForm.reset();
    }
});

// Set minimum date to today (prevent past dates)
const deadlineInput = document.getElementById('deadline');
const today = new Date().toISOString().split('T')[0];
deadlineInput.setAttribute('min', today);

// Close modal when clicking outside
modal.addEventListener('click', function(e) {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

console.log('Add Task module loaded - Developer 3 ✅');

