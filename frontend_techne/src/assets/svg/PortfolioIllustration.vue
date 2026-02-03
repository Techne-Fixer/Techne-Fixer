<!-- PortfolioIllustration.vue -->
<template>
  <svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg" class="portfolio-illustration">
    <defs>
      <linearGradient id="portfolioGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#b8e986;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#558b2f;stop-opacity:1" />
      </linearGradient>
      
      <linearGradient id="screenGlow" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style="stop-color:#00ff88;stop-opacity:0.2" />
        <stop offset="100%" style="stop-color:#00ff88;stop-opacity:0" />
      </linearGradient>
    </defs>
    
    <!-- Background Tech Elements -->
    <g opacity="0.15">
      <!-- Circuit lines -->
      <path d="M 100 50 L 200 50 L 200 150 M 600 100 L 700 100 L 700 200" 
            stroke="#00ff88" stroke-width="2" fill="none"/>
      <circle cx="100" cy="50" r="6" fill="#00ff88"/>
      <circle cx="200" cy="150" r="6" fill="#00ff88"/>
      <circle cx="600" cy="100" r="6" fill="#00ff88"/>
      <circle cx="700" cy="200" r="6" fill="#00ff88"/>
      
      <!-- Gear icon -->
      <g transform="translate(650, 450)">
        <circle cx="0" cy="0" r="25" fill="none" stroke="#558b2f" stroke-width="4"/>
        <circle cx="0" cy="0" r="12" fill="#7cb342"/>
      </g>
    </g>
    
    <!-- Main Character - Technician presenting work -->
    <g transform="translate(150, 250)">
      <!-- Body -->
      <ellipse cx="0" cy="80" rx="35" ry="45" fill="#1e3a5f"/>
      
      <!-- Left arm pointing -->
      <g>
        <ellipse cx="-25" cy="65" rx="12" ry="35" fill="#1e3a5f" transform="rotate(-30 -25 65)"/>
        <!-- Hand pointing -->
        <ellipse cx="-42" cy="45" rx="8" ry="10" fill="#ffcc99"/>
      </g>
      
      <!-- Right arm holding tablet -->
      <g>
        <ellipse cx="25" cy="75" rx="12" ry="30" fill="#1e3a5f" transform="rotate(20 25 75)"/>
        <!-- Hand -->
        <ellipse cx="35" cy="95" rx="8" ry="10" fill="#ffcc99"/>
      </g>
      
      <!-- Tablet -->
      <g transform="translate(30, 85)">
        <rect x="0" y="0" width="35" height="50" rx="3" fill="#424242" stroke="#00ff88" stroke-width="2"/>
        <rect x="3" y="3" width="29" height="38" fill="#80deea"/>
        <!-- Screen content - checkmarks -->
        <polyline points="8,15 11,18 16,13" stroke="#00ff88" stroke-width="2" fill="none"/>
        <polyline points="8,25 11,28 16,23" stroke="#00ff88" stroke-width="2" fill="none"/>
      </g>
      
      <!-- Neck -->
      <rect x="-8" y="25" width="16" height="15" fill="#ffcc99"/>
      
      <!-- Head -->
      <circle cx="0" cy="15" r="20" fill="#ffcc99"/>
      
      <!-- Cap -->
      <ellipse cx="0" cy="5" rx="22" ry="8" fill="#558b2f"/>
      <path d="M -15 5 Q 0 -5 15 5" fill="#7cb342"/>
      <circle cx="0" cy="5" r="4" fill="#ffffff" opacity="0.8"/>
      
      <!-- Hair -->
      <path d="M -12 12 Q -15 8 -12 5" fill="#3e2723" opacity="0.8"/>
      <path d="M 12 12 Q 15 8 12 5" fill="#3e2723" opacity="0.8"/>
      
      <!-- Eyes -->
      <ellipse cx="-6" cy="15" rx="2" ry="3" fill="#2e1f1a"/>
      <ellipse cx="6" cy="15" rx="2" ry="3" fill="#2e1f1a"/>
      <circle cx="-6" cy="14" r="1" fill="#ffffff"/>
      <circle cx="6" cy="14" r="1" fill="#ffffff"/>
      
      <!-- Smile -->
      <path d="M -6 20 Q 0 23 6 20" stroke="#d84315" stroke-width="1.5" fill="none"/>
      
      <!-- Tool belt -->
      <rect x="-30" y="110" width="60" height="8" fill="#424242"/>
      <rect x="-20" y="115" width="12" height="15" fill="#ffa726"/>
      <rect x="8" y="115" width="12" height="15" fill="#1976d2"/>
      
      <!-- Legs -->
      <rect x="-20" y="125" width="15" height="50" rx="3" fill="#1e3a5f"/>
      <rect x="5" y="125" width="15" height="50" rx="3" fill="#1e3a5f"/>
      
      <!-- Shoes -->
      <ellipse cx="-12" cy="178" rx="12" ry="8" fill="#212121"/>
      <ellipse cx="12" cy="178" rx="12" ry="8" fill="#212121"/>
    </g>
    
    <!-- Project Cards/Screens Display -->
    <g transform="translate(350, 150)">
      <!-- Large Monitor/Screen 1 -->
      <g>
        <rect x="0" y="0" width="180" height="140" rx="5" fill="#424242" stroke="#00ff88" stroke-width="3"/>
        <rect x="8" y="8" width="164" height="110" fill="#263238"/>
        
        <!-- Success screen content -->
        <circle cx="90" cy="50" r="25" fill="none" stroke="#00ff88" stroke-width="4"/>
        <polyline points="75,50 85,60 105,40" stroke="#00ff88" stroke-width="5" fill="none" stroke-linecap="round"/>
        
        <!-- Progress bars -->
        <rect x="30" y="85" width="120" height="8" rx="4" fill="#37474f"/>
        <rect x="30" y="85" width="100" height="8" rx="4" fill="#00ff88"/>
        
        <rect x="30" y="100" width="120" height="8" rx="4" fill="#37474f"/>
        <rect x="30" y="100" width="80" height="8" rx="4" fill="#00ff88"/>
        
        <!-- Monitor stand -->
        <rect x="75" y="140" width="30" height="8" rx="2" fill="#616161"/>
        <rect x="60" y="148" width="60" height="5" rx="2" fill="#757575"/>
      </g>
      
      <!-- Project Card 1 (top right) -->
      <g transform="translate(200, -30)">
        <rect x="0" y="0" width="100" height="80" rx="5" fill="#ffffff" stroke="#00ff88" stroke-width="2"/>
        <!-- AC icon -->
        <rect x="25" y="15" width="50" height="35" rx="3" fill="#558b2f"/>
        <rect x="28" y="18" width="44" height="6" fill="#7cb342"/>
        <rect x="28" y="26" width="44" height="6" fill="#7cb342"/>
        <rect x="28" y="34" width="44" height="6" fill="#7cb342"/>
        
        <!-- Checkmark badge -->
        <circle cx="80" cy="20" r="12" fill="#00ff88"/>
        <polyline points="73,20 77,24 85,16" stroke="#ffffff" stroke-width="2" fill="none"/>
        
        <!-- Lines representing text -->
        <line x1="15" y1="60" x2="85" y2="60" stroke="#e0e0e0" stroke-width="3"/>
        <line x1="15" y1="70" x2="70" y2="70" stroke="#e0e0e0" stroke-width="3"/>
      </g>
      
      <!-- Project Card 2 (bottom right) -->
      <g transform="translate(200, 90)">
        <rect x="0" y="0" width="100" height="80" rx="5" fill="#ffffff" stroke="#00ff88" stroke-width="2"/>
        <!-- CCTV icon -->
        <g transform="translate(30, 20)">
          <rect x="0" y="0" width="35" height="25" rx="2" fill="#424242"/>
          <rect x="35" y="3" width="10" height="19" rx="1" fill="#616161"/>
          <circle cx="17" cy="12" r="8" fill="#1976d2"/>
          <circle cx="17" cy="12" r="4" fill="#42a5f5"/>
        </g>
        
        <!-- Star rating -->
        <g transform="translate(20, 52)">
          <text font-family="Arial" font-size="16" fill="#ffa726">★★★★★</text>
        </g>
        
        <!-- Lines -->
        <line x1="15" y1="72" x2="85" y2="72" stroke="#e0e0e0" stroke-width="2"/>
      </g>
    </g>
    
    <!-- Floating Success Elements -->
    <g opacity="0.8">
      <!-- Trophy -->
      <g transform="translate(620, 350)">
        <rect x="-15" y="25" width="30" height="8" rx="2" fill="#ffd54f"/>
        <rect x="-12" y="15" width="24" height="12" rx="2" fill="#ffa726"/>
        <path d="M -12 15 Q -20 10 -18 5 L -15 15" fill="#ffb74d"/>
        <path d="M 12 15 Q 20 10 18 5 L 15 15" fill="#ffb74d"/>
        <circle cx="0" cy="12" r="10" fill="#ffc107"/>
        <text x="0" y="17" font-family="Arial" font-size="12" font-weight="bold" 
              fill="#ffffff" text-anchor="middle">1</text>
      </g>
      
      <!-- Certificate -->
      <g transform="translate(100, 450)">
        <rect x="0" y="0" width="80" height="60" rx="3" fill="#ffffff" stroke="#00ff88" stroke-width="2"/>
        <line x1="10" y1="15" x2="70" y2="15" stroke="#7cb342" stroke-width="3"/>
        <line x1="10" y1="25" x2="60" y2="25" stroke="#e0e0e0" stroke-width="2"/>
        <line x1="10" y1="33" x2="65" y2="33" stroke="#e0e0e0" stroke-width="2"/>
        <circle cx="40" cy="48" r="8" fill="#ffd54f" stroke="#ff9800" stroke-width="2"/>
      </g>
      
      <!-- Star burst -->
      <g transform="translate(550, 100)">
        <polygon points="0,-15 4,-5 15,-3 7,4 9,15 0,9 -9,15 -7,4 -15,-3 -4,-5" 
                 fill="#ffd54f" opacity="0.7"/>
        <polygon points="0,-10 2,-3 10,-2 4,3 6,10 0,6 -6,10 -4,3 -10,-2 -2,-3" 
                 fill="#fff59d"/>
      </g>
    </g>
    
    <!-- Stats/Numbers -->
    <g transform="translate(350, 450)">
      <!-- Projects completed -->
      <g>
        <rect x="0" y="0" width="100" height="60" rx="5" fill="#ffffff" stroke="#00ff88" stroke-width="2"/>
        <text x="50" y="28" font-family="Arial" font-size="24" font-weight="bold" 
              fill="#558b2f" text-anchor="middle">150+</text>
        <text x="50" y="48" font-family="Arial" font-size="12" 
              fill="#666666" text-anchor="middle">Projects</text>
      </g>
      
      <!-- Happy clients -->
      <g transform="translate(120, 0)">
        <rect x="0" y="0" width="100" height="60" rx="5" fill="#ffffff" stroke="#00ff88" stroke-width="2"/>
        <text x="50" y="28" font-family="Arial" font-size="24" font-weight="bold" 
              fill="#558b2f" text-anchor="middle">98%</text>
        <text x="50" y="48" font-family="Arial" font-size="12" 
              fill="#666666" text-anchor="middle">Satisfied</text>
      </g>
    </g>
  </svg>
</template>

<style scoped>
.portfolio-illustration {
  width: 100%;
  height: auto;
  max-width: 700px;
  margin: 0 auto;
  display: block;
}
</style>
