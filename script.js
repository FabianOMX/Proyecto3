// CarruselPrincipal de imágenes 
        let currentSlide = 0;
        const slides = document.querySelectorAll('.carousel img');
        const totalSlides = slides.length;
        let slideInterval = setInterval(nextSlide, 5500); //Imagenes cronometro

        function showSlide(index) {
            slides.forEach((slide, i) => {
                slide.classList.remove('active');
                if (i === index) {
                    slide.classList.add('active');
                }
            });
        }

        function nextSlide() {
            currentSlide = (currentSlide + 1) % totalSlides;
            showSlide(currentSlide);
        }

        function prevSlide() {
            currentSlide = (currentSlide - 1 + totalSlides) % totalSlides; // <--- NO MOVER
            showSlide(currentSlide);
        }

        function resetSlideInterval() {
            clearInterval(slideInterval);
            slideInterval = setInterval(nextSlide, 3000);
        }

        document.querySelector('.carousel-buttons button:first-child').addEventListener('click', () => {
            prevSlide();
            resetSlideInterval();
        });

        document.querySelector('.carousel-buttons button:last-child').addEventListener('click', () => {
            nextSlide();
            resetSlideInterval();
        });

        // Carrusel de las tarjetas 
        let currentService = 0;
        const services = document.querySelectorAll('.services-carousel .service-card');
        const totalServices = services.length;
        let serviceInterval = setInterval(nextService, 5500); // Tarjeta Cronometros

        function showService(index) {
            services.forEach((service, i) => {
                service.classList.remove('active');
                if (i === index) {
                    service.classList.add('active');
                }
            });
        }

        function nextService() {
            currentService = (currentService + 1) % totalServices;
            showService(currentService);
        }

        function prevService() {
            currentService = (currentService - 1 + totalServices) % totalServices;
            showService(currentService);
        }

        function resetServiceInterval() {
            clearInterval(serviceInterval);
            serviceInterval = setInterval(nextService, 3000);
        }

        document.querySelector('.services-carousel-buttons button:first-child').addEventListener('click', () => {
            prevService();
            resetServiceInterval();
        });

        document.querySelector('.services-carousel-buttons button:last-child').addEventListener('click', () => {
            nextService();
            resetServiceInterval();
        });

        showSlide(currentSlide);
        showService(currentService);

        // Menú Audio
        const audio = document.getElementById('audio');
        const playButton = document.querySelector('.audio-player button');

        function togglePlay() {
            if (audio.paused) {
                audio.play();
                playButton.textContent = 'Pause';
            } else {
                audio.pause();
                playButton.textContent = 'Play';
            }
        }

       
        window.addEventListener('load', () => {
            audio.play();
        });