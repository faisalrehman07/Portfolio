import React, { useEffect, useRef, useState, useCallback } from 'react';
import * as THREE from 'three';
import { 
  Layers, 
  ArrowRight, 
  RotateCw, 
  Cpu, 
  Globe2,
  Shield,
  Brain,
  Database,
  Code,
  Workflow
} from 'lucide-react';
import { soundEngine } from '../utils/sound';

export interface UniversalSkillNode {
  id: string;
  name: string;
  category: string;
  iconName: string;
  description: string;
  techStack: string[];
  proficiency: number;
  targetSection: string;
  color: string;
  phi: number;
  theta: number;
}

const UNIVERSAL_SKILL_NODES: UniversalSkillNode[] = [
  {
    id: 'ai-tools-ecosystem',
    name: 'AI Tools & Antigravity',
    category: 'Agentic Workflows & Prompting',
    iconName: 'Workflow',
    description: 'Autonomous development workflows with Google Antigravity, Google AI Studio, multi-modal prompting, and advanced prompt engineering.',
    techStack: ['Google Antigravity', 'Google AI Studio', 'Prompt Engineering', 'Gemini Models', 'AI Agent Workflows'],
    proficiency: 95,
    targetSection: 'skills',
    color: '#06b6d4', // Cyan
    phi: 1.5,
    theta: 1.6
  },
  {
    id: 'ai-deeplearning',
    name: 'AI & Deep Learning',
    category: 'Neural Networks & Research',
    iconName: 'Brain',
    description: 'Convolutional neural architectures, contactless rPPG facial video stress estimation, MTCNN face detection, and machine learning pipelines.',
    techStack: ['PyTorch', 'TensorFlow', 'OpenCV', 'MTCNN', 'Scikit-Learn', 'Python'],
    proficiency: 92,
    targetSection: 'projects',
    color: '#38bdf8', // Electric Cyan
    phi: 1.1,
    theta: 0.8
  },
  {
    id: 'fullstack-dev',
    name: 'Full-Stack Architecture',
    category: 'Enterprise Web & Systems',
    iconName: 'Code',
    description: 'Production web apps with enterprise frameworks (.NET & MySQL), modern React frontends, robust REST APIs, and structured MVC architecture.',
    techStack: ['React', 'TypeScript', '.NET Framework', 'Node.js', 'Tailwind CSS', 'REST APIs'],
    proficiency: 90,
    targetSection: 'projects',
    color: '#818cf8', // Indigo / Violet
    phi: 1.8,
    theta: 2.4
  },
  {
    id: 'cybersecurity',
    name: 'Cybersecurity & VAPT',
    category: 'Defensive & Offensive Security',
    iconName: 'Shield',
    description: 'Hands-on Vulnerability Assessment and Penetration Testing (VAPT), OWASP Top 10 remediation, and secure web development audits.',
    techStack: ['VAPT', 'Kali Linux', 'Burp Suite', 'Wireshark', 'Nmap', 'Web App Defense'],
    proficiency: 85,
    targetSection: 'experience',
    color: '#f43f5e', // Rose
    phi: 2.3,
    theta: 4.2
  },
  {
    id: 'data-science',
    name: 'Data Science & Analytics',
    category: 'Statistical Modeling & Insights',
    iconName: 'Layers',
    description: 'Exploratory data analysis, multi-dimensional statistical feature engineering, predictive models, and executive dashboards.',
    techStack: ['Pandas', 'NumPy', 'Tableau', 'Matplotlib', 'Power BI', 'SQL Queries'],
    proficiency: 88,
    targetSection: 'skills',
    color: '#34d399', // Emerald
    phi: 0.9,
    theta: 3.6
  },
  {
    id: 'database-systems',
    name: 'Database Engineering',
    category: 'Relational & Storage Design',
    iconName: 'Database',
    description: 'Relational schema modeling, 3NF normalization, ACID transaction integrity, complex query tuning, and hospital DB systems.',
    techStack: ['MySQL', 'PostgreSQL', 'Relational Schema', 'Query Optimization', 'NoSQL'],
    proficiency: 89,
    targetSection: 'skills',
    color: '#fbbf24', // Amber
    phi: 2.1,
    theta: 0.3
  },
  {
    id: 'iot-robotics',
    name: 'IoT & Telemetry Systems',
    category: 'Embedded & Edge Robotics',
    iconName: 'Cpu',
    description: 'Autonomous rover development, microcontroller firmware programming, Wi-Fi WebSocket telemetry, and sensor integration.',
    techStack: ['ESP32', 'Arduino IDE', 'C++', 'WebSockets', 'Telemetry Sensors'],
    proficiency: 84,
    targetSection: 'projects',
    color: '#c084fc', // Purple
    phi: 1.4,
    theta: 5.2
  }
];

