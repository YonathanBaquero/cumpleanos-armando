/**
 * ============================================================================
 * CUMPLEAÑOS DE ARMANDO - HOSPITAL DE LA FELICIDAD 🏥🎂🩺
 * Lógica interactiva: Puertas 3D, Sonidos Médicos, Confeti y Receta
 * ============================================================================
 */

// ========================================================
// 1. CONFIGURACIÓN DE LAS FOTOS Y CONSULTORIOS (14 SALAS)
// ========================================================
const ROOMS_DATA = [
  {
    id: 1,
    number: "101",
    specialty: "Cardiología de Recuerdos 🫀",
    tag: "Momento Inolvidable ❤️",
    title: "Un Corazón Lleno de Pasión",
    desc: "Para alguien que pone el alma en todo lo que hace, curando tristezas con una sonrisa y regalando siempre lo mejor de sí. ¡Gracias por cada momento compartido, José!",
    image: "fotos/foto1.jpg",
    chart: [
      { label: "Diagnóstico", val: "Gran ser humano" },
      { label: "Estado", val: "100% admirado" }
    ]
  },
  {
    id: 2,
    number: "102",
    specialty: "Traumatología & Risas 🩺",
    tag: "Dosis de Alegría 😄",
    title: "La Risa es la Mejor Medicina",
    desc: "Cualquier día difícil se alivia con tus ocurrencias, tus buenas charlas y esa energía contagiosa. ¡Que nunca te falten motivos para sonreír como hoy!",
    image: "fotos/foto2.jpg",
    chart: [
      { label: "Prescripción", val: "Risas sin límite" },
      { label: "Efecto", val: "Felicidad garantizada" }
    ]
  },
  {
    id: 3,
    number: "103",
    specialty: "Quirófano: Operación Éxito 👨‍⚕️",
    tag: "Logros & Orgullo 🏆",
    title: "Superando Cada Desafío",
    desc: "Cada meta que te propones la alcanzas con dedicación, temple y sabiduría. Es un inmenso orgullo verte crecer, vencer retos y alcanzar grandes cimas.",
    image: "fotos/foto3.jpg",
    chart: [
      { label: "Procedimiento", val: "Victoria total" },
      { label: "Pronóstico", val: "Éxito infinito" }
    ]
  },
  {
    id: 4,
    number: "104",
    specialty: "Urgencias de Abrazos 🚑",
    tag: "Amor Incondicional 🫂",
    title: "Siempre a Tu Lado",
    desc: "En las buenas y en las no tan buenas, aquí tienes un equipo que te quiere, te apoya y celebra cada año de tu valiosa existencia. ¡Te queremos mucho, José!",
    image: "fotos/foto4.jpg",
    chart: [
      { label: "Tratamiento", val: "Dosis masiva de abrazos" },
      { label: "Frecuencia", val: "Por siempre" }
    ]
  },
  {
    id: 5,
    number: "105",
    specialty: "Pediatría & Juventud Eterna 🧸",
    tag: "Espíritu Alegre ✨",
    title: "El Alma de la Fiesta",
    desc: "Conservar la alegría, el asombro y las ganas de disfrutar de la vida es tu mayor talento. ¡Que tu niño interior siga celebrando la vida con emoción!",
    image: "fotos/foto5.jpg",
    chart: [
      { label: "Vitalidad", val: "Inagotable" },
      { label: "Evolución", val: "Brillante" }
    ]
  },
  {
    id: 6,
    number: "106",
    specialty: "Neurología de Grandes Ideas 🧠",
    tag: "Sabiduría & Enfoque 💡",
    title: "Mente Brillante",
    desc: "Tu capacidad para aconsejar, pensar con serenidad y encontrar soluciones donde otros ven problemas te hace un profesional y amigo excepcional.",
    image: "fotos/foto6.jpg",
    chart: [
      { label: "Capacidad", val: "Extraordinaria" },
      { label: "Consejo", val: "Confiar siempre en ti" }
    ]
  },
  {
    id: 7,
    number: "107",
    specialty: "Laboratorio de Recuerdos 🔬",
    tag: "Momentos Únicos 📸",
    title: "La Fórmula de la Amistad",
    desc: "Analizando cada recuerdo, la muestra arroja un 100% de lealtad, risas compartidas y momentos que se guardan en el corazón para siempre.",
    image: "fotos/foto7.jpg",
    chart: [
      { label: "Resultado", val: "Amistad pura" },
      { label: "Pureza", val: "100%" }
    ]
  },
  {
    id: 8,
    number: "108",
    specialty: "Sala de Terapia & Aventuras ⛰️",
    tag: "Caminos Recorridos 🗺️",
    title: "Nuevos Horizontes",
    desc: "Que cada viaje, cada paso y cada nueva experiencia te sigan llenando de anécdotas inolvidables. ¡La vida es tu mejor paciente para llenar de vida!",
    image: "fotos/foto8.jpg",
    chart: [
      { label: "Destino", val: "Nuevas victorias" },
      { label: "Estado", val: "Listo para triunfar" }
    ]
  },
  {
    id: 9,
    number: "109",
    specialty: "Radiología: Lo Esencial 🩻",
    tag: "Transparencia & Bondad 💎",
    title: "Lo que Hay en tu Interior",
    desc: "No hace falta una radiografía para ver el corazón tan grande que tienes. Eres una persona noble, transparente y con un valor incalculable.",
    image: "fotos/foto9.jpg",
    chart: [
      { label: "Hallazgo", val: "Corazón gigante" },
      { label: "Calidad", val: "Insuperable" }
    ]
  },
  {
    id: 10,
    number: "110",
    specialty: "Nutrición & Brindis 🍷",
    tag: "¡A Festejar! 🥂",
    title: "Brindando por tu Salud",
    desc: "Hoy se vale celebrar con todo: buena comida, brindis por tus éxitos y el cariño de quienes te admiramos profundamente. ¡Salud por ti, José!",
    image: "fotos/foto10.jpg",
    chart: [
      { label: "Dieta de hoy", val: "Pastel y alegría" },
      { label: "Calorías", val: "Pura felicidad" }
    ]
  },
  {
    id: 11,
    number: "111",
    specialty: "Oftalmología: Mirando al Futuro 👓",
    tag: "Grandes Proyectos 🚀",
    title: "Una Visión Triunfadora",
    desc: "Que tu mirada siempre esté puesta en lo alto, porque tienes todo el potencial, la disciplina y el talento para llegar tan lejos como sueñes.",
    image: "fotos/foto11.jpg",
    chart: [
      { label: "Agudeza", val: "20/20 hacia el éxito" },
      { label: "Perspectiva", val: "Imparable" }
    ]
  },
  {
    id: 12,
    number: "112",
    specialty: "Cuidados Intensivos de Cariño 🏥",
    tag: "Equipo Médico Unido 🩺",
    title: "El Orgullo de la Familia",
    desc: "Tenerte en nuestras vidas es un regalo diario. Tu dedicación, tu esfuerzo y tu forma de ser llenan de orgullo a toda la familia y a tus amigos.",
    image: "fotos/foto12.jpg",
    chart: [
      { label: "Apoyo", val: "Incondicional" },
      { label: "Amor", val: "Máxima potencia" }
    ]
  },
  {
    id: 13,
    number: "113",
    specialty: "Área VIP: Paciente Distinguido ⭐",
    tag: "Caballero Ejemplar 👔",
    title: "Una Persona Inolvidable",
    desc: "Porque personas como tú dejan una huella imborrable en el corazón de todos los que tienen la dicha de conocerte. ¡Feliz cumpleaños, campeón!",
    image: "fotos/foto13.jpg",
    chart: [
      { label: "Estatus", val: "Inigualable" },
      { label: "Puntuación", val: "⭐⭐⭐⭐⭐" }
    ]
  },
  {
    id: 14,
    number: "114",
    specialty: "Farmacia de Deseos & Pastel 🎂",
    tag: "¡Pide un Deseo! 🎂✨",
    title: "Un Brindis por tu Vida",
    desc: "Cierra los ojos, pide tu deseo más grande y sopla las velas con fuerza. Que este nuevo año de vida venga colmado de bendiciones, salud y grandes alegrías.",
    image: "fotos/foto14.jpg",
    isCakeRoom: true,
    chart: [
      { label: "Receta", val: "1 rebanada de pastel ya" },
      { label: "Pronóstico", val: "Un año maravilloso" }
    ]
  }
];

