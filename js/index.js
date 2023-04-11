const notificationBell = document.querySelector('.bell');
const bellPath = document.getElementById('bellPath');
const theme = document.querySelector('.theme');
const root = document.documentElement;
const sidebar = document.querySelector('.sidebar');
const heading = document.querySelector('.heading');

notificationBell.addEventListener('click', toggleBell);

function toggleBell() {
    if(bellPath.classList.contains('toggle')) {
        bellPath.classList.remove('toggle');
        bellPath.setAttribute('d', 'M21,19V20H3V19L5,17V11C5,7.9 7.03,5.17 10,4.29C10,4.19 10,4.1 10,4A2,2 0 0,1 12,2A2,2 0 0,1 14,4C14,4.1 14,4.19 14,4.29C16.97,5.17 19,7.9 19,11V17L21,19M14,21A2,2 0 0,1 12,23A2,2 0 0,1 10,21M19.75,3.19L18.33,4.61C20.04,6.3 21,8.6 21,11H23C23,8.07 21.84,5.25 19.75,3.19M1,11H3C3,8.6 3.96,6.3 5.67,4.61L4.25,3.19C2.16,5.25 1,8.07 1,11Z');
    } else {
        bellPath.classList.add('toggle')
        bellPath.setAttribute('d', 'M20.84,22.73L18.11,20H3V19L5,17V11C5,9.86 5.29,8.73 5.83,7.72L1.11,3L2.39,1.73L22.11,21.46L20.84,22.73M19,15.8V11C19,7.9 16.97,5.17 14,4.29C14,4.19 14,4.1 14,4A2,2 0 0,0 12,2A2,2 0 0,0 10,4C10,4.1 10,4.19 10,4.29C9.39,4.47 8.8,4.74 8.26,5.09L19,15.8M12,23A2,2 0 0,0 14,21H10A2,2 0 0,0 12,23Z');
    }
}

theme.addEventListener('click', toggleTheme);

function toggleTheme() {
    if(root.classList.contains('dark')) {
        root.style.setProperty('--color-primary', '#1992d4');
        root.style.setProperty('--color-accent', '#f0b429');
        root.style.setProperty('--color-background-primary', '#e2e8f0');
        root.style.setProperty('--color-background-secondary', '#ffffff');
        root.style.setProperty('--color-text', '#000000');
        root.style.setProperty('--color-box-shadow', '#c4b9b9');
        root.classList.remove('dark');
    } else {
        root.style.setProperty('--color-primary', '#f0b429');
        root.style.setProperty('--color-accent', '#1992d4');
        root.style.setProperty('--color-background-primary', '#363636');
        root.style.setProperty('--color-background-secondary', '#000000');
        root.style.setProperty('--color-text', '#ffffff');
        root.style.setProperty('--color-box-shadow', '#383636');
        root.classList.add('dark');
    }
}

heading.addEventListener('click', () => sidebar.classList.toggle('hide'));