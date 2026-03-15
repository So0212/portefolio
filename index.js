const buttons = document.querySelectorAll('.tab-button');
    const sections = document.querySelectorAll('section');

    buttons.forEach(button => {
      button.addEventListener('click', () => {
        const targetId = button.dataset.tab;

        buttons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        sections.forEach(section => {
          if (section.id === targetId) {
            section.style.display = 'block';
            requestAnimationFrame(() => {
              section.classList.add('active');
            });
          } else {
            section.classList.remove('active');
            setTimeout(() => {
              section.style.display = 'none';
            }, 500);
          }
        });
      });
    });