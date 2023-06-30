function handleSubmit() {
  // Get form values
  var name = document.getElementById('name').value;
  var city = document.getElementById('city').value;
  var date = document.getElementById('date').value;
  var pet = document.getElementById('pet').value;
  var subscribe = document.getElementById('subscribe').checked;

  // Display the input in an alert
  var message =
    'Name: ' +
    name +
    '\nDatum: ' +
    date +
    '\nWohnort: ' +
    city +
    '\nHaustier: ' +
    pet +
    '\nsubscribe: ' +
    subscribe;
  alert(message);
}