const stars = document.querySelectorAll('.stars i');
const ratingText = document.querySelector('.rating-text');
stars.forEach(star => {
            // Hover effect
            star.addEventListener('mouseover', function() {
                const rating = this.getAttribute('data-rating');
                updateStars(rating);
                ratingText.textContent = `Rating: ${rating}/5`;
            });

            // Click effect
            star.addEventListener('click', function() {
                const rating = this.getAttribute('data-rating');
                stars.forEach(s => {
                    if (s.getAttribute('data-rating') <= rating) {
                        s.classList.add('active');
                    } else {
                        s.classList.remove('active');
                    }
                });
                ratingText.textContent = `You rated: ${rating}/5`;
            });
        });

        // Reset on mouse leave
        document.querySelector('.stars').addEventListener('mouseleave', function() {
            const activeStars = document.querySelectorAll('.stars i.active');
            if (activeStars.length === 0) {
                stars.forEach(star => star.style.color = '#ddd');
                ratingText.textContent = 'stars to rate';
            }
        });

        function updateStars(rating) {
            stars.forEach(star => {
                if (star.getAttribute('data-rating') <= rating) {
                    star.style.color = '#ffc107';
                } else {
                    star.style.color = '#ddd';
                }
            });
        }