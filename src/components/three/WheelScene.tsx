'use client';

import React, { useRef, useMemo, useState, useEffect } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { WHEEL_CATEGORIES, WheelCategoryMeta } from '@/data/questions';
import { WheelCategory } from '@/types/question';
import { soundManager } from '@/utils/sound';

interface WheelSceneProps {
  isSpinning: boolean;
  onSpinComplete: (category: WheelCategory) => void;
  onSpinStart?: () => void;
  disabled?: boolean;
}

export default function WheelScene({
  isSpinning: externalIsSpinning,
  onSpinComplete,
  onSpinStart,
  disabled = false,
}: WheelSceneProps) {
  const wheelGroupRef = useRef<THREE.Group>(null);
  const pointerRef = useRef<THREE.Mesh>(null);
  const [internalSpinning, setInternalSpinning] = useState(false);
  const [currentRotation, setCurrentRotation] = useState(0);

  const numSegments = WHEEL_CATEGORIES.length;
  const segmentAngle = 360 / numSegments; // 45 degrees

  // Audio tick tracking
  const lastTickAngleRef = useRef(0);
  const pointerWobbleRef = useRef(0);

  // Generate ultra-crisp procedural Canvas Texture for the astrolabe face
  const texture = useMemo(() => {
    const size = 1024;
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');
    if (!ctx) return new THREE.CanvasTexture(canvas);

    const center = size / 2;
    const radius = center - 16;

    ctx.clearRect(0, 0, size, size);

    // Background brass disk fill
    ctx.beginPath();
    ctx.arc(center, center, radius, 0, 2 * Math.PI);
    ctx.fillStyle = '#1A1815';
    ctx.fill();

    // Draw 8 Segments
    WHEEL_CATEGORIES.forEach((cat, i) => {
      const startAngle = (i * segmentAngle * Math.PI) / 180 - Math.PI / 2;
      const endAngle = startAngle + (segmentAngle * Math.PI) / 180;

      // Slice background
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(center, center);
      ctx.arc(center, center, radius - 10, startAngle, endAngle);
      ctx.closePath();
      ctx.fillStyle = cat.color;
      ctx.fill();

      // Gold inlay separator line
      ctx.lineWidth = 4;
      ctx.strokeStyle = '#D4AF37';
      ctx.stroke();

      // Category Icon & Label
      ctx.save();
      ctx.translate(center, center);
      ctx.rotate(startAngle + (segmentAngle * Math.PI) / 360);

      // Icon
      ctx.font = '54px serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(cat.icon, radius * 0.72, 0);

      // Label with drop shadow
      ctx.font = 'bold 26px serif, Georgia, sans-serif';
      ctx.fillStyle = '#FFFFFF';
      ctx.shadowColor = 'rgba(0, 0, 0, 0.85)';
      ctx.shadowBlur = 8;
      ctx.shadowOffsetX = 2;
      ctx.shadowOffsetY = 2;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      const words = cat.name.split(' ');
      if (words.length > 1 && cat.name.length > 9) {
        ctx.fillText(words[0], radius * 0.44, -14);
        ctx.fillText(words.slice(1).join(' '), radius * 0.44, 16);
      } else {
        ctx.fillText(cat.name, radius * 0.44, 0);
      }

      ctx.restore();
      ctx.restore();
    });

    // Outer decorative celestial rings
    ctx.save();
    ctx.beginPath();
    ctx.arc(center, center, radius - 10, 0, 2 * Math.PI);
    ctx.lineWidth = 8;
    ctx.strokeStyle = '#D4AF37';
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(center, center, radius - 24, 0, 2 * Math.PI);
    ctx.lineWidth = 3;
    ctx.strokeStyle = '#B38B22';
    ctx.stroke();

    // Medallion inner shadow & ring
    ctx.beginPath();
    ctx.arc(center, center, 110, 0, 2 * Math.PI);
    ctx.fillStyle = '#221F1A';
    ctx.fill();
    ctx.lineWidth = 6;
    ctx.strokeStyle = '#D4AF37';
    ctx.stroke();

    // Center star
    ctx.fillStyle = '#FDFBF7';
    ctx.font = 'bold 44px serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('✦', center, center);

    ctx.restore();

    const canvasTexture = new THREE.CanvasTexture(canvas);
    canvasTexture.anisotropy = 8;
    return canvasTexture;
  }, [segmentAngle]);

  // Spin Trigger Engine
  const spinAstrolabe = (forcedCategory?: WheelCategory) => {
    if (internalSpinning || externalIsSpinning || disabled) return;

    setInternalSpinning(true);
    onSpinStart?.();

    const targetCategoryMeta = forcedCategory
      ? WHEEL_CATEGORIES.find((c) => c.id === forcedCategory) || WHEEL_CATEGORIES[0]
      : WHEEL_CATEGORIES[Math.floor(Math.random() * WHEEL_CATEGORIES.length)];

    const targetIndex = WHEEL_CATEGORIES.findIndex((c) => c.id === targetCategoryMeta.id);

    // Calculate landing rotation angle (Top Needle at 12 o'clock)
    const randomJitter = (Math.random() - 0.5) * (segmentAngle * 0.6);
    const targetSliceCenter = 360 - (targetIndex * segmentAngle + segmentAngle / 2) + randomJitter;
    const extraSpins = (5 + Math.floor(Math.random() * 3)) * 360;
    const currentNorm = currentRotation % 360;
    const targetTotalRotation = currentRotation + (extraSpins + ((targetSliceCenter - currentNorm + 360) % 360));

    const startRotation = currentRotation;
    const distance = targetTotalRotation - startRotation;
    const startTime = performance.now();
    const duration = 4400; // 4.4 seconds luxurious spin

    const animateSpin = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Quartic Deceleration easeOutQuart
      const ease = 1 - Math.pow(1 - progress, 4);
      const newAngle = startRotation + distance * ease;

      setCurrentRotation(newAngle);

      // Check ticks for needle bounce & sound
      const deltaAngle = newAngle - lastTickAngleRef.current;
      if (deltaAngle >= segmentAngle) {
        soundManager.playTick();
        lastTickAngleRef.current = newAngle;
        pointerWobbleRef.current = 0.35; // Kick pointer
      }

      if (progress < 1) {
        requestAnimationFrame(animateSpin);
      } else {
        setInternalSpinning(false);
        soundManager.playWheelLand();
        onSpinComplete(targetCategoryMeta.id);
      }
    };

    requestAnimationFrame(animateSpin);
  };

  // Sync rotation to 3D Wheel Group every frame
  useFrame((_, delta) => {
    if (wheelGroupRef.current) {
      // In Three.js, rotation around Z or Y axis depending on orientation
      // We orient the wheel face up towards +Z with slight tilt
      wheelGroupRef.current.rotation.z = -THREE.MathUtils.degToRad(currentRotation);
    }

    // Needle bounce recovery
    if (pointerRef.current) {
      if (pointerWobbleRef.current > 0) {
        pointerRef.current.rotation.z = Math.sin(Date.now() * 0.04) * pointerWobbleRef.current;
        pointerWobbleRef.current = Math.max(0, pointerWobbleRef.current - delta * 2.5);
      } else {
        pointerRef.current.rotation.z = 0;
      }
    }
  });

  return (
    <group position={[0, 0, 0]}>
      {/* 1. Rotating Wheel Cylinder & Disc */}
      <group
        ref={wheelGroupRef}
        onClick={() => spinAstrolabe()}
        onPointerOver={(e) => {
          e.stopPropagation();
          document.body.style.cursor = disabled || internalSpinning ? 'default' : 'pointer';
        }}
        onPointerOut={() => {
          document.body.style.cursor = 'default';
        }}
      >
        {/* Main Wheel Disc Face with Astrolabe Canvas Texture (Facing Camera along +Z) */}
        <mesh position={[0, 0, 0.05]} castShadow receiveShadow>
          <circleGeometry args={[2.5, 64]} />
          <meshStandardMaterial
            map={texture}
            metalness={0.15}
            roughness={0.4}
            side={THREE.DoubleSide}
          />
        </mesh>

        {/* 3D Depth & Antique Brass Rim Backing */}
        <mesh position={[0, 0, -0.02]} rotation={[Math.PI / 2, 0, 0]} castShadow receiveShadow>
          <cylinderGeometry args={[2.52, 2.52, 0.14, 64]} />
          <meshStandardMaterial
            color="#8C6239"
            metalness={0.85}
            roughness={0.25}
          />
        </mesh>

        {/* Outer Brass Riveted Rim */}
        <mesh position={[0, 0, 0.08]}>
          <torusGeometry args={[2.55, 0.08, 16, 64]} />
          <meshStandardMaterial color="#D4AF37" metalness={0.9} roughness={0.2} />
        </mesh>

        {/* 32 Rivets / Astronomical markings around the outer rim */}
        {Array.from({ length: 32 }).map((_, i) => {
          const angle = (i * 2 * Math.PI) / 32;
          const x = 2.55 * Math.cos(angle);
          const y = 2.55 * Math.sin(angle);
          return (
            <mesh key={i} position={[x, y, 0.14]}>
              <sphereGeometry args={[0.035, 8, 8]} />
              <meshStandardMaterial color="#FFF1B8" metalness={0.95} roughness={0.15} />
            </mesh>
          );
        })}

        {/* Center Medallion Hub */}
        <mesh position={[0, 0, 0.1]} rotation={[Math.PI / 2, 0, 0]} castShadow>
          <cylinderGeometry args={[0.42, 0.48, 0.1, 32]} />
          <meshStandardMaterial color="#1E1C18" metalness={0.8} roughness={0.4} />
        </mesh>
        <mesh position={[0, 0, 0.24]}>
          <torusGeometry args={[0.45, 0.04, 16, 32]} />
          <meshStandardMaterial color="#D4AF37" metalness={0.9} roughness={0.2} />
        </mesh>
        <mesh position={[0, 0, 0.25]}>
          <sphereGeometry args={[0.12, 16, 16]} />
          <meshStandardMaterial
            color="#FFD700"
            emissive="#B8860B"
            emissiveIntensity={0.5}
            metalness={0.9}
            roughness={0.1}
          />
        </mesh>
      </group>

      {/* 2. Top Mounted Brass Needle Pointer (Fixed at 12 o'clock) */}
      <group position={[0, 2.7, 0.35]}>
        <mesh ref={pointerRef} rotation={[Math.PI, 0, Math.PI / 4]} castShadow>
          <coneGeometry args={[0.22, 0.65, 4]} />
          <meshStandardMaterial
            color="#E6C25B"
            metalness={0.95}
            roughness={0.15}
            emissive="#7D5F18"
            emissiveIntensity={0.2}
          />
        </mesh>
        {/* Pointer Fastener Pin */}
        <mesh position={[0, 0.28, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.1, 0.1, 0.12, 16]} />
          <meshStandardMaterial color="#8C6239" metalness={0.8} roughness={0.3} />
        </mesh>
      </group>
    </group>
  );
}