// Estado general
let currentPhotoIndex = 1;
let soundEnabled = true;
let audioContext = null;

// ========================================================
// 2. INICIALIZACIÓN AL CARGAR LA PÁGINA
// ========================================================
document.addEventListener('DOMContentLoaded', () => {
  renderClinicRooms();
  initEntranceDoors();
  initDoctorMascot();
  initClinicDoors();
  initShareWhatsApp();
  initPrescriptionModal();
  initLightboxModal();
  initAudioSystem();
  initBackgroundMusic();
  initPrescriptionWall();
  initActionButtons();
});

// Renderizar dinámicamente los 14 consultorios del hospital
function renderClinicRooms() {
  const container = document.getElementById('doorsContainer');
  if (!container) return;

  container.innerHTML = ROOMS_DATA.map(room => `
    <article class="clinic-room-card" data-room="${room.id}">
      <div class="room-signboard">
        <span class="room-number">CONSULTORIO ${room.number}</span>
        <span class="room-specialty">${room.specialty}</span>
      </div>

      <div class="room-door-assembly">
        <div class="room-interior">
          <div class="room-spotlight"></div>
          
          <div class="photo-frame">
            <img src="${room.image}" 
                 alt="Foto ${room.id} - ${room.title}" 
                 class="room-photo" 
                 data-photo-index="${room.id}"
                 onerror="this.src='fotos/foto${((room.id - 1) % 5) + 1}.svg'">
            <button class="btn-zoom-photo" data-photo="${room.id}" title="Ver foto completa">🔍 Ampliar</button>
          </div>

          <div class="room-details">
            <span class="room-tag">${room.tag}</span>
            <h3 class="room-headline">${room.title}</h3>
            <p class="room-text">"${room.desc}"</p>
            <div class="clinical-chart">
              ${room.chart.map(c => `<div class="chart-item"><strong>🩺 ${c.label}:</strong> ${c.val}</div>`).join('')}
            </div>
            ${room.isCakeRoom ? `
              <button id="btnCelebrateAll" class="btn-mini-celebrate">
                🎉 ¡Lanzar Confeti de Cumpleaños! 🎉
              </button>
            ` : ''}
          </div>
        </div>

        <div class="clinic-door-3d" id="door${room.id}" data-room="${room.id}">
          <div class="door-exterior">
            <div class="door-status-light light-busy">
              <span class="status-dot"></span>
              <span class="status-label">TOCA PARA ABRIR</span>
            </div>
            <div class="door-window">
              <svg class="clinic-window-cross-svg" viewBox="0 0 32 32" width="30" height="30">
                <rect width="32" height="32" rx="7" fill="#e63946"/>
                <path d="M12 6 h8 v8 h8 v8 h-8 v8 h-8 v-8 h-8 v-8 h8 z" fill="#ffffff"/>
              </svg>
              <div class="window-reflection"></div>
            </div>
            <div class="door-room-badge">${room.number}</div>
            <div class="door-handle">
              <div class="handle-bar"></div>
            </div>
            <div class="door-push-plate">EMPUJE</div>
          </div>
        </div>
      </div>
    </article>
  `).join('');
}

// ========================================================
// 3. PUERTAS PRINCIPALES DE ENTRADA (FACHADA 3D - REDIRECCIÓN)
// ========================================================
function initEntranceDoors() {
  const btnEnter = document.getElementById('btnEnterHospital');
  const btnEnterLabel = document.getElementById('btnEnterHospitalLabel');
  const mainEntrance = document.getElementById('mainHospitalEntrance');
  const sensorIndicator = document.getElementById('doorSensorIndicator');
  const btnGoToConsultorios = document.getElementById('btnGoToConsultorios');

  if (!mainEntrance) return;

  let isNavigating = false;

  const navigateToConsultorios = () => {
    window.location.href = 'consultorios.html';
  };

  const openMainDoors = () => {
    if (isNavigating) return;
    isNavigating = true;

    mainEntrance.classList.add('opened');
    playHospitalEntranceSound();
    triggerHospitalCelebrationConfetti();

    try {
      sessionStorage.setItem('autoplayHospitalMusic', 'true');
    } catch (e) {}

    // Reacción festiva del muñeco 3D del Dr. Armando
    const mascotImg = document.getElementById('doctorMascotImg');
    const mascotSpeechText = document.getElementById('mascotSpeechText');
    if (mascotImg) {
      mascotImg.classList.add('doll-celebrating');
    }
    if (mascotSpeechText) {
      mascotSpeechText.textContent = '"¡Están locooss! 😂 ¡Pasen a los consultorios! 🏥✨"';
      speakDoctorPhrase('¡Están locooss! Pasen a los consultorios');
    }

    if (btnEnterLabel) {
      btnEnterLabel.textContent = '¡INGRESANDO AL HOSPITAL...!';
    }
    if (sensorIndicator) {
      sensorIndicator.innerHTML = '<span class="sensor-green-dot"></span><span class="sensor-text">INGRESANDO AL HOSPITAL...</span>';
    }

    // Navegar a consultorios.html tras la animación 3D de apertura
    setTimeout(navigateToConsultorios, 1200);
  };

  // Clic en las puertas para abrir
  mainEntrance.addEventListener('click', (e) => {
    if (e.target.closest('#btnGoToConsultorios')) return;
    openMainDoors();
  });

  // Botón exterior de entrada
  if (btnEnter) {
    btnEnter.addEventListener('click', openMainDoors);
  }

  // Enlace directo en el interior
  if (btnGoToConsultorios) {
    btnGoToConsultorios.addEventListener('click', (e) => {
      e.preventDefault();
      navigateToConsultorios();
    });
  }
}

