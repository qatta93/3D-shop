import React, { useEffect, useState, useRef } from "react";
import { useFrame } from "react-three-fiber";
import * as THREE from "three";
import { Html } from "drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Object3D } from "three/src/core/Object3D"; //Object3D types
import { AnimationClip } from "three/src/animation/AnimationClip"; //Animation types

interface group {
  current: {
    rotation: {
      x: number;
      y: number;
    };
  };
}

interface actions {
  current: {
    idle: {
      play: () => void;
    };
  };
}

const Model = () => {
  /* Refs */
  const group = useRef();
  const actions = useRef();

  /* State */
  const [model, setModel] = useState<Object3D | null>(null);
  const [animation, setAnimation] = useState<AnimationClip[] | null>(null);

  /* Mixer */
       {/* @ts-ignore: Unreachable code error */}
  const [mixer] = useState(() => new THREE.AnimationMixer(null));

  /* Load model */
  useEffect(() => {
    const loader = new GLTFLoader();
    loader.load("scene.gltf", async (gltf) => {
      const nodes = await gltf.parser.getDependencies("node");
      const animations = await gltf.parser.getDependencies("animation");
      setModel(nodes[0]);
      setAnimation(animations);
    });
  }, []);

  /* Set animation */
  useEffect(() => {
    if (animation && typeof group.current != "undefined") {
           {/* @ts-ignore: Unreachable code error */}
      actions.current = {
        idle: mixer.clipAction(animation[0], group.current as Object3D),
      };
           {/* @ts-ignore: Unreachable code error */}
      actions.current.idle.play();
      return () => animation.forEach((clip) => mixer.uncacheClip(clip));
    }
  }, [animation]);

  /* Animation update */
  useFrame((_, delta) => mixer.update(delta));
  /* Rotation */
  useFrame(() => {
    if (typeof group.current != "undefined")
         {/* @ts-ignore: Unreachable code error */}
      return (group.current.rotation.y += 0.01);
  });

  return (
    <>
      {model ? (
        /* @ts-ignore: Unreachable code error */
        <group ref={group} position={[0, -150, 0]} dispose={null}>
          <primitive ref={group} name="Object_0" object={model} />
        </group>
      ) : (
        <Html>Loading...</Html>
      )}
    </>
  );
};

export default Model;