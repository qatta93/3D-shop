import React, { useEffect, useState, useRef } from "react";
import { useFrame } from '@react-three/fiber';
import * as THREE from "three";
import { Html } from '@react-three/drei';
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Object3D } from "three/src/core/Object3D";
import { AnimationClip } from "three/src/animation/AnimationClip";
import {group, actions} from './types/index'


const Model = (item) => {
  const group:group = useRef();
  const actions:actions = useRef();

  const [model, setModel] = useState<Object3D | null>(null);
  const [animation, setAnimation] = useState<AnimationClip[] | null>(null);

  const [mixer] = useState(() => new THREE.AnimationMixer(null));

  useEffect(() => {
    const loader = new GLTFLoader();
    loader.load(`models/${item.item.type}/${item.id}/scene.gltf`, async (gltf) => {
      if(item.id === 'chair1') {
        gltf.scene.children[0].scale.multiplyScalar(1.2);
      }
      if(item.id === 'chair2') {
        gltf.scene.children[0].scale.multiplyScalar(1.9);
        gltf.scene.children[0].position.set(0, -30, 0)
      }
      if(item.id === 'table1') {
        gltf.scene.children[0].scale.multiplyScalar(6);
        gltf.scene.children[0].position.set(0, 60, 0)
      }
      if(item.id === "table2") {
        gltf.scene.children[0].scale.multiplyScalar(6);
        gltf.scene.children[0].position.set(0, -10, 0)
      }
      if(item.id === 'lamp1') {
        gltf.scene.children[0].scale.multiplyScalar(25);
        gltf.scene.children[0].position.set(0, 60, 0)
      }
      if(item.id === "lamp2") {
        gltf.scene.children[0].scale.multiplyScalar(23);
        gltf.scene.children[0].position.set(0, 60, 0)
      }


      const nodes = await gltf.parser.getDependencies("node");
      const animations = await gltf.parser.getDependencies("animation");
      setModel(nodes[0]);
      setAnimation(animations);
    });
  }, []);

  useEffect(() => {
    if (animation && typeof group.current != "undefined" && typeof actions.current != "undefined") {
      actions.current = {
        idle: mixer.clipAction(animation[0], group.current as Object3D),
      };
      actions.current.idle.play();
      return () => animation.forEach((clip) => mixer.uncacheClip(clip));
    }
  }, [animation]);

  useFrame((_, delta) => mixer.update(delta));
  useFrame(() => {
    if (typeof group.current != "undefined")
      return (group.current.rotation.y += 0.01);
  });

  return (
    <>
      {model ? (
        /* @ts-ignore: Unreachable code error */
        <group ref={group} position={[0, -60, 80]} dispose={null}>
          <primitive ref={group} name="Object_0" object={model} />
        </group>
      ) : (
        <Html center style={{color: 'white', height: '6rem'}}>
          <p>Loading..</p>
          <img src="images/loading2.gif" alt="" style={{height: '4rem', width: '15rem'}}/>
        </Html>
      )}
    </>
  );
};

export default Model;