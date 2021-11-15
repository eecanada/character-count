function charCount(charLimit) {
  let warning = document.querySelector('.warning');
  let inputForm = document.querySelector('.input-form');
  inputForm.maxLength = `${charLimit}`;
  let num = document.querySelector('.num');
  num.textContent = charLimit;
  let numberCount = Number(num.textContent);

  inputForm.addEventListener('keyup', function (e) {
    if (inputForm.value.length >= charLimit) {
      warning.style.display = 'block';
    } else {
      warning.style.display = 'none';
    }

    num.textContent = numberCount - inputForm.value.length;
  });
}

charCount(140);
