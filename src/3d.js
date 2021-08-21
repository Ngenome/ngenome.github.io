export default function Importthem(){ 
    const scene = new THREE.Scene();
    const loader = new GLTFLoader();

    loader.load(
      "path/to/model.glb",
      function (gltf) {
        scene.add(gltf.scene);
      },
      undefined,
      function (error) {
        console.error(error);
      } 
    );
    
      const camera = new THREE.PerspectiveCamera(45, width / height, 1, 1000);
      scene.add(camera);
      const renderer = new THREE.WebGLRenderer({
          canvas:document.querySelector('#bg') 
      });
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.position.setZ(30);
      const geometry = new THREE.BoxGeometry();
      const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
      const cube = new THREE.Mesh(geometry, material);
      scene.add(cube);
      function animate() {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
      }
      animate();
}
