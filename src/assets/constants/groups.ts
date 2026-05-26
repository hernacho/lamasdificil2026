import flagAlemania from "../images/flags/alemania.png";
import flagArabiaSaudita from "../images/flags/arabia-saudita.png";
import flagArgelia from "../images/flags/argelia.png";
import flagArgentina from "../images/flags/argentina.png";
import flagAustralia from "../images/flags/australia.png";
import flagAustria from "../images/flags/austria.png";
import flagBelgica from "../images/flags/belgica.png";
import flagBosniaHerzegovina from "../images/flags/bosnia-y-herzegovina.png";
import flagBrasil from "../images/flags/brasil.png";
import flagCaboVerde from "../images/flags/cabo-verde.png";
import flagCanada from "../images/flags/canada.png";
import flagColombia from "../images/flags/colombia.png";
import flagCorea from "../images/flags/corea-del-sur.png";
import flagCostaDeMarfil from "../images/flags/costa-de-marfil.png";
import flagCroacia from "../images/flags/croacia.png";
import flagCurazao from "../images/flags/curazao.png";
import flagEcuador from "../images/flags/ecuador.png";
import flagEgipto from "../images/flags/egipto.png";
import flagEscocia from "../images/flags/escocia.png";
import flagEspana from "../images/flags/espana.png";
import flagEstadosUnidos from "../images/flags/estados-unidos.png";
import flagFrancia from "../images/flags/francia.png";
import flagGhana from "../images/flags/ghana.png";
import flagHaiti from "../images/flags/haiti.png";
import flagInglaterra from "../images/flags/inglaterra.png";
import flagIrak from "../images/flags/irak.png";
import flagIran from "../images/flags/iran.png";
import flagJapon from "../images/flags/japon.png";
import flagJordania from "../images/flags/jordania.png";
import flagMarruecos from "../images/flags/marruecos.png";
import flagMexico from "../images/flags/mexico.png";
import flagNoruega from "../images/flags/noruega.png";
import flagNuevaZelanda from "../images/flags/nueva-zelanda.png";
import flagPaisesBajos from "../images/flags/paises-bajos.png";
import flagPanama from "../images/flags/panama.png";
import flagParaguay from "../images/flags/paraguay.png";
import flagPortugal from "../images/flags/portugal.png";
import flagQatar from "../images/flags/qatar.png";
import flagRepublicaCheca from "../images/flags/republica-checa.png";
import flagRepublicaDelCongo from "../images/flags/republica-del-congo.png";
import flagSenegal from "../images/flags/senegal.png";
import flagSudafrica from "../images/flags/sudafrica.png";
import flagSuecia from "../images/flags/suecia.png";
import flagSuiza from "../images/flags/suiza.png";
import flagTunez from "../images/flags/tunez.png";
import flagTurquia from "../images/flags/turquia.png";
import flagUruguay from "../images/flags/uruguay.png";
import flagUzbekistan from "../images/flags/uzbekistan.png";

