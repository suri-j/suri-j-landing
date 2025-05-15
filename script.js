// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS animations
    AOS.init({
        duration: 800,
        once: true,
        offset: 100
    });
    
    // Initialize dark mode
    initDarkMode();
    
    // Initialize mobile navigation
    initMobileNav();
    
    // Initialize blog posts
    renderBlogPosts();
    
    // Initialize projects
    renderProjects();
    
    // Initialize newsletter form
    initNewsletterForm();
    
    // Initialize contact form
    initContactForm();
    
    // Initialize sticky navigation
    initStickyNav();
    
    // Initialize smooth scrolling
    initSmoothScroll();
});

// Dark Mode Toggle Function
function initDarkMode() {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    
    // Check for saved theme preference or use user's system preference
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedTheme = localStorage.getItem('theme');
    
    // Set initial theme
    if (savedTheme === 'dark' || (!savedTheme && prefersDarkMode)) {
        document.body.classList.add('dark-mode');
        if (darkModeToggle) {
            darkModeToggle.setAttribute('aria-checked', 'true');
        }
    }
    
    // Add event listener to toggle button if it exists
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', function() {
            // Toggle dark mode class on body
            document.body.classList.toggle('dark-mode');
            
            // Update aria-checked attribute
            const isDarkMode = document.body.classList.contains('dark-mode');
            darkModeToggle.setAttribute('aria-checked', isDarkMode.toString());
            
            // Save preference to localStorage
            localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
        });
    }
}

// Mobile Navigation
function initMobileNav() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuToggle && navLinks) {
        mobileMenuToggle.addEventListener('click', function() {
            // Toggle active class on navigation
            navLinks.classList.toggle('active');
            mobileMenuToggle.classList.toggle('active');
            
            // Animate hamburger bars
            const bars = mobileMenuToggle.querySelectorAll('.bar');
            bars.forEach(bar => bar.classList.toggle('animate'));
        });
        
        // Close menu when clicking a link
        const links = navLinks.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', function() {
                navLinks.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
                
                const bars = mobileMenuToggle.querySelectorAll('.bar');
                bars.forEach(bar => bar.classList.remove('animate'));
            });
        });
    }
}

// Projects Data
const projects = [
    {
        title: '반응형 이커머스 웹사이트',
        description: '모바일 친화적인 쇼핑 경험을 제공하는 현대적인 이커머스 플랫폼',
        image: 'https://via.placeholder.com/800x600/4a6fa5/ffffff?text=E-commerce+Project',
        technologies: ['React', 'Redux', 'Node.js', 'MongoDB'],
        liveLink: '#',
        githubLink: '#'
    },
    {
        title: '포트폴리오 관리 앱',
        description: '창작자들이 자신의 작품을 관리하고 공유할 수 있는 플랫폼',
        image: 'https://via.placeholder.com/800x600/6b8cbc/ffffff?text=Portfolio+App',
        technologies: ['Vue.js', 'Firebase', 'Tailwind CSS'],
        liveLink: '#',
        githubLink: '#'
    },
    {
        title: '건강 관리 대시보드',
        description: '사용자의 건강 데이터를 시각화하고 관리하는 웹 애플리케이션',
        image: 'https://via.placeholder.com/800x600/f25f5c/ffffff?text=Health+Dashboard',
        technologies: ['TypeScript', 'Chart.js', 'Express', 'PostgreSQL'],
        liveLink: '#',
        githubLink: '#'
    }
];

