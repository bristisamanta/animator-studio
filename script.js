// Animation data with 50 animations
const animations = [
    // Beginner Animations (20)
    {
        id: 'rainbow-pulse',
        title: 'Rainbow Pulse',
        description: 'A pulsing circle with rainbow gradient that changes colors smoothly',
        category: 'beginner',
        previewHTML: '<div class="rainbow-pulse"></div>',
        css: `.rainbow-pulse {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(45deg, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #4b0082, #9400d3);
  background-size: 300% 300%;
  animation: rainbow-pulse 2s ease-in-out infinite;
}

@keyframes rainbow-pulse {
  0%, 100% {
    transform: scale(1);
    background-position: 0% 50%;
  }
  50% {
    transform: scale(1.2);
    background-position: 100% 50%;
  }
}`,
        tags: ['gradient', 'pulse', 'rainbow']
    },
    {
        id: 'bouncing-ball',
        title: 'Bouncing Ball',
        description: 'Colorful ball that bounces with realistic physics and color changes',
        category: 'beginner',
        previewHTML: '<div class="bouncing-ball"></div>',
        css: `.bouncing-ball {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  animation: bounce 1.5s ease-in-out infinite;
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  }
  50% {
    transform: translateY(-30px);
    background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  }
}`,
        tags: ['bounce', 'gradient', 'physics']
    },
    {
        id: 'glow-button',
        title: 'Glowing Button',
        description: 'Button with animated glow effect and color transition',
        category: 'beginner',
        previewHTML: '<button class="glow-button">Hover Me</button>',
        css: `.glow-button {
  padding: 10px 20px;
  background: linear-gradient(45deg, #6366f1, #8b5cf6);
  border: none;
  border-radius: 20px;
  color: white;
  font-weight: 600;
  cursor: pointer;
  animation: glow-pulse 2s ease-in-out infinite alternate;
}

@keyframes glow-pulse {
  0% { box-shadow: 0 0 15px rgba(99, 102, 241, 0.3); }
  100% { box-shadow: 0 0 25px rgba(139, 92, 246, 0.6); }
}`,
        tags: ['button', 'glow', 'hover']
    },
    {
        id: 'color-wave',
        title: 'Color Wave',
        description: 'Animated wave with flowing rainbow colors',
        category: 'beginner',
        previewHTML: '<div class="color-wave"></div>',
        css: `.color-wave {
  width: 80px;
  height: 40px;
  background: linear-gradient(90deg, #ff6b6b, #4ecdc4, #45b7d1, #f7b731, #5f27cd);
  background-size: 200% 100%;
  border-radius: 20px;
  animation: wave-flow 3s ease-in-out infinite;
}

@keyframes wave-flow {
  0%, 100% {
    background-position: 0% 50%;
    transform: skewX(0deg);
  }
  50% {
    background-position: 100% 50%;
    transform: skewX(10deg);
  }
}`,
        tags: ['wave', 'gradient', 'flow']
    },
    {
        id: 'spinning-square',
        title: 'Spinning Square',
        description: 'Simple square that spins continuously with gradient colors',
        category: 'beginner',
        previewHTML: '<div class="spinning-square"></div>',
        css: `.spinning-square {
  width: 50px;
  height: 50px;
  background: linear-gradient(45deg, #ff9a9e, #fecfef);
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}`,
        tags: ['spin', 'square', 'gradient']
    },
    {
        id: 'pulsing-heart',
        title: 'Pulsing Heart',
        description: 'CSS heart shape that pulses with a heartbeat rhythm',
        category: 'beginner',
        previewHTML: '<div class="pulsing-heart"></div>',
        css: `.pulsing-heart {
  width: 50px;
  height: 45px;
  position: relative;
  animation: heartbeat 1.5s ease-in-out infinite;
}

.pulsing-heart::before,
.pulsing-heart::after {
  content: '';
  width: 26px;
  height: 40px;
  position: absolute;
  left: 25px;
  top: 0;
  background: #ff6b6b;
  border-radius: 25px 25px 0 0;
  transform: rotate(-45deg);
  transform-origin: 0 100%;
}

.pulsing-heart::after {
  left: 0;
  transform: rotate(45deg);
  transform-origin: 100% 100%;
}

@keyframes heartbeat {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.2); }
}`,
        tags: ['heart', 'pulse', 'love']
    },
    {
        id: 'sliding-text',
        title: 'Sliding Text',
        description: 'Text with sliding shine effect across the surface',
        category: 'beginner',
        previewHTML: '<div class="sliding-text">SHINE</div>',
        css: `.sliding-text {
  width: 100px;
  height: 30px;
  background: linear-gradient(90deg, #667eea, #764ba2);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: bold;
  border-radius: 15px;
  overflow: hidden;
  position: relative;
}

.sliding-text::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
  animation: slide-shine 2s ease-in-out infinite;
}

@keyframes slide-shine {
  0% { left: -100%; }
  100% { left: 100%; }
}`,
        tags: ['text', 'shine', 'slide']
    },
    {
        id: 'wobbling-circle',
        title: 'Wobbling Circle',
        description: 'Circle that wobbles back and forth with smooth motion',
        category: 'beginner',
        previewHTML: '<div class="wobbling-circle"></div>',
        css: `.wobbling-circle {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(45deg, #4ecdc4, #44bd87);
  animation: wobble 2s ease-in-out infinite;
}

@keyframes wobble {
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(5deg); }
  75% { transform: rotate(-5deg); }
}`,
        tags: ['wobble', 'circle', 'motion']
    },
    {
        id: 'breathing-box',
        title: 'Breathing Box',
        description: 'Box that breathes by scaling and changing opacity',
        category: 'beginner',
        previewHTML: '<div class="breathing-box"></div>',
        css: `.breathing-box {
  width: 60px;
  height: 60px;
  background: linear-gradient(45deg, #f7b731, #fa8231);
  border-radius: 10px;
  animation: breathe 3s ease-in-out infinite;
}

@keyframes breathe {
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.1); opacity: 0.7; }
}`,
        tags: ['breathe', 'scale', 'opacity']
    },
    {
        id: 'rainbow-loader',
        title: 'Rainbow Loading Ring',
        description: 'Spinning ring with rainbow gradient colors',
        category: 'beginner',
        previewHTML: '<div class="rainbow-loader"></div>',
        css: `.rainbow-loader {
  width: 50px;
  height: 50px;
  border: 5px solid transparent;
  border-top: 5px solid #ff0000;
  border-right: 5px solid #ff7f00;
  border-bottom: 5px solid #ffff00;
  border-left: 5px solid #00ff00;
  border-radius: 50%;
  animation: rainbow-spin 1s linear infinite;
}

@keyframes rainbow-spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}`,
        tags: ['loader', 'rainbow', 'ring']
    },
    {
        id: 'floating-dot',
        title: 'Floating Dot',
        description: 'Small dot that floats up and down smoothly',
        category: 'beginner',
        previewHTML: '<div class="floating-dot"></div>',
        css: `.floating-dot {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: #ff6b6b;
  animation: float-up-down 2s ease-in-out infinite;
}

@keyframes float-up-down {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}`,
        tags: ['float', 'dot', 'simple']
    },
    {
        id: 'shaking-element',
        title: 'Shaking Element',
        description: 'Element that shakes horizontally with vibration effect',
        category: 'beginner',
        previewHTML: '<div class="shaking-element"></div>',
        css: `.shaking-element {
  width: 50px;
  height: 50px;
  background: linear-gradient(45deg, #5f27cd, #a55eea);
  border-radius: 10px;
  animation: shake 0.5s ease-in-out infinite;
}

@keyframes shake {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  75% { transform: translateX(5px); }
}`,
        tags: ['shake', 'vibrate', 'motion']
    },
    {
        id: 'growing-circle',
        title: 'Growing Circle',
        description: 'Circle that grows and shrinks in size continuously',
        category: 'beginner',
        previewHTML: '<div class="growing-circle"></div>',
        css: `.growing-circle {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: linear-gradient(45deg, #00d2d3, #54a0ff);
  animation: grow-shrink 2s ease-in-out infinite;
}

@keyframes grow-shrink {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.5); }
}`,
        tags: ['grow', 'circle', 'scale']
    },
    {
        id: 'blinking-light',
        title: 'Blinking Light',
        description: 'Light that blinks on and off with opacity changes',
        category: 'beginner',
        previewHTML: '<div class="blinking-light"></div>',
        css: `.blinking-light {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #ffff00;
  animation: blink 1s ease-in-out infinite;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.3; }
}`,
        tags: ['blink', 'light', 'opacity']
    },
    {
        id: 'sliding-bar',
        title: 'Sliding Progress Bar',
        description: 'Progress bar with sliding indicator back and forth',
        category: 'beginner',
        previewHTML: '<div class="sliding-bar"></div>',
        css: `.sliding-bar {
  width: 80px;
  height: 20px;
  background: #ddd;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
}

.sliding-bar::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 30px;
  height: 100%;
  background: linear-gradient(90deg, #667eea, #764ba2);
  border-radius: 10px;
  animation: slide-bar 2s ease-in-out infinite;
}

@keyframes slide-bar {
  0% { transform: translateX(-30px); }
  50% { transform: translateX(80px); }
  100% { transform: translateX(-30px); }
}`,
        tags: ['progress', 'bar', 'slide']
    },
    {
        id: 'rotating-star',
        title: 'Rotating Star',
        description: 'Star shape that rotates continuously around its center',
        category: 'beginner',
        previewHTML: '<div class="rotating-star"></div>',
        css: `.rotating-star {
  width: 50px;
  height: 50px;
  background: #f7b731;
  clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
  animation: rotate-star 3s linear infinite;
}

@keyframes rotate-star {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}`,
        tags: ['star', 'rotate', 'shape']
    },
    {
        id: 'typing-dots',
        title: 'Typing Indicator',
        description: 'Three dots that animate to show typing activity',
        category: 'beginner',
        previewHTML: '<div class="typing-dots"><div class="dot"></div><div class="dot"></div><div class="dot"></div></div>',
        css: `.typing-dots {
  display: flex;
  gap: 5px;
}

.typing-dots .dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #4ecdc4;
  animation: typing 1.4s ease-in-out infinite;
}

.typing-dots .dot:nth-child(2) { animation-delay: 0.2s; }
.typing-dots .dot:nth-child(3) { animation-delay: 0.4s; }

@keyframes typing {
  0%, 60%, 100% { transform: translateY(0); }
  30% { transform: translateY(-10px); }
}`,
        tags: ['typing', 'dots', 'indicator']
    },
    {
        id: 'morphing-square',
        title: 'Morphing Square',
        description: 'Square that morphs between square and circle shapes',
        category: 'beginner',
        previewHTML: '<div class="morphing-square"></div>',
        css: `.morphing-square {
  width: 50px;
  height: 50px;
  background: linear-gradient(45deg, #ff9a9e, #fecfef);
  animation: morph-square 3s ease-in-out infinite;
}

@keyframes morph-square {
  0%, 100% { border-radius: 0%; }
  50% { border-radius: 50%; }
}`,
        tags: ['morph', 'square', 'circle']
    },
    {
        id: 'swinging-pendulum',
        title: 'Swinging Pendulum',
        description: 'Pendulum that swings back and forth like a clock',
        category: 'beginner',
        previewHTML: '<div class="swinging-pendulum"></div>',
        css: `.swinging-pendulum {
  width: 4px;
  height: 40px;
  background: #333;
  position: relative;
  transform-origin: top center;
  animation: swing 2s ease-in-out infinite;
}

.swinging-pendulum::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: -8px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #ff6b6b;
}

@keyframes swing {
  0%, 100% { transform: rotate(30deg); }
  50% { transform: rotate(-30deg); }
}`,
        tags: ['pendulum', 'swing', 'physics']
    },
    {
        id: 'glowing-orb',
        title: 'Glowing Orb',
        description: 'Orb with pulsing glow effect and color transitions',
        category: 'beginner',
        previewHTML: '<div class="glowing-orb"></div>',
        css: `.glowing-orb {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: radial-gradient(circle, #4ecdc4, #44bd87);
  animation: glow-orb 2s ease-in-out infinite alternate;
}

@keyframes glow-orb {
  0% { 
    box-shadow: 0 0 10px rgba(76, 205, 196, 0.5);
    transform: scale(1);
  }
  100% { 
    box-shadow: 0 0 30px rgba(76, 205, 196, 0.8);
    transform: scale(1.1);
  }
}`,
        tags: ['glow', 'orb', 'pulse']
    },

    // Intermediate Animations (20)
    {
        id: 'rotating-cube',
        title: '3D Rotating Cube',
        description: 'Colorful 3D cube that rotates with gradient faces',
        category: 'intermediate',
        previewHTML: '<div class="rotating-cube"><div class="cube-face cube-front"></div><div class="cube-face cube-back"></div><div class="cube-face cube-right"></div><div class="cube-face cube-left"></div><div class="cube-face cube-top"></div><div class="cube-face cube-bottom"></div></div>',
        css: `.rotating-cube {
  width: 60px;
  height: 60px;
  position: relative;
  transform-style: preserve-3d;
  animation: rotate-cube 3s linear infinite;
}

.cube-face {
  position: absolute;
  width: 60px;
  height: 60px;
  border: 2px solid rgba(255,255,255,0.3);
}

.cube-front { background: linear-gradient(45deg, #ff6b6b, #ee5a24); transform: rotateY(0deg) translateZ(30px); }
.cube-back { background: linear-gradient(45deg, #4ecdc4, #44bd87); transform: rotateY(180deg) translateZ(30px); }
.cube-right { background: linear-gradient(45deg, #45b7d1, #3742fa); transform: rotateY(90deg) translateZ(30px); }
.cube-left { background: linear-gradient(45deg, #f7b731, #fa8231); transform: rotateY(-90deg) translateZ(30px); }
.cube-top { background: linear-gradient(45deg, #5f27cd, #a55eea); transform: rotateX(90deg) translateZ(30px); }
.cube-bottom { background: linear-gradient(45deg, #00d2d3, #54a0ff); transform: rotateX(-90deg) translateZ(30px); }

@keyframes rotate-cube {
  0% { transform: rotateX(0deg) rotateY(0deg); }
  100% { transform: rotateX(360deg) rotateY(360deg); }
}`,
        tags: ['3d', 'cube', 'rotation']
    },
    {
        id: 'flip-card',
        title: 'Flip Card',
        description: 'Card that flips to reveal colorful back side',
        category: 'intermediate',
        previewHTML: '<div class="flip-card"><div class="flip-inner"><div class="flip-front">Front</div><div class="flip-back">Back</div></div></div>',
        css: `.flip-card {
  width: 60px;
  height: 60px;
  perspective: 1000px;
}

.flip-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  animation: auto-flip 3s ease-in-out infinite;
}

.flip-front, .flip-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  color: white;
  font-weight: bold;
  font-size: 10px;
}

.flip-front {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.flip-back {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  transform: rotateY(180deg);
}

@keyframes auto-flip {
  0%, 40% { transform: rotateY(0deg); }
  60%, 100% { transform: rotateY(180deg); }
}`,
        tags: ['flip', 'card', '3d']
    },
    {
        id: 'morphing-blob',
        title: 'Morphing Blob',
        description: 'Organic shape that morphs and changes colors',
        category: 'intermediate',
        previewHTML: '<div class="morphing-blob"></div>',
        css: `.morphing-blob {
  width: 60px;
  height: 60px;
  background: linear-gradient(45deg, #ff9a9e, #fecfef, #fecfef);
  background-size: 200% 200%;
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  animation: morph 3s ease-in-out infinite, gradient-shift 2s ease-in-out infinite;
}

@keyframes morph {
  0%, 100% {
    border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
    transform: rotate(0deg);
  }
  25% {
    border-radius: 58% 42% 75% 25% / 76% 46% 54% 24%;
    transform: rotate(90deg);
  }
  50% {
    border-radius: 50% 50% 33% 67% / 55% 27% 73% 45%;
    transform: rotate(180deg);
  }
  75% {
    border-radius: 33% 67% 58% 42% / 63% 68% 32% 37%;
    transform: rotate(270deg);
  }
}

@keyframes gradient-shift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}`,
        tags: ['morph', 'blob', 'organic']
    },
    {
        id: 'sliding-banner',
        title: 'Sliding Banner',
        description: 'Text banner that slides with gradient background',
        category: 'intermediate',
        previewHTML: '<div class="sliding-banner">CSS Animations</div>',
        css: `.sliding-banner {
  width: 100px;
  height: 30px;
  background: linear-gradient(90deg, #667eea, #764ba2, #f093fb, #f5576c);
  background-size: 300% 100%;
  color: white;
  font-weight: bold;
  font-size: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  overflow: hidden;
  position: relative;
  animation: slide-bg 3s linear infinite;
}

@keyframes slide-bg {
  0% { background-position: 0% 50%; }
  100% { background-position: 300% 50%; }
}`,
        tags: ['slide', 'banner', 'text']
    },
    {
        id: 'floating-orbs',
        title: 'Floating Orbs',
        description: 'Multiple colorful orbs floating with different patterns',
        category: 'intermediate',
        previewHTML: '<div class="floating-orbs"><div class="orb orb1"></div><div class="orb orb2"></div><div class="orb orb3"></div></div>',
        css: `.floating-orbs {
  width: 80px;
  height: 60px;
  position: relative;
  overflow: hidden;
}

.orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(0.5px);
}

.orb1 {
  width: 15px;
  height: 15px;
  background: radial-gradient(circle, #ff6b6b, #ee5a24);
  top: 20%;
  left: 10%;
  animation: float1 3s ease-in-out infinite;
}

.orb2 {
  width: 12px;
  height: 12px;
  background: radial-gradient(circle, #4ecdc4, #44bd87);
  top: 60%;
  left: 70%;
  animation: float2 4s ease-in-out infinite;
}

.orb3 {
  width: 10px;
  height: 10px;
  background: radial-gradient(circle, #45b7d1, #3742fa);
  top: 10%;
  left: 60%;
  animation: float3 2.5s ease-in-out infinite;
}

@keyframes float1 {
  0%, 100% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(15px, -10px) scale(1.2); }
}

@keyframes float2 {
  0%, 100% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(-20px, 8px) scale(0.8); }
}

@keyframes float3 {
  0%, 100% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(12px, 15px) scale(1.4); }
}`,
        tags: ['floating', 'orbs', 'particles']
    },
    {
        id: 'gradient-text',
        title: 'Gradient Text Animation',
        description: 'Animated gradient text with flowing colors',
        category: 'intermediate',
        previewHTML: '<div class="gradient-text">GRADIENT</div>',
        css: `.gradient-text {
  background: linear-gradient(90deg, #ff6b6b, #4ecdc4, #45b7d1, #f7b731, #5f27cd, #ff6b6b);
  background-size: 300% 100%;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 1px;
  animation: gradient-flow 3s ease-in-out infinite;
  text-align: center;
  width: 80px;
}

@keyframes gradient-flow {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}`,
        tags: ['text', 'gradient', 'flow']
    },
    {
        id: 'wave-loader',
        title: 'Wave Loader',
        description: 'Loading animation with wave-like motion and colors',
        category: 'intermediate',
        previewHTML: '<div class="wave-loader"><div class="wave"></div></div>',
        css: `.wave-loader {
  width: 80px;
  height: 40px;
  background: linear-gradient(45deg, #000428, #004e92);
  border-radius: 20px;
  position: relative;
  overflow: hidden;
}

.wave {
  position: absolute;
  width: 160%;
  height: 100%;
  top: 0;
  left: -30%;
  background: linear-gradient(90deg, transparent, rgba(0, 255, 150, 0.4), transparent);
  animation: wave-move 2s ease-in-out infinite;
}

@keyframes wave-move {
  0%, 100% { transform: translateX(-20%) skewX(10deg); }
  50% { transform: translateX(20%) skewX(-10deg); }
}`,
        tags: ['wave', 'loader', 'motion']
    },
    {
        id: 'elastic-ball',
        title: 'Elastic Ball',
        description: 'Ball that stretches and squashes like elastic material',
        category: 'intermediate',
        previewHTML: '<div class="elastic-ball"></div>',
        css: `.elastic-ball {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: linear-gradient(45deg, #667eea, #764ba2);
  animation: elastic-bounce 2s ease-in-out infinite;
}

@keyframes elastic-bounce {
  0%, 100% { transform: scale(1, 1); }
  25% { transform: scale(1.2, 0.8); }
  50% { transform: scale(0.8, 1.2); }
  75% { transform: scale(1.1, 0.9); }
}`,
        tags: ['elastic', 'ball', 'bounce']
    },
    {
        id: 'spinning-dots',
        title: 'Spinning Dots',
        description: 'Four dots spinning around in a circular pattern',
        category: 'intermediate',
        previewHTML: '<div class="spinning-dots"><div class="dot"></div><div class="dot"></div><div class="dot"></div><div class="dot"></div></div>',
        css: `.spinning-dots {
  width: 60px;
  height: 60px;
  position: relative;
}

.spinning-dots .dot {
  position: absolute;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #4ecdc4;
  animation: spin-dots 2s linear infinite;
}

.spinning-dots .dot:nth-child(1) { top: 0; left: 50%; margin-left: -6px; animation-delay: 0s; }
.spinning-dots .dot:nth-child(2) { top: 50%; right: 0; margin-top: -6px; animation-delay: 0.5s; }
.spinning-dots .dot:nth-child(3) { bottom: 0; left: 50%; margin-left: -6px; animation-delay: 1s; }
.spinning-dots .dot:nth-child(4) { top: 50%; left: 0; margin-top: -6px; animation-delay: 1.5s; }

@keyframes spin-dots {
  0% { transform: scale(1); opacity: 1; }
  50% { transform: scale(0.5); opacity: 0.5; }
  100% { transform: scale(1); opacity: 1; }
}`,
        tags: ['spinning', 'dots', 'circular']
    },
    {
        id: 'liquid-loader',
        title: 'Liquid Loader',
        description: 'Liquid-like loading animation with flowing motion',
        category: 'intermediate',
        previewHTML: '<div class="liquid-loader"></div>',
        css: `.liquid-loader {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(45deg, #ff9a9e, #fecfef);
  position: relative;
  overflow: hidden;
}

.liquid-loader::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 80%;
  height: 80%;
  background: linear-gradient(45deg, #667eea, #764ba2);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  animation: liquid-move 3s ease-in-out infinite;
}

@keyframes liquid-move {
  0%, 100% { transform: translate(-50%, -50%) scale(1); }
  50% { transform: translate(-50%, -60%) scale(0.8); }
}`,
        tags: ['liquid', 'loader', 'fluid']
    },
    {
        id: 'zigzag-line',
        title: 'Zigzag Line',
        description: 'Animated zigzag pattern moving horizontally',
        category: 'intermediate',
        previewHTML: '<div class="zigzag-line"></div>',
        css: `.zigzag-line {
  width: 80px;
  height: 4px;
  background: linear-gradient(90deg, #ff6b6b, #4ecdc4, #45b7d1);
  background-size: 20px 100%;
  animation: zigzag-move 2s linear infinite;
}

@keyframes zigzag-move {
  0% { background-position: 0 0; }
  100% { background-position: 80px 0; }
}`,
        tags: ['zigzag', 'line', 'pattern']
    },
    {
        id: 'pulsing-ring',
        title: 'Pulsing Ring',
        description: 'Ring that pulses outward with scaling and opacity',
        category: 'intermediate',
        previewHTML: '<div class="pulsing-ring"></div>',
        css: `.pulsing-ring {
  width: 60px;
  height: 60px;
  border: 4px solid #4ecdc4;
  border-radius: 50%;
  animation: pulse-ring 2s ease-in-out infinite;
}

@keyframes pulse-ring {
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.3); opacity: 0.5; }
}`,
        tags: ['pulse', 'ring', 'scale']
    },
    {
        id: 'bouncing-dots',
        title: 'Bouncing Dots',
        description: 'Three dots bouncing up and down in sequence',
        category: 'intermediate',
        previewHTML: '<div class="bouncing-dots"><div class="dot"></div><div class="dot"></div><div class="dot"></div></div>',
        css: `.bouncing-dots {
  display: flex;
  gap: 8px;
  align-items: flex-end;
  height: 40px;
}

.bouncing-dots .dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #f7b731;
  animation: bounce-dots 1.4s ease-in-out infinite;
}

.bouncing-dots .dot:nth-child(1) { animation-delay: 0s; }
.bouncing-dots .dot:nth-child(2) { animation-delay: 0.2s; }
.bouncing-dots .dot:nth-child(3) { animation-delay: 0.4s; }

@keyframes bounce-dots {
  0%, 60%, 100% { transform: translateY(0); }
  30% { transform: translateY(-20px); }
}`,
        tags: ['bounce', 'dots', 'sequence']
    },
    {
        id: 'rotating-border',
        title: 'Rotating Border',
        description: 'Double rotating border with different speeds and colors',
        category: 'intermediate',
        previewHTML: '<div class="rotating-border"></div>',
        css: `.rotating-border {
  width: 60px;
  height: 60px;
  border: 4px solid transparent;
  border-top: 4px solid #ff6b6b;
  border-right: 4px solid #4ecdc4;
  border-radius: 50%;
  animation: rotate-border 1.5s linear infinite;
  position: relative;
}

.rotating-border::before {
  content: '';
  position: absolute;
  top: -4px;
  left: -4px;
  right: -4px;
  bottom: -4px;
  border: 4px solid transparent;
  border-bottom: 4px solid #45b7d1;
  border-left: 4px solid #f7b731;
  border-radius: 50%;
  animation: rotate-border 2s linear infinite reverse;
}

@keyframes rotate-border {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}`,
        tags: ['rotate', 'border', 'double']
    },
    {
        id: 'scaling-squares',
        title: 'Scaling Squares',
        description: 'Three squares scaling up and down in sequence',
        category: 'intermediate',
        previewHTML: '<div class="scaling-squares"><div class="square"></div><div class="square"></div><div class="square"></div></div>',
        css: `.scaling-squares {
  display: flex;
  gap: 4px;
}

.scaling-squares .square {
  width: 12px;
  height: 12px;
  background: #5f27cd;
  animation: scale-squares 1.2s ease-in-out infinite;
}

.scaling-squares .square:nth-child(1) { animation-delay: 0s; }
.scaling-squares .square:nth-child(2) { animation-delay: 0.2s; }
.scaling-squares .square:nth-child(3) { animation-delay: 0.4s; }

@keyframes scale-squares {
  0%, 70%, 100% { transform: scaleY(1); }
  35% { transform: scaleY(2); }
}`,
        tags: ['scale', 'squares', 'sequence']
    },
    {
        id: 'orbit-loader',
        title: 'Orbit Loader',
        description: 'Two dots orbiting around an invisible center point',
        category: 'intermediate',
        previewHTML: '<div class="orbit-loader"></div>',
        css: `.orbit-loader {
  width: 60px;
  height: 60px;
  position: relative;
}

.orbit-loader::before,
.orbit-loader::after {
  content: '';
  position: absolute;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #ff6b6b;
  animation: orbit 2s linear infinite;
}

.orbit-loader::before {
  top: 0;
  left: 50%;
  margin-left: -6px;
}

.orbit-loader::after {
  bottom: 0;
  left: 50%;
  margin-left: -6px;
  background: #4ecdc4;
  animation-delay: 1s;
}

@keyframes orbit {
  0% { transform: rotate(0deg) translateX(24px) rotate(0deg); }
  100% { transform: rotate(360deg) translateX(24px) rotate(-360deg); }
}`,
        tags: ['orbit', 'loader', 'circular']
    },
    {
        id: 'ripple-effect',
        title: 'Ripple Effect',
        description: 'Concentric ripples expanding outward like water drops',
        category: 'intermediate',
        previewHTML: '<div class="ripple-effect"></div>',
        css: `.ripple-effect {
  width: 60px;
  height: 60px;
  position: relative;
}

.ripple-effect::before,
.ripple-effect::after {
  content: '';
  position: absolute;
  border: 2px solid #4ecdc4;
  border-radius: 50%;
  animation: ripple 2s ease-out infinite;
}

.ripple-effect::before {
  width: 100%;
  height: 100%;
  animation-delay: 0s;
}

.ripple-effect::after {
  width: 100%;
  height: 100%;
  animation-delay: 1s;
}

@keyframes ripple {
  0% { transform: scale(0); opacity: 1; }
  100% { transform: scale(1); opacity: 0; }
}`,
        tags: ['ripple', 'water', 'expand']
    },
    {
        id: 'folding-cube',
        title: 'Folding Cube',
        description: 'Cube that folds and unfolds with perspective effects',
        category: 'intermediate',
        previewHTML: '<div class="folding-cube"><div class="cube cube1"></div><div class="cube cube2"></div><div class="cube cube3"></div><div class="cube cube4"></div></div>',
        css: `.folding-cube {
  width: 40px;
  height: 40px;
  position: relative;
  transform: rotateZ(45deg);
}

.folding-cube .cube {
  float: left;
  width: 50%;
  height: 50%;
  position: relative;
  transform: scale(1.1);
}

.folding-cube .cube:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #667eea;
  animation: fold-cube 2.4s infinite linear both;
  transform-origin: 100% 100%;
}

.folding-cube .cube2 { transform: scale(1.1) rotateZ(90deg); }
.folding-cube .cube3 { transform: scale(1.1) rotateZ(180deg); }
.folding-cube .cube4 { transform: scale(1.1) rotateZ(270deg); }

.folding-cube .cube2:before { animation-delay: 0.3s; background-color: #764ba2; }
.folding-cube .cube3:before { animation-delay: 0.6s; background-color: #f093fb; }
.folding-cube .cube4:before { animation-delay: 0.9s; background-color: #f5576c; }

@keyframes fold-cube {
  0%, 10% { transform: perspective(140px) rotateX(-180deg); opacity: 0; }
  25%, 75% { transform: perspective(140px) rotateX(0deg); opacity: 1; }
  90%, 100% { transform: perspective(140px) rotateY(180deg); opacity: 0; }
}`,
        tags: ['fold', 'cube', '3d']
    },

    // Advanced Animations (10)
    {
        id: 'particle-burst',
        title: 'Particle Burst',
        description: 'Complex particle explosion effect with multiple elements',
        category: 'advanced',
        previewHTML: '<div class="particle-burst"><div class="particle"></div><div class="particle"></div><div class="particle"></div><div class="particle"></div></div>',
        css: `.particle-burst {
  position: relative;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.particle {
  position: absolute;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: radial-gradient(circle, #ff6b6b, #4ecdc4);
}

.particle:nth-child(1) {
  animation: burst1 2s ease-out infinite;
  background: linear-gradient(45deg, #ff6b6b, #ee5a24);
}

.particle:nth-child(2) {
  animation: burst2 2s ease-out infinite;
  background: linear-gradient(45deg, #4ecdc4, #44bd87);
}

.particle:nth-child(3) {
  animation: burst3 2s ease-out infinite;
  background: linear-gradient(45deg, #45b7d1, #3742fa);
}

.particle:nth-child(4) {
  animation: burst4 2s ease-out infinite;
  background: linear-gradient(45deg, #f7b731, #fa8231);
}

@keyframes burst1 {
  0% { transform: translate(0, 0) scale(1); opacity: 1; }
  100% { transform: translate(25px, -25px) scale(0); opacity: 0; }
}

@keyframes burst2 {
  0% { transform: translate(0, 0) scale(1); opacity: 1; }
  100% { transform: translate(-25px, -25px) scale(0); opacity: 0; }
}

@keyframes burst3 {
  0% { transform: translate(0, 0) scale(1); opacity: 1; }
  100% { transform: translate(25px, 25px) scale(0); opacity: 0; }
}

@keyframes burst4 {
  0% { transform: translate(0, 0) scale(1); opacity: 1; }
  100% { transform: translate(-25px, 25px) scale(0); opacity: 0; }
}`,
        tags: ['particles', 'burst', 'complex']
    },
    {
        id: 'infinity-loader',
        title: 'Infinity Loader',
        description: 'Elegant infinity symbol loader with gradient colors',
        category: 'advanced',
        previewHTML: '<div class="infinity-loader"></div>',
        css: `.infinity-loader {
  width: 60px;
  height: 30px;
  position: relative;
}

.infinity-loader::before,
.infinity-loader::after {
  content: '';
  position: absolute;
  top: 0;
  width: 30px;
  height: 30px;
  border: 3px solid transparent;
  border-top-color: #ff6b6b;
  border-right-color: #4ecdc4;
  border-radius: 50%;
  animation: infinity-rotate 1.5s linear infinite;
}

.infinity-loader::before {
  left: 0;
  transform-origin: 15px 15px;
}

.infinity-loader::after {
  left: 30px;
  transform-origin: -15px 15px;
  animation-direction: reverse;
  border-top-color: #45b7d1;
  border-right-color: #f7b731;
}

@keyframes infinity-rotate {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}`,
        tags: ['loader', 'infinity', 'rotation']
    },
    {
        id: 'holographic-card',
        title: 'Holographic Card',
        description: 'Card with holographic effect and 3D transforms',
        category: 'advanced',
        previewHTML: '<div class="holographic-card"><span>HOLO</span></div>',
        css: `.holographic-card {
  width: 60px;
  height: 60px;
  background: linear-gradient(45deg, 
    hsl(240, 100%, 50%) 0%,
    hsl(300, 100%, 50%) 25%,
    hsl(360, 100%, 50%) 50%,
    hsl(60, 100%, 50%) 75%,
    hsl(180, 100%, 50%) 100%);
  background-size: 300% 300%;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: 8px;
  position: relative;
  overflow: hidden;
  animation: holographic 3s ease-in-out infinite;
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
}

.holographic-card::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(45deg,
    transparent 30%,
    rgba(255, 255, 255, 0.3) 50%,
    transparent 70%);
  animation: holographic-shine 2s linear infinite;
}

@keyframes holographic {
  0%, 100% {
    background-position: 0% 50%;
    transform: rotateY(0deg) rotateX(0deg);
  }
  25% {
    background-position: 100% 50%;
    transform: rotateY(10deg) rotateX(5deg);
  }
  50% {
    background-position: 50% 100%;
    transform: rotateY(0deg) rotateX(8deg);
  }
  75% {
    background-position: 0% 0%;
    transform: rotateY(-10deg) rotateX(5deg);
  }
}

@keyframes holographic-shine {
  0% { transform: translateX(-100%) rotate(45deg); }
  100% { transform: translateX(100%) rotate(45deg); }
}`,
        tags: ['holographic', '3d', 'shine']
    },
    {
        id: 'aurora-wave',
        title: 'Aurora Wave',
        description: 'Beautiful aurora-inspired wave animation with multiple colors',
        category: 'advanced',
        previewHTML: '<div class="aurora-wave"><div class="wave wave1"></div><div class="wave wave2"></div></div>',
        css: `.aurora-wave {
  width: 80px;
  height: 50px;
  position: relative;
  overflow: hidden;
  border-radius: 25px;
  background: linear-gradient(45deg, #000428, #004e92);
}

.aurora-wave .wave {
  position: absolute;
  width: 160%;
  height: 100%;
  top: 0;
  left: -30%;
  opacity: 0.7;
}

.aurora-wave .wave1 {
  background: linear-gradient(90deg, 
    transparent,
    rgba(0, 255, 150, 0.4),
    transparent,
    rgba(255, 0, 150, 0.4),
    transparent);
  animation: aurora-flow1 4s ease-in-out infinite;
}

.aurora-wave .wave2 {
  background: linear-gradient(90deg, 
    transparent,
    rgba(0, 150, 255, 0.3),
    transparent,
    rgba(255, 150, 0, 0.3),
    transparent);
  animation: aurora-flow2 5s ease-in-out infinite reverse;
}

@keyframes aurora-flow1 {
  0%, 100% { transform: translateX(-20%) skewX(10deg); }
  50% { transform: translateX(20%) skewX(-10deg); }
}

@keyframes aurora-flow2 {
  0%, 100% { transform: translateX(-30%) skewX(-15deg); }
  50% { transform: translateX(30%) skewX(15deg); }
}`,
        tags: ['aurora', 'wave', 'gradient']
    },
    {
        id: 'dna-helix',
        title: 'DNA Helix',
        description: 'Double helix structure rotating like DNA strands',
        category: 'advanced',
        previewHTML: '<div class="dna-helix"></div>',
        css: `.dna-helix {
  width: 60px;
  height: 60px;
  position: relative;
}

.dna-helix::before,
.dna-helix::after {
  content: '';
  position: absolute;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #ff6b6b;
  animation: dna-rotate 2s linear infinite;
}

.dna-helix::before {
  left: 0;
  animation-delay: 0s;
}

.dna-helix::after {
  right: 0;
  background: #4ecdc4;
  animation-delay: 1s;
}

@keyframes dna-rotate {
  0% { transform: rotateY(0deg) translateX(26px) rotateY(0deg); }
  100% { transform: rotateY(360deg) translateX(26px) rotateY(-360deg); }
}`,
        tags: ['dna', 'helix', 'biology']
    },
    {
        id: 'matrix-rain',
        title: 'Matrix Rain',
        description: 'Digital rain effect inspired by The Matrix movie',
        category: 'advanced',
        previewHTML: '<div class="matrix-rain"></div>',
        css: `.matrix-rain {
  width: 60px;
  height: 60px;
  background: #000;
  position: relative;
  overflow: hidden;
  border-radius: 5px;
}

.matrix-rain::before,
.matrix-rain::after {
  content: '1010';
  position: absolute;
  color: #00ff00;
  font-size: 8px;
  font-family: monospace;
  animation: matrix-fall 2s linear infinite;
}

.matrix-rain::before {
  left: 10px;
  animation-delay: 0s;
}

.matrix-rain::after {
  right: 10px;
  animation-delay: 1s;
}

@keyframes matrix-fall {
  0% { transform: translateY(-60px); opacity: 0; }
  50% { opacity: 1; }
  100% { transform: translateY(60px); opacity: 0; }
}`,
        tags: ['matrix', 'digital', 'code']
    },
    {
        id: 'quantum-loader',
        title: 'Quantum Loader',
        description: 'Quantum-inspired loader with entangled particles',
        category: 'advanced',
        previewHTML: '<div class="quantum-loader"></div>',
        css: `.quantum-loader {
  width: 60px;
  height: 60px;
  position: relative;
}

.quantum-loader::before,
.quantum-loader::after {
  content: '';
  position: absolute;
  width: 20px;
  height: 20px;
  border: 2px solid #667eea;
  border-radius: 50%;
  animation: quantum-spin 3s ease-in-out infinite;
}

.quantum-loader::before {
  top: 0;
  left: 0;
  animation-delay: 0s;
}

.quantum-loader::after {
  bottom: 0;
  right: 0;
  border-color: #764ba2;
  animation-delay: 1.5s;
  animation-direction: reverse;
}

@keyframes quantum-spin {
  0%, 100% { transform: rotate(0deg) scale(1); }
  50% { transform: rotate(180deg) scale(0.5); }
}`,
        tags: ['quantum', 'physics', 'loader']
    },
    {
        id: 'plasma-orb',
        title: 'Plasma Orb',
        description: 'Pulsing plasma orb with energy-like effects',
        category: 'advanced',
        previewHTML: '<div class="plasma-orb"></div>',
        css: `.plasma-orb {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: radial-gradient(circle at 30% 30%, #ff6b6b, #4ecdc4, #45b7d1, #f7b731);
  background-size: 200% 200%;
  animation: plasma-pulse 3s ease-in-out infinite;
  position: relative;
  overflow: hidden;
}

.plasma-orb::before {
  content: '';
  position: absolute;
  top: 10%;
  left: 10%;
  width: 80%;
  height: 80%;
  border-radius: 50%;
  background: radial-gradient(circle at 70% 70%, transparent 40%, rgba(255,255,255,0.3) 50%, transparent 60%);
  animation: plasma-shine 2s linear infinite;
}

@keyframes plasma-pulse {
  0%, 100% { 
    background-position: 0% 50%;
    transform: scale(1);
  }
  50% { 
    background-position: 100% 50%;
    transform: scale(1.1);
  }
}

@keyframes plasma-shine {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}`,
        tags: ['plasma', 'energy', 'orb']
    },
    {
        id: 'neural-network',
        title: 'Neural Network',
        description: 'Neural network nodes with pulsing connections',
        category: 'advanced',
        previewHTML: '<div class="neural-network"></div>',
        css: `.neural-network {
  width: 60px;
  height: 60px;
  position: relative;
}

.neural-network::before,
.neural-network::after {
  content: '';
  position: absolute;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #4ecdc4;
  animation: neural-pulse 2s ease-in-out infinite;
}

.neural-network::before {
  top: 10px;
  left: 10px;
  animation-delay: 0s;
}

.neural-network::after {
  bottom: 10px;
  right: 10px;
  background: #ff6b6b;
  animation-delay: 1s;
}

@keyframes neural-pulse {
  0%, 100% { 
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(76, 205, 196, 0.7);
  }
  50% { 
    transform: scale(1.2);
    box-shadow: 0 0 0 10px rgba(76, 205, 196, 0);
  }
}`,
        tags: ['neural', 'network', 'ai']
    },
    {
        id: 'cosmic-spiral',
        title: 'Cosmic Spiral',
        description: 'Spiral galaxy-like animation with rotating arms',
        category: 'advanced',
        previewHTML: '<div class="cosmic-spiral"></div>',
        css: `.cosmic-spiral {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: radial-gradient(circle, #000428, #004e92);
  position: relative;
  overflow: hidden;
  animation: cosmic-rotate 8s linear infinite;
}

.cosmic-spiral::before,
.cosmic-spiral::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #4ecdc4, transparent);
  top: 50%;
  left: 0;
  transform-origin: center;
}

.cosmic-spiral::before {
  animation: spiral-arm1 4s linear infinite;
}

.cosmic-spiral::after {
  animation: spiral-arm2 4s linear infinite reverse;
  background: linear-gradient(90deg, transparent, #ff6b6b, transparent);
}

@keyframes cosmic-rotate {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

@keyframes spiral-arm1 {
  0% { transform: rotate(0deg) scaleX(0.5); }
  100% { transform: rotate(180deg) scaleX(1); }
}

@keyframes spiral-arm2 {
  0% { transform: rotate(0deg) scaleX(0.8); }
  100% { transform: rotate(-180deg) scaleX(0.3); }
}`,
        tags: ['cosmic', 'spiral', 'galaxy']
    }
];

