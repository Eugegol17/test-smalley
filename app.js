// app.js

// --- 1. STATE MANAGEMENT ---
const state = {
  user: {
    name: "",
    company: "",
    age: null,
    gender: "",
    role: "",
  },
  currentRound: 0,
  scores: {
    leon: 0,
    nutria: 0,
    labrador: 0,
    castor: 0,
  },
  results: null, // Will hold the final analyzed result
};

// ---2. TEST DATA (Real extracted from PDF) ---
const testData = [
    [
        { id: '1-leon', type: 'leon', text: 'TE GUSTA TENER LA AUTORIDAD', icon: 'zap' },
        { id: '1-nutria', type: 'nutria', text: 'ERES ENTUSIASTA', icon: 'smile' },
        { id: '1-labrador', type: 'labrador', text: 'ERES SENSIBLE', icon: 'heart' },
        { id: '1-castor', type: 'castor', text: 'TE GUSTAN LAS INSTRUCCIONES', icon: 'file-text' }
    ],
    [
        { id: '2-leon', type: 'leon', text: 'TOMAS EL MANDO', icon: 'arrow-right' },
        { id: '2-nutria', type: 'nutria', text: 'TE ARRIESGAS', icon: 'flame' },
        { id: '2-labrador', type: 'labrador', text: 'ERES LEAL', icon: 'shield' },
        { id: '2-castor', type: 'castor', text: 'ERES PRECISO', icon: 'crosshair' }
    ],
    [
        { id: '3-leon', type: 'leon', text: 'ERES DETERMINADO', icon: 'mountain' },
        { id: '3-nutria', type: 'nutria', text: 'ERES VISIONARIO', icon: 'eye' },
        { id: '3-labrador', type: 'labrador', text: 'ERES CALMADO', icon: 'coffee' },
        { id: '3-castor', type: 'castor', text: 'ERES CONSTANTE', icon: 'anchor' }
    ],
    [
        { id: '4-leon', type: 'leon', text: 'ERES EMPRENDEDOR', icon: 'rocket' },
        { id: '4-nutria', type: 'nutria', text: 'TE GUSTA HABLAR', icon: 'message-circle' },
        { id: '4-labrador', type: 'labrador', text: 'TE GUSTA LA RUTINA', icon: 'calendar' },
        { id: '4-castor', type: 'castor', text: 'ERES PREDECIBLE', icon: 'clock' }
    ],
    [
        { id: '5-leon', type: 'leon', text: 'ERES COMPETITIVO', icon: 'trophy' },
        { id: '5-nutria', type: 'nutria', text: 'ERES PROMOTOR', icon: 'star' },
        { id: '5-labrador', type: 'labrador', text: 'NO TE GUSTA EL CAMBIO', icon: 'lock' },
        { id: '5-castor', type: 'castor', text: 'ERES PRACTICO', icon: 'wrench' }
    ],
    [
        { id: '6-leon', type: 'leon', text: 'RESUELVES PROBLEMAS', icon: 'hammer' },
        { id: '6-nutria', type: 'nutria', text: 'TE GUSTA LA POPULARIDAD', icon: 'users' },
        { id: '6-labrador', type: 'labrador', text: 'TE GUSTA DAR', icon: 'gift' },
        { id: '6-castor', type: 'castor', text: 'PREFIERES LOS HECHOS', icon: 'bar-chart' }
    ],
    [
        { id: '7-leon', type: 'leon', text: 'ERES PRODUCTIVO', icon: 'briefcase' },
        { id: '7-nutria', type: 'nutria', text: 'ERES AMIGABLE Y BUENO', icon: 'handshake' },
        { id: '7-labrador', type: 'labrador', text: 'EVITAS CONFRONTACION', icon: 'shield-off' },
        { id: '7-castor', type: 'castor', text: 'ERES PENSANTE', icon: 'brain' }
    ],
    [
        { id: '8-leon', type: 'leon', text: 'ERES DIRECTO', icon: 'navigation' },
        { id: '8-nutria', type: 'nutria', text: 'TE GUSTA LA VARIEDAD', icon: 'shuffle' },
        { id: '8-labrador', type: 'labrador', text: 'ERES SIMPATICO', icon: 'sun' },
        { id: '8-castor', type: 'castor', text: 'ERES PERFECCIONISTA', icon: 'check-square' }
    ],
    [
        { id: '9-leon', type: 'leon', text: 'TOMAS DECISIONES', icon: 'check-circle' },
        { id: '9-nutria', type: 'nutria', text: 'ERES ESPONTÁNEO', icon: 'lightbulb' },
        { id: '9-labrador', type: 'labrador', text: 'TE GUSTAN LAS RELACIONES PERSONALES', icon: 'heart-handshake' },
        { id: '9-castor', type: 'castor', text: 'TE GUSTAN LOS DETALLES', icon: 'search' }
    ],
    [
        { id: '10-leon', type: 'leon', text: 'ERES PERSISTENTE', icon: 'battery-charging' },
        { id: '10-nutria', type: 'nutria', text: 'ERES MOTIVADOR', icon: 'megaphone' },
        { id: '10-labrador', type: 'labrador', text: 'ERES PACIFICO', icon: 'leaf' },
        { id: '10-castor', type: 'castor', text: 'ERES ANALITICO', icon: 'pie-chart' }
    ]
];