// Render Projects
function renderProjects() {
    const projectsContainer = document.getElementById('projects-container');
    
    if (!projectsContainer) return;
    
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.setAttribute('data-aos', 'fade-up');
        
        const technologies = project.technologies.map(tech => 
            `<span class="tech-tag">${tech}</span>`
        ).join('');
        
        projectCard.innerHTML = `
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}">
            </div>
            <div class="project-content">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-technologies">
                    ${technologies}
                </div>
                <div class="project-links">
                    <a href="${project.liveLink}" target="_blank" rel="noopener noreferrer">
                        <i class="fas fa-external-link-alt"></i> 라이브 데모
                    </a>
                    <a href="${project.githubLink}" target="_blank" rel="noopener noreferrer">
                        <i class="fab fa-github"></i> 깃허브
                    </a>
                </div>
            </div>
        `;
        
        projectsContainer.appendChild(projectCard);
    });
}

// Blog Posts Data
const blogPosts = [
    {
        title: '모던 웹 개발의 핵심 트렌드',
        summary: '2023년 웹 개발 분야에서 주목해야 할 핵심 기술과 트렌드에 대한 분석과 인사이트를 제공합니다.',
        link: '#'
    },
    {
        title: 'UX 디자인과 접근성의 균형 맞추기',
        summary: '아름다운 디자인과 접근성 간의 균형을 어떻게 유지할 수 있는지, 실제 프로젝트 사례를 통해 살펴봅니다.',
        link: '#'
    },
    {
        title: '프론트엔드 개발자의 생산성 향상 팁',
        summary: '개발 효율성을 높이고 코드 품질을 유지하기 위한 실용적인 도구와 기법을 소개합니다.',
        link: '#'
    }
];

// Render Blog Posts
function renderBlogPosts() {
    const blogContainer = document.getElementById('blog-container');
    
    if (!blogContainer) return;
    
    blogPosts.forEach((post, index) => {
        const postCard = document.createElement('div');
        postCard.className = 'blog-card';
        postCard.setAttribute('data-aos', 'fade-up');
        postCard.setAttribute('data-aos-delay', (index * 100).toString());
        
        postCard.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.summary}</p>
            <a href="${post.link}" class="blog-link" aria-label="Read more about ${post.title}">자세히 보기</a>
        `;
        
        blogContainer.appendChild(postCard);
    });
}

// Sticky Navigation
function initStickyNav() {
    const nav = document.getElementById('main-nav');
    const header = document.getElementById('header');
    
    if (!nav || !header) return;
    
    const headerBottom = header.offsetTop + header.offsetHeight;
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            nav.classList.add('sticky');
        } else {
            nav.classList.remove('sticky');
        }
    });
}

// Smooth Scrolling
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]:not([href="#"])');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const navHeight = document.getElementById('main-nav').offsetHeight;
                const targetPosition = targetElement.offsetTop - navHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Newsletter Form
function initNewsletterForm() {
    const newsletterForm = document.getElementById('newsletter-form');
    
    if (!newsletterForm) return;
    
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const emailInput = this.querySelector('input[type="email"]');
        const successMessage = document.getElementById('newsletter-success');
        
        if (emailInput && emailInput.value && isValidEmail(emailInput.value)) {
            // Form is valid, you would normally submit to Formspree here
            // For now, just show success message
            if (successMessage) {
                successMessage.style.display = 'block';
                emailInput.value = '';
                
                // Hide success message after 5 seconds
                setTimeout(() => {
                    successMessage.style.display = 'none';
                }, 5000);
            }
        } else {
            // Show validation error
            emailInput.classList.add('error');
        }
    });
    
    // Remove error class when input changes
    const emailInput = newsletterForm.querySelector('input[type="email"]');
    if (emailInput) {
        emailInput.addEventListener('input', function() {
            this.classList.remove('error');
        });
    }
}

// Contact Form
function initContactForm() {
    const contactForm = document.getElementById('contact-form');
    
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', function(e) {
        // This form uses Formspree, so we'll let it handle the submission
        // But we could add validation here if needed
        
        // Clear form after submission (optional)
        setTimeout(() => {
            const inputs = contactForm.querySelectorAll('input, textarea');
            inputs.forEach(input => input.value = '');
        }, 1000);
    });
}

// Email validation helper
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
} 