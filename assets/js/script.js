var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // Array of random numbers.

var enter_btn = document.getElementById('enter_btn');
var user_input = document.getElementById('user_input');
var wrapper_div = document.getElementById('wrapper_div');

var combinations_tracker; // Variable converted to 1 when it finds one or more combinations.
var combinations_err_tracker; // Variable converted to 1 when it finds one or more no combinations.

var ol = document.createElement('OL'); // Created ol for store the result.
wrapper_div.appendChild(ol);

enter_btn.addEventListener('click', calculatecom); // This function returns all posible combinations.

function calculatecom(e) {
  combinations_tracker = 0; // Every time we make variable 0 to track records.
  combinations_err_tracker = 0; // Every time we make variable 0 to track records.
  e.preventDefault();
  ol.textContent = ''; // That make result field empty every time.
  var user_input_val = user_input.value;
  user_input_val = Number(user_input_val); // String contains number converted to number and any other data comes expect number it return NaN.

  if (isNaN(user_input_val) || user_input_val === 0) { // Validate user input if its null or NaN.
    wrapper_div.classList.remove('no_combinations');
    wrapper_div.classList.add('error');
  } else { // If input is valid then we find combinations and show it inside ol.
    wrapper_div.classList.remove('error');
    wrapper_div.classList.remove('no_combinations');
    for (i = 0; i <= arr.length - 1; i++) {
      for (j = i + 1; j <= arr.length - 1; j++) {
        if (arr[i] + arr[j] === user_input_val) {
          console.log(arr[i] + '+' + arr[j] + '=' + user_input_val);
          var result = document.createElement('LI');
          result.textContent = arr[i] + '+' + arr[j] + '=' + user_input_val;
          ol.appendChild(result);
          combinations_tracker = 1; // Assign 1 if one or more combinations found.
        } else {
          combinations_err_tracker = 1; // Assign 1 if one or more non combinations found.
        }
      }
    }

    if (combinations_tracker === 0 && combinations_err_tracker === 1) { // This means no combinations found at all and we show an error massage.
      wrapper_div.classList.add('no_combinations');
    }
  }
}
