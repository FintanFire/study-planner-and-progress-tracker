/**
 * Study Planner & Progress Tracker — Celebratory Confetti + 11-Theme Scenery & Prop Engine
 * - Layer 1 (#theme-backdrop): Full-screen SVG scenic backgrounds for all 11 themes
 *   (Lush Dark Jungle Leaves, One Piece Thousand Sunny & Jolly Roger, Cyberpunk Neon City Skyline,
 *    Night Sky Constellations, Giant Solar System Planets, Giant Cratered Moon, Anime Torii Gate & Mt. Fuji,
 *    Cozy Rainy Cafe Window, Coral Reef & Whale, Autumn Maple Forest & Bonfire, Nordic Aurora & Pines)
 * - Layer 2 (#ambient-canvas): Custom-drawn theme props flowing around the background
 *   (All 9 Straw Hat Crew Faces + Straw Hat + Jolly Roger + Devil Fruit for One Piece,
 *    Monstera & Palm Jungle Leaves for Plants, Cyber Drones & Neon Shards for Cyberpunk,
 *    Shining Lens-Flare Stars & Shooting Meteors for Stars, Ringed Planets for Planets, etc.)
 */

const THEME_AMBIENT_CONFIG = {
  plants: {
    props: ['monstera', 'palm_leaf', 'jungle_leaf', 'hibiscus'],
    colors: ['#52B788', '#40916C', '#74C69D', '#95D5B2', '#B07D4F', '#F28482'],
    direction: 'diagonal',
    speed: 0.42,
    count: 28,
    minSize: 16,
    maxSize: 30
  },
  stars: {
    props: ['flare_star', 'flare_star', 'shooting_star', 'sparkle'],
    colors: ['#FDE047', '#FEF08A', '#93C5FD', '#E0E7FF', '#F59E0B'],
    direction: 'twinkle',
    speed: 0.25,
    count: 38,
    minSize: 10,
    maxSize: 24
  },
  moon: {
    props: ['crescent_prop', 'lantern', 'flare_star'],
    colors: ['#E2E8F0', '#C4B5FD', '#A78BFA', '#FDE68A', '#93C5FD'],
    direction: 'float',
    speed: 0.28,
    count: 24,
    minSize: 14,
    maxSize: 26
  },
  planets: {
    props: ['saturn_prop', 'jupiter_prop', 'earth_prop', 'mars_prop', 'comet_prop'],
    colors: ['#E07A5F', '#F2CC8F', '#A855F7', '#38BDF8', '#F4A261'],
    direction: 'float',
    speed: 0.28,
    count: 18,
    minSize: 20,
    maxSize: 36
  },
  anime: {
    props: ['sakura_flower', 'sakura_petal', 'sakura_petal', 'origami_crane'],
    colors: ['#FF758F', '#FF8FA3', '#FFB3C1', '#FFD166', '#4EA8DE'],
    direction: 'diagonal',
    speed: 0.52,
    count: 28,
    minSize: 12,
    maxSize: 24
  },
  onepiece: {
    props: [
      'jollyroger',
      'strawhat',
      'luffy',
      'zoro',
      'nami',
      'usopp',
      'sanji',
      'chopper',
      'robin',
      'franky',
      'brook',
      'devilfruit'
    ],
    colors: ['#F77F00', '#D62828', '#0077B6', '#FCBF49', '#2A9D8F'],
    direction: 'float',
    speed: 0.36,
    count: 18,
    minSize: 24,
    maxSize: 32
  },
  coffee: {
    props: ['coffee_cup', 'coffee_bean', 'coffee_bean', 'steam_swirl'],
    colors: ['#7F5539', '#9C6644', '#B08968', '#DDA15E', '#E6CCB2'],
    direction: 'up',
    speed: 0.32,
    count: 22,
    minSize: 14,
    maxSize: 24
  },
  ocean: {
    props: ['jellyfish', 'tropical_fish', 'bubble_cluster', 'starfish'],
    colors: ['#00B4D8', '#48CAE4', '#90E0EF', '#FF7F51', '#64DFDF'],
    direction: 'up',
    speed: 0.38,
    count: 24,
    minSize: 14,
    maxSize: 26
  },
  cyberpunk: {
    props: ['cyber_drone', 'neon_hex', 'cyber_shard', 'neon_bolt'],
    colors: ['#FF2A85', '#00F5D4', '#FEE440', '#9B5DE5', '#00BBF9'],
    direction: 'up',
    speed: 0.48,
    count: 24,
    minSize: 15,
    maxSize: 28
  },
  autumn: {
    props: ['maple_leaf', 'gingko_leaf', 'acorn_prop', 'maple_leaf'],
    colors: ['#C85A32', '#E09F3E', '#9E2A2B', '#D4A373', '#B56576'],
    direction: 'diagonal',
    speed: 0.45,
    count: 24,
    minSize: 15,
    maxSize: 26
  },
  nordic: {
    props: ['crystal_snow', 'crystal_snow', 'pine_prop'],
    colors: ['#94A3B8', '#3D6B58', '#64748B', '#38BDF8', '#52796F'],
    direction: 'down',
    speed: 0.36,
    count: 26,
    minSize: 13,
    maxSize: 24
  }
};

/**
 * Generates the full-screen SVG background scenery for each of the 11 themes
 */
