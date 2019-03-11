const sidenavOverlay = document.querySelector('.sidenav-overlay'),
icon = document.querySelector('.icon'),
header = document.querySelector('header'),
navBg = document.querySelector('.nav-bg'),
headerH = header.scrollHeight.toString() + 'px';
window.onload = function(){
	navBg.style.height = headerH;
};
icon.addEventListener('click', () => {
	header.classList.toggle('active');
});
sidenavOverlay.addEventListener('click', () => {
	header.classList.remove('active');
});