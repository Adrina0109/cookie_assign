document.addEventListener('DOMContentLoaded', function () {
  function getCookie(name) {
    let cookieArray = document.cookie.split('; ');
    let cookie = cookieArray.find((row) => row.startsWith(name + '='));
    return cookie ? cookie.split('=')[1] : null;
  }
  function setCookie(name, value, daysToExpire) {
    let date = new Date();
    date.setTime(date.getTime() + daysToExpire * 24 * 60 * 60 * 1000);
    document.cookie =
      name + '=' + value + ';expires=' + date.toUTCString() + ';path=/';
  }
  function updateCount() {
    let count = getCookie('count'); 
    count = count ? parseInt(count) + 1 : 1; 
    setCookie('count', count, 7); 

    document.getElementById('countDisplay').textContent = count;
  }
  let countElement = document.getElementById('countDisplay');
  if (!countElement) {
    countElement = document.createElement('p');
    countElement.id = 'countDisplay';
    document.body.appendChild(countElement);
  }

  updateCount(); 
});
