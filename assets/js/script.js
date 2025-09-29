const $body = document.getElementById('body');
const $listaNav = document.querySelectorAll('.navegacion_ul a[href^="#"]');
const $anhoActual = document.getElementById('anhoActual');

const $mostrar_contacto = document.getElementById('mostrar_contacto');
const $contacto = document.getElementById('contacto');
const $cerrar_contacto = document.getElementById('cerrar_contacto');

/* cambio de visualizacion*/
window.addEventListener('scroll', ()=>{
    $body.classList.toggle('scroll', window.scrollY > 20)
})

/*barra navegacion*/
const observer = new IntersectionObserver(
	(entries) => {
		entries.forEach(entry => {
			const id = entry.target.getAttribute("id");
			const menuLink = document.querySelector(`.navegacion_ul a[href="#${id}"]`);
			
			if (entry.isIntersecting) {
				menuLink.classList.add("mostrar");
			}
			else {
					menuLink.classList.remove("mostrar");
			}
		})
	},
    { rootMargin: "-30% 0px -70% 0px" }
);
$listaNav.forEach(menuLink => {
	const hash = menuLink.getAttribute("href");
	const target = document.querySelector(hash);
	if (target) {
		observer.observe(target);
	}
});

//Actualizar Año	
$anhoActual.innerHTML = new Date().getFullYear();
/*botones ver mas*/

$mostrar_contacto.addEventListener('click', (even)=>{
	$contacto.classList.remove('ocultar')
})

$cerrar_contacto.addEventListener('click', (even)=>{
	$contacto.classList.add('ocultar')
})