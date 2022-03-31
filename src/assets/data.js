import mars1 from '/assets/destination/image-mars.png';
import mars2 from '/assets/destination/image-mars.webp';

import moon1 from '/assets/destination/image-moon.png';
import moon2 from '/assets/destination/image-moon.webp';

import europa1 from '/assets/destination/image-europa.png';
import europa2 from '/assets/destination/image-europa.webp';

import titan1 from '/assets/destination/image-titan.png';
import titan2 from '/assets/destination/image-titan.webp';

import douglas1 from '/assets/crew/image-douglas-hurley.png';
import douglas2 from '/assets/crew/image-douglas-hurley.webp';

import mark1 from '/assets/crew/image-mark-shuttleworth.png';
import mark2 from '/assets/crew/image-mark-shuttleworth.webp';

import victor1 from '/assets/crew/image-victor-glover.png';
import victor2 from '/assets/crew/image-victor-glover.webp';

import anousheh1 from '/assets/crew/image-anousheh-ansari.png';
import anousheh2 from '/assets/crew/image-anousheh-ansari.webp';

import launch1 from '/assets/technology/image-launch-vehicle-portrait.jpg';
import launch2 from '/assets/technology/image-launch-vehicle-landscape.jpg';

import spaceport1 from '/assets/technology/image-spaceport-portrait.jpg';
import spaceport2 from '/assets/technology/image-spaceport-landscape.jpg';

import capsule1 from '/assets/technology/image-space-capsule-portrait.jpg';
import capsule2 from '/assets/technology/image-space-capsule-landscape.jpg';