// --- 3. PROFILES DATABASE ---
const profilesDB = {
    leon: {
        name: "León",
        color: "#4a7bb3", // BREY Blue Theme 1
        image: "leon.png",
        intro: "Los leones son líderes natos, enfocados en resultados y fuertemente motivados. Toman el control y les gustan los desafíos.",
        sobresaliente: [
            "Le apasionan los retos, los crea y los necesita.",
            "Listo para la competencia.",
            "Respeta a los que ganan.",
            "Se desempeña mejor con autoridad y responsabilidad.",
            "Le gusta ser el centro de atención.",
            "Le encanta resolver problemas."
        ],
        pros: [
            "Líderes.",
            "Inspiración.",
            "Ganadores.",
            "Potencial.",
            "Pendientes de las compañías."
        ],
        cons: [
            "Empujan.",
            "Presionan.",
            "Avergüenzan.",
            "Dictadores.",
            "Irritantes.",
            "Ofensivos."
        ],
        presion: [
            "No toma en cuenta distinciones.",
            "Inspira temor.",
            "Crítico y riguroso.",
            "Impaciente."
        ]
    },
    nutria: {
        name: "Nutria",
        color: "#5b8ebc", // BREY Blue Theme 2
        image: "nutria.png",
        intro: "Las nutrias son el alma de la fiesta. Entusiastas, optimistas y amantes de la gente. Su motivación es la diversión y la popularidad.",
        sobresaliente: [
            "Abierto, persuasivo y sociable.",
            "Interesado principalmente en la gente.",
            "Dispuesto a ayudar a otros.",
            "Puede cambiar el bando de una discusión sin darse cuenta.",
            "Las relaciones públicas son su fuerte."
        ],
        pros: [
            "Son el alma de las fiestas.",
            "Motivadores.",
            "Entretenimiento.",
            "Creativos.",
            "Toman riesgos.",
            "Entusiastas.",
            "Net-People."
        ],
        cons: [
            "No van.",
            "Se olvidan.",
            "Peligrosos.",
            "Descuidados.",
            "Todo se les hace fácil."
        ],
        presion: [
            "Agreden verbalmente.",
            "Impulsivos (más corazón que cabeza).",
            "Se preocupan mucho por la popularidad.",
            "Toman decisiones superficiales.",
            "Confían indiscriminadamente en la gente."
        ]
    },
    labrador: {
        name: "Labrador Dorado",
        color: "#6c9ec5", // BREY Blue Theme 3
        image: "labrador.png",
        intro: "Los labradores son leales, pacíficos y buscan armonía profunda en sus relaciones. Su motivación es la seguridad y ayudar a los demás.",
        sobresaliente: [
            "Generalmente pacífico.",
            "Es humilde, leal y dócil, trata siempre de hacer lo mejor posible.",
            "Es lento en la toma de decisiones.",
            "Actúa siempre de forma cautelosa y diplomática.",
            "Hace lo posible para evitar conflictos y nunca pasará por encima de la gente."
        ],
        pros: [
            "Sensitivos.",
            "Armoniosos.",
            "Nutricios.",
            "Leales.",
            "Gente maravillosa.",
            "Bondad.",
            "Les agradan las rutinas."
        ],
        cons: [
            "Inseguros.",
            "Indecisos.",
            "No confrontan.",
            "Resentidos.",
            "Evasivos."
        ],
        presion: [
            "Depender.",
            "Verse envuelto en detalles.",
            "Se resiste a aceptar la responsabilidad completa.",
            "Quiere explicaciones exhaustivas.",
            "Cede su posición para evitar controversias.",
            "Actúa a la defensiva durante un ataque.",
            "Son sugestionables y dóciles."
        ]
    },
    castor: {
        name: "Castor",
        color: "#2f5c8f", // BREY Blue Theme 4
        image: "castor.png",
        intro: "Los castores son precisos, ordenados y enfocados en hacer las cosas de manera perfecta. Su motivación es la calidad e integridad del trabajo.",
        sobresaliente: [
            "Capacidad de análisis profundo.",
            "Organización meticulosa.",
            "Atención al detalle absoluto.",
            "Suelen basarse estrictamente en los hechos.",
            "Siguen reglas.",
            "Aseguran el control de calidad."
        ],
        pros: [
            "Terminan proyectos con excelencia.",
            "Planificadores metódicos.",
            "Muy cuidadosos.",
            "Analíticos e intelectuales.",
            "Constantes."
        ],
        cons: [
            "El perfeccionismo los paraliza.",
            "Demasiado críticos.",
            "Menosprecian las emociones de otros.",
            "Poco adaptables al cambio."
        ],
        presion: [
            "Se vuelven muy críticos e inflexibles.",
            "Pueden llegar a ser pesimistas.",
            "Caer en un estado de 'parálisis por análisis'.",
            "Mostrarse insoportables con los detalles mínimos."
        ]
    }
};

