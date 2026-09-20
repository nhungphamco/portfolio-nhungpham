/**
 * Personal Portfolio Website - JavaScript
 * Student: Phạm Thị Nhung
 * Features: Mobile navigation toggle, accessibility handlers, contact form UX feedback
 */

document.addEventListener('DOMContentLoaded', () => {
  // Navigation Toggle Elements
  const navToggle = document.getElementById('nav-toggle');
  const mainNav = document.getElementById('main-nav');
  const navLinks = document.querySelectorAll('.nav-link');

  if (navToggle && mainNav) {
    // Hamburger menu button click
    navToggle.addEventListener('click', () => {
      const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!isExpanded));
      mainNav.classList.toggle('is-open');
    });

    // Close menu when clicking any nav link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (mainNav.classList.contains('is-open')) {
          navToggle.setAttribute('aria-expanded', 'false');
          mainNav.classList.remove('is-open');
        }
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (event) => {
      if (!navToggle.contains(event.target) && !mainNav.contains(event.target)) {
        if (mainNav.classList.contains('is-open')) {
          navToggle.setAttribute('aria-expanded', 'false');
          mainNav.classList.remove('is-open');
        }
      }
    });

    // Close menu on Escape key press
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && mainNav.classList.contains('is-open')) {
        navToggle.setAttribute('aria-expanded', 'false');
        mainNav.classList.remove('is-open');
        navToggle.focus();
      }
    });
  }

  // Contact Form Feedback Handler
  const contactForm = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');

  if (contactForm && formStatus) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const nameInput = document.getElementById('name');
      const senderName = nameInput ? nameInput.value.trim() : 'bạn';

      // Visual feedback
      formStatus.textContent = `Cảm ơn ${senderName}! Tin nhắn của bạn đã được gửi thành công. Tôi sẽ phản hồi sớm nhất qua email.`;
      formStatus.className = 'form-status-msg is-success';

      // Reset form fields
      contactForm.reset();

      // Scroll to status message smoothly
      formStatus.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
  }
});