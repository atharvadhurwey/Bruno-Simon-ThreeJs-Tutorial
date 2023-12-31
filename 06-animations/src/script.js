import './style.css'
import * as THREE from 'three'
import gsap from 'gsap'


// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

// Sizes
const sizes = {
    width: 800,
    height: 600
}

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)

// Time default
// let time = Date.now()

// Time clock
// const clock = new THREE.Clock()

// using gsap
gsap.to(mesh.position, { duration: 1, delay: 1, x: 2 })
gsap.to(mesh.position, { duration: 1, delay: 2, x: 0 })

// Animations
const tick = () => {

    // Clock
    // const elapsedTime = clock.getElapsedTime()
    // console.log(elapsedTime)

    // Time default
    // const currentTime = Date.now()
    // const deltaTime = currentTime - time
    // time = currentTime

    // console.log(deltaTime)

        // update objects using Time default
        // mesh.position.x += 0.001 * deltaTime
        // mesh.position.y += 0.001 * deltaTime

    // update objects using clocks
//     mesh.position.x = Math.cos(elapsedTime)
//     mesh.position.y = Math.sin(elapsedTime)
//     camera.lookAt(mesh.position)

    // Renderer
    renderer.render(scene, camera)

    // call tick again on the next frame
    window.requestAnimationFrame(tick)


//     //Remark - you can also use to animate camera
}

tick()
