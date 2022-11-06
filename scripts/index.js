const startTime = new Date().getTime();

(function () {
  document.addEventListener('DOMContentLoaded', function () {
    const loadTime = document.getElementById('js-info')
    window.addEventListener('load', () => {
      loadTime.innerHTML += `Эта страница загрузилась за ${(new Date().getTime() - startTime) / 1000} с`;
    });

    const navbar = document.getElementById('navbar');
    const urls = ['index', 'team', 'info'];
    const conditionForActive = urls.find(u => document.location.pathname.includes(u))
    if (conditionForActive)
      [...navbar.children].find(i => i.dataset.key === conditionForActive).classList.add('active');
  })
})()