let sortableInstance = null;
let chartInstance    = null;
let hasSavedToFirebase = false; // guard against double-save

// --- 4. CORE FUNCTIONS ---

// Validates that the name field contains at least two words (first name + last name)
function validateNameField(input) {
  const hint = document.getElementById("name-hint");
  const words = input.value.trim().split(/\s+/);
  const valid = words.length >= 2 && words[1].length > 0;
  if (valid) {
    input.style.borderColor = "#22c55e";
    if (hint) { hint.textContent = "✓ Nombre y apellido registrados"; hint.style.color = "#15803d"; }
  } else {
    input.style.borderColor = input.value.length > 0 ? "#ef4444" : "";
    if (hint) { hint.textContent = "Incluye nombre y apellido"; hint.style.color = "#9ca3af"; }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  // 1. Initial listener for Registration
  document
    .getElementById("registration-form")
    .addEventListener("submit", function (e) {
      e.preventDefault();

      // Validate name has at least two words
      const nameVal = document.getElementById("reg-name").value.trim();
      const nameWords = nameVal.split(/\s+/);
      if (nameWords.length < 2 || nameWords[1].length === 0) {
        Swal.fire({
          icon: "warning",
          title: "Nombre incompleto",
          text: "Por favor escribe tu nombre y al menos un apellido.",
          confirmButtonColor: "#0B67C9",
        });
        document.getElementById("reg-name").focus();
        return;
      }

      // Save User Data
      state.user.name = nameVal;
      state.user.company = document.getElementById("reg-company").value || "";
      state.user.age = document.getElementById("reg-age").value;
      state.user.gender = document.getElementById("reg-gender").value;
      state.user.role = document.getElementById("reg-role").value;

      // Reset Scores
      state.scores = { leon: 0, nutria: 0, labrador: 0, castor: 0 };
      state.currentRound = 0;
      hasSavedToFirebase = false; // reset for new test session

      startTest();
    });

  // 2. Next Round Button
  document
    .getElementById("btn-next-round")
    .addEventListener("click", handleNextRound);

  // 3. Export PDF Button
  document
    .getElementById("btn-export-pdf")
    .addEventListener("click", generatePDF);
});

function switchView(viewId) {
  document.querySelectorAll(".view-section").forEach((el) => {
    el.classList.remove("active");
    setTimeout(() => (el.style.display = "none"), 500); // fade out effect
  });

  setTimeout(() => {
    const target = document.getElementById(viewId);
    target.style.display = "flex";
    // A little delay to ensure display:flex is applied before adding opacity via class
    setTimeout(() => target.classList.add("active"), 10);
  }, 500);
}

function startTest() {
  switchView("test-view");
  renderRound();
}

// Utility to shuffle arrays (Fisher-Yates) for randomness
function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

