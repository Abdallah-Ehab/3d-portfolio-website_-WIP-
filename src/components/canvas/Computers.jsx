import { Canvas } from '@react-three/fiber'
import { Suspense,useEffect,useState } from 'react'
import { OrbitControls } from '@react-three/drei'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import CanvasLoader from './canvasloader'
// https://sketchfab.com/3d-models/space-exploration-wlp-series-8-91964c1ce1a34c3985b6257441efa500#download

const Computers = ()=> {
  const gltf = useLoader(GLTFLoader, 'scene.glb')
  const [isMobile,SetIsMobile]=useState(false)
  useEffect(()=>{
    const mediaquery = window.matchMedia('(max-width : 500)')

    SetIsMobile(mediaquery)
    
    const handleresize=(e)=>{
      SetIsMobile(e.matches)
    }
    mediaquery.addEventListener("change",handleresize)

    return(    mediaquery.removeEventListener("change",handleresize)
    )

  },[])
  return (
    <div>
      <Canvas frameloop='demand' shadows camera={{position:[20,3,5],fov:25}} style={{ height: '100vh', width: '100vw' }} gl={{preserveDrawingBuffer:true}}>
        <Suspense fallback={<CanvasLoader/>}>
           <OrbitControls enableZoom={false} minPolarAngle={Math.PI/2} maxPolarAngle={Math.PI/2}/>
          <pointLight color="#f6f3ea" position={[10, 5, 10]} intensity={2} />
          <hemisphereLight intensity={0.5} groundColor={"black"}/>
          <primitive scale={[1, 1, 1]} position={[ 0, -3,0 ]} object={gltf.scene} />
        </Suspense>
      </Canvas>
    </div>
  )
}
 export default Computers