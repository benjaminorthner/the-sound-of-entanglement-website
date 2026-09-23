/**
 * German alt texts and captions for photos, keyed by the image file's base
 * name (without extension), e.g. 'haze-over-case'. Photo.astro looks them up
 * on /de/ pages; anything missing falls back to the English text.
 * Credits are names and stay as they are.
 *
 * One file, one alt text: where a photo appears in several places, the German
 * text describes the picture so that it fits all of them.
 */
export const photosDe: Record<string, { alt?: string; caption?: string }> = {
  // ── BruQner, Mariendom Linz, September 2024 ─────────────────────────────
  'haze-over-case': { alt: 'Wolken aus projiziertem Licht schweben im dunklen Kirchenschiff über der leuchtenden Glasvitrine des Experiments; rundherum sitzt das Publikum am Boden.' },
  'inverted-cone': { alt: 'Ein umgekehrter Lichtkegel senkt sich durch den Dunst auf das Experiment herab.' },
  'cloud-over-crowd': { alt: 'Eine riesige weiße Lichtwolke zieht schräg über die Silhouetten des Publikums.' },
  'starburst-from-gallery': { alt: 'Von der Empore aus gesehen: Lichtstrahlen fächern sich über dem vollen Kirchenschiff auf.' },
  'purple-cone': { alt: 'Ein violetter Lichtkegel im Dunst, dahinter schwach das Kruzifix.' },
  'case-foreground': { alt: 'Das Experiment in seiner beleuchteten Glasvitrine, dahinter Benjamin Orthner am Laptop.' },
  'torn-cloud': { alt: 'Eine zerrissene Wolke aus projiziertem Licht über dem Publikum.' },
  'twin-cones': { alt: 'Zwei Lichtkegel fächern sich von der Vierung Richtung Altar auf.' },
  'laser-fan': { alt: 'Ein Fächer aus violetten und gelben Strahlen über dem Kruzifix am Altar.' },
  'top-down-crowd': { alt: 'Von oben: die dunkle Menge rund um die leuchtende Vitrine.' },
  'vault-top-down': { alt: 'Blick vom Gewölbe hinunter auf die Projektion.' },
  'optics-closeup': { alt: 'In der Vitrine: rote Halterungen mit der Polarisationsoptik.' },
  'light-shaft-case': { alt: 'Ein Lichtschacht schneidet hinter der Vitrine durch die Dunkelheit.' },
  'beam-fan': { alt: 'Ein Fächer aus Strahlen, die in einem Punkt zusammenlaufen, davor die Silhouette des Operators.' },
  'case-cross-haze': { alt: 'Das Experiment leuchtet in seiner Glasvitrine im Dunst der Vierung, dahinter Benjamin Orthner und das Altarkreuz, rundherum das Publikum am Boden.' },
  'optics-macro-2': { alt: 'Nahaufnahme in der beleuchteten Vitrine: Spiegel, rote Drehhalterungen und Kabel unter dem LED-Streifen.' },
  'wide-nave': { alt: 'Das Kirchenschiff in voller Länge füllt sich vor Beginn, hinten die Rudigier-Orgel.' },
  'lecture-before-3000': { alt: 'Der Vortrag vor der Uraufführung: vorne die Vortragenden, dahinter mehr als 3.000 Menschen auf dem Boden des Mariendoms, ganz hinten die Orgel.' },
  'overhead-crowd-1': { alt: 'Vom Gewölbe aus: Die Menge füllt das Kirchenschiff rund um das beleuchtete Experiment.' },
  'overhead-crowd-2': { alt: 'Hoch aus dem Gewölbe gesehen: Tausende Menschen sitzen auf dem Boden des Doms rund um das beleuchtete Experiment und die Bühne.' },
  'overhead-crowd-3': { alt: 'Von der Empore aus: der ganze Kirchenboden voller Menschen.' },
  'overhead-nave': { alt: 'Steil von oben zwischen den gotischen Säulen: das volle Kirchenschiff.' },
  'fisheye-cathedral': { alt: 'Der ganze Dom von oben, vor der Aufführung dicht gefüllt.' },
  candles: { alt: 'Besucher:innen zünden vor der Aufführung Kerzen an einem Kerzenständer an.' },
  'mariendom-exterior': { alt: 'Der Mariendom am Abend der Ars-Electronica-Eröffnung, die Fassade violett angestrahlt, davor eine Menschenmenge.' },
  'organist-console': { alt: 'Ein Organist von hinten am beleuchteten Spieltisch der Domorgel.' },
  'organ-rudigier-console': { alt: 'Gerhard Raab am Spieltisch der Rudigier-Orgel; über den Manualen ein Bildschirm, auf dem die Noten ankommen.' },
  'organist-kreuzhuber': { alt: 'Wolfgang Kreuzhuber mit Kopfhörern an der Chororgel, seitlich von der Pultlampe beleuchtet.' },
  'organist-portrait-lit': { alt: 'Wolfgang Kreuzhuber blickt vom beleuchteten Spieltisch in die Kamera.' },
  'organist-registers': { alt: 'Von hinten gesehen: der Organist an der Rudigier-Orgel zwischen den Registerzügen, daneben Laptop und Noten.' },
  'visitors-at-case': { alt: 'Zwei Besucher:innen beugen sich über die beleuchtete Glasvitrine, um die Optik darin anzusehen.' },
  'case-and-crowd': { alt: 'Nach der Aufführung drängen sich die Menschen im vollen Kirchenschiff um die beleuchtete Vitrine.' },
  'bruqner-motifs': { alt: 'Ein Satz aus acht Motiven, vier für Alices Orgel und vier für Bobs, beschriftet von A1+ bis B2−.' },
  'documentary-thumbnail': { alt: 'Titelbild der Dokumentation: The Sound of Entanglement über der Optik des Experiments mit den beiden roten Drehhalterungen.' },

  // ── Preview and early sessions, Vienna 2024 ─────────────────────────────
  'haze-sheet': { alt: 'Eine Fläche aus projiziertem Licht im Dunst über den Silhouetten des Publikums.' },
  'blue-cloud': { alt: 'Eine blaue Wolke aus projiziertem Licht über dem Publikum.' },
  'blue-cone-rehearsal': { alt: 'Ein blauer Lichtkegel in einem Probensaal, 21. Mai 2024.' },
  'optics-bench-piano': { alt: 'Die Optik mit roten Halterungen auf einem Tisch, dahinter ein Klavier, 21. Mai 2024.' },
  'pianist-and-bench': { alt: 'Ein Pianist neben dem Experiment, 21. Mai 2024.' },
  'pump-laser-crystal': { alt: 'Ein violetter Laserstrahl verlässt das Lasermodul und läuft durch die Optik auf einem dunklen Breadboard.' },

  // ── Vienna Ball of Sciences, January 2025 ───────────────────────────────
  'case-black-tie': { alt: 'Die leuchtende Vitrine des Experiments schräg von der Seite, rundherum Gäste in Abendgarderobe.' },
  'stage-lines': { alt: 'Die Band, das Experiment und eine Landschaft aus weißen Linien auf der Leinwand.' },
  'case-and-guitar': { alt: 'Vorne die Vitrine, dahinter ein Musiker.' },
  'case-edge-lit': { alt: 'Die Vitrine mit leuchtenden Kanten, dahinter orange Linien auf der Leinwand.' },
  'screen-landscape': { alt: 'Eine zackige Landschaft aus weißen Linien auf der Leinwand über der Band.' },
  'guests-at-case': { alt: 'Gäste versammeln sich um die beleuchtete Vitrine.' },
  'band-under-screen': { alt: 'Band und Experiment unter der Leinwand.' },

  // ── DPG Regensburg, March 2025 ──────────────────────────────────────────
  'talk-1': { alt: 'Der Vortrag beginnt mit der Definition eines verschränkten Zustands.' },
  'talk-2': { alt: 'Benjamin Orthner in einem Hörsaal in Regensburg, auf den beiden Leinwänden hinter ihm Clemens Wengers Porträt und die Musiksoftware.' },
  'talk-4': { alt: 'Wie aus Messergebnissen Musik wird.' },
  'slide-bell-experiment': { alt: 'Folie: das Bell-Experiment als Quanten-Dirigent.' },
  'slide-beam-paths': { alt: 'Folie: der 405-nm-Pumplaser und die beiden Strahlwege zu Alice und Bob.' },
  'slide-waveplate-and-splitter': { alt: 'Folie: Halbwellenplatte und polarisierender Strahlteiler.' },
  'slide-bell-value': { alt: 'Folie: klassisch S ≤ 2, gemessen S ≈ 2,5.' },
  'slide-control-panel': { alt: 'Folie: das musikalische Kontrollpult, das die Noten an die Musiker:innen von Alice und Bob schickt.' },
  'slide-8rooms-visuals': { alt: 'Folie: die Visuals der acht Räume von 8 Rooms.' },
  'slide-team': { alt: 'Folie: das Team.' },

  // ── EXPO 2025 Osaka ─────────────────────────────────────────────────────
  'austrian-pavilion': { alt: 'Der Österreich-Pavillon auf der EXPO 2025, eine hölzerne Spirale wie eine Partitur, davor Besucher:innen in der Warteschlange.' },
  'kiosk-the-sound-of-entanglement': { alt: 'Ein runder Touchscreen im Österreich-Pavillon stellt The Sound of Entanglement vor: wie Photonenpaare zu Dirigenten werden.' },
  'pavilion-hall': { alt: 'Im Pavillon: ein dunkler Saal mit einem Flügel unter einem Kronleuchter und vielen Besucher:innen.' },
  'panorama-screens': { alt: 'Besucher:innen vor einem gekrümmten Panorama aus Projektionsflächen im Pavillon.' },

  // ── Washington, April 2025 ──────────────────────────────────────────────
  'landscape-above-stage': { alt: 'Eine Landschaft aus weißen Linien füllt die Leinwand über der Band und dem beleuchteten Experiment auf der Bühne.' },
  'wide-hall': { alt: 'Die Linien-Visuals über der Bühne und das dunkle Publikum.' },
  'from-the-back': { alt: 'Die Bühne von den hinteren Reihen des Saals aus gesehen.' },
  'diagonal-lines': { alt: 'Diagonale weiße Linien auf der Leinwand, darunter die Band.' },
  'clemens-behind-case': { alt: 'Clemens Wenger an den Tasten hinter der leuchtenden Vitrine.' },
  'manu-bass': { alt: 'Manu Mayr am E-Bass.' },
  'benjamin-operating': { alt: 'Benjamin Orthner bedient das Experiment.' },
  'band-and-experiment': { alt: 'Band und Experiment auf der Bühne.' },
  lecture: { alt: 'Der Vortrag vor der Aufführung.' },
  'team-rooftop': { alt: 'Das Team auf einer Dachterrasse, im Hintergrund das Kapitol.' },
  'featured-summit-events': { alt: 'Die Leinwand im Theater des Bloomberg Center kündigt die Höhepunkte des Gipfels an: am Montag die Quanten-Performance von The Sound of Entanglement, am Dienstag Yann LeCun über die Zukunft der KI und ein Auftritt des Pianisten Martin Labazevitch.' },
  'bloomberg-theater-empty': { alt: 'Das leere Theater des Bloomberg Center von der obersten Reihe aus, die Bühne beleuchtet.' },
  'setup-in-living-room': { alt: 'Das Experiment ausgepackt auf dem Wohnzimmerteppich, Kabel und Werkzeug auf dem Sofa, am Boden eine Schachtel Labor-Snacks.' },
  'team-at-work': { alt: 'Vorne der offene Flightcase mit der Optik auf dem Teppich, dahinter drei aus dem Team mit Laptops am Tisch.' },

  // ── Millstatt, June 2025 ────────────────────────────────────────────────
  'keys-screen-altar-wide': { alt: 'Clemens Wenger an den Keyboards in der Stiftskirche Millstatt, auf der Leinwand vor dem vergoldeten Barockaltar eine Landschaft aus weißen Linien, rechts das Experiment in seinem beleuchteten Koffer.' },
  'keys-and-altar': { alt: 'Keyboard und Leinwand vor dem vergoldeten Barockaltar.' },
  'altar-screen': { alt: 'Der Altar mit der Leinwand.' },
  'nave-to-screen': { alt: 'Das Kirchenschiff mit Blick auf die leuchtende Leinwand.' },
  'rooms-ui': { alt: 'Der Laptop mit der Raumkarte der Zufallsbewegung.' },

  // ── Alpbach, August 2025 ────────────────────────────────────────────────
  'lines-on-ceiling': { alt: 'Weiße Linien, über die Decke projiziert, darunter das Trio und das Experiment in violettem Bühnenlicht.' },
  'spiky-landscape': { alt: 'Eine zackige Linienlandschaft über der Band.' },
  'wide-stage': { alt: 'Das Trio und die beleuchtete Vitrine des Experiments auf der Bühne in violettem Licht, darüber die Linien-Visuals.' },
  'drums-purple': { alt: 'Judith Schwarz am Schlagzeug in violettem Licht.' },
  'keys-purple': { alt: 'Clemens Wenger an den Tasten.' },
  'experiment-closeup': { alt: 'Das Experiment in seinem Flightcase.' },
  'opening-the-case': { alt: 'Nach dem Konzert wird der Koffer für das Publikum geöffnet.' },
  'audience-peering': { alt: 'Nach der Aufführung beugen sich Zuschauer:innen über den offenen Koffer und schauen sich die Optik des Experiments an.' },
  'team-on-stage': { alt: 'Sieben aus dem Team stehen Arm in Arm auf der Bühne vor einer Leinwand mit ihren Porträts.' },
  'benjamin-orthner-alpbach': { alt: 'Benjamin Orthner hinter dem Experiment beim Europäischen Forum Alpbach, beim Erklären des Aufbaus.' },

  // ── CIVA, Belvedere 21, October 2025 ────────────────────────────────────
  'keys-under-pointcloud': { alt: 'Clemens Wenger mit Kappe am Keyboard, beleuchtet von einer projizierten Wolke aus weißen Punkten.' },
  'case-band-pointcloud': { alt: 'Vorne die beleuchtete Vitrine des Experiments, dahinter die Band und die Punktwolken-Projektion.' },
  'pointcloud-over-band': { alt: 'Eine Projektion aus weißen Punkten über der Band, vorne die beleuchtete Vitrine.' },
  'case-light-stripe': { alt: 'Vorne die beleuchtete Vitrine, dahinter zwei Musiker als Silhouetten vor einem Lichtstreifen.' },
  'white-curve': { alt: 'Eine einzelne weiße Kurve auf der Leinwand, darunter klein und dunkel die Band.' },
  'pixel-sort': { alt: 'Ein pixelsortiertes Bild in Grau und Weiß auf der Leinwand hinter den Musikern.' },
  'case-wood-panels': { alt: 'Die leuchtende Vitrine des Experiments im Kinosaal, dahinter die beleuchtete Holzvertäfelung.' },
  'backlight-burst': { alt: 'Ein Scheinwerfer strahlt über das Publikum und das Pult mit dem Experiment.' },
  'case-top-down': { alt: 'Das Experiment von oben in seinem beleuchteten Flightcase.' },
  'wide-stage-curve': { alt: 'Die ganze Bühne: ein heller senkrechter Lichtstrich auf der Leinwand, darunter die Band und die beleuchtete Vitrine.' },
  'wide-stage-lines': { alt: 'Feine weiße Linien fächern sich über die Leinwand oberhalb der Band.' },
  'case-in-hall': { alt: 'Die beleuchtete Vitrine des Experiments vorne im Kinosaal, dahinter das Publikum in den Reihen.' },
  'lecture-hall': { alt: 'Der Vortrag vor der Aufführung, auf der Leinwand das Team.' },
  'lecture-stage': { alt: 'Der Vortrag auf der Kinobühne: eine Folie stellt klassische Physik und Quantenphysik gegenüber, seitlich die Vortragenden.' },
  'slide-s-to-bpm': { alt: 'Eine Folie auf der Kinoleinwand: die Formel für den Bell-Wert S, ein Pfeil und darunter „BPM (beats per minute)“; unten auf der dunklen Bühne die Instrumente der Band.' },
  'clemens-explaining-tempo': { alt: 'Clemens Wenger mit Mikrofon zeigt auf eine Tempokurve auf der Leinwand hinter ihm.' },
  'voqoder-slide': { alt: 'Clemens Wenger am Laptop vor einer Folie mit einer Klaviatur, geteilt zwischen Alice und Bob.' },
  'pointcloud-portrait': { alt: 'Clemens Wenger am Keyboard, hinter und über ihm die Punktwolken-Projektion.' },
  'keys-portrait': { alt: 'Clemens Wenger an den Keyboards, im Licht der Projektion.' },
  'bass-portrait': { alt: 'Manu Mayr am Bass, von hinten von der weißen Leinwand angestrahlt.' },
  'performer-light-stroke': { alt: 'Clemens Wenger am Keyboard unter einem schrägen Strich aus weißem Licht.' },
  bows: { alt: 'Das Team steht am Ende gemeinsam auf der Bühne und verbeugt sich.' },
  'q-and-a': { alt: 'Fragen aus dem Publikum nach der Aufführung.' },
  'audience-at-case': { alt: 'Nach der Aufführung drängt sich das Publikum um die beleuchtete Vitrine.' },
  'phones-at-case': { alt: 'Handys über der Glasvitrine: Besucher:innen fotografieren das Experiment.' },
  'after-show-case': { alt: 'Jemand beugt sich über den offenen Koffer und zeigt auf die Optik.' },

  // ── Palermo, October 2025 ───────────────────────────────────────────────
  'at-the-poster': { alt: 'Clemens Wenger und Benjamin Orthner neben dem Plakat der ISQCMC 2025 auf einer Terrasse in Palermo.' },
  'music-demonstration': { alt: 'Die Musikdemonstration: ein gewölbter Saal, das Publikum vor einer Leinwand.' },
  'talk-palazzo-steri': { alt: 'Der Vortrag in einem bemalten Saal mit Holzdecke, auf der Leinwand ein QR-Code zum Paper.' },
  gelato: { alt: 'Clemens Wenger und Benjamin Orthner mit Gelato nach dem Symposium.' },

  // ── JKU Linz, November 2025 ─────────────────────────────────────────────
  'audience-pointcloud': { alt: 'Silhouetten des Publikums vor einer großen Punktwolken-Projektion über der Bühne.' },
  'rain-visual': { alt: 'Ein Regen aus Punkten auf der Leinwand über der Band.' },
  'dotted-sphere': { alt: 'Eine gepunktete Kugel, über die Band projiziert.' },
  'hall-soundcheck': { alt: 'Der Saal beim Soundcheck, die Projektion läuft über die breite Leinwand.' },
  'team-at-case': { alt: 'Das Team rund um das Experiment.' },
  'audience-at-experiment': { alt: 'Nach dem Konzert drängt sich das Publikum um das Experiment.' },

  // ── Album studio ────────────────────────────────────────────────────────
  'experiment-in-studio': { alt: 'Das Experiment im offenen Flightcase im Aufnahmestudio, daneben zwei Laptops, dahinter ein Mikrofonstativ.' },
  'aligning-in-studio': { alt: 'Benjamin Orthner beugt sich über das Breadboard und justiert mit einer Hand die Optik.' },
  'control-room': { alt: 'Die Regie: ein großes Mischpult, Monitore und ein Bildschirm mit Blick in den Aufnahmeraum, am Computer die Tonregie.' },
  'engineer-at-desk': { alt: 'Am Mischpult: Über das Talkback-Mikrofon geht eine Ansage an die Band.' },
  'drums-room': { alt: 'Die Schlagzeugerin im Aufnahmeraum, von oben zwischen den Akustikelementen gesehen.' },
  'drums-close': { alt: 'Nah am Schlagzeug: Becken, eine rote Tom, dahinter die Schlagzeugerin.' },
  'bass-and-keys': { alt: 'Im Aufnahmeraum: vorne der Bassist mit Kopfhörern, dahinter der Keyboarder an seinen Instrumenten.' },
  'keys-overhead': { alt: 'Das Keyboard-Setup von oben: zwei Keyboards, ein Laptop, Kabel quer über den Boden.' },

  // ── Setup, figures, pieces ──────────────────────────────────────────────
  'case-top-view': { alt: 'Das Experiment von oben in seiner beleuchteten Glasvitrine: Laserquelle, Spiegel, rote Drehhalterungen und fasergekoppelte Detektoren auf einem schwarzen Breadboard.' },
  'setup-with-beams': { alt: 'Das Breadboard von oben mit den eingezeichneten roten und blauen Wegen der beiden Photonen, dazu ein Ausschnitt des Lasermoduls.' },
  'figure-3-bell-setup': { alt: 'Foto des Aufbaus von oben mit den beiden eingezeichneten Strahlwegen: rot zu Alices Detektoren, blau zu Bobs, jeweils durch eine Halbwellenplatte und einen Strahlteiler, die Ergebnisse mit plus eins und minus eins beschriftet.' },
  '8rooms-r1-r8': { alt: 'Acht Felder mit Landschaften aus weißen Linien, eines für jeden Raum, beschriftet mit R1 bis R8.' },
  'quantum-random-walk': { alt: 'Pfeile aus der Mitte eines Rasters zeigen, wie oft jede Schrittrichtung vorkommt; die Diagonalen überwiegen.' },

  // ── People ──────────────────────────────────────────────────────────────
  'alexander-ploier': { alt: 'Porträt von Alexander Ploier.' },
  'clemens-wenger': { alt: 'Porträt von Clemens Wenger.' },
  'enar-de-dios-rodriguez': { alt: 'Porträt von Enar de Dios Rodríguez.' },
  'johannes-kofler': { alt: 'Porträt von Johannes Kofler.' },
  'judith-schwarz': { alt: 'Porträt von Judith Schwarz am Schlagzeug.' },
  'manu-mayr': { alt: 'Porträt von Manu Mayr.' },
  'martin-ringbauer': { alt: 'Porträt von Martin Ringbauer.' },
  'philipp-haslinger': { alt: 'Porträt von Philipp Haslinger.' },
  'richard-kueng': { alt: 'Porträt von Richard Küng.' },
};

/** 'haze-over-case' from '/_astro/haze-over-case.CcEH.jpg' or '/@fs/.../haze-over-case.jpg?origWidth=…' */
export function photoKey(src: string): string {
  const last = src.split('?')[0].split('/').pop() ?? '';
  return last.split('.')[0];
}
