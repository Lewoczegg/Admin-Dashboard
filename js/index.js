const notificationBell = document.querySelector('.bell')

notificationBell.addEventListener('click', toggleBell);

function toggleBell() {
    if(notificationBell.src.match('bell-ring.svg')) {
        notificationBell.src = 'img/bell-off.svg';
        notificationBell.alt = 'An icon of disabled bell';
    } else {
        notificationBell.src = 'img/bell-ring.svg'
        notificationBell.alt = 'An icon of ringing bell';
    }
}