export const groups = [
  {
    id: " Grupo A",
    teams: [
      {
        name: "México",
        flag: flagMexico,
        history: {
          worldCups: 17,
          bestResult: "Cuartos de final (1970, 1986)",
          memo: "México es uno de los equipos más regulares de CONCACAF. Su 'maldición del quinto partido' se hizo famosa por caer sistemáticamente en octavos de final durante décadas. Sus mejores actuaciones fueron como local en 1970 y 1986, donde llegó a cuartos. En 2026 será anfitrión por tercera vez.",
          legends: [
            "Hugo Sánchez",
            "Cuauhtémoc Blanco",
            "Jorge Campos",
            "Andrés Guardado",
            "Javier Hernández",
          ],
        },
      },
      {
        name: "Sudáfrica",
        flag: flagSudafrica,
        history: {
          worldCups: 3,
          bestResult: "Fase de grupos (1998, 2002, 2010)",
          memo: "Sudáfrica fue el primer país africano en organizar un Mundial, en 2010. En esa edición fue también el primer anfitrión en ser eliminado en fase de grupos. Su participación más recordada fue ese torneo local, con el sonido de las vuvuzelas como símbolo global.",
          legends: [
            "Benni McCarthy",
            "Lucas Radebe",
            "Aaron Mokoena",
            "Shaun Bartlett",
          ],
        },
      },
      {
        name: "Corea del Sur",
        flag: flagCorea,
        history: {
          worldCups: 11,
          bestResult: "Cuarto puesto (2002)",
          memo: "Su actuación en el Mundial 2002, co-organizado con Japón, fue una de las mayores sorpresas de la historia: eliminaron a España, Italia y Alemania para llegar a las semifinales. Muchos de esos partidos estuvieron envueltos en polémicas arbitrales que aún se debaten hoy.",
          legends: [
            "Park Ji-sung",
            "Cha Bum-kun",
            "Hong Myung-bo",
            "Son Heung-min",
          ],
        },
      },
      {
        name: "República Checa",
        flag: flagRepublicaCheca,
        history: {
          worldCups: 9,
          bestResult: "Finalista (1934, 1962) — como Checoslovaquia",
          memo: "Como Checoslovaquia, llegaron a dos finales mundiales. Desde la separación del país en 1993, la República Checa no ha logrado repetir esos resultados, aunque cuenta con generaciones talentosas. Su último Mundial fue en 2006.",
          legends: [
            "Pavel Nedvěd",
            "Petr Čech",
            "Karel Poborský",
            "Antonín Panenka",
          ],
        },
      },
    ],
  },
  {
    id: "Grupo B",
    teams: [
      {
        name: "Canadá",
        flag: flagCanada,
        history: {
          worldCups: 2,
          bestResult: "Fase de grupos (1986, 2022)",
          memo: "Canadá participó por primera vez en 1986 sin ganar ningún partido. Su regreso en Qatar 2022, tras 36 años de ausencia, fue celebrado como un hito histórico. En 2026 serán anfitriones junto a México y EE.UU., lo que genera enormes expectativas en el país.",
          legends: [
            "Alphonso Davies",
            "Jonathan David",
            "Dwayne De Rosario",
            "Paul Stalteri",
          ],
        },
      },
      {
        name: "Bosnia",
        flag: flagBosniaHerzegovina,
        history: {
          worldCups: 1,
          bestResult: "Fase de grupos (2014)",
          memo: "Bosnia-Herzegovina debutó en un Mundial en 2014, con una actuación digna aunque sin avanzar de grupos. Es una selección joven como nación independiente pero con jugadores de alto nivel europeo. Su clasificación a 2026 representa un gran logro para el fútbol bosnio.",
          legends: [
            "Edin Džeko",
            "Miralem Pjanić",
            "Asmir Begović",
            "Zvjezdan Misimović",
          ],
        },
      },
      {
        name: "Qatar",
        flag: flagQatar,
        history: {
          worldCups: 1,
          bestResult: "Fase de grupos (2022)",
          memo: "Qatar organizó y participó por primera vez en un Mundial en 2022, convirtiéndose en el primer anfitrión en ser eliminado en la fase de grupos. Su clasificación fue automática como organizador. Más allá de los resultados deportivos, el torneo estuvo marcado por la polémica sobre las condiciones de organización.",
          legends: ["Almoez Ali", "Akram Afif", "Hassan Al-Haydos"],
        },
      },
      {
        name: "Suiza",
        flag: flagSuiza,
        history: {
          worldCups: 12,
          bestResult: "Cuartos de final (1934, 1938, 1954)",
          memo: "Suiza organizó el Mundial de 1954 y llegó a cuartos de final. En las últimas décadas se consolidó como una selección sólida que suele superar la fase de grupos pero raramente va más allá. En Qatar 2022 eliminó a Serbia con un agónico partido lleno de intensidad balcánica.",
          legends: [
            "Xherdan Shaqiri",
            "Granit Xhaka",
            "Stephan Lichtsteiner",
            "Alexander Frei",
          ],
        },
      },
    ],
  },
  {
    id: "Grupo C",
    teams: [
      {
        name: "Brasil",
        flag: flagBrasil,
        history: {
          worldCups: 22,
          bestResult: "Campeón (1958, 1962, 1970, 1994, 2002)",
          memo: "Es el único país en haber participado en todos los mundiales de la historia. Su mayor trauma fue el 'Maracanazo' de 1950, cuando Uruguay los derrotó ante más de 200.000 personas. En 2014, como anfitrión, sufrió la goleada 7-1 de Alemania en semifinales, conocida como el 'Mineirazo'.",
          legends: [
            "Pelé",
            "Ronaldo",
            "Ronaldinho",
            "Zico",
            "Garrincha",
            "Rivaldo",
          ],
        },
      },
      {
        name: "Marruecos",
        flag: flagMarruecos,
        history: {
          worldCups: 7,
          bestResult: "Cuarto puesto (2022)",
          memo: "En Qatar 2022 protagonizaron la mayor hazaña de la historia del fútbol africano: eliminaron a España, Portugal y Bélgica para llegar a las semifinales, siendo el primer equipo africano y árabe en lograrlo. Su organización defensiva y la pasión de su hinchada fueron el sello del torneo.",
          legends: [
            "Hakim Ziyech",
            "Achraf Hakimi",
            "Youssef En-Nesyri",
            "Noureddine Naybet",
          ],
        },
      },
      {
        name: "Haití",
        flag: flagHaiti,
        history: {
          worldCups: 1,
          bestResult: "Fase de grupos (1974)",
          memo: "Haití participó en su único Mundial en 1974, en Alemania. Fue su única clasificación hasta la fecha. Su regreso a 2026 sería un hecho histórico para el fútbol caribeño, aunque su camino estuvo marcado por enormes dificultades institucionales y sociales en el país.",
          legends: ["Emmanuel Sanon", "Info no disponible"],
        },
      },
      {
        name: "Escocia",
        flag: flagEscocia,
        history: {
          worldCups: 8,
          bestResult: "Fase de grupos",
          memo: "Escocia tiene el dudoso récord de haber participado en 8 Mundiales sin nunca superar la fase de grupos. Su clasificación siempre generó enorme entusiasmo popular, pero el resultado nunca acompañó. Su última participación fue en Francia 1998. En 2026 regresa después de 28 años de ausencia.",
          legends: [
            "Kenny Dalglish",
            "Denis Law",
            "Graeme Souness",
            "Andy Robertson",
          ],
        },
      },
    ],
  },
  {
    id: "Grupo D",
    teams: [
      {
        name: "Estados Unidos",
        flag: flagEstadosUnidos,
        history: {
          worldCups: 11,
          bestResult: "Tercero (1930)",
          memo: "EE.UU. fue semifinalista en el primer Mundial de 1930. En 1950 logró una de las mayores sorpresas de la historia al vencer a Inglaterra 1-0. En 2002 llegó a cuartos de final. En 2026 serán anfitriones junto a México y Canadá, con enormes expectativas de crecimiento del fútbol en el país.",
          legends: [
            "Landon Donovan",
            "Clint Dempsey",
            "Tim Howard",
            "Christian Pulisic",
          ],
        },
      },
      {
        name: "Paraguay",
        flag: flagParaguay,
        history: {
          worldCups: 8,
          bestResult: "Cuartos de final (2010)",
          memo: "Paraguay tuvo su mejor actuación en Sudáfrica 2010, donde llegó a cuartos de final. Su historia mundialista está marcada por figuras icónicas como Chilavert, arquero goleador que era especialista en tiros libres y penales, una rareza absoluta en el fútbol mundial.",
          legends: [
            "José Luis Chilavert",
            "Roque Santa Cruz",
            "Roberto Acuña",
            "Salvador Cabañas",
          ],
        },
      },
      {
        name: "Australia",
        flag: flagAustralia,
        history: {
          worldCups: 6,
          bestResult: "Octavos de final (2006, 2022)",
          memo: "Australia llegó a octavos en 2006, siendo eliminada por Italia con un penal polémico en el último minuto. En Qatar 2022 repitió esa ronda eliminando a Dinamarca antes de caer ante Argentina. Su clasificación siempre es complicada por pertenecer a la confederación asiática.",
          legends: [
            "Tim Cahill",
            "Mark Schwarzer",
            "Harry Kewell",
            "Mile Jedinak",
          ],
        },
      },
      {
        name: "Turquía",
        flag: flagTurquia,
        history: {
          worldCups: 2,
          bestResult: "Tercero (2002)",
          memo: "Turquía tuvo su mejor actuación en el Mundial de Corea-Japón 2002, donde terminó en el tercer puesto. Hakan Şükür marcó el gol más rápido de la historia de los Mundiales: a los 11 segundos ante Corea del Sur en el partido por el tercer puesto. Fue su gran generación dorada.",
          legends: [
            "Hakan Şükür",
            "Rüştü Reçber",
            "Nihat Kahveci",
            "Hakan Çalhanoğlu",
          ],
        },
      },
    ],
  },
  {
    id: "Grupo E",
    teams: [
      {
        name: "Alemania",
        flag: flagAlemania,
        history: {
          worldCups: 20,
          bestResult: "Campeón (1954, 1974, 1990, 2014)",
          memo: "Son el equipo más consistente de la historia mundialista. El 'Milagro de Berna' en 1954 fue su primer título, derrotando a la Hungría considerada invencible. En 2014 se convirtieron en el primer equipo europeo en ganar un mundial en América con el gol de Götze en la final ante Argentina.",
          legends: [
            "Franz Beckenbauer",
            "Gerd Müller",
            "Lothar Matthäus",
            "Miroslav Klose",
            "Oliver Kahn",
          ],
        },
      },
      {
        name: "Curazao",
        flag: flagCurazao,
        history: {
          worldCups: 0,
          bestResult: "Info no disponible",
          memo: "Curazao es una isla del Caribe que compite de forma independiente desde 2010. Nunca antes había clasificado a un Mundial. Su selección está formada en gran parte por jugadores con raíces en la isla que juegan en ligas europeas, principalmente en los Países Bajos.",
          legends: ["Leandro Bacuna", "Cuco Martina", "Jurickson Profar"],
        },
      },
      {
        name: "Costa de Marfil",
        flag: flagCostaDeMarfil,
        history: {
          worldCups: 3,
          bestResult: "Fase de grupos (2006, 2010, 2014)",
          memo: "Costa de Marfil tuvo una generación brillante en los 2000 con Drogba como gran figura, pero la mala suerte del sorteo los puso siempre en grupos muy difíciles. En 2006 compartió grupo con Argentina, Holanda y Serbia. Nunca pudo superar la fase de grupos pese a su enorme talento.",
          legends: [
            "Didier Drogba",
            "Yaya Touré",
            "Kolo Touré",
            "Didier Zokora",
          ],
        },
      },
      {
        name: "Ecuador",
        flag: flagEcuador,
        history: {
          worldCups: 4,
          bestResult: "Octavos de final (2006)",
          memo: "Ecuador debutó en los Mundiales en 2002 y en 2006 llegó a octavos de final, siendo eliminado por Inglaterra. En Qatar 2022 abrió el torneo marcando dos goles en el partido inaugural ante el anfitrión Qatar, aunque luego fue eliminado en fase de grupos.",
          legends: [
            "Agustín Delgado",
            "Iván Hurtado",
            "Enner Valencia",
            "Antonio Valencia",
          ],
        },
      },
    ],
  },
  {
    id: "Grupo F",
    teams: [
      {
        name: "Países Bajos",
        flag: flagPaisesBajos,
        history: {
          worldCups: 11,
          bestResult: "Finalista (1974, 1978, 2010)",
          memo: "Holanda es uno de los grandes malditos del fútbol mundial: tres finales perdidas sin poder ganar el título. La generación de 1974 con Johan Cruyff y el 'fútbol total' es considerada una de las mejores de la historia pese a no haber sido campeona. En 2010 perdieron la final ante España.",
          legends: [
            "Johan Cruyff",
            "Marco van Basten",
            "Ruud Gullit",
            "Frank Rijkaard",
            "Virgil van Dijk",
          ],
        },
      },
      {
        name: "Japón",
        flag: flagJapon,
        history: {
          worldCups: 7,
          bestResult: "Octavos de final (2002, 2010, 2018, 2022)",
          memo: "Japón es la potencia asiática más regular en los Mundiales. En Qatar 2022 protagonizó una de las mayores sorpresas eliminando a Alemania y España en la fase de grupos. Su eliminación en octavos ante Croacia por penales fue muy dolorosa para su afición.",
          legends: [
            "Hidetoshi Nakata",
            "Shunsuke Nakamura",
            "Keisuke Honda",
            "Shinji Kagawa",
          ],
        },
      },
      {
        name: "Suecia",
        flag: flagSuecia,
        history: {
          worldCups: 12,
          bestResult: "Segundo puesto (1958)",
          memo: "Suecia fue finalista en el Mundial que organizó en 1958, perdiendo ante el Brasil de un jovencísimo Pelé de 17 años. Tiene una historia mundialista sólida y consistente. En 2018 sorprendió eliminando a Italia en el repechaje y llegó a cuartos de final en Rusia.",
          legends: [
            "Gunnar Nordahl",
            "Henrik Larsson",
            "Zlatan Ibrahimović",
            "Sven-Göran Eriksson",
          ],
        },
      },
      {
        name: "Túnez",
        flag: flagTunez,
        history: {
          worldCups: 6,
          bestResult: "Fase de grupos",
          memo: "Túnez fue el primer equipo africano en ganar un partido mundialista, venciendo a México en 1978. Sin embargo, nunca logró superar la fase de grupos en ninguna de sus participaciones. En Qatar 2022 eliminó a Francia (ya clasificada) en la última fecha pero igual quedó eliminado.",
          legends: [
            "Zoubeir Baya",
            "Hassen Gabsi",
            "Wahbi Khazri",
            "Youssef Msakni",
          ],
        },
      },
    ],
  },
  {
    id: "Grupo G",
    teams: [
      {
        name: "Bélgica",
        flag: flagBelgica,
        history: {
          worldCups: 14,
          bestResult: "Tercero (2018)",
          memo: "La 'generación dorada' belga con Hazard, De Bruyne y Lukaku llegó al tercer puesto en Rusia 2018. Fue considerada durante años la mejor selección del mundo según el ranking FIFA sin haber ganado un título importante. Su eliminación en Qatar 2022 en grupos fue considerada un fracaso rotundo.",
          legends: [
            "Eden Hazard",
            "Kevin De Bruyne",
            "Romelu Lukaku",
            "Thibaut Courtois",
            "Jan Ceulemans",
          ],
        },
      },
      {
        name: "Egipto",
        flag: flagEgipto,
        history: {
          worldCups: 3,
          bestResult: "Fase de grupos (1934, 1990, 2018)",
          memo: "Egipto fue el primer país africano en participar en un Mundial, en 1934. Su regreso en 2018 fue muy esperado tras 28 años de ausencia, pero se vio frustrado parcialmente por una lesión de Salah previa al torneo. Tiene una rica historia futbolística en el continente africano.",
          legends: [
            "Mohamed Salah",
            "Hossam Hassan",
            "Ahmed Hassan",
            "Essam El-Hadary",
          ],
        },
      },
      {
        name: "Irán",
        flag: flagIran,
        history: {
          worldCups: 6,
          bestResult: "Fase de grupos",
          memo: "Irán es la selección asiática más veces clasificada a un Mundial. En Qatar 2022 tuvo un torneo agitado también por el contexto político interno del país, con jugadores que no cantaron el himno en señal de protesta. Eliminó a Gales pero cayó ante EE.UU. y fue eliminado.",
          legends: [
            "Ali Daei",
            "Javad Nekounam",
            "Mehdi Taremi",
            "Sardar Azmoun",
          ],
        },
      },
      {
        name: "Nueva Zelanda",
        flag: flagNuevaZelanda,
        history: {
          worldCups: 2,
          bestResult: "Fase de grupos (1982, 2010)",
          memo: "Nueva Zelanda participó en dos Mundiales. En 2010 fue el único equipo invicto del torneo — empató los tres partidos de la fase de grupos — aunque igual quedó eliminado. Su clasificación siempre depende de la ruta de Oceanía, la confederación más débil del mundo.",
          legends: [
            "Ryan Nelsen",
            "Shane Smeltz",
            "Winston Reid",
            "Chris Wood",
          ],
        },
      },
    ],
  },
  {
    id: "Grupo H",
    teams: [
      {
        name: "España",
        flag: flagEspana,
        history: {
          worldCups: 16,
          bestResult: "Campeón (2010)",
          memo: "España ganó su único Mundial en Sudáfrica 2010 con el recordado gol de Iniesta en la final ante Holanda. Ese equipo dominó el fútbol mundial durante casi una década con su estilo de 'tiki-taka'. Antes de ese título, España era conocida por sus frustrantes eliminaciones pese a tener grandes equipos.",
          legends: [
            "Andrés Iniesta",
            "Xavi Hernández",
            "David Villa",
            "Iker Casillas",
            "Fernando Torres",
          ],
        },
      },
      {
        name: "Cabo Verde",
        flag: flagCaboVerde,
        history: {
          worldCups: 0,
          bestResult: "Info no disponible",
          memo: "Cabo Verde es un archipiélago africano que nunca antes había clasificado a un Mundial. Su selección ha sorprendido en la Copa Africana de Naciones en los últimos años. Clasificar a 2026 sería el mayor logro de la historia del fútbol caboverdiano.",
          legends: ["Ryan Mendes", "Info no disponible"],
        },
      },
      {
        name: "Arabia Saudita",
        flag: flagArabiaSaudita,
        history: {
          worldCups: 6,
          bestResult: "Octavos de final (1994)",
          memo: "Arabia Saudita tuvo su mejor actuación en 1994, donde llegó a octavos y contó con el golazo olímpico de Saeed Al-Owairan ante Bélgica, considerado uno de los mejores goles de la historia mundialista. En Qatar 2022 protagonizó la mayor sorpresa del torneo al vencer a Argentina en la fase de grupos.",
          legends: [
            "Sami Al-Jaber",
            "Yasser Al-Qahtani",
            "Saeed Al-Owairan",
            "Salem Al-Dawsari",
          ],
        },
      },
      {
        name: "Uruguay",
        flag: flagUruguay,
        history: {
          worldCups: 14,
          bestResult: "Campeón (1930, 1950)",
          memo: "Uruguay ganó el primer Mundial de la historia en 1930, organizándolo en su propio país. En 1950 logró el 'Maracanazo', derrotando a Brasil en el Maracaná ante 200.000 personas en lo que se considera la mayor sorpresa de la historia. Es el país con más títulos mundialistas en relación a su población.",
          legends: [
            "Obdulio Varela",
            "Alcides Ghiggia",
            "Diego Forlán",
            "Luis Suárez",
            "Diego Godín",
          ],
        },
      },
    ],
  },
  {
    id: "Grupo I",
    teams: [
      {
        name: "Francia",
        flag: flagFrancia,
        history: {
          worldCups: 16,
          bestResult: "Campeón (1998, 2018)",
          memo: "Francia ganó su primer Mundial como local en 1998 con el histórico 3-0 ante Brasil en la final, con Zidane como figura. En 2018 repitió el título en Rusia. En Qatar 2022 llegó a la final pero perdió ante Argentina en un partidazo que terminó 3-3 y se definió por penales.",
          legends: [
            "Zinedine Zidane",
            "Michel Platini",
            "Thierry Henry",
            "Kylian Mbappé",
            "Marcel Desailly",
          ],
        },
      },
      {
        name: "Senegal",
        flag: flagSenegal,
        history: {
          worldCups: 3,
          bestResult: "Cuartos de final (2002)",
          memo: "Senegal debutó en los Mundiales en 2002 con una actuación histórica: eliminó al campeón defensor Francia en la primera ronda y llegó a cuartos de final. En Qatar 2022 llegó a octavos tras superar la fase de grupos. Es el referente del fútbol africano junto a Marruecos y Nigeria.",
          legends: [
            "El-Hadji Diouf",
            "Henri Camara",
            "Sadio Mané",
            "Kalidou Koulibaly",
          ],
        },
      },
      {
        name: "Irak",
        flag: flagIrak,
        history: {
          worldCups: 1,
          bestResult: "Fase de grupos (1986)",
          memo: "Irak participó en su único Mundial en México 1986, donde perdió los tres partidos de la fase de grupos. Su clasificación a 2026 sería un regreso histórico después de 40 años de ausencia. El fútbol iraquí ha tenido enormes dificultades por el contexto político y social del país.",
          legends: ["Ahmad Radhi", "Info no disponible"],
        },
      },
      {
        name: "Noruega",
        flag: flagNoruega,
        history: {
          worldCups: 3,
          bestResult: "Octavos de final (1938, 1994, 1998)",
          memo: "Noruega tiene una historia mundialista modesta pero memorable: en Francia 1998 eliminó a Brasil en la fase de grupos con un gol agónico de Rekdal. Su última participación fue ese mismo año. En 2026 regresa con Haaland como gran estrella, generando enormes expectativas.",
          legends: [
            "Ole Gunnar Solskjær",
            "Tore André Flo",
            "Øyvind Leonhardsen",
            "Erling Haaland",
          ],
        },
      },
    ],
  },
  {
    id: "Grupo J",
    teams: [
      {
        name: "Argentina",
        flag: flagArgentina,
        history: {
          worldCups: 18,
          bestResult: "Campeón (1978, 1986, 2022)",
          memo: "Su primer título llegó de local en 1978. El segundo fue protagonizado por Maradona, quien marcó en el mismo partido el 'Gol del Siglo' y la 'Mano de Dios' ante Inglaterra. El tercero llegó en Qatar 2022 con Messi como figura, cerrando una de las historias más emotivas del deporte mundial.",
          legends: [
            "Diego Maradona",
            "Lionel Messi",
            "Mario Kempes",
            "Gabriel Batistuta",
            "Javier Zanetti",
          ],
        },
      },
      {
        name: "Argelia",
        flag: flagArgelia,
        history: {
          worldCups: 4,
          bestResult: "Octavos de final (2014)",
          memo: "Argelia protagonizó una de las mayores sorpresas de España 1982 al vencer a Alemania Occidental, aunque fue eliminada por el escandaloso pacto entre Alemania y Austria en el último partido del grupo. En Brasil 2014 llegó a octavos de final, siendo eliminada por Alemania en el alargue.",
          legends: [
            "Rabah Madjer",
            "Lakhdar Belloumi",
            "Riyad Mahrez",
            "Islam Slimani",
          ],
        },
      },
      {
        name: "Austria",
        flag: flagAustria,
        history: {
          worldCups: 7,
          bestResult: "Tercero (1954)",
          memo: "Austria tuvo su época dorada en los años 50, llegando al tercer puesto en 1954. En 1982 fue protagonista del llamado 'Partido de la Vergüenza' junto a Alemania, donde ambos equipos jugaron un partido sin ningún ánimo competitivo para clasificar a costa de Argelia. Su último Mundial fue en 1998.",
          legends: [
            "Ernst Ocwirk",
            "Hans Krankl",
            "Toni Polster",
            "David Alaba",
          ],
        },
      },
      {
        name: "Jordania",
        flag: flagJordania,
        history: {
          worldCups: 0,
          bestResult: "Info no disponible",
          memo: "Jordania nunca antes había clasificado a un Mundial. Su primera participación en 2026 sería un hito histórico para el fútbol jordano y árabe en general. En los últimos años han dado pasos importantes en la clasificación asiática.",
          legends: ["Info no disponible"],
        },
      },
    ],
  },
  {
    id: "Grupo K",
    teams: [
      {
        name: "Portugal",
        flag: flagPortugal,
        history: {
          worldCups: 9,
          bestResult: "Tercero (1966)",
          memo: "Portugal tuvo su mejor generación en 1966 con Eusébio como máximo goleador del torneo. Décadas después, con Figo, Rui Costa y luego Cristiano Ronaldo, volvió a ser potencia mundial. En Qatar 2022 llegó a cuartos antes de caer ante Marruecos. Ronaldo es el máximo goleador de la historia del fútbol.",
          legends: [
            "Eusébio",
            "Luís Figo",
            "Rui Costa",
            "Cristiano Ronaldo",
            "Nuno Gomes",
          ],
        },
      },
      {
        name: "República del Congo",
        flag: flagRepublicaDelCongo,
        history: {
          worldCups: 1,
          bestResult: "Fase de grupos (1974) — como Zaire",
          memo: "Como Zaire, participaron en el Mundial de 1974 en Alemania, siendo el primer equipo del África Subsahariana en clasificar. Tristemente son recordados por el incidente en que un jugador pateó el balón durante un tiro libre rival. Desde entonces no volvieron a clasificar hasta 2026.",
          legends: ["Info no disponible"],
        },
      },
      {
        name: "Uzbekistán",
        flag: flagUzbekistan,
        history: {
          worldCups: 0,
          bestResult: "Info no disponible",
          memo: "Uzbekistán nunca antes había clasificado a un Mundial. Su selección ha crecido notablemente en los últimos años dentro de la confederación asiática. En 2026 debutarán en la máxima competición del fútbol mundial.",
          legends: ["Info no disponible"],
        },
      },
      {
        name: "Colombia",
        flag: flagColombia,
        history: {
          worldCups: 6,
          bestResult: "Cuartos de final (2014)",
          memo: "Colombia llegó a cuartos en Brasil 2014 con James Rodríguez como figura, quien ganó el Botín de Oro como máximo goleador. Ese torneo fue un antes y un después para el fútbol colombiano. En los 90 tuvo una generación brillante marcada por la tragedia del asesinato de Andrés Escobar tras el Mundial 1994.",
          legends: [
            "Carlos Valderrama",
            "Freddy Rincón",
            "James Rodríguez",
            "Falcao García",
            "René Higuita",
          ],
        },
      },
    ],
  },
  {
    id: "Grupo L",
    teams: [
      {
        name: "Inglaterra",
        flag: flagInglaterra,
        history: {
          worldCups: 16,
          bestResult: "Campeón (1966)",
          memo: "Inglaterra ganó su único Mundial en casa en 1966, ante Alemania Occidental en Wembley. Desde entonces carga con la presión de una afición que espera repetir ese logro. El término 'It's coming home' se popularizó en los 90 y resurgió con fuerza en 2018 y 2022, cuando llegaron a semifinales.",
          legends: [
            "Bobby Moore",
            "Bobby Charlton",
            "Gary Lineker",
            "David Beckham",
            "Harry Kane",
          ],
        },
      },
      {
        name: "Croacia",
        flag: flagCroacia,
        history: {
          worldCups: 6,
          bestResult: "Tercero (1998), Finalista (2018)",
          memo: "Croacia tuvo un debut mundialista brillante en 1998 con el tercer puesto. En Rusia 2018 llegó a la final, perdiendo ante Francia 4-2. En Qatar 2022 volvió a llegar a semifinales. Con Luka Modrić como cerebro del equipo, es una de las selecciones más sobresalientes en relación a su pequeña población.",
          legends: [
            "Davor Šuker",
            "Zvonimir Boban",
            "Luka Modrić",
            "Ivan Rakitić",
            "Mario Mandžukić",
          ],
        },
      },
      {
        name: "Ghana",
        flag: flagGhana,
        history: {
          worldCups: 4,
          bestResult: "Cuartos de final (2010)",
          memo: "Ghana estuvo a un paso de ser el primer equipo africano en llegar a semifinales en 2010, pero Luis Suárez detuvo un gol con la mano en el último segundo y Asamoah Gyan falló el penal. Es uno de los momentos más dolorosos y polémicos de la historia mundialista reciente.",
          legends: [
            "Abedi Pelé",
            "Michael Essien",
            "Asamoah Gyan",
            "Kevin-Prince Boateng",
          ],
        },
      },
      {
        name: "Panamá",
        flag: flagPanama,
        history: {
          worldCups: 1,
          bestResult: "Fase de grupos (2018)",
          memo: "Panamá debutó en un Mundial en Rusia 2018, siendo su primera y única clasificación hasta la fecha. Aunque perdió los tres partidos de la fase de grupos, el gol de Felipe Baloy ante Inglaterra fue festejado como si fuera un título. En 2026 buscarán mejorar esa actuación.",
          legends: [
            "Román Torres",
            "Jaime Penedo",
            "Felipe Baloy",
            "Blas Pérez",
          ],
        },
      },
    ],
  },
];
