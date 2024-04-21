const face = document.getElementById('face')
const pupils = document.querySelectorAll('.pupil')

const move = (e) => {
    let x = ( e.clientX / (window.innerWidth / 69) )
    let y = (e.clientY / 12)
    let fX = (e.clientX / 20)
    let fY = (e.clientY / 20)

    face.style.transform = `translate(${fX}px, ${fY}px)`

    // document.body.style.backgroundColor = `rgba(${y}, ${x}, ${fY}, 50%)`

    for(const pupil of pupils) {
        pupil.style.transform = `translate(${x}px, ${y}px)`
    }
}

window.addEventListener('mousemove', move)