function buildThemeBackdropSvg(theme) {
  switch (theme) {
    case 'plants':
      // Deep Lush Jungle Canopy, Hanging Vines, Giant Monstera & Fern Fronds
      return `
        <svg viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" width="100%" height="100%">
          <defs>
            <radialGradient id="jungleGlow" cx="50%" cy="20%" r="65%">
              <stop offset="0%" stop-color="#52B788" stop-opacity="0.18"/>
              <stop offset="100%" stop-color="#081C15" stop-opacity="0"/>
            </radialGradient>
          </defs>
          <rect width="1440" height="900" fill="url(#jungleGlow)"/>
          <!-- Hanging Jungle Liana Vines from Top Canopy -->
          <path d="M120 0 Q140 160 105 310 Q85 400 115 490" stroke="#2D6A4F" stroke-width="5" fill="none" opacity="0.55"/>
          <path d="M280 0 Q250 130 290 250 Q310 330 275 410" stroke="#40916C" stroke-width="4" fill="none" opacity="0.45"/>
          <path d="M1180 0 Q1150 180 1200 340 Q1225 430 1190 520" stroke="#2D6A4F" stroke-width="5" fill="none" opacity="0.55"/>
          <path d="M1320 0 Q1350 140 1300 280" stroke="#52B788" stroke-width="3.5" fill="none" opacity="0.45"/>
          <!-- Giant Corner Jungle Palm & Monstera Clusters -->
          <g opacity="0.38" fill="#2D6A4F">
            <path d="M-40 900 Q80 680 290 640 Q180 790 60 900 Z"/>
            <path d="M-20 900 Q150 740 380 770 Q220 860 40 900 Z" fill="#40916C"/>
            <path d="M1480 900 Q1360 680 1150 640 Q1260 790 1380 900 Z"/>
            <path d="M1460 900 Q1290 740 1060 770 Q1220 860 1400 900 Z" fill="#40916C"/>
            <path d="M-30 0 Q140 120 260 40 Q140 -20 -30 0 Z" fill="#52B788"/>
            <path d="M1470 0 Q1300 120 1180 40 Q1300 -20 1470 0 Z" fill="#52B788"/>
          </g>
          <!-- Glowing Jungle Blossoms -->
          <circle cx="105" cy="310" r="9" fill="#F28482" opacity="0.65"/>
          <circle cx="290" cy="250" r="7" fill="#F6BD60" opacity="0.65"/>
          <circle cx="1200" cy="340" r="9" fill="#F28482" opacity="0.65"/>
        </svg>
      `;

    case 'onepiece':
      // Grand Line Ocean Waves, Thousand Sunny Silhouette, Log Pose Compass & Giant Straw Hat Jolly Roger
      return `
        <svg viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" width="100%" height="100%">
          <!-- Giant Straw Hat Jolly Roger Emblem in Center Background -->
          <g transform="translate(720, 430)" opacity="0.13">
            <!-- Crossbones -->
            <line x1="-220" y1="-160" x2="220" y2="160" stroke="#5C4022" stroke-width="26" stroke-linecap="round"/>
            <line x1="220" y1="-160" x2="-220" y2="160" stroke="#5C4022" stroke-width="26" stroke-linecap="round"/>
            <circle cx="-225" cy="-165" r="22" fill="#5C4022"/>
            <circle cx="225" cy="-165" r="22" fill="#5C4022"/>
            <circle cx="-225" cy="165" r="22" fill="#5C4022"/>
            <circle cx="225" cy="165" r="22" fill="#5C4022"/>
            <!-- Skull -->
            <circle cx="0" cy="-15" r="115" fill="#5C4022"/>
            <rect x="-52" y="65" width="104" height="68" rx="18" fill="#5C4022"/>
            <!-- Eye Sockets & Nose -->
            <circle cx="-42" cy="-10" r="26" fill="#F7EEDB"/>
            <circle cx="42" cy="-10" r="26" fill="#F7EEDB"/>
            <polygon points="0,15 -14,42 14,42" fill="#F7EEDB"/>
            <!-- Luffy's Iconic Straw Hat on Skull -->
            <path d="M-112 -45 A112 95 0 0 1 112 -45 Z" fill="#F77F00"/>
            <path d="M-110 -62 Q0 -75 110 -62 L112 -45 L-112 -45 Z" fill="#D62828"/>
            <ellipse cx="0" cy="-45" rx="175" ry="22" fill="#F77F00"/>
          </g>
          <!-- Grand Line Compass Rose (Top Right) -->
          <g transform="translate(1310, 130)" opacity="0.22" stroke="#8A653E" fill="none">
            <circle cx="0" cy="0" r="72" stroke-width="2.5"/>
            <circle cx="0" cy="0" r="56" stroke-width="1.2" stroke-dasharray="6 4"/>
            <polygon points="0,-68 12,-12 68,0 12,12 0,68 -12,12 -68,0 -12,-12" fill="#D62828" opacity="0.5"/>
          </g>
          <!-- Grand Line Ocean Waves & Thousand Sunny Silhouette at Bottom -->
          <path d="M0 815 Q180 780 360 815 T720 815 T1080 815 T1440 815 L1440 900 L0 900 Z" fill="#0077B6" opacity="0.22"/>
          <path d="M0 845 Q180 815 360 845 T720 845 T1080 845 T1440 845 L1440 900 L0 900 Z" fill="#023E8A" opacity="0.26"/>
          <!-- Pirate Ship Silhouette on Horizon -->
          <g transform="translate(180, 740)" opacity="0.32">
            <path d="M0 55 L130 55 L110 90 L20 90 Z" fill="#5C4022"/>
            <rect x="60" y="-25" width="7" height="80" fill="#5C4022"/>
            <path d="M22 -10 Q65 -20 108 -10 Q118 22 105 45 L25 45 Q12 22 22 -10 Z" fill="#D62828"/>
            <circle cx="132" cy="52" r="16" fill="#F77F00"/>
          </g>
        </svg>
      `;

    case 'cyberpunk':
      // Cyberpunk Neon City Skyline, Towering Skyscrapers, Cyber Sun & Synthwave Grid
      return `
        <svg viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" width="100%" height="100%">
          <defs>
            <linearGradient id="cyberSun" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stop-color="#FEE440"/>
              <stop offset="50%" stop-color="#FF2A85"/>
              <stop offset="100%" stop-color="#9B5DE5"/>
            </linearGradient>
          </defs>
          <!-- Giant Segmented Synthwave Cyber Sun -->
          <circle cx="720" cy="590" r="170" fill="url(#cyberSun)" opacity="0.28"/>
          <rect x="540" y="570" width="360" height="8" fill="#0D0B18"/>
          <rect x="540" y="595" width="360" height="10" fill="#0D0B18"/>
          <rect x="540" y="622" width="360" height="14" fill="#0D0B18"/>
          <rect x="540" y="652" width="360" height="18" fill="#0D0B18"/>

          <!-- Cyberpunk Megacity Skyscraper Skyline -->
          <g fill="#140F29" stroke="#FF2A85" stroke-width="1.2" opacity="0.72">
            <rect x="20" y="520" width="95" height="240"/>
            <rect x="115" y="440" width="85" height="320" stroke="#00F5D4"/>
            <polygon points="115,440 157,380 200,440" fill="#140F29" stroke="#00F5D4"/>
            <rect x="200" y="500" width="110" height="260"/>
            <rect x="310" y="470" width="75" height="290" stroke="#00F5D4"/>
            <rect x="1040" y="460" width="90" height="300" stroke="#00F5D4"/>
            <rect x="1130" y="410" width="105" height="350"/>
            <line x1="1182" y1="330" x2="1182" y2="410" stroke="#00F5D4" stroke-width="3"/>
            <rect x="1235" y="490" width="95" height="270" stroke="#00F5D4"/>
            <rect x="1330" y="530" width="95" height="230"/>
          </g>
          <!-- Glowing Neon Billboard & Windows -->
          <rect x="130" y="475" width="55" height="24" fill="none" stroke="#00F5D4" stroke-width="2" opacity="0.65"/>
          <rect x="1148" y="445" width="68" height="28" fill="none" stroke="#FF2A85" stroke-width="2" opacity="0.65"/>

          <!-- 3D Neon Laser Horizon Grid -->
          <g stroke="#00F5D4" stroke-width="1" opacity="0.28">
            <line x1="0" y1="740" x2="1440" y2="740" stroke="#FF2A85" stroke-width="2.5"/>
            <line x1="0" y1="770" x2="1440" y2="770"/>
            <line x1="0" y1="805" x2="1440" y2="805"/>
            <line x1="0" y1="848" x2="1440" y2="848"/>
            <line x1="0" y1="895" x2="1440" y2="895"/>
            <line x1="720" y1="740" x2="0" y2="900"/>
            <line x1="720" y1="740" x2="280" y2="900"/>
            <line x1="720" y1="740" x2="520" y2="900"/>
            <line x1="720" y1="740" x2="720" y2="900"/>
            <line x1="720" y1="740" x2="920" y2="900"/>
            <line x1="720" y1="740" x2="1160" y2="900"/>
            <line x1="720" y1="740" x2="1440" y2="900"/>
          </g>
        </svg>
      `;

    case 'stars':
      // Shining Night Sky, Milky Way Nebula & Connected Constellations
      return `
        <svg viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" width="100%" height="100%">
          <defs>
            <radialGradient id="milkyWay" cx="50%" cy="35%" r="60%">
              <stop offset="0%" stop-color="#60A5FA" stop-opacity="0.18"/>
              <stop offset="50%" stop-color="#C084FC" stop-opacity="0.10"/>
              <stop offset="100%" stop-color="#0B1021" stop-opacity="0"/>
            </radialGradient>
          </defs>
          <ellipse cx="720" cy="360" rx="680" ry="260" transform="rotate(-18 720 360)" fill="url(#milkyWay)"/>
          <!-- Ursa Major (Big Dipper) Constellation (Top Left) -->
          <g stroke="#F5C542" stroke-width="1.5" opacity="0.55" fill="#FFFBEB">
            <polyline points="110,140 165,155 210,185 265,205 260,265 340,275 355,210 265,205" fill="none" stroke-dasharray="4 3"/>
            <circle cx="110" cy="140" r="4"/><circle cx="165" cy="155" r="3.5"/><circle cx="210" cy="185" r="3.5"/>
            <circle cx="265" cy="205" r="4"/><circle cx="260" cy="265" r="4"/><circle cx="340" cy="275" r="4.5"/><circle cx="355" cy="210" r="4.5"/>
          </g>
          <!-- Cassiopeia Constellation (Top Right) -->
          <g stroke="#93C5FD" stroke-width="1.5" opacity="0.55" fill="#FFFFFF">
            <polyline points="1080,120 1130,175 1185,150 1235,210 1295,165" fill="none"/>
            <circle cx="1080" cy="120" r="4.5"/><circle cx="1130" cy="175" r="4"/><circle cx="1185" cy="150" r="4.5"/>
            <circle cx="1235" cy="210" r="4"/><circle cx="1295" cy="165" r="4.5"/>
          </g>
          <!-- Shining North Star (Polaris) -->
          <g transform="translate(720, 95)" opacity="0.65" fill="#FDE047">
            <polygon points="0,-28 4,-4 28,0 4,4 0,28 -4,4 -28,0 -4,-4"/>
            <circle cx="0" cy="0" r="6" fill="#FFFFFF"/>
          </g>
        </svg>
      `;

    case 'planets':
      // Giant Solar System Panorama with Sun, Orbit Rings, Huge Ringed Saturn, Jupiter, Mars, Earth & Neptune
      return `
        <svg viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" width="100%" height="100%">
          <!-- Blazing Golden Sun Corona on Left Edge -->
          <circle cx="-60" cy="450" r="210" fill="#F59E0B" opacity="0.22"/>
          <circle cx="-60" cy="450" r="145" fill="#FDE047" opacity="0.28"/>

          <!-- Planetary Elliptical Orbit Paths -->
          <g fill="none" stroke="#F2CC8F" stroke-opacity="0.16" stroke-dasharray="6 6" stroke-width="1.5">
            <ellipse cx="-60" cy="450" rx="340" ry="260"/>
            <ellipse cx="-60" cy="450" rx="590" ry="420"/>
            <ellipse cx="-60" cy="450" rx="920" ry="620"/>
            <ellipse cx="-60" cy="450" rx="1280" ry="820"/>
          </g>

          <!-- Blue Earth & Moon -->
          <circle cx="265" cy="340" r="24" fill="#38BDF8" opacity="0.45"/>
          <path d="M255 330 Q268 335 262 350 Q250 345 255 330 Z" fill="#4ADE80" opacity="0.45"/>
          <circle cx="302" cy="318" r="6" fill="#E2E8F0" opacity="0.55"/>

          <!-- Red Mars -->
          <circle cx="495" cy="610" r="20" fill="#E07A5F" opacity="0.5"/>

          <!-- Giant Banded Jupiter -->
          <g transform="translate(820, 210)" opacity="0.42">
            <circle cx="0" cy="0" r="68" fill="#D97757"/>
            <ellipse cx="0" cy="-22" rx="64" ry="8" fill="#F2CC8F"/>
            <ellipse cx="0" cy="8" rx="67" ry="10" fill="#B5654D"/>
            <ellipse cx="22" cy="20" rx="16" ry="9" fill="#C94A4A"/>
          </g>

          <!-- HUGE Ringed Saturn (Right Side Hero Prop) -->
          <g transform="translate(1210, 620) rotate(-18)" opacity="0.52">
            <ellipse cx="0" cy="0" rx="155" ry="38" fill="none" stroke="#F2CC8F" stroke-width="14" opacity="0.7"/>
            <ellipse cx="0" cy="0" rx="125" ry="28" fill="none" stroke="#E07A5F" stroke-width="6" opacity="0.65"/>
            <circle cx="0" cy="0" r="66" fill="#F4A261"/>
          </g>
        </svg>
      `;

    case 'moon':
      // Giant Glowing Cratered Moon, 8 Lunar Phases Arc & Misty Mountains
      return `
        <svg viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" width="100%" height="100%">
          <!-- Giant Glowing Full/Crescent Moon in Upper Right -->
          <g transform="translate(1180, 210)">
            <circle cx="0" cy="0" r="165" fill="#A78BFA" opacity="0.12"/>
            <circle cx="0" cy="0" r="120" fill="#E2E8F0" opacity="0.24"/>
            <circle cx="-28" cy="-22" r="22" fill="#94A3B8" opacity="0.22"/>
            <circle cx="35" cy="28" r="30" fill="#94A3B8" opacity="0.20"/>
            <circle cx="-18" cy="48" r="15" fill="#94A3B8" opacity="0.22"/>
          </g>
          <!-- 8 Lunar Phases Diagram Across Top Center -->
          <g transform="translate(720, 68)" opacity="0.28" fill="#E2E8F0">
            <circle cx="-210" cy="0" r="10" fill="none" stroke="#E2E8F0" stroke-width="1.5"/>
            <circle cx="-140" cy="0" r="10"/>
            <circle cx="-70" cy="0" r="12"/>
            <circle cx="0" cy="0" r="15" fill="#F8FAFC"/>
            <circle cx="70" cy="0" r="12"/>
            <circle cx="140" cy="0" r="10"/>
            <circle cx="210" cy="0" r="10" fill="none" stroke="#E2E8F0" stroke-width="1.5"/>
          </g>
          <!-- Misty Moonlit Mountain Silhouette -->
          <polygon points="0,900 0,740 240,620 490,760 780,590 1090,750 1320,640 1440,720 1440,900" fill="#0B0E17" opacity="0.55"/>
        </svg>
      `;

    case 'anime':
      // Kyoto Sakura Sunset, Mount Fuji, Red Torii Gate & Overhanging Cherry Blossom Branches
      return `
        <svg viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" width="100%" height="100%">
          <!-- Giant Golden-Pink Sunset Sun -->
          <circle cx="720" cy="560" r="185" fill="#FF758F" opacity="0.18"/>
          <!-- Mount Fuji Silhouette -->
          <path d="M360 900 L655 560 L785 560 L1080 900 Z" fill="#9E6B7E" opacity="0.20"/>
          <path d="M655 560 L785 560 L825 635 L765 615 L720 645 L675 615 L615 635 Z" fill="#FFFFFF" opacity="0.45"/>
          <!-- Iconic Japanese Torii Gate Silhouette (Left Horizon) -->
          <g transform="translate(150, 620)" fill="#E63946" opacity="0.28">
            <path d="M-20 0 Q90 -18 200 0 L192 16 Q90 2 -12 16 Z"/>
            <rect x="0" y="34" width="180" height="12"/>
            <rect x="24" y="12" width="16" height="190"/>
            <rect x="140" y="12" width="16" height="190"/>
          </g>
          <!-- Sakura Cherry Blossom Branches (Top Corners) -->
          <path d="M0 40 Q140 80 280 35 Q350 20 410 55" stroke="#6D3B4E" stroke-width="5" fill="none" opacity="0.38"/>
          <circle cx="140" cy="60" r="24" fill="#FF8FA3" opacity="0.35"/>
          <circle cx="260" cy="42" r="28" fill="#FFB3C1" opacity="0.4"/>
          <circle cx="380" cy="50" r="22" fill="#FF758F" opacity="0.35"/>
        </svg>
      `;

    case 'coffee':
      // Cozy Rainy Cafe, Hanging Edison Pendant Lamps & Giant Espresso Cup Emblem
      return `
        <svg viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" width="100%" height="100%">
          <!-- Hanging Cafe Pendant Lamps -->
          <g opacity="0.32" stroke="#6F4E37" stroke-width="3">
            <line x1="220" y1="0" x2="220" y2="140"/>
            <path d="M185 140 Q220 110 255 140 Z" fill="#6F4E37"/>
            <circle cx="220" cy="152" r="14" fill="#F4A261" stroke="none"/>
            <line x1="1220" y1="0" x2="1220" y2="165"/>
            <path d="M1185 165 Q1220 135 1255 165 Z" fill="#6F4E37"/>
            <circle cx="1220" cy="177" r="14" fill="#F4A261" stroke="none"/>
          </g>
          <!-- Giant Steaming Espresso Cup Watermark -->
          <g transform="translate(720, 520)" opacity="0.11" fill="#6F4E37">
            <path d="M-110 -40 L110 -40 C110 65 65 110 0 110 C-65 110 -110 65 -110 -40 Z"/>
            <path d="M105 -20 C155 -20 155 55 100 55" fill="none" stroke="#6F4E37" stroke-width="18"/>
            <rect x="-150" y="115" width="300" height="18" rx="9"/>
            <path d="M-35 -65 Q-55 -115 -20 -155" fill="none" stroke="#6F4E37" stroke-width="10" stroke-linecap="round"/>
            <path d="M25 -65 Q45 -115 10 -155" fill="none" stroke="#6F4E37" stroke-width="10" stroke-linecap="round"/>
          </g>
        </svg>
      `;

    case 'ocean':
      // Underwater Sunbeams, Coral Reef, Swaying Kelp & Whale Silhouette
      return `
        <svg viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" width="100%" height="100%">
          <!-- Piercing Underwater Sunbeams -->
          <polygon points="200,0 380,0 620,900 320,900" fill="#00B4D8" opacity="0.08"/>
          <polygon points="750,0 960,0 1240,900 920,900" fill="#00B4D8" opacity="0.08"/>
          <!-- Swaying Kelp & Coral Reef Silhouette at Bottom -->
          <g opacity="0.28" fill="#007791">
            <path d="M80 900 Q50 760 95 650 Q125 560 85 470 Q115 570 115 660 Q90 770 120 900 Z"/>
            <path d="M150 900 Q180 780 140 690 Q115 610 155 540 Q145 630 170 700 Q200 790 175 900 Z" fill="#FF7F51"/>
            <path d="M1290 900 Q1260 760 1305 640 Q1335 550 1295 460 Q1325 560 1325 650 Q1300 770 1330 900 Z"/>
          </g>
        </svg>
      `;

    case 'autumn':
      // Maple Forest Framing & Cozy Harvest Bonfire
      return `
        <svg viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" width="100%" height="100%">
          <circle cx="180" cy="120" r="140" fill="#C85A32" opacity="0.16"/>
          <circle cx="310" cy="80" r="120" fill="#E09F3E" opacity="0.18"/>
          <circle cx="1260" cy="120" r="140" fill="#C85A32" opacity="0.16"/>
          <circle cx="1130" cy="80" r="120" fill="#E09F3E" opacity="0.18"/>
          <path d="M0 840 Q360 790 720 835 T1440 825 L1440 900 L0 900 Z" fill="#7F4F24" opacity="0.18"/>
        </svg>
      `;

    case 'nordic':
      // Northern Lights Aurora Ribbons, Fjord Peaks & Snow-Covered Pine Forest
      return `
        <svg viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" width="100%" height="100%">
          <!-- Aurora Borealis Wave -->
          <path d="M0 160 Q360 60 720 180 T1440 130 L1440 240 Q1080 310 720 220 T0 260 Z" fill="#3D6B58" opacity="0.12"/>
          <!-- Nordic Pine Silhouette Row -->
          <g fill="#3D6B58" opacity="0.22">
            <polygon points="90,900 130,740 170,900"/>
            <polygon points="150,900 195,710 240,900"/>
            <polygon points="1220,900 1265,720 1310,900"/>
            <polygon points="1290,900 1330,750 1370,900"/>
          </g>
        </svg>
      `;

    default:
      return '';
  }
}

