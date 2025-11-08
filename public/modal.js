// modal.js - handles opening/closing the login modal and submits via fetch to /modal-login
document.addEventListener('DOMContentLoaded', () => {
  const signinBtn = document.getElementById('signinBtn');
  const modal = document.getElementById('loginModalBackdrop');
  if (!signinBtn || !modal) return;

  const openModal = () => modal.classList.add('show');
  const closeModal = () => modal.classList.remove('show');

  signinBtn.addEventListener('click', openModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  // close buttons
  document.querySelectorAll('.modal-close').forEach(btn => btn.addEventListener('click', closeModal));

  // role toggle inside modal
  modal.querySelectorAll('.role-btn').forEach(btn => {
    btn.addEventListener('click', function () {
      modal.querySelectorAll('.role-btn').forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      const role = this.getAttribute('data-role');
      modal.querySelectorAll('.login-form').forEach(f => f.classList.remove('active'));
      const sel = modal.querySelector(`#${role}LoginForm`);
      if (sel) sel.classList.add('active');
    });
  });

  // password toggle
  modal.querySelectorAll('.password-toggle').forEach(toggle => {
    toggle.addEventListener('click', function () {
      const input = this.parentElement.querySelector('input');
      const icon = this.querySelector('i');
      if (input.type === 'password') {
        input.type = 'text';
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
      } else {
        input.type = 'password';
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
      }
    });
  });

  // form submit via fetch to /modal-login
  modal.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      const original = btn.textContent;
      btn.textContent = 'Logging in...';
      btn.disabled = true;

      const formData = new FormData(form);
      const payload = {};
      for (const [k, v] of formData.entries()) payload[k] = v;

      try {
        const res = await fetch('/modal-login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });
        const json = await res.json();
        if (json.success) {
          // redirect if provided
          if (json.redirect) {
            window.location.href = json.redirect;
            return;
          }
          alert('Login successful');
          closeModal();
        } else {
          alert(json.message || 'Login failed');
        }
      } catch (err) {
        console.error(err);
        alert('Network error');
      } finally {
        btn.textContent = original;
        btn.disabled = false;
      }
    });
  });
  
  // add/remove body class to prevent background scroll
  const openWithLock = () => {
    modal.classList.add('show');
    document.body.classList.add('modal-open');
  };
  const closeWithUnlock = () => {
    modal.classList.remove('show');
    document.body.classList.remove('modal-open');
  };

  // replace event bindings to use lock/unlock
  signinBtn.removeEventListener('click', openModal);
  signinBtn.addEventListener('click', openWithLock);
  modal.addEventListener('click', (e) => { if (e.target === modal) closeWithUnlock(); });
  document.querySelectorAll('.modal-close').forEach(btn => btn.addEventListener('click', closeWithUnlock));
});