// ========================================================
// 3.5. MUÑECO 3D DEL DR. ARMANDO (ANFITRIÓN INTERACTIVO)
// ========================================================
function initDoctorMascot() {
  const mascotCard = document.getElementById('doctorMascotContainer');
  const mascotImg = document.getElementById('doctorMascotImg');
  const mascotSpeechText = document.getElementById('mascotSpeechText');

  if (!mascotCard || !mascotImg) return;

  const doctorQuotes = [
    "¡Están locooss! 😂🩺 ¡Miren todo lo que hicieron!",
    "¡Están locooss! 🤣🎂 ¡No me esperaba este hospital!",
    "¡Están locooss! 😄❤️ ¡El mejor cumpleaños del mundo!",
    "¡Diagnóstico oficial: Están todos locos de amor y felicidad! 🎉🩺",
    "¡Prescripción médica: 100 dosis de abrazos y mucho pastel! 😄🍰",
    "¡Hoy no atiendo consultas, hoy celebro mi cumpleaños con ustedes! 🥳✨"
  ];
  let quoteIndex = 0;

  mascotCard.addEventListener('click', () => {
    // Si ya está animando, reiniciar animación
    mascotImg.classList.remove('doll-celebrating');
    void mascotImg.offsetWidth;
    mascotImg.classList.add('doll-celebrating');

    // Reproducir tono musical alegre
    playDoorChimeSound();

    // Hablar la frase
    const currentQuote = doctorQuotes[quoteIndex];
    speakDoctorPhrase(currentQuote);

    // Lanzar confeti desde la posición del muñeco
    if (typeof confetti === 'function') {
      const rect = mascotCard.getBoundingClientRect();
      const originX = (rect.left + rect.width / 2) / window.innerWidth;
      const originY = (rect.top + rect.height / 2) / window.innerHeight;
      confetti({
        particleCount: 40,
        spread: 70,
        origin: { x: Math.max(0.1, Math.min(0.9, originX)), y: Math.max(0.1, Math.min(0.9, originY)) },
        colors: ['#0284c7', '#38bdf8', '#ef4444', '#10b981', '#f59e0b']
      });
    }

    // Cambiar frase del muñeco
    if (mascotSpeechText) {
      mascotSpeechText.style.opacity = '0';
      setTimeout(() => {
        mascotSpeechText.textContent = `"${currentQuote}"`;
        mascotSpeechText.style.opacity = '1';
      }, 150);
    }
    quoteIndex = (quoteIndex + 1) % doctorQuotes.length;
  });
}

// ========================================================
// 3.6. SISTEMA DE VOZ MASCULINA DEL DR. JOSÉ
// ========================================================
let cachedSystemVoices = [];

function loadVoicesList() {
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    cachedSystemVoices = window.speechSynthesis.getVoices();
  }
}

if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
  loadVoicesList();
  window.speechSynthesis.onvoiceschanged = loadVoicesList;
}

function getMaleSpanishVoice() {
  if (!('speechSynthesis' in window)) return null;
  if (!cachedSystemVoices || cachedSystemVoices.length === 0) {
    cachedSystemVoices = window.speechSynthesis.getVoices();
  }

  const spanishVoices = cachedSystemVoices.filter(v => v.lang && v.lang.toLowerCase().startsWith('es'));

  // Nombres y descriptores masculinos de voces en iOS, Android, Windows
  const maleIdentifiers = [
    'jorge', 'juan', 'diego', 'carlos', 'pablo', 'raul', 'raúl', 
    'manuel', 'gonzalo', 'miguel', 'alvaro', 'álvaro', 'david', 'enrique',
    'male', 'hombre', 'man', 'eed', 'sfb', 'guy'
  ];

  // Nombres y descriptores femeninos a descartar
  const femaleIdentifiers = [
    'monica', 'mónica', 'paulina', 'helena', 'elena', 'laura', 'lucia', 'lucía', 
    'rosa', 'carmen', 'female', 'mujer', 'sabina', 'soledad', 'valeria', 'ana', 
    'francisca', 'victoria', 'angelica', 'angela', 'es-es-x-ana'
  ];

  // 1. Voz en español explícitamente masculina
  for (const v of spanishVoices) {
    const name = v.name.toLowerCase();
    const isMale = maleIdentifiers.some(m => name.includes(m));
    const isFemale = femaleIdentifiers.some(f => name.includes(f));
    if (isMale && !isFemale) {
      return v;
    }
  }

  // 2. Voz en español que no sea femenina
  for (const v of spanishVoices) {
    const name = v.name.toLowerCase();
    const isFemale = femaleIdentifiers.some(f => name.includes(f));
    if (!isFemale) {
      return v;
    }
  }

  if (spanishVoices.length > 0) return spanishVoices[0];
  return null;
}

function speakDoctorPhrase(text) {
  try {
    if (!('speechSynthesis' in window) || !soundEnabled) return;

    window.speechSynthesis.cancel();

    // Limpiar emojis y caracteres decorativos para el lector
    const cleanText = text.replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g, '').replace(/[🩺🎂🎉😄💊❤️🥳✨🍰🤣🚪👇]/g, '').trim();
    if (!cleanText) return;

    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = 'es-ES';

    // Priorizar voz masculina nativa del teléfono
    const maleVoice = getMaleSpanishVoice();
    if (maleVoice) {
      utterance.voice = maleVoice;
      utterance.lang = maleVoice.lang || 'es-ES';
    }

    // PITCH BAJO (0.74): Clave para garantizar voz masculina profunda y cálida
    utterance.pitch = 0.74;
    utterance.rate = 0.95;
    utterance.volume = 1.0;

    window.speechSynthesis.speak(utterance);
  } catch (err) {
    // Si la reproducción es bloqueada por el navegador, continuar
  }
}

// ========================================================
// 4. PUERTAS BATIENTES 3D DE CADA CONSULTORIO
// ========================================================
function initClinicDoors() {
  const doors = document.querySelectorAll('.clinic-door-3d');

  doors.forEach(door => {
    door.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpened = door.classList.contains('opened');

      if (!isOpened) {
        // Abrir puerta
        door.classList.add('opened');
        playDoorChimeSound();
        triggerDoorConfetti(e.clientX, e.clientY);

        // Si la música de fondo está en pausa por bloqueo de autoplay, iniciarla
        const bgAudio = document.getElementById('ambientAudio');
        if (bgAudio && bgAudio.paused && soundEnabled) {
          bgAudio.play().catch(() => {});
        }
      } else {
        // Cerrar puerta si se toca de nuevo
        door.classList.remove('opened');
        playDoorClickSound();
      }
    });
  });

}

// ========================================================
// 5. COMPARTIR EN WHATSAPP
// ========================================================
function getShareUrl() {
  let url = window.location.href.split('#')[0].split('?')[0];
  url = url.replace('consultorios.html', '');
  return url;
}

function initShareWhatsApp() {
  const btnShare = document.getElementById('btnShareWhatsApp');
  if (!btnShare) return;

  btnShare.addEventListener('click', (e) => {
    e.preventDefault();
    const pageUrl = getShareUrl();
    const text = encodeURIComponent('🏥🎂 ¡Te invito a celebrar el cumpleaños del Dr. José! Abre las puertas y descubre sus fotos y recuerdos en su Hospital Interactivo: ' + pageUrl);
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  });
}

// ========================================================
// 5. MODAL: FÓRMULA MÉDICA (PRESCRIPCIÓN OFICIAL)
// ========================================================
function initPrescriptionModal() {
  const modal = document.getElementById('modalPrescription');
  const btnOpen = document.getElementById('btnPrescription');
  const btnClose = document.getElementById('btnClosePrescription');
  const btnPrint = document.getElementById('btnPrintPrescription');

  if (!modal || !btnOpen) return;

  const openModal = () => {
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    playMedicalBeep();
  };

  const closeModal = () => {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
  };

  btnOpen.addEventListener('click', openModal);
  if (btnClose) btnClose.addEventListener('click', closeModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) closeModal();
  });

  if (btnPrint) {
    btnPrint.addEventListener('click', () => {
      window.print();
    });
  }
}

