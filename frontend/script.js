        // Navbar scroll effect
        window.addEventListener('scroll', () => {
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        // Mobile menu toggle
        function toggleMobileMenu() {
            const navLinks = document.querySelector('.nav-links');
            navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
        }

        // Predict button click
        const predictBtn = document.getElementById('predictBtn');
        predictBtn.addEventListener('click', () => {
            const query = document.getElementById('query_sequence').value.trim();
            if (!query) {
                document.getElementById('query_sequence').focus();
                return;
            }
            
            // Show loading animation
            document.querySelector('.loading').style.display = 'block';
            
            // Redirect to Colab notebook with query_sequence as parameter
            const colabUrl = 'https://colab.research.google.com/drive/1VqBFA_a7PYyRVU1BAxE7NWmZNAku1KGI?usp=share_link';
            window.location.href = `${colabUrl}&query_sequence=${encodeURIComponent(query)}`;
        });