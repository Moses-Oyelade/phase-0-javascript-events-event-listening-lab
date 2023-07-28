const input = document.getElementById('input');

function clickAlert() {
  alert('I was clicked!');
}

function addingEventListener(addEventListener) {
    input.addEventListener('click', clickAlert);
}
addingEventListener();