// ========================================================
// 6. MODAL: VISOR DE FOTOS EN PANTALLA COMPLETA (LIGHTBOX)
// ========================================================
function initLightboxModal() {
  const modal = document.getElementById('modalLightbox');
  const imgEl = document.getElementById('lightboxImg');
  const titleEl = document.getElementById('lightboxTitle');
  const descEl = document.getElementById('lightboxDesc');
  const btnClose = document.getElementById('btnCloseLightbox');
  const btnPrev = document.getElementById('btnPrevPhoto');
  const btnNext = document.getElementById('btnNextPhoto');

  if (!modal || !imgEl) return;

  const updateLightboxContent = (index) => {
    currentPhotoIndex = index;
    const room = ROOMS_DATA.find(r => r.id === index) || ROOMS_DATA[0];
    
    // Obtener la imagen actual renderizada en el consultorio
    const currentImg = document.querySelector(`.room-photo[data-photo-index="${index}"]`);
    imgEl.src = currentImg ? currentImg.src : room.image;
    
    titleEl.textContent = `Consultorio ${room.number}: ${room.title}`;
    descEl.textContent = room.desc;
  };

  // Event listener para botones de ampliar
  document.querySelectorAll('.btn-zoom-photo').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const index = parseInt(btn.dataset.photo, 10);
      updateLightboxContent(index);
      modal.classList.add('open');
      modal.setAttribute('aria-hidden', 'false');
    });
  });

  const closeLightbox = () => {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
  };

  if (btnClose) btnClose.addEventListener('click', closeLightbox);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeLightbox();
  });

  if (btnPrev) {
    btnPrev.addEventListener('click', () => {
      let prevIndex = currentPhotoIndex - 1;
      if (prevIndex < 1) prevIndex = ROOMS_DATA.length;
      updateLightboxContent(prevIndex);
    });
  }

  if (btnNext) {
    btnNext.addEventListener('click', () => {
      let nextIndex = currentPhotoIndex + 1;
      if (nextIndex > ROOMS_DATA.length) nextIndex = 1;
      updateLightboxContent(nextIndex);
    });
  }
}

// ========================================================
// 7. DETECCIÓN AUTOMÁTICA DE FOTOS REALES (.JPG / .PNG)
// ========================================================
function initAutoDetectPhotos() {
  ROOMS_DATA.forEach(room => {
    const photoEl = document.querySelector(`.room-photo[data-photo-index="${room.id}"]`);
    if (!photoEl) return;

    // Intenta cargar la foto personalizada si el usuario la agrega
    const testImg = new Image();
    testImg.src = room.imageCustom;
    testImg.onload = () => {
      photoEl.src = room.imageCustom;
    };
    testImg.onerror = () => {
      // Si no existe .jpg, intenta con .png
      const testPng = new Image();
      testPng.src = `fotos/foto${room.id}.png`;
      testPng.onload = () => {
        photoEl.src = `fotos/foto${room.id}.png`;
      };
      // Si no, conserva el SVG temático por defecto
    };
  });
}

// ========================================================
// 8. ACCIONES Y BOTÓN DE WHATSAPP
// ========================================================
function initActionButtons() {
  // Botón de confeti en el consultorio 105
  const btnCelebrate = document.getElementById('btnCelebrateAll');
  if (btnCelebrate) {
    btnCelebrate.addEventListener('click', (e) => {
      e.stopPropagation();
      triggerHospitalCelebrationConfetti();
      playHospitalEntranceSound();
    });
  }

  // Compartir en WhatsApp
  const btnShare = document.getElementById('btnShareWa');
  if (btnShare) {
    btnShare.addEventListener('click', () => {
      const pageUrl = window.location.href;
      const text = encodeURIComponent(`🩺 ¡Emergencia especial de cumpleaños para el Dr. José! Abre las puertas de los consultorios y descubre los recuerdos que preparamos para ti aquí: ${pageUrl}`);
      window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
    });
  }
}

// ========================================================
// 9. SINTETIZADOR DE SONIDOS MÉDICOS (WEB AUDIO API)
// ========================================================
function initAudioSystem() {
  const btnAudio = document.getElementById('btnAudioToggle');
  const ambientAudio = document.getElementById('ambientAudio');
  if (!btnAudio) return;

  btnAudio.addEventListener('click', () => {
    soundEnabled = !soundEnabled;
    btnAudio.innerHTML = soundEnabled ? '<span class="icon">🔊</span>' : '<span class="icon">🔇</span>';
    btnAudio.style.opacity = soundEnabled ? '1' : '0.6';

    if (ambientAudio) {
      if (soundEnabled) {
        ambientAudio.play().catch(() => {});
      } else {
        ambientAudio.pause();
      }
    }
  });
}

// ========================================================
// 9.5. REPRODUCTOR MUSICAL DEL PABELLÓN (PHOTOGRAPH - ED SHEERAN)
// ========================================================
function initBackgroundMusic() {
  const audio = document.getElementById('ambientAudio');
  const player = document.getElementById('hospitalMusicPlayer');
  const eqBars = document.getElementById('musicEqBars');
  const statusIcon = document.getElementById('musicStatusIcon');
  const btnHeaderAudio = document.getElementById('btnAudioToggle');

  if (!audio) return;

  // Configurar en consultorios y en el muro de recetas
  const shouldPlayMusic = document.body.classList.contains('page-consultorios') || 
                          document.body.classList.contains('page-muro') || 
                          document.getElementById('hospitalMusicPlayer');
  if (!shouldPlayMusic) return;

  if (!audio.getAttribute('src')) {
    audio.src = 'musica.mp3';
  }
  audio.loop = true;
  audio.volume = 0.65;

  const updateMusicUI = (isPlaying) => {
    if (player) player.classList.toggle('playing', isPlaying);
    if (eqBars) eqBars.classList.toggle('active', isPlaying);
    if (statusIcon) statusIcon.textContent = isPlaying ? '⏸️' : '▶️';
    if (btnHeaderAudio) {
      btnHeaderAudio.innerHTML = isPlaying ? '<span class="icon">🔊</span>' : '<span class="icon">🔇</span>';
      btnHeaderAudio.style.opacity = isPlaying ? '1' : '0.6';
    }
  };

  const attemptPlay = () => {
    if (!soundEnabled) return;
    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise.then(() => {
        updateMusicUI(true);
      }).catch(() => {
        updateMusicUI(false);
      });
    }
  };

  // Intentar reproducir automáticamente al cargar la página
  attemptPlay();

  // Desbloqueo universal al primer toque / interacción en pantalla (móviles)
  const onUserTouch = () => {
    if (audio.paused && soundEnabled) {
      attemptPlay();
    }
  };
  document.addEventListener('click', onUserTouch, { passive: true, once: true });
  document.addEventListener('touchstart', onUserTouch, { passive: true, once: true });

  // Control directo al tocar el reproductor musical
  if (player) {
    player.addEventListener('click', (e) => {
      e.stopPropagation();
      if (audio.paused) {
        soundEnabled = true;
        attemptPlay();
      } else {
        audio.pause();
        updateMusicUI(false);
      }
    });
  }

  // Sincronizar eventos de audio nativos
  audio.addEventListener('play', () => updateMusicUI(true));
  audio.addEventListener('pause', () => updateMusicUI(false));
}

function getAudioContext() {
  if (!audioContext) {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (AudioCtx) audioContext = new AudioCtx();
  }
  if (audioContext && audioContext.state === 'suspended') {
    audioContext.resume();
  }
  return audioContext;
}