// DOM elements
const animationGrid = document.getElementById('animationGrid');
const navButtons = document.querySelectorAll('.nav-btn');
const copyNotification = document.getElementById('copyNotification');

// Current active category
let activeCategory = 'all';

// Initialize the application
function init() {
    renderAnimations();
    setupEventListeners();
}

// Setup event listeners
function setupEventListeners() {
    navButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const category = e.target.dataset.category;
            setActiveCategory(category);
        });
    });
}

// Set active category and update UI
function setActiveCategory(category) {
    activeCategory = category;
    
    // Update nav buttons
    navButtons.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.category === category);
    });
    
    // Re-render animations
    renderAnimations();
}

// Filter animations by category
function getFilteredAnimations() {
    if (activeCategory === 'all') {
        return animations;
    }
    return animations.filter(animation => animation.category === activeCategory);
}

// Render animations to the grid
function renderAnimations() {
    const filteredAnimations = getFilteredAnimations();
    
    if (filteredAnimations.length === 0) {
        animationGrid.innerHTML = `
            <div class="no-animations">
                <div class="no-animations-icon">🎨</div>
                <h3>No animations found</h3>
                <p>Try selecting a different category</p>
            </div>
        `;
        return;
    }
    
    animationGrid.innerHTML = filteredAnimations.map(animation => `
        <div class="animation-card" data-category="${animation.category}">
            <div class="animation-preview">
                <div class="category-badge category-${animation.category}">
                    ${animation.category}
                </div>
                ${animation.previewHTML}
            </div>
            <div class="animation-info">
                <h3 class="animation-title">${animation.title}</h3>
                <p class="animation-description">${animation.description}</p>
                <div class="animation-tags">
                    ${animation.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
                <button class="view-code-btn" onclick="toggleCode('${animation.id}')">
                    View Code
                </button>
                <div class="code-section" id="code-${animation.id}">
                    <div class="code-header">
                        <span class="code-type">HTML</span>
                        <button class="copy-btn" onclick="copyCode('${animation.id}', 'html')">
                            Copy
                        </button>
                    </div>
                    <div class="code-content">${escapeHtml(animation.previewHTML)}</div>
                    
                    <div class="code-header">
                        <span class="code-type">CSS</span>
                        <button class="copy-btn" onclick="copyCode('${animation.id}', 'css')">
                            Copy
                        </button>
                    </div>
                    <div class="code-content">${escapeHtml(animation.css)}</div>
                </div>
            </div>
        </div>
    `).join('');
}

