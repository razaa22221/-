document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('contact-form').addEventListener('submit', e => {
  e.preventDefault();
  document.getElementById('form-status').textContent = 'תודה! ההודעה התקבלה (טופס לדוגמה, עדיין לא מחובר לשרת).';
  e.target.reset();
});
