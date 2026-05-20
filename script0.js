document.getElementById('year').textContent = new Date().getFullYear();

        async function loadProjects() {
            const container = document.getElementById('project-container');
            try {
                const response = await fetch('projects.json');
                const projects = await response.json();
                
                if(!projects || projects.length === 0) {
                    container.innerHTML = "<p style='color: var(--text-muted);'>No other projects at the moment.</p>";
                    return;
                }

                container.innerHTML = projects.map(p => `
                    <a href="${p.link}" target="_blank" class="card">
                        <div>
                            <i class="${p.icon} main-icon"></i>
                            <h3>${p.title}</h3>
                            <p>${p.description}</p>
                        </div>
                        <div class="card-link">
                            View Source <i class="fas fa-arrow-right"></i>
                        </div>
                    </a>
                `).join('');
            } catch (err) {
                container.innerHTML = "<p>Error loading projects. Check console.</p>";
                console.error(err);
            }
        }
        
        loadProjects();