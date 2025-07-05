// Main Application Logic
import { messageTemplates, canvaTemplates } from './templates.js';
import { processMessage, showToast, copyToClipboard } from './utils.js';

// Application State
let currentSection = 'demo-accept';

// DOM Elements
const navButtons = document.querySelectorAll('.nav-btn');
const sections = document.querySelectorAll('.section');
const modal = document.getElementById('message-modal');
const messageEditor = document.getElementById('message-editor');
const modalTitle = document.getElementById('modal-title');
const copyMessageBtn = document.getElementById('copy-message');
const previewMessageBtn = document.getElementById('preview-message');
const closeBtn = document.querySelector('.close-btn');
const toast = document.getElementById('toast');
const toastMessage = document.getElementById('toast-message');

// Initialize App
document.addEventListener('DOMContentLoaded', function() {
    setupNavigation();
    setupDropdowns();
    setupTemplateCards();
    setupModal();
});

// Navigation Setup
function setupNavigation() {
    navButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const targetSection = this.getAttribute('data-section');
            switchSection(targetSection);
        });
    });
}

function setupDropdowns() {
    const groupButtons = document.querySelectorAll('.nav-group-btn');
    const navGroups = document.querySelectorAll('.nav-group');
    
    // Open all groups by default for the new design
    navGroups.forEach(group => {
        group.classList.add('open');
    });
    
    // Remove dropdown functionality since we're showing all items
}

function switchSection(sectionId) {
    // Update nav buttons
    navButtons.forEach(btn => btn.classList.remove('active'));
    document.querySelector(`[data-section="${sectionId}"]`).classList.add('active');
    
    // Update sections
    sections.forEach(section => section.classList.remove('active'));
    document.getElementById(sectionId).classList.add('active');
    
    currentSection = sectionId;
}

// Template Cards Setup
function setupTemplateCards() {
    const templateCards = document.querySelectorAll('.template-card');
    templateCards.forEach(card => {
        const copyBtn = card.querySelector('.copy-btn');
        const canvaBtn = card.querySelector('.canva-btn');
        
        if (copyBtn) {
            copyBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                const templateId = card.getAttribute('data-template');
                openMessageEditor(templateId);
            });
        }
        
        if (canvaBtn) {
            canvaBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                const templateId = card.getAttribute('data-template');
                openCanvaTemplate(templateId);
            });
        }
    });
}

// Modal Setup
function setupModal() {
    closeBtn.addEventListener('click', closeModal);
    copyMessageBtn.addEventListener('click', handleCopyMessage);
    previewMessageBtn.addEventListener('click', previewMessage);
    
    // Close modal when clicking outside
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            closeModal();
        }
    });
}

function openMessageEditor(templateId) {
    const template = messageTemplates[templateId];
    if (!template) return;
    
    modalTitle.textContent = template.title;
    messageEditor.value = template.content;
    modal.style.display = 'block';
}

function closeModal() {
    modal.style.display = 'none';
    messageEditor.value = '';
}

function handleCopyMessage() {
    const message = processMessage(messageEditor.value);
    
    copyToClipboard(
        message,
        () => {
            showToast('Message copied to clipboard!', toast, toastMessage);
            closeModal();
        },
        () => {
            showToast('Failed to copy message. Please copy manually.', toast, toastMessage);
        }
    );
}

function previewMessage() {
    const processedMessage = processMessage(messageEditor.value);
    messageEditor.value = processedMessage;
    showToast('Message preview generated!', toast, toastMessage);
}

function openCanvaTemplate(templateId) {
    const canvaUrl = canvaTemplates[templateId];
    if (canvaUrl) {
        window.open(canvaUrl, '_blank');
        showToast('Opening Canva template...', toast, toastMessage);
    } else {
        showToast('Template not available', toast, toastMessage);
    }
}