// Toggle code section visibility
function toggleCode(animationId) {
    const codeSection = document.getElementById(`code-${animationId}`);
    const button = codeSection.previousElementSibling;
    
    if (codeSection.classList.contains('active')) {
        codeSection.classList.remove('active');
        button.textContent = 'View Code';
    } else {
        codeSection.classList.add('active');
        button.textContent = 'Hide Code';
    }
}

// Copy code to clipboard
async function copyCode(animationId, type) {
    const animation = animations.find(a => a.id === animationId);
    if (!animation) return;
    
    const code = type === 'html' ? animation.previewHTML : animation.css;
    
    try {
        await navigator.clipboard.writeText(code);
        showCopyNotification();
        
        // Update button state
        const button = event.target;
        const originalText = button.textContent;
        button.textContent = 'Copied!';
        button.classList.add('copied');
        
        setTimeout(() => {
            button.textContent = originalText;
            button.classList.remove('copied');
        }, 2000);
    } catch (err) {
        console.error('Failed to copy code:', err);
    }
}

// Show copy notification
function showCopyNotification() {
    copyNotification.classList.add('show');
    setTimeout(() => {
        copyNotification.classList.remove('show');
    }, 3000);
}

// Escape HTML for display
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', init);

// Make functions globally available
window.toggleCode = toggleCode;
window.copyCode = copyCode;