function renderRound() {
  state.currentRound++;

  // Check if finished
  if (state.currentRound > testData.length) {
    finishTest();
    return;
  }

  // Update Header UI
  document.getElementById("current-round").innerText = state.currentRound;
  const progressPerc = (state.currentRound / testData.length) * 100;
  document.getElementById("progress-bar").style.width = `${progressPerc}%`;

  // Render List
  const listEl = document.getElementById("sortable-list");
  listEl.innerHTML = "";

  // Get and shuffle the 4 cards for this round
  const cardsInfo = [...testData[state.currentRound - 1]];
  shuffleArray(cardsInfo);

  cardsInfo.forEach((card) => {
    const li = document.createElement("li");
    li.className = "sortable-item";
    li.dataset.type = card.type;
    const animalColor = profilesDB[card.type].color; // Get color from profile
    li.innerHTML = `
        <div class="flex items-center gap-3 w-full pr-2">
            <div style="color: ${animalColor}" class="bg-gray-50 p-2 rounded-lg flex-shrink-0">
                <i data-lucide="${card.icon}" class="w-5 h-5"></i>
            </div>
            <span class="text-gray-700 font-medium whitespace-normal leading-tight" style="word-break: break-word;">${card.text}</span>
        </div>
        <div class="text-gray-300 cursor-grab active:cursor-grabbing hover:text-gray-500 transition-colors flex-shrink-0">
            <i data-lucide="grip-vertical" class="w-5 h-5"></i>
        </div>
        `;
    listEl.appendChild(li);
  });

  // Re-initialize Lucide Icons for dynamic content
  lucide.createIcons();

  // Destroy previous sortable instance if exists to prevent memory leaks
  if (sortableInstance) {
    sortableInstance.destroy();
  }

  // Init Sortable
  sortableInstance = new Sortable(listEl, {
    animation: 150,
    ghostClass: "sortable-ghost",
    dragClass: "sortable-drag",
    easing: "cubic-bezier(0.25, 1, 0.5, 1)",
  });
}

function handleNextRound() {
  // 1. Calculate Score from current DOM order
  const listItems = document.querySelectorAll("#sortable-list .sortable-item");
  // Top is index 0 -> 4 points ... Bottom is index 3 -> 1 point
  const pointsMap = [4, 3, 2, 1];

  listItems.forEach((li, index) => {
    const type = li.dataset.type;
    state.scores[type] += pointsMap[index];
  });

  // 2. Go to next round
  renderRound();
}

function cancelTest() {
  Swal.fire({
    title: "¿Estás seguro?",
    text: "Perderás el progreso de la prueba actual.",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#4f46e5",
    cancelButtonColor: "#ef4444",
    confirmButtonText: "Sí, salir",
    cancelButtonText: "Continuar prueba",
  }).then((result) => {
    if (result.isConfirmed) {
      location.reload(); // Hard reset
    }
  });
}

function finishTest() {
  // Determine Dominant
  let dominantAnimal = "leon";
  let maxScore = -1;

  for (const [animal, score] of Object.entries(state.scores)) {
    if (score > maxScore) {
      maxScore = score;
      dominantAnimal = animal;
    }
  }

  state.results = {
    dominant: dominantAnimal,
    scores: state.scores,
  };

  renderResults();
  switchView("results-view");

  // Save to Firebase once per completed test
  if (!hasSavedToFirebase) {
    hasSavedToFirebase = true;
    saveToFirebase();
  }
}

function renderResults() {
  const dominant = state.results.dominant;
  const profile = profilesDB[dominant];

  // Theme injection (CSS updates via root variable)
  document.documentElement.setAttribute("data-theme", dominant);

  // Header Display
  document.getElementById("res-name-display").innerText = state.user.name;
  document.getElementById("res-dominant-animal").innerText = profile.name;
  document.getElementById("res-dominant-intro").innerText = profile.intro;

  // Body Display
  // Helper for rendering lists
  const renderList = (items, colorClass) => {
    return `<ul class="list-disc pl-5 ${colorClass} space-y-1">` +
           items.map(item => `<li>${item}</li>`).join('') +
           `</ul>`;
  };

  // Body Display
  document.getElementById("res-sobresaliente").innerHTML = renderList(profile.sobresaliente, "text-gray-700");

  const prosHTML = `<strong>A Favor:</strong>` + renderList(profile.pros, "text-green-700 opacity-90 mt-1 mb-2");
  const consHTML = `<strong>En Contra:</strong>` + renderList(profile.cons, "text-red-700 opacity-90 mt-1");
  document.getElementById("res-pros-cons").innerHTML = prosHTML + consHTML;

  document.getElementById("res-presion").innerHTML = renderList(profile.presion, "text-gray-700");

  // Render Dominant Image with white background protection
  document.getElementById("res-animal-img").src = profile.image;

  // Render Chart.js
  const ctx = document.getElementById("resultsChart").getContext("2d");

  if (chartInstance) {
    chartInstance.destroy();
  }

  chartInstance = new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["León", "Nutria", "Labrador", "Castor"],
      datasets: [
        {
          label: "Puntaje Obtenido",
          data: [
            state.scores.leon,
            state.scores.nutria,
            state.scores.labrador,
            state.scores.castor,
          ],
          backgroundColor: [
            profilesDB.leon.color,
            profilesDB.nutria.color,
            profilesDB.labrador.color,
            profilesDB.castor.color,
          ],
          borderRadius: 8,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
          min: 10,
          max: 40, // As per instruction
          grid: { borderDash: [5, 5] },
          ticks: { stepSize: 10 },
        },
        x: {
          grid: { display: false },
        },
      },
      plugins: {
        legend: { display: false },
      },
    },
    plugins: [
      {
        id: "barValueLabels",
        afterDraw(chart) {
          const ctx = chart.ctx;
          chart.data.datasets.forEach((dataset, i) => {
            const meta = chart.getDatasetMeta(i);
            meta.data.forEach((bar, index) => {
              const value = dataset.data[index];
              ctx.save();
              ctx.font = "bold 13px 'Outfit', sans-serif";
              ctx.fillStyle = "#1e3a8a";
              ctx.textAlign = "center";
              ctx.textBaseline = "bottom";
              ctx.fillText(value, bar.x, bar.y - 4);
              ctx.restore();
            });
          });
        },
      },
    ],
  });
}

