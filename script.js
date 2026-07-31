// Typing Effect
const text = document.querySelector('.typing');
const words = ["Manas", "Creative Developer", "UI/UX Designer"];
let i = 0, j = 0, del = false;

function type() {
  text.textContent = words[i].substring(0, j);
  del ? j-- : j++;

  if (j === words[i].length + 1) del = true;
  if (j === 0 && del) {
    del = false;
    i = (i + 1) % words.length;
  }
  setTimeout(type, del ? 80 : 120);
}
type();

// Cursor
const cursor = document.querySelector('.cursor');
const blur = document.querySelector('.cursor-blur');

document.addEventListener('mousemove', e => {
  cursor.style.top = blur.style.top = e.clientY + 'px';
  cursor.style.left = blur.style.left = e.clientX + 'px';
});

// Magnetic Buttons
document.querySelectorAll('.magnetic').forEach(btn => {
  btn.addEventListener('mousemove', e => {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
  });
  btn.addEventListener('mouseleave', () => {
    btn.style.transform = 'translate(0,0)';
  });
});


    