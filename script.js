 fetch('https://api.ecosia.org/v1/trees/count', {
    method: 'get'
}).then(function(response) {
    return response.json();
})
 const menuToggle = document.querySelector('.toggle');
      const showcase = document.querySelector('.showcase');

      menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        showcase.classList.toggle('active');
      })
