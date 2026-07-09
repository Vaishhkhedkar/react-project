// const Viewer3D = () => {
//   return (
//     <main
//       style={{
//         backgroundColor: "#111827",
//         color: "white",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >
//       3D Viewer
//     </main>
//   );
// };

// export default Viewer3D;


// import { useEffect, useRef } from "react";
// import * as THREE from "three";

// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
// import { PLYLoader } from "three/examples/jsm/loaders/PLYLoader.js";

// type Props = {
//   pointSize: number;
//   opacity: number;
//   background: string;
//   setLoading: (value: boolean) => void;
//   setPoints: (value: number) => void;
//   setCamera: (value: string) => void;
// };

// const Viewer3D = ({
//   pointSize,
//   opacity,
//   background,
//   setLoading,
//   setPoints,
//   setCamera,
// }: Props) => {
//   const mountRef = useRef<HTMLDivElement>(null);

//   const pointsRef = useRef<THREE.Points | null>(null);

//   useEffect(() => {
//     if (!mountRef.current) return;

//     const width = mountRef.current.clientWidth;
//     const height = mountRef.current.clientHeight;

//     // Scene

//     const scene = new THREE.Scene();
//     scene.background = new THREE.Color(background);

//     // Camera

//     const camera = new THREE.PerspectiveCamera(
//       60,
//       width / height,
//       0.1,
//       5000
//     );

//     camera.position.set(0, 0, 80);

//     // Renderer

//     const renderer = new THREE.WebGLRenderer({
//       antialias: true,
//     });

//     renderer.setSize(width, height);

//     mountRef.current.innerHTML = "";
// mountRef.current.appendChild(renderer.domElement);

//     // Controls

//     const controls = new OrbitControls(camera, renderer.domElement);

//     controls.enableDamping = true;

//     // Lights

//     scene.add(new THREE.AmbientLight(0xffffff));

//     // Load PLY

//     const loader = new PLYLoader();

//     setLoading(true);

//     loader.load(
//       "/Road_Design_Charholi_float.ply",

//       (geometry) => {

//         console.log(geometry.attributes);
//         geometry.computeVertexNormals();

//         const material = new THREE.PointsMaterial({
//   size: pointSize,
//   transparent: true,
//   opacity: opacity,
//   vertexColors: true,
// });
//        geometry.computeBoundingBox();

// console.log("Bounding Box:", geometry.boundingBox);

// const center = new THREE.Vector3();

// geometry.boundingBox?.getCenter(center);

// geometry.translate(
//   -center.x,
//   -center.y,
//   -center.z
// );

// const points = new THREE.Points(
//   geometry,
//   material
// );

// scene.add(points);

// camera.position.set(0, 0, 800);

// controls.target.set(0, 0, 0);
// controls.update();


//         pointsRef.current = points;

//         // 
        
//         console.log("Geometry:", geometry);
// console.log("Attributes:", geometry.attributes);
// console.log("Position:", geometry.attributes.position);

// if (geometry.attributes.position) {
//   console.log("Point Count:", geometry.attributes.position.count);

//   setPoints(geometry.attributes.position.count);
// } else {
//   console.log("No position attribute found!");
// }

// setLoading(false);
//       },

//       undefined,

//       (err) => {
//         console.log(err);
//         setLoading(false);
//       }
//     );

//     // Animation

//     const animate = () => {
//       requestAnimationFrame(animate);

//       controls.update();

//       setCamera(
//         `${camera.position.x.toFixed(1)},
//          ${camera.position.y.toFixed(1)},
//          ${camera.position.z.toFixed(1)}`
//       );

//       renderer.render(scene, camera);
//     };

//     animate();

//     // Resize

//     const resize = () => {
//       camera.aspect =
//         mountRef.current!.clientWidth /
//         mountRef.current!.clientHeight;

//       camera.updateProjectionMatrix();

//       renderer.setSize(
//         mountRef.current!.clientWidth,
//         mountRef.current!.clientHeight
//       );
//     };

//     window.addEventListener("resize", resize);

//     return () => {
//       window.removeEventListener("resize", resize);

//       renderer.dispose();

//       mountRef.current?.removeChild(renderer.domElement);
//     };
//   }, []);

//   // Update Point Size

//   useEffect(() => {
//     if (!pointsRef.current) return;

//     (
//       pointsRef.current.material as THREE.PointsMaterial
//     ).size = pointSize;
//   }, [pointSize]);

//   // Update Opacity

//   useEffect(() => {
//     if (!pointsRef.current) return;

//     (
//       pointsRef.current.material as THREE.PointsMaterial
//     ).opacity = opacity;
//   }, [opacity]);

