// SIDEBAR ACTIVE
const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');

allSideMenu.forEach(item=> {
	const li = item.parentElement;

	item.addEventListener('click', function () {
		allSideMenu.forEach(i=> {
			i.parentElement.classList.remove('active');
		})
		li.classList.add('active');
	})
});


// TOGGLE SIDEBAR
const menuBar = document.querySelector('#content nav .bx.bx-menu');
const sidebar = document.getElementById('sidebar');

menuBar.addEventListener('click', function () {
	sidebar.classList.toggle('hide');
})


// DARK-LIGHT MODE
const switchMode = document.getElementById('switch-mode');

if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark');
    switchMode.checked = true;
} else {
    document.body.classList.remove('dark');
}

switchMode.addEventListener('change', function () {
    if (this.checked) {
        document.body.classList.add('dark');
        localStorage.setItem('darkMode', 'enabled');
    } else {
        document.body.classList.remove('dark');
        localStorage.setItem('darkMode', 'disabled');
    }
});


// LOADER SPINNER
window.addEventListener("load" , () => {
	const loader = document.querySelector(".loader");

	loader.classList.add("loader-hidden");

	loader.addEventListener("transitioned" , () => {
		document.body.removeChild("loader");
	})
})


// FUNCTION SWEETALERT
function comingsoon(){
	Swal.fire({
		title: "Akan Hadir!",
		text: "Fitur Back-end Segera Hadir",
		icon: "info	"
	});
}