// Sonido de campana hospitalaria / apertura de puertas
function playDoorChimeSound() {
  if (!soundEnabled) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  const now = ctx.currentTime;
  const osc1 = ctx.createOscillator();
  const osc2 = ctx.createOscillator();
  const gain = ctx.createGain();

  osc1.type = 'sine';
  osc2.type = 'triangle';

  // Acorde suave en dos tonos (E5 y B5)
  osc1.frequency.setValueAtTime(659.25, now);
  osc2.frequency.setValueAtTime(987.77, now + 0.08);

  gain.gain.setValueAtTime(0.01, now);
  gain.gain.linearRampToValueAtTime(0.18, now + 0.05);
  gain.gain.exponentialRampToValueAtTime(0.001, now + 0.65);

  osc1.connect(gain);
  osc2.connect(gain);
  gain.connect(ctx.destination);

  osc1.start(now);
  osc2.start(now + 0.08);
  osc1.stop(now + 0.7);
  osc2.stop(now + 0.7);
}

// Clic mecánico de puerta
function playDoorClickSound() {
  if (!soundEnabled) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  const now = ctx.currentTime;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  osc.type = 'sine';
  osc.frequency.setValueAtTime(320, now);
  osc.frequency.exponentialRampToValueAtTime(120, now + 0.12);

  gain.gain.setValueAtTime(0.15, now);
  gain.gain.exponentialRampToValueAtTime(0.01, now + 0.12);

  osc.connect(gain);
  gain.connect(ctx.destination);

  osc.start(now);
  osc.stop(now + 0.15);
}

// Entrada triunfal del hospital (fanfarria médica)
function playHospitalEntranceSound() {
  if (!soundEnabled) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  const notes = [523.25, 659.25, 783.99, 1046.50]; // Do, Mi, Sol, Do agudo
  notes.forEach((freq, idx) => {
    const now = ctx.currentTime + (idx * 0.1);
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(freq, now);

    gain.gain.setValueAtTime(0.01, now);
    gain.gain.linearRampToValueAtTime(0.2, now + 0.04);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.5);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.55);
  });
}

// Beep de monitor cardíaco
function playMedicalBeep() {
  if (!soundEnabled) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  const now = ctx.currentTime;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  osc.type = 'sine';
  osc.frequency.setValueAtTime(880, now);

  gain.gain.setValueAtTime(0.01, now);
  gain.gain.linearRampToValueAtTime(0.12, now + 0.02);
  gain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);

  osc.connect(gain);
  gain.connect(ctx.destination);

  osc.start(now);
  osc.stop(now + 0.16);
}

// ========================================================
// 10. EFECTOS DE CONFETI Y CELEBRACIÓN
// ========================================================
function triggerHospitalCelebrationConfetti() {
  if (typeof confetti !== 'function') return;

  // Lluvia central festiva
  confetti({
    particleCount: 80,
    spread: 80,
    origin: { y: 0.6 },
    colors: ['#00f2fe', '#028090', '#ffd166', '#ff3366', '#02c39a']
  });

  // Ráfagas laterales
  setTimeout(() => {
    confetti({
      particleCount: 50,
      angle: 60,
      spread: 60,
      origin: { x: 0 },
      colors: ['#00f2fe', '#ffd166', '#ff3366']
    });
    confetti({
      particleCount: 50,
      angle: 120,
      spread: 60,
      origin: { x: 1 },
      colors: ['#00f2fe', '#ffd166', '#ff3366']
    });
  }, 250);
}

function triggerDoorConfetti(clientX, clientY) {
  if (typeof confetti !== 'function') return;

  const x = clientX ? (clientX / window.innerWidth) : 0.5;
  const y = clientY ? (clientY / window.innerHeight) : 0.5;

  confetti({
    particleCount: 25,
    spread: 45,
    origin: { x: Math.max(0.1, Math.min(0.9, x)), y: Math.max(0.1, Math.min(0.9, y)) },
    colors: ['#00f2fe', '#ffd166', '#ff3366']
  });
}

