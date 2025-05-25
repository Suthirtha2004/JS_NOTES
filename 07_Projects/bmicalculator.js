const form = document.querySelector('form');
//const height = parseInt(document.querySelector("#height").value)
//this will return empty value

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please provide a value ${height}`;
  }
  if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please provide a value ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `<span>${bmi}</span>`;
  }
  const bmi = (weight / ((height * height) / 10000)).toFixed(2);
  const conclusion = document.querySelector('#conclusion');
  if (bmi < 18.6) {
    conclusion.innerHTML = `<span>Under weight</span`;
  } else if (bmi >= 18.6 && bmi < 24.9) {
    conclusion.innerHTML = `<span>Normal weight</span>`;
  } else bmi >= 24.9;
  {
    conclusion.innerHTML = `<span>Over weight</span>`;
  }
});
