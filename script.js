const layers = document.querySelectorAll('.layer');

function Parallax(e) {
    layers.forEach( layer => {
        let speed = layer.getAttribute('speed');
        
        layer.style.transform = `translate(${e.clientX*speed/50}px)`
    })
}
document.addEventListener('mousemove', Parallax);