export interface Discipline {
  id: string;
  name: string;
  category: string;
  subdisciplines: string[];
}

export const disciplines: Discipline[] = [
    {
      "id": "SCI001",
      "name": "Mathematics",
      "category": "Formal Science",
      "subdisciplines": ["Algebra", "Geometry", "Calculus", "Topology", "Number Theory"]
    },
    {
      "id": "SCI002",
      "name": "Logic",
      "category": "Formal Science",
      "subdisciplines": ["Propositional Logic", "Predicate Logic", "Modal Logic", "Fuzzy Logic"]
    },
    {
      "id": "SCI003",
      "name": "Statistics",
      "category": "Formal Science",
      "subdisciplines": ["Descriptive Statistics", "Inferential Statistics", "Bayesian Statistics"]
    },
    {
      "id": "SCI004",
      "name": "Computer Science",
      "category": "Formal Science",
      "subdisciplines": ["Theoretical Computer Science", "Algorithms & Data Structures", "Software Engineering", "Artificial Intelligence"]
    },
    {
      "id": "SCI005",
      "name": "Systems Science",
      "category": "Formal Science",
      "subdisciplines": ["Complexity Science", "Cybernetics", "Systems Theory"]
    },
    {
      "id": "SCI006",
      "name": "Physics",
      "category": "Natural Science",
      "subdisciplines": ["Classical Mechanics", "Thermodynamics", "Electromagnetism", "Optics"]
    },
    {
      "id": "SCI007",
      "name": "Chemistry",
      "category": "Natural Science",
      "subdisciplines": ["Analytical Chemistry", "Organic Chemistry", "Inorganic Chemistry", "Physical Chemistry", "Biochemistry"]
    },
    {
      "id": "SCI008",
      "name": "Biology",
      "category": "Natural Science",
      "subdisciplines": ["Botany", "Zoology", "Microbiology", "Evolutionary Biology", "Molecular Biology"]
    },
    {
      "id": "SCI009",
      "name": "Earth Science",
      "category": "Natural Science",
      "subdisciplines": ["Geology", "Meteorology", "Oceanography", "Climatology"]
    },
    {
      "id": "SCI010",
      "name": "Astronomy",
      "category": "Natural Science",
      "subdisciplines": ["Observational Astronomy", "Theoretical Astronomy", "Astrophysics"]
    },
    {
      "id": "SCI011",
      "name": "Cosmology",
      "category": "Cosmogony & Cosmology",
      "subdisciplines": ["Big Bang Theory Studies", "Dark Matter/Energy Research", "Cosmic Microwave Background Analysis"]
    },
    {
      "id": "SCI012",
      "name": "Cosmogony",
      "category": "Cosmogony & Cosmology",
      "subdisciplines": ["Universal Origin Theories", "Stellar Formation Models", "Planetary System Birth"]
    },
    {
      "id": "SCI013",
      "name": "Geology",
      "category": "Earth Science",
      "subdisciplines": ["Petrology", "Mineralogy", "Seismology", "Paleontology"]
    },
    {
      "id": "SCI014",
      "name": "Meteorology",
      "category": "Earth Science",
      "subdisciplines": ["Atmospheric Physics", "Weather Forecasting", "Climatology"]
    },
    {
      "id": "SCI015",
      "name": "Oceanography",
      "category": "Earth Science",
      "subdisciplines": ["Physical Oceanography", "Chemical Oceanography", "Biological Oceanography"]
    },
    {
      "id": "SCI016",
      "name": "Ecology",
      "category": "Life Science",
      "subdisciplines": ["Ecosystem Ecology", "Population Ecology", "Conservation Biology"]
    },
    {
      "id": "SCI017",
      "name": "Genetics",
      "category": "Life Science",
      "subdisciplines": ["Molecular Genetics", "Population Genetics", "Genomics"]
    },
    {
      "id": "SCI018",
      "name": "Neuroscience",
      "category": "Life Science",
      "subdisciplines": ["Cognitive Neuroscience", "Neurophysiology", "Computational Neuroscience"]
    },
    {
      "id": "SCI019",
      "name": "Artificial Intelligence",
      "category": "Interdisciplinary Science",
      "subdisciplines": ["Machine Learning", "Neural Networks", "Computer Vision", "Natural Language Processing"]
    },
    {
      "id": "SCI020",
      "name": "Engineering",
      "category": "Applied Science",
      "subdisciplines": ["Civil Engineering", "Mechanical Engineering", "Electrical Engineering", "Chemical Engineering", "Aerospace Engineering", "Biomedical Engineering"]
    },
    {
      "id": "SCI021",
      "name": "Medicine",
      "category": "Applied Science",
      "subdisciplines": ["General Medicine", "Surgery", "Internal Medicine", "Pediatrics", "Psychiatry"]
    },
    {
      "id": "SCI022",
      "name": "Pharmacology",
      "category": "Applied Science",
      "subdisciplines": ["Clinical Pharmacology", "Toxicology", "Neuropharmacology"]
    },
    {
      "id": "SCI023",
      "name": "Psychology",
      "category": "Social Science",
      "subdisciplines": ["Clinical Psychology", "Cognitive Psychology", "Developmental Psychology", "Social Psychology"]
    },
    {
      "id": "SCI024",
      "name": "Sociology",
      "category": "Social Science",
      "subdisciplines": ["Social Theory", "Cultural Sociology", "Demography"]
    },
    {
      "id": "SCI025",
      "name": "Anthropology",
      "category": "Social Science",
      "subdisciplines": ["Cultural Anthropology", "Archaeology", "Biological Anthropology"]
    },
    {
      "id": "SCI026",
      "name": "Economics",
      "category": "Social Science",
      "subdisciplines": ["Microeconomics", "Macroeconomics", "Behavioral Economics"]
    },
    {
      "id": "SCI027",
      "name": "History",
      "category": "Humanities",
      "subdisciplines": ["Ancient History", "Medieval History", "Modern History", "Economic History"]
    },
    {
      "id": "SCI028",
      "name": "Philosophy",
      "category": "Humanities",
      "subdisciplines": ["Metaphysics", "Epistemology", "Ethics", "Logic"]
    },
    {
      "id": "SCI029",
      "name": "Linguistics",
      "category": "Humanities",
      "subdisciplines": ["Phonetics", "Syntax", "Semantics", "Pragmatics"]
    },
    {
      "id": "SCI030",
      "name": "Theology",
      "category": "Humanities",
      "subdisciplines": ["Comparative Theology", "Systematic Theology", "Biblical Studies"]
    },
    {
      "id": "SCI031",
      "name": "Archaeology",
      "category": "Humanities",
      "subdisciplines": ["Prehistoric Archaeology", "Egyptology", "Underwater Archaeology"]
    },
    {
      "id": "SCI032",
      "name": "Environmental Science",
      "category": "Interdisciplinary Science",
      "subdisciplines": ["Conservation Science", "Sustainability Studies", "Environmental Policy"]
    },
    {
      "id": "SCI033",
      "name": "Biotechnology",
      "category": "Applied Science",
      "subdisciplines": ["Genetic Engineering", "Tissue Culture", "Synthetic Biology"]
    },
    {
      "id": "SCI034",
      "name": "Nanotechnology",
      "category": "Applied Science",
      "subdisciplines": ["Nanoelectronics", "Nanomaterials", "Medical Nanotech"]
    },
    {
      "id": "SCI035",
      "name": "Quantum Computing",
      "category": "Interdisciplinary Science",
      "subdisciplines": ["Quantum Algorithms", "Quantum Communications", "Quantum Error Correction"]
    },
    {
      "id": "SCI036",
      "name": "Astrobiology",
      "category": "Extraterrestrial Science",
      "subdisciplines": ["Life Detection", "Habitability Studies", "Exobiology"]
    },
    {
      "id": "SCI037",
      "name": "Astrochemistry",
      "category": "Extraterrestrial Science",
      "subdisciplines": ["Interstellar Chemistry", "Planetary Atmosphere Chemistry"]
    },
    {
      "id": "SCI038",
      "name": "Astrogeology",
      "category": "Extraterrestrial Science",
      "subdisciplines": ["Planetary Geology", "Impact Cratering"]
    },
    {
      "id": "SCI039",
      "name": "Exoplanetology",
      "category": "Extraterrestrial Science",
      "subdisciplines": ["Exoplanet Detection", "Characterization Techniques"]
    },
    {
      "id": "SCI040",
      "name": "SETI Studies",
      "category": "Extraterrestrial Science",
      "subdisciplines": ["Radio Signal Analysis", "Optical SETI"]
    },
    {
      "id": "SCI041",
      "name": "Terraforming Science",
      "category": "Extraterrestrial Science",
      "subdisciplines": ["Planetary Climate Engineering", "Atmospheric Modification"]
    },
    {
      "id": "SCI042",
      "name": "Metaphysics",
      "category": "Spiritual & Vibrational Science",
      "subdisciplines": ["Ontology", "Philosophy of Mind"]
    },
    {
      "id": "SCI043",
      "name": "Parapsychology",
      "category": "Spiritual & Vibrational Science",
      "subdisciplines": ["ESP Research", "PK Studies"]
    },
    {
      "id": "SCI044",
      "name": "Energy Medicine",
      "category": "Spiritual & Vibrational Science",
      "subdisciplines": ["Reiki", "Biofield Therapy"]
    },
    {
      "id": "SCI045",
      "name": "Vibrational Science",
      "category": "Spiritual & Vibrational Science",
      "subdisciplines": ["Cymatics", "Sound Healing"]
    },
    {
      "id": "SCI046",
      "name": "Alchemy",
      "category": "Spiritual & Vibrational Science",
      "subdisciplines": ["Hermetic Alchemy", "Spiritual Alchemy", "Laboratory Alchemy"]
    },
    {
      "id": "SCI047",
      "name": "Hermetic Science",
      "category": "Spiritual & Vibrational Science",
      "subdisciplines": ["Hermetic Philosophy", "Occultism"]
    },
    {
      "id": "SCI048",
      "name": "Astrology",
      "category": "Spiritual & Vibrational Science",
      "subdisciplines": ["Natal Astrology", "Mundane Astrology", "Predictive Astrology"]
    },
    {
      "id": "SCI049",
      "name": "Numerology",
      "category": "Spiritual & Vibrational Science",
      "subdisciplines": ["Pythagorean Numerology", "Chaldean Numerology"]
    },
    {
      "id": "SCI050",
      "name": "Sacred Geometry",
      "category": "Spiritual & Vibrational Science",
      "subdisciplines": ["Platonic Solids", "Flower of Life", "Sri Yantra"]
    },
    {
      "id": "SCI051",
      "name": "Chronoalchemy",
      "category": "Cosmic & Temporal Sciences",
      "subdisciplines": ["Chronoalchemical Modeling", "Temporal Field Theory"]
    },
    {
      "id": "SCI052",
      "name": "Planetary Science",
      "category": "Natural Science",
      "subdisciplines": ["Planetary Geology", "Planetary Atmospheres", "Magnetospheric Physics"]
    },
    {
      "id": "SCI053",
      "name": "Exogeology",
      "category": "Extraterrestrial Science",
      "subdisciplines": ["Lunar Geology", "Martian Geology", "Asteroid Petrology"]
    },
    {
      "id": "SCI054",
      "name": "Helioseismology",
      "category": "Astrophysics",
      "subdisciplines": ["Solar Oscillations", "Solar Interior Modeling"]
    },
    {
      "id": "SCI055",
      "name": "Gravitational Wave Science",
      "category": "Astrophysics",
      "subdisciplines": ["Interferometric Detection", "Waveform Modeling"]
    },
    {
      "id": "SCI056",
      "name": "Quantum Field Theory",
      "category": "Formal Science",
      "subdisciplines": ["Gauge Theory", "Renormalization"]
    },
    {
      "id": "SCI057",
      "name": "String Theory",
      "category": "Formal Science",
      "subdisciplines": ["M-Theory", "Brane Dynamics"]
    },
    {
      "id": "SCI058",
      "name": "Topology",
      "category": "Mathematics",
      "subdisciplines": ["Algebraic Topology", "Differential Topology"]
    },
    {
      "id": "SCI059",
      "name": "Category Theory",
      "category": "Mathematics",
      "subdisciplines": ["Functor Theory", "Natural Transformations"]
    },
    {
      "id": "SCI060",
      "name": "Graph Theory",
      "category": "Mathematics",
      "subdisciplines": ["Network Analysis", "Combinatorial Optimization"]
    },
    {
      "id": "SCI061",
      "name": "Data Science",
      "category": "Interdisciplinary Science",
      "subdisciplines": ["Data Mining", "Big Data Analytics"]
    },
    {
      "id": "SCI062",
      "name": "Cognitive Science",
      "category": "Interdisciplinary Science",
      "subdisciplines": ["Cognitive Neuroscience", "Artificial Intelligence", "Psycholinguistics"]
    },
    {
      "id": "SCI063",
      "name": "Political Science",
      "category": "Social Science",
      "subdisciplines": ["Comparative Politics", "Political Theory"]
    },
    {
      "id": "SCI064",
      "name": "Law",
      "category": "Social Science",
      "subdisciplines": ["International Law", "Constitutional Law"]
    },
    {
      "id": "SCI065",
      "name": "Education Science",
      "category": "Social Science",
      "subdisciplines": ["Pedagogy", "Curriculum Development"]
    },
    {
      "id": "SCI066",
      "name": "Art History",
      "category": "Humanities",
      "subdisciplines": ["Renaissance Art", "Modern Art"]
    },
    {
      "id": "SCI067",
      "name": "Musicology",
      "category": "Humanities",
      "subdisciplines": ["Ethnomusicology", "Music Theory"]
    },
    {
      "id": "SCI068",
      "name": "Space Medicine",
      "category": "Extraterrestrial Science",
      "subdisciplines": ["Space Physiology", "Radiobiology"]
    },
    {
      "id": "SCI069",
      "name": "Materials Science",
      "category": "Applied Science",
      "subdisciplines": ["Metallurgy", "Polymer Science"]
    },
    {
      "id": "SCI070",
      "name": "Environmental Engineering",
      "category": "Applied Science",
      "subdisciplines": ["Water Treatment", "Air Pollution Control"]
    },
    {
      "id": "SCI071",
      "name": "Immunology",
      "category": "Life Science",
      "subdisciplines": ["Molecular Immunology", "Cellular Immunology", "Clinical Immunology"]
    },
    {
      "id": "SCI072",
      "name": "Virology",
      "category": "Life Science",
      "subdisciplines": ["Molecular Virology", "Viral Immunology", "Epidemiology of Viral Diseases"]
    },
    {
      "id": "SCI073",
      "name": "Endocrinology",
      "category": "Life Science",
      "subdisciplines": ["Hormone Biology", "Metabolic Endocrinology", "Reproductive Endocrinology"]
    },
    {
      "id": "SCI074",
      "name": "Oncology",
      "category": "Applied Medical Science",
      "subdisciplines": ["Medical Oncology", "Radiation Oncology", "Surgical Oncology"]
    },
    {
      "id": "SCI075",
      "name": "Pathology",
      "category": "Applied Medical Science",
      "subdisciplines": ["Histopathology", "Clinical Pathology", "Molecular Pathology"]
    },
    {
      "id": "SCI076",
      "name": "Radiology",
      "category": "Applied Medical Science",
      "subdisciplines": ["Diagnostic Radiology", "Interventional Radiology", "Nuclear Medicine"]
    },
    {
      "id": "SCI077",
      "name": "Epidemiology",
      "category": "Social & Health Science",
      "subdisciplines": ["Infectious Disease Epidemiology", "Chronic Disease Epidemiology", "Genetic Epidemiology"]
    },
    {
      "id": "SCI078",
      "name": "Toxicology",
      "category": "Applied Science",
      "subdisciplines": ["Environmental Toxicology", "Forensic Toxicology", "Pharmacotoxicology"]
    },
    {
      "id": "SCI079",
      "name": "Pharmacognosy",
      "category": "Applied Medical Science",
      "subdisciplines": ["Herbal Medicine", "Natural Product Chemistry"]
    },
    {
      "id": "SCI080",
      "name": "Ethnobotany",
      "category": "Interdisciplinary Science",
      "subdisciplines": ["Traditional Medicine Studies", "Cultural Botany"]
    },
    {
      "id": "SCI081",
      "name": "Acoustics",
      "category": "Applied Physical Science",
      "subdisciplines": ["Architectural Acoustics", "Underwater Acoustics", "Noise Control"]
    },
    {
      "id": "SCI082",
      "name": "Psychoacoustics",
      "category": "Interdisciplinary Science",
      "subdisciplines": ["Perceptual Sound Studies", "Cognitive Auditory Science"]
    },
    {
      "id": "SCI083",
      "name": "Aerodynamics",
      "category": "Applied Physical Science",
      "subdisciplines": ["Subsonic Aerodynamics", "Supersonic Aerodynamics"]
    },
    {
      "id": "SCI084",
      "name": "Magnetohydrodynamics",
      "category": "Applied Physical Science",
      "subdisciplines": ["Plasma MHD", "Liquid Metal MHD"]
    },
    {
      "id": "SCI085",
      "name": "Particle Physics",
      "category": "Natural Science",
      "subdisciplines": ["High-Energy Physics", "Collider Physics", "Neutrino Physics"]
    },
    {
      "id": "SCI086",
      "name": "Plasma Physics",
      "category": "Natural Science",
      "subdisciplines": ["Fusion Plasma", "Space Plasma", "Low-Temperature Plasma"]
    },
    {
      "id": "SCI087",
      "name": "Photonics",
      "category": "Applied Physical Science",
      "subdisciplines": ["Optical Communications", "Laser Physics", "Nonlinear Optics"]
    },
    {
      "id": "SCI088",
      "name": "Holography",
      "category": "Applied Physical Science",
      "subdisciplines": ["Digital Holography", "Optical Holography"]
    },
    {
      "id": "SCI089",
      "name": "Cybersecurity",
      "category": "Applied Computer Science",
      "subdisciplines": ["Cryptography", "Network Security", "Application Security"]
    },
    {
      "id": "SCI090",
      "name": "Robotics",
      "category": "Interdisciplinary Science",
      "subdisciplines": ["Industrial Robotics", "Humanoid Robotics", "Swarm Robotics"]
    },
    {
      "id": "SCI091",
      "name": "Mechatronics",
      "category": "Interdisciplinary Science",
      "subdisciplines": ["Control Systems", "Automation Engineering"]
    },
    {
      "id": "SCI092",
      "name": "Human-Computer Interaction",
      "category": "Interdisciplinary Science",
      "subdisciplines": ["Usability Engineering", "User Experience Design"]
    },
    {
      "id": "SCI093",
      "name": "Virtual Reality Science",
      "category": "Interdisciplinary Science",
      "subdisciplines": ["Immersive Interfaces", "Haptic Systems"]
    },
    {
      "id": "SCI094",
      "name": "Augmented Reality Science",
      "category": "Interdisciplinary Science",
      "subdisciplines": ["Mixed Reality", "Contextual Computing"]
    },
    {
      "id": "SCI095",
      "name": "Aerospace Engineering",
      "category": "Applied Science",
      "subdisciplines": ["Structural Dynamics", "Propulsion Systems", "Flight Mechanics"]
    },
    {
      "id": "SCI096",
      "name": "Spacecraft Engineering",
      "category": "Applied Science",
      "subdisciplines": ["Satellite Design", "Orbital Mechanics"]
    },
    {
      "id": "SCI097",
      "name": "Satellite Communications",
      "category": "Extraterrestrial Science",
      "subdisciplines": ["RF Satellite Links", "Optical Satellite Links"]
    },
    {
      "id": "SCI098",
      "name": "Space Weather",
      "category": "Extraterrestrial Science",
      "subdisciplines": ["Solar Wind Studies", "Geomagnetic Storm Forecasting"]
    },
    {
      "id": "SCI099",
      "name": "Geophysics",
      "category": "Earth Science",
      "subdisciplines": ["Seismology", "Geomagnetism", "Gravity Surveying"]
    },
    {
      "id": "SCI100",
      "name": "Environmental Engineering",
      "category": "Applied Science",
      "subdisciplines": ["Water Resources Engineering", "Air Quality Engineering", "Waste Management"]
    },
    {
      "id": "SCI101",
      "name": "Sociology",
      "category": "Social Science & Humanities",
      "subdisciplines": ["Social Theory", "Quantitative Methods", "Cultural Sociology"]
    },
    {
      "id": "SCI102",
      "name": "Psychology",
      "category": "Social Science & Humanities",
      "subdisciplines": ["Clinical Psychology", "Cognitive Psychology", "Developmental Psychology"]
    },
    {
      "id": "SCI103",
      "name": "Anthropology",
      "category": "Social Science & Humanities",
      "subdisciplines": ["Cultural Anthropology", "Biological Anthropology", "Archaeology"]
    },
    {
      "id": "SCI104",
      "name": "Political Science",
      "category": "Social Science & Humanities",
      "subdisciplines": ["Comparative Politics", "International Relations", "Political Theory"]
    },
    {
      "id": "SCI105",
      "name": "Economics",
      "category": "Social Science & Humanities",
      "subdisciplines": ["Microeconomics", "Macroeconomics", "Econometrics"]
    },
    {
      "id": "SCI106",
      "name": "Law",
      "category": "Social Science & Humanities",
      "subdisciplines": ["Civil Law", "Criminal Law", "International Law"]
    },
    {
      "id": "SCI107",
      "name": "Pedagogy",
      "category": "Social Science & Humanities",
      "subdisciplines": ["Curriculum Studies", "Educational Psychology", "Instructional Technology"]
    },
    {
      "id": "SCI108",
      "name": "Communication & Journalism",
      "category": "Social Science & Humanities",
      "subdisciplines": ["Mass Communication", "Media Ethics", "Digital Journalism"]
    },
    {
      "id": "SCI109",
      "name": "Architecture",
      "category": "Arts & Design",
      "subdisciplines": ["Urban Design", "Sustainable Architecture", "Building Technology"]
    },
    {
      "id": "SCI110",
      "name": "Graphic Design",
      "category": "Arts & Design",
      "subdisciplines": ["Typography", "Visual Communication", "Branding Design"]
    },
    {
      "id": "SCI111",
      "name": "Film & Media Studies",
      "category": "Arts & Design",
      "subdisciplines": ["Film Theory", "Media Production", "Digital Media Studies"]
    },
    {
      "id": "SCI112",
      "name": "Musicology",
      "category": "Arts & Design",
      "subdisciplines": ["Ethnomusicology", "Music Theory", "Music Technology"]
    },
    {
      "id": "SCI113",
      "name": "Visual Arts",
      "category": "Arts & Design",
      "subdisciplines": ["Painting", "Sculpture", "Digital Art"]
    },
    {
      "id": "SCI114",
      "name": "Chemical Engineering",
      "category": "Engineering & Technologies",
      "subdisciplines": ["Process Engineering", "Materials Processing", "Biochemical Engineering"]
    },
    {
      "id": "SCI115",
      "name": "Biomedical Engineering",
      "category": "Engineering & Technologies",
      "subdisciplines": ["Medical Imaging", "Biomechanics", "Biomedical Instrumentation"]
    },
    {
      "id": "SCI116",
      "name": "Materials Engineering",
      "category": "Engineering & Technologies",
      "subdisciplines": ["Polymeric Materials", "Ceramic Materials", "Composite Materials"]
    },
    {
      "id": "SCI117",
      "name": "Data Science",
      "category": "Engineering & Technologies",
      "subdisciplines": ["Machine Learning", "Statistical Analysis", "Big Data"]
    },
    {
      "id": "SCI118",
      "name": "Artificial Intelligence",
      "category": "Engineering & Technologies",
      "subdisciplines": ["Neural Networks", "Natural Language Processing", "Computer Vision"]
    },
    {
      "id": "SCI119",
      "name": "Ecology",
      "category": "Natural & Environmental Science",
      "subdisciplines": ["Population Ecology", "Ecosystem Ecology", "Conservation Biology"]
    },
    {
      "id": "SCI120",
      "name": "Marine Biology",
      "category": "Natural & Environmental Science",
      "subdisciplines": ["Marine Ecology", "Fishery Science", "Marine Biotechnology"]
    },
    {
      "id": "SCI121",
      "name": "Oceanography",
      "category": "Natural & Environmental Science",
      "subdisciplines": ["Physical Oceanography", "Chemical Oceanography", "Marine Geology"]
    },
    {
      "id": "SCI122",
      "name": "Climatology",
      "category": "Natural & Environmental Science",
      "subdisciplines": ["Atmospheric Dynamics", "Climate Modeling", "Paleoclimatology"]
    },
    {
      "id": "SCI123",
      "name": "Geography",
      "category": "Natural & Environmental Science",
      "subdisciplines": ["Human Geography", "Physical Geography", "Geographic Information Systems"]
    },
    {
      "id": "SCI124",
      "name": "Neuroscience",
      "category": "Emerging Interdisciplinary Science",
      "subdisciplines": ["Cognitive Neuroscience", "Behavioral Neuroscience", "Neuroimaging"]
    },
    {
      "id": "SCI125",
      "name": "Cognitive Science",
      "category": "Emerging Interdisciplinary Science",
      "subdisciplines": ["Computational Modeling", "Cognitive Psychology", "Neuroscience"]
    },
    {
      "id": "SCI126",
      "name": "Biotechnology",
      "category": "Emerging Interdisciplinary Science",
      "subdisciplines": ["Genetic Engineering", "Industrial Biotechnology", "Medical Biotechnology"]
    },
    {
      "id": "SCI127",
      "name": "Nanotechnology",
      "category": "Emerging Interdisciplinary Science",
      "subdisciplines": ["Nanomaterials", "Nanoelectronics", "Nanomedicine"]
    },
    {
      "id": "SCI128",
      "name": "Complex Systems",
      "category": "Emerging Interdisciplinary Science",
      "subdisciplines": ["Network Science", "Nonlinear Dynamics", "Systems Biology"]
    }
]