interface SkillUniversalGlobeProps {
  onSelectNode?: (targetId: string) => void;
}

export const SkillUniversalGlobe: React.FC<SkillUniversalGlobeProps> = ({ onSelectNode }) => {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const [selectedNode, setSelectedNode] = useState<UniversalSkillNode>(UNIVERSAL_SKILL_NODES[0]);
  const [hoveredNode, setHoveredNode] = useState<UniversalSkillNode | null>(null);
  const [isAutoRotating, setIsAutoRotating] = useState(true);
  const isAutoRotatingRef = useRef(true);

  // Keep ref synced
  useEffect(() => {
    isAutoRotatingRef.current = isAutoRotating;
  }, [isAutoRotating]);

  const handleSelectNode = useCallback((node: UniversalSkillNode) => {
    setSelectedNode(node);
  }, []);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let width = container.clientWidth || 500;
    let height = container.clientHeight || 480;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 1000);
    camera.position.set(0, 0, 8.8);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // Master Globe Pivot
    const globeRoot = new THREE.Group();
    scene.add(globeRoot);

    const sphereRadius = 2.6;

    // 1. Holographic Wireframe Core Sphere
    const sphereGeo = new THREE.SphereGeometry(sphereRadius, 32, 24);
    const sphereMat = new THREE.MeshBasicMaterial({
      color: 0x0284c7, // Sky blue
      wireframe: true,
      transparent: true,
      opacity: 0.18,
    });
    const sphereMesh = new THREE.Mesh(sphereGeo, sphereMat);
    globeRoot.add(sphereMesh);

    // 2. Inner Glowing Core Sphere
    const innerCoreGeo = new THREE.SphereGeometry(sphereRadius * 0.75, 20, 20);
    const innerCoreMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.08,
      wireframe: true,
    });
    const innerCoreMesh = new THREE.Mesh(innerCoreGeo, innerCoreMat);
    globeRoot.add(innerCoreMesh);

    // 3. Latitude and Longitude Grid Lines for Universal Globe
    const latitudeCount = 5;
    for (let i = 1; i <= latitudeCount; i++) {
      const latRadius = sphereRadius * Math.sin((i / (latitudeCount + 1)) * Math.PI);
      const latY = sphereRadius * Math.cos((i / (latitudeCount + 1)) * Math.PI);
      const latGeo = new THREE.RingGeometry(latRadius - 0.01, latRadius + 0.01, 64);
      const latMat = new THREE.MeshBasicMaterial({
        color: 0x38bdf8,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.12,
      });
      const latRing = new THREE.Mesh(latGeo, latMat);
      latRing.position.y = latY;
      latRing.rotation.x = Math.PI / 2;
      globeRoot.add(latRing);
    }

    // 4. Orbital Planetary Rings
    const ringGeo1 = new THREE.RingGeometry(3.3, 3.34, 80);
    const ringMat1 = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.28,
    });
    const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
    ring1.rotation.x = Math.PI / 3.2;
    ring1.rotation.y = Math.PI / 7;
    globeRoot.add(ring1);

    const ringGeo2 = new THREE.RingGeometry(3.8, 3.83, 80);
    const ringMat2 = new THREE.MeshBasicMaterial({
      color: 0x818cf8,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.22,
    });
    const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
    ring2.rotation.x = -Math.PI / 3.6;
    ring2.rotation.z = Math.PI / 4;
    globeRoot.add(ring2);

    // 5. Stardust Particle Cloud around Globe
    const particleCount = 260;
    const particleGeo = new THREE.BufferGeometry();
    const particlePos = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);

    const colors = [
      new THREE.Color(0x38bdf8),
      new THREE.Color(0x818cf8),
      new THREE.Color(0x34d399),
      new THREE.Color(0xc084fc),
      new THREE.Color(0xffffff)
    ];

    for (let i = 0; i < particleCount; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = sphereRadius + 0.15 + Math.random() * 1.6;

      const sinPhi = Math.sin(phi);
      particlePos[i * 3] = r * sinPhi * Math.cos(theta);
      particlePos[i * 3 + 1] = r * sinPhi * Math.sin(theta);
      particlePos[i * 3 + 2] = r * Math.cos(phi);

      const color = colors[Math.floor(Math.random() * colors.length)];
      particleColors[i * 3] = color.r;
      particleColors[i * 3 + 1] = color.g;
      particleColors[i * 3 + 2] = color.b;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePos, 3));
    particleGeo.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.045,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
    });
    const particleMesh = new THREE.Points(particleGeo, particleMat);
    globeRoot.add(particleMesh);

    // 6. Interactive Skill Nodes on the Globe
    const interactiveMeshes: THREE.Mesh[] = [];
    const nodeContainers: THREE.Group[] = [];

    UNIVERSAL_SKILL_NODES.forEach((node) => {
      const nodeGroup = new THREE.Group();

      const r = sphereRadius + 0.12;
      const x = r * Math.sin(node.phi) * Math.cos(node.theta);
      const y = r * Math.cos(node.phi);
      const z = r * Math.sin(node.phi) * Math.sin(node.theta);

      nodeGroup.position.set(x, y, z);

      // Node Outer Halo
      const haloGeo = new THREE.SphereGeometry(0.26, 16, 16);
      const haloMat = new THREE.MeshBasicMaterial({
        color: new THREE.Color(node.color),
        wireframe: true,
        transparent: true,
        opacity: 0.45,
      });
      const haloMesh = new THREE.Mesh(haloGeo, haloMat);
      nodeGroup.add(haloMesh);

      // Node Solid Core
      const coreGeo = new THREE.SphereGeometry(0.14, 16, 16);
      const coreMat = new THREE.MeshBasicMaterial({
        color: new THREE.Color(node.color),
      });
      const core = new THREE.Mesh(coreGeo, coreMat);
      nodeGroup.add(core);

      haloMesh.userData = { skillNode: node, group: nodeGroup };
      core.userData = { skillNode: node, group: nodeGroup };

      interactiveMeshes.push(haloMesh, core);
      nodeContainers.push(nodeGroup);
      globeRoot.add(nodeGroup);

      // Line connecting node to globe center
      const lineGeo = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(0, 0, 0),
        new THREE.Vector3(x, y, z)
      ]);
      const lineMat = new THREE.LineBasicMaterial({
        color: new THREE.Color(node.color),
        transparent: true,
        opacity: 0.22,
      });
      const line = new THREE.Line(lineGeo, lineMat);
      globeRoot.add(line);
    });

    // Constellation lines between neighboring nodes
    for (let i = 0; i < nodeContainers.length; i++) {
      for (let j = i + 1; j < nodeContainers.length; j++) {
        const dist = nodeContainers[i].position.distanceTo(nodeContainers[j].position);
        if (dist < 4.0) {
          const chordGeo = new THREE.BufferGeometry().setFromPoints([
            nodeContainers[i].position,
            nodeContainers[j].position
          ]);
          const chordMat = new THREE.LineBasicMaterial({
            color: 0x38bdf8,
            transparent: true,
            opacity: 0.12,
          });
          const chord = new THREE.Line(chordGeo, chordMat);
          globeRoot.add(chord);
        }
      }
    }

    // 7. Raycaster & Smooth Interaction Handling
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2(-100, -100);

    let isDragging = false;
    let prevMouseX = 0;
    let prevMouseY = 0;
    let velocityX = 0;
    let velocityY = 0;
    let isHoveringCanvas = false;

    const getMouseFromEvent = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      return {
        x: ((e.clientX - rect.left) / rect.width) * 2 - 1,
        y: -((e.clientY - rect.top) / rect.height) * 2 + 1,
      };
    };

    const handleMouseDown = (e: MouseEvent) => {
      if (e.button !== 0) return;
      isDragging = true;
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;
      velocityX = 0;
      velocityY = 0;
    };

    const handleMouseMove = (e: MouseEvent) => {
      const m = getMouseFromEvent(e);
      mouse.x = m.x;
      mouse.y = m.y;
      isHoveringCanvas = true;

      if (isDragging) {
        const deltaX = e.clientX - prevMouseX;
        const deltaY = e.clientY - prevMouseY;
        globeRoot.rotation.y += deltaX * 0.005;
        globeRoot.rotation.x += deltaY * 0.005;
        velocityX = deltaX * 0.005;
        velocityY = deltaY * 0.005;
        prevMouseX = e.clientX;
        prevMouseY = e.clientY;
      }
    };

    const handleMouseUp = () => {
      isDragging = false;
    };

    const handleMouseLeave = () => {
      isDragging = false;
      isHoveringCanvas = false;
      mouse.x = -100;
      mouse.y = -100;
      setHoveredNode(null);
    };

    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        isDragging = true;
        prevMouseX = e.touches[0].clientX;
        prevMouseY = e.touches[0].clientY;
        velocityX = 0;
        velocityY = 0;
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (isDragging && e.touches.length === 1) {
        const deltaX = e.touches[0].clientX - prevMouseX;
        const deltaY = e.touches[0].clientY - prevMouseY;
        globeRoot.rotation.y += deltaX * 0.007;
        globeRoot.rotation.x += deltaY * 0.007;
        velocityX = deltaX * 0.007;
        velocityY = deltaY * 0.007;
        prevMouseX = e.touches[0].clientX;
        prevMouseY = e.touches[0].clientY;
      }
    };

    const handleTouchEnd = () => {
      isDragging = false;
    };

    const handleClick = (e: MouseEvent) => {
      if (Math.abs(velocityX) > 0.01 || Math.abs(velocityY) > 0.01) return;

      const m = getMouseFromEvent(e);
      mouse.x = m.x;
      mouse.y = m.y;

      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(interactiveMeshes, false);
      if (intersects.length > 0) {
        const hit = intersects[0].object;
        const skill = hit.userData?.skillNode as UniversalSkillNode | undefined;
        if (skill) {
          soundEngine.playClick();
          setSelectedNode(skill);
        }
      }
    };

    container.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    container.addEventListener('mouseleave', handleMouseLeave);
    container.addEventListener('click', handleClick);
    container.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handleTouchEnd);

    // 8. Animation & Render Loop
    let animFrameId: number;
    const startTime = performance.now();

    const animate = () => {
      animFrameId = requestAnimationFrame(animate);
      const elapsedTime = (performance.now() - startTime) * 0.001;

      // Inertia & Auto-Rotation
      if (!isDragging) {
        globeRoot.rotation.y += velocityX;
        globeRoot.rotation.x += velocityY;
        velocityX *= 0.94;
        velocityY *= 0.94;

        if (isAutoRotatingRef.current) {
          const autoSpeed = isHoveringCanvas ? 0.001 : 0.0025;
          globeRoot.rotation.y += autoSpeed;
        }
      }

      // Orbital Rings Rotation
      ring1.rotation.z += 0.002;
      ring2.rotation.z -= 0.0015;
      particleMesh.rotation.y -= 0.0006;
      innerCoreMesh.rotation.y += 0.001;

      // Pulse nodes
      nodeContainers.forEach((group, idx) => {
        const s = 1 + Math.sin(elapsedTime * 2.2 + idx * 1.3) * 0.1;
        group.scale.set(s, s, s);
      });

      // Stable raycast check
      if (isHoveringCanvas && !isDragging) {
        raycaster.setFromCamera(mouse, camera);
        const intersects = raycaster.intersectObjects(interactiveMeshes, false);
        if (intersects.length > 0) {
          const hit = intersects[0].object;
          const skill = hit.userData?.skillNode as UniversalSkillNode | undefined;
          if (skill) {
            setHoveredNode(skill);
            container.style.cursor = 'pointer';
          }
        } else {
          setHoveredNode(null);
          container.style.cursor = isDragging ? 'grabbing' : 'grab';
        }
      }

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      width = container.clientWidth || 500;
      height = container.clientHeight || 480;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animFrameId);
      container.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      container.removeEventListener('mouseleave', handleMouseLeave);
      container.removeEventListener('click', handleClick);
      container.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('resize', handleResize);
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  const activeDisplayNode = hoveredNode || selectedNode;

  const getNodeIcon = (iconName: string) => {
    switch (iconName) {
      case 'Workflow': return <Workflow className="w-4 h-4 text-cyan-400" />;
      case 'Brain': return <Brain className="w-4 h-4 text-cyan-400" />;
      case 'Code': return <Code className="w-4 h-4 text-indigo-400" />;
      case 'Shield': return <Shield className="w-4 h-4 text-rose-400" />;
      case 'Layers': return <Layers className="w-4 h-4 text-emerald-400" />;
      case 'Database': return <Database className="w-4 h-4 text-amber-400" />;
      case 'Cpu': return <Cpu className="w-4 h-4 text-purple-400" />;
      default: return <Globe2 className="w-4 h-4 text-cyan-400" />;
    }
  };

  return (
    <div className="relative w-full h-full min-h-[500px] flex flex-col justify-between select-none overflow-hidden rounded-3xl bg-gradient-to-b from-slate-950/90 via-[#060d1f]/70 to-slate-950/95 border border-slate-800/80 shadow-2xl">
      {/* Top Header & Interactive Controls */}
      <div className="relative z-10 flex items-center justify-between px-5 py-3.5 border-b border-slate-800/70 bg-slate-950/40 backdrop-blur-md">
        <div className="flex items-center gap-2.5">
          <div className="p-1.5 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
            <Globe2 className="w-4 h-4 animate-spin-slow" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold font-display tracking-tight text-white">
                Skill Universal Globe
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 font-medium">
                3D Interactive
              </span>
            </div>
            <p className="text-[11px] text-slate-400">
              Drag to rotate &bull; Click any node to explore
            </p>
          </div>
        </div>

        {/* Rotation & Quick Action Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsAutoRotating(!isAutoRotating)}
            className={`px-2.5 py-1 rounded-lg text-[11px] font-medium transition-all flex items-center gap-1.5 ${
              isAutoRotating
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-slate-200'
            }`}
            title={isAutoRotating ? 'Pause auto-rotation' : 'Resume auto-rotation'}
          >
            <RotateCw className={`w-3 h-3 ${isAutoRotating ? 'animate-spin-slow' : ''}`} />
            <span className="hidden sm:inline">{isAutoRotating ? 'Rotating' : 'Paused'}</span>
          </button>
        </div>
      </div>

      {/* 3D WebGL Canvas Viewport */}
      <div 
        ref={mountRef} 
        className="w-full h-full absolute inset-0 pt-14 pb-28 cursor-grab active:cursor-grabbing z-0" 
      />

      {/* Domain Quick Select Pills */}
      <div className="relative z-10 px-4 pt-3 flex flex-wrap gap-1.5 pointer-events-auto">
        {UNIVERSAL_SKILL_NODES.map((node) => {
          const isSelected = activeDisplayNode?.id === node.id;
          return (
            <button
              key={node.id}
              onClick={() => handleSelectNode(node)}
              className={`px-2.5 py-1 rounded-lg text-[11px] font-medium transition-all flex items-center gap-1.5 backdrop-blur-md ${
                isSelected
                  ? 'bg-slate-900 text-white border-2 shadow-lg scale-105'
                  : 'bg-slate-950/70 text-slate-400 border border-slate-800/80 hover:text-slate-200 hover:border-slate-700'
              }`}
              style={{
                borderColor: isSelected ? node.color : undefined,
                boxShadow: isSelected ? `0 0 14px ${node.color}40` : undefined,
              }}
            >
              <span 
                className="w-2 h-2 rounded-full" 
                style={{ backgroundColor: node.color }} 
              />
              <span>{node.name.split(' ')[0]}</span>
            </button>
          );
        })}
      </div>

      {/* Bottom Docked Glassmorphic Skill Inspector */}
      <div className="relative z-20 p-3 pointer-events-auto">
        <div 
          className="p-4 rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-slate-700/80 shadow-2xl transition-all duration-200"
          style={{
            borderLeftColor: activeDisplayNode.color,
            borderLeftWidth: '4px'
          }}
        >
          <div className="flex items-start justify-between gap-3 mb-2">
            <div className="flex items-center gap-2.5">
              <div 
                className="p-2 rounded-xl bg-slate-800/90 border border-slate-700 text-cyan-400"
                style={{ color: activeDisplayNode.color }}
              >
                {getNodeIcon(activeDisplayNode.iconName)}
              </div>
              <div>
                <h4 className="text-sm font-bold font-display text-white">
                  {activeDisplayNode.name}
                </h4>
                <span className="text-[11px] font-medium text-slate-400">
                  {activeDisplayNode.category}
                </span>
              </div>
            </div>

            {/* Proficiency Gauge */}
            <div className="text-right shrink-0">
              <span className="text-[10px] uppercase tracking-wider text-slate-400 block font-medium">
                Proficiency
              </span>
              <span 
                className="text-sm font-bold font-display"
                style={{ color: activeDisplayNode.color }}
              >
                {activeDisplayNode.proficiency}%
              </span>
            </div>
          </div>

          <p className="text-xs text-slate-300 leading-relaxed mb-3 line-clamp-2">
            {activeDisplayNode.description}
          </p>

          {/* Tech Badges & Exploration Action */}
          <div className="flex flex-wrap items-center justify-between gap-2 pt-2.5 border-t border-slate-800/90 text-xs">
            <div className="flex flex-wrap gap-1.5 items-center">
              {activeDisplayNode.techStack.slice(0, 4).map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2 py-0.5 rounded-md text-[10px] font-medium bg-slate-800/80 text-slate-300 border border-slate-700/60"
                >
                  {tech}
                </span>
              ))}
              {activeDisplayNode.techStack.length > 4 && (
                <span className="text-[10px] text-slate-400">
                  +{activeDisplayNode.techStack.length - 4}
                </span>
              )}
            </div>

            <button
              onClick={() => {
                if (onSelectNode && activeDisplayNode.targetSection) {
                  onSelectNode(activeDisplayNode.targetSection);
                }
              }}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold text-cyan-300 hover:text-white bg-cyan-500/15 hover:bg-cyan-500/25 border border-cyan-500/30 transition-colors shrink-0"
            >
              <span>Explore Section</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
