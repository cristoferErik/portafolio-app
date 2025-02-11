import { Educazione, Linguaggio, Progetto, Skill, SocialNetwork } from "../components/models/portafolio";

export let sks:Skill[]=[
    {id:1,nome:"html",image:"/icons/competenze/html.png"},
    {id:2,nome:"css",image:"/icons/competenze/css.png"},
    {id:3,nome:"java",image:"/icons/competenze/java.png"},
    {id:4,nome:"SpringBoot",image:"/icons/competenze/springboot.png"},
    {id:5,nome:"Docker",image:"/icons/competenze/docker.png"},
    {id:6,nome:"Sass",image:"/icons/competenze/sass.png"},
    {id:7,nome:"Gulp",image:"/icons/competenze/gulp.png"},
    {id:8,nome:"Angular",image:"/icons/competenze/angular.png"},
    {id:9,nome:"TypeScript",image:"/icons/competenze/typescript.png"},
    {id:10,nome:"JavaScript",image:"/icons/competenze/javascript.png"},
    {id:11,nome:"WordPress",image:"/icons/competenze/wordpress.png"},
    {id:12,nome:"Thymeleaf",image:"/icons/competenze/thymeleaft.png"},
    {id:13,nome:"Blender",image:"/icons/competenze/blender.png"}
  ];

export  let pgs:Progetto[]=[
    {id:1,nome:"scoutfly",descrizione:"Questa paggina é stata creata per migliorare la gestione , delle attivitá e gestione dei cliente, per poter avere conto",image:"abx"},
    {id:1,nome:"fitness",descrizione:"asdasdasda",image:"abc"}
  ];

export  let sns:SocialNetwork[]=[
    {id:1,image:"/icons/github.png",url:"https://github.com/cristoferErik"},
    {id:2,image:"/icons/linkedin.png",url:"https://www.linkedin.com/in/cristofer-calvo-263534241"},
  ];

  export let edus:Educazione[]=[
      {id:1,image:"/icons/educazione/UPN.png",nome:"UPN",descrizione:"Università privata del norte 2016-2024"},
      {id:2,image:"/icons/educazione/ICPNA.png",nome:"Icpna",descrizione:"Istituto Culturale Peruviano NordAmericano B1-B2"},
      {id:3,image:"/icons/educazione/UDEMY.png",nome:"Udemy",descrizione:"Piataforma in cui ho consolidato e imparato diversi tecnologie tra i quali sono SpringBoot, Angular,WordPress"}
  ];

  export let lgs:Linguaggio[]=[
      {id:1,nome:"Inglese",livello:"Intermedio"},
      {id:2,nome:"Italiano",livello:"Intermedio"},
      {id:3,nome:"Spagnolo",livello:"Nativo"},
  ];

export let aboutMe:string=`
  Sono nato il 18 di maggio 1996 a Lima, sono uno appassionato della programmazione.
  la prima volta che ho sentito parlare del mondo della programmazione è 
  stata grazie a mio cugino il quale, ha studiato la carriera d'ingegneria informatica,
  che mi ha trasmesso tutto ciò che mi ha spinto a voler scoprire questo mondo.
  Una delle maggiori motivazioni è stato la matematica ed i videogiocchi . Cosi sono
  iniziato a studiare nella università, in cui ho capito , che per poter imparare a
  sviluppare non ci si deve restare con quello che se impara, se non , studiare da
  autodidatta, e cosi è stato come ho iniziato il mio percorso di studio.
  Adoro partecipare, studiare, capire , per me il miglior posto di lavoro è quello
  dove io possa migliorare costantemente.`;