async function saveToFirebase() {
  if (!window._fb) {
    console.warn("Firebase no disponible todavía.");
    return;
  }

  try {
    const { db, collection, addDoc } = window._fb;
    const dominant = state.results.dominant;

    await addDoc(collection(db, "resultados_smalley"), {
      name:      state.user.name,
      age:       state.user.age       || null,
      gender:    state.user.gender    || null,
      company:   state.user.company   || null,
      role:      state.user.role      || null,
      scores:    state.scores,
      dominant:  dominant,
      timestamp: new Date(),
    });

    console.log("✅ Resultado guardado en Firebase.");
  } catch (err) {
    console.error("Firebase save error:", err);
  }
}

// --- 5. PDF GENERATION LOGIC ---

async function generatePDF() {
  // 1. Fill Hidden Template
  const template = document.getElementById("pdf-template");
  template.classList.remove("hidden-for-pdf"); // Make visible temporarily out of screen

  // Header Info
  const today = new Date();
  document.getElementById("pdf-date").innerText = today.toLocaleDateString("es-MX");
  document.getElementById("pdf-name").innerText = state.user.name;
  document.getElementById("pdf-age").innerText = state.user.age || "N/A";

  // Get text from rendered results view
  const dominant = state.results.dominant;
  const profile = profilesDB[dominant];
  document.getElementById("pdf-animal").innerText = profile.name;
  document.getElementById("pdf-animal").style.color = profile.color;

  document.getElementById("pdf-sobresaliente").innerHTML =
    document.getElementById("res-sobresaliente").innerHTML;
  document.getElementById("pdf-pros-cons").innerHTML =
    document.getElementById("res-pros-cons").innerHTML; // copy html list
  
  // Use the HTML version created for results view
  document.getElementById("pdf-presion").innerHTML = document.getElementById("res-presion").innerHTML;

  document.getElementById("pdf-animal-img").src = profile.image;

  // Grab the chart rendering as base64 image and inject it into the template
  const chartBase64 = document
    .getElementById("resultsChart")
    .toDataURL("image/png");
  document.getElementById("pdf-chart-img").src = chartBase64;

  // Show loading alert
  Swal.fire({
    title: "Generando Reporte...",
    html: "Por favor espera unos segundos",
    allowOutsideClick: false,
    didOpen: () => {
      Swal.showLoading();
    },
  });

  try {
    // 2. Render Template canvas
    const canvas = await html2canvas(template, {
      scale: 2, // High resolution
      useCORS: true,
    });

    // 3. Create PDF scaled to match the DOM exactly
    const pdfData = canvas.toDataURL("image/jpeg", 0.95);
    const pdfWidth = canvas.width / 2; // scale is 2
    const pdfHeight = canvas.height / 2;

    const pdf = new jspdf.jsPDF({
      orientation: pdfWidth > pdfHeight ? "landscape" : "portrait",
      unit: "px",
      format: [Math.ceil(pdfWidth), Math.ceil(pdfHeight)],
    });

    pdf.addImage(pdfData, "JPEG", 0, 0, pdfWidth, pdfHeight);
    pdf.save(`Reporte_Smalley_${state.user.name.replace(/\s+/g, "_")}.pdf`);

    Swal.close();
    Swal.fire({
      icon: "success",
      title: "¡Reporte Descargado!",
      text: "Tu archivo PDF se ha generado existosamente.",
      timer: 3000,
      showConfirmButton: false,
    });
  } catch (err) {
    console.error("PDF Generate error", err);
    Swal.fire("Error", "No se pudo generar el reporte PDF.", "error");
  } finally {
    template.classList.add("hidden-for-pdf"); // hide again
  }
}