//   // Background

//   useEffect(() => {
//     if (!mountRef.current) return;

//     mountRef.current.style.background = background;
//   }, [background]);

//   return (
//     <div
//       ref={mountRef}
//       style={{
//         width: "100%",
//         height: "100%",
//       }}
//     />
//   );
// };

// export default Viewer3D;



import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { PLYLoader } from "three/examples/jsm/loaders/PLYLoader.js";

type Props = {
  pointSize: number;
  opacity: number;
  background: string;
  setLoading: (value: boolean) => void;
  setPoints: (value: number) => void;
  setCamera: (value: string) => void;
};

const Viewer3D = ({
  pointSize,
  opacity,
  background,
  setLoading,
  setPoints,
  setCamera,
}: Props) => {
  const mountRef = useRef<HTMLDivElement>(null);

  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const controlsRef = useRef<OrbitControls | null>(null);
  const pointsRef = useRef<THREE.Points | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const container = mountRef.current;

    container.innerHTML = "";

    const width = container.clientWidth;
    const height = container.clientHeight;

    // Scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(background);
    sceneRef.current = scene;

    // Camera
    const camera = new THREE.PerspectiveCamera(
      60,
      width / height,
      0.1,
      100000
    );

    camera.position.set(0, 0, 100);

    cameraRef.current = camera;

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
    });

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    renderer.setSize(width, height);

    container.appendChild(renderer.domElement);

    rendererRef.current = renderer;

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);

    controls.enableDamping = true;
    controls.dampingFactor = 0.05;

    controlsRef.current = controls;

    // Light
    scene.add(new THREE.AmbientLight(0xffffff, 2));

    // Load PLY
    const loader = new PLYLoader();

    setLoading(true);

    loader.load(
      "/Road_Design_Charholi_float.ply",

      (geometry) => {
        geometry.computeBoundingBox();

        const center = new THREE.Vector3();

        geometry.boundingBox?.getCenter(center);

        geometry.translate(-center.x, -center.y, -center.z);

        geometry.computeBoundingSphere();

        const material = new THREE.PointsMaterial({
          size: pointSize,
          transparent: true,
          opacity: opacity,
          vertexColors: true,
        });

        const cloud = new THREE.Points(geometry, material);

        scene.add(cloud);

        pointsRef.current = cloud;

        if (geometry.boundingSphere) {
          const radius = geometry.boundingSphere.radius;

          camera.position.set(0, 0, radius * 2.5);

          controls.target.set(0, 0, 0);

          controls.update();
        }

        setPoints(geometry.attributes.position.count);

        setLoading(false);
      },

      undefined,

      (error) => {
        console.error(error);

        setLoading(false);
      }
    );

    let animationId = 0;
let lastUpdate = 0;

const lastCamera = { value: "" };

const animate = (time: number) => {
  animationId = requestAnimationFrame(animate);

  controls.update();

  renderer.render(scene, camera);

  if (time - lastUpdate > 500) {
    lastUpdate = time;

    const cam = `${camera.position.x.toFixed(1)}, ${camera.position.y.toFixed(
      1
    )}, ${camera.position.z.toFixed(1)}`;

    if (cam !== lastCamera.value) {
      lastCamera.value = cam;
      setCamera(cam);
    }
  }
};

animate(0);

    const onResize = () => {
      if (!mountRef.current) return;

      const w = mountRef.current.clientWidth;
      const h = mountRef.current.clientHeight;

      camera.aspect = w / h;

      camera.updateProjectionMatrix();

      renderer.setSize(w, h);
    };

    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(animationId);

      window.removeEventListener("resize", onResize);

      controls.dispose();

      renderer.dispose();

      if (pointsRef.current) {
        pointsRef.current.geometry.dispose();

        (
          pointsRef.current.material as THREE.Material
        ).dispose();
      }

      container.innerHTML = "";
    };
  }, []);

  // Point Size

  useEffect(() => {
    if (!pointsRef.current) return;

    const material = pointsRef.current.material as THREE.PointsMaterial;

    material.size = pointSize;

    material.needsUpdate = true;
  }, [pointSize]);

  // Opacity

  useEffect(() => {
    if (!pointsRef.current) return;

    const material = pointsRef.current.material as THREE.PointsMaterial;

    material.opacity = opacity;

    material.transparent = true;

    material.needsUpdate = true;
  }, [opacity]);

  // Background

  useEffect(() => {
    if (!sceneRef.current) return;

    sceneRef.current.background = new THREE.Color(background);
  }, [background]);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        overflow: "hidden",
      }}
      ref={mountRef}
    />
  );
};

export default Viewer3D;