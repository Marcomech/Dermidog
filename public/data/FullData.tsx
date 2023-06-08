export type FullDataType = {
  NAME: string,
  DATA: Data
}

export type Data = {
  CODIGO: string,
  SINÓNIMO: string[],
  ETIOLOGÍA: string[],
  AREA_INVOLUCRADA_DERMOGRAMA?: string[],
  PRURITO: string[],
  SEBORREA_O_DESCAMACIÓN: string[],
  SIGNOS_CLINICOS_DERMICOS: string[],
  SIGNOS_CLINICOS_GENERALES: string[],
  EDAD_RAZA_Y_SEXO_DE_PRESENTACION: string[],
  DIAGNÓSTICO: string[],
  DIAGNÓSTICO_DIFERENCIAL: string[],
  PRONÓSTICO: string[],
  TRATAMIENTO: string[],
}


export const FullData: FullDataType[] = [
  {
    NAME: "DERMATITIS DE LOS PLIEGUES",
    DATA: {
      CODIGO: "1BPLI",
      SINÓNIMO:
        ["lntertrigo", "Erosión de los pliegues"],
      ETIOLOGÍA:
        ["Lesiones producidas por fricción entre los tejidos asociado a defectos anatómicos propios de ciertas razas"],
      AREA_INVOLUCRADA_DERMOGRAMA:
        ["En General: área de los pliegues", "De Dorsal: nariz y cola", "De Ventral: vulva y labios inferiores", "Puede afectar otros pliegues corporales como el pliegue umbilical y entre ambas cadenas mamarias como sucede en animales obesos"],
      PRURITO:
        ["Ausente", "Leve por contaminación bacteriana"],
      SEBORREA_O_DESCAMACIÓN:
        ["Ausente"],
      SIGNOS_CLINICOS_DERMICOS:
        ["a) Exudado seroso o serosanguinolento", "b) Erosión amarillenta-roja y húmeda"],
      SIGNOS_CLINICOS_GENERALES:
        ["Olor desagradable, particularmente en los pliegues labiales"],
      EDAD_RAZA_Y_SEXO_DE_PRESENTACION:
        ["Afecta particularmente a las razas con pliegues como: Bulldog, Pekines, Pug, Boston terrier, Shar-Pei, San Bernardo, Cocker spaniel, Basset hound.No hay predilección por sexo excepto en caso del pliegue vulvar y entre ambas mamas"],
      DIAGNÓSTICO:
        ["Por la localización de las lesiones"],
      DIAGNÓSTICO_DIFERENCIAL:
        ["Dermatofitosis con infección bacteriana secundaria", "Malassezia", "Demodicosis", "Candidiasis"],
      PRONÓSTICO:
        ["Bueno"],
      TRATAMIENTO:
        ["Higiene y desinfección", "Definitivo es quirúrgico-estético", "Disminucion de peso en animales obesos"],
    },

  },
  {
    NAME: "DERMATITIS HÚMEDA AGUDA",
    DATA: {
      CODIGO: "1BCAL",
      SINÓNIMO:
        ["Parche caliente", "Mancha caliente", "Hot spot disease"],
      ETIOLOGÍA:
        ["Erosión cutánea producida como consecuencia del rascado y / o lamido", "Los factores primarios pueden ser:", "Dermatitis alérgicas a las pulgas", "Lesiones de peinado o por cepillado agresivo", "Alergia alimentaria", "Otitis por otodectes", "Impacción de sacos anales", "Dermatitis atópica canina"],
      AREA_INVOLUCRADA_DERMOGRAMA:
        ["En General: cualquiera", "De Dorsal: frecuentemente en la cara externa de los muslos y base de la cola", "De Ventral: en la cabeza y cuello"],
      PRURITO:
        ["Intenso y compulsivo manifestado por lamido, mordedura y / o rascado con los dientes o con los miembros posteriores"],
      SEBORREA_O_DESCAMACIÓN:
        ["Ausente"],
      SIGNOS_CLINICOS_DERMICOS:
        ["a) Exudado seroso o serosanguinolento", "b) Erosión amarillenta-roja, húmeda de evolución aguda", "c) Alopecia de formas circulares y de tamaño variable", "d) Pelos periféricos húmedos y pegoteados", "El tamaño va desde unos 3 cm de diámetro, hasta tomar grandes extensiones y perder su contorno circular, a medida que continúa el autotrauma"],
      SIGNOS_CLINICOS_GENERALES:
        ["NO hay"],
      EDAD_RAZA_Y_SEXO_DE_PRESENTACION:
        ["Sin predilección de raza o sexo, tiene mayor incidencia en animales adultos y de pelo largo"],
      DIAGNÓSTICO:
        ["El aspecto clínico y la evolución son característicos", "Buscar los factores primarios que la desencadenan"],
      DIAGNÓSTICO_DIFERENCIAL:
        ["Foliculitis-forunculosis piotraumatica"],
      PRONÓSTICO:
        ["Bueno"],
      TRATAMIENTO:
        ["Identificar y tratar la causa del prurito y / o dolor", "Evitar que continúe el autotrauma con sedantes, collares isabelinos", "Corticoides por vía general para calmar el prurito", "Raramente son necesarios antibióticos"],
    },

  },
  {
    NAME: "IMPÉTIGO",
    DATA: {
      CODIGO: "1SIMP",
      SINÓNIMO:
        ["Dermatitis pustular superficial", "Piodermia del cachorro"],
      ETIOLOGÍA:
        ["Staphylococcus pseudointermedius.Se desarrolla por lo general cuando existen causas predisponentes como falta de higiene, virus, parásitos intestinales, mala nutrición"],
      AREA_INVOLUCRADA_DERMOGRAMA:
        ["De Ventral: ingles, axilas y cara interna del muslo"],
      PRURITO:
        ["Ausente"],
      SEBORREA_O_DESCAMACIÓN:
        ["Ausente a leve"],
      SIGNOS_CLINICOS_DERMICOS:
        ["a) Pápulas", "b) Pústulas", "c) Collarete epidérmico"],
      SIGNOS_CLINICOS_GENERALES:
        ["Sólo si existe una enfermedad sistémica como el moquillo"],
      EDAD_RAZA_Y_SEXO_DE_PRESENTACION:
        ["Preferentemente cachorros de todas las razas y sexo hasta la pubertad"],
      DIAGNÓSTICO:
        ["Porlas localización", "Porlas lesiones primarias", "Porla edad del animal"],
      DIAGNÓSTICO_DIFERENCIAL:
        ["Hipersensibilidad bacteriana NO verdadera", "Foliculitis bacteriana", "Demodicosis", "Dermatofitosis por microsporum"],
      PRONÓSTICO:
        ["Bueno"],
      TRATAMIENTO:
        ["Si no hay compromiso sistémico, pueden curar espontáneamente", "Tratamientos locales con champú de peróxido de benzoilo o clorhexidina, una vez cada 3 días.-Antibioticos sistémicos.", "Tratar la enfermedad sistémica de base", "Mejorar las condiciones sanitarias"],
    },

  },
  {
    NAME: "FOLICULITIS BACTERIANA SUPERFICIAL",
    DATA: {
      CODIGO: "1SFOL",
      SINÓNIMO:
        ["Foliculitis"],
      ETIOLOGÍA:
        ["Estafilococus pseudointermedius"],
      AREA_INVOLUCRADA_DERMOGRAMA:
        ["En General: no tiene un patrón de distribución característico", "De Dorsal: frecuentemente De Dorsal y lateral del tórax, cuello y cabeza, lateral de miembros", "De Ventral-.Abdomen y cara interna de los muslos"],
      PRURITO:
        ["Leve"],
      SEBORREA_O_DESCAMACIÓN:
        ["Leve", "En algunos casos puede ser intensa"],
      SIGNOS_CLINICOS_DERMICOS:
        ["a) Pústulas y pápulas foliculares.Caracterizado por la presencia de pelos en su interior", "b) Pequeñas protuberancias que elevan los pelos en dorso y lateral de tronco, dando una imagen de dermatitis miliar", "e) En los casos crónicos, cuando las pápulas, pústulas y sus costras se desprenden junto con los pelos, le dan a la piel un aspecto de tela apolillada", "d) También es posible observar el collarete epidérmico hiperpigmentado en su centro, que le da a la lesión el aspecto de ojo de buey,"],
      SIGNOS_CLINICOS_GENERALES:
        ["NOhay"],
      EDAD_RAZA_Y_SEXO_DE_PRESENTACION:
        ["Más frecuentemente en animales jóvenes, aunque también puede afectar a animales de cualquier edad.Afecta animales de pelo corto con mayor frecuencia pero también a los de pelo largo, sin predilección de sexo"],
      DIAGNÓSTICO:
        ["Por el aspecto clínico de las lesiones", "Cultivo", "Citología", "Porhistopatología", "Por la respuesta a los antibióticos"],
      DIAGNÓSTICO_DIFERENCIAL:
        ["Dermatofitosis por Microsporum", "Demodicosis", "Sarna sarcóptica", "Urticaria"],
      PRONÓSTICO:
        ["Bueno, aunque hay tendencia a repetirse a lo largo de la vida del perro"], TRATAMIENTO: ["Antibioticoterapia sistémica por no menos de 15 días", "Baños con champú de peróxido de benzoilo o clohexidrina"],
    },

  },
  {
    NAME: "PIODERMIA SUPERFICIAL DISEMINADA",
    DATA: {
      CODIGO: "1SIMP",
      SINÓNIMO:
        ["No tiene"],
      ETIOLOGÍA:
        ["Estafilococus pseudointermedius"],
      AREA_INVOLUCRADA_DERMOGRAMA:
        ["En General: areas alopécicas en cualquier parte de la superficie dérmica", "De Ventral: tiene predilección Ingles, axilas y abdomen"],
      PRURITO:
        ["Leve a moderado"],
      SEBORREA_O_DESCAMACIÓN:
        ["Leve a moderada"],
      SIGNOS_CLINICOS_DERMICOS:
        ["a) Pústulas rotas", "b) collaretes muy grandes", "c) Ojos de buey"],
      SIGNOS_CLINICOS_GENERALES:
        ["NOtiene"],
      EDAD_RAZA_Y_SEXO_DE_PRESENTACION:
        ["similar a la foliculitis bacteriana"],
      DIAGNÓSTICO:
        ["Porel aspecto clínico de las lesiones", "Cultivo", "Citologia", "Porhistopatología", "Por la respuesta a los antibióticos"],
      DIAGNÓSTICO_DIFERENCIAL:
        ["Tiña por microsporum", "Parches seborreicos", "Demodicosis"],
      PRONÓSTICO: ["Bueno"
      ],
      TRATAMIENTO:
        ["Buscar la causa determinante", "Antibiótico durante 3 a 4 semanas", "baños con champú de peróxido de benzoilo o clorhexidina"],
    },

  },
  {
    NAME: "PIODERMIA MUCOCUTÁNEA",
    DATA: {
      CODIGO: "NO",
      SINÓNIMO:
        ["No tiene"],
      ETIOLOGÍA:
        ["Stafilococcus pseudointermedius"],
      AREA_INVOLUCRADA_DERMOGRAMA:
        ["En General: Bordes mucocutáneos"],
      PRURITO:
        ["Leve a moderado"],
      SEBORREA_O_DESCAMACIÓN:
        ["Leve a moderada"],
      SIGNOS_CLINICOS_DERMICOS:
        ["a) Pústulas rotas", "b) erosión", "c) alopecia", "d) costras", "e) fisuras"],
      SIGNOS_CLINICOS_GENERALES:
        ["NOtiene"],
      EDAD_RAZA_Y_SEXO_DE_PRESENTACION:
        ["se presenta con mayor frecuencia en el Ovejero Aleman pero puede presentarse en cualquier raza principalmente dolicocéfala"],
      DIAGNÓSTICO:
        ["Porel aspecto clínico de las lesiones", "por el área involucrada", "Cultivo", "Citología", "Porhistopatología", "Por la respuesta a los antibióticos"],
      DIAGNÓSTICO_DIFERENCIAL:
        ["Penfigos", "Lupus mucocutáneo", "Demodicosis"],
      PRONÓSTICO:
        ["Bueno"],
      TRATAMIENTO:
        ["Buscar la causa determinante", "Antibiótico durante 3 a 4 semanas", "baños con champú de peróxido de benzoilo o clorhexidrina"],

    },

  },
  {
    NAME: "PIODERMIA PROFUNDA DEL OVEJERO ALEMÁN",
    DATA: {
      CODIGO: "1POV",
      SINÓNIMO:
        ["Foliculitis, forunculosis y celulitis del ovejero alemán"],
      ETIOLOGÍA:
        ["bacteriana 'idiopática', se teoriza sobre desordenes inmunológicos y hormonales.Puede estar presente estafilococo pseudointermedius pero también en procesos crónicos puede haber flora bacteriana mixta y encontrarse bacilos como pseudomonas y proteus"],
      AREA_INVOLUCRADA_DERMOGRAMA:
        ["De Dorsal: cara externa e interna del muslo, base de la cola, tórax, espacios interdigitales, cuello", "De Ventral: abdomen, tórax y espacios interdigitales"],
      PRURITO:
        ["Leve"],
      SEBORREA_O_DESCAMACIÓN:
        ["Ausente"],
      SIGNOS_CLINICOS_DERMICOS:
        ["a) Forunculosis, celulitis, ulceras y fistulas", "b) Edema y exudados sero-hemo-purulento", "e) costras, alopecia e hiperpigmentación"],
      SIGNOS_CLINICOS_GENERALES:
        ["En los casos crónicos puede haber pérdida de peso, apetito irregular", "Dolor localizado, particularmente en los espacios interdigitales"],
      EDAD_RAZA_Y_SEXO_DE_PRESENTACION: [" Afecta animales adultos, de raza Ovejero alemán, y sus cruzas.Sin predilección de sexo"
      ],
      DIAGNÓSTICO:
        ["Anamnesis", "reseña y área involucrada", "Biopsia", "Cultivo, aislamiento y antibiograma", "Perfil tiroideo"],
      DIAGNÓSTICO_DIFERENCIAL:
        ["Demodicosis", "Mycobacterias", "Micosis sistémicas y subcutáneas"],
      PRONÓSTICO: ["Reservado a malo.Es una patología con tendencia a la recidiva.La mayoría de las veces es solo transitoria.Los tratamientos son paliativos debido a que aún se ignora la etiología"
      ],
      TRATAMIENTO:
        ["Toilette de la región por corte del pelo y baños con champú de peróxido de benzoílo, o clorhexidina", "Antibiótico señalado por el antibiograma durante 6 a 10 semanas", "Antibioticoterapia en pulsos prolongada luego de la curación clínica", "Prednisolona es necesario administrar cuando con el antibiótico mejora pero no terminan de controlarse las lesiones", "Control de una adecuada nutrición y suplementos nutricionales que contengan Zinc", "Inmunomoduladores, o aplicaciones de células vivas que contengan elementos del sistema retículo endotelial como Timo.Bazo, Hígado, etc"],
    },

  },
  {
    NAME: "FOLICULITIS-FORUNCULOSIS PIOTRAUMATICA",
    DATA: {
      CODIGO: "NO",
      SINÓNIMO:
        ["No tiene"],
      ETIOLOGÍA:
        ["Erosión, excoriación y ulceración cutánea caracterizada por la presencia de pápulas satélites y que aparece de manera idiopática en determinadas razas pero que también puede ser producida como consecuencia del rascado y / o lamido", "Los factores primarios pueden ser similares a los de la dermatitis aguda húmeda, pero en este caso la lesión es más profunda:", "Dermatitis alérgicas a las pulgas-Infección de los sacos anales", "Lesiones de peinado o por mal cepillado. –Dermatitis atópica canina", "Alergia alimentaria", "Otitis por otodectes"],
      AREA_INVOLUCRADA_DERMOGRAMA:
        ["De Dorsal: frecuentemente en cuello y cabeza.Base de la cola", "De Ventral: en la cabeza y cuello"],
      PRURITO:
        ["Muchas veces es intenso y compulsivo manifestado por lamido, mordedura y / o rascado con los dientes o con los miembros posteriores.Pero en algunas ocasiones no hay prurito y hay dolor"],
      SEBORREA_O_DESCAMACIÓN:
        ["leve a moderada"],
      SIGNOS_CLINICOS_DERMICOS:
        ["a) Exudado seroso o serosanguinolento", "b) Erosión amarillenta-roja, húmeda de evolución aguda", "c) Alopecia de tamaño variable", "d) Pelos periféricos húmedos y pegoteados", "e) Pápulas satélites", "f) erosiones, excoriaciones, ulceras y costras"],
      SIGNOS_CLINICOS_GENERALES:
        ["NO hay"],
      EDAD_RAZA_Y_SEXO_DE_PRESENTACION:
        ["aparece con más frecuencia en Labrador, Golden y San Bernardo"],
      DIAGNÓSTICO:
        ["El aspecto clínico y la evolución son característicos", "Buscar los factores primarios que la desencadenan"],
      DIAGNÓSTICO_DIFERENCIAL:
        ["Dermatitis aguda húmeda", "Foliculitis"],
      PRONÓSTICO:
        ["Bueno"],
      TRATAMIENTO:
        ["fundamental la antibioticoterapia sistémica ya que es una piodermia profunda", "Identificar y tratar la causa del prurito y / o dolor", "Evitar que continúe el autotrauma con sedantes, collares isabelinos", "Corticoides por vía general para calmar el prurito"],
    },

  },
  {
    NAME: "FOLICULITIS Y FORUNCULOSIS NASAL",
    DATA: {
      CODIGO: "1BNAS",
      SINÓNIMO:
        ["'Piodermia' nasal"],
      ETIOLOGÍA:
        ["bacteriana y que puede ser desencadenada por pequeños traumas constantes"],
      AREA_INVOLUCRADA_DERMOGRAMA:
        ["De Dorsal: región lateral de la nariz, planum nasal, alrededor de los ojos y borde interno de pabellones auriculares", "De Ventral: en el interior de los pabellones auriculares"],
      PRURITO:
        ["Ausente"],
      SEBORREA_O_DESCAMACIÓN:
        ["Ausente"],
      SIGNOS_CLINICOS_DERMICOS:
        ["a) Forunculosis", "b) Edema y exudado sero-hemo-purulento"],
      SIGNOS_CLINICOS_GENERALES:
        ["Solamente dolor"],
      EDAD_RAZA_Y_SEXO_DE_PRESENTACION:
        ["No hay predilección por edad y sexo.Es más frecuente en la raza Ovejero Alemán"],
      DIAGNÓSTICO:
        ["Porla localización de la lesión", "Porlos signos clínicos dérmicos", "Impronta de las secreciones., y observación citológica", "Cultivo y antibiograma", "Biopsia y diagnóstico histopatológico"],
      DIAGNÓSTICO_DIFERENCIAL:
        ["Dermatitis nasal solar", "Dermatofitosis con infección secundaria", "Lupus eritematoso discoide", "Pénfigos", "Demodicosis"],
      PRONÓSTICO:
        ["Bueno, evoluciona favorablemente con el tratamiento"],
      TRATAMIENTO:
        ["Se utilizara el antibiótico específico durante un mínimo de 21 días", "Evitar aumentar el trauma cuando se realiza la limpieza local", "Utilizar analgésicos y considerar colocar un collar isabelino"],
    },

  },
  {
    NAME: "FOLICULITIS FORUNCULOSIS DEL MENTÓN Y LABIOS",
    DATA: {
      CODIGO: "1BMEN",
      SINÓNIMO:
        ["Piodermia del mentón"],
      ETIOLOGÍA:
        ["bacteriana aunque pueden existir trastornos de la queratinización que predisponen"],
      AREA_INVOLUCRADA_DERMOGRAMA:
        ["VENTRAL: región del mentón, alrededor de los labios inferiores y superiores"],
      PRURITO:
        ["Ausente"],
      SEBORREA_O_DESCAMACIÓN:
        ["Ausente"],
      SIGNOS_CLINICOS_DERMICOS:
        ["a) Foliculitis, forunculosis, pústulas", "b) Exudado serosanguinoliento o seropurulento"],
      SIGNOS_CLINICOS_GENERALES:
        ["NO hay, en algunos casos puede haber dolor"],
      EDAD_RAZA_Y_SEXO_DE_PRESENTACION:
        ["En animales jóvenes hasta el año de edad.Principalmente en razas de pelo corto, como Doberman, Bulldog, Gran danés, Weimaraner, Rotweiler, Pointer, etc.de ambos sexos.Puede observarse ocasionalmente en animales de pelo largo"],
      DIAGNÓSTICO:
        ["Por la localización de la lesión", "Citología", "Cultivo", "Biopsia y diagnóstico histopatológico"],
      DIAGNÓSTICO_DIFERENCIAL:
        ["Demodicosis localizada", "Celulitis juvenil", "Dermatofitosis"],
      PRONÓSTICO:
        ["Bueno"],
      TRATAMIENTO:
        ["Antibióticos sistémicos por un mínimo de 21 dias", "Aplicación local de una crema con corticoide y antibióticos", "Aplicación local de Dimetilsulfoxido al 60 % en propilenglicol y corticoide", "Aplicación local de retinoides"],
    },

  },
  {
    NAME: "FOLICULITIS Y FORUNCULOSIS PODAL",
    DATA: {
      CODIGO: "1BPOD",
      SINÓNIMO:
        ["Piodermia interdigital", "Pododermatitis", "Quistes interdigitales"],
      ETIOLOGÍA:
        ["Es un complejo multifactorial con contaminación bacteriana secundaria, producida, entre otras; por las siguientes causas determinantes:", "Demodicosis", "Infecciones bacterianas", "Dermatofitosis", "Hipersensibilidades", "Traumas del medio", "Cuerpos extraños", "Dermatitis por contacto", "Ancylostomiasis y uncinariasis ambiental", "Hipotiroidismo"],
      AREA_INVOLUCRADA_DERMOGRAMA:
        ["De Dorsal: en los espacios interdigitales y tejidos vecinos, de una o de las dos manos", "De Ventral: Los pies pueden estar involucrados"],
      PRURITO:
        ["Leve", "Intenso: en las hipersensibilidades"],
      SEBORREA_O_DESCAMACIÓN:
        ["Ausente"],
      SIGNOS_CLINICOS_DERMICOS:
        ["a) Edema", "b) Fístulas", "c) Exudados seroso, serosanguinolientoo seropurulento", "b) nódulos únicos o múltiples"],
      SIGNOS_CLINICOS_GENERALES:
        ["Lamido compulsivo", "Dolor y dificultad para caminar"],
      EDAD_RAZA_Y_SEXO_DE_PRESENTACION:
        ["No existe predisposición por edad, raza o sexo aunque se presenta más corrientemente en animales de pelo corto"],
      DIAGNÓSTICO:
        ["Observación microscópica del raspado y estudio citológico de los exudados", "Cultivo bacteriano y antibiograma", "Biopsia cutánea", "Radiografias", "diagnostico de la enfermedad de base"],
      DIAGNÓSTICO_DIFERENCIAL:
        ["Se realiza entre las patologías señaladas en la etiología"],
      PRONÓSTICO: ["Reservado a malo, por la dificultad de encontrar la causa"
      ],
      TRATAMIENTO:
        ["Antibioticoterapia", "Tratamiento de la causa primaria o de base", "Mantener limpia la región mediante pediluvios con champú de peróxido de benzoilo, o clorhexidina", "Evitar el trauma del lamido", "Calmar el dolor con analgésico", "Bajar el nivel de la sensibilidad dérmica mediante antidepresivos tricíclicos", "Considerar la escisión quirúrgica del tejido afectado"],
    },

  },
  {
    NAME: "FOLICULITIS FORUNCULOSIS DE LOS CALLOS",
    DATA: {
      CODIGO: "1BCAY",
      SINÓNIMO:
        ["Dermatitis de los callos", "Piodermia de los callos"],
      ETIOLOGÍA:
        ["Proliferación de tejido como consecuencia de un trauma repetido entre una prominencia y una superficie dura donde el animal se acuesta.Esto predispone a maceración e infección bacteriana profunda"],
      AREA_INVOLUCRADA_DERMOGRAMA:
        ["De Dorsal: codos y tarsos", "De Ventral: codos, tarsos y esternón"],
      PRURITO:
        ["Ausente"],
      SEBORREA_O_DESCAMACIÓN:
        ["Leve a moderada"],
      SIGNOS_CLINICOS_DERMICOS:
        ["a) Exudado serosanguinolento o seropurulento", "b) Fístulas", "e) Proliferación de tejidos con fisuras"],
      SIGNOS_CLINICOS_GENERALES:
        ["NO hay"],
      EDAD_RAZA_Y_SEXO_DE_PRESENTACION:
        ["Comienza en los animales jóvenes", "Hay mayor predisposición en razas grandes y gigantes como el Gran danés y San Bemardo en los codos y tarsos.En Dachshund, Setter, Boxer, Doberman, el callo suele estar en relación al esternón"],
      DIAGNÓSTICO:
        ["Porel aspecto clínico", "Porla localización", "Observación citológica", "Si es necesario biopsia y observación histopatológica"],
      DIAGNÓSTICO_DIFERENCIAL:
        ["Neoplasias", "Cuerpos extraños", "Bursitis"],
      PRONÓSTICO:
        ["Bueno"],
      TRATAMIENTO:
        ["Evitar que continúe el trauma, acolchando el lugar donde el animal se acuesta.O colocando vendajes acolchados", "En los casos más benignos cremas emolientes, antibioticos con o sin corticoides", "En los casos mas severos la resolución es quirúrgica"],
    },

  },
  {
    NAME: "DERMATITIS ALÉRGICA POR PULGAS EST. I",
    DATA: {
      CODIGO: "2PUL",
      SINÓNIMO:
        ["Hipersensibilidad a la picadura de las pulgas"],
      ETIOLOGÍA:
        ["Hipersensibilidad mediata e inmediata a alérgenos presentes en la saliva de la pulga"],
      AREA_INVOLUCRADA_DERMOGRAMA:
        ["De Dorsal: comienza en la base de la cola o región lumbosacra", "En Ventral: cara interna de los muslos y área umbilical"],
      PRURITO:
        ["Moderado a intenso"],
      SEBORREA_O_DESCAMACIÓN:
        ["Ausente a leve"],
      SIGNOS_CLINICOS_DERMICOS:
        ["Foliculitis, pápulas, eritema, alopecia, cambio de coloración del pelaje por el lamido frecuente"],
      SIGNOS_CLINICOS_GENERALES:
        ["NO presenta"],
      EDAD_RAZA_Y_SEXO_DE_PRESENTACION:
        ["A toda edad, en todas las razas y en ambos sexos"],
      DIAGNÓSTICO:
        ["Dermograma patognomónico", "Presencia de pulgas y / o sus excrementos"],
      DIAGNÓSTICO_DIFERENCIAL:
        ["Dermatitis atópica con la que puede coexistir", "Alergia alimentaria, con la que puede coexistir", "Piodermia superficial"],
      PRONÓSTICO:
        ["Malo porque no tiene cura", "Bueno con tratamiento de mantenimiento y de por vida"],
      TRATAMIENTO:
        ["Estricto control de las pulgas en el ambiente, y sobre el animal", "Evitar el contacto con el alérgeno, propuesta bastante difícil según las condiciones del hábitat y climáticas regionales", "Control del prurito, con corticoides, oclacitinib"],
    },

  },
  {
    NAME: "DERMATITIS ALÉRGICA POR PULGAS EST. II",
    DATA: {
      CODIGO: "2PUL2",
      SINÓNIMO:
        ["Hipersensibilidad a la picadura de las pulgas"],
      ETIOLOGÍA:
        ["Hipersensibilidad mediata e inmediata a alérgenos presentes en la saliva de la pulga. "],
      AREA_INVOLUCRADA_DERMOGRAMA:
        ["Se suma al Estadio I:", "De Dorsal:-desde la región lumbosacra se extiende en forma de triángulo con vértice hacia craneal, inserción de la cola, periné, región poplítea", "En Ventral:-en el abdomen, región inguinal y umbilical, cuello, cara interior de pabellón auricular"],
      PRURITO:
        ["Intenso"],
      SEBORREA_O_DESCAMACIÓN:
        ["Intensa"],
      SIGNOS_CLINICOS_DERMICOS:
        ["a) Foliculitis, alopecia, pápulas, eritema, costras", "b) Leve hiperpigmentación e hiperqueratosis"],
      SIGNOS_CLINICOS_GENERALES:
        ["Adelgazamiento"],
      EDAD_RAZA_Y_SEXO_DE_PRESENTACION:
        ["A toda edad, en todas las razas y en ambos sexos"],
      DIAGNÓSTICO:
        ["Dermograma patognomónico", "Presencia de pulgas y / o sus excrementos"],
      DIAGNÓSTICO_DIFERENCIAL:
        ["Dermatitis atópica con la que puede coexistir", "Alergia alimentaria, con la que puede coexistir", "Piodermia superficial"],
      PRONÓSTICO:
        ["Malo porque no tiene cura", "Bueno con tratamiento de mantenimiento y de por vida"],
      TRATAMIENTO:
        ["Estricto control de las pulgas en el ambiente, y sobre el animal", "Evitar el contacto con el alérgeno, propuesta bastante difícil según las condiciones del hábitat y climáticas regionales", "Control del prurito con corticoides, oclacitinib"],
    },

  },
  {
    NAME: "DERMATITIS ALÉRGICA POR PULGAS EST. III",
    DATA: {
      CODIGO: "2PUL3",
      SINÓNIMO:
        ["Hipersensibilidad a la picadura de las pulgas"],
      ETIOLOGÍA:
        ["Hipersensibilidad mediata e inmediata a alérgenos presentes en la saliva de la pulga"],
      AREA_INVOLUCRADA_DERMOGRAMA:
        ["Se suma al Estadio II", "De Dorsal:", "área periocular, tórax, dorsal y lateral, cara externa de los pabellones auriculares", "En Ventral:", "todo el abdomen, región esternal y axilar"],
      PRURITO:
        ["Intenso"],
      SEBORREA_O_DESCAMACIÓN:
        ["Intensa"],
      SIGNOS_CLINICOS_DERMICOS:
        ["a) Foliculitis, alopecia, pápulas, eritema, costras", "b) Hiperpigmentación, liquenificación"],
      SIGNOS_CLINICOS_GENERALES:
        ["Adelgazamiento"],
      EDAD_RAZA_Y_SEXO_DE_PRESENTACION:
        ["A toda edad, en todas las razas y en ambos sexos"],
      DIAGNÓSTICO:
        ["Dermograma patognomónico", "Presencia de pulgas y / o sus excrementos"],
      DIAGNÓSTICO_DIFERENCIAL:
        ["Dermatitis atópica con la que puede coexistir", "Alergia alimentarla, con la que puede coexistir", "Piodermia superficial"],
      PRONÓSTICO:
        ["Malo porque no tiene cura", "Bueno con tratamiento de mantenimiento y de por vida"],
      TRATAMIENTO:
        ["Estricto control de las pulgas en el ambiente, y sobre el animal", "Evitar el contacto con el alergeno, propuesta bastante difícil según las condiciones de hábitat y climáticas regionales", "Control del prurito, con corticoides, oclacitinib"],
    },

  },
  {
    NAME: "DERMATITIS ATÓPICA CANINA EST. I",
    DATA: {
      CODIGO: "2ATO",
      SINÓNIMO:
        ["Atopía"],
      ETIOLOGÍA:
        ["Hipersensibilidad tipo I, son pacientes genéticamente predispuestos"],
      AREA_INVOLUCRADA_DERMOGRAMA:
        ["SE INICIA SIN LESION DERMICA", "De Dorsal: área periocular e interdigital", "De Ventral: área perilabial"],
      PRURITO:
        ["Intenso aún sin lesión dérmica"],
      SEBORREA_O_DESCAMACIÓN:
        ["Ausente"],
      SIGNOS_CLINICOS_DERMICOS:
        ["a) Eritema, alopecia, foliculitis, erosiones"],
      SIGNOS_CLINICOS_GENERALES:
        ["Ocasionalmente conjuntivitis, rinitis"],
      EDAD_RAZA_Y_SEXO_DE_PRESENTACION:
        ["Perros menores a 3 años, afecta ambos sexos y todas las razas particularmente a Terriers, Setter irlandes, Caniches.Dálmatas, Schnauzer y Ovejeros alemanes"],
      DIAGNÓSTICO:
        ["Anamnesis, reseña", "Por los signos clínicos", "Respuesta terapéutica a los corticoides"],
      DIAGNÓSTICO_DIFERENCIAL: ["Sarna sarcóptica",
        "Alergia alimentaría",
        "Dermatitis alérgica por contacto",
        "Dermatitis alérgica a las pulgas"
      ],
      PRONÓSTICO:
        ["Reservado., porque la curación definitiva es poco probable", "Bueno, cuando el animal es sometido a un tratamiento de mantenimiento y de por vida"],
      TRATAMIENTO:
        ["Buscar el alergeno y evitar su contacto", "Intradermo reacción y pruebas serológicas para alergias(RAST y ELISA), con el fin de realizar inmunoterapia alérgeno especifica", "Tratamiento del prurito con corticoides, oclacitinib, ciclosporina, loquivetmab", "Tratar las infecciones secundarias bacterianas y por Malassezia", "Tratamiento tópico con corticoides(triamcinolona, aceponato de hidrocortisona)", "Baños con shampúes adecuados", "Suplementar la nutrición con ácidos grasos omega 3 y 6"],
    },

  },
  {
    NAME: "DERMATITIS ATÓPICA CANINA EST. II",
    DATA: {
      CODIGO: "2ATO2",
      SINÓNIMO:
        ["Atopía"],
      ETIOLOGÍA:
        ["Hipersensibilidad tipo 1, son pacientes genéticamente predispuestos"],
      AREA_INVOLUCRADA_DERMOGRAMA:
        ["Suma las del Estadio I", "De Dorsal: área periocular e interdigital", "De Ventral: área perilabial, cara interna de los pabellones auriculares, axilas, abdomen.ingles y periné.Región interdigital"],
      PRURITO:
        ["Intenso"],
      SEBORREA_O_DESCAMACIÓN:
        ["Intensa"],
      SIGNOS_CLINICOS_DERMICOS:
        ["a) Eritema, alopecia, foliculitis, hiperpigmentacion", "b) Pápulas, costras, pústulas", "c) Otitis", "d) Erosiones, excoriaciones"],
      SIGNOS_CLINICOS_GENERALES:
        ["Conjuntivitis, rinitis", "Adelgazamiento"],
      EDAD_RAZA_Y_SEXO_DE_PRESENTACION:
        ["antes de los 3 años de vida, afecta ambos sexos y todas las razas particularmente a Terriers, Setter irlandes, Caniches, Dálmatas, Schnauzer y Ovejeros alemanes"],
      DIAGNÓSTICO:
        ["Anamnesis, reseña", "Por los signos clínicos", "Respuesta terapéutica a los corticoides",
        ]
      ,
      DIAGNÓSTICO_DIFERENCIAL: ["Sarna sarcóptica",
        "Alergia alimentaría",
        "Dermatitis alérgica por contacto",
        "Dermatitis alérgica a las pulgas"
      ],
      PRONÓSTICO:
        ["Reservado, dadas las características de enfermedad crónica e incurable", "Bueno, cuando el animal es sometido a un tratamiento de mantenimiento y de por vida"],
      TRATAMIENTO:
        ["Buscar el alergeno y evitar su contacto", "Intradermo reacción y pruebas serológicas para alergias(RAST y ELISA), con el fin de realizar inmunoterapia alérgeno especifica", "Tratamiento del prurito con corticoides, ciclosporina, oclacitinib, loquivetmab", "Tratar las infecciones secundarias bacterianas y por Malassezia", "tratamiento tópico con corticoides(triamcinolona, aceponato de hidrocortisona)", "Baños con shampúes adecuados", "Suplementar la nutrición con ácidos grasos omega 3 y 6"],
    },

  },
  {
    NAME: "DERMATITIS ATÓPICA CANINA EST. III",
    DATA: {
      CODIGO: "2ATO3",
      SINÓNIMO:
        ["Atopía"],
      ETIOLOGÍA:
        ["Hipersensibilidad tipo I, son pacientes genéticamente predispuestos"],
      AREA_INVOLUCRADA_DERMOGRAMA:
        ["Suma las del Estadio II", "De Dorsal: área pericoular e interdigital, tórax dorsal y lateral", "De Ventral: área perilabial, cara interna de los pabellones auriculares, axilas, abdomen, ingles y periné.región interdigital"],
      PRURITO:
        ["Intenso"],
      SEBORREA_O_DESCAMACIÓN:
        ["Intensa"],
      SIGNOS_CLINICOS_DERMICOS:
        ["a) Eritema, alopecia, foliculitis, hiperpigmentacion, liquenificacion", "b) Pápulas, costras, pústulas", "c) Otitis", "d) Erosiones, excoriaciones"],
      SIGNOS_CLINICOS_GENERALES: ["Conjuntivitis, rinitis",
        "Adelgazamiento"
      ],
      EDAD_RAZA_Y_SEXO_DE_PRESENTACION:
        ["antes de los 3 años de edad, afecta ambos sexos y todas las razas particularmente a Terriers, Setter irlandes, Caniches, Dálmatas, Schnautzer y Ovejeros alemanes"],
      DIAGNÓSTICO:
        ["Anamnesis, reseña", "Por los signos clínicos", "Respuesta terapéutica a los corticoides",
        ]
      ,
      DIAGNÓSTICO_DIFERENCIAL: ["Sarna sarcóptica",
        "Alergia alimentaría",
        "Dermatitis alérgica por contacto",
        "Dermatitis alérgica a las pulgas"
      ],
      PRONÓSTICO:
        ["Reservado, porque la curación definitiva es poco probable", "Bueno, cuando el animal es sometido a un tratamiento de mantenimiento y de por vida"],
      TRATAMIENTO:
        ["Buscar el alergeno y evitar su contacto", "Intradermo reacción y pruebas serológicas para alergias(RAST y ELISA), con el fin de realizar inmunoterapia alérgeno especifica", "Tratamiento del prurito con corticoides, ciclosporina, oclacitinib, loquivetmab", "Tratar las infecciones secundarias bacterianas y por Malassezia", "tratamiento tópico con corticoides(triamcinolona, aceponato de hidrocortisona)", "Baños con shampues adecuados", "Suplementar la nutrición con ácidos grasos omega 3 y 6"],
    },

  },

  {//////////////////////////////////////////
    NAME: "REACCIÓN ADVERSA A LOS ALIMENTOS",
    DATA: {
      CODIGO: "2ALIM",
      // VER DERMATITIS ATÓPICA CANINA YA QUE SU PRESENTACIÓN CLÍNICA Y DERMOGRAMA ES SIMILAR",
      PRURITO: [],
      SEBORREA_O_DESCAMACIÓN: [],
      SIGNOS_CLINICOS_DERMICOS: [],
      SINÓNIMO:
        ["Hipersensibilidad alimentaria", "Alergia alimentaria", "Dermatitis atópica inducida por alimentos"],
      ETIOLOGÍA:
        ["Es una hipersensibilidad, aparentemente estarían involucrados los tipos I, III y IV"],
      SIGNOS_CLINICOS_GENERALES:
        ["Algunos animales tienen al mismo tiempo vómitos, diarreas y cólicos"],
      EDAD_RAZA_Y_SEXO_DE_PRESENTACION:
        ["A cualquier edad, raza y sexo"],
      DIAGNÓSTICO:
        ["A través de la respuesta a una dieta de eliminación o exclusión", "Descartando a sus diagnósticos diferenciales"],
      DIAGNÓSTICO_DIFERENCIAL:
        ["Dermatitis atópica", "Dermatitis alérgica a las pulgas", "Sama sarcóptica"],
      PRONÓSTICO:
        ["'Bueno a reservado':", "Siempre que al mismo tiempo el animal no este afectado además de otras hipersensibilidades"],
      TRATAMIENTO:
        ["Una dieta hipoalergénica estará compuesta por ingredientes que el animal nunca antes recibió, sin aditivos químicos, colorantes o preservantes", "Se pueden utilizar dietas específicamente formulada por empresas nutricionales", "Corticoides, oclacitinib", "Conocido el o los alimentos alergénicos, evitarlos"],
    },

  },

  {
    NAME: "PÉNFIGO FOLIÁCEO",
    DATA: {
      CODIGO: "4PFOL",
      SINÓNIMO:
        ["No tiene"],
      ETIOLOGÍA:
        ["Está producido por anticuerpos contra los sitios de unión epidérmica que genera acantólisis con queratinocitos separados"],
      AREA_INVOLUCRADA_DERMOGRAMA:
        ["General: puede afectar todo el cuerpo de manera explosiva", "De Dorsal: nariz, área periocular, cara externa e interna de pabellones, almohadillas plantaras, y uñas", "De Ventral: ingles y amohadillas plantares"],
      PRURITO:
        ["Leve", "Por la contaminación bacteriana"],
      SEBORREA_O_DESCAMACIÓN:
        ["Leve a intensa"],
      SIGNOS_CLINICOS_DERMICOS:
        ["a) Eritema, vesículas, pústulas", "b) Costras, descamaciones", "e) hiperqueratosis de las almohadillas plantares", "d) Signo de Nikolsky positivo"],
      SIGNOS_CLINICOS_GENERALES:
        ["En los casos avanzados hay depresión, fiebre, anorexia,", "pérdida de peso", "Linfoadenopatía", "Dolor variable que se manifiesta por lamido"],
      EDAD_RAZA_Y_SEXO_DE_PRESENTACION:
        ["En adultos jóvenes no tiene predilección por sexo.Hay razas en la que es frecuente como los Dachshound de pelo corto, Doberman, Akita, Chow chow"],
      DIAGNÓSTICO:
        ["Biopsia para:", "histopatología", "inmunofluorescencia directa"],
      DIAGNÓSTICO_DIFERENCIAL:
        ["Los otros tipos de pénfigos", "Lupus eritematoso sistémico", "Lupus discoideo", "Dermatitis que responde al Zinc", "Dermatofitosis", "Piodermias", "Farmacodermias"],
      PRONÓSTICO:
        ["Reservado", "Malo sin tratamiento"],
      TRATAMIENTO:
        ["Terapia inmunosupresora:", "Dosis altas de corticoides", "Clorambucilo", "Azatioprina", "Ciclosporina", "Tetraciclina-niacinamida"],
    },

  },
  {
    NAME: "PÉNFIGO VULGAR",
    DATA: {
      CODIGO: "4PVUL",
      SINÓNIMO:
        ["no tiene"],
      ETIOLOGÍA:
        ["Está producido por anticuerpos contra los sitios de unión epidérmica que genera acantolisis con queratinocitos separados"],
      AREA_INVOLUCRADA_DERMOGRAMA:
        ["En General: dentro de la cavidad bucal y en las uniones muco-cutaneas", "De Dorsal: bordes palpebrales y almohadillas plantaras", "De Ventral: labios-piel, fosas nasales-piel, prepucio-piel, vulva-piel, ano-piel, ingles y axilas, almohadillas plantaras"],
      PRURITO:
        ["Leve", "Por contaminación bacteriana"],
      SEBORREA_O_DESCAMACIÓN:
        ["Intensa"],
      SIGNOS_CLINICOS_DERMICOS:
        ["a) Erosiones mucocutaneas, alopecia", "b) Eritema, costras, descamaciones", "c) Lesiones rodeadas por collarete epidérmico", "d) Ulceras bucales", "e) Signo de Nikolsky positivo"],
      SIGNOS_CLINICOS_GENERALES:
        ["En los casos avanzados hay depresión, fiebre, anorexia,", "pérdida de peso", "Halitosis y salivación excesiva", "Linfoadenopatía", "Dolor variable manifestado por medio del lamido"],
      EDAD_RAZA_Y_SEXO_DE_PRESENTACION:
        ["NO tiene predilección por edad o sexo.Afecta preferentemente adultos jóvenes.Hay razas en la que es más frecuente como los Dachshund de pelo corto, Doberman, Akita, Chow chow"],
      DIAGNÓSTICO:
        ["Biopsia para:", "histopatología", "inmunofluorescencia directa"],
      DIAGNÓSTICO_DIFERENCIAL:
        ["Otros tipos de pénfigos", "Lupus eritematoso sistémico", "Penfígoide bulloso", "Necrólisis epidérmica tóxica", "Candidiasis", "Estomatitis ulcerativas", "Seborreas"],
      PRONÓSTICO:
        ["Grave, aun con tratamiento", "Fatal, sin él"],
      TRATAMIENTO:
        ["Terapia imunosupresora:", "Dosis altas de corticoides", "Clorambucilo", "Azatioprina", "Ciclosporina", "Tetraciclina-niacinamida"],
    },

  },
  {
    NAME: "PÉNFIGO ERITEMATOSO",
    DATA: {
      CODIGO: "NO",
      SINÓNIMO:
        ["No tiene"],
      ETIOLOGÍA:
        ["Está producido por anticuerpos contra los sitios de unión epidérmica que genera acantolisis con queratinocitos separados"],
      AREA_INVOLUCRADA_DERMOGRAMA:
        ["De Dorsal: nariz.área periocular, cara externa e interna de pabellones"],
      PRURITO:
        ["Leve", "Por la contaminación bacteriana"],
      SEBORREA_O_DESCAMACIÓN:
        ["Leve"],
      SIGNOS_CLINICOS_DERMICOS:
        ["a) Eritema, alopecia, vesículas, pústulas", "b) Costras, descamaciones"],
      SIGNOS_CLINICOS_GENERALES:
        ["no hay"],
      EDAD_RAZA_Y_SEXO_DE_PRESENTACION:
        ["En adultos jóvenes no tiene predilección por sexo.Hay razas en la que es frecuente como los Collies"],
      DIAGNÓSTICO:
        ["Biopsia para:", "histopatología", "inmunofluorescencia directa"],
      DIAGNÓSTICO_DIFERENCIAL:
        ["Los otros tipos de pénfigos", "Lupus eritematoso sistémico", "Lupus discoideo", "Dermatitis que responde al Zinc", "Dermatofitosis"],
      PRONÓSTICO:
        ["Reservado", "Malo sin tratamiento"],
      TRATAMIENTO:
        ["Terapia inmunosupresora:", "Dosis altas de corticoides", "Clorambucilo", "Azatioprina", "Ciclosporina", "Tetraciclina-niacinamida"],
    },

  },
  {
    NAME: "PENFIGOIDE BULLOSO",
    DATA: {
      CODIGO: "1PBUL",
      SINÓNIMO:
        ["Bulla penfigoidea", "Penfigoide ampollar", "Penfígoide canino"],
      ETIOLOGÍA:
        ["se forman anticuerpos contra componentes de la membrana basal"],
      AREA_INVOLUCRADA_DERMOGRAMA:
        ["En General: piel sin pelo como abdomen y cara interna de muslos y ocasionales lesiones en las mucosas y bordes mucocutaneos"],
      PRURITO:
        ["Leve", "Por contaminación bacteriana"],
      SEBORREA_O_DESCAMACIÓN:
        ["leve"],
      SIGNOS_CLINICOS_DERMICOS:
        ["Eritema, alopecia, erosiones, ulceraciones en piel y ulceras bucales"],
      SIGNOS_CLINICOS_GENERALES:
        ["En los casos avanzados hay depresión, fiebre, anorexia,", "pérdida de peso", "Dolor variable que se manifiesta a través del lamido"],
      EDAD_RAZA_Y_SEXO_DE_PRESENTACION:
        ["Afecta a animales de edad mediana a viejos, sin predisposición por alguno de los sexos.Los Collies y Shetland son las razas más predispuestas"],
      DIAGNÓSTICO:
        ["Biopsia para:", "histopatología", "inmunofluorescencia directa, positiva"],
      DIAGNÓSTICO_DIFERENCIAL:
        ["Penfigo vulgar", "Lupus eritematoso sistémico", "Necrólisis epidérmica tóxica", "Erupción por drogas", "Resto de las enfermedades subepiderrmicas"],
      "PRONÓSTICO":
        ["Reservado a grave según la extensión de las lesiones"],
      TRATAMIENTO:
        ["Terapia inmunosupresora:", "Dosis altas de corticoides", "Clorambucilo", "Azatioprina", "Ciclosporina", "Tetraciclina-niacinamida"],
    },

  },
  {
    NAME: "LUPUS ERITEMATOSO SISTÉMICO",
    DATA: {
      CODIGO: "4PLES",
      SINÓNIMO:
        ["No tiene"],
      ETIOLOGÍA:
        ["incluye factores genéticos, hormonales y ambientales", "Alteración imuunológica ultifactorial:", "Déficit de celulas T", "Hiperactividad de las celulas B", "Deficiencias de componentes del complemento", "Citocinas", "Se forman complejos inmunes que se depositan en distintos órganos"],
      AREA_INVOLUCRADA_DERMOGRAMA:
        ["En General: todo el cuerpo, sin un area definida y seborrea", "De Dorsal: nariz, periocular", "De Ventral: hiperqueratosis de las almohadillas plantares, en los pabellones auriculares"],
      PRURITO:
        ["Leve", "Por contaminación bacteriana o Malazzesia"],
      SEBORREA_O_DESCAMACIÓN:
        ["Intensa"],
      SIGNOS_CLINICOS_DERMICOS:
        ["a) Cualquier manifestación cutánea puedes ser dada por L.E.S., el LED puede ser una manifestación del LES", "b) Eritema, alopecia, costras, descamaciones", "e) Ulceras e hiperqueratosis de las almohadillas plantaras"],
      SIGNOS_CLINICOS_GENERALES:
        ["Enfermedad sistémica", "glomerulonefropatía", "poliartritis", "anemia", "linfoadenopatia", "hipertermia"],
      EDAD_RAZA_Y_SEXO_DE_PRESENTACION:
        ["En los adultos jóvenes.NO tiene predilección por sexo ni razas.Es más frecuente en los Collies y Ovejeros alemanes"],
      DIAGNÓSTICO:
        ["Biopsia para:", "histopatología, esta puede no ser útil", "inmunofluorescencia directa, positiva", "Anticuerpos antinucleares positivos(90 % de los casos)", "Células LE(60 % de los casos y poco específicos), en sangre"],
      DIAGNÓSTICO_DIFERENCIAL:
        ["Pénfigo vulgar", "Lupus eritematoso discoideo", "Penfigoide bulloso", "Demodicosis", "Dermatofitosis", "Seborreas", "Foliculitis bacterianas", "Alergia alimentaría", "Sarna sarcóptica"],
      "PRONÓSTICO":
        ["Reservado a grave"],
      TRATAMIENTO:
        ["Dosis altas de corticoides", "Clorambucilo", "Azatioprina", "Ciclosporina", "Tetraciclina-niacinamida", "Micofenolato mofetil"],
    },

  },
  {
    NAME: "LUPUS ERITEMATOSO DISCOIDE",
    DATA: {
      CODIGO: "4PLED",
      SINÓNIMO:
        ["Lupus eritematoso cutáneo"],
      ETIOLOGÍA:
        ["similar al LES pero afecta solo piel", "La exposición a luz UV juega un rol en la patogenia"],
      AREA_INVOLUCRADA_DERMOGRAMA:
        ["De Dorsal: nariz, plano nasal, periocular"],
      PRURITO:
        ["Ausente a leve", "Secundario por contaminación bacteriana"],
      SEBORREA_O_DESCAMACIÓN:
        ["Leve"],
      SIGNOS_CLINICOS_DERMICOS:
        ["a) Eritema, alopecia, ulceración y costras", "b) Despigmentación de planum nasal", "c) alisamiento de la trufa"],
      SIGNOS_CLINICOS_GENERALES: ["NO tiene",
      ],
      EDAD_RAZA_Y_SEXO_DE_PRESENTACION: [" Aunque no hay predisposición por edad o sexo, es raro en los cachorros",
        "Hay razas en la que es más frecuente como Collies, Ovejeros alemanes, Siberian huskies"
      ],
      DIAGNÓSTICO:
        ["Biopsia para:", "histopatología", "inmunofluorescencia directa"],
      DIAGNÓSTICO_DIFERENCIAL:
        ["Pénfigo eritematoso", "Pénfigo foliaceo", "Piodermia nasal", "Despigmentación nasal idiopática"],
      PRONÓSTICO:
        ["Bueno con tratamiento"],
      TRATAMIENTO:
        ["Corticoides", "Tetraciclina-niacinamida", "Vitamina E", "Filtros solares", "micofenolato mofetil", "Oclacitinib", "ciclosporina", "tacrolimus tópico"],
    },

  },
  {
    NAME: "LUPUS MUCOCUTÁNEO",
    DATA: {
      CODIGO: "1PLES",
      SINÓNIMO:
        ["Lupus eritematoso cutaneo"],
      ETIOLOGÍA:
        ["similar al LES pero afecta solo piel en aéreas de conjunción de mucosa y piel", "La fotosensibilización juega un rol en la patogénia"],
      AREA_INVOLUCRADA_DERMOGRAMA:
        ["De Dorsal: perinasal, perilabial, periocular, y uniones mucocutaneas de ano, vulva y prepucio"],
      PRURITO:
        ["Ausente a leve", "Secundario por contaminación bacteriana"],
      SEBORREA_O_DESCAMACIÓN:
        ["Leve"],
      SIGNOS_CLINICOS_DERMICOS:
        ["a) Eritema, alopecia, erosión, ulceración y costras"],
      SIGNOS_CLINICOS_GENERALES:
        ["NO tiene"],
      EDAD_RAZA_Y_SEXO_DE_PRESENTACION: ["Aunque no hay predisposición por edad o sexo, es raro en los cachorros",
        "Hay razas en la que es más frecuente como en el Ovejero Alemán"
      ],
      DIAGNÓSTICO:
        ["Biopsia para:", "histopatología", "inmunofluorescencia directa"],
      DIAGNÓSTICO_DIFERENCIAL:
        ["Pénfigo foliaceo", "Piodermia mucocutanea", "Dermatofitosis"],
      PRONÓSTICO:
        ["Bueno con tratamiento"],
      TRATAMIENTO:
        ["Dosis altas de corticoides", "Clorambucilo", "Azatioprina", "Ciclosporina", "Tetraciclina-niacinamida", "Vitamina E", "Micofenolato mofetil", "Oclacitinib"],
    },

  },
  {
    NAME: "LUPUS CUTÁNEO VESICULAR",
    DATA: {
      CODIGO: "NO",
      SINÓNIMO:
        ["No tiene"],
      ETIOLOGÍA:
        ["similar al LES pero afecta solo piel", "La fotosensibilización juega un rol en la patogenia"],
      AREA_INVOLUCRADA_DERMOGRAMA:
        ["De Dorsal: areas de piel delgada como abdomen, cara interna de muslos, axilas"],
      PRURITO:
        ["Ausente a leve", "Secundario por contaminación bacteriana"],
      SEBORREA_O_DESCAMACIÓN:
        ["Leve"],
      SIGNOS_CLINICOS_DERMICOS:
        ["a) Eritema, alopecia, collaretes, vesículas, ulceración y costras"],
      SIGNOS_CLINICOS_GENERALES:
        ["NO tiene"],
      EDAD_RAZA_Y_SEXO_DE_PRESENTACION:
        ["Aunque no hay predisposición por edad o sexo, es raro en los cachorros", "Hay razas en la que es más frecuente como Collies y Shettland"],
      DIAGNÓSTICO:
        ["Biopsia para:", "histopatología", "inmunofluorescencia directa, positiva"],
      DIAGNÓSTICO_DIFERENCIAL:
        ["Pénfigo foliaceo", "Penfigoide", "Lupus eritematoso sistémico"],
      PRONÓSTICO:
        ["Reservado"],
      TRATAMIENTO:
        ["Dosis altas de corticoides", "Clorambucilo", "Azatioprina", "Ciclosporina", "Tetraciclina-niacinamida", "Vitamina E", "Micofenolato mofetilo"],
    },

  },
  {
    NAME: "DERMATOMIOSITIS",
    DATA: {
      CODIGO: "9EPI",
      SINÓNIMO:
        ["Sindrome de Sheltie / Collie"],
      ETIOLOGÍA:
        ["cuadro inflamatorio idiopático inmunomediado y hereditario de piel y músculos"],
      AREA_INVOLUCRADA_DERMOGRAMA:
        ["De Dorsal: nariz, región periocular, puntas de las orejas, plano nasal, carpos, tarsos, codos, dedos y punta de la cola"],
      PRURITO:
        ["Ausente", "Secundario por contaminación bacteriana"],
      SEBORREA_O_DESCAMACIÓN:
        ["Leve"],
      SIGNOS_CLINICOS_DERMICOS:
        ["a) Alopecia parcial", "b) Eritema, escamas, costras", "e) Erosiones, ulceraciones", "d) Onicomadesis y onicorrexia"],
      SIGNOS_CLINICOS_GENERALES:
        ["Miositis y dolor en casos severos y avanzados, con todas las manifestaciones clínicas, bioquímicas y electromiográficos"],
      EDAD_RAZA_Y_SEXO_DE_PRESENTACION:
        ["antes de los 6 meses de edad, es mas frecuente en Collie y Collie shetiand y sus cruzas, aunque otras razas pueden estar afectadas como Welsh corgi, Ovejero aleman, Chow-Chow, Belga Tervueren, Beauceron, Terrier de Lakeland y Kuvasz de cualquier sexo"],
      DIAGNÓSTICO:
        ["Localización de la lesión, edad, raza", "Biopsia para histopatología", "Inmunofluorescencia directa", "Aumento de las enzimas musculares(LDH-CPK-GOT)", "Electromiografia"],
      DIAGNÓSTICO_DIFERENCIAL:
        ["Demodicosis", "Dermatofitosis por microsporum", "Pénfigo eritematoso", "Pénfigo foliáceo", "Piodermia nasal", "Lupus"],
      PRONÓSTICO:
        ["Malo, es un defecto permanente"],
      TRATAMIENTO:
        ["Evitar la exposición al sol", "vitamina E", "Ácidos grasos omega 3 y 6, o alimentos balanceados con estos ácidos grasos en la relación requerida", "Corticoides con precaución debido a la acción negativa de estos sobre los músculos", "Pentoxifilina", "tetraciclina y niacinamida"],
    },

  },
  {
    NAME: "DEMODICOSIS LOCALIZADA",
    DATA: {
      CODIGO: "5DEML",
      SINÓNIMO:
        ["Sarna demodectica localizada", "Sarna roja localizada"],
      ETIOLOGÍA:
        ["Demodex canis"],
      AREA_INVOLUCRADA_DERMOGRAMA:
        ["En General: la alopecia parcial está distribuida en cualquier parte de la superficie dérmica", "De Dorsal: en la cabeza, miembros y región costal"],
      PRURITO:
        ["Ausente", "Puede ser leve cuando hay contaminación bacteriana"],
      SEBORREA_O_DESCAMACIÓN:
        ["Ausente", "Puede ser leve cuando hay contaminación"],
      SIGNOS_CLINICOS_DERMICOS:
        ["a) Alopecia parcial, eritema", "b) Foliculitis", "c) descamación, costras"],
      SIGNOS_CLINICOS_GENERALES:
        ["NO llene"],
      EDAD_RAZA_Y_SEXO_DE_PRESENTACION:
        ["Generalmente en cachorros y jóvenes antes de alcanzar la madurez sexual"],
      DIAGNÓSTICO:
        ["Observación microscópica de:", "raspado profundo de la piel", "extracción de pelos"],
      DIAGNÓSTICO_DIFERENCIAL:
        ["Tiña microspórica", "Parches seborreicos"],
      PRONÓSTICO:
        ["Reservado: es posible la curación espontánea, aunque también es posible que evolucione hacia la forma generalizada"],
      TRATAMIENTO:
        ["Baño general con amitraz de la misma forma que en la demodeccia generalizada", "Tópicos locales con una solución de 40 cc de vaselina líquida, 20 cc de dimetilsulfoxido a 90 %, y 2cc de amitraz al 12.5 %", "Tratamiento oral prolongado con Ivermectina o moxidectina", "Isoxazolinas"],
    },

  },
  {
    NAME: "DEMODICOSIS GENERALIZADA",
    DATA: {
      CODIGO: "5DEMG",
      SINÓNIMO:
        ["Sarna demodéctica", "Sarna roja"],
      ETIOLOGÍA:
        ["Demodex canis"],
      AREA_INVOLUCRADA_DERMOGRAMA:
        ["En General: cualquiera", "De Dorsal: en la cabeza, dorso, miembros", "De Ventral: cuello, espacios interdigitales"],
      PRURITO:
        ["Leve", "Por contaminación bacteriana"],
      SEBORREA_O_DESCAMACIÓN:
        ["Leve"],
      SIGNOS_CLINICOS_DERMICOS:
        ["a) Alopecia, foliculitis", "b) Eritema, secreciones sero-hemorragicas-purulentas", "e) Costras, descamaciones"],
      SIGNOS_CLINICOS_GENERALES:
        ["Dependen del compromiso sistémico", "Dependen de la intensidad de la piodermia", "Linfoadenopatía localizada o generalizada"],
      EDAD_RAZA_Y_SEXO_DE_PRESENTACION:
        ["Preferentemente en cachorros y jóvenes, de todas las razas aunque hay algunas en que tiene mayor incidencia, como en Pit bull, Doberman, Boxer, Collies, Gran danés, etc", "La presencia de demodicosis en los animales adultos hace necesario investigar aquellas patologías que alteran la inmunidad como determinado tipo de tumores"],
      DIAGNÓSTICO:
        ["Raspado superficial hasta sangrado", "Extracción de pelos"],
      DIAGNÓSTICO_DIFERENCIAL:
        ["Foliculitis bacteriana", "Dermatofitosis por trichophyton", "Pénfigo foliaceo", "Lupus eritematoso", "Seborreas"],
      PRONÓSTICO:
        ["Reservado a malo", "Malo cuanto más edad tiene el animal"],
      TRATAMIENTO: ["Evaluar la necesidad de cortar el pelo",
        "Baños con champú de peróxido de benzoílo, o clohexidina",
        "Amitraz al12, 5 5 %, 2 cc por litro de agua en forma de baños, cada 7 días y hasta un mes despues de la mejoría clínica.",
        "lvermectina 0, 4 a 0, 6 mg / kg vía oral, moxidectina igual dosis oral, doramectina igual dosis via SC una vez por semana",
        "Antibioticos si hay piodermia coexistente",
        "isoxazolinas"
      ],
    },

  },
  {
    NAME: "SARNA SARCÓPTICA",
    DATA: {
      CODIGO: "5SARC",
      SINÓNIMO:
        ["Sarna canina", "Escabiosis canina"],
      ETIOLOGÍA:
        ["Sarcoptes scabiei var.canis"],
      AREA_INVOLUCRADA_DERMOGRAMA:
        ["En los adultos:", "De Dorsal: bordes de las orejas, codos, tarsos", "De Ventral: abdomen y tórax en menor grado", "En los cachorros:", "De Ventral: abdomen y tórax en mayor grado", "Estadio I son cuadros con pocas lesiones dérmicas y gran prurito", "Estadio II es el cuadro típico y característico", "Estadio III cuadros crónicos que necesitan más diagnóstico diferencial"],
      PRURITO:
        ["Intenso"],
      SEBORREA_O_DESCAMACIÓN:
        ["Intensa"],
      SIGNOS_CLINICOS_DERMICOS:
        ["a) Pápulas, costras", "b) Alopecia parcial", "e) Hiperpigmentación, hiperqueratosis", "d) Reflejo otopruriginoso positivo"],
      SIGNOS_CLINICOS_GENERALES:
        ["Prurito constante", "En el Estadio III gran deterioro del estado general"],
      EDAD_RAZA_Y_SEXO_DE_PRESENTACION: ["No tiene predilección por edad, raza o sexo"
      ],
      DIAGNÓSTICO:
        ["Reflejo otopruriginoso NO patognomónico, aunque orientativo", "Raspaje superficial de la piel, solo positivo en un 50-60 % de los casos", "Por la respuesta favorable a los acaricidas", "Por la falta de respuesta a los corticoides"],
      DIAGNÓSTICO_DIFERENCIAL:
        ["Dermatitis atópica canina", "Foliculitis bacterianas", "Alergia alimentaría", "Dermatitis de contacto", "Dermatitis por Malassezia", "Dermatitis por otodectes", "Dermatitis por Cheyletiella"],
      PRONÓSTICO:
        ["Bueno"],
      TRATAMIENTO:
        ["Baños con champú de peróxido de benzoilo, a modo de eliminar costras y permitir penetración de los acaricidas", "Amitraz 12.5 %, 2 cc / litro de agua una vez por semana, hasta un mes después de la mejoría clínica", "Ivermectina, via oral diariamente o bien 4OO mcg / kg intramuscular o subcutánea cada 15 días, teniendo precaución con las razas susceptibles como Collies, Old inglish sheep dog y pastor australiano y sus cruzas", "Isoxazolinas"],
    },

  },
  {
    NAME: "SARNA OTODÉCTICA",
    DATA: {
      CODIGO: "5OTO",
      SINÓNIMO:
        ["Sarna auricular", "Sama de la oreja"],
      ETIOLOGÍA:
        ["Octodectes cynotis"],
      AREA_INVOLUCRADA_DERMOGRAMA:
        ["Conductos auditivos externos"],
      PRURITO:
        ["Intenso"],
      SEBORREA_O_DESCAMACIÓN:
        ["Intensa"],
      SIGNOS_CLINICOS_DERMICOS:
        ["a) Otitis y alopecia cara externa pabellón auricular", "b) Descamación con cerumen seco color marrón", "e) Prurito en cabeza y cuello"],
      SIGNOS_CLINICOS_GENERALES:
        ["Rascado constante de las orejas", "Posible prurito generalizado"],
      EDAD_RAZA_Y_SEXO_DE_PRESENTACION:
        ["más frecuentemente y los signos se manifiestan con más intensidad en los cachorros"],
      DIAGNÓSTICO:
        ["Observación directa con lupa, se ven los ácaros móviles", "Observación de la secreción al microscopio", "Por otoscopía"],
      DIAGNÓSTICO_DIFERENCIAL:
        ["Dermatitis atópica", "Alergia alimentaría", "Dermatitis alérgica a las pulgas", "Sarna sarcóptica", "Dermatitis por cheyletiella", "Dermatitis por Mallazesia"],
      PRONÓSTICO:
        ["Bueno"],
      TRATAMIENTO:
        ["Lavar los conductos con shampoo de peróxido de benzoilo, a modo de eliminar costras y permitir penetración de los acaricidas", "Colocar una vez por semana una solución con 4Occ de vaselina líquida, 2º cc de dimetilsulfoxido al 90 % y 2cc de Amitraz al 12, 5 %", "Bañar a todo el animal con Amitraz 12, 51 / o, 2ccJlitro de agua una vez por semana, hasta un mes despues de la n~a", "Ivermectina 4OO mcg / kg subcutánea cada 15 días, 2 a 3 aplicaciones", "Tratar a los otros animales y al medio ambiente", "Fipronilo dos gotas por oreja(del contenido de la pipeta) cada 15 dias", "Fipronilo una aspersión cada 15 dias en orejas", "isoxazolinas"],
    },

  },
  {
    NAME: "CHEILETIELOSIS",
    DATA: {
      CODIGO: "NO",
      SINÓNIMO:
        ["Caspa ambulante", "Caspa que camina"],
      ETIOLOGÍA:
        ["Cheyletiella yasguri"],
      AREA_INVOLUCRADA_DERMOGRAMA:
        ["NO tiene dermograma definido", "Los parásitos se observan en la superficie de los pelos, especialmente en cabeza, cuello y columna dorsal"],
      PRURITO:
        ["Intenso"],
      SEBORREA_O_DESCAMACIÓN:
        ["Intensa"],
      SIGNOS_CLINICOS_DERMICOS:
        ["'Escamas' grisaceas cubriendo el manto piloso"],
      SIGNOS_CLINICOS_GENERALES:
        ["NO tiene"],
      EDAD_RAZA_Y_SEXO_DE_PRESENTACION:
        ["NO tiene"],
      DIAGNÓSTICO:
        ["Examen con lupa o microscopio de:", "las descamaciones", "del material recolectado con una cinta de acetato de celulosa", "del material recolectado con un peine para extraer pulgas"],
      DIAGNÓSTICO_DIFERENCIAL:
        ["Seborreas'", "Sarna otodéctica", "Sama sarcóptica"],
      PRONÓSTICO:
        ["Bueno"],
      TRATAMIENTO:
        ["Baños con champú antiseborreico a los fines de eliminar escamas, costras y ácaros", "Utilizar cualquier ectoparaciticida para pulgas", "Bañar a todo el animal con Amitraz 12.5 %, 2 cc / litro de agua una vez por semana, durante 6 a 8 semanas", "lvermectina 4OOmcg / kg subcutánea cada 15 dias, 2 a 3 dosis", "Tratar a los otros animales y al medio ambiente, esta medida es muy importante", "Isoxazolinas"],
    },

  },
  {
    NAME: "DERMATOSIS POR HIPERADRENOCORTISISMO",
    DATA: {
      CODIGO: "6CUSH",
      SINÓNIMO:
        ["Dermatosis por síndrome de 'Cushing'"],
      ETIOLOGÍA:
        ["producido por excesiva cantidad de corticoides endógenos o exógenos"],
      AREA_INVOLUCRADA_DERMOGRAMA:
        ["En General; alopecia difusa parcial o generalizada", "De Dorsal: en el tronco llegando hasta los codos, tarsos y cuello", "De Ventral: en todo el area desde las axilas a las ingles; en la cola y el cuello.-Las venas mamarias son claramente visibles"],
      PRURITO:
        ["Leve.Por contaminación bacteriana y / o por Malassezia"],
      SEBORREA_O_DESCAMACIÓN:
        ["Leve"],
      SIGNOS_CLINICOS_DERMICOS:
        ["a) Alopecia sin inflamación,", "b) piel fina e hipotónica", "c) Venas mamarias visibles,", "d) calcinosis cutis", "e) Pelo opaco y decolorado", "f) Piodermia secundaria, parches seborreicos, comedones"],
      SIGNOS_CLINICOS_GENERALES:
        ["Poliuria-polidipsia y posible polifagia", "Debilidad muscular generalizada, abdomen péndulo", "Infecciones urinarias", "Anestro o atrofia testicular", "Diabetes mellitus con insulinoresistencia"],
      EDAD_RAZA_Y_SEXO_DE_PRESENTACION:
        ["Adultos y viejos, sin predisposición por un sexo y más frecuente en Dachshund, Caniches, Beagles, aunque cualquier otra raza puede estar afectada"],
      DIAGNÓSTICO:
        ["Análisis de orina con densidad muy baja", "Hemograma característico desde el inicio de la enfermedad hormonal, leucocitosis, neutrofilia, linfopenia, eosinopenia", "Fosfatasa alcalina elevada.", "Hiperlipemia", "hiperglucemia", "estimulación con ACTH o de inhibición con Dexametasona", "Ecografia abdominal", "RMN de la cabeza", "TAC abdominal", "Biopsia cutánea"],
      DIAGNÓSTICO_DIFERENCIAL:
        ["Alopecia x, ahora llamada detención del ciclo capilar", "Hipotiroidismo", "Otros desbalances hormonales"],
      PRONÓSTICO:
        ["Reservado, en los casos primarios la curación de las manifestaciones dérmicas dependerá si se puede resolver la causa de hiperadrenocorticismo", "Bueno en los casos iatrogénicos"],
      TRATAMIENTO:
        ["Mitotano", "Trilostano", "Ketoconazol", "Isotretinoina 9 cis", "cabergolina"],
    },

  },
  {
    NAME: "DERMATOSIS POR HIPOTIROIDISMO",
    DATA: {
      CODIGO: "6HTIR",
      SINÓNIMO:
        ["No tiene"],
      ETIOLOGÍA:
        ["El hipotiroidismo primario adquirido es producido por una tiroiditis linfocítica, o por una atrofia tiroidea idiopática"],
      AREA_INVOLUCRADA_DERMOGRAMA:
        ["En General: alopecia parcial", "De Dorsal: en la región torácica en forma de silla de montar; en el cuello; los pelos se mantienen a lo largo de la columna vertebral.Alopecia en la cara externa de los pabellones auriculares, y cola", "En Ventral: del abdomen, tórax y cuello"],
      PRURITO:
        ["Ausente", "Secundario por contaminación bacteriana o Malassezia"],
      SEBORREA_O_DESCAMACIÓN:
        ["leve a moderada"],
      SIGNOS_CLINICOS_DERMICOS:
        ["a) Alopecia parcial sin inflamación", "b) Hiperpigmentación uniforme", "e) El pelo se mantiene en la cabeza, y en las extremidades", "d) Otitis poco frecuente", "e) sobrecrecimiento de Malassezias y bacterias"],
      SIGNOS_CLINICOS_GENERALES:
        ["Para el hipotiroidismo hay una larga lista de signos clínicos, ninguno patognomónico ni correlacionados a las lesiones dérmicas"],
      EDAD_RAZA_Y_SEXO_DE_PRESENTACION:
        ["En adultos-jóvenes.En todas las razas aunque más frecuentemente en Cocker spaniel, Dachshund.Doberman, Setter irlandés.Sin predilección por sexo"],
      DIAGNÓSTICO:
        ["Hemograma, anemia no regenerativa, normocítica, normocrómica.-Hipercolesterolemia", "Biopsia cutánea", "Determinación T4 total, T4 libre, TSH especifica canina", "Respuesta a la terapia, es un buen método para confirmar el diagnóstico", "Estimulación con tirotrofina"],
      DIAGNÓSTICO_DIFERENCIAL:
        ["Hiperadrenocortisismo", "Alopecia x, ahora llamada detención del ciclo capilar", "Otros desbalances hormonales"],
      PRONÓSTICO:
        ["Reservado"],
      TRATAMIENTO:
        ["Levotiroxina: 0, 02-0, 04 mg / kg cada 12 horas al principio y si hay inejoría se puede seguir con una dosis diaria.Los cambios cutáneos tardandesde 1 mes hasta 5 meses en producirse"],
    },

  },
  {
    NAME: "ALOPECÍA X",
    DATA: {
      CODIGO: "6SOM",
      SINÓNIMO:
        ["Dermatosis por detención del ciclo folicular"],
      ETIOLOGÍA:
        ["Desconocida.Han sido involucradas varias patologías como la dermatosis sensible a la castración, dermatosis sensible a la hormona de crecimiento, síndrome tipo hiperplasia adrenal, deficiencia de hormona de crecimiento del adulto.Aun hoy es una incógnita pero las nuevas teorías sobre las causa de la detención del ciclo capilar se están centrando en los receptores del folículo piloso"],
      AREA_INVOLUCRADA_DERMOGRAMA:
        ["En General: alopecia parcial o total dependiendo del tiempo de evolución:", "De Dorsal: en la región torácica en forma de silla de montar; en el cuello.Alopecia en la cara externa de los pabellones auriculares, y cola.Posterior de muslos y periné", "En Ventral: del abdomen, tórax, cuello y cola"],
      PRURITO:
        ["Ausente", "Secundario por contaminación bacteriana y / o Malassezia"],
      SEBORREA_O_DESCAMACIÓN:
        ["leve a moderada"],
      SIGNOS_CLINICOS_DERMICOS:
        ["a) Alopecia sin inflamación,", "b) piel fina e hipotónica", "c) Hiperpigmentación", "d) Otitis, foliculitis secundarias"],
      SIGNOS_CLINICOS_GENERALES:
        ["No tiene"],
      EDAD_RAZA_Y_SEXO_DE_PRESENTACION:
        ["en cualquier raza, aunque particularmente en Malamute, Chow-chow, Caniche miniatura, Pomeranias, de cualquier edad, preferentemente del sexo masculino"],
      DIAGNÓSTICO:
        ["Por exclusión de otras endocrinopatías(hormonas tiroideas, cortisol / creatinina urinarias, estimulación con acth)", "Por histopatología, observación de algunas características como los folículos pilosos dispuestos como tentáculos de pulpo y que el pelo crece en el lugar de la biopsia"],
      DIAGNÓSTICO_DIFERENCIAL:
        ["Hipotiroidismo", "Hiperadrenocorticoidismo", "otras endocrinopatías"],
      PRONÓSTICO:
        ["Reservado:", "Por la dificultad de confirmar el diagnóstico", "Por la dificultad de realizar un tratamiento etiológico"],
      TRATAMIENTO:
        ["Se han intentado muchos desde el punto de vista médico, estrógenos, progestágenos, andrógenos, hormona de crecimiento, mitotano, trilostano pero ninguno de ellos con una efectividad del 100 %", "También se indica la castración pero la respuesta no siempre es favorable"],
    },
  },
  {
    NAME: "DERMATOSIS POR NEOPLASIA TESTICULAR",
    DATA: {
      CODIGO: "6SER",
      SINÓNIMO:
        ["Hiperestrogenismo de los machos"],
      ETIOLOGÍA:
        ["Neoplasia testicular secretora de estrógenos.Frecuentemente ocasionado por tumor de células de sértoli y con menor frecuencia el seminoma y el de células intersticiales"],
      AREA_INVOLUCRADA_DERMOGRAMA:
        ["Alopecia:", "De Dorsal: las alopecias involucran los flancos, el área poplítea y cuello", "De Ventral: en todo el área desde las ingles hasta las axilas, ginecomastia y cara interna de las orejas"],
      PRURITO:
        ["Ausente", "Secundario, por contaminación bacteriana y / o Malassezia"],
      SEBORREA_O_DESCAMACIÓN:
        ["Ausente a leve"],
      SIGNOS_CLINICOS_DERMICOS:
        ["a) Alopecia sin inflamación", "b) Hiperpigmentación", "c) Hipertrofia de los pezones", "d) Prepucio péndulo", "e) Otitis", "f) piel engrosada", "g) melanosis macular perineal", "h) eritema e hiperpigmentación del rafe prepucial medial"],
      SIGNOS_CLINICOS_GENERALES:
        ["Un testículo agrandado o bien uno ectópico(cualquiera de las dos posibilidades)", "Criptorquidea", "Atracción sexual sobre otros machos", "Prostatomegalia ocasionando hematuria, disuria"],
      EDAD_RAZA_Y_SEXO_DE_PRESENTACION:
        ["en los machos de cualquier raza, adultos y viejos"],
      DIAGNÓSTICO:
        ["Palpación testicular", "Ecografía abdominal", "La biopsia de la piel NO es diagnostica", "Biopsia de los testículos", "Respuesta después de la castración"],
      DIAGNÓSTICO_DIFERENCIAL:
        ["Hiperadrenocorticoidismo", "Hipotiroidismo", "Alopecia X"],
      PRONÓSTICO:
        ["Bueno post-castración, la evaluación de los resultados se hace a través de la reversión de los signos cutáneos a los 3 meses"],
      TRATAMIENTO:
        ["Orquiectomía bilateral"],
    },

  },
  {
    NAME: "DERMATOSIS POR HIPERESTROGENISMO EN HEMBRAS",
    DATA: {
      CODIGO: "6HEST",
      SINÓNIMO:
        ["Desbalance ovárico hiperestrogénico", "Desbalance ovárico tipo I"],
      ETIOLOGÍA:
        ["la causa del hiperestrogenismo no se conoce exactamente.Posiblemente se trate de una falla en la conversión de los estrógenos o que haya una producción ectópica.También es probable un defecto en los receptores cutáneos.Es frecuente encontrar ovarios quísticos en estos pacientes", "AREA_INVOLUCRADA_DERMOGRAMA:", "De Dorsal: en el periné y los flancos", "De Ventral: toda el área desde las ingles hasta las axilas; ginecomastia con pezones hiperpigmentados y agrandados", "conductos auditivos(no constante)"],
      PRURITO:
        ["Ausente", "Secundario por contaminación bacteriana y / o por Malassezia"],
      SEBORREA_O_DESCAMACIÓN:
        ["Leve"],
      SIGNOS_CLINICOS_DERMICOS:
        ["a) Piel engrosada y alopécica", "b) Hiperpigmentación", "c) Vulva hiperpigmentada y grande", "d) Otitis"],
      SIGNOS_CLINICOS_GENERALES:
        ["Estros irregulares", "Falsa preñez", "Endometrosis y piometra"],
      EDAD_RAZA_Y_SEXO_DE_PRESENTACION:
        [" Se presentan en hembras adultas de edad mediana y sin predisposición racial"],
      DIAGNÓSTICO:
        ["Por los diagnósticos diferenciales", "la determinación de estrógenos-progesterona, no es confiable", "A través de la respuesta a la ovariectomía"],
      DIAGNÓSTICO_DIFERENCIAL:
        ["Con las otras dermatopatías hormonales", "Con dermatitis seborreicas idiopáticas", "Si hay mucho prurito con hipersensibilidades como atopía, hipersensibilidad alimentaria, dermatitis alérgica de contacto"],
      PRONÓSTICO:
        ["Bueno, la respuesta favorable debe producirse entre 3 y 6 meses después de la ovariectomía"],
      TRATAMIENTO:
        ["Ovariectomía"],
    },

  },
  {
    NAME: "DERMATOSIS QUE RESPONDE A LOS ESTRÓGENOS",
    DATA: {
      CODIGO: "6HIP",
      SINÓNIMO:
        ["Dermatosis por hipoestrogenismo", "Desbalance ovárico tipo II"],
      ETIOLOGÍA:
        ["Se produce en algunas hembras castradas"],
      AREA_INVOLUCRADA_DERMOGRAMA:
        ["De Dorsal: las alopecias comienzan en los flancos; en el periné y posterior de muslos y pabellones auriculares", "De Ventral, desde las axilas hasta las ingles, cuello"],
      PRURITO:
        ["Ausente"],
      SEBORREA_O_DESCAMACIÓN:
        ["Ausente"],
      SIGNOS_CLINICOS_DERMICOS:
        ["a) alopecia sin inflamación", "b) Hipopigmentada", "e) Vulva infantil", "d) Pezones infantiles", "e) piel muy delgada"],
      SIGNOS_CLINICOS_GENERALES: ["Rara vez cursa junto con incontinencia urinaria NO neurogénica",
      ],
      EDAD_RAZA_Y_SEXO_DE_PRESENTACION:
        ["NO hay edad, sexo", "o raza.Con mayor frecuencia en adultas, se produce más frecuentemente", "en animales castrados a temprana edad"],
      DIAGNÓSTICO:
        ["Por la historia de la ovariectomía a temprana edad", "Por la respuesta terapéutica", "A través de diagnóstico diferencial con otras dermatopatías hormonales", "La biopsia cutánea no es de gran utilidad"],
      DIAGNÓSTICO_DIFERENCIAL:
        ["con el resto de las dermatopatías de origen hormonal"],
      PRONÓSTICO:
        ["Bueno"],
      TRATAMIENTO:
        ["Estrógeno oral o inyectable", "si hay incontinencia: citrato de clomifeno"],
    },

  },
  {
    NAME: "DERMATOFITOSIS POR MICROSPORUM",
    DATA: {
      CODIGO: "7MIC",
      SINÓNIMO:
        ["Tiña por microsporum"],
      ETIOLOGÍA:
        ["Microsponun canis"],
      AREA_INVOLUCRADA_DERMOGRAMA:
        ["En General: cualquier área puede estar afectada", "De Dorsal: tiene predilección por las regiones con pelos más cortos como orejas, cara y miembros", "De Ventral: miembros"],
      PRURITO:
        ["Ausente", "Secundario por contaminación bacteriana"],
      SEBORREA_O_DESCAMACIÓN:
        ["Leve"],
      SIGNOS_CLINICOS_DERMICOS:
        ["a) Alopecia circular y ausencia total de pelo", "b) Descamaciones seborreicas", "e) Foliculitis por contaminación bacteriana"],
      SIGNOS_CLINICOS_GENERALES:
        ["Ausentes"],
      EDAD_RAZA_Y_SEXO_DE_PRESENTACION:
        ["En cualquier edad, afecta a los animales más jóvenes y a los imunosuprimidos", "Sin predisposición racial"],
      DIAGNÓSTICO:
        ["Por cultivo", "Por contagio a otro animal o a los seres humanos", "Solo el 50 % fluorescen a la lámpara de Wood", "Las artrosporas se ven en al microscopio hasta en el 70 % de los casos", "Histopatología con tinciones especiales(PAS)"],
      DIAGNÓSTICO_DIFERENCIAL:
        ["Con piodermia superficial diseminada, estas tienen la localización de las podermias y además siempre tienen algún pelo en su interior", "Demodicosis localizada", "Parches seborreicos, siempre hay pelos en su interior", "Mastocitomas", "Histiocitomas", "Parche caliente incipiente"],
      PRONÓSTICO:
        ["Bueno, en animales sanos puede haber remisión espontánea"],
      TRATAMIENTO:
        ["Baños con povidona iodada y clorhexidina", "Cuando hay pocas lesiones, lociones antifungicas", "sistémico: Griseofulvina, itraconazol, ketoconazol, terbinafina", "local: miconazol, terbinafina", "Control ambiental"],
    },

  },
  {
    NAME: "DERMATOFITOSIS POR TRICOPHYTON",
    DATA: {
      CODIGO: "7TRI",
      SINÓNIMO:
        ["Tiña por tricofitosis", "Tricofitosis"],
      ETIOLOGÍA:
        ["Trichophyton mentagrophytes"],
      AREA_INVOLUCRADA_DERMOGRAMA:
        ["En General: involucra superficies relativamente grandes", "De Dorsal: cualquier área pero frecuentemente cabeza, manos y patas"],
      PRURITO:
        ["Ausente", "Secundario por contaminación bacteriana"],
      SEBORREA_O_DESCAMACIÓN:
        ["Leve a moderada"],
      SIGNOS_CLINICOS_DERMICOS:
        ["a) Alopecia irregular, expansivo no circular, expansiva", "b) Foliculitis", "e) hiperpigmentación", "d ) Onicomicosis"],
      SIGNOS_CLINICOS_GENERALES:
        ["Ausentes"],
      EDAD_RAZA_Y_SEXO_DE_PRESENTACION:
        ["Más frecuente en animales adultos"],
      DIAGNÓSTICO:
        ["extracción de pelos y escamas y observación directa", "Cultivo", "Biopsia e histopatología con tinciones especiales(PAS)"],
      DIAGNÓSTICO_DIFERENCIAL:
        ["Demodicosis generalizada", "Pénfigo foliáceo y eritematoso"],
      PRONÓSTICO:
        ["Bueno, siempre que no haya inmunosupresión"],
      TRATAMIENTO:
        ["Baños con solución jabonosa de povidona iodada o clorhexidina", "Antibióticos vía general si hay contaminación bacteriana", "sistémico: Griseofulvina, itraconazol, ketoconazol, terbinafina", "local: miconazol, terbinafina", "Control ambiental", "lociones en base a clotrimazol o ketoconazol"],
    },

  },
  {
    NAME: "DERMATITIS POR MALASSEZIA",
    DATA: {
      CODIGO: "7MAL",
      SINÓNIMO:
        ["Malasseziosis"],
      ETIOLOGÍA:
        ["Malassezia pachydermatis"],
      AREA_INVOLUCRADA_DERMOGRAMA:
        ["En General: como contaminantes de alergias", "De Dorsal: en áreas de roce y HÚMEDAd como cuello, axilas cara interna de muslos, pliegue vulvar, región perianal, e interdigital", "De Ventral: en la cara interna de las orejas, labios, cuello e interdigital"],
      PRURITO:
        ["Intenso"],
      SEBORREA_O_DESCAMACIÓN:
        ["Leve a moderada"],
      SIGNOS_CLINICOS_DERMICOS:
        ["a) Piel eritematosa y alopécica", "b) Seborrea oleosa", "e) Olor seborreico", "d) Otitis", "e) costras amarillentas"],
      SIGNOS_CLINICOS_GENERALES:
        ["Prurito constante"],
      EDAD_RAZA_Y_SEXO_DE_PRESENTACION:
        ["En adultos de cualquier raza y sexo"],
      DIAGNÓSTICO:
        ["citología", "histopatología"],
      DIAGNÓSTICO_DIFERENCIAL:
        ["Dermatitis atópica", "Alergia alimentaría", "Demodicosis"],
      PRONÓSTICO:
        ["Bueno si se controla la causa primaria"],
      TRATAMIENTO:
        ["Con antifúngicos sistémicos como ketoconazol e itraconazol", "Baños con champú clorhexidina más acido propiónico"],
    },

  },
  {
    NAME: "SEBORREA PRIMARIA",
    DATA: {
      CODIGO: "8APRI",
      SINÓNIMO:
        ["Seborrea idiopática"],
      ETIOLOGÍA:
        ["Desorden hereditario de la queratinización y cornificación"],
      AREA_INVOLUCRADA_DERMOGRAMA:
        ["variable de acuerdo a la causa desencadenante"],
      PRURITO:
        ["Leve", "Depende de la etiología y aumenta por contaminación bacteriana y / o Malassezia"],
      SEBORREA_O_DESCAMACIÓN:
        ["Intensa"],
      SIGNOS_CLINICOS_DERMICOS:
        ["dependen de la etiología pero En General son:", "a) Descamación", "b) Parches seborreicos en areas circunscriptas", "c) Olor seborreico", "d) Otitis", "e) alopecia"],
      SIGNOS_CLINICOS_GENERALES:
        ["No tiene"],
      EDAD_RAZA_Y_SEXO_DE_PRESENTACION: ["Son todas de etiología hereditaria.Las razas redispuestas son Cocker, Springer, Westy, Bassett, Setter, Doberman, Dachshund, Labrador, Ovejero alemán",
      ],
      DIAGNÓSTICO:
        ["Biopsia de áreas afectadas y áreas aparentemente sanas"],
      DIAGNÓSTICO_DIFERENCIAL:
        ["Con las seborreas secundarias", "Displasia epidérmica", "Adenitis sebácea", "Distrofia folicular", "Sindrome de comedones del Schnauzer"],
      PRONÓSTICO:
        ["Malo en cuanto a la curación definitiva", "Puede ser tratado de por vida llegando a estados de aparente normalidad"],
      TRATAMIENTO:
        ["Champúes antiseborreicos, el principio activo se debe elegir de acuerdo a los signos", "Corticoides por que inhiben la replicación celular", "Acido Retinoico", "Vitamina A", "Ácidos grasos omegas 3 y 6"],
    },

  },
  {
    NAME: "SEBORREA SECUNDARIA",
    DATA: {
      CODIGO: "8ASEC",
      SINÓNIMO:
        ["Seborrea", "Dermatitis seborreica secundaria"],
      ETIOLOGÍA:
        ["Son defectos de la queratinización desencadenados por injurias internas o externas que afectan a la piel, y que por orden de importancia son:", "las hipersensensibilidades", "las endocrinopatías", "factores nutricionales, fundamentalmente falta de ácidos grasos esenciales, grasas, metionina, zinc, vitaminas", "y otros como factores ambientales, falta de corte de pelo, exceso o falta de HÚMEDAd, baños demasiado frecuentes, exceso de cepillado", "excesivo suministro de corticoides", "sarnas", "dermatofitosis", "autoinmunes"],
      AREA_INVOLUCRADA_DERMOGRAMA:
        ["En General: NO tiene una específica, sigue el patrón de la enfermedad que le dió origen", "De Dorsal: en muchos animales con seborrea se observan unos callos seborreicos como áreas redondeadas y simétricas en relación con cada tuberosidad isquiática.O parches seborreicos", "En Ventral: parches seborreicos o seborrea generalizada"],
      PRURITO:
        ["Intenso", "Depende de la etiología, o es leve por contaminación bacteriana o Malassezia"],
      SEBORREA_O_DESCAMACIÓN:
        ["Moderado a Intenso"],
      SIGNOS_CLINICOS_DERMICOS:
        ["van a incluir los de la enfermedad primaria pero En General son:", "a) Descamación y alopecia", "b) Parches seborreicos en áreas circunscriptas", "c) Olor seborreico intenso", "d) Otitis"],
      SIGNOS_CLINICOS_GENERALES:
        ["Dependen de la variada etiología que le da origen"],
      EDAD_RAZA_Y_SEXO_DE_PRESENTACION:
        ["Dependen de la etiología"],
      DIAGNÓSTICO:
        ["Se deben aplicar los propios de cada etiología para poder aproximar o descartar y además", "Rever la historia de la enfermedad", "Conocer el tipo de dieta que recibe", "Análisis de laboratorio bioquímico", "Análisis coproparasitológico", "Análisis hormonales", "Biopsia, raspajes y citología cutánea"],
      DIAGNÓSTICO_DIFERENCIAL:
        ["Con las patologías que llevan al sindrome seborreico"],
      PRONÓSTICO:
        ["Depende de la etiología"],
      TRATAMIENTO:
        ["Curativo depende de la etiología", "Control de la contaminación bacteriana secundaria y por Malassezia", "Paliativo y empíricos: champú antiseborreico, corticoides, vitamina A, ácido retinoico, ácidos grasos omega 3 y 6"],
    },

  },
  {
    NAME: "SEBORREA DEL BORDE DE LAS OREJAS",
    DATA: {
      CODIGO: "8AORE",
      SINÓNIMO:
        ["Dermatosis del borde de las orejas"],
      ETIOLOGÍA:
        ["Seborrea primaria o hereditaria"],
      AREA_INVOLUCRADA_DERMOGRAMA:
        ["De Dorsal: alopecia parcial o total y simétrica en los bordes de las orejas", "De Ventral: igual"],
      PRURITO:
        ["Leve", "Por contaminación bacteriana y / o Malassezia"],
      SEBORREA_O_DESCAMACIÓN:
        ["Leve a moderada"],
      SIGNOS_CLINICOS_DERMICOS: ["a) Descamación y alopecia",
        "b) Fisuras, Ulceras",
        "c) Hemorragias",
        "d) costras",
      ],
      SIGNOS_CLINICOS_GENERALES:
        ["Sacuden la cabeza y golpean las orejas contra los temporales contrarios, dejándolos manchados con sangre", "Rascado de las orejas con las patas"],
      EDAD_RAZA_Y_SEXO_DE_PRESENTACION: [" preferentemente Dachshund, aunque también afecta a otras razas"],
      DIAGNÓSTICO:
        ["Por la apariencia clínica", "Por biopsia"],
      DIAGNÓSTICO_DIFERENCIAL:
        ["Sarna sarcóptica", "Hipotiroidismo", "Vasculitis", "Pénfigo foliáceo", "Picadura de la mosca de la punta de oreja"],
      PRONÓSTICO:
        ["El mismo que el de las seborreas primarias", "La enfermedad puede controlarse pero NO curarse"],
      TRATAMIENTO:
        ["El mismo que el de las seborreas", "Durante las hemorragias, secar con gasa y poner una gota de cianoacrilato", "tacrolimus topico", "corticoides tópicos", "oclacitinib"],
    },

  },
  {
    NAME: "HIPERPLASIA DE LA GLÁNDULA DE LA COLA",
    DATA: {
      CODIGO: "8ACOL",
      SINÓNIMO:
        ["Hiperplasia de la glándula supracaudal"],
      ETIOLOGÍA:
        ["Por seborreas primarias o secundarias", "Por desbalance de hormonas femeninas y masculinas"],
      AREA_INVOLUCRADA_DERMOGRAMA:
        ["De Dorsal: alopecia ovoidea y total, en el l / 3 superior y", "dorsal de la cola"],
      PRURITO:
        ["Ausente, solo presente si hay contaminación bacteriana secundaria o por Malassezia"],
      SEBORREA_O_DESCAMACIÓN:
        ["Leve"],
      SIGNOS_CLINICOS_DERMICOS:
        ["a) Area alopécica circular a ovoide", "b) Descamaciones"],
      SIGNOS_CLINICOS_GENERALES:
        ["Eventualmente cursa con adenoma de glándulas circumanales"],
      EDAD_RAZA_Y_SEXO_DE_PRESENTACION:
        ["Machos adultos"],
      DIAGNÓSTICO:
        ["Su localización es patognomónica"],
      DIAGNÓSTICO_DIFERENCIAL:
        ["Dermatofitosis"],
      PRONÓSTICO:
        ["Estéticamente malo"],
      TRATAMIENTO:
        ["Champúes antiseborreicos, o con peróxido de benzoilo, clorhexidina", "corticoides, antibióticos y fungicidas de uso topico", "Castración"],
    },

  },
  {
    NAME: "HIPERQUERATOSIS NASO - DIGITAL IDIOPÁTICA",
    DATA: {
      CODIGO: "8BNAS",
      SINÓNIMO:
        ["No tiene"],
      ETIOLOGÍA:
        ["ldiopática,"],
      AREA_INVOLUCRADA_DERMOGRAMA:
        ["De Dorsal: hocico y almohadillas plantaras", "De Ventral: almohadillas plantaras"],
      PRURITO:
        ["Ausente"],
      SEBORREA_O_DESCAMACIÓN:
        ["Leve a intensa"],
      SIGNOS_CLINICOS_DERMICOS:
        ["a) Hiperqueratosis y alopecia", "b) Fisuras y erosiones"],
      SIGNOS_CLINICOS_GENERALES:
        ["En los casos avanzados dificultad para caminar"],
      EDAD_RAZA_Y_SEXO_DE_PRESENTACION:
        ["más frecuente en adultos-viejos, hay razas predispuestas como Boxer, Terrier de Boston, Bulldog, Dogo de Burdeos"],
      DIAGNÓSTICO:
        ["Signos clínicos y falta de otras lesiones dérmicas", "Biopsia para realizar los diagnósticos diferenciales"],
      DIAGNÓSTICO_DIFERENCIAL:
        ["Moquillo", "Dermatosis que responden al Zinc", "Pénfigo foliáceo", "Lupus eritematoso sistémico", "Pénfigo eritematoso", "Lupus discoideo", "carencia de zinc"],
      PRONÓSTICO:
        ["Malo, es un defecto permanente"],
      TRATAMIENTO:
        ["Hidratación diaria con agua en forma de pediluvios o compresas en la nariz", "Agentes keratolíticos", "Cremas humectantes", "Quirúrgico, el exceso de queratina", "antibióticos si hay piodermia asociada"],
    },

  },
  {
    NAME: "DERMATOSIS QUE RESPONDE A LA VITAMINA A",
    DATA: {
      CODIGO: "8CVIT",
      SINÓNIMO:
        ["Dermatosis sensible a la vitamina A"],
      ETIOLOGÍA:
        ["desconocida"],
      AREA_INVOLUCRADA_DERMOGRAMA:
        ["De Ventral: en el tórax, abdomen y cuello", "De Dorsal: lateral del tórax"],
      PRURITO:
        ["Leve", "Secundario contaminación bacteriana y / o Malassezia"],
      SEBORREA_O_DESCAMACIÓN:
        ["Intensa"],
      SIGNOS_CLINICOS_DERMICOS:
        ["a) Hiperqueratosis, descamación, alopecia", "b) Olor seborreico", "e) Pelo sin brillo y se enreda fácilmente", "d) Otitis"],
      SIGNOS_CLINICOS_GENERALES:
        ["NOtiene"],
      EDAD_RAZA_Y_SEXO_DE_PRESENTACION: ["Históricamente sólo en la raza Cocker spaniel, aunque también fue descripto en Schnauzer miniatura y Labrador retriever",
      ],
      DIAGNÓSTICO:
        ["Porlas placas hiperqueratóticas", "Porla gran cantidad de comedones", "por la respuesta al tratamiento", "La histopatología es orientadora"],
      DIAGNÓSTICO_DIFERENCIAL:
        ["Seborreas primarias o secundarias", "Dermatosis que responden al zinc", "Callos", "Adenitis sebácea"],
      PRONÓSTICO:
        ["Bueno con tratamiento de por vida"],
      TRATAMIENTO:
        ["100 Unidades por kg de vitamina A, una vez al día", "El tratamiento debe ser de por vida", "Etretinato 1 mg / kg / 24h"],
    },

  },
  {
    NAME: "DERMATOSIS QUE RESPONDE AL ZINC",
    DATA: {
      CODIGO: "8CZ1",
      SINÓNIMO:
        ["Dermatopatía por carencia de ZINC", "Dermatosis sensible al ZINC"],
      ETIOLOGÍA:
        ["Aparente defecto genético para la absorción de ZINC intestinal"],
      AREA_INVOLUCRADA_DERMOGRAMA:
        ["De Dorsal: en el hocico, alrededor de los ojos, codos, almohadillas plantaras", "De Ventral: en el área perilabial, cara interna de los pabellones auriculares, escroto, prepucio, vulva, codos, tarsos y almohadillas plantaras"],
      PRURITO:
        ["Leve", "Por contaminación bacteriana y / o por Malassezia"],
      SEBORREA_O_DESCAMACIÓN:
        ["Intensa"],
      SIGNOS_CLINICOS_DERMICOS:
        ["a) Eritema, alopecia, costras, descamaciones", "b) Exudados serosos", "e) Hiperpigmentación, hiperqueratosis"],
      SIGNOS_CLINICOS_GENERALES:
        ["Disminución de olfato y del gusto", "El estrés y el estro precipitan los signos clínicos dérmicos"],
      EDAD_RAZA_Y_SEXO_DE_PRESENTACION:
        ["En las razas Siberian husky, Alaskan malamutes y Bull terriers", "En adultos jóvenes de 1 a 3 años de edad, aunque puede comenzar en edad adulta de la raza Siberian husky, Alaskan malamute y de cualquier sexo"],
      DIAGNÓSTICO:
        ["Por la raza", "Por la apariencia clínica", "Por biopsia"],
      DIAGNÓSTICO_DIFERENCIAL:
        ["Demodicosis", "Dermatofitosis", "Piodermias", "Pénfigo foliáceo"],
      PRONÓSTICO:
        ["Bueno.La respuesta ocurre dentro de las 6 semanas"],
      TRATAMIENTO:
        ["El tratamiento con sales de ZINC debe ser de por vida", "Sulfato de ZINC,-ZINC-metionina,", "En caso de que no haya mejoría suministrando ZINC por vía oral, se debe suministrar en forma endovenosa una solución de Sulfato de ZINC", "Hidratación de la piel, lavajes con champúes antiseborreicos"],
    },

  },
  {
    NAME: "ALOPECÍA POR MUTACION DE COLOR",
    DATA: {
      CODIGO: "9MUT",
      SINÓNIMO:
        ["Alopecia por dilución de color"],
      ETIOLOGÍA:
        ["Alteración de los genes encargados del color, y se da en razas que no tienen los colores típicos y firmes correspondientes"],
      AREA_INVOLUCRADA_DERMOGRAMA:
        ["En General: alopecia parcial", "De Dorsal: comienza en el dorso, luego afecta a toda la superficie cutánea, respetando la cabeza y lo miembros"],
      PRURITO:
        ["Ausente", "Secundario por piodermia", "y / o por Malassezia de la seborrea"],
      SEBORREA_O_DESCAMACIÓN:
        ["Leve"],
      SIGNOS_CLINICOS_DERMICOS:
        ["a) Fractura de los pelos, alguno de ellos vuelven a crecer", "y esta tendencia decrece con el tiempo", "b) Alopecia parcial", "e) Descamaciones", "d) Foliculitis bacteriana secundaria"],
      SIGNOS_CLINICOS_GENERALES:
        ["NO tiene"],
      EDAD_RAZA_Y_SEXO_DE_PRESENTACION:
        ["En aquellos animales que tienen pelos de un color azul-gris la alopecia comienza a partir de los 5-6 meses de edad", "Cuando el manto tiene otros colores recién se manifiesta después de los 2 años de edad.Afecta pincipalmente a Doberman azules, aunque también en menor porcentaje a marrones.Otras razas con colores diluidos también están afectadas, como Dachshund, Gran danés, Whippet, Galgos italianos, Doberman miniatura, Yorkshire terrier, Chihuahua y muchas otras"],
      DIAGNÓSTICO:
        ["Por el conocimiento de las razas afectadas", "Por el dermograma", "tricografía para observar al microscopio la presencia de macromelanosomas"],
      DIAGNÓSTICO_DIFERENCIAL:
        ["Demodicosis", "Hipotiroidismo", "Otras endocrinopatías", "foliculitis bacteriana"],
      PRONÓSTICO:
        ["Reservado a Malo"],
      TRATAMIENTO:
        ["Verificar que la alimentación sea la correcta para mantener la mejor nutrición de la piel y los pelos.-Evitar prácticas de bañado frecuente", "Control de las infecciones secundarias"],
    },

  },
  {
    NAME: "DERMATITIS ACRAL POR LAMIDO",
    DATA: {
      CODIGO: "9LICK",
      SINÓNIMO:
        ["Granuloma por lamido", "Nodulo prurítico acral"],
      ETIOLOGÍA:
        ["Erosión producida por el lamido, debido a causas:", "Primarias psicogénicas", "Secundarias subyacentes como:", "Atopía", "Alergia a las pulgas", "Dolor articular", "Neuritis", "Infección bacteriana"],
      AREA_INVOLUCRADA_DERMOGRAMA:
        ["En General: lesiones únicas o múltiples", "De Dorsal: en craneal de los carpos o metacarpos", "De Ventral: en craneal de los radios, metatarsos y tibias"],
      PRURITO:
        ["Intenso", "Manifestado por lamido obsesivo-compulsivo"],
      SEBORREA_O_DESCAMACIÓN:
        ["Ausente"],
      SIGNOS_CLINICOS_DERMICOS:
        ["a) Alopecia central por erosión, ulceras", "b) Borde periférico fibrosos y oscuro"],
      SIGNOS_CLINICOS_GENERALES:
        ["NO tiene"],
      EDAD_RAZA_Y_SEXO_DE_PRESENTACION:
        ["Adultos, por lo general de razas grandes, como Doberman, Ovejero alemán,", "Gran Danés, Golden retriever, Setter irlandés, y otros.Se presenta 2 veces más en machos que en hembras"],
      DIAGNÓSTICO:
        ["Por la localización de la lesión", "Por biopsia para histopatología", "Por radiología se debe observar si hay reacción perióstica"],
      DIAGNÓSTICO_DIFERENCIAL: ["Callos de apoyo",
        "Dermatofitosis por microsporum",
        "Granulomas micóticos",
        "Neoplasias"
      ],
      PRONÓSTICO:
        ["Regular a malo"],
      TRATAMIENTO:
        ["Comprensión del propietario sobre el componente síquico de la enfermedad y los cambios ambientales a realizar", "Drogas ansiolíticas: Fenobarbital, Diazepam,", "Drogas tricíclicas anidepresivas: Fluoxetina, Amitriptilina, Imipramina, Clomipramina", "Tratamiento de la enfermedad secundaria que le da origen, considerando a las infecciones"],
    },

  },
  {
    NAME: "OTITIS EXTERNA",
    DATA: {
      CODIGO: "9OTI",
      SINÓNIMO:
        ["Inflamación del conducto auditivo externo y pabellones auriculares"],
      ETIOLOGÍA:
        ["Alergias", "Otodectes", "Demodicosis", "Endocrinopatías", "Enfermedades autoinmunes", "Cuerpos extraños", "Infección primaria", "Neoplasia"],
      AREA_INVOLUCRADA_DERMOGRAMA:
        ["De Ventral: caras internas de los pabellones auriculares y los conductos auditivos externos en sus porciones verticales y horizontales"],
      PRURITO:
        ["Leve a intenso"],
      SEBORREA_O_DESCAMACIÓN:
        ["Leve a intensa"],
      SIGNOS_CLINICOS_DERMICOS:
        ["a) Eritema de la cara interna de pabellón auricular, del conducto vertical y horizontal", "b) Descamaciones", "e) Mal olor", "d) Otitis"],
      SIGNOS_CLINICOS_GENERALES:
        ["Ausentes"],
      EDAD_RAZA_Y_SEXO_DE_PRESENTACION:
        ["las mismas que para cada etiología desencadenante"],
      DIAGNÓSTICO:
        ["Por el conocimiento de las patologías dérmicas que llevan a otitis", "Observación directa, presencia o NO de exudados", "Examen citológico del exudado", "Observación al microscopio de ectoparásitos", "Observación otoscópica", "Cultivo",
        ]
      ,
      DIAGNÓSTICO_DIFERENCIAL: ["El delas etiologías"
      ],
      PRONÓSTICO:
        ["Reservado, depende de la etiología"],
      TRATAMIENTO:
        ["Etiológico, por las causas primarias que la produjeron", "Limpieza de los oídos con champú con peróxido de benzoilo, o clorhexidina", "Tratamiento local a través de numerosas formulaciones comerciales", "Tratamiento general de acuerdo a la etiología", "En caso de recidivas e imposibilidad de control, la resección de la porción vertical del conducto auditivo externo, es paliativo y facilita su limpieza"
        ]
    },
  },
  {
    NAME: "ENFERMEDAD DE LOS SACOS ANALES",
    DATA: {
      CODIGO: "9ANO",
      SINÓNIMO:
        ["Impactación o inflamación de los sacos anales, sacos paraanales o adanales", "abscedación de los sacos anales, sacos paraanales o adanales"],
      ETIOLOGÍA:
        ["Impactación aguda o crónica del material propio", "Infección aguda o recidivante, por bacterias aeróbicas, anaeróbicas, o Malassezia"],
      AREA_INVOLUCRADA_DERMOGRAMA:
        ["De Dorsal: área perianal"],
      PRURITO:
        ["Leve"],
      SEBORREA_O_DESCAMACIÓN:
        ["Ausentes"],
      SIGNOS_CLINICOS_DERMICOS:
        ["a) Edema y alopecia", "b) prurito – dolor manifestado por sentarse y arrastrar el ano contra el piso o por lamido de la región", "c) Abscedación, fístulas", "Responsable de algunas de las dermatitis erosivas húmedas agudas de la región"],
      SIGNOS_CLINICOS_GENERALES:
        ["no hay"],
      EDAD_RAZA_Y_SEXO_DE_PRESENTACION:
        ["Es más frecuente en animales adultos, de razas de tamaño pequeño, sin predisposición de sexo"],
      DIAGNÓSTICO:
        ["Por el relato del propietario", "Por palpación externa", "Por palpación y presión digital, con un dedo dentro del recto y otro afuera", "Por observación del material extraído", "Por observación de la o las fistulas", "por signo de lamido o frotar el ano contra el piso"],
      DIAGNÓSTICO_DIFERENCIAL:
        ["Tumores de los sacos anales", "Hiperplasias glandulares", "Tumores de las glándulas perianales", "Fístulas perianales incipientes"],
      PRONÓSTICO:
        ["Bueno"],
      TRATAMIENTO:
        ["Segun el proceso presente:", "PROCESO COLOR CONSISTENCIA OLOR", "l) Normal Pajizo Liquida Propio", "2) Impactación Arcilloso Pastosa Propio", "3) Impactación recidivante Oscuro Pastoso duro Propio", "4) lnfeccion aguda(absceso)AmarilloPurulento Fetido", "5) Infección crónica Verdoso-rojoPastoso blando Fetido", "1) extrusión manual", "2) Impactación: extrusión manual desde afuera o con el índice en el recto y pulgar afuera", "3) Impactación recidivante: extrusión manual que debe ser repetida varias veces en la semana o tratada como una infección crónica", "4) Infección aguda con abscedación: considerar cauterizar desde el orificio del absceso con varias aplicaciones semanales con Acido fénico puro", "5) Infección crónica: Extrusión del contenido del saco.Lavar con solución de Ringer.Antibióticos por vía sistémica.Cauterización desde su conducto, con Acido fénico, día por medio durante una semana"],
    },

  },
  {
    NAME: "FÍSTULAS PERIANALES",
    DATA: {
      CODIGO: "9FIS",
      SINÓNIMO:
        ["No tiene"],
      ETIOLOGÍA:
        ["la causa por la que se produce todavía no ha sido determinada", "AREAINVOLUCRADA:", "De Dorsal: área perianal"],
      PRURITO:
        ["Leve, más bien es doloroso"],
      SEBORREA_O_DESCAMACIÓN:
        ["Ausente"],
      SIGNOS_CLINICOS_DERMICOS:
        ["Líquido seroso o serosanguinolento o seropurulento", "Alopecia", "Fístulas", "Ulceras", "cicatrices"],
      SIGNOS_CLINICOS_GENERALES:
        ["Dolor local", "Lamido constante"],
      EDAD_RAZA_Y_SEXO_DE_PRESENTACION:
        ["En adultos generalmente machos, más frecuentemente en la raza Ovejero alemán y sus cruzas.aunque también en Gran danés, Setter irlandés, y otras"],
      DIAGNÓSTICO:
        ["Por la localización y el aspecto de la lesión", "Biopsia para histopatología", "Cultivo y antibiograma",
        ]
      ,
      DIAGNÓSTICO_DIFERENCIAL: ["Enfermedades autoinmunes",
        "Neoplasia",
        "Traumas",
        "Fístulas de los sacos anales",
        "Tumor de gandulas circumanales"
      ],
      PRONÓSTICO:
        ["Reservado a grave"],
      TRATAMIENTO:
        ["Quirúrgico, pero al ignorarse la causa, es difícil evaluar los resultados.Puede intentarse criocirugía", "Corticoides sistémicos", "Ciclosporina sistémica", "tracrolimus local", "corticoides local"],
    },

  },
  {
    NAME: "CELULITIS JUVENIL",
    DATA: {
      CODIGO: "4JUV",
      SINÓNIMO:
        ["'Piodemia'juvenil", "Dermatitis granulomatosa estéril"],
      ETIOLOGÍA:
        ["Desconocida, probablemente se trate de una disfunción inmunológica", "AREA INVOLUCRADA-DERMOGPAMA:", "De Dorsal: hocico, nariz, labios superiores y parpados", "De Ventral: alrededor de los labios y pabellones auriculares"],
      PRURITO:
        ["Ausente"],
      SEBORREA_O_DESCAMACIÓN:
        ["Ausente"],
      SIGNOS_CLINICOS_DERMICOS:
        ["a) Edema y alopecia", "b) Pápulas y pústulas", "e) Fístulas, supuración hemopurulenta", "d) Costras amarillentas"],
      SIGNOS_CLINICOS_GENERALES:
        ["Linfoadenopatía", "Dolor"],
      EDAD_RAZA_Y_SEXO_DE_PRESENTACION:
        ["Cachorros de 3 semanas a 4 meses de edad, de cualquier raza aunque más frecuente en Dachshund y Golden retriever"],
      DIAGNÓSTICO:
        ["Porla localización de la lesión", "Porlos signos clínicos dérmicos", "Porla edad de los animales", "Cultivo y antibiograma", "Biopsia y diagnóstico histopatológico", "Examen citológico del exudado"],
      DIAGNÓSTICO_DIFERENCIAL:
        ["Forunculosis nasal", "Demodicosis", "Dermatosis que responde al Zinc"],
      PRONÓSTICO:
        ["Bueno, evoluciona favorablemente dentro de las 3 semanas"],
      TRATAMIENTO:
        ["Dosis elevadas de corticoides", "Soluciones astringente de Acetato de aluminio o Sulfato de magnesio", "Antibióticos, sí hay contaminación secundaria"],
    },
  },
  {
    NAME: "ALOPECÍA O CALVICIE PATRÓN",
    DATA: {
      CODIGO: "NO",
      SINÓNIMO:
        ["Calvicie Patron"],
      ETIOLOGÍA:
        ["es un síndrome que tiene un componente genético que se caracteriza por alopecia no inflamatoria y apruriginosa de etiología desconocida"],
      AREA_INVOLUCRADA_DERMOGRAMA:
        ["En General: alopecia parcial", "De Dorsal: área convexa de pabellones auriculares, área periauricular, posterior de muslos, periné", "De Ventral: cuello, pecho, abdomen"],
      PRURITO:
        ["Ausente", "Secundario por piodermia", "y / o por Malassezia de la seborrea"],
      SEBORREA_O_DESCAMACIÓN:
        ["Ausente"],
      SIGNOS_CLINICOS_DERMICOS:
        ["a) alopecia parcial", "b) pelo miniaturizado"],
      SIGNOS_CLINICOS_GENERALES:
        ["NO tiene"],
      EDAD_RAZA_Y_SEXO_DE_PRESENTACION:
        ["tiene predilección por razas de mando corto como Terrier de Boston, Boxer, Chihuhua, Dachshund, Greyhoun italiano, Poinscher miniatura, Weimaraner y Whippet.Comienza entre los 6 meses y el año de edad y no hay predilección por sexo"],
      DIAGNÓSTICO:
        ["Por el conocimiento de las razas afectadas", "Por el dermograma", "tricografia para observar los pelos miniaturizados"],
      DIAGNÓSTICO_DIFERENCIAL:
        ["Demodicosis", "Hipotiroidismo", "Otras endocrinopatías"],
      PRONÓSTICO:
        ["Bueno, es solo problema estético"],
      TRATAMIENTO:
        ["Verificar que la alimentación sea la correcta para mantener la mejor nutrición de la piel y los pelos.-Evitar prácticas de bañado frecuente", "Control de las infecciones secundarias", "Melatonina"],
    },

  },
  {
    NAME: "FORUNCULOSIS EOSINOFÍLICA",
    DATA: {
      CODIGO: "1BNAS",
      SINÓNIMO:
        ["Forunculosis por picadura de insectos"],
      ETIOLOGÍA:
        ["picadura de insectos como mosquitos"],
      AREA_INVOLUCRADA_DERMOGRAMA:
        ["De Dorsal: región lateral de la nariz, planum nasal, alrededor de los ojos y borde interno de pabellones auriculares", "De Ventral: en el interior de los pabellones auriculares"],
      PRURITO:
        ["Ausente"],
      SEBORREA_O_DESCAMACIÓN:
        ["Ausente"],
      SIGNOS_CLINICOS_DERMICOS:
        ["a) Forunculosis", "b) Edema y exudado sero-hemo-purulento"],
      SIGNOS_CLINICOS_GENERALES:
        ["Solamente dolor"],
      EDAD_RAZA_Y_SEXO_DE_PRESENTACION:
        ["No hay predilección por edad y sexo.Es más frecuente en la raza Ovejero Alemán pero cualquier", "raza dolicocéfala está predispuesta"],
      DIAGNÓSTICO:
        ["Porla localización de la lesión", "Porlos signos clínicos dérmicos", "Impronta de las secreciones., y observación citológica", "Cultivo y antibiograma", "Biopsia y diagnóstico histopatológico"],
      DIAGNÓSTICO_DIFERENCIAL:
        ["Dermatitis nasal solar", "Piodermia nasal", "Dermatofitosis con infección secundaria", "Lupus eritematoso discoide", "Pénfigos", "Demodicosis"],
      PRONÓSTICO:
        ["Bueno, evoluciona favorablemente con el tratamiento"],
      TRATAMIENTO:
        ["Corticoides via oral y tópicos"],
    },

  },
  {
    NAME: "VASCULITIS DEL BORDE DE LAS OREJAS",
    DATA: {
      CODIGO: "NO",
      SINÓNIMO:
        ["necrosis trombovascular proliferativa del pabellón auricular"],
      ETIOLOGÍA:
        ["isquemia de origen intederminado.Puede ser desencadenada por vacunas, REACCIÓNes adversas al alimento o simplemente idiopatico"],
      AREA_INVOLUCRADA_DERMOGRAMA:
        ["De Dorsal: borde de pabellones auriculares", "De Ventral: borde de pabellones auriculares"],
      PRURITO:
        ["Ausente"],
      SEBORREA_O_DESCAMACIÓN:
        ["Descamación y costras inicialmente"],
      SIGNOS_CLINICOS_DERMICOS:
        ["a) inflamación y engrosamiento", "b) úlceras y costras", "c) pérdida de tejido(lesiones en sacabocados)", "d) cicatriz"],
      SIGNOS_CLINICOS_GENERALES:
        ["no hay.Sólo dolor localizado"],
      EDAD_RAZA_Y_SEXO_DE_PRESENTACION:
        ["No hay predilección por edad y sexo.Es más frecuente en la raza Dachshound pero puede ocasionalmente afectar otras razas o mestizos"],
      DIAGNÓSTICO:
        ["Porla localización de la lesión", "Porlos signos clínicos dérmicos", "Biopsia y diagnóstico histopatológico"],
      DIAGNÓSTICO_DIFERENCIAL:
        ["No tiene, lesiones y raza muy característicos"],
      PRONÓSTICO:
        ["Bueno, evoluciona favorablemente con el tratamiento adecuado"],
      TRATAMIENTO:
        ["Corticoides via oral y tópicos", "pentoxifilina, doxiciclina / niacinamida y / o la vitamina E", "tacrolimus tópico"],
    }
  }
]

