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
    desc: "Para alguien que pone el alma en todo lo que hace, curando tristezas con una sonrisa y regalando siempre lo mejor de sí. ¡Gracias por cada momento compartido, Armando!",
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
    desc: "En las buenas y en las no tan buenas, aquí tienes un equipo que te quiere, te apoya y celebra cada año de tu valiosa existencia. ¡Te queremos mucho, Armando!",
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
    desc: "Hoy se vale celebrar con todo: buena comida, brindis por tus éxitos y el cariño de quienes te admiramos profundamente. ¡Salud por ti, Armando!",
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

    // Reacción festiva del muñeco 3D del Dr. Armando
    const mascotImg = document.getElementById('doctorMascotImg');
    const mascotSpeechText = document.getElementById('mascotSpeechText');
    if (mascotImg) {
      mascotImg.classList.add('doll-celebrating');
    }
    if (mascotSpeechText) {
      mascotSpeechText.textContent = '"¡Adelante! ¡Bienvenido a mis consultorios! 🏥✨"';
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
    "¡Hola! Soy el Dr. Armando 🩺 ¡Toca mis puertas para entrar a los consultorios!",
    "¡Diagnóstico oficial: Hoy es día de fiesta, abrazos y mucho pastel! 🎂🎉",
    "¡Prescripción médica: 100 dosis de alegría y risas sin límite! 😄💊",
    "¡Signos vitales al 100%: ritmo cardíaco acelerado de felicidad! ❤️🩺",
    "¡Hoy no atiendo consultas, hoy celebro mi cumpleaños con ustedes! 🥳✨",
    "¡Toca las puertas dobles a mi lado para ver mis fotos y recuerdos! 🚪👇"
  ];
  let quoteIndex = 0;

  mascotCard.addEventListener('click', () => {
    // Si ya está animando, reiniciar animación
    mascotImg.classList.remove('doll-celebrating');
    void mascotImg.offsetWidth;
    mascotImg.classList.add('doll-celebrating');

    // Reproducir tono musical alegre
    playDoorChimeSound();

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
    quoteIndex = (quoteIndex + 1) % doctorQuotes.length;
    if (mascotSpeechText) {
      mascotSpeechText.style.opacity = '0';
      setTimeout(() => {
        mascotSpeechText.textContent = `"${doctorQuotes[quoteIndex]}"`;
        mascotSpeechText.style.opacity = '1';
      }, 150);
    }
  });
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
    const text = encodeURIComponent('🏥🎂 ¡Te invito a celebrar el cumpleaños de Armando! Abre las puertas y descubre sus fotos y recuerdos en su Hospital Interactivo: ' + pageUrl);
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
      const text = encodeURIComponent(`🩺 ¡Emergencia especial de cumpleaños para el Dr. Armando! Abre las puertas de los consultorios y descubre los recuerdos que preparamos para ti aquí: ${pageUrl}`);
      window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
    });
  }
}

// ========================================================
// 9. SINTETIZADOR DE SONIDOS MÉDICOS (WEB AUDIO API)
// ========================================================
function initAudioSystem() {
  const btnAudio = document.getElementById('btnAudioToggle');
  if (!btnAudio) return;

  btnAudio.addEventListener('click', () => {
    soundEnabled = !soundEnabled;
    btnAudio.innerHTML = soundEnabled ? '<span class="icon">🔊</span>' : '<span class="icon">🔇</span>';
    btnAudio.style.opacity = soundEnabled ? '1' : '0.6';
  });
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
