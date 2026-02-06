// ===================================
// TASK-LIST.JS
// Developer 2: Logic hiển thị danh sách
// ===================================

// Current filter state
let currentFilter = 'all';

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    console.log('Task List module loaded - Developer 2 🚀');
    
    // Initial load
    loadAndDisplayTasks();
    updateStats();
    
    // Event listeners for filter buttons
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');
            // Update filter and display
            currentFilter = btn.dataset.filter;
            loadAndDisplayTasks();
        });
    });
    
    // Event listener for logout button
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', logout);
    }
});

/**
 * Load tasks from localStorage and display them
 */
function loadAndDisplayTasks() {
    const tasks = getTasks();
    const filteredTasks = filterTasks(tasks, currentFilter);
    displayTasks(filteredTasks);
    updateStats();
}

/**
 * Get tasks from localStorage
 * @returns {Array} Array of task objects
 */
function getTasks() {
    const tasksJson = localStorage.getItem('tasks');
    return tasksJson ? JSON.parse(tasksJson) : [];
}

/**
 * Filter tasks based on status
 * @param {Array} tasks - Array of task objects
 * @param {String} filter - Filter type: 'all', 'pending', or 'completed'
 * @returns {Array} Filtered array of tasks
 */
function filterTasks(tasks, filter) {
    if (filter === 'all') {
        return tasks;
    } else if (filter === 'pending') {
        return tasks.filter(task => !task.completed);
    } else if (filter === 'completed') {
        return tasks.filter(task => task.completed);
    }
    return tasks;
}

/**
 * Display tasks on the page
 * @param {Array} tasks - Array of task objects to display
 */
function displayTasks(tasks) {
    const taskListContainer = document.getElementById('taskList');
    
    if (!tasks || tasks.length === 0) {
        taskListContainer.innerHTML = `
            <div class="empty-state">
                <p class="empty-icon">📭</p>
                <p class="empty-text">Không có công việc nào. Hãy thêm công việc mới!</p>
            </div>
        `;
        return;
    }
    
    // Create HTML for each task
    const taskItemsHtml = tasks.map(task => createTaskHTML(task)).join('');
    taskListContainer.innerHTML = taskItemsHtml;
    
    // Attach event listeners to task actions
    attachTaskEventListeners();
}

/**
 * Create HTML for a single task item
 * @param {Object} task - Task object
 * @returns {String} HTML string for task item
 */
function createTaskHTML(task) {
    const completedClass = task.completed ? 'completed' : '';
    const completedText = task.completed ? 'Hoàn tác' : 'Hoàn thành';
    const completedButtonClass = task.completed ? 'btn-action btn-complete completed' : 'btn-action btn-complete';
    
    // Format date
    const taskDate = new Date(task.createdAt);
    const formattedDate = taskDate.toLocaleDateString('vi-VN', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit'
    });
    
    return `
        <div class="task-item ${completedClass}" data-task-id="${task.id}">
            <input 
                type="checkbox" 
                class="task-checkbox" 
                ${task.completed ? 'checked' : ''}
                aria-label="Mark task as complete"
            >
            <div class="task-content">
                <h3>${escapeHtml(task.title)}</h3>
                ${task.description ? `<p>${escapeHtml(task.description)}</p>` : ''}
                <span class="task-date">📅 ${formattedDate}</span>
            </div>
            <div class="task-actions">
                <button class="${completedButtonClass}" title="${completedText}">
                    ${task.completed ? '↩️ Hoàn tác' : '✅ Hoàn thành'}
                </button>
                <button class="btn-action btn-delete" title="Xóa công việc">
                    🗑️ Xóa
                </button>
            </div>
        </div>
    `;
}

/**
 * Attach event listeners to task items
 */
function attachTaskEventListeners() {
    const taskItems = document.querySelectorAll('.task-item');
    
    taskItems.forEach(taskItem => {
        const taskId = taskItem.dataset.taskId;
        
        // Checkbox event listener
        const checkbox = taskItem.querySelector('.task-checkbox');
        checkbox.addEventListener('change', () => {
            toggleTaskCompletion(taskId);
        });
        
        // Complete button event listener
        const completeBtn = taskItem.querySelector('.btn-complete');
        completeBtn.addEventListener('click', (e) => {
            e.preventDefault();
            toggleTaskCompletion(taskId);
        });
        
        // Delete button event listener
        const deleteBtn = taskItem.querySelector('.btn-delete');
        deleteBtn.addEventListener('click', (e) => {
            e.preventDefault();
            deleteTask(taskId);
        });
    });
}

/**
 * Toggle task completion status
 * @param {String} taskId - ID of the task to toggle
 */
function toggleTaskCompletion(taskId) {
    const tasks = getTasks();
    const task = tasks.find(t => t.id === taskId);
    
    if (task) {
        task.completed = !task.completed;
        saveTasks(tasks);
        loadAndDisplayTasks();
    }
}

/**
 * Delete a task
 * @param {String} taskId - ID of the task to delete
 */
function deleteTask(taskId) {
    if (confirm('Bạn chắc chắn muốn xóa công việc này?')) {
        const tasks = getTasks();
        const filteredTasks = tasks.filter(t => t.id !== taskId);
        saveTasks(filteredTasks);
        loadAndDisplayTasks();
    }
}

/**
 * Save tasks to localStorage
 * @param {Array} tasks - Array of task objects to save
 */
function saveTasks(tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

/**
 * Update statistics
 */
function updateStats() {
    const tasks = getTasks();
    const totalTasks = tasks.length;
    const completedTasks = tasks.filter(t => t.completed).length;
    const pendingTasks = totalTasks - completedTasks;
    
    // Update DOM
    const totalElement = document.getElementById('totalTasks');
    const completedElement = document.getElementById('completedTasks');
    const pendingElement = document.getElementById('pendingTasks');
    
    if (totalElement) totalElement.textContent = totalTasks;
    if (completedElement) completedElement.textContent = completedTasks;
    if (pendingElement) pendingElement.textContent = pendingTasks;
}

/**
 * Escape HTML special characters for security
 * @param {String} text - Text to escape
 * @returns {String} Escaped text
 */
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

/**
 * Logout function - redirect to login page
 */
function logout() {
    // Clear user session if needed
    localStorage.removeItem('currentUser');
    // Redirect to login page
    window.location.href = 'login.html';
}

