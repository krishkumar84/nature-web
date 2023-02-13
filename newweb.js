const toggleButton = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');
toggleButton.addEventListener('click', () => {
    navLinks.classList.toggle('active');
})

    window.addEventListener('scroll', function() {
      const target = document.querySelector('.scroll-on');
      const targetPosition = target.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
    
      if (targetPosition < windowHeight) {
        target.classList.add('visible');
      }
      (function() {
        let listenerAdded = false;
        
        const addListener = function() {
          if (!listenerAdded) {
            window.addEventListener('scroll', function() {
              const targets = document.querySelectorAll('.scroll-on');
              targets.forEach(function(target) {
                const targetPosition = target.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
        
                if (targetPosition < windowHeight) {
                  target.classList.add('visible');
                }
              });
            });
        
            listenerAdded = true;
          }
        };
        
        addListener();
      })();
    });
    
