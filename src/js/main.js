// ===================================
// MAIN.JS - Common JavaScript
// Team Lead sẽ tích hợp các module
// ===================================

console.log('Task Manager App loaded successfully! 🚀');

// Common utilities
const TaskManager = {
    // Local Storage key
    STORAGE_KEY: 'taskManagerData',

    // Get all tasks from localStorage
    getTasks() {
        const tasks = localStorage.getItem(this.STORAGE_KEY);
        return tasks ? JSON.parse(tasks) : [];
    },

    // Save tasks to localStorage
    saveTasks(tasks) {
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(tasks));
    },

    // Add new task
    addTask(task) {
        const tasks = this.getTasks();
        task.id = Date.now();
        task.createdAt = new Date().toISOString();
        tasks.push(task);
        this.saveTasks(tasks);
        return task;
    },

    // Delete task
    deleteTask(taskId) {
        const tasks = this.getTasks();
        const filtered = tasks.filter(task => task.id !== taskId);
        this.saveTasks(filtered);
    },

    // Update task
    updateTask(taskId, updates) {
        const tasks = this.getTasks();
        const index = tasks.findIndex(task => task.id === taskId);
        if (index !== -1) {
            tasks[index] = { ...tasks[index], ...updates };
            this.saveTasks(tasks);
        }
    },

    // Format date
    formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString('vi-VN', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit'
        });
    }
};

// Navigation highlight active page
document.addEventListener('DOMContentLoaded', () => {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath.split('/').pop()) {
            link.classList.add('active');
        }
    });
});

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = TaskManager;
}