// ========================================================
// 11. MURO CLÍNICO DE PRESCRIPCIONES MÉDICAS (MURO.HTML)
// ========================================================
function initPrescriptionWall() {
  const grid = document.getElementById('prescriptionsGrid');
  if (!grid) return; // No estamos en muro.html

  const emptyState = document.getElementById('emptyState');
  const btnEmptyStateWrite = document.getElementById('btnEmptyStateWrite');
  const modal = document.getElementById('modalNewRx');
  const btnOpenModal = document.getElementById('btnOpenNewRxModal');
  const btnTriggerNewRx = document.getElementById('btnTriggerNewRx');
  const btnCloseModal = document.getElementById('btnCloseNewRxModal');
  const form = document.getElementById('newPrescriptionForm');
  const inputSender = document.getElementById('doctorSenderName');
  const inputRelation = document.getElementById('doctorRelationship');
  const selectDiagnosis = document.getElementById('prescriptionDiagnosis');
  const customDiagInput = document.getElementById('customDiagnosisInput');
  const textTreatment = document.getElementById('prescriptionTreatment');
  const inputDose = document.getElementById('prescriptionDose');
  const sigPreview = document.getElementById('sigLivePreview');
  const countBadge = document.getElementById('prescriptionsCount');
  const btnShareWall = document.getElementById('btnShareWall');
  const sharedNotice = document.getElementById('sharedRxNotice');
  const sharedNoticeTitle = document.getElementById('sharedRxNoticeTitle');
  const btnCloseNotice = document.getElementById('btnCloseSharedNotice');
  const btnSubmitAndShare = document.getElementById('btnSubmitAndShareWhatsApp');

  // Modal y configuración de Google Sheets (Apps Script)
  const configModal = document.getElementById('configBackdrop');
  const btnOpenConfig = document.getElementById('btnOpenConfigModal');
  const btnCloseConfig = document.getElementById('btnCloseConfig');
  const btnCancelConfig = document.getElementById('btnCancelConfig');
  const btnSaveConfig = document.getElementById('btnSaveConfig');
  const scriptUrlInput = document.getElementById('scriptUrlInput');
  const btnClearPrescriptions = document.getElementById('btnClearPrescriptions');

  // Modal para capturar nombre de la persona que da Me Gusta
  const modalLikeAuthor = document.getElementById('modalLikeAuthor');
  const formLikeAuthor = document.getElementById('formLikeAuthor');
  const inputLikeAuthorName = document.getElementById('inputLikeAuthorName');
  const btnCloseLikeModal = document.getElementById('btnCloseLikeModal');
  const btnCancelLike = document.getElementById('btnCancelLike');
  let pendingLikeRxId = null;

  // Obtener URL de Web App de Google Sheets guardada localmente
  const getGoogleScriptUrl = () => {
    return localStorage.getItem('google_script_muro_jose_url') || localStorage.getItem('google_script_muro_url') || '';
  };

  // Clave de almacenamiento v3 para garantizar inicio en 0 recetas
  const STORAGE_KEY = 'drJose_wall_prescriptions_v3';

  // Purgar versiones antiguas de caché para dejar el muro completamente en 0
  try {
    localStorage.removeItem('drJose_wall_prescriptions');
    localStorage.removeItem('drJose_wall_prescriptions_v2');
  } catch (e) {}

  // Cargar recetas del almacenamiento local
  let prescriptions = [];
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed)) {
        prescriptions = parsed.filter(rx => rx && rx.id && rx.treatment && !['RX-1001', 'RX-1002', 'RX-1003'].includes(rx.id));
      }
    }
  } catch (e) {
    prescriptions = [];
  }

  // Guardar estado local
  const saveLocalPrescriptions = () => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(prescriptions));
    } catch (e) {}
  };

  // Detectar si se recibió una receta en la URL (?rx=...)
  let highlightedRxId = null;
  const urlParams = new URLSearchParams(window.location.search);
  const rxParam = urlParams.get('rx');
  if (rxParam) {
    try {
      const decodedJson = decodeURIComponent(escape(atob(rxParam)));
      const incomingRx = JSON.parse(decodedJson);
      if (incomingRx && incomingRx.sender && incomingRx.treatment) {
        // Verificar si ya existe para no duplicar
        const exists = prescriptions.some(p => p.id === incomingRx.id);
        if (!exists) {
          prescriptions.unshift(incomingRx);
          saveLocalPrescriptions();
          sendPrescriptionToGoogleSheets(incomingRx);
        }
        highlightedRxId = incomingRx.id;

        // Mostrar notificación de bienvenida
        if (sharedNotice) {
          sharedNotice.style.display = 'flex';
          if (sharedNoticeTitle) {
            sharedNoticeTitle.textContent = `¡Nueva receta médica recibida de ${incomingRx.sender}! 🩺✨`;
          }
          triggerHospitalCelebrationConfetti();
        }
      }
    } catch (e) {
      console.warn('No se pudo decodificar la receta del enlace:', e);
    }
  }

  // Cerrar alerta de receta compartida
  if (btnCloseNotice && sharedNotice) {
    btnCloseNotice.addEventListener('click', () => {
      sharedNotice.style.display = 'none';
    });
  }

  // Vista previa de firma al escribir nombre
  if (inputSender && sigPreview) {
    inputSender.addEventListener('input', () => {
      sigPreview.textContent = inputSender.value.trim() ? inputSender.value.trim() : 'Dr(a). Tu Nombre';
    });
  }

  // Manejo de diagnóstico personalizado
  if (selectDiagnosis && customDiagInput) {
    selectDiagnosis.addEventListener('change', () => {
      if (selectDiagnosis.value === '__custom__') {
        customDiagInput.style.display = 'block';
        customDiagInput.focus();
      } else {
        customDiagInput.style.display = 'none';
      }
    });
  }

  // Abrir y cerrar modal
  const openModal = () => {
    if (modal) modal.classList.add('open');
    if (inputSender) setTimeout(() => inputSender.focus(), 200);
  };
  const closeModal = () => {
    if (modal) modal.classList.remove('open');
  };

  if (btnOpenModal) btnOpenModal.addEventListener('click', openModal);
  if (btnTriggerNewRx) btnTriggerNewRx.addEventListener('click', openModal);
  if (btnCloseModal) btnCloseModal.addEventListener('click', closeModal);
  if (btnEmptyStateWrite) btnEmptyStateWrite.addEventListener('click', openModal);
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }

  // Abrir y cerrar modal de configuración de Google Sheets
  const openConfigModal = () => {
    if (scriptUrlInput) {
      scriptUrlInput.value = getGoogleScriptUrl();
    }
    if (configModal) configModal.classList.add('open');
  };
  const closeConfigModal = () => {
    if (configModal) configModal.classList.remove('open');
  };

  if (btnOpenConfig) btnOpenConfig.addEventListener('click', openConfigModal);
  if (btnCloseConfig) btnCloseConfig.addEventListener('click', closeConfigModal);
  if (btnCancelConfig) btnCancelConfig.addEventListener('click', closeConfigModal);
  if (configModal) {
    configModal.addEventListener('click', (e) => {
      if (e.target === configModal) closeConfigModal();
    });
  }

  if (btnSaveConfig && scriptUrlInput) {
    btnSaveConfig.addEventListener('click', () => {
      const url = scriptUrlInput.value.trim();
      if (url) {
        localStorage.setItem('google_script_muro_jose_url', url);
        alert('✅ ¡URL de Google Sheets guardada correctamente! Sincronizando recetas...');
        fetchPrescriptionsFromGoogleSheets(false);
      } else {
        localStorage.removeItem('google_script_muro_jose_url');
        alert('ℹ️ Se ha restablecido la configuración.');
      }
      closeConfigModal();
    });
  }

  // Botón para vaciar recetas locales (dejar en 0 para pruebas)
  if (btnClearPrescriptions) {
    btnClearPrescriptions.addEventListener('click', () => {
      if (confirm('¿Deseas vaciar todas las recetas guardadas localmente y dejar el muro en 0 para hacer pruebas?')) {
        localStorage.removeItem(STORAGE_KEY);
        prescriptions = [];
        renderWall();
        alert('✅ Muro reiniciado a 0 recetas. ¡Listo para hacer tu prueba!');
        closeConfigModal();
      }
    });
  }

  // ========================================================
  // CONTROL DEL MODAL PARA CAPTURAR NOMBRE EN "ME GUSTA"
  // ========================================================
  const closeLikeModal = () => {
    if (modalLikeAuthor) modalLikeAuthor.classList.remove('open');
    pendingLikeRxId = null;
  };

  if (btnCloseLikeModal) btnCloseLikeModal.addEventListener('click', closeLikeModal);
  if (btnCancelLike) btnCancelLike.addEventListener('click', closeLikeModal);
  if (modalLikeAuthor) {
    modalLikeAuthor.addEventListener('click', (e) => {
      if (e.target === modalLikeAuthor) closeLikeModal();
    });
  }

  if (formLikeAuthor) {
    formLikeAuthor.addEventListener('submit', (e) => {
      e.preventDefault();
      const nameVal = inputLikeAuthorName ? inputLikeAuthorName.value.trim() : '';
      if (!nameVal) return;
      localStorage.setItem('drJose_guest_name', nameVal);
      closeLikeModal();

      if (pendingLikeRxId) {
        const item = prescriptions.find(p => p.id === pendingLikeRxId);
        if (item) {
          toggleLikeForUser(item, nameVal);
        }
      }
    });
  }

  // Manejar clic en Me Gusta (pedir nombre si no se conoce)
  const handleLikeClick = (id) => {
    const item = prescriptions.find(p => p.id === id);
    if (!item) return;

    let myName = localStorage.getItem('drJose_guest_name') || '';
    if (!myName) {
      const senderInput = document.getElementById('doctorSenderName');
      if (senderInput && senderInput.value.trim()) {
        myName = senderInput.value.trim();
        localStorage.setItem('drJose_guest_name', myName);
      }
    }

    if (!myName) {
      pendingLikeRxId = id;
      if (modalLikeAuthor) modalLikeAuthor.classList.add('open');
      if (inputLikeAuthorName) {
        inputLikeAuthorName.value = '';
        setTimeout(() => inputLikeAuthorName.focus(), 200);
      }
      return;
    }

    toggleLikeForUser(item, myName);
  };

  // Alternar dar/quitar Me Gusta para un usuario específico
  const toggleLikeForUser = (item, userName) => {
    if (!Array.isArray(item.likedBy)) {
      item.likedBy = [];
    }

    const idx = item.likedBy.indexOf(userName);
    if (idx > -1) {
      // Quitar like
      item.likedBy.splice(idx, 1);
    } else {
      // Agregar like
      item.likedBy.push(userName);
      triggerHospitalCelebrationConfetti();
      playMedicalBeep();
    }

    item.likes = item.likedBy.length;
    saveLocalPrescriptions();
    renderWall();

    // Sincronizar con Google Sheets en tiempo real
    sendLikeToGoogleSheets(item.id, userName);
  };

  // Enviar Me Gusta a Google Sheets
  async function sendLikeToGoogleSheets(rxId, userName) {
    const scriptUrl = getGoogleScriptUrl();
    if (!scriptUrl) return;

    try {
      await fetch(scriptUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8'
        },
        body: JSON.stringify({
          action: 'like',
          id: rxId,
          userName: userName
        })
      });
    } catch (err) {
      console.warn('Error al sincronizar like con Google Sheets:', err);
    }
  }

  // Formatear texto amigable de quién dio Me Gusta
  const formatLikedByText = (likedBy, isLikedByMe, myName) => {
    if (!likedBy || likedBy.length === 0) return '';
    const count = likedBy.length;

    if (isLikedByMe) {
      if (count === 1) return 'A ti te gusta esta receta médica';
      const others = likedBy.filter(n => n !== myName);
      if (others.length === 1) return `A ti y a <strong>${escapeHtml(others[0])}</strong> les gusta`;
      if (others.length === 2) return `A ti, a <strong>${escapeHtml(others[0])}</strong> y a <strong>${escapeHtml(others[1])}</strong> les gusta`;
      return `A ti, a <strong>${escapeHtml(others[0])}</strong> y a <strong>${others.length - 1} personas más</strong> les gusta`;
    } else {
      if (count === 1) return `Le gusta a <strong>${escapeHtml(likedBy[0])}</strong>`;
      if (count === 2) return `Les gusta a <strong>${escapeHtml(likedBy[0])}</strong> y <strong>${escapeHtml(likedBy[1])}</strong>`;
      if (count === 3) return `Les gusta a <strong>${escapeHtml(likedBy[0])}</strong>, <strong>${escapeHtml(likedBy[1])}</strong> y <strong>${escapeHtml(likedBy[2])}</strong>`;
      return `Les gusta a <strong>${escapeHtml(likedBy[0])}</strong>, <strong>${escapeHtml(likedBy[1])}</strong> y <strong>${count - 2} personas más</strong>`;
    }
  };

  // Renderizar muro
  const renderWall = () => {
    if (countBadge) countBadge.textContent = prescriptions.length;

    // Manejo del estado vacío cuando no hay recetas publicadas
    if (prescriptions.length === 0) {
      grid.innerHTML = '';
      if (emptyState) emptyState.style.display = 'block';
      return;
    }

    if (emptyState) emptyState.style.display = 'none';

    const myName = localStorage.getItem('drJose_guest_name') || '';

    grid.innerHTML = prescriptions.map(rx => {
      const isHighlighted = rx.id === highlightedRxId;
      const likedByList = Array.isArray(rx.likedBy) ? rx.likedBy : [];
      const isLikedByMe = myName && likedByList.includes(myName);
      const likesCount = likedByList.length || (rx.likes || 0);

      const likedByHtml = likedByList.length > 0 ? `
        <div class="rx-card-liked-by">
          <span class="liked-by-icon">❤️</span>
          <span class="liked-by-text">${formatLikedByText(likedByList, isLikedByMe, myName)}</span>
        </div>
      ` : '';

      return `
        <article class="prescription-note-card ${isHighlighted ? 'highlighted-new' : ''}" id="card-${rx.id}" data-id="${rx.id}">
          <div class="rx-card-clip"></div>

          <div class="rx-card-header">
            <div class="rx-card-brand">
              <span class="rx-card-cross">✚</span>
              <div>
                <div class="rx-card-hosp-name">HOSPITAL GENERAL DE LA ALEGRÍA</div>
                <div class="rx-card-hosp-sub">Dr. José Medical Center • Urgencias</div>
              </div>
            </div>
            <div class="rx-card-rx-id">
              <div class="rx-big-symbol">℞</div>
              <div class="rx-card-id-text">${rx.id}</div>
            </div>
          </div>

          <div class="rx-card-meta">
            <div class="meta-row">
              <span class="meta-label">PACIENTE:</span>
              <span class="meta-value patient">Dr. José 🎂</span>
            </div>
            <div class="meta-row">
              <span class="meta-label">MÉDICO REMITENTE:</span>
              <span class="meta-value">${escapeHtml(rx.sender)} ${rx.relationship ? `(${escapeHtml(rx.relationship)})` : ''}</span>
            </div>
            <div class="meta-row">
              <span class="meta-label">FECHA:</span>
              <span class="meta-value">${rx.date || 'Hoy'}</span>
            </div>
          </div>

          <div class="rx-card-diagnosis-badge">
            <span class="diag-label">DIAGNÓSTICO CLÍNICO:</span>
            <span class="diag-text">${escapeHtml(rx.diagnosis)}</span>
          </div>

          <div class="rx-card-treatment-body">
            <p class="rx-handwriting-msg">"${escapeHtml(rx.treatment)}"</p>
          </div>

          ${rx.dose ? `
            <div class="rx-card-dose">
              <span class="dose-icon">💊</span>
              <span class="dose-text"><strong>Posología:</strong> ${escapeHtml(rx.dose)}</span>
            </div>
          ` : ''}

          <div class="rx-card-footer">
            <div class="rx-footer-signature">
              <div class="rx-sig-text">${escapeHtml(rx.sender)}</div>
              <div class="rx-sig-line"></div>
              <div class="rx-sig-author">${escapeHtml(rx.sender)}</div>
              <div class="rx-sig-role">${escapeHtml(rx.relationship || 'Colega de Vida')}</div>
            </div>

            <div class="rx-card-seal">
              <div class="rx-seal-inner">
                <span>HOSPITAL</span>
                <span>100% AMOR</span>
                <span>APROBADO</span>
              </div>
            </div>
          </div>

          <div class="rx-card-actions">
            <button class="btn-rx-like ${isLikedByMe ? 'liked' : ''}" data-id="${rx.id}" title="Dar cariño a esta receta">
              <span class="like-icon">${isLikedByMe ? '❤️' : '🤍'}</span>
              <span class="like-count">${likesCount}</span>
            </button>
            <button class="btn-rx-share-item" data-id="${rx.id}" title="Compartir esta receta por WhatsApp">
              <span>💬 Compartir</span>
            </button>
          </div>

          ${likedByHtml}
        </article>
      `;
    }).join('');

    // Listener para likes (con identificación de autor)
    grid.querySelectorAll('.btn-rx-like').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        handleLikeClick(id);
      });
    });

    // Listener para compartir receta individual
    grid.querySelectorAll('.btn-rx-share-item').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        const item = prescriptions.find(p => p.id === id);
        if (item) {
          shareSinglePrescription(item);
        }
      });
    });
  };

  // Función para escapar HTML y prevenir inyecciones
  function escapeHtml(text) {
    if (!text) return '';
    return text
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  // Generar enlace codificado de una receta
  function generatePrescriptionUrl(rx) {
    try {
      const json = JSON.stringify(rx);
      const encoded = btoa(unescape(encodeURIComponent(json)));
      const base = window.location.href.split('?')[0].split('#')[0];
      return `${base}?rx=${encodeURIComponent(encoded)}`;
    } catch (e) {
      return window.location.href;
    }
  }

  // Compartir receta por WhatsApp
  function shareSinglePrescription(rx) {
    const rxUrl = generatePrescriptionUrl(rx);
    const msg = `📋 *RECETA MÉDICA DE CUMPLEAÑOS PARA EL DR. JOSÉ* 🩺🎂\n\n` +
                `👨‍⚕️ *De:* ${rx.sender} (${rx.relationship || 'Afecto'})\n` +
                `🔬 *Diagnóstico:* ${rx.diagnosis}\n` +
                `📋 *Tratamiento:* "${rx.treatment}"\n` +
                (rx.dose ? `💊 *Posología:* ${rx.dose}\n\n` : '\n') +
                `¡Mira la receta completa en el Muro Clínico! 👇\n${rxUrl}`;
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(msg)}`;
    window.open(whatsappUrl, '_blank');
  }

  // Compartir muro general por WhatsApp
  if (btnShareWall) {
    btnShareWall.addEventListener('click', () => {
      const wallUrl = window.location.href.split('?')[0].split('#')[0];
      const msg = `🏥 *MURO CLÍNICO DE RECETAS MÉDICAS DEL DR. JOSÉ* 📋🩺🎂\n\n` +
                  `¡Hoy celebramos el cumpleaños del Dr. José! Entra y prescríbele una receta médica con tus mejores deseos, recuerdos y bendiciones 👇✨\n\n` +
                  `${wallUrl}`;
      const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(msg)}`;
      window.open(whatsappUrl, '_blank');
    });
  }

  // Guardar nueva receta
  const saveNewPrescription = (shouldShareWhatsApp = false) => {
    const sender = inputSender ? inputSender.value.trim() : '';
    const relation = inputRelation ? inputRelation.value.trim() : '';
    let diagnosis = selectDiagnosis ? selectDiagnosis.value : '';
    if (diagnosis === '__custom__' && customDiagInput) {
      diagnosis = customDiagInput.value.trim() || 'Sobredosis de Cariño y Felicidad Inagotable ✨';
    }
    const treatment = textTreatment ? textTreatment.value.trim() : '';
    const dose = inputDose ? inputDose.value.trim() : '';

    if (!sender) {
      alert('Por favor escribe tu nombre (médico remitente).');
      if (inputSender) inputSender.focus();
      return;
    }
    if (!treatment) {
      alert('Por favor escribe tu fórmula o mensaje para el Dr. José.');
      if (textTreatment) textTreatment.focus();
      return;
    }

    const newId = `RX-${Math.floor(1000 + Math.random() * 9000)}`;
    const today = new Date();
    const dateStr = `${String(today.getDate()).padStart(2, '0')}/${String(today.getMonth() + 1).padStart(2, '0')}/${today.getFullYear()}`;

    // Guardar nombre del autor para no tener que pedírselo al dar me gusta
    localStorage.setItem('drJose_guest_name', sender);

    const newRx = {
      id: newId,
      sender: sender,
      relationship: relation || 'Amigo(a) Especial',
      diagnosis: diagnosis,
      treatment: treatment,
      dose: dose,
      date: dateStr,
      likes: 0,
      likedBy: [],
      isPendingSync: true,
      createdAt: Date.now()
    };

    prescriptions.unshift(newRx);
    saveLocalPrescriptions();

    // Enviar inmediatamente a Google Sheets
    sendPrescriptionToGoogleSheets(newRx);

    highlightedRxId = newId;
    closeModal();
    renderWall();

    // Scroll suave a la nueva receta y confeti
    setTimeout(() => {
      const newCard = document.getElementById(`card-${newId}`);
      if (newCard) {
        newCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      triggerHospitalCelebrationConfetti();
      playHospitalEntranceSound();
    }, 300);

    // Si eligió compartir de inmediato por WhatsApp
    if (shouldShareWhatsApp) {
      setTimeout(() => {
        shareSinglePrescription(newRx);
      }, 500);
    }

    // Reset formulario
    if (form) form.reset();
    if (sigPreview) sigPreview.textContent = 'Dr(a). Tu Nombre';
    if (customDiagInput) customDiagInput.style.display = 'none';
  };

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      saveNewPrescription(false);
    });
  }

  if (btnSubmitAndShare) {
    btnSubmitAndShare.addEventListener('click', () => {
      saveNewPrescription(true);
    });
  }

  // Enviar receta a Google Sheets
  async function sendPrescriptionToGoogleSheets(rx) {
    const scriptUrl = getGoogleScriptUrl();
    if (!scriptUrl) return;

    try {
      await fetch(scriptUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8'
        },
        body: JSON.stringify({
          id: rx.id,
          sender: rx.sender,
          relationship: rx.relationship,
          diagnosis: rx.diagnosis,
          treatment: rx.treatment,
          dose: rx.dose,
          likes: rx.likes || 0,
          likedBy: rx.likedBy || []
        })
      });
    } catch (err) {
      console.warn('Error al enviar receta a Google Sheets:', err);
    }
  }

  // Traer recetas desde Google Sheets
  async function fetchPrescriptionsFromGoogleSheets(silent = false) {
    const scriptUrl = getGoogleScriptUrl();
    if (!scriptUrl) return;

    try {
      const fetchUrl = `${scriptUrl}${scriptUrl.includes('?') ? '&' : '?'}t=${Date.now()}`;
      const response = await fetch(fetchUrl, {
        method: 'GET',
        mode: 'cors',
        cache: 'no-store'
      });

      if (response.ok) {
        const result = await response.json();
        if (result.status === 'success' && Array.isArray(result.data)) {
          const remoteRxs = result.data
            .map((row, idx) => {
              const likedBy = Array.isArray(row.likedBy)
                ? row.likedBy
                : (row.likedBy ? String(row.likedBy).split(',').map(s => s.trim()).filter(Boolean) : []);
              const likes = Number(row.likes) || (likedBy.length || 0);

              return {
                id: String(row.id || `remote_${idx}`),
                sender: row.sender || row.name || 'Anónimo',
                relationship: row.relationship || '',
                diagnosis: row.diagnosis || 'Sobredosis de Alegría',
                treatment: row.treatment || row.message || '',
                dose: row.dose || '',
                date: row.timestamp || 'Hoy',
                likes: likes,
                likedBy: likedBy
              };
            })
            .filter(rx => rx.sender && rx.treatment && !['RX-1001', 'RX-1002', 'RX-1003'].includes(rx.id));

          // Google Sheets es la fuente oficial y definitiva de la verdad:
          // 1. Conservar solo aquellas notas locales recién enviadas desde este dispositivo que aún estén pendientes de sincronizarse (< 30s)
          const now = Date.now();
          const finalRxs = [];
          const seenIds = new Set();

          prescriptions.forEach(localRx => {
            const lId = String(localRx.id);
            const inRemote = remoteRxs.some(r => String(r.id) === lId);
            if (!inRemote && localRx.isPendingSync && localRx.createdAt && (now - localRx.createdAt < 30000)) {
              if (!seenIds.has(lId)) {
                seenIds.add(lId);
                finalRxs.push(localRx);
              }
            }
          });

          // 2. Incorporar todas las filas actuales de Google Sheets (reflejando directamente cualquier edición o eliminación)
          remoteRxs.forEach(r => {
            const rId = String(r.id);
            if (!seenIds.has(rId)) {
              seenIds.add(rId);
              finalRxs.push(r);
            }
          });

          prescriptions = finalRxs;
          saveLocalPrescriptions();
          renderWall();
        }
      }
    } catch (err) {
      if (!silent) console.warn('No se pudo conectar a Google Sheets en este momento:', err);
    }
  }

  // Renderizar al inicializar
  renderWall();

  // Si hay URL de Google Sheets conectada, traer recetas de inmediato
  if (getGoogleScriptUrl()) {
    fetchPrescriptionsFromGoogleSheets(true);
  }

  // Sincronización periódica automática (cada 12 segundos) y al reactivar la pestaña
  setInterval(() => {
    if (getGoogleScriptUrl() && !document.hidden) {
      fetchPrescriptionsFromGoogleSheets(true);
    }
  }, 12000);

  document.addEventListener('visibilitychange', () => {
    if (getGoogleScriptUrl() && !document.hidden) {
      fetchPrescriptionsFromGoogleSheets(true);
    }
  });
}