const data = {
    EN: {
        textPage: {
            nav: { '00': 'Home', '01': 'Destination', '02': 'Crew', '03': 'Technology' },
            hero: {
                subtitulo: 'SO YOU WANT TO TRAVEL TO',
                titulo: 'SPACE',
                parrafo: 'Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!',
                button: 'Explore',
            },
            titles: { dest: 'pick your destination', crew: 'meet your crew', tec: 'space launch 101' },
            terminology: 'the terminology...',
        },
        destinations: [
            {
                name: 'moon',
                images: {
                    png: moon1,
                    webp: moon2,
                },
                description:
                    'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.',
                distance: '384,400 km',
                travel: '3 days',
                href: '/destination/moon',
            },
            {
                name: 'mars',
                images: {
                    png: mars1,
                    webp: mars2,
                },
                description: 'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!',
                distance: '225 mil. km',
                travel: '9 months',
                href: '/destination/mars',
            },
            {
                name: 'europa',
                images: {
                    png: europa1,
                    webp: europa2,
                },
                description: 'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.',
                distance: '628 mil. km',
                travel: '3 years',
                href: '/destination/europa',
            },
            {
                name: 'titan',
                images: {
                    png: titan1,
                    webp: titan2,
                },
                description: 'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.',
                distance: '1.6 bil. km',
                travel: '7 years',
                href: '/destination/titan',
            },
        ],
        crew: [
            {
                name: 'Douglas Hurley',
                images: {
                    png: douglas1,
                    webp: douglas2,
                },
                role: 'Commander',
                bio: 'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.',
            },
            {
                name: 'Mark Shuttleworth',
                images: {
                    png: mark1,
                    webp: mark2,
                },
                role: 'Mission Specialist',
                bio: 'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.',
            },
            {
                name: 'Victor Glover',
                images: {
                    png: victor1,
                    webp: victor2,
                },
                role: 'Pilot',
                bio: 'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.',
            },
            {
                name: 'Anousheh Ansari',
                images: {
                    png: anousheh1,
                    webp: anousheh2,
                },
                role: 'Flight Engineer',
                bio: 'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.',
            },
        ],
        technology: [
            {
                name: 'Launch vehicle',
                images: {
                    portrait: launch1,
                    landscape: launch2,
                },
                description:
                    "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
            },
            {
                name: 'Spaceport',
                images: {
                    portrait: spaceport1,
                    landscape: spaceport2,
                },
                description:
                    'A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.',
            },
            {
                name: 'Space capsule',
                images: {
                    portrait: capsule1,
                    landscape: capsule2,
                },
                description:
                    "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
            },
        ],
    },
    ES: {
        textPage: {
            nav: { '00': 'Inicio', '01': 'Destino', '02': 'Tripulación', '03': 'Tecnología' },
            hero: {
                subtitulo: 'Así que quieres viajar al',
                titulo: 'ESPACIO',
                parrafo: 'Admitámoslo; si quieres ir al espacio, más vale que vayas de verdad al espacio exterior y no te quedes flotando al borde del mismo. Siéntese y relájese, porque le daremos una experiencia verdaderamente fuera de este mundo.',
                button: 'Explorar',
            },
            titles: { dest: 'escoje tu destino', crew: 'conoce a tu tripulación', tec: 'lanzamiento espacial 101' },
            terminology: 'la terminología...',
        },
        destinations: [
            {
                name: 'luna',
                images: {
                    png: moon1,
                    webp: moon2,
                },
                description:
                    'Vea nuestro planeta como nunca antes lo había visto. Un viaje de relax perfecto para recuperar la perspectiva y volver renovado. Mientras está allí, conozca la historia visitando los lugares de aterrizaje del Luna 2 y del Apolo 11.',
                distance: '384,400 km',
                travel: '3 días',
                href: '/destination/moon',
            },
            {
                name: 'marte',
                images: {
                    png: mars1,
                    webp: mars2,
                },
                description: 'No olvides meter en la maleta tus botas de montaña. Las necesitarás para enfrentarte al Olympus Mons, la montaña planetaria más alta de nuestro sistema solar. Tiene dos veces y media el tamaño del Everest!',
                distance: '225 mil. km',
                travel: '9 meses',
                href: '/destination/marte',
            },
            {
                name: 'europa',
                images: {
                    png: europa1,
                    webp: europa2,
                },
                description:
                    'Europa, la más pequeña de las cuatro lunas galileanas que orbitan alrededor de Júpiter, es el sueño de los amantes del invierno. Con una superficie helada, es perfecta para practicar patinaje sobre hielo, curling, hockey o simplemente para relajarse en su acogedora cabaña invernal.',
                distance: '628 mil. km',
                travel: '3 años',
                href: '/destination/europa',
            },
            {
                name: 'titan',
                images: {
                    png: titan1,
                    webp: titan2,
                },
                description: 'Titán, la única luna conocida que tiene una atmósfera densa aparte de la Tierra, es un hogar lejos de casa (¡sólo unos cientos de grados más frío!). Además, se pueden ver los anillos de Saturno.',
                distance: '1.6 bil. km',
                travel: '7 años',
                href: '/destination/titan',
            },
        ],
        crew: [
            {
                name: 'Douglas Hurley',
                images: {
                    png: douglas1,
                    webp: douglas2,
                },
                role: 'Comandante',
                bio: 'Douglas Gerald Hurley es un ingeniero estadounidense, ex piloto del Cuerpo de Marines y ex astronauta de la NASA. Se lanzó al espacio por tercera vez como comandante de la Crew Dragon Demo-2.',
            },
            {
                name: 'Mark Shuttleworth',
                images: {
                    png: mark1,
                    webp: mark2,
                },
                role: 'Especialista en misiones',
                bio: 'Mark Richard Shuttleworth es el fundador y director general de Canonical, la empresa que está detrás del sistema operativo Ubuntu, basado en Linux. Shuttleworth fue el primer sudafricano en viajar al espacio como turista espacial.',
            },
            {
                name: 'Victor Glover',
                images: {
                    png: victor1,
                    webp: victor2,
                },
                role: 'Piloto',
                bio: 'Piloto en el primer vuelo operativo de la nave SpaceX Crew Dragon a la Estación Espacial Internacional. Glover es comandante de la Marina de los Estados Unidos, donde pilota un F/A-18. Fue miembro de la tripulación de la Expedición 64 y sirvió como ingeniero de vuelo de sistemas de la estación.',
            },
            {
                name: 'Anousheh Ansari',
                images: {
                    png: anousheh1,
                    webp: anousheh2,
                },
                role: 'Ingeniera de vuelo',
                bio: 'Anousheh Ansari es una ingeniera estadounidense de origen iraní y cofundadora de Prodea Systems. Ansari fue la cuarta turista espacial autofinanciada, la primera mujer autofinanciada que voló a la ISS y la primera iraní en ir al espacio.',
            },
        ],
        technology: [
            {
                name: 'Vehículo de lanzamiento',
                images: {
                    portrait: capsule1,
                    landscape: capsule2,
                },
                description:
                    'Un vehículo de lanzamiento o cohete portador es un vehículo propulsado por un cohete que se utiliza para transportar una carga útil desde la superficie de la Tierra al espacio, normalmente a la órbita terrestre o más allá. Nuestro cohete portador WEB-X es el más potente en funcionamiento. Con sus 150 metros de altura, es un espectáculo impresionante en la plataforma de lanzamiento.',
            },
            {
                name: 'Puerto espacial',
                images: {
                    portrait: spaceport1,
                    landscape: spaceport2,
                },
                description:
                    'Un puerto espacial o cosmódromo es un lugar de lanzamiento (o recepción) de naves espaciales, por analogía con el puerto marítimo para los barcos o el aeropuerto para los aviones. Con sede en el famoso Cabo Cañaveral, nuestro puerto espacial está idealmente situado para aprovechar la rotación de la Tierra para el lanzamiento.',
            },
            {
                name: 'Cápsula espacial',
                images: {
                    portrait: capsule1,
                    landscape: capsule2,
                },
                description:
                    'Una cápsula espacial es una nave espacial, a menudo tripulada, que utiliza una cápsula de reentrada de cuerpo romo para reentrar en la atmósfera terrestre sin alas. Nuestra cápsula es el lugar donde pasará su tiempo durante el vuelo. Incluye un gimnasio espacial, un cine y muchas otras actividades para mantenerte entretenido.',
            },
        ],
    },
};

export default data;
