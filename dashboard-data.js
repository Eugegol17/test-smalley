// dashboard-data.js
// Shared profile data for both the test page and the dashboard.
// Import via <script src="dashboard-data.js"></script>

const profilesDB = {
    leon: {
        name: "León",
        color: "#4a7bb3",
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
        pros: ["Líderes.", "Inspiración.", "Ganadores.", "Potencial.", "Pendientes de las compañías."],
        cons: ["Empujan.", "Presionan.", "Avergüenzan.", "Dictadores.", "Irritantes.", "Ofensivos."],
        presion: ["No toma en cuenta distinciones.", "Inspira temor.", "Crítico y riguroso.", "Impaciente."]
    },
    nutria: {
        name: "Nutria",
        color: "#5b8ebc",
        image: "nutria.png",
        intro: "Las nutrias son el alma de la fiesta. Entusiastas, optimistas y amantes de la gente.",
        sobresaliente: [
            "Abierto, persuasivo y sociable.",
            "Interesado principalmente en la gente.",
            "Dispuesto a ayudar a otros.",
            "Puede cambiar el bando de una discusión sin darse cuenta.",
            "Las relaciones públicas son su fuerte."
        ],
        pros: ["Son el alma de las fiestas.", "Motivadores.", "Entretenimiento.", "Creativos.", "Toman riesgos.", "Entusiastas.", "Net-People."],
        cons: ["No van.", "Se olvidan.", "Peligrosos.", "Descuidados.", "Todo se les hace fácil."],
        presion: ["Agreden verbalmente.", "Impulsivos (más corazón que cabeza).", "Se preocupan mucho por la popularidad.", "Toman decisiones superficiales.", "Confían indiscriminadamente en la gente."]
    },
    labrador: {
        name: "Labrador Dorado",
        color: "#6c9ec5",
        image: "labrador.png",
        intro: "Los labradores son leales, pacíficos y buscan armonía profunda en sus relaciones.",
        sobresaliente: [
            "Generalmente pacífico.",
            "Humilde, leal y dócil.",
            "Lento en la toma de decisiones.",
            "Actúa siempre de forma cautelosa y diplomática.",
            "Hace lo posible para evitar conflictos."
        ],
        pros: ["Sensitivos.", "Armoniosos.", "Nutricios.", "Leales.", "Gente maravillosa.", "Bondad.", "Les agradan las rutinas."],
        cons: ["Inseguros.", "Indecisos.", "No confrontan.", "Resentidos.", "Evasivos."],
        presion: ["Depender.", "Verse envuelto en detalles.", "Se resiste a aceptar la responsabilidad completa.", "Quiere explicaciones exhaustivas.", "Cede su posición para evitar controversias.", "Actúa a la defensiva durante un ataque.", "Son sugestionables y dóciles."]
    },
    castor: {
        name: "Castor",
        color: "#2f5c8f",
        image: "castor.png",
        intro: "Los castores son precisos, ordenados y enfocados en hacer las cosas de manera perfecta.",
        sobresaliente: [
            "Capacidad de análisis profundo.",
            "Organización meticulosa.",
            "Atención al detalle absoluto.",
            "Suelen basarse estrictamente en los hechos.",
            "Siguen reglas.",
            "Aseguran el control de calidad."
        ],
        pros: ["Terminan proyectos con excelencia.", "Planificadores metódicos.", "Muy cuidadosos.", "Analíticos e intelectuales.", "Constantes."],
        cons: ["El perfeccionismo los paraliza.", "Demasiado críticos.", "Menosprecian las emociones de otros.", "Poco adaptables al cambio."],
        presion: ["Se vuelven muy críticos e inflexibles.", "Pueden llegar a ser pesimistas.", "Caer en un estado de 'parálisis por análisis'.", "Mostrarse insoportables con los detalles mínimos."]
    }
};
