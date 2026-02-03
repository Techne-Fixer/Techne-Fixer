<!-- ServicesIllustration.vue -->
<template>
  <svg viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg" class="services-illustration">
    <!-- Background Tech Pattern -->
    <defs>
      <linearGradient id="greenGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#b8e986;stop-opacity:1" />
        <stop offset="50%" style="stop-color:#7cb342;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#558b2f;stop-opacity:1" />
      </linearGradient>
      
      <linearGradient id="circuitGlow" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#00ff88;stop-opacity:0.3" />
        <stop offset="100%" style="stop-color:#00ff88;stop-opacity:0.1" />
      </linearGradient>
    </defs>
    
    <!-- Central Gear/Cog Background -->
    <g transform="translate(400, 400)">
      <!-- Large Gear -->
      <circle cx="0" cy="0" r="280" fill="url(#circuitGlow)" opacity="0.3"/>
      
      <!-- Gear teeth -->
      <g fill="url(#greenGradient)" opacity="0.2">
        <rect x="-15" y="-300" width="30" height="40" rx="5"/>
        <rect x="-15" y="260" width="30" height="40" rx="5"/>
        <rect x="-300" y="-15" width="40" height="30" rx="5"/>
        <rect x="260" y="-15" width="40" height="30" rx="5"/>
        
        <rect x="-215" y="-215" width="30" height="40" rx="5" transform="rotate(45 -200 -200)"/>
        <rect x="185" y="-215" width="30" height="40" rx="5" transform="rotate(-45 200 -200)"/>
        <rect x="-215" y="185" width="30" height="40" rx="5" transform="rotate(-45 -200 200)"/>
        <rect x="185" y="185" width="30" height="40" rx="5" transform="rotate(45 200 200)"/>
      </g>
      
      <!-- Circuit board lines -->
      <g stroke="#00ff88" stroke-width="3" fill="none" opacity="0.3">
        <line x1="-250" y1="0" x2="-150" y2="0"/>
        <line x1="150" y1="0" x2="250" y2="0"/>
        <line x1="0" y1="-250" x2="0" y2="-150"/>
        <line x1="0" y1="150" x2="0" y2="250"/>
        
        <circle cx="-250" cy="0" r="8" fill="#00ff88"/>
        <circle cx="250" cy="0" r="8" fill="#00ff88"/>
        <circle cx="0" cy="-250" r="8" fill="#00ff88"/>
        <circle cx="0" cy="250" r="8" fill="#00ff88"/>
      </g>
    </g>
    
    <!-- Service Icons in Circular Layout -->
    <g id="service-icons">
      <!-- Air Conditioning (Top) -->
      <g transform="translate(400, 120)">
        <circle cx="0" cy="0" r="50" fill="#ffffff" stroke="#00ff88" stroke-width="3"/>
        <g transform="translate(-25, -25)">
          <!-- AC Unit -->
          <rect x="5" y="10" width="40" height="30" rx="3" fill="#558b2f"/>
          <rect x="8" y="13" width="34" height="5" fill="#7cb342"/>
          <rect x="8" y="20" width="34" height="5" fill="#7cb342"/>
          <rect x="8" y="27" width="34" height="5" fill="#7cb342"/>
          <!-- Snowflake -->
          <g transform="translate(25, 25) scale(0.3)" fill="#00d4ff">
            <line x1="0" y1="-15" x2="0" y2="15" stroke="#00d4ff" stroke-width="3"/>
            <line x1="-15" y1="0" x2="15" y2="0" stroke="#00d4ff" stroke-width="3"/>
            <line x1="-10" y1="-10" x2="10" y2="10" stroke="#00d4ff" stroke-width="3"/>
            <line x1="10" y1="-10" x2="-10" y2="10" stroke="#00d4ff" stroke-width="3"/>
          </g>
        </g>
      </g>
      
      <!-- CCTV (Top Right) -->
      <g transform="translate(620, 250)">
        <circle cx="0" cy="0" r="50" fill="#ffffff" stroke="#00ff88" stroke-width="3"/>
        <g transform="translate(-20, -15)">
          <!-- Camera body -->
          <rect x="5" y="10" width="25" height="18" rx="2" fill="#424242"/>
          <rect x="30" y="12" width="8" height="14" rx="1" fill="#616161"/>
          <!-- Lens -->
          <circle cx="17" cy="19" r="6" fill="#1976d2"/>
          <circle cx="17" cy="19" r="3" fill="#42a5f5"/>
          <!-- Mount -->
          <rect x="10" y="5" width="12" height="5" rx="1" fill="#616161"/>
        </g>
      </g>
      
      <!-- Hardware/Tools (Right) -->
      <g transform="translate(680, 400)">
        <circle cx="0" cy="0" r="50" fill="#ffffff" stroke="#00ff88" stroke-width="3"/>
        <g transform="translate(-20, -20)">
          <!-- Wrench -->
          <rect x="8" y="15" width="4" height="20" rx="1" fill="#757575"/>
          <circle cx="10" cy="15" r="5" fill="#9e9e9e" stroke="#757575" stroke-width="1"/>
          <!-- Screwdriver -->
          <rect x="20" y="10" width="3" height="22" rx="1" fill="#ffa726"/>
          <rect x="18" y="8" width="7" height="5" rx="1" fill="#ef6c00"/>
          <polygon points="21.5,32 19,35 24,35" fill="#616161"/>
        </g>
      </g>
      
      <!-- Diagnostics (Bottom Right) -->
      <g transform="translate(620, 550)">
        <circle cx="0" cy="0" r="50" fill="#ffffff" stroke="#00ff88" stroke-width="3"/>
        <g transform="translate(-18, -18)">
          <!-- Clipboard -->
          <rect x="5" y="5" width="26" height="32" rx="2" fill="#ffffff" stroke="#424242" stroke-width="2"/>
          <rect x="12" y="2" width="10" height="4" rx="1" fill="#757575"/>
          <!-- Checkmarks -->
          <polyline points="10,15 12,17 16,13" stroke="#00ff88" stroke-width="2" fill="none"/>
          <polyline points="10,22 12,24 16,20" stroke="#00ff88" stroke-width="2" fill="none"/>
          <polyline points="10,29 12,31 16,27" stroke="#00ff88" stroke-width="2" fill="none"/>
        </g>
      </g>
      
      <!-- Installation (Bottom) -->
      <g transform="translate(400, 680)">
        <circle cx="0" cy="0" r="50" fill="#ffffff" stroke="#00ff88" stroke-width="3"/>
        <g transform="translate(-20, -20)">
          <!-- Drill -->
          <rect x="8" y="15" width="25" height="12" rx="2" fill="#ff9800"/>
          <rect x="6" y="19" width="3" height="4" rx="1" fill="#e65100"/>
          <polygon points="33,19 38,16 38,24 33,23" fill="#616161"/>
          <!-- Drill bit -->
          <rect x="38" y="19.5" width="8" height="2" fill="#424242"/>
        </g>
      </g>
      
      <!-- Maintenance (Bottom Left) -->
      <g transform="translate(180, 550)">
        <circle cx="0" cy="0" r="50" fill="#ffffff" stroke="#00ff88" stroke-width="3"/>
        <g transform="translate(-20, -20)">
          <!-- Gear -->
          <circle cx="20" cy="20" r="12" fill="none" stroke="#558b2f" stroke-width="3"/>
          <circle cx="20" cy="20" r="6" fill="#7cb342"/>
          <!-- Gear teeth -->
          <rect x="18" y="5" width="4" height="5" fill="#558b2f"/>
          <rect x="18" y="30" width="4" height="5" fill="#558b2f"/>
          <rect x="5" y="18" width="5" height="4" fill="#558b2f"/>
          <rect x="30" y="18" width="5" height="4" fill="#558b2f"/>
        </g>
      </g>
      
      <!-- Parts/Supply (Left) -->
      <g transform="translate(120, 400)">
        <circle cx="0" cy="0" r="50" fill="#ffffff" stroke="#00ff88" stroke-width="3"/>
        <g transform="translate(-20, -20)">
          <!-- Box -->
          <rect x="8" y="15" width="24" height="18" rx="1" fill="#8d6e63" stroke="#5d4037" stroke-width="2"/>
          <rect x="8" y="15" width="24" height="6" fill="#a1887f"/>
          <!-- Tape -->
          <rect x="18" y="12" width="4" height="24" fill="#fdd835"/>
        </g>
      </g>
      
      <!-- Upgrades (Top Left) -->
      <g transform="translate(180, 250)">
        <circle cx="0" cy="0" r="50" fill="#ffffff" stroke="#00ff88" stroke-width="3"/>
        <g transform="translate(-20, -20)">
          <!-- Arrow up with chip -->
          <rect x="12" y="22" width="16" height="12" rx="1" fill="#424242" stroke="#616161" stroke-width="1"/>
          <circle cx="16" cy="27" r="1.5" fill="#00ff88"/>
          <circle cx="20" cy="27" r="1.5" fill="#00ff88"/>
          <circle cx="24" cy="27" r="1.5" fill="#00ff88"/>
          <!-- Up arrow -->
          <polygon points="20,8 15,16 25,16" fill="#00ff88"/>
          <rect x="18" y="16" width="4" height="6" fill="#00ff88"/>
        </g>
      </g>
    </g>
    
    <!-- Center Logo Circle -->
    <g transform="translate(400, 400)">
      <circle cx="0" cy="0" r="80" fill="#ffffff" stroke="#00ff88" stroke-width="4"/>
      <circle cx="0" cy="0" r="70" fill="url(#greenGradient)"/>
      
      <!-- Spiral logo -->
      <path d="M 0,-30 Q 30,-30 30,0 Q 30,30 0,30 Q -30,30 -30,0 Q -30,-30 -10,-30" 
            fill="none" stroke="#ffffff" stroke-width="4" opacity="0.9"/>
      <circle cx="0" cy="-30" r="5" fill="#ffffff"/>
      
      <!-- Center dot -->
      <circle cx="0" cy="0" r="8" fill="#ffffff"/>
    </g>
    
    <!-- Text Labels (Optional - can be removed if not needed) -->
    <text x="400" y="95" font-family="Arial, sans-serif" font-size="16" font-weight="bold" 
          fill="#00ff88" text-anchor="middle">Air Conditioning</text>
    
    <text x="660" y="235" font-family="Arial, sans-serif" font-size="16" font-weight="bold" 
          fill="#00ff88" text-anchor="middle">CCTV</text>
    
    <text x="720" y="405" font-family="Arial, sans-serif" font-size="16" font-weight="bold" 
          fill="#00ff88" text-anchor="middle">Hardware</text>
    
    <text x="660" y="585" font-family="Arial, sans-serif" font-size="16" font-weight="bold" 
          fill="#00ff88" text-anchor="middle">Diagnostics</text>
    
    <text x="400" y="725" font-family="Arial, sans-serif" font-size="16" font-weight="bold" 
          fill="#00ff88" text-anchor="middle">Installation</text>
    
    <text x="140" y="585" font-family="Arial, sans-serif" font-size="16" font-weight="bold" 
          fill="#00ff88" text-anchor="middle">Maintenance</text>
    
    <text x="80" y="405" font-family="Arial, sans-serif" font-size="16" font-weight="bold" 
          fill="#00ff88" text-anchor="middle">Supply</text>
    
    <text x="140" y="235" font-family="Arial, sans-serif" font-size="16" font-weight="bold" 
          fill="#00ff88" text-anchor="middle">Upgrades</text>
  </svg>
</template>

<style scoped>
.services-illustration {
  width: 100%;
  height: auto;
  max-width: 600px;
  margin: 0 auto;
  display: block;
}
</style>
