'use client'

import * as THREE from 'three'

export const DitherShader = {
  uniforms: {
    uColor: { value: new THREE.Color('#EEE648') },
    uLightDirection: { value: new THREE.Vector3(0.5, 0.5, 1.0) }
  },
  vertexShader: `
    varying vec3 vNormal;
    varying vec3 vViewPosition;
    void main() {
      vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
      vNormal = normalize(normalMatrix * normal);
      vViewPosition = -mvPosition.xyz;
      gl_Position = projectionMatrix * mvPosition;
    }
  `,
  fragmentShader: `
    varying vec3 vNormal;
    varying vec3 vViewPosition;
    uniform vec3 uColor;
    uniform vec3 uLightDirection;
    float dither(vec2 uv, float value) {
      float grid = 8.0;
      vec2 ditherPos = floor(mod(uv, grid));
      float limit = (ditherPos.x + ditherPos.y * grid) / (grid * grid);
      return value > limit ? 1.0 : 0.0;
    }
    void main() {
      float dotNL = clamp(dot(vNormal, normalize(uLightDirection)), 0.0, 1.0);
      float rim = smoothstep(0.5, 1.0, 1.0 - dot(vNormal, normalize(vViewPosition)));
      float lightIntensity = 0.2 + dotNL * 0.8 + rim * 0.3;
      float dithered = dither(gl_FragCoord.xy, lightIntensity);
      if (dithered < 0.5) {
        discard;
      }
      gl_FragColor = vec4(uColor, 1.0);
    }
  `
}
