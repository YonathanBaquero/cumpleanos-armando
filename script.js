/**
 * ============================================================================
 * CUMPLEAÑOS DE ARMANDO - HOSPITAL DE LA FELICIDAD 🏥🎂🩺
 * Lógica interactiva: Puertas 3D, Sonidos Médicos, Confeti y Receta
 * ============================================================================
 */

// ========================================================
// 1. CONFIGURACIÓN DE LAS FOTOS Y CONSULTORIOS
// ========================================================
const ROOMS_DATA = [
  {
    id: 1,
    number: "101",
    specialty: "Cardiología de Recuerdos 🫀",
    tag: "Momento Inolvidable ❤️",
    title: "Un Corazón Lleno de Pasión",
    desc: "Para alguien que pone el alma en todo lo que hace, curando tristezas con una sonrisa y regalando siempre lo mejor de sí. ¡Gracias por cada momento compartido, Armando!",
    imageDefault: "fotos/foto1.svg",
    imageCustom: "fotos/foto1.jpg"
  },
  {
    id: 2,
    number: "102",
    specialty: "Traumatología & Risas 🩺",
    tag: "Dosis de Alegría 😄",
    title: "La Risa es la Mejor Medicina",
    desc: "Cualquier día difícil se alivia con tus ocurrencias, tus buenas charlas y esa energía contagiosa. ¡Que nunca te falten motivos para sonreír como hoy!",
    imageDefault: "fotos/foto2.svg",
    imageCustom: "fotos/foto2.jpg"
  },
  {
    id: 3,
    number: "103",
    specialty: "Quirófano: Operación Éxito 👨‍⚕️",
    tag: "Logros & Orgullo 🏆",
    title: "Superando Cada Desafío",
    desc: "Cada meta que te propones la alcanzas con dedicación, temple y sabiduría. Es un inmenso orgullo verte crecer, vencer retos y alcanzar grandes cimas.",
    imageDefault: "fotos/foto3.svg",
    imageCustom: "fotos/foto3.jpg"
  },
  {
    id: 4,
    number: "104",
    specialty: "Urgencias de Abrazos 🚑",
    tag: "Amor Incondicional 🫂",
    title: "Siempre a Tu Lado",
    desc: "En las buenas y en las no tan buenas, aquí tienes un equipo que te quiere, te apoya y celebra cada año de tu valiosa existencia. ¡Te queremos mucho, Armando!",
    imageDefault: "fotos/foto4.svg",
    imageCustom: "fotos/foto4.jpg"
  },
  {
    id: 5,
    number: "105",
    specialty: "Farmacia de Deseos & Pastel 🎂",
    tag: "¡Pide un Deseo! 🎂✨",
    title: "Un Brindis por tu Vida",
    desc: "Cierra los ojos, pide tu deseo más grande y sopla las velas con fuerza. Que este nuevo año de vida venga colmado de bendiciones, salud y grandes alegrías.",
    imageDefault: "fotos/foto5.svg",
    imageCustom: "fotos/foto5.jpg"
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
  initEntranceDoors();
  initClinicDoors();
  initPrescriptionModal();
  initLightboxModal();
  initAudioSystem();
  initActionButtons();
  initAutoDetectPhotos();
});

// ========================================================
// 3. PUERTAS PRINCIPALES DE ENTRADA (FACHADA 3D)
// ========================================================
function initEntranceDoors() {
  const btnEnter = document.getElementById('btnEnterHospital');
  const mainEntrance = document.querySelector('.main-entrance-3d');
  const hospitalHallway = document.getElementById('hospitalHallway');

  if (!btnEnter || !mainEntrance) return;

  const openMainDoors = () => {
    if (!mainEntrance.classList.contains('opened')) {
      mainEntrance.classList.add('opened');
      playHospitalEntranceSound();
      triggerHospitalCelebrationConfetti();

      // Scroll suave hacia los consultorios tras abrir
      setTimeout(() => {
        hospitalHallway.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 1000);
    } else {
      // Si ya está abierta, solo hace scroll al pasillo
      hospitalHallway.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  btnEnter.addEventListener('click', openMainDoors);
  mainEntrance.addEventListener('click', openMainDoors);
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

  // Botón superior: Abrir / Cerrar todas las puertas
  const btnOpenAll = document.getElementById('btnOpenAllDoors');
  if (btnOpenAll) {
    let allOpened = false;

    btnOpenAll.addEventListener('click', () => {
      allOpened = !allOpened;
      doors.forEach(door => {
        if (allOpened) {
          door.classList.add('opened');
        } else {
          door.classList.remove('opened');
        }
      });

      if (allOpened) {
        btnOpenAll.innerHTML = '<span class="icon">🔒</span><span class="btn-text">Cerrar Todas</span>';
        playHospitalEntranceSound();
        triggerHospitalCelebrationConfetti();
      } else {
        btnOpenAll.innerHTML = '<span class="icon">🚪</span><span class="btn-text">Abrir Todas</span>';
      }
    });
  }
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
    imgEl.src = currentImg ? currentImg.src : room.imageDefault;
    
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
