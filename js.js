document.addEventListener('DOMContentLoaded', () => {
  // Элементы
  const loginForm = document.getElementById('loginForm');
  const heartBtn = document.querySelector('.heart-btn');
  const toast = document.getElementById('toast');
  
  // Обработка формы входа
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const formData = new FormData(loginForm);
      const username = formData.get('username').trim();
      const password = formData.get('password').trim();
      
      if (!username || !password) {
        showToast('Пожалуйста, заполните все поля', 'error');
        return;
      }
      
      if (password.length < 6) {
        showToast('Пароль должен содержать минимум 6 символов', 'error');
        return;
      }
      
      showToast(`Добро пожаловать, ${username}!`, 'success');
      loginForm.reset();
      
      // Анимация успешного входа
      if (heartBtn) {
        heartBtn.classList.add('active');
        heartBtn.innerHTML = '<i class="fas fa-heart"></i>';
      }
    });
  }
  
  // Кнопка сердца
  if (heartBtn) {
    heartBtn.addEventListener('click', () => {
      heartBtn.classList.toggle('active');
      
      if (heartBtn.classList.contains('active')) {
        showToast('Джигглипафф добавлен в избранное!', 'success');
        heartBtn.innerHTML = '<i class="fas fa-heart"></i>';
      } else {
        heartBtn.innerHTML = '<i class="far fa-heart"></i>';
      }
    });
  }
  
  // Показать уведомление
  function showToast(message, type) {
    toast.textContent = message;
    toast.className = 'toast show ' + type;
    
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3000);
  }
  
  // Параллакс эффект для фона
  window.addEventListener('mousemove', (e) => {
    const x = e.clientX / window.innerWidth;
    const y