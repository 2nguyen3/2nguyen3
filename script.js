/* ---------- A. Validation Form ---------- */
document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('#contact-form'); // đúng ID trong HTML
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');

  form.addEventListener('submit', function (e) {
    e.preventDefault(); // Ngăn gửi form nếu có lỗi
    let errors = [];

    // Kiểm tra tên
    if (nameInput.value.trim() === '') {
      errors.push('⚠️ Tên không được để trống.');
    }

    // Kiểm tra email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (emailInput.value.trim() === '') {
      errors.push('⚠️ Email không được để trống.');
    } else if (!emailRegex.test(emailInput.value.trim())) {
      errors.push('⚠️ Email không hợp lệ!');
    }

    // Kiểm tra lời nhắn
    if (messageInput.value.trim() === '') {
      errors.push('⚠️ Lời nhắn không được để trống.');
    } else if (messageInput.value.trim().length < 10) {
      errors.push('⚠️ Lời nhắn phải có ít nhất 10 ký tự!');
    }

    // Hiển thị thông báo lỗi hoặc gửi thành công
    if (errors.length > 0) {
      alert("❌ Vui lòng kiểm tra lại:\n\n" + errors.join("\n"));
    } else {
      alert("✅ Gửi thành công! Cảm ơn bạn đã liên hệ 💌");
      form.reset();
    }
  });
});

/* ---------- B. Checkbox Hoàn Thành ---------- */
document.addEventListener('DOMContentLoaded', function () {
  const checkboxes = document.querySelectorAll('.goal-checkbox');

  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', function () {
      const row = this.closest('tr');
      if (this.checked) {
        row.style.backgroundColor = '#c6f5c6';
        row.style.textDecoration = 'line-through';
      } else {
        row.style.backgroundColor = '';
        row.style.textDecoration = 'none';
      }
    });
  });
});

/* ---------- C. Hiệu ứng ảnh đại diện ---------- */
document.addEventListener('DOMContentLoaded', function () {
  const avatar = document.getElementById('avatar');
  if (avatar) {
    avatar.style.transition = 'transform 0.3s ease, border 0.3s ease';
    avatar.addEventListener('mouseover', function () {
      avatar.style.transform = 'scale(1.05)';
      avatar.style.border = '3px solid #CAEDFF';
      avatar.style.borderRadius = '8px';
    });
    avatar.addEventListener('mouseout', function () {
      avatar.style.transform = 'scale(1)';
      avatar.style.border = 'none';
    });
  }
});

/* ---------- D. Nút Back to Top ---------- */
document.addEventListener('DOMContentLoaded', function () {
  const backToTopBtn = document.getElementById('backToTop');

  // Hiện / ẩn nút khi cuộn
  window.addEventListener('scroll', function () {
    if (window.scrollY > 300) {
      backToTopBtn.style.display = 'block';
    } else {
      backToTopBtn.style.display = 'none';
    }
  });

  // Khi click nút, cuộn lên đầu trang
  backToTopBtn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
