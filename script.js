document.addEventListener("DOMContentLoaded", () => {
    
    // ==========================================
    // PAGE-LOAD SKELETON ANIMATION
    // ==========================================
    const preloader = document.getElementById("preloader-skeleton");
    if (preloader) {
        window.addEventListener("load", () => {
            setTimeout(() => {
                preloader.classList.add("fade-away");
            }, 600);
        });
    }

    // ==========================================
    // STYLE SWITCHER POPOVER TOGGLE ENGINE
    // ==========================================
    const switcherToggle = document.getElementById("switcherToggle");
    const colorsPanel = document.getElementById("colorsPanel");

    if (switcherToggle && colorsPanel) {
        switcherToggle.addEventListener("click", (e) => {
            e.stopPropagation();
            colorsPanel.classList.toggle("open");
        });

        document.addEventListener("click", (e) => {
            if (!colorsPanel.contains(e.target) && e.target !== switcherToggle) {
                colorsPanel.classList.remove("open");
            }
        });
    }

    // ==========================================
    // FIXED DEFAULT ORANGE ACCENT MATRIX
    // ==========================================
    const colorDots = document.querySelectorAll(".color-dot");
    const defaultColorClass = "color-orange";
    
    document.body.classList.add(defaultColorClass);
    
    colorDots.forEach(dot => {
        if (dot.getAttribute("data-color") === defaultColorClass) {
            dot.classList.add("active");
        } else {
            dot.classList.remove("active");
        }
    });

    colorDots.forEach(dot => {
        dot.addEventListener("click", () => {
            const targetColor = dot.getAttribute("data-color");
            
            colorDots.forEach(d => {
                d.classList.remove("active");
                document.body.classList.remove(d.getAttribute("data-color"));
            });
            
            dot.classList.add("active");
            document.body.classList.add(targetColor);
        });
    });

    // ==========================================
    // DARK/LIGHT MODE CHANGER ENGINE
    // ==========================================
    const themeModeToggle = document.getElementById("themeModeToggle");
    const modeIcon = document.getElementById("modeIcon");

    if (themeModeToggle && modeIcon) {
        themeModeToggle.addEventListener("click", () => {
            if (document.body.classList.contains("dark-mode")) {
                document.body.classList.remove("dark-mode");
                document.body.classList.add("light-mode");
                modeIcon.textContent = "☀️";
            } else {
                document.body.classList.remove("light-mode");
                document.body.classList.add("dark-mode");
                modeIcon.textContent = "🌙";
            }
        });
    }

    // ==========================================
    // NAVIGATION PANEL ROUTING SYSTEM
    // ==========================================
    const navButtons = document.querySelectorAll(".nav-link-btn");
    const panels = document.querySelectorAll(".app-panel");
    const inlineTriggers = document.querySelectorAll(".switch-trigger");

    function activatePanel(targetId) {
        navButtons.forEach(btn => {
            if (btn.getAttribute("data-target") === targetId) {
                btn.classList.add("active");
            } else {
                btn.classList.remove("active");
            }
        });

        panels.forEach(panel => {
            if (panel.id === targetId) {
                panel.classList.add("active-view");
            } else {
                panel.classList.remove("active-view");
            }
        });
        
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    navButtons.forEach(button => {
        button.addEventListener("click", () => {
            const target = button.getAttribute("data-target");
            activatePanel(target);
        });
    });

    inlineTriggers.forEach(trigger => {
        trigger.addEventListener("click", () => {
            const dest = trigger.getAttribute("data-dest");
            activatePanel(dest);
        });
    });

    // ==========================================
    // TYPED EFFECTS ENGINE FOR HERO TEXT
    // ==========================================
    const strings = ["Computer Science Student", "Information Security Analyst", "Frontend UI Architect"];
    let strIdx = 0, charIdx = 0;
    const targetElement = document.getElementById("typedText");

    function typeEffect() {
        if (!targetElement) return;
        if (charIdx < strings[strIdx].length) {
            targetElement.textContent += strings[strIdx].charAt(charIdx);
            charIdx++;
            setTimeout(typeEffect, 80);
        } else {
            setTimeout(eraseEffect, 1800);
        }
    }

    function eraseEffect() {
        if (charIdx > 0) {
            targetElement.textContent = strings[strIdx].substring(0, charIdx - 1);
            charIdx--;
            setTimeout(eraseEffect, 35);
        } else {
            strIdx = (strIdx + 1) % strings.length;
            setTimeout(typeEffect, 300);
        }
    }
    
    if(targetElement) typeEffect();

    // ==========================================
    // CONTACT FORM SUCCESS SUBMISSION LOGIC (MOCK)
    // ==========================================
    const contactForm = document.getElementById("contactForm");
    const formStatus = document.getElementById("formStatus");

    if (contactForm && formStatus) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault(); // Page reload hone se rokne ke liye

            // Success message content aur color styling apply karna
            formStatus.textContent = "Your Message has been sent successfully! ✓";
            formStatus.className = "form-status-msg success-show";

            // Form key saari input fields clear karna
            contactForm.reset();

            // 4 seconds baad automatic notification message hide karne ke liye
            setTimeout(() => {
                formStatus.className = "form-status-msg";
                formStatus.textContent = "";
            }, 4000);
        });
    }
});