class AmbientThemeEngine {
  constructor() {
    this.backdropEl = null;
    this.canvas = null;
    this.ctx = null;
    this.particles = [];
    this.theme = 'plants';
    this.enabled = true;
    this.animId = null;
  }

  init() {
    if (!this.backdropEl) {
      this.backdropEl = document.getElementById('theme-backdrop');
      if (!this.backdropEl) {
        this.backdropEl = document.createElement('div');
        this.backdropEl.id = 'theme-backdrop';
        this.backdropEl.style.cssText =
          'position:fixed;inset:0;width:100%;height:100%;pointer-events:none;z-index:0;overflow:hidden;';
        document.body.prepend(this.backdropEl);
      }
    }

    if (!this.canvas) {
      this.canvas = document.getElementById('ambient-canvas');
      if (!this.canvas) {
        this.canvas = document.createElement('canvas');
        this.canvas.id = 'ambient-canvas';
        this.canvas.style.cssText =
          'position:fixed;inset:0;width:100%;height:100%;pointer-events:none;z-index:1;opacity:0.82;';
        document.body.prepend(this.canvas);
      }
      this.ctx = this.canvas.getContext('2d');
      window.addEventListener('resize', () => this.resize());
      this.resize();
    }
  }

  resize() {
    if (!this.canvas) return;
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  setConfig(theme, enabled) {
    const cleanTheme = THEME_AMBIENT_CONFIG[theme] ? theme : 'plants';
    const themeChanged = this.theme !== cleanTheme;
    this.theme = cleanTheme;
    this.enabled = enabled !== false;
    this.init();

    // Always render the theme's scenic SVG backdrop
    if (this.backdropEl) {
      this.backdropEl.innerHTML = buildThemeBackdropSvg(this.theme);
    }

    if (!this.enabled) {
      this.stop();
      if (this.ctx && this.canvas) {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      }
      return;
    }

    if (themeChanged || this.particles.length === 0) {
      this.rebuildParticles();
    }
    this.start();
  }

  rebuildParticles() {
    if (!this.canvas) return;
    const cfg = THEME_AMBIENT_CONFIG[this.theme] || THEME_AMBIENT_CONFIG.plants;
    const w = this.canvas.width || window.innerWidth;
    const h = this.canvas.height || window.innerHeight;
    this.particles = [];

    for (let i = 0; i < cfg.count; i++) {
      this.particles.push(this._makeParticle(cfg, w, h, i));
    }
  }

  _makeParticle(cfg, w, h, index = 0) {
    // Cycle evenly through props so all 9 Straw Hat Crew members + Jolly Roger + Hat appear!
    const prop = cfg.props[index % cfg.props.length];
    const color = cfg.colors[index % cfg.colors.length];
    const size = cfg.minSize + Math.random() * (cfg.maxSize - cfg.minSize);

    // Distribute nicely across the screen
    const x = ((index + 0.5) / cfg.count) * w + (Math.random() - 0.5) * 90;
    const y = Math.random() * h;

    return {
      x: Math.max(20, Math.min(w - 20, x)),
      y,
      size,
      prop,
      color,
      speedY:
        cfg.direction === 'up'
          ? -(cfg.speed * (0.65 + Math.random() * 0.7))
          : cfg.direction === 'twinkle' || cfg.direction === 'float'
          ? (Math.random() - 0.5) * cfg.speed * 1.1
          : cfg.speed * (0.65 + Math.random() * 0.7),
      speedX:
        cfg.direction === 'diagonal'
          ? cfg.speed * (0.45 + Math.random() * 0.55)
          : (Math.random() - 0.5) * 0.45,
      rotation: (Math.random() - 0.5) * 0.4,
      vRot: (Math.random() - 0.5) * 0.006,
      phase: Math.random() * Math.PI * 2,
      phaseSpeed: 0.02 + Math.random() * 0.025,
      baseAlpha: this.theme === 'onepiece' ? 0.78 : 0.48 + Math.random() * 0.34
    };
  }

  start() {
    if (!this.animId && this.enabled) {
      this.loop();
    }
  }

  stop() {
    if (this.animId) {
      cancelAnimationFrame(this.animId);
      this.animId = null;
    }
  }

  /**
   * Draws a Straw Hat Crew member badge or One Piece prop at (0,0) with radius `s`
   */
  _drawOnePieceProp(ctx, prop, s) {
    if (prop === 'strawhat') {
      // Luffy's Iconic Straw Hat
      ctx.fillStyle = '#F4B942';
      ctx.beginPath();
      ctx.ellipse(0, s * 0.2, s * 1.35, s * 0.34, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(0, s * 0.15, s * 0.82, Math.PI, 0);
      ctx.fill();
      ctx.fillStyle = '#D62828';
      ctx.fillRect(-s * 0.8, s * 0.02, s * 1.6, s * 0.2);
      return;
    }

    if (prop === 'jollyroger') {
      // Straw Hat Jolly Roger (Crossbones + Skull + Straw Hat)
      ctx.strokeStyle = '#FFFFFF';
      ctx.lineWidth = s * 0.22;
      ctx.lineCap = 'round';
      ctx.beginPath();
      ctx.moveTo(-s * 1.05, -s * 0.85);
      ctx.lineTo(s * 1.05, s * 0.85);
      ctx.moveTo(s * 1.05, -s * 0.85);
      ctx.lineTo(-s * 1.05, s * 0.85);
      ctx.stroke();

      // Skull
      ctx.fillStyle = '#FFFFFF';
      ctx.beginPath();
      ctx.arc(0, -s * 0.08, s * 0.68, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillRect(-s * 0.32, s * 0.35, s * 0.64, s * 0.42);

      // Eyes
      ctx.fillStyle = '#1E1B18';
      ctx.beginPath();
      ctx.arc(-s * 0.24, -s * 0.05, s * 0.16, 0, Math.PI * 2);
      ctx.arc(s * 0.24, -s * 0.05, s * 0.16, 0, Math.PI * 2);
      ctx.fill();

      // Straw Hat Dome & Brim
      ctx.fillStyle = '#F77F00';
      ctx.beginPath();
      ctx.arc(0, -s * 0.24, s * 0.68, Math.PI, 0);
      ctx.fill();
      ctx.fillStyle = '#D62828';
      ctx.fillRect(-s * 0.66, -s * 0.36, s * 1.32, s * 0.14);
      ctx.fillStyle = '#FCBF49';
      ctx.beginPath();
      ctx.ellipse(0, -s * 0.24, s * 1.1, s * 0.16, 0, 0, Math.PI * 2);
      ctx.fill();
      return;
    }

    if (prop === 'devilfruit') {
      // Gomu Gomu no Mi Purple Devil Fruit
      ctx.fillStyle = '#7209B7';
      ctx.beginPath();
      ctx.arc(0, s * 0.1, s * 0.75, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = '#C77DFF';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(-s * 0.25, 0, s * 0.22, 0, Math.PI * 1.5);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(s * 0.25, s * 0.2, s * 0.22, 0, Math.PI * 1.5);
      ctx.stroke();
      ctx.strokeStyle = '#52B788';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(0, -s * 0.65);
      ctx.quadraticCurveTo(s * 0.3, -s * 1.0, s * 0.45, -s * 0.75);
      ctx.stroke();
      return;
    }

    // All 9 Straw Hat Crew Member Portrait Coins!
    const crewMap = {
      luffy: { name: 'LUFFY', hair: '#1A1A1A', accent: '#D62828', hat: '#FCBF49', skin: '#FCD5B5' },
      zoro: { name: 'ZORO', hair: '#2DC653', accent: '#1B4332', hat: null, skin: '#FCD5B5' },
      nami: { name: 'NAMI', hair: '#F77F00', accent: '#0096C7', hat: null, skin: '#FFE5D9' },
      usopp: { name: 'USOPP', hair: '#1F1F1F', accent: '#B5838D', hat: '#DDA15E', skin: '#F4C29F' },
      sanji: { name: 'SANJI', hair: '#FFD166', accent: '#1D3557', hat: null, skin: '#FCD5B5' },
      chopper: { name: 'CHOPPER', hair: '#9C6644', accent: '#FF4D6D', hat: '#FF758F', skin: '#C68B59' },
      robin: { name: 'ROBIN', hair: '#1D1E2C', accent: '#9B5DE5', hat: null, skin: '#FFE5D9' },
      franky: { name: 'FRANKY', hair: '#00BBF9', accent: '#F15BB5', hat: null, skin: '#FCD5B5' },
      brook: { name: 'BROOK', hair: '#141414', accent: '#FEE440', hat: '#F59E0B', skin: '#F8F9FA' }
    };

    const c = crewMap[prop] || crewMap.luffy;

    // Wanted-Token Gold/Crimson Medallion Ring
    ctx.fillStyle = '#FFF8EB';
    ctx.strokeStyle = c.accent;
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.arc(0, 0, s * 0.95, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    // Hair / Afro Back
    ctx.fillStyle = c.hair;
    ctx.beginPath();
    ctx.arc(0, -s * 0.12, s * 0.62, 0, Math.PI * 2);
    ctx.fill();

    // Face
    ctx.fillStyle = c.skin;
    ctx.beginPath();
    ctx.arc(0, 0, s * 0.48, 0, Math.PI * 2);
    ctx.fill();

    // Crew-specific signature features
    if (prop === 'luffy') {
      // Straw hat top + red band + left eye scar
      ctx.fillStyle = '#FCBF49';
      ctx.beginPath();
      ctx.arc(0, -s * 0.2, s * 0.56, Math.PI, 0);
      ctx.fill();
      ctx.fillStyle = '#D62828';
      ctx.fillRect(-s * 0.55, -s * 0.28, s * 1.1, s * 0.12);
      ctx.strokeStyle = '#5C4022';
      ctx.lineWidth = 1.3;
      ctx.beginPath();
      ctx.moveTo(-s * 0.28, s * 0.12);
      ctx.lineTo(-s * 0.12, s * 0.15);
      ctx.stroke();
    } else if (prop === 'zoro') {
      // Spiky green hair + scar over left eye
      ctx.strokeStyle = '#1B4332';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(-s * 0.18, -s * 0.2);
      ctx.lineTo(-s * 0.18, s * 0.15);
      ctx.stroke();
    } else if (prop === 'sanji') {
      // Blonde hair covering one eye + curly eyebrow
      ctx.fillStyle = '#FFD166';
      ctx.beginPath();
      ctx.arc(-s * 0.16, -s * 0.08, s * 0.34, Math.PI * 0.7, Math.PI * 1.9);
      ctx.fill();
      ctx.strokeStyle = '#1D1E2C';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(s * 0.18, -s * 0.12, s * 0.1, 0, Math.PI * 1.7);
      ctx.stroke();
    } else if (prop === 'chopper') {
      // Pink hat with white X + reindeer antlers + blue nose
      ctx.fillStyle = '#FF758F';
      ctx.beginPath();
      ctx.arc(0, -s * 0.22, s * 0.55, Math.PI, 0);
      ctx.fill();
      ctx.strokeStyle = '#FFFFFF';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(-s * 0.12, -s * 0.55);
      ctx.lineTo(s * 0.12, -s * 0.32);
      ctx.moveTo(s * 0.12, -s * 0.55);
      ctx.lineTo(-s * 0.12, -s * 0.32);
      ctx.stroke();
      ctx.fillStyle = '#0077B6';
      ctx.beginPath();
      ctx.arc(0, s * 0.04, s * 0.09, 0, Math.PI * 2);
      ctx.fill();
    } else if (prop === 'usopp') {
      // Sniper goggles on forehead + long nose
      ctx.fillStyle = '#00B4D8';
      ctx.beginPath();
      ctx.arc(-s * 0.16, -s * 0.28, s * 0.12, 0, Math.PI * 2);
      ctx.arc(s * 0.16, -s * 0.28, s * 0.12, 0, Math.PI * 2);
      ctx.fill();
    } else if (prop === 'franky') {
      // Star sunglasses
      ctx.fillStyle = '#00BBF9';
      ctx.fillRect(-s * 0.32, -s * 0.14, s * 0.64, s * 0.15);
    } else if (prop === 'brook') {
      // Giant Afro + Golden Crown
      ctx.fillStyle = '#FEE440';
      ctx.fillRect(-s * 0.25, -s * 0.68, s * 0.5, s * 0.16);
    }

    // Eyes & Smile
    ctx.fillStyle = '#1D1E2C';
    ctx.beginPath();
    ctx.arc(-s * 0.16, -s * 0.04, s * 0.06, 0, Math.PI * 2);
    ctx.arc(s * 0.16, -s * 0.04, s * 0.06, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#1D1E2C';
    ctx.lineWidth = 1.4;
    ctx.beginPath();
    ctx.arc(0, s * 0.08, s * 0.16, 0.15, Math.PI - 0.15);
    ctx.stroke();

    // Name Tag Ribbon at Bottom of Medallion
    ctx.fillStyle = c.accent;
    ctx.fillRect(-s * 0.78, s * 0.56, s * 1.56, s * 0.36);
    ctx.fillStyle = '#FFFFFF';
    ctx.font = `bold ${Math.max(8, Math.round(s * 0.27))}px sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(c.name, 0, s * 0.74);
  }

  loop() {
    if (!this.enabled || !this.ctx || !this.canvas) {
      this.animId = null;
      return;
    }
    const w = this.canvas.width;
    const h = this.canvas.height;
    const cfg = THEME_AMBIENT_CONFIG[this.theme] || THEME_AMBIENT_CONFIG.plants;

    this.ctx.clearRect(0, 0, w, h);

    for (let i = 0; i < this.particles.length; i++) {
      const p = this.particles[i];
      p.phase += p.phaseSpeed;
      p.x += p.speedX + Math.sin(p.phase) * 0.35;
      p.y += p.speedY;
      p.rotation += p.vRot;

      if (p.y > h + 45) {
        p.y = -35;
        p.x = Math.random() * w;
      } else if (p.y < -45) {
        p.y = h + 35;
        p.x = Math.random() * w;
      }
      if (p.x > w + 45) p.x = -35;
      if (p.x < -45) p.x = w + 35;

      const alpha =
        cfg.direction === 'twinkle'
          ? p.baseAlpha * (0.4 + 0.6 * Math.abs(Math.sin(p.phase)))
          : p.baseAlpha;

      const s = p.size;
      const ctx = this.ctx;
      ctx.save();
      ctx.globalAlpha = Math.max(0.12, Math.min(0.92, alpha));
      ctx.translate(p.x, p.y);

      // Keep One Piece crew faces mostly upright with a gentle bob
      if (this.theme === 'onepiece' && p.prop !== 'strawhat') {
        ctx.rotate(Math.sin(p.phase) * 0.12);
        this._drawOnePieceProp(ctx, p.prop, s);
        ctx.restore();
        continue;
      }

      ctx.rotate(p.rotation);
      ctx.fillStyle = p.color;
      ctx.strokeStyle = p.color;

      if (p.prop === 'monstera' || p.prop === 'palm_leaf' || p.prop === 'jungle_leaf') {
        // Lush Split Jungle Leaf with Center Vein
        ctx.beginPath();
        ctx.moveTo(0, -s);
        ctx.bezierCurveTo(s * 0.95, -s * 0.5, s * 0.9, s * 0.6, 0, s);
        ctx.bezierCurveTo(-s * 0.9, s * 0.6, -s * 0.95, -s * 0.5, 0, -s);
        ctx.fill();
        ctx.strokeStyle = 'rgba(15, 30, 22, 0.45)';
        ctx.lineWidth = 1.4;
        ctx.beginPath();
        ctx.moveTo(0, -s * 0.8);
        ctx.lineTo(0, s * 0.8);
        ctx.stroke();
      } else if (p.prop === 'hibiscus' || p.prop === 'sakura_flower') {
        // 5-Petal Tropical / Sakura Flower
        for (let k = 0; k < 5; k++) {
          const a = (k * Math.PI * 2) / 5;
          ctx.beginPath();
          ctx.arc(Math.cos(a) * s * 0.42, Math.sin(a) * s * 0.42, s * 0.36, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.fillStyle = '#FFF3B0';
        ctx.beginPath();
        ctx.arc(0, 0, s * 0.22, 0, Math.PI * 2);
        ctx.fill();
      } else if (p.prop === 'flare_star') {
        // Shining Night Sky Star with Cross Lens-Flare
        ctx.beginPath();
        for (let k = 0; k < 4; k++) {
          const a = (k * Math.PI) / 2;
          ctx.lineTo(Math.cos(a) * s, Math.sin(a) * s);
          const a2 = a + Math.PI / 4;
          ctx.lineTo(Math.cos(a2) * (s * 0.22), Math.sin(a2) * (s * 0.22));
        }
        ctx.closePath();
        ctx.fill();
      } else if (p.prop === 'shooting_star' || p.prop === 'comet_prop') {
        // Shooting Star with Glowing Tail
        ctx.lineWidth = 2.2;
        ctx.beginPath();
        ctx.moveTo(-s * 1.8, -s * 0.6);
        ctx.lineTo(0, 0);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(0, 0, s * 0.28, 0, Math.PI * 2);
        ctx.fill();
      } else if (p.prop === 'saturn_prop' || p.prop === 'jupiter_prop' || p.prop === 'earth_prop' || p.prop === 'mars_prop') {
        // Miniature Ringed Solar System Planet
        ctx.beginPath();
        ctx.arc(0, 0, s * 0.55, 0, Math.PI * 2);
        ctx.fill();
        if (p.prop === 'saturn_prop' || p.prop === 'jupiter_prop') {
          ctx.lineWidth = 2.2;
          ctx.strokeStyle = '#F2CC8F';
          ctx.beginPath();
          ctx.ellipse(0, 0, s * 1.15, s * 0.3, 0.25, 0, Math.PI * 2);
          ctx.stroke();
        }
      } else if (p.prop === 'crescent_prop') {
        // Glowing Crescent Moon
        ctx.beginPath();
        ctx.arc(0, 0, s * 0.65, 0.3, Math.PI * 1.7);
        ctx.arc(s * 0.25, -s * 0.1, s * 0.52, Math.PI * 1.65, 0.35, true);
        ctx.closePath();
        ctx.fill();
      } else if (p.prop === 'cyber_drone' || p.prop === 'neon_hex' || p.prop === 'cyber_shard' || p.prop === 'neon_bolt') {
        // Cyberpunk Hexagon / Flying Neon Spinner
        ctx.lineWidth = 2;
        ctx.beginPath();
        for (let k = 0; k < 6; k++) {
          const a = (k * Math.PI) / 3;
          const method = k === 0 ? 'moveTo' : 'lineTo';
          ctx[method](Math.cos(a) * s * 0.65, Math.sin(a) * s * 0.65);
        }
        ctx.closePath();
        ctx.stroke();
        ctx.fillRect(-s * 0.2, -s * 0.2, s * 0.4, s * 0.4);
      } else if (p.prop === 'coffee_cup' || p.prop === 'coffee_bean') {
        // Roasted Coffee Bean with Center Crease
        ctx.beginPath();
        ctx.ellipse(0, 0, s * 0.55, s * 0.38, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = '#2A1B12';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(-s * 0.42, 0);
        ctx.quadraticCurveTo(0, s * 0.14, s * 0.42, 0);
        ctx.stroke();
      } else if (p.prop === 'jellyfish') {
        // Bioluminescent Jellyfish
        ctx.beginPath();
        ctx.arc(0, 0, s * 0.55, Math.PI, 0);
        ctx.fill();
        ctx.lineWidth = 1.4;
        for (let t = -1; t <= 1; t++) {
          ctx.beginPath();
          ctx.moveTo(t * s * 0.25, 0);
          ctx.quadraticCurveTo(t * s * 0.35, s * 0.4, t * s * 0.2, s * 0.75);
          ctx.stroke();
        }
      } else if (p.prop === 'crystal_snow') {
        // 6-Branch Nordic Snowflake
        ctx.lineWidth = 1.6;
        for (let k = 0; k < 3; k++) {
          const a = (k * Math.PI) / 3;
          ctx.beginPath();
          ctx.moveTo(-Math.cos(a) * s * 0.7, -Math.sin(a) * s * 0.7);
          ctx.lineTo(Math.cos(a) * s * 0.7, Math.sin(a) * s * 0.7);
          ctx.stroke();
        }
      } else {
        // Petal / Leaf fallback
        ctx.beginPath();
        ctx.moveTo(0, -s * 0.7);
        ctx.quadraticCurveTo(s * 0.65, 0, 0, s * 0.7);
        ctx.quadraticCurveTo(-s * 0.65, 0, 0, -s * 0.7);
        ctx.fill();
      }

      ctx.restore();
    }

    this.animId = requestAnimationFrame(() => this.loop());
  }
}

class ConfettiEngine {
  constructor() {
    this.canvas = null;
    this.ctx = null;
    this.particles = [];
    this.animId = null;
    this.palette = [
      '#52B788',
      '#7C5841',
      '#D97757',
      '#F4D35E',
      '#74C69D',
      '#F2A68D',
      '#A3C9A8'
    ];
  }

  ensureCanvas() {
    if (!this.canvas) {
      this.canvas = document.getElementById('confetti-canvas');
      if (!this.canvas) {
        this.canvas = document.createElement('canvas');
        this.canvas.id = 'confetti-canvas';
        this.canvas.style.cssText =
          'position:fixed;inset:0;width:100%;height:100%;pointer-events:none;z-index:9999;';
        document.body.appendChild(this.canvas);
      }
      this.ctx = this.canvas.getContext('2d');
      window.addEventListener('resize', () => this.resize());
      this.resize();
    }
  }

  resize() {
    if (!this.canvas) return;
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  burstCelebration() {
    this.ensureCanvas();
    this.resize();
    const w = this.canvas.width;
    const h = this.canvas.height;

    for (let i = 0; i < 135; i++) {
      const originX = i % 3 === 0 ? w * 0.2 : i % 3 === 1 ? w * 0.8 : w * 0.5;
      const originY = i % 3 === 2 ? h * 0.18 : h * 0.65;
      const angle = -Math.PI / 2 + (Math.random() - 0.5) * 1.35;
      const speed = 7 + Math.random() * 13;
      const shapes = ['leaf', 'ribbon', 'circle'];
      this.particles.push({
        x: originX + (Math.random() - 0.5) * 90,
        y: originY,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 3,
        size: 6 + Math.random() * 8,
        color: this.palette[Math.floor(Math.random() * this.palette.length)],
        shape: shapes[i % shapes.length],
        rotation: Math.random() * Math.PI * 2,
        vRot: (Math.random() - 0.5) * 0.16,
        wobble: Math.random() * 10,
        wobbleSpeed: 0.05 + Math.random() * 0.07,
        gravity: 0.18 + Math.random() * 0.08,
        drag: 0.985,
        opacity: 1,
        decay: 0.005 + Math.random() * 0.004
      });
    }

    if (!this.animId) {
      this.loop();
    }
  }

  miniSparkle(x, y) {
    this.ensureCanvas();
    for (let i = 0; i < 18; i++) {
      const angle = (Math.PI * 2 * i) / 18 + (Math.random() - 0.5) * 0.3;
      const speed = 2 + Math.random() * 5.5;
      this.particles.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 1.5,
        size: 4 + Math.random() * 4,
        color: this.palette[Math.floor(Math.random() * this.palette.length)],
        shape: i % 2 === 0 ? 'leaf' : 'circle',
        rotation: Math.random() * Math.PI * 2,
        vRot: (Math.random() - 0.5) * 0.14,
        wobble: Math.random() * 6,
        wobbleSpeed: 0.08,
        gravity: 0.12,
        drag: 0.96,
        opacity: 1,
        decay: 0.022
      });
    }
    if (!this.animId) {
      this.loop();
    }
  }

  loop() {
    if (!this.ctx || !this.canvas) return;
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.vx *= p.drag;
      p.vy = p.vy * p.drag + p.gravity;
      p.wobble += p.wobbleSpeed;
      p.x += p.vx + Math.sin(p.wobble) * 0.9;
      p.y += p.vy;
      p.rotation += p.vRot;
      p.opacity -= p.decay;

      if (p.opacity <= 0 || p.y > this.canvas.height + 40) {
        this.particles.splice(i, 1);
        continue;
      }

      this.ctx.save();
      this.ctx.globalAlpha = Math.max(0, p.opacity);
      this.ctx.translate(p.x, p.y);
      this.ctx.rotate(p.rotation);
      this.ctx.fillStyle = p.color;

      if (p.shape === 'leaf') {
        this.ctx.beginPath();
        this.ctx.moveTo(0, -p.size);
        this.ctx.quadraticCurveTo(p.size * 0.85, 0, 0, p.size);
        this.ctx.quadraticCurveTo(-p.size * 0.85, 0, 0, -p.size);
        this.ctx.fill();
      } else if (p.shape === 'circle') {
        this.ctx.beginPath();
        this.ctx.arc(0, 0, p.size * 0.5, 0, Math.PI * 2);
        this.ctx.fill();
      } else {
        this.ctx.fillRect(-p.size * 0.6, -p.size * 0.35, p.size * 1.2, p.size * 0.7);
      }

      this.ctx.restore();
    }

    if (this.particles.length > 0) {
      this.animId = requestAnimationFrame(() => this.loop());
    } else {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.animId = null;
    }
  }
}

window.confettiEngine = new ConfettiEngine();
window.ambientEngine = new AmbientThemeEngine();
