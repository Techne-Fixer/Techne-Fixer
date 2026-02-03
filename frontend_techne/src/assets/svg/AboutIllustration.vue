<!-- AboutIllustration.vue -->
<template>
  <svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg" class="about-illustration">
    <defs>
      <linearGradient id="aboutGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#b8e986;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#558b2f;stop-opacity:1" />
      </linearGradient>
      
      <linearGradient id="skyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style="stop-color:#80deea;stop-opacity:0.3" />
        <stop offset="100%" style="stop-color:#ffffff;stop-opacity:0" />
      </linearGradient>
    </defs>
    
    <!-- Background elements -->
    <rect x="0" y="400" width="800" height="200" fill="#e8f5e9" opacity="0.5"/>
    
    <!-- Building/Workshop outline -->
    <g transform="translate(550, 300)">
      <rect x="0" y="0" width="200" height="180" fill="#ffffff" stroke="#558b2f" stroke-width="3"/>
      <rect x="0" y="0" width="200" height="40" fill="#7cb342"/>
      
      <!-- Windows -->
      <rect x="20" y="60" width="50" height="45" fill="#80deea" stroke="#558b2f" stroke-width="2"/>
      <rect x="130" y="60" width="50" height="45" fill="#80deea" stroke="#558b2f" stroke-width="2"/>
      <rect x="20" y="120" width="50" height="45" fill="#80deea" stroke="#558b2f" stroke-width="2"/>
      <rect x="130" y="120" width="50" height="45" fill="#80deea" stroke="#558b2f" stroke-width="2"/>
      
      <!-- Door -->
      <rect x="80" y="120" width="40" height="60" rx="3" fill="#558b2f"/>
      <circle cx="108" cy="150" r="3" fill="#ffd54f"/>
      
      <!-- Sign -->
      <rect x="60" y="15" width="80" height="15" rx="2" fill="#ffffff" stroke="#558b2f" stroke-width="2"/>
      <text x="100" y="26" font-family="Arial" font-size="10" font-weight="bold" 
            fill="#558b2f" text-anchor="middle">REPAIR SHOP</text>
    </g>
    
    <!-- Team of 3 people -->
    <!-- Person 1 - Main technician (CEO) -->
    <g transform="translate(200, 250)">
      <!-- Body -->
      <ellipse cx="0" cy="90" rx="40" ry="50" fill="#1e3a5f"/>
      
      <!-- Arms -->
      <ellipse cx="-30" cy="75" rx="14" ry="38" fill="#1e3a5f" transform="rotate(-20 -30 75)"/>
      <ellipse cx="30" cy="75" rx="14" ry="38" fill="#1e3a5f" transform="rotate(20 30 75)"/>
      
      <!-- Hands -->
      <ellipse cx="-38" cy="105" rx="10" ry="12" fill="#ffcc99"/>
      <ellipse cx="38" cy="105" rx="10" ry="12" fill="#ffcc99"/>
      
      <!-- Wrench in hand -->
      <g transform="translate(-38, 105) rotate(-45)">
        <rect x="-3" y="-20" width="6" height="35" rx="2" fill="#757575"/>
        <circle cx="0" cy="-20" r="6" fill="#9e9e9e" stroke="#616161" stroke-width="1"/>
      </g>
      
      <!-- Neck -->
      <rect x="-10" y="35" width="20" height="18" fill="#ffcc99"/>
      
      <!-- Head -->
      <circle cx="0" cy="22" r="22" fill="#ffcc99"/>
      
      <!-- Cap with logo -->
      <ellipse cx="0" cy="10" rx="25" ry="10" fill="#558b2f"/>
      <path d="M -18 10 Q 0 -2 18 10" fill="#7cb342"/>
      <circle cx="0" cy="10" r="5" fill="#ffffff" opacity="0.9"/>
      <path d="M -2 8 Q 0 6 2 8 Q 2 12 0 12 Q -2 12 -2 8" fill="#558b2f" opacity="0.8"/>
      
      <!-- Hair -->
      <path d="M -15 18 Q -18 14 -15 10" fill="#3e2723"/>
      <path d="M 15 18 Q 18 14 15 10" fill="#3e2723"/>
      
      <!-- Face -->
      <ellipse cx="-7" cy="22" rx="2.5" ry="4" fill="#2e1f1a"/>
      <ellipse cx="7" cy="22" rx="2.5" ry="4" fill="#2e1f1a"/>
      <circle cx="-7" cy="21" r="1.5" fill="#ffffff"/>
      <circle cx="7" cy="21" r="1.5" fill="#ffffff"/>
      <path d="M -7 28 Q 0 32 7 28" stroke="#d84315" stroke-width="2" fill="none"/>
      
      <!-- Tool belt -->
      <rect x="-35" y="125" width="70" height="10" fill="#424242"/>
      <rect x="-25" y="130" width="15" height="18" fill="#ffa726"/>
      <rect x="10" y="130" width="15" height="18" fill="#1976d2"/>
      
      <!-- Legs -->
      <rect x="-22" y="140" width="18" height="55" rx="4" fill="#1e3a5f"/>
      <rect x="4" y="140" width="18" height="55" rx="4" fill="#1e3a5f"/>
      
      <!-- Shoes -->
      <ellipse cx="-13" cy="198" rx="14" ry="9" fill="#212121"/>
      <ellipse cx="13" cy="198" rx="14" ry="9" fill="#212121"/>
    </g>
    
    <!-- Person 2 - Apprentice (Jason) -->
    <g transform="translate(350, 270)">
      <!-- Body (smaller, younger) -->
      <ellipse cx="0" cy="80" rx="32" ry="42" fill="#2c5f8d"/>
      
      <!-- Arms holding clipboard -->
      <ellipse cx="-25" cy="70" rx="12" ry="32" fill="#2c5f8d" transform="rotate(-10 -25 70)"/>
      <ellipse cx="25" cy="70" rx="12" ry="32" fill="#2c5f8d" transform="rotate(10 25 70)"/>
      
      <!-- Hands -->
      <ellipse cx="-28" cy="95" rx="9" ry="10" fill="#d4a574"/>
      <ellipse cx="28" cy="95" rx="9" ry="10" fill="#d4a574"/>
      
      <!-- Clipboard -->
      <g transform="translate(0, 85)">
        <rect x="-18" y="0" width="36" height="48" rx="2" fill="#ffffff" stroke="#424242" stroke-width="2"/>
        <rect x="-8" y="-3" width="16" height="5" rx="1" fill="#757575"/>
        <line x1="-12" y1="12" x2="12" y2="12" stroke="#00ff88" stroke-width="2"/>
        <line x1="-12" y1="20" x2="8" y2="20" stroke="#e0e0e0" stroke-width="2"/>
        <line x1="-12" y1="28" x2="10" y2="28" stroke="#e0e0e0" stroke-width="2"/>
        <polyline points="-10,36 -7,39 -2,34" stroke="#00ff88" stroke-width="2" fill="none"/>
      </g>
      
      <!-- Neck -->
      <rect x="-8" y="30" width="16" height="15" fill="#d4a574"/>
      
      <!-- Head -->
      <circle cx="0" cy="18" r="18" fill="#d4a574"/>
      
      <!-- Hair (younger style) -->
      <path d="M -15 8 Q -12 2 -8 5 Q -4 1 0 4 Q 4 1 8 5 Q 12 2 15 8" fill="#1a1a1a"/>
      <ellipse cx="0" cy="5" rx="18" ry="12" fill="#1a1a1a"/>
      
      <!-- Face -->
      <ellipse cx="-5" cy="18" rx="2" ry="3" fill="#2e1f1a"/>
      <ellipse cx="5" cy="18" rx="2" ry="3" fill="#2e1f1a"/>
      <circle cx="-5" cy="17" r="1" fill="#ffffff"/>
      <circle cx="5" cy="17" r="1" fill="#ffffff"/>
      <path d="M -5 24 Q 0 27 5 24" stroke="#d84315" stroke-width="1.5" fill="none"/>
      
      <!-- Legs -->
      <rect x="-18" y="122" width="15" height="48" rx="3" fill="#424242"/>
      <rect x="3" y="122" width="15" height="48" rx="3" fill="#424242"/>
      
      <!-- Shoes -->
      <ellipse cx="-10" cy="172" rx="12" ry="8" fill="#1a1a1a"/>
      <ellipse cx="10" cy="172" rx="12" ry="8" fill="#1a1a1a"/>
    </g>
    
    <!-- Person 3 - Regular employee (James) -->
    <g transform="translate(480, 280)">
      <!-- Body -->
      <ellipse cx="0" cy="75" rx="35" ry="45" fill="#37474f"/>
      
      <!-- Arms working on device -->
      <ellipse cx="-28" cy="65" rx="13" ry="35" fill="#37474f" transform="rotate(-25 -28 65)"/>
      <ellipse cx="28" cy="65" rx="13" ry="35" fill="#37474f" transform="rotate(25 28 65)"/>
      
      <!-- Hands -->
      <ellipse cx="-35" cy="92" rx="9" ry="11" fill="#8d6e63"/>
      <ellipse cx="35" cy="92" rx="9" ry="11" fill="#8d6e63"/>
      
      <!-- Device being fixed (laptop) -->
      <g transform="translate(0, 90)">
        <rect x="-22" y="0" width="44" height="3" rx="1" fill="#616161"/>
        <rect x="-20" y="3" width="40" height="28" rx="2" fill="#424242"/>
        <rect x="-17" y="6" width="34" height="20" fill="#80deea"/>
        <!-- Screen glow -->
        <rect x="-15" y="8" width="30" height="16" fill="#00ff88" opacity="0.3"/>
      </g>
      
      <!-- Neck -->
      <rect x="-9" y="27" width="18" height="16" fill="#8d6e63"/>
      
      <!-- Head -->
      <circle cx="0" cy="16" r="20" fill="#8d6e63"/>
      
      <!-- Hair -->
      <ellipse cx="0" cy="4" rx="20" ry="14" fill="#212121"/>
      
      <!-- Face -->
      <ellipse cx="-6" cy="16" rx="2.5" ry="3.5" fill="#2e1f1a"/>
      <ellipse cx="6" cy="16" rx="2.5" ry="3.5" fill="#2e1f1a"/>
      <circle cx="-6" cy="15" r="1.2" fill="#ffffff"/>
      <circle cx="6" cy="15" r="1.2" fill="#ffffff"/>
      <path d="M -6 22 Q 0 25 6 22" stroke="#d84315" stroke-width="1.5" fill="none"/>
      
      <!-- Legs -->
      <rect x="-20" y="120" width="16" height="50" rx="3" fill="#424242"/>
      <rect x="4" y="120" width="16" height="50" rx="3" fill="#424242"/>
      
      <!-- Shoes -->
      <ellipse cx="-12" cy="172" rx="13" ry="8" fill="#1a1a1a"/>
      <ellipse cx="12" cy="172" rx="13" ry="8" fill="#1a1a1a"/>
    </g>
    
    <!-- Timeline/Journey elements -->
    <g transform="translate(80, 100)">
      <!-- Starting point - house icon (pandemic start) -->
      <g>
        <polygon points="30,10 50,25 50,50 10,50 10,25" fill="#fff9e6" stroke="#ffa726" stroke-width="2"/>
        <polygon points="10,25 30,10 50,25" fill="#ff9800"/>
        <rect x="22" y="32" width="16" height="18" fill="#ffa726"/>
        <circle cx="30" cy="5" r="8" fill="#ff6b6b" opacity="0.3"/>
        <text x="30" y="75" font-family="Arial" font-size="11" fill="#666" text-anchor="middle">2023</text>
      </g>
      
      <!-- Arrow -->
      <path d="M 55 35 L 75 35" stroke="#00ff88" stroke-width="3" marker-end="url(#arrowhead)"/>
      
      <!-- Growth - wrench icon -->
      <g transform="translate(85, 20)">
        <circle cx="10" cy="15" r="18" fill="#e8f5e9" stroke="#00ff88" stroke-width="2"/>
        <g transform="translate(10, 15) scale(0.8)">
          <rect x="-3" y="-8" width="6" height="20" rx="1" fill="#757575"/>
          <circle cx="0" cy="-8" r="5" fill="#9e9e9e" stroke="#616161" stroke-width="1"/>
        </g>
        <text x="10" y="48" font-family="Arial" font-size="10" fill="#666" text-anchor="middle">Learning</text>
      </g>
    </g>
    
    <!-- Values/Icons floating around -->
    <g opacity="0.7">
      <!-- Quality badge -->
      <g transform="translate(100, 400)">
        <circle cx="0" cy="0" r="25" fill="#ffd54f" stroke="#ff9800" stroke-width="2"/>
        <text x="0" y="6" font-family="Arial" font-size="16" font-weight="bold" 
              fill="#ffffff" text-anchor="middle">✓</text>
      </g>
      
      <!-- 24/7 badge -->
      <g transform="translate(680, 150)">
        <rect x="-28" y="-18" width="56" height="36" rx="18" fill="#00ff88"/>
        <text x="0" y="8" font-family="Arial" font-size="18" font-weight="bold" 
              fill="#0a1f1a" text-anchor="middle">24/7</text>
      </g>
      
      <!-- Heart icon (care) -->
      <g transform="translate(50, 250)">
        <path d="M 0,-5 Q -3,-12 -10,-12 Q -16,-12 -16,-5 Q -16,2 0,15 Q 16,2 16,-5 Q 16,-12 10,-12 Q 3,-12 0,-5" 
              fill="#ff6b6b" opacity="0.8"/>
      </g>
    </g>
    
    <!-- Speech bubbles with values -->
    <g transform="translate(220, 150)">
      <rect x="0" y="0" width="90" height="35" rx="8" fill="#ffffff" stroke="#00ff88" stroke-width="2"/>
      <polygon points="20,35 25,45 30,35" fill="#ffffff"/>
      <polygon points="20,35 25,45 30,35" stroke="#00ff88" stroke-width="2" fill="none"/>
      <text x="45" y="14" font-family="Arial" font-size="11" font-weight="bold" 
            fill="#558b2f" text-anchor="middle">Quality</text>
      <text x="45" y="27" font-family="Arial" font-size="11" font-weight="bold" 
            fill="#558b2f" text-anchor="middle">Service</text>
    </g>
  </svg>
</template>

<style scoped>
.about-illustration {
  width: 100%;
  height: auto;
  max-width: 700px;
  margin: 0 auto;
  display: block;
}
</style>