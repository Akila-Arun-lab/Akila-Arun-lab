import axios from "axios";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import React, { useState, useEffect } from "react";
function NewsStore() {
  const [news, setNews] = useState([]);
  useEffect(() => {
    async function getNews() {
     let news = await axios.get('https://newsapi.org/v2/everything?q=tesla&from=2024-12-12&sortBy=publishedAt&apiKey=298c073505384b2e83d1dc1c3aa3d032');
     
     /* news = {
      "status": "ok",
      "totalResults": 451,
      "articles": [
      {
      "source": {
      "id": null,
      "name": "Gizmodo.com"
      },
      "author": "Mike Fazioli",
      "title": "The Garmin Instinct 2 Smartwatch Is Down to Under $200, the Lowest Price I’ve Ever Seen",
      "description": "This rugged GPS watch is the best $200 wearable for the toughest outdoor workouts and adventuring.",
      "url": "https://gizmodo.com/thegarmininstinct2smartwatchisdowntounder200thelowestpriceiveeverseen2000548144",
      "urlToImage": "https://gizmodo.com/app/uploads/2025/01/GarminInstinct2.jpg",
      "publishedAt": "20250111T13:00:13Z",
      "content": "Smartwatches have become so intricate and so expensive that we end up spending more money on armorlike cases and screen protectors than we used to spend on an entire watch. Even then you may be hesi… [+2464 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Android Central"
      },
      "author": "Nicholas Sutrich",
      "title": "The Galaxy S25 Ultra needs to fix four major S24 Ultra display problems",
      "description": "The Samsung Galaxy S24 Ultra's display got some things right but a lot wrong. Here's how they can get it right with the Galaxy S25 Ultra.",
      "url": "https://www.androidcentral.com/phones/thegalaxys25ultraneedstofixfourmajors24ultradisplayproblems",
      "urlToImage": "https://cdn.mos.cms.futurecdn.net/cs25Lox8PpAsfokMewrMDU120080.jpg",
      "publishedAt": "20250111T04:11:34Z",
      "content": "In some ways, the Galaxy S24 Ultra's display is the best Samsung has ever made. It finally upgraded the PWM dimming rate to match the iPhone, and Samsung's new antiglare filter made it easier to see… [+5250 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "MacRumors"
      },
      "author": "Hartley Charlton",
      "title": "Apple Focusing on These Eight New LowCost Devices in 2025",
      "description": "Apple's slate of 2025 products look to be dominated by a large number of lowcost and entrylevel devices. Here's what to expect.\n\n\n\n\n\nWith advancements like Apple Intelligence and allnew inhouse chip designs, Apple is reportedly looking to enhance many of …",
      "url": "https://www.macrumors.com/2025/01/11/applelowcostdevicesin2025/",
      "urlToImage": "https://images.macrumors.com/t/By1ev_thmsX7s_IzRD0AiITf4=/2236x/articlenew/2020/09/AppleEventLogoFeature.jpg",
      "publishedAt": "20250111T09:00:00Z",
      "content": "Apple's slate of 2025 products look to be dominated by a large number of lowcost and entrylevel devices. Here's what to expect.\r\nWith advancements like Apple Intelligence and allnew inhouse chip … [+3800 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Slashdot.org"
      },
      "author": "msmash",
      "title": "Zuckerberg: Apple 'Hasn't Invented Anything Great in a While'",
      "description": "Meta CEO Mark Zuckerberg criticized Apple's innovation record and business practices in a Joe Rogan podcast interview on January 10, claiming the iPhone maker has not \"invented anything great in a while\" and is \"just sitting\" on its flagship product 20 years …",
      "url": "https://apple.slashdot.org/story/25/01/11/0051258/zuckerbergapplehasntinventedanythinggreatinawhile",
      "urlToImage": "https://a.fsdn.com/sd/topics/apple_64.png",
      "publishedAt": "20250111T01:25:00Z",
      "content": "What did Zuck invent? A forum where people can post? In the 1980s that was called Usenet.No moderation? Usenet.No fact checking? Usenet.Sucking up to politicians  that's been around since before anc… [+151 chars]"
      },
      {
      "source": {
      "id": "businessinsider",
      "name": "Business Insider"
      },
      "author": "Rachel Hosie",
      "title": "I've been wearing an Oura Ring to track my fitness for 4 years. Here are the pros and cons of the device loved by celebs and business execs.",
      "description": "After wearing an Oura Ring for four years, fitness reporter Rachel Hosie said she loves that it's stylish and discreet, and tracks a range of health data.",
      "url": "https://www.businessinsider.com/ouraringfitnesstrackerprosconsafteryearswearingstyle20251",
      "urlToImage": "https://i.insider.com/677fd73af83fcec7e5b52f40?width=1200&format=jpeg",
      "publishedAt": "20250111T08:33:01Z",
      "content": "My Oura Ring tracks my movement and rest across the day, and it is subtle enough to wear on any occasion.Rachel Hosie\r\n<ul><li>The Oura Ring is a fitness tracker popular among athletes, business exec… [+6107 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Xataka.com"
      },
      "author": "Alejandro Alcolea",
      "title": "Quién domina la industria de los chips y los semiconductores, ilustrados en un completo gráfico",
      "description": "Los semiconductores son el núcleo de los dispositivos que usamos a diario, desde smartphones hasta vehículos eléctricos y satélites. Sin embargo, su producción está concentrada en unas pocas empresas que controlan el mercado global. Este dominio no solo tiene…",
      "url": "https://www.xataka.com/componentes/dominiomundialsemiconductoresparteempresaspaisesexpuestoestegrafico",
      "urlToImage": "https://i.blogs.es/277bf9/nvidia/840_560.jpeg",
      "publishedAt": "20250111T09:00:37Z",
      "content": "Los semiconductores son el núcleo de los dispositivos que usamos a diario, desde smartphones hasta vehículos eléctricos y satélites. Sin embargo, su producción está concentrada en unas pocas empresas… [+4817 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Xataka.com"
      },
      "author": "Yúbal Fernández",
      "title": "Cómo conectar el móvil al monitor: tres métodos para hacerlo y ver lo que haces con el smartphone en la pantalla",
      "description": "Vamos a decirte las opciones que tienes para conectar tu móvil a un monitor, de forma que puedas ver en él lo que haces en la pantalla del dispositivo. Esto va más allá de enviar contenido mediante la opción de Google Cast o similares, sino de reflejar en la …",
      "url": "https://www.xataka.com/basics/comoconectarmovilalmonitortresmetodosparahacerloverquehacessmartphonepantalla",
      "urlToImage": "https://i.blogs.es/d46732/conectarmovilpantalla/840_560.jpeg",
      "publishedAt": "20250111T11:00:37Z",
      "content": "Vamos a decirte las opciones que tienes para conectar tu móvil a un monitor, de forma que puedas ver en él lo que haces en la pantalla del dispositivo. Esto va más allá de enviar contenido mediante l… [+4077 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Gizmodo.com"
      },
      "author": "Mike Fazioli",
      "title": "Beats Powerbeats Pro Earbuds Are Cheaper Than Apple AirPods 4 and AirPods Pro 2",
      "description": "Another unbeatable Beats deal from Amazon brings the Powerbeats Pro earbuds to you for just $160.",
      "url": "https://gizmodo.com/beatspowerbeatsproearbudsarecheaperthanappleairpods4andairpodspro22000548280",
      "urlToImage": "https://gizmodo.com/app/uploads/2025/01/BeatsPowerbeatsPro.jpg",
      "publishedAt": "20250111T14:30:16Z",
      "content": "As the song says, the Beats go on. Well, not exactly what the song says, but you get the drift. But the Amazon deals on Beats headphones and earbuds do indeed go on, and the latest is today’s 36% off… [+2291 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Digital Trends"
      },
      "author": "Andy Boxall",
      "title": "Phone makers are scared to innovate, and this tiny sensor proves it",
      "description": "There's a tiny sensor that can improve the colors and white balance in smartphone cameras, but we're still waiting for its wide adoption.",
      "url": "https://www.digitaltrends.com/mobile/phonemakersarescaredtoinnovateandthistinysensorprovesit/",
      "urlToImage": "https://www.digitaltrends.com/wpcontent/uploads/2025/01/spectricitys1a.jpg?resize=1200%2C630&p=1",
      "publishedAt": "20250111T12:30:45Z",
      "content": "Table of Contents\r\nTable of Contents\r\nWhy aren’t phone makers using it?\r\nWhat else can the sensor do?\r\nIs this the end for multispectral sensors on phones?\r\n“To the average consumer, the pictures the… [+6365 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Github.com"
      },
      "author": "hybridgroup",
      "title": "Track your devices via Apple FindMy network in Go/TinyGo",
      "description": "Track personal Bluetooth devices via Apple's \"Find My\" network using OpenHaystack and MaclessHaystack with tools written in Go/TinyGo.  hybridgroup/gohaystack",
      "url": "https://github.com/hybridgroup/gohaystack",
      "urlToImage": "https://opengraph.githubassets.com/e65c924fa7e0e0f7108934b08820f3b0e0709a6efcda98b87c5c9866380b927f/hybridgroup/gohaystack",
      "publishedAt": "20250111T12:14:34Z",
      "content": "Go Haystack lets you track personal Bluetooth devices via Apple's massive \"Find My\" network.\r\nIt uses OpenHaystack together with MaclessHaystack to help you setup a custom FindMy network with tools … [+3662 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "heise online"
      },
      "author": "Niklas Jan Engelking",
      "title": "Einst war es umgekehrt: Apple verteidigt Diversitätsprogramm gegen Aktionäre",
      "description": "Apple wehrt sich gegen einen Aktionärsantrag, der das Ende des Diversitätsprogramms fordert. Einige Jahre zuvor war die Situation noch andersrum.",
      "url": "https://www.heise.de/news/EinstwaresumgekehrtAppleverteidigtDiversitaetsprogrammgegenAktionaere10236876.html",
      "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.pnglossy85.webplossy85.foil1/_wwwheisede_/imgs/18/4/7/7/7/1/8/7/AppleLogo2_tre94122f265abd1ecd.jpg",
      "publishedAt": "20250111T11:39:00Z",
      "content": "Apple stellt sich gegen eine Aktionärsforderung, seine Diversitätsprogramme aufzugeben. Der iPhoneKonzern rief die Anteilseigner auf, bei der Ende Februar anstehenden Hauptversammlung gegen den ents… [+2075 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "9to5Mac"
      },
      "author": "Bradley C",
      "title": "Apple @ Work: It’s time for Apple to make certification exams free",
      "description": "Apple @ Work is exclusively brought to you by Mosyle, the only Apple Unified Platform. Mosyle is the only solution that integrates in a single professionalgrade platform all the solutions necessary to seamlessly and automatically deploy, manage & protect App…",
      "url": "https://9to5mac.com/2025/01/11/itstimeforappletomakecertificationexamsfree/",
      "urlToImage": "https://i0.wp.com/9to5mac.com/wpcontent/uploads/sites/6/2024/01/AppleAtWorkFI.png?resize=1200%2C628&quality=82&strip=all&ssl=1",
      "publishedAt": "20250111T14:00:00Z",
      "content": "Apple @ Work is exclusively brought to you by Mosyle, the only Apple Unified Platform. Mosyle is the only solution that integrates in a single professionalgrade platform all the solutions necessary … [+4036 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "9to5Mac"
      },
      "author": "Fernando Silva",
      "title": "A renewed iPhone 14 Pro is a steal at just $450 right now",
      "description": "If you’ve been eyeing Apple’s toptier iPhones, the iPhone 14 Pro and iPhone 15 Pro are looking more appealing than ever — especially if you’re shopping in the renewed or refurbished market. With cuttingedge features, robust build quality, and longterm soft…",
      "url": "https://9to5mac.com/2025/01/11/arenewediphone14proisastealatjust450rightnow/",
      "urlToImage": "https://i0.wp.com/9to5mac.com/wpcontent/uploads/sites/6/2025/01/Screenshot20250109at3.38.20%E2%80%AFPMe1736455655771.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
      "publishedAt": "20250111T14:00:00Z",
      "content": "If youve been eyeing Apples toptier iPhones, the iPhone 14 Pro and iPhone 15 Pro are looking more appealing than ever especially if you’re shopping in the renewed or refurbished market. With cutting… [+3953 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "AppleInsider"
      },
      "author": "news@appleinsider.com (Christine McKee)",
      "title": "This 8TB 16inch MacBook Pro is on sale for $2,119 today only",
      "description": "Amazonowned Woot has launched a flash deal on a closeout 16inch MacBook Pro that's equipped with an impressive 8TB of storage.This 8TB MacBook Pro originally retailed for $5,499.If you're looking for a heavily discounted Apple laptop, Woot's weekend flash s…",
      "url": "https://appleinsider.com/articles/25/01/11/this8tb16inchmacbookproisonsalefor2119todayonly",
      "urlToImage": "https://photos5.appleinsider.com/gallery/62286129082macbookpro16inch8tbssdblowoutsalexl.jpg",
      "publishedAt": "20250111T06:40:35Z",
      "content": "Amazonowned Woot has launched a flash deal on a closeout 16inch MacBook Pro that's equipped with an impressive 8TB of storage.\r\nIf you're looking for a heavily discounted Apple laptop, Woot's weeke… [+1261 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Gizmodo.jp"
      },
      "author": "小暮ひさのり",
      "title": "クラウドゲーミングの「GeForce NOW」Meta QuestやApple Vison Pro対応へ #CES2025",
      "description": "Image:NVIDIAXRヘッドセットでもゲーム三昧！NVIDIAのクラウドゲーミングプラットフォーム「GeForceNOW」。GeForceRTX搭載のキュンキュンなゲーミングPCでのゲーム体験を、手持ちの端末で享受できる！…といった、サブスクリプション型のサービス。現在は主にPCやタブレット、スマートフォン向けに展開されていますが、ラスベガスで開催されているテクノロジーの見本市「CES202",
      "url": "https://www.gizmodo.jp/2025/01/geforcenowconform.html",
      "urlToImage": "https://media.loomapp.com/gizmodo/dist/images/2025/01/10/20250110NVK00.jpg?w=1280&h=630&f=jpg",
      "publishedAt": "20250111T00:00:00Z",
      "content": "XR \r\nNVIDIAGeForce NOWGeForce RTXPC\r\nPCCES 2025Meta Quest 3/3SApple Vision ProPicoXR\r\nGeforce NOW\r\nPC\r\nGeForce NOWUltimate3,580GeForce RTX 40804K HDR240 FPS\r\nXR3D \r\nSource: NVIDIA"
      },
      {
      "source": {
      "id": null,
      "name": "Journal du geek"
      },
      "author": "Journal du Geek",
      "title": "Quasi invulnérable, cet antivirus français joue avec les nerfs des cybercriminels",
      "description": "IntegoIntego est un éditeur de logiciels Mac qui propose un antivirus ultra efficace face aux risque cyber. Ce dernier a déjà été adopté par plus de 40 millions d'utilisateurs à travers le monde. Si vous voulez une protection digne de ce nom pour votre ordina…",
      "url": "https://www.journaldugeek.com/bonplan/quasiinvulnerablecetantivirusfrancaisjoueaveclesnerfsdescybercriminels/",
      "urlToImage": "https://www.journaldugeek.com/app/uploads/2025/01/Hommecapuche.jpg",
      "publishedAt": "20250111T06:13:45Z",
      "content": "Actuellement, Intego propose justement une belle promotion sur son logiciel antivirus Mac. De la sorte, vous pouvez l’acquérir pour seulement 19,99 euros pour la première année, au lieu de 49,99 euro… [+4679 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Theregister.com"
      },
      "author": "Steven J. VaughanNichols",
      "title": "Is it really the plan to take over Greenland and the Panama Canal? It's been a weird week",
      "description": "Meanwhile, tech titans are falling over themselves to help Trump\nOpinion We all know the US's incoming president, Donald Trump, has gone offscript in a way that is almost comical. Gulf of America? Make Greenland great again? Taking over the Panama Canal?…",
      "url": "https://www.theregister.com/2025/01/11/opinion_column_us_moves/",
      "urlToImage": "https://regmedia.co.uk/2022/06/28/arcticstationandnuukcityviewgreenland.jpg",
      "publishedAt": "20250111T15:30:08Z",
      "content": "Opinion We all know the US's incoming president, Donald Trump, has gone offscript in a way that is almost comical. Gulf of America? Make Greenland great again? Taking over the Panama Canal?\r\nUnfortu… [+5015 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Applesfera.com"
      },
      "author": "Guille Lomener",
      "title": "He creado una canción con IA desde mi iPhone en menos de diez segundos. El resultado me ha dejado sin palabras: es mejor que muchas canciones que escucho en la radio",
      "description": "Llevo años trabajando con inteligencia artificial. ChatGPT, Perplexity e incluso Apple Intelligence forman parte de mi día a día. He visto cómo la IA ha revolucionado la creación de texto, imágenes y últimamente hasta el vídeo. Pero la música... la música par…",
      "url": "https://www.applesfera.com/aplicacionesios1/hecreadocancioniamiiphonediezsegundosresultadomehadejadopalabrasmejorquemuchascancionesqueescuchoradio",
      "urlToImage": "https://i.blogs.es/798d80/suno/840_560.jpeg",
      "publishedAt": "20250111T09:00:37Z",
      "content": "Llevo años trabajando con inteligencia artificial. ChatGPT, Perplexity e incluso Apple Intelligence forman parte de mi día a día. He visto cómo la IA ha revolucionado la creación de texto, imágenes y… [+4285 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Applesfera.com"
      },
      "author": "Isra Fdez",
      "title": "La RAE lanzó la madre de las bibliotecas digitales con miles de libros gratis y así puedes aprovecharla en un iPad",
      "description": "Las personas que son buenas lectoras tienen cerebros diferentes. Lo dice la ciencia. Así que si quieres superar los retos de lectura de tu iPad y potenciar la memoria, aprovecha esta maravilla. Después de que el gobierno nos sorprendiera con la aplicación Mi …",
      "url": "https://www.applesfera.com/tutoriales/raelanzomadrebibliotecasdigitalesmileslibrosgratisasipuedesaprovecharlaipad",
      "urlToImage": "https://i.blogs.es/05f792/librosgratisenipad/840_560.jpeg",
      "publishedAt": "20250111T12:00:37Z",
      "content": "Las personas que son buenas lectoras tienen cerebros diferentes. Lo dice la ciencia. Así que si quieres superar los retos de lectura de tu iPad y potenciar la memoria, aprovecha esta maravilla. Despu… [+3806 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Golem.de"
      },
      "author": "Mike Faust",
      "title": "Gegen Investorenforderung: Apple will inklusive Firmenpolitik beibehalten",
      "description": "Der jährliche Aktionärsbericht von Apple legt nicht nur Tim Cooks Gehalt offen, sondern fordert auch, für die bestehende DEIPolitik zu stimmen. (Apple, Wirtschaft)",
      "url": "https://www.golem.de/sonstiges/zustimmung/auswahl.html?from=https%3A%2F%2Fwww.golem.de%2Fnews%2Fgegeninvestorenforderungapplewillinklusivefirmenpolitikbeibehalten2501192342.html&referer=https%3A%2F%2Ft.co%2F8a9328a390",
      "urlToImage": null,
      "publishedAt": "20250111T12:15:02Z",
      "content": "Besuchen Sie Golem.de wie gewohnt mit Werbung und Tracking,\r\n indem Sie der Nutzung aller Cookies zustimmen.\r\n Details zum Tracking finden Sie im Privacy Center.\r\nSkript wurde nicht geladen. Informat… [+607 chars]"
      },
      {
      "source": {
      "id": "diezeit",
      "name": "Die Zeit"
      },
      "author": "ZEIT ONLINE: Unternehmen  Annika Benzing",
      "title": "Unternehmenskultur: Apple verteidigt DiversitätsInitiativen",
      "description": "Programme für Vielfalt und Inklusion wurden zuletzt von vielen USUnternehmen beendet. Aktionäre fordern dies nun auch für Apple, der Konzern hält jedoch dagegen.",
      "url": "https://www.zeit.de/wirtschaft/unternehmen/202501/appleverteidigtdiversitaetsinititaiveaktionaere",
      "urlToImage": "https://img.zeit.de/wirtschaft/202501/timcookapplebild/wide__1300x731",
      "publishedAt": "20250111T10:27:18Z",
      "content": "Der AppleKonzern stellt sich gegen eine Aktionärsforderung, die DiversitätsProgramme zu beenden. Apple rief die Anteilseignerinnen auf, bei der Ende Februar \r\nanstehenden Hauptversammlung gegen den… [+1020 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Android Authority"
      },
      "author": "Ryan Haines",
      "title": "OnePlus stole Apple’s Dynamic Island, but made it way better",
      "description": "OnePlus's Live Alerts are a better version of Apple's Dynamic Island, and it's all because they disappear when I'm done.",
      "url": "https://www.androidauthority.com/onepluslivealertsappledynamicisland3512439/",
      "urlToImage": "https://www.androidauthority.com/wpcontent/uploads/2025/01/OnePlus13tinylivealert.jpg",
      "publishedAt": "20250111T13:00:13Z",
      "content": "Ive never really liked Apples Dynamic Island. Sure, the notch replacement is occasionally helpful for checking songs on Spotify, following directions in Apple Maps, and keeping up with my fantasy foo… [+6085 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Habr.com"
      },
      "author": "bodyawm (Timeweb Cloud)",
      "title": "Редчайший миниатюрный ARMноутбук из Кореи, который умеет превращаться в планшет — смотрим на Inkel MUd",
      "description": "Недавно я искал интересные девайсы на китайском аналоге авито и нашёл очень занимательный и необычный гаджет всеголишь за 400 рублей (4$) в состоянии ‭«на запчасти‭». Меня сразу привлёк интересный формфактор устройства в формате ноутбукатрансформера и надп…",
      "url": "https://habr.com/ru/companies/timeweb/articles/872316/#postcontentbody",
      "urlToImage": "https://habrastorage.org/getpro/habr/upload_files/a86/ba0/1e5/a86ba01e5f39d26334698d460833487a.jpg",
      "publishedAt": "20250111T14:05:08Z",
      "content": " 400 (4$) « ».   , «Neuron activation» Windows CE. , , . , MicroUSB  2008 !\r\n, ARM. , , , ARM . Windows CE,  NES Wolfenstein3D, !\r\n, OpenHardware Ben NanoNote ( !), , . (!) , . ,  30 (427 )… [+1365 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Techdirt"
      },
      "author": "Mike Masnick",
      "title": "CtrlAltSpeech: Zuck And Cover",
      "description": "CtrlAltSpeech is a weekly podcast about the latest news in online speech, from Mike Masnick and Everything in Moderation‘s Ben Whitelaw. Subscribe now on Apple Podcasts, Overcast, Spotify, Pocket Casts, YouTube, or your podcast app of choice — or go straigh…",
      "url": "https://www.techdirt.com/2025/01/10/ctrlaltspeechzuckandcover/",
      "urlToImage": "https://www.techdirt.com/wpcontent/themes/techdirt/assets/images/tdrectlogowhite.png",
      "publishedAt": "20250111T00:33:54Z",
      "content": "from the ctrlaltspeech dept\r\nCtrlAltSpeech is a weekly podcast about the latest news in online speech, from Mike Masnick and Everything in Moderation‘s Ben Whitelaw. \r\nSubscribe now on Apple Podc… [+660 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Xatakamovil.com"
      },
      "author": "Eva Rodriguez de Luis",
      "title": "El iPhone tiene un problema con las alarmas. Uno que dura ya casi un año sin solución",
      "description": "El pasado mes de abril Apple reconoció un problema con la función de alarma del iPhone que afecta a su confiabilidad. Vamos, que puedes poner el despertador de tu teléfono para ir a trabajar mañana y que llegada la hora, no reproduce ese sonido tan indeseable…",
      "url": "https://www.xatakamovil.com/apple/iphonetieneproblemaalarmasunoqueduracasianosolucion",
      "urlToImage": "https://i.blogs.es/44af47/modo/840_560.jpeg",
      "publishedAt": "20250111T09:00:38Z",
      "content": "El pasado mes de abril Apple reconoció un problema con la función de alarma del iPhone que afecta a su confiabilidad. Vamos, que puedes poner el despertador de tu teléfono para ir a trabajar mañana y… [+2421 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Wwwhatsnew.com"
      },
      "author": "Juan Diego Polo",
      "title": "Las novedades en CPU y GPU presentadas en el CES 2025",
      "description": "El CES 2025 ha llegado cargado de anuncios tecnológicos, y como era de esperar, la inteligencia artificial (IA) ha sido el eje principal de las presentaciones en el mundo de las CPU y GPU. Desde WWWhatsnew.com hemos recopilado los aspectos más destacados de l…",
      "url": "https://wwwhatsnew.com/2025/01/11/lasnovedadesencpuygpupresentadasenelces2025/",
      "urlToImage": "https://wwwhatsnew.com/wpcontent/uploads/2025/01/RepresentacionminimalistaysurrealistadelasinnovacionesenCPUyGPUpresentadasenelCES2025.webp",
      "publishedAt": "20250111T03:00:05Z",
      "content": "El CES 2025 ha llegado cargado de anuncios tecnológicos, y como era de esperar, la inteligencia artificial (IA) ha sido el eje principal de las presentaciones en el mundo de las CPU y GPU. Desde WWWh… [+5400 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Ifanr.com"
      },
      "author": "柯 铭源",
      "title": "早报|特斯拉发布新款 Model Y，雷军、余承东隔空回应/vivo 拿下 2024 年中国手机销量第一/茅台冰激凌被曝闭店停产",
      "description": "· 真我手机与《决胜巅峰》达成合作\n· 长城汽车亮相 CES 2025\n· 智谱 GLM 大模型在模型幻觉排行榜中居首#欢迎关注爱范儿官方微信公众号：爱范儿（微信号：ifanr），更多精彩内容第一时间为您奉上。\n爱范儿 |\n原文链接 ·\n查看评论 ·\n新浪微博",
      "url": "https://www.ifanr.com/1611944",
      "urlToImage": "https://s3.ifanr.com/images/ep/coverimages/qi_ha_lei_de_nv_ren_cover.jpg",
      "publishedAt": "20250111T00:50:36Z",
      "content": "Model Y \r\n1 10 Model Y 26.35 \r\n Model Y \r\n Model Y \r\n Model Y AI 4 8 FSD\r\n Model Y 5.9 4.3 CLTC 593 170kw CLTC 719 250kw\r\n Model Y 2025 2 28 3 \r\n Model Y 26.35 30.35 \r\n Model Y Model Y CEO YU7 SUV YU… [+2482 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "GSMArena.com"
      },
      "author": "Vlad",
      "title": "iPhone 15 Pro and iPhone 15 Pro Max refurbished models are now available in Europe",
      "description": "With the launch of the iPhone 16 Pro and iPhone 16 Pro Max in September, Apple stopped selling the iPhone 15 Pro and iPhone 15 Pro Max. So if for some reason you've been eyeing one of those 2023 models, you've been out of luck  until now.\n\nApple has now star…",
      "url": "https://www.gsmarena.com/iphone_15_pro_and_iphone_15_pro_max_refurbished_models_are_now_available_in_europenews66055.php",
      "urlToImage": "https://fdn.gsmarena.com/imgroot/news/25/01/iphone15pro15promaxrefurbishedeurope/952x498w6/gsmarena_000.jpg",
      "publishedAt": "20250111T05:17:01Z",
      "content": "With the launch of the iPhone 16 Pro and iPhone 16 Pro Max in September, Apple stopped selling the iPhone 15 Pro and iPhone 15 Pro Max. So if for some reason you've been eyeing one of those 2023 mode… [+1000 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Variety"
      },
      "author": "Jennifer Maas",
      "title": "‘Candy Crush Solitaire’ Mobile Game Launching in February",
      "description": "On the heels of the massive success of awardwinning indie pokerthemed deckbuilding game “Balatro,” mobile game giant King is getting in on the playingcard trend with the launch of “Candy Crush Solitaire.” Per King’s description for the new “Candy Crush” f…",
      "url": "https://variety.com/2025/gaming/news/candycrushsolitairemobilegame1236271650/",
      "urlToImage": "https://variety.com/wpcontent/uploads/2025/01/CandyCrushSolitaire.jpg?w=1000&h=563&crop=1",
      "publishedAt": "20250111T00:00:00Z",
      "content": "On the heels of the massive success of awardwinning indie pokerthemed deckbuilding game “Balatro,” mobile game giant King is getting in on the playingcard trend with the launch of “Candy Crush So… [+1454 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Touch Arcade"
      },
      "author": "Jared Nelson",
      "title": "Where Have We Been!? – The TouchArcade Show #610",
      "description": "Oh hello there. Yes, we ARE still alive, thank you for asking. We took an unintended monthlong hiatus due to me starting my new job as well as the holidays being as hectic as they always are, but we're back and with any luck we should be able to settle into …",
      "url": "https://toucharcade.com/2025/01/10/wherehavewebeenthetoucharcadeshow610/",
      "urlToImage": null,
      "publishedAt": "20250111T01:49:28Z",
      "content": "Oh hello there. Yes, we ARE still alive, thank you for asking. We took an unintended monthlong hiatus due to me starting my new job as well as the holidays being as hectic as they always are, but we… [+1465 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Geekissimo.com"
      },
      "author": "Antonio Mele",
      "title": "Gli ultimi aggiornamenti sul design dell’iPhone 17 a gennaio 2025",
      "description": "Ulteriori anticipazioni sulle prossime mosse di Apple per il lancio del nuovo iPhone 17",
      "url": "https://geekissimo.com/2025/01/11/gliultimiaggiornamentisuldesigndelliphone17agennaio2025/",
      "urlToImage": null,
      "publishedAt": "20250111T11:17:30Z",
      "content": "Probabili novità per il design del nuovo iPhone 17. Le linee del tanto atteso iPhone 17 di prossima generazione di quest’anno presumibilmente presenterà una transizione più fluida tra i bordi del dis… [+2345 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Smartworld.it"
      },
      "author": "Alessandro Nodari",
      "title": "Apple ora vende iPhone 15 Pro (e Pro Max) ricondizionati: perché preferirgli iPhone 16 Pro?",
      "description": "Da ieri Apple ha aggiornato la sua pagina degli iPhone ricondizionati con una grossa novità: ora è possibile acquistare iPhone...\r\nL'articolo Apple ora vende iPhone 15 Pro (e Pro Max) ricondizionati: perché preferirgli iPhone 16 Pro? sembra essere il primo su…",
      "url": "https://www.smartworld.it/news/iphone15proricondizionati.html",
      "urlToImage": "https://www.smartworld.it/images/2023/10/09/iphone15promaxdef042_1200x675.jpg",
      "publishedAt": "20250111T07:54:00Z",
      "content": "Da ieri Apple ha aggiornato la sua pagina degli iPhone ricondizionati con una grossa novità: ora è possibile acquistare iPhone 15 Pro e iPhone 15 Pro Max (oltre agli iPhone 15, che però sono in vendi… [+2080 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Smartworld.it"
      },
      "author": "Alessandro Nodari",
      "title": "Sono passati anni, ma Apple non ha ancora risolto il bug della sveglia su iPhone",
      "description": "Apple non ha ancora risolto quello che rischia di essere uno dei bug più persistenti di sempre su iPhone: quello...\r\nL'articolo Sono passati anni, ma Apple non ha ancora risolto il bug della sveglia su iPhone sembra essere il primo su Smartworld.",
      "url": "https://www.smartworld.it/news/bugsvegliaiphone.html",
      "urlToImage": "https://www.smartworld.it/images/2023/08/01/standbyios17_1200x675.jpg",
      "publishedAt": "20250111T13:36:00Z",
      "content": "Apple non ha ancora risolto quello che rischia di essere uno dei bug più persistenti di sempre su iPhone: quello della sveglia. E questo nonostante le prime segnalazioni risalgano ad almeno cinque an… [+2292 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Smartworld.it"
      },
      "author": "Vincenzo Ronca",
      "title": "iPhone 17 Air fa parlare di sé: super sottile e addio SIM",
      "description": "Torniamo a parlare di iPhone 17 Air, ovvero del prossimo modello di iPhone che sarà super sottile. Nelle ultime ore...\r\nL'articolo iPhone 17 Air fa parlare di sé: super sottile e addio SIM sembra essere il primo su Smartworld.",
      "url": "https://www.smartworld.it/news/iphone17airrumordesignsim.html",
      "urlToImage": "https://www.smartworld.it/images/2024/11/26/iphone17airia_1200x675.png",
      "publishedAt": "20250111T00:00:00Z",
      "content": "Torniamo a parlare di iPhone 17 Air, ovvero del prossimo modello di iPhone che sarà super sottile. Nelle ultime ore sono trapelati nuovi rumor che confermano l'addio alle SIM (ecco quali sono i migli… [+2007 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Smartworld.it"
      },
      "author": "Alessandro Nodari",
      "title": "Ecco come potrebbero essere le fotocamere degli iPhone 17 Pro: diversi miglioramenti, ma anche un \"piccolo\" passo indietro",
      "description": "Ormai sembra molto probabile che i prossimi iPhone 17 Pro saranno dotati di un blocco fotocamere \"in stile\" Pixel 9...\r\nL'articolo Ecco come potrebbero essere le fotocamere degli iPhone 17 Pro: diversi miglioramenti, ma anche un \"piccolo\" passo indietro sembr…",
      "url": "https://www.smartworld.it/news/fotocamereiphone17prorumor.html",
      "urlToImage": "https://www.smartworld.it/images/2024/12/12/iphone17profanrendering1_1200x675.jpg",
      "publishedAt": "20250111T11:30:00Z",
      "content": "Ormai sembra molto probabile che i prossimi iPhone 17 Prosaranno dotati di un blocco fotocamere \"in stile\" Pixel 9 Pro, ma quali saranno le caratteristiche di sensori e obiettivi? \r\nA rivelarcelo, un… [+2750 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Creative Bloq"
      },
      "author": "Ian Dean",
      "title": "Doom swaps blood for fine wine in this jokey remake",
      "description": "Doom: The Gallery Experience targets art history.",
      "url": "https://www.creativebloq.com/3d/videogamedesign/doomswapsbloodforfinewineinthisjokeyremake",
      "urlToImage": "https://cdn.mos.cms.futurecdn.net/ijiq2rwzuRrmscKQVz4NLQ120080.jpg",
      "publishedAt": "20250111T12:00:00Z",
      "content": "Doom has been everywhere and appeared on everything including Apple Watch and Doom has been remade by AI, but Doom Guy has never sipped wine and shot hot takes, preferring scenes dripping with blood … [+1871 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "La Vanguardia"
      },
      "author": "Fran Besora",
      "title": "Si quieres tener una gran cancelación de ruido al mejor precio, no puedo dejar de recomendarte estos auriculares",
      "description": "¿Tienes un iPhone o un dispositivo de Apple y estás en busca de unos nuevos auriculares? Te traigo la recomendación perfecta: los AirPods 4. Si quieres unos con cancelación de ruido y sin almohadillas, con más razón. Se trata de los últimos auriculares que ha…",
      "url": "https://www.lavanguardia.com/andro4all/compras/siquierestenerunagrancancelacionderuidoalmejorprecionopuedodejarderecomendarteestosauriculares",
      "urlToImage": "https://www.lavanguardia.com/andro4all/hero/2025/01/airpods4portada.1736325642.2786.jpeg?width=1200",
      "publishedAt": "20250111T14:00:58Z",
      "content": "Los AirPods 4 son la recomendación del 2025\r\n¿Tienes un iPhone o un dispositivo de Apple y estás en busca de unos nuevos auriculares? Te traigo la recomendación perfecta: los AirPods 4. Si quieres un… [+2698 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "La Vanguardia"
      },
      "author": "Fran Besora",
      "title": "Esta serie te volará el cerebro, está en streaming y es una joya",
      "description": "Este es un aviso para los amantes de la ciencia ficción, porque os traigo una serie que os volará la cabeza. ¿Alguna vez te has imaginado cómo habría sido tu vida si los acontecimientos hubieran sucedido de otra forma? ¿Te gusta la mecánica cuántica? ¿Te suen…",
      "url": "https://www.lavanguardia.com/andro4all/series/estaserietevolaraelcerebroestaenstreamingyesunajoya",
      "urlToImage": "https://www.lavanguardia.com/andro4all/hero/2025/01/materiaoscura.jpeg?width=1200",
      "publishedAt": "20250111T11:31:46Z",
      "content": "Esta serie es una de las mejores de ciencia ficción de 2024\r\nEste es un aviso para los amantes de la ciencia ficción, porque os traigo una serie que os volará la cabeza. ¿Alguna vez te has imaginado … [+2690 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Nextpit.de"
      },
      "author": "Carsten Drees",
      "title": "überMORGENPodcast: CES 2025 – Autos, KI & smarte Babywippen",
      "description": "In der neuesten Folge des überMORGENPodcast dreht sich alles um die CES in Las Vegas. Johanna spricht mit Fabi aus der Casa Casi über das Event.",
      "url": "https://www.nextpit.de/uebermorgenpodcastces2025autoskismartebabywippen",
      "urlToImage": "https://fs.npstatic.com/userfiles/7711048/image/uebermorgen_episodecesspezial.jpg",
      "publishedAt": "20250111T11:00:00Z",
      "content": "Ja, die CES ist mit schöner Regelmäßigkeit unser Auftakt ins TechJahr. Von Mobilität über Fernseher und SmartHome bis zu KI und Robotik wird dort alles gezeigt und diskutiert, was in der TechnikWe… [+1317 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Nextpit.de"
      },
      "author": "Edwin Kee",
      "title": "Für begrenze Zeit: Diese iOS und AndroidApps sind gratis erhältlich",
      "description": "Diese normalerweise kostenpflichtigen Apps und Spiele sind jetzt kostenlos erhältlich. Hier sind unsere Empfehlungen aus dem App Store und Play Store!",
      "url": "https://www.nextpit.de/kostenloseapps20250202",
      "urlToImage": "https://fs.npstatic.com/userfiles/7687254/image/NextPit_Apps.jpg",
      "publishedAt": "20250111T09:00:00Z",
      "content": "Ein neues Jahr bringt oft die Gelegenheit für ein neues Gerät mit sich. Wenn Ihr Euch ein neues Smartphone gegönnt habt, ist das vielleicht der perfekte Moment, um es mit einer Auswahl der neuesten A… [+4522 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Livedoor.biz"
      },
      "author": "news4vip2",
      "title": "【画像】Apple、簡単になったと言われるiPhone 16のバッテリー交換手順を公開ｗｗｗ",
      "description": "1: 以下、ニュー速クオリティでお送りします  2024/09/24(火) 17:15:59.32 ID:5H/bYz5J0  以下の部品を取り外してから作業を開始してください。  背面ガラス    https://support.apple.com/jajp/120642  引用元: ・https://nova.5ch.net/test/read.cgi/livegalileo/17271657",
      "url": "https://news4vip.livedoor.biz/archives/52545126.html",
      "urlToImage": "https://livedoor.blogimg.jp/news4vip2/imgs/c/1/c10d2875.jpg",
      "publishedAt": "20250111T10:15:22Z",
      "content": "1: 2024/09/24() 17:15:59.32 ID:5H/bYz5J0"
      },
      {
      "source": {
      "id": null,
      "name": "TalkAndroid"
      },
      "author": "Irene Okpanachi",
      "title": "How To Hide Images In Google Photos",
      "description": "Want to keep your embarrassing selfies under wraps? Google Photos’ Locked Folder lets you hide them without a trace.",
      "url": "https://www.talkandroid.com/497575hidegooglephotos/",
      "urlToImage": "https://www.talkandroid.com/wpcontent/uploads/2024/04/googlephotos.jpg",
      "publishedAt": "20250111T14:19:06Z",
      "content": "Our phones hold personal content in many forms. It could be a goofy video, a cherished family photo, or even important documents. Some of them can be embarrassing or deeply private. You wouldnt want … [+3776 chars]"
      },
      {
      "source": {
      "id": "focus",
      "name": "Focus"
      },
      "author": "FOCUS online",
      "title": "SmartphoneAbsatz  Apples verkauft weniger iPhone in China, Marktanteil sinkt",
      "description": "Die Geschäfte von Apple laufen nicht gut in China. Ein Experte erwartet weitere Einbußen beim iPhoneAbsatz. Chinesische Anbieter würden immer stärker.",
      "url": "https://www.focus.de/finanzen/boerse/smartphoneabsatzapplesverkauftwenigeriphoneinchinamarktanteilsinkt_id_260626265.html",
      "urlToImage": "https://p6.focus.de/img/fotos/id_259876407/timcook.jpg?im=Crop%3D%280%2C111%2C2048%2C1024%29%3BResize%3D%281200%2C627%29&impolicy=perceptual&quality=mediumHigh&hash=79f819ae20983e6e8c97a073f3f6276f47536906fea2f185e836ca5ac2c467fc",
      "publishedAt": "20250111T10:33:59Z",
      "content": "Die Geschäfte von Apple laufen nicht gut in China. Ein Experte erwartet weitere Einbußen beim iPhoneAbsatz. Chinesische Anbieter würden immer stärker.Apple verliert Marktanteile in China, wie CNBC b… [+1789 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Techbang.com"
      },
      "author": "WL.",
      "title": "如何在 iPhone 上啟用 Apple Intelligence？",
      "description": "Apple 在 iOS 18.1 中推出  Apple Intelligence Beta 版，但僅支援美式英文，因此想要搶先體驗得先設為英文介面。Apple 終於在 iOS 18.1 中，推出  Apple Intelligence Beta 版。在  Apple Intelligence Beta 版中，提供書寫工具讓用戶能改寫、校對和摘要幾乎任何書寫之處的文字，並應用在郵件、訊息、備忘錄、Pages 和第三方 App；還有Siri 有了更豐富的語言理解能力，在用戶說話打結時仍能跟上內容，而且在前後指令之間保…",
      "url": "https://www.techbang.com/posts/119470iphoneappleintelligence",
      "urlToImage": "https://cdn2.techbang.com/system/excerpt_images/119470/original/4480173cdccbf52faa8b9d2fa1606434.jpg?1730956607",
      "publishedAt": "20250111T06:30:00Z",
      "content": "Apple iOS 18.1  Apple Intelligence Beta  Apple Intelligence Beta Pages AppSiri App \r\niPhone \r\n Apple Intelligence Beta AI iPhone iPhone 15 Pro iPhone 16 A17 Pro Apple Intelligence\r\n<ul><li>iPhone 15 … [+522 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Inside.com.tw"
      },
      "author": "中央社",
      "title": "iPhone 16 印尼禁售困局未解 榮耀品牌搶進布局東南亞",
      "description": "蘋果投資十億美元在印尼生產 AirTag，盼取消 iPhone 16 禁售令，但印尼政府認為投資不足。談判膠著之際，中國榮耀手機進軍印尼，學者認為可能趁勢擴大市佔率。",
      "url": "https://www.inside.com.tw/article/37290indonesiaapple",
      "urlToImage": "https://bucketimage.inkmaginecms.com/version/social/1/image/2024/08/71e63b83846d40678d65ad8ccec14168.jpg",
      "publishedAt": "20250111T10:17:12Z",
      "content": "10 iPhone 16\r\n 40% Apple Inc. iPhone 16 9 iPhone 16 \r\nNick Amman 10 Batam AirTag iPhone 16 \r\nAgus Gumiwang Kartasasmita9 iPhone 16 TKDN\r\nAirTag iPhone \r\nHONOR9 10 30 \r\nINDEFIzzudin Al Farras AdhaiPho… [+80 chars]"
      },
      {
      "source": {
      "id": "techradar",
      "name": "TechRadar"
      },
      "author": "David Nield",
      "title": "ICYMI: the week's 7 biggest tech stories, from CES to Galaxy Unpacked to the return of Severance",
      "description": "Here's the biggest tech news stories, from CES 2025, Samsung, Apple TV, OnePlus and more for January 11, 2024.",
      "url": "https://www.techradar.com/tech/icymi11january2025",
      "urlToImage": "https://cdn.mos.cms.futurecdn.net/YRLQUNxA7Zu7XKvDxxJxi7120080.jpg",
      "publishedAt": "20250111T08:00:00Z",
      "content": "A new year always brings with it a slew of new devices to get excited about – and it all starts at CES.\r\nThe annual show in Las Vegas is a festival of technology, with everything from new TVs to lapt… [+6463 chars]"
      },
      {
      "source": {
      "id": "techradar",
      "name": "TechRadar"
      },
      "author": "jamie.richards@futurenet.com (Jamie Richards)",
      "title": "The Samsung Galaxy S25’s best feature will probably be one you can’t see",
      "description": "The Snapdragon 8 Elite chipset could see the basemodel S25 offer similar performance to leading Pro flagships, giving S24 users a tangible reason to upgrade.",
      "url": "https://www.techradar.com/phones/samsungphones/thesamsunggalaxys25sbestfeaturewillprobablybeoneyoucantsee",
      "urlToImage": "https://cdn.mos.cms.futurecdn.net/AgNSpdNcgcs4Y7CU3aYdG4120080.jpg",
      "publishedAt": "20250111T15:00:00Z",
      "content": "The next generation of Samsung flagships is nearly here – we’re expecting to hear official news of the Samsung Galaxy S25, S25 Plus, and S25 Ultra by the end of the month – and I suspect that this ye… [+5118 chars]"
      },
      {
      "source": {
      "id": "techradar",
      "name": "TechRadar"
      },
      "author": "desire.athow@futurenet.com (Desire Athow)",
      "title": "I am thrilled by Nvidia’s cute petaflop mini PC wonder, and it’s time for Jensen’s law: it takes 100 months to get equal AI performance for 1/25th of the cost",
      "description": "Nvidia’s desktop super computer is probably the greatest revolution in tech hardware since the IBM PC",
      "url": "https://www.techradar.com/pro/iamthrilledbynvidiascutepetaflopminipcwonderanditstimeforjensenslawyoullgetthesameaiperformancefor125thofthepricein100months",
      "urlToImage": "https://cdn.mos.cms.futurecdn.net/Ud69N9wpjYoWXzfM8xySSC120080.jpg",
      "publishedAt": "20250111T08:02:00Z",
      "content": "Nobody really expected Nvidia to release something like the GB10. After all, why would a tech company that transformed itself into the most valuable firm ever by selling parts that cost hundreds of t… [+7566 chars]"
      },
      {
      "source": {
      "id": "techradar",
      "name": "TechRadar"
      },
      "author": "mark.wilson@futurenet.com (Mark Wilson)",
      "title": "The 11 most exciting tech trends of 2025, according to CES 2025",
      "description": "CES 2025 is packed with futuristic tech, but these are the 11 trends that'll have the biggest impact on our gadget lives in 2025.",
      "url": "https://www.techradar.com/techevents/the11mostexcitingtechtrendsof2025accordingtoces2025",
      "urlToImage": "https://cdn.mos.cms.futurecdn.net/ooXPXwbovmdMmduvhj8kYc120080.jpg",
      "publishedAt": "20250111T12:05:20Z",
      "content": "CES 2025 is over, and a frazzled TechRadar team has returned with strange memories of weird furry robots and light therapy face masks. Yes, CES can be an odd place, but it's also a reliable taster of… [+14777 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Forbes"
      },
      "author": "David Phelan, Senior Contributor, \n David Phelan, Senior Contributor\n https://www.forbes.com/sites/davidphelan/",
      "title": "Apple Brings Back iPhone 15 Pro For First Time—At Lower Price",
      "description": "A surprisingly early move sees the iPhone 15 Pro (capable of Apple Intelligence) available on Apple’s refurbished site in selected countries.",
      "url": "https://www.forbes.com/sites/davidphelan/2025/01/11/applebringsbackiphone15proforfirsttimeatlowerprice/",
      "urlToImage": "https://imageio.forbes.com/specialsimages/imageserve/6595c7c14984cd1b97cc1b63/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
      "publishedAt": "20250111T09:00:33Z",
      "content": "Apple has different sales strategies for its regular iPhones and the Pro handsets: the regular models will stay in the range for several years, but if you want the Pro, you need to buy it in the 12 m… [+2034 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Forbes"
      },
      "author": "Davey Winder, Senior Contributor, \n Davey Winder, Senior Contributor\n https://www.forbes.com/sites/daveywinder/",
      "title": "Critical Warning For 100 Million Apple Users—New Hack Attack Confirmed",
      "description": "Security researchers have warned that a new variant of the Banshee credentialstealer is targeting Apple’s 100 million macOS users. Here’s what you need to know.",
      "url": "https://www.forbes.com/sites/daveywinder/2025/01/11/100millionappleuserswarnedaboutnewcredentialstealinghackattack/",
      "urlToImage": "https://imageio.forbes.com/specialsimages/imageserve/678115002c32e07c52f2bc0b/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
      "publishedAt": "20250111T10:51:49Z",
      "content": "New warning for millions of Apple users issued.\r\nAnadolu via Getty Images\r\nUpdate, Jan. 11, 2025: This story, originally published Jan. 10, now includes comments from a number of security experts abo… [+5843 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Forbes"
      },
      "author": "Ewan Spence, Senior Contributor, \n Ewan Spence, Senior Contributor\n https://www.forbes.com/sites/ewanspence/",
      "title": "Samsung Galaxy S25 Ultra PreOrder And Release Dates",
      "description": "Registrations are already open, but when can you preorder the Samsung Galaxy S25 Ultra, and when will it go on sale?",
      "url": "https://www.forbes.com/sites/ewanspence/2025/01/10/samsunggalaxys25ultraregisterpreorderlaunchreleasedatenewgalaxy/",
      "urlToImage": "https://imageio.forbes.com/specialsimages/imageserve/65a9b89b23b1dcd269a93c1f/0x0.jpg?format=jpg&crop=958,539,x0,y0,safe&height=900&width=1600&fit=bounds",
      "publishedAt": "20250111T11:00:20Z",
      "content": "Samsung Galaxy S24 Ultra, Galaxy Unpacked 2024, London, United Kingdom \r\nEWAN SPENCE\r\nSamsung has confirmed that the next Galaxy Unpacked event will take place later this month. There will, no doubt,… [+2484 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Forbes"
      },
      "author": "Zak Doffman, Contributor, \n Zak Doffman, Contributor\n https://www.forbes.com/sites/zakdoffman/",
      "title": "Microsoft Warning As Foreign Hackers Access Accounts—AI Attacks Bypass Security",
      "description": "The 2025 AI threat landscape suddenly gets worse—and we’re still in week two. Here’s what you need to know.",
      "url": "https://www.forbes.com/sites/zakdoffman/2025/01/11/microsoftwarningasforeignhackersaccessaccountsaiattacksbypasssecurity/",
      "urlToImage": "https://imageio.forbes.com/specialsimages/imageserve/6782728ef0d77ff7f75b62c7/0x0.jpg?format=jpg&crop=873,540,x164,y213,safe&height=900&width=1600&fit=bounds",
      "publishedAt": "20250111T13:43:01Z",
      "content": "Microsoft takes legal action as AI attacks discovered\r\nAFP via Getty Images\r\nThe new year is not yet two weeks old, and already the AI threat landscape is proving as dangerous as feared. Multiple cyb… [+2743 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Forbes"
      },
      "author": "Davey Winder, Senior Contributor, \n Davey Winder, Senior Contributor\n https://www.forbes.com/sites/daveywinder/",
      "title": "U.K. Government Warns Of Sex Toy Hacking Danger",
      "description": "Hackers could cause harm by compromising your sex toys, the U.K. government has warned—here’s what you need to know.",
      "url": "https://www.forbes.com/sites/daveywinder/2025/01/11/ukgovernmentwarnsofsextoyhackingdanger/",
      "urlToImage": "https://imageio.forbes.com/specialsimages/imageserve/678277f42eaa1a4656c83298/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
      "publishedAt": "20250111T14:31:46Z",
      "content": "Beware of sex toy hackers, U.K. government warns.\r\ngetty\r\nFour years ago I reported how hackers could remotely lock a chastity belt with potentially disastrous consequences. The U.K. Department for S… [+2763 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Forbes"
      },
      "author": "Paul Monckton, Senior Contributor, \n Paul Monckton, Senior Contributor\n https://www.forbes.com/sites/paulmonckton/",
      "title": "New Google Leak Reveals MuchNeeded Google Photos Feature Upgrade",
      "description": "Google Photos' Photo Stacks Feature could be getting a muchneeded upgrade, giving users manual control over stacking.",
      "url": "https://www.forbes.com/sites/paulmonckton/2025/01/11/newgoogleleakrevealsmuchneededgooglephotosfeatureupgrade/",
      "urlToImage": "https://imageio.forbes.com/specialsimages/imageserve/6453785544c17b79714bd1ec/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
      "publishedAt": "20250111T12:39:19Z",
      "content": "Google is testing a powerful upgrade to one of its more useful Google Photos features\r\nSOPA Images/LightRocket via Getty Images\r\nGoogle is testing a new Google Photos enhancement that could dramatica… [+3704 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Forbes"
      },
      "author": "Joseph V Micallef, Contributor, \n Joseph V Micallef, Contributor\n https://www.forbes.com/sites/joemicallef/",
      "title": "The Temecula Valley Produces Outstanding Wine Well Worth Discovering",
      "description": "The Temecula Valley is one of the most interesting and innovative AVAs. Here’ a brief overview of the region and tasting notes on a representative selection of its wines.",
      "url": "https://www.forbes.com/sites/joemicallef/2025/01/11/thetemeculavalleyproducesoutstandingwinewellworthdiscovering/",
      "urlToImage": "https://imageio.forbes.com/specialsimages/imageserve/677b213a2b8ffb677efc89a5/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
      "publishedAt": "20250111T11:00:00Z",
      "content": "Temecula vineyard is Southern California's wine country, with Santa Ana Mountains in the background\r\ngetty\r\nThe Temecula Valley is one of Californias relatively new wineproducing regions, but it has… [+11680 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Forbes"
      },
      "author": "Joseph V Micallef, Contributor, \n Joseph V Micallef, Contributor\n https://www.forbes.com/sites/joemicallef/",
      "title": "How Diplomático Rum Crafts Its Exceptional Spirits",
      "description": "Diplomático Rum is a renowned Venezuelan rum brand with a rich history. Below is a brief background on the company and tasting notes on its core rum range.",
      "url": "https://www.forbes.com/sites/joemicallef/2025/01/11/howdiplomticorumcraftsitsexceptionalspirits/",
      "urlToImage": "https://imageio.forbes.com/specialsimages/imageserve/6764ccb56261c40002022ad7/0x0.jpg?format=jpg&crop=1000,1278,x0,y0,safe&height=900&width=1600&fit=bounds",
      "publishedAt": "20250111T11:30:00Z",
      "content": "Part of Diplomático Rum's range\r\nPhoto, courtesy Diplomático Rum\r\nDiplomático Rum is a renowned Venezuelan rum brand with a rich history and a meticulous production process. Below is a brief backgrou… [+6063 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Forbes"
      },
      "author": "William Baldwin, Senior Contributor, \n William Baldwin, Senior Contributor\n https://www.forbes.com/sites/baldwin/",
      "title": "New York's Outlandish Plan To Grab $75 Billion From Big Oil",
      "description": "Albany's grand idea: tackle the climate crisis by extracting cash from other parts of the globe.",
      "url": "https://www.forbes.com/sites/baldwin/2025/01/11/newyorksoutlandishplantograb75billionfrombigoil/",
      "urlToImage": "https://imageio.forbes.com/specialsimages/imageserve/67817c7c532a69838dcf1693/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
      "publishedAt": "20250111T11:30:00Z",
      "content": "Albany's grand idea: tackle the climate crisis by extracting cash from other parts of the globe.\r\nState budgets are strained and tax hikes might make voters angry or businesses inclined to leave. Sol… [+8963 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Forbes"
      },
      "author": "Zak Doffman, Contributor, \n Zak Doffman, Contributor\n https://www.forbes.com/sites/zakdoffman/",
      "title": "Google Starts Tracking All Your Devices In 6 Weeks—Forget Chrome And Android",
      "description": "Say hello to 2025—the way you're tracked has suddenly changed. Here's what you need to know.",
      "url": "https://www.forbes.com/sites/zakdoffman/2025/01/11/googlestartstrackingallyourdevicesin6weeksforgetchromeandandroid/",
      "urlToImage": "https://imageio.forbes.com/specialsimages/imageserve/677ee5daf78ee891fe5fd017/0x0.jpg?format=jpg&crop=2697,1583,x177,y40,safe&height=900&width=1600&fit=bounds",
      "publishedAt": "20250111T14:51:08Z",
      "content": "Say hello to 2025you will be tracked.\r\ngetty\r\nUpdated on January 11 with further information on Googles new mobile privacy challenge in the U.S. courts, and parallels to its controversial digital fin… [+11125 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Hdblog.it"
      },
      "author": "HDblog.it",
      "title": "Mythic Quest: il trailer della stagione 4 promette risate e caos",
      "description": "Il ritorno della serie Apple TV+ è previsto per il 29 gennaio, con 10 nuovi episodi",
      "url": "https://www.hdblog.it/apple/articoli/n605094/mythicqueststagione4trailer/",
      "urlToImage": "https://hd2.tudocdn.net/1209139?w=1920",
      "publishedAt": "20250111T07:50:00Z",
      "content": "Apple TV+ ha rilasciato il primo trailer della tanto attesa stagione 4 di Mythic Quest, la serie comica ambientata nel mondo dello sviluppo di videogiochi. Il debutto è fissato per il 29 gennaio 2025… [+1358 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Hdblog.it"
      },
      "author": "HDblog.it",
      "title": "Come sarà iPhone 17 Pro? Miglioramenti e uno strano downgrade",
      "description": "iPhone 17 Pro dovrebbe presentare più o meno queste caratteristiche",
      "url": "https://www.hdblog.it/smartphone/articoli/n605108/comesaraiphone17pro2/",
      "urlToImage": "https://hd2.tudocdn.net/1223683?w=1920",
      "publishedAt": "20250111T07:00:00Z",
      "content": "Come ogni anno, Apple lancerà i nuovi iPhone a settembre, con ogni probabilità entro i primi quindici giorni. I fan hanno già iniziato il conto alla rovescia, insieme alla caccia ai rumor sulle carat… [+2111 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Hdblog.it"
      },
      "author": "HDblog.it",
      "title": "iPhone 17 Air sarà sottilissimo e dirà addio alla SIM fisica per gli ultimi rumor",
      "description": "Il noto analista MingChi Kuo dice la sua.",
      "url": "https://www.hdblog.it/smartphone/articoli/n605117/iphone17airsottilesimfisicaesimdimensioni/",
      "urlToImage": "https://hd2.tudocdn.net/1223833?w=1920",
      "publishedAt": "20250111T09:00:00Z",
      "content": "Ormai la quantità di voci su iPhone 17 Air ha da tempo raggiunto quella soglia critica per cui non ci chiediamo più se davvero ci sarà, ma come sarà. E di anticipazioni in questo senso ne abbiamo avu… [+1627 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Hdblog.it"
      },
      "author": "HDblog.it",
      "title": "Al CES novità per la ricarica wireless, incluso un caricatore che \"cerca\" il device!",
      "description": "C'è anche la certificazione \"Qi 2 Ready\": compatibile per la ricarica, ma niente magneti.",
      "url": "https://www.hdblog.it/tech/articoli/n605141/cescaricatoreqibobinemobilipanasonic/",
      "urlToImage": "https://hd2.tudocdn.net/1223886?w=1920",
      "publishedAt": "20250111T11:00:00Z",
      "content": "Tra le tantissime novità del CES 2025 c'è anche qualche aggiornamento dello standard di ricarica wireless Qi: intanto arriva la certificazione Qi 2 Ready, che significa che tecnicamente un dispositiv… [+2111 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Hdblog.it"
      },
      "author": "HDblog.it",
      "title": "Gli incendi a Los Angeles causano molti problemi all'industria di Hollywood",
      "description": "Un elenco delle produzioni interrotte e degli eventi cancellati/posticipati. Incluse le nomination degli Oscar.",
      "url": "https://www.hdblog.it/spettacolo/articoli/n605113/incendilosangelesoscareventihollywoood/",
      "urlToImage": "https://hd2.tudocdn.net/1078281?w=1920",
      "publishedAt": "20250111T09:15:00Z",
      "content": "I gravissimi incendi che stanno coinvolgendo Los Angeles e dintorni hanno ripercussioni anche sulle attività di Hollywood. Tra eventi cancellati e produzioni interrotte, le segnalazioni si moltiplica… [+1566 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "ComputerBase"
      },
      "author": "Dennis Krause",
      "title": "TikTokBann in den USA: Oberstes Gericht tendiert dazu gegen Plattform zu urteilen",
      "description": "Die Richter am obersten Gerichtshof der USA beschäftigen sich aktuell mit einer Klage von TikTok, um den drohenden TikTokBann aufzuhalten. Das Gericht hat die Verhandlungen zwar vorgezogen, doch die Richter scheinen nicht gewillt zu sein, dem Bann notfalls i…",
      "url": "https://www.computerbase.de/news/apps/tiktokbannindenusaoberstesgerichttendiertdazugegenplattformzuurteilen.90993/",
      "urlToImage": "https://pics.computerbase.de/1/1/5/6/2/8f48dbea3965ad9cb/article1280x720.2441fa88.jpg",
      "publishedAt": "20250111T14:30:00Z",
      "content": "Die Richter am obersten Gerichtshof der USA beschäftigen sich aktuell mit einer Klage von TikTok, um den drohenden TikTokBann aufzuhalten. Das Gericht hat die Verhandlungen zwar vorgezogen, doch die… [+4055 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Robbwolf.com"
      },
      "author": "Robb Wolf",
      "title": "Constant Sinus Congestion, Peptide Therapy, Next Viral Wave | THRR202",
      "description": "Please Subscribe and Review: Apple Podcasts | RSS Submit your questions for the podcast here News Topic:   Bernie Sanders on X El Gato Malo: a crisis of competence Show Notes: The Free Press: TGIF Hellfire Peptides and bioregulators Basis Health and Performan…",
      "url": "https://robbwolf.com/2025/01/11/constantsinuscongestionpeptidetherapynextviralwavethrr202/",
      "urlToImage": "https://robbwolf.com/wpcontent/uploads/2023/02/THRRpodcastcard2023.png",
      "publishedAt": "20250111T14:58:18Z",
      "content": "Please Subscribe and Review: Apple Podcasts | RSS\r\nNews Topic:\r\nBernie Sanders on X\r\nEl Gato Malo: a crisis of competence\r\nShow Notes:\r\nThe Free Press: TGIF Hellfire\r\nPeptides and bioregulators\r\nBasi… [+6606 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Antyweb.pl"
      },
      "author": "Kamil Świtalski",
      "title": "Nudzisz się? Odpalaj Apple Arcade  7 hitów właśnie wleciało do oferty!",
      "description": "Apple Arcade nie zwalnia tempa. Do katalogu usługi dołączyło właśnie 7 nowych tytułów  a gigant zapowiedział trzy kolejne gorące premiery!",
      "url": "https://antyweb.pl/nudziszsieodpalajapplearcade7hitowwlasniewlecialodooferty",
      "urlToImage": "https://static.antyweb.pl/img/w_1250,h_550/wpcontent/uploads/2023/08/mlgxjgtimh/aarcade.jpg",
      "publishedAt": "20250111T08:00:51Z",
      "content": "Apple nie prónuje jeeli chodzi o rozbudow katalogu ich usugi Arcade. Co kilka tygodni lduj tam wieutkie tytuy. S od siebie bardzo zrónicowane, ale maj jeden wspólny element: jakociowo trzymaj bardzo … [+2340 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Iphoneitalia.com"
      },
      "author": "Giuseppe Migliorino",
      "title": "Zuckerberg accusa Apple di mancanza di innovazione",
      "description": "Mark Zuckerberg critica Apple per la sua mancanza di innovazione dall'iPhone e lancia accuse sul Vision Pro e sull'\"Apple Tax\".\nLink all'articolo originale: Zuckerberg accusa Apple di mancanza di innovazione",
      "url": "https://www.iphoneitalia.com/833456/zuckerbergaccusaappledimancanzadiinnovazione",
      "urlToImage": "https://static.iphoneitalia.com/wpcontent/uploads/2019/05/markzuckerberg.jpg",
      "publishedAt": "20250111T09:01:41Z",
      "content": "Durante una recente intervista con Joe Rogan, il CEO di Meta, Mark Zuckerberg, ha lanciato nuove critiche ad Apple, accusandola di mancare di innovazione dai tempi dei primi iPhone. Le dichiarazioni,… [+3163 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Iphoneitalia.com"
      },
      "author": "Giuseppe Migliorino",
      "title": "Quanto ha guadagnato Tim Cook nel 2024?",
      "description": "Tim Cook ha guadagnato $74,6 milioni nel 2024, un aumento rispetto al 2023 ma inferiore ai $99 milioni del 2022.\nLink all'articolo originale: Quanto ha guadagnato Tim Cook nel 2024?",
      "url": "https://www.iphoneitalia.com/833459/quantohaguadagnatotimcooknel2024",
      "urlToImage": "https://static.iphoneitalia.com/wpcontent/uploads/2025/01/TimCookMacBook16x91.jpeg",
      "publishedAt": "20250111T09:05:23Z",
      "content": "Apple ha recentemente pubblicato il suo annuale proxy statement, rivelando che il CEO Tim Cook ha guadagnato un totale di $74,6 milioni nel 2024. Questo dato segna un aumento rispetto ai $63,2 milion… [+2380 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Iphoneitalia.com"
      },
      "author": "Giuseppe Migliorino",
      "title": "iPhone 17 Air, nvità su spessore e slot SIM",
      "description": "Il nuovo iPhone 17 Air potrebbe arrivare con design ultra sottile da 5,5 mm, eSIM e specifiche premium.\nLink all'articolo originale: iPhone 17 Air, nvità su spessore e slot SIM",
      "url": "https://www.iphoneitalia.com/833451/iphone17airnvitasuspessoreeslotsim",
      "urlToImage": "https://static.iphoneitalia.com/wpcontent/uploads/2024/10/iPhone17air.webp",
      "publishedAt": "20250111T08:43:09Z",
      "content": "Le ultime indiscrezioni sul nuovo iPhone 17 Air, atteso per il lancio a settembre 2025, stanno facendo molto discutere. Secondo il noto analista della catena di approvvigionamento Apple, MingChi Kuo… [+2713 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Slate Magazine"
      },
      "author": "Emily Peck, Felix Salmon, and Elizabeth Spiers",
      "title": "The Complications Are Spreading Like Wildfire",
      "description": "It’s not just their reputations at stake; it’s their livelihoods.",
      "url": "https://slate.com/podcasts/slatemoney/2025/01/businessthelafiresraiselaborandinsuranceissues",
      "urlToImage": "https://compote.slate.com/images/0ad4cce01643405eb092a65cc2f24b9e.jpeg?crop=1560%2C1040%2Cx0%2Cy0&width=1560",
      "publishedAt": "20250111T10:30:00Z",
      "content": "This week: Los Angeles continues to try and fight back its most devastating wildfire ever. Felix Salmon, Emily Peck, and Elizabeth Spiers discuss the fires raging in Los Angles and how they highlight… [+939 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Actualidadiphone.com"
      },
      "author": "Luis Padilla",
      "title": "Podcast 16×11: Resumen de 2024 y expectativas de 2025",
      "description": "Resumen del año 2024, con nuestras impresiones de todo lo que Apple nos ha ofrecido este año, y lo que esperamos para el próximo",
      "url": "https://www.actualidadiphone.com/podcast16x11resumende2024yexpectativasde2025/",
      "urlToImage": "https://www.actualidadiphone.com/wpcontent/uploads/2023/02/PodcastPortada.jpg",
      "publishedAt": "20250111T13:50:57Z",
      "content": "Acaba del año 2024 y analizamos todas las novedades que Apple ha lanzado, lo que más nos ha gustado y lo que nos ha decepcionado. También hablamos de lo que esperamos para el año próximo, que es lo q… [+1052 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Actualidadiphone.com"
      },
      "author": "Actualidad iPhone",
      "title": "La RAE ha publicado su biblioteca digital, así puedes gozarla en tu iPad",
      "description": "La Real Academia Española (RAE) ha dado un paso significativo en la difusión de la literatura en español al lanzar su Biblioteca Digital para tu iPad.",
      "url": "https://www.actualidadiphone.com/raebibliotecadigitalipad/",
      "urlToImage": "https://www.actualidadiphone.com/wpcontent/uploads/2025/01/RAE.jpg",
      "publishedAt": "20250111T13:29:00Z",
      "content": "La Real Academia Española (RAE) ha dado un paso significativo en la difusión de la literatura en español al lanzar su Biblioteca Digital, una plataforma que ofrece acceso gratuito a más de 4.800 obra… [+2060 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "3dnews.ru"
      },
      "author": null,
      "title": "Apple теряет долю рынка в Китае: eSIM тормозят продажи iPhone",
      "description": "Эксперты прогнозируют снижение поставок iPhone и доли Apple на китайском рынке в 2025 году. Среди причин указывается ставка компании на устройства с eSIM (цифровая симкарта) и отсутствие интереса пользователей к функции искусственного интеллекта Apple Intell…",
      "url": "https://3dnews.ru/1116588/appleteryaetdolyurinkavkitaeesimtormozyatprodagiiphone",
      "urlToImage": "https://3dnews.ru/assets/external/illustrations/2025/01/11/1116588/apple_743.jpg",
      "publishedAt": "20250111T03:08:00Z",
      "content": "iPhone Apple 2025 . eSIM ( ) Apple Intelligence.\r\n: Apple\r\nCNBC,  (MingChi Kuo) KGI Securities, Apple, iPhone 2025 . iPhone SE 4 , iPhone 6 % .\r\n, Apple, , iPhone. , , eSIM, . « , », — .\r\n, 2024 ,… [+106 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Tinhte.vn"
      },
      "author": "noreply@tinhte.vn (P.W), P.W",
      "title": "CES2025: Chi tiết những thứ AMD vừa giới thiệu, từ chip X3D 16 nhân đến card RX 9070 XT",
      "description": "Giống hệt như những sự kiện và triển lãm, hội chợ công nghệ nổi bật thường niên, tại CES 2025, AMD đã giới thiệu hàng loạt những sản phẩm mới nhắm tới thị trường tiêu dùng. Nếu như Intel chỉ ra mắt những con chip Core Ultra cho laptop kiến trúc…",
      "url": "https://tinhte.vn/thread/ces2025chitietnhungthuamdvuagioithieutuchipx3d16nhandencardrx9070xt.3941608/",
      "urlToImage": "https://photo2.tinhte.vn/data/attachmentfiles/2025/01/8611105_amdces41736199029460.jpg",
      "publishedAt": "20250111T09:59:32Z",
      "content": "keynote ti CES 2025, AMD cha công b c th s Compute Unit trên mi sn phm card ha máy bàn kin trúc RDNA 4, mà cp sâu hn ti công ngh nâng cp phân gii hình nh ti u tc khung hình mà h phát trin, FSR th h t… [+5379 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "3dnews.ru"
      },
      "author": null,
      "title": "Представлен комплект для автоматического уничтожения данных на iPad в случае смерти владельца",
      "description": "Некоторые новинки на выставке CES 2025 больше похожи на суровый розыгрыш, и ярким тому примером является комплект In Case of Death. В него входит планшетный компьютер, который намеренно выводится из строя в случае смерти владельца. Источник изображения: zuguc…",
      "url": "https://3dnews.ru/1116595/predstavlenkomplektdlyasamounichtogeniyaipadvsluchaesmertivladeltsa",
      "urlToImage": "https://3dnews.ru/assets/external/illustrations/2025/01/11/1116595/deathipad.jpg",
      "publishedAt": "20250111T08:31:00Z",
      "content": "CES 2025 , In Case of Death. , .\r\n: zugucase.com\r\nZugu. 11 Apple iPad, , . . « , , , , In Case of Death, „ “, », — .\r\n , , iPad , . , , : , , ( «Never Gonna Give You Up») X — . $1500."
      },
      {
      "source": {
      "id": null,
      "name": "Sspai.com"
      },
      "author": "Matrix机器人",
      "title": "Matrix 圆桌 | 少数派们的 11 张 2024 年度新专辑",
      "description": "你的年度专辑是什么？今年有没有发现什么新歌手、好声音？欢迎在评论区分享给大家。查看全文",
      "url": "https://sspai.com/post/95525",
      "urlToImage": "https://cdnfile.sspai.com/2025/1/10/article/09deac5708d1d1021cb724335f457efb.png",
      "publishedAt": "20250111T07:00:00Z",
      "content": "2024 app\r\n Matrix 2024 11 \r\nGreen DaySaviors\r\n@2\r\nTMD \r\nAmerican Idiot21st Century BreakdownGreen Day RedioheadQueen \r\nGreen Day SaviorsPogo \r\n Billie Father to a Son+\r\nNorah JonesVisions\r\n@Kasper No… [+1213 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "PC Gamer"
      },
      "author": "Rick Lane",
      "title": "Wormhole is an impeccable arcade revival of Snake that plays like it fell off the back of Derek Yu's van",
      "description": "The original mobile game gets the roguelike treatment.",
      "url": "https://www.pcgamer.com/games/roguelike/wormholeisanimpeccablearcaderevivalofsnakethatplayslikeitfelloffthebackofderekyusvan/",
      "urlToImage": "https://cdn.mos.cms.futurecdn.net/zJth8pm7zffCtk56UoefMi120080.jpg",
      "publishedAt": "20250111T15:00:00Z",
      "content": "PC gaming is incredibly adept at replicating the past, whether in the breakneck momentum of a boomer shooter, or the flickering polygons of a PS1 survival horror throwback. But one experience that's … [+6158 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Everythingeverywhere.com"
      },
      "author": "Gary Arndt",
      "title": "Gnosticism",
      "description": "Podcast Transcript In the first and second centuries, a Christian sect found a wide following throughout the Roman world.  They weren’t your normal runofthemill Christians. They had beliefs that were nothing like those of any Christian sect today, and they…",
      "url": "https://everythingeverywhere.com/gnosticism/",
      "urlToImage": "https://photos.smugmug.com/Other/nhRFP2/PodcastImages/irQgDTpL/0/NXVsnpT29DF27VmFxCrDcwhdB6grJ7j8dqLRJkNCS/L/1650epartL.jpg",
      "publishedAt": "20250111T07:58:44Z",
      "content": "Subscribe Apple | Spotify | Amazon |iHeart Radio | Castbox | Podcast Republic | RSS | Patreon\r\nIn the first and second centuries, a Christian sect found a wide following throughout the Roman world. \r… [+12923 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Cult of Mac"
      },
      "author": "Luke Dormehl",
      "title": "Today in Apple history: iPod shuffle randomizes our music",
      "description": "On January 11, 2005, Steve Jobs introduced the iPod shuffle, a cheaper Apple music player that lacked a display and played songs at random.\n(via Cult of Mac  Apple news, rumors, reviews and howtos)",
      "url": "https://www.cultofmac.com/applehistory/todayapplehistoryipodshufflerandomizesmusic",
      "urlToImage": "https://www.cultofmac.com/wpcontent/uploads/2011/10/IPod_shuffle_1G.jpg",
      "publishedAt": "20250111T14:35:23Z",
      "content": "January 11, 2005: Steve Jobs introduces the iPod shuffle, an entrylevel music player that lacks a display. The device randomly shuffles the audio files it holds, but lets users easily skip songs the… [+2054 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Cult of Mac"
      },
      "author": "Rajesh Pandey",
      "title": "iPhone 17 Air may be nearly as slim as M4 iPad Pro",
      "description": "The iPhone 17 Air could be slimmer than rumored, measuring just 5.5mm. But this thinness may come with some compromises.\n(via Cult of Mac  Apple news, rumors, reviews and howtos)",
      "url": "https://www.cultofmac.com/news/iphone17airmaybenearlyasslimasm4ipadpro",
      "urlToImage": "https://www.cultofmac.com/wpcontent/uploads/2024/02/iPhone17Leaks.jpg",
      "publishedAt": "20250111T05:57:19Z",
      "content": "Apples upcoming iPhone 17 Air might be slimmer than initially rumored. All reports suggested the phone could have a 6mm thin waistline.\r\nHowever, a reputed Apple analyst believes the iPhone 17 Air wi… [+1830 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "[Removed]"
      },
      "author": null,
      "title": "[Removed]",
      "description": "[Removed]",
      "url": "https://removed.com",
      "urlToImage": null,
      "publishedAt": "20250111T05:18:47Z",
      "content": "[Removed]"
      },
      {
      "source": {
      "id": null,
      "name": "Livedoor.biz"
      },
      "author": "sg3lqj86",
      "title": "【結果】ネット民「モバイルバッテリーは燃えるゴミやｗ（ｷｬｯｷｬ」ﾎﾟｰｲ →",
      "description": "1 ：名無し 火災は3日午後9時ごろ、川口市 朝日環境センターの、収集したごみを一時的にためる「ごみピット」で発生。けが人はいなかったが、鎮火するまでに約27時間かかった。出火原因は調査中だが、ごみに発火物が混じっていたとみられている。　このごみ焼却施設の火災...",
      "url": "https://lifehack2ch.livedoor.biz/archives/51904738.html",
      "urlToImage": "https://livedoor.blogimg.jp/sg3lqj86/imgs/9/7/975320f7.jpg",
      "publishedAt": "20250111T12:00:51Z",
      "content": "5 \r\n25/01/10 11:34 ID:GzYkZfsP.net10 25/01/10 11:37 ID:bG1qOQ4y.net11 25/01/10 11:37 ID:3UEH3XXU.net14 () \r\n25/01/10 11:38 ID:0XfLScLU.net20 &gt;&gt;14\r\n25/01/10 11:40 ID:hP/1Awoh.net16 25/01/10 11:3… [+430 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Roomie.jp"
      },
      "author": "かいサポ（セール情報）",
      "title": "レグザさんありがとう、圧巻の65V型4Kテレビがまさかの13万円OFF #Amazonセール",
      "description": "※こちらは「かいサポ（お買いものサポーターチーム）」が編集・執筆した記事です。  Amazon（アマゾン）で毎日開催されているタイムセール。 本日2025年1月11日は、スポーツ中継やネット動画などの速い動きもスムーズに美しく表現する、REGZA（レグザ）の「65インチ4K液晶テレビ 65Z570L」やケーブルや小物などでごちゃつきがちなテレビの周りをスッキリまとめてくれる山崎実業の「テ",
      "url": "https://www.roomie.jp/2025/01/1392776/",
      "urlToImage": "https://media.loomapp.com/roomie/dist/images/2025/01/r13.jpg?w=1200",
      "publishedAt": "20250111T11:15:55Z",
      "content": "Amazon\r\n2025111REGZA654K 65Z570L\r\n202511117\r\n12AmazonAudible30\r\nKindle Unlimited20030\r\n 65 4K55%OFF\r\nREGZA654K 65Z570L55\r\n3\r\n 27%\r\nYamazaki 27%\r\nVESAHDD\r\n30\r\nYamazaki 30%\r\nAppleAirPods Max9%\r\n9Lightn… [+185 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Taisy0.com"
      },
      "author": "taisy0",
      "title": "Apple、1月24日に米マイアミに新しい直営店｢Apple Miami Worldcenter｣をオープンへ ｰ オリジナル壁紙も配布中",
      "description": "Appleが、現地時間1月24日に米フロリダ州のマイアミに新しい直営店「Apple Miami Worldcenter」をオープンすると発表しています。 「Apple Miami Worldcenter」は、マイアミにあるショッピングモール",
      "url": "https://taisy0.com/2025/01/11/207613.html",
      "urlToImage": "https://taisy0.com/wpcontent/uploads/2025/01/AppleMiamiWorldcenter.jpg",
      "publishedAt": "20250111T01:09:52Z",
      "content": "Apple124Apple Miami Worldcenter\r\nApple Miami WorldcenterMiami WorldCenter\r\nWallpaperiPhoneiPadMac\r\nApple Miami Worldcenter – Apple"
      },
      {
      "source": {
      "id": null,
      "name": "Taisy0.com"
      },
      "author": "taisy0",
      "title": "｢iPhone 17 Air｣の厚さは最薄部で約5.5㎜に??",
      "description": "Apple関連の情報ではお馴染みのアナリストのMingChi Kuo氏が、Appleが今年発売すると言われている薄型の新型iPhoneこと「iPhone 17 Air」の最新情報を報告しています。 同氏の最新のサプライチェーン調査によると",
      "url": "https://taisy0.com/2025/01/11/207610.html",
      "urlToImage": "https://taisy0.com/wpcontent/uploads/2024/07/iphone17Slimconcept.jpg",
      "publishedAt": "20250111T01:04:09Z",
      "content": "AppleMingChi KuoAppleiPhoneiPhone 17 Air\r\n2025iPhoneiPhone 17 Air5.5\r\nSIMeSIM\r\n5.5iPhone 17 AiriPhone 66.9mmiPhoneiPhone 16iPhone 16 Plus30iPhone 16 ProiPhone 16 Pro Max33"
      },
      {
      "source": {
      "id": null,
      "name": "Macitynet.it"
      },
      "author": "Emiliano Contarino",
      "title": "Dell cambia i nomi dei suoi PC ispirandosi ad Apple",
      "description": "Dell semplifica i nomi dei suoi prodotti, ispirandosi ad Apple.\n su macitynet.it Dell cambia i nomi dei suoi PC ispirandosi ad Apple",
      "url": "https://www.macitynet.it/dellcambianomistileapple/",
      "urlToImage": "https://www.macitynet.it/wpcontent/uploads/2025/01/dellrebrand.jpg",
      "publishedAt": "20250111T10:29:17Z",
      "content": "Al CES 2025, Dell ha annunciato una trasformazione radicale del suo portfolio di PC, puntando su un design semplificato, maggiore durata della batteria e migliori prestazioni AI. Tra le novità più si… [+1838 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Macitynet.it"
      },
      "author": "Yuri Di Prodo",
      "title": "Come fotografare il cielo stellato con iPhone senza installare app",
      "description": "Pochi click per catturare al meglio il cielo stellato con iPhone utilizzando l'app preinstallata di Apple\n su macitynet.it Come fotografare il cielo stellato con iPhone senza installare app",
      "url": "https://www.macitynet.it/?p=1377515",
      "urlToImage": "https://www.macitynet.it/wpcontent/uploads/2018/08/nottesanlorenzo1200.jpg",
      "publishedAt": "20250111T14:29:34Z",
      "content": "Se il vostro iPhone è abbastanza recente non vi serviranno particolari applicazioni per fotografare il cielo stellato al meglio delle sue possibilità: a partire da iPhone 11 infatti la modalità Notte… [+3636 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Macitynet.it"
      },
      "author": "Mauro Notarianni",
      "title": "Secondo Mark Zuckerberg, Apple non inventa niente di grandioso da un po’",
      "description": "Il CEO di Meta, Mark Zuckerberg, ha partecipato ad una puntata del podcast \"The Joe Rogan Experience” puntando il dito contro la Casa di Cupertino per \"mancanza di innovazione\" e le policy dell'App Store.\n su macitynet.it Secondo Mark Zuckerberg, Apple non i…",
      "url": "https://www.macitynet.it/zuckerbergapplenoninventa/",
      "urlToImage": "https://www.macitynet.it/wpcontent/uploads/2023/06/MarkZuckerberg.jpg",
      "publishedAt": "20250111T06:59:41Z",
      "content": "Il CEO di Meta (la multinazionale che controlla Facebook, Instagram e Whatsapp) Mark Zuckerberg, ha partecipato ad una puntata del podcast “The Joe Rogan Experience”, uno dei più popolari al mondo, c… [+4996 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Macitynet.it"
      },
      "author": "Mauro Notarianni",
      "title": "Sviolinata di Zuckerberg a favore di Trump e addio al fact checking su Facebook",
      "description": "Il CEO di Meta, Mark Zuckerberg ha criticato non solo Apple  ma anche l'amministrazione Biden per avere, a suo dire, spinto la censura sui vaccini COVID19, obbligando Facebook a reprimere la disinformazione.\n su macitynet.it Sviolinata di Zuckerberg a favo…",
      "url": "https://www.macitynet.it/sviolinatadizuckerbergafavoreditrumpeaddioalfactcheckingsufacebook/",
      "urlToImage": "https://www.macitynet.it/wpcontent/uploads/2025/01/Zuckerberg.jpg",
      "publishedAt": "20250111T11:29:52Z",
      "content": "Come abbiamo riferito qui, il CEO di Meta, Mark Zuckerberg, è apparso nel podcast “Joe Rogan Experience”, dove ha criticato non solo Apple – ma anche l’amministrazione Biden per avere, a suo dire, sp… [+2434 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Macitynet.it"
      },
      "author": "Redazione",
      "title": "Mac mini M4 si accende facile con questo supporto 3D",
      "description": "Un sostegno invisibile che vi fa accendere il Mac mini 4 semplicemente premendoci sopra la mano: una soluzione geniale per semplificarne l'uso quotidiano\n su macitynet.it Mac mini M4 si accende facile con questo supporto 3D",
      "url": "https://www.macitynet.it/macminim4diventapulsantone/",
      "urlToImage": "https://www.macitynet.it/wpcontent/uploads/2025/01/Macmini4siaccendefacileconquestosupporto1.jpg",
      "publishedAt": "20250111T13:29:10Z",
      "content": "Abbiamo già scritto più volte di quanto sia scomodo il tasto On/Off del nuovo Mac mini 4 notificandovi anche del mondo di soluzioni che c’è dietro grazie al supporto della comunità di appassionati Ap… [+2521 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Hwupgrade.it"
      },
      "author": null,
      "title": "Super! MacBook Air con 13'' 16GB RAM chip M3 del 2024 a soli 999, con poche unità disponibili",
      "description": "Il MacBook Air è consigliato per diverse ragioni, in particolare per chi cerca un laptop leggero, efficiente e versatile, nonché per entrare nel mondo dei portatili Apple senza svenarsi. Fate in fretta però, i prezzi possono cambiare da un momento all'altro.",
      "url": "https://www.hwupgrade.it/news/apple/supermacbookaircon1316gbramchipm3del2024asoli999conpocheunitadisponibili_134436.html",
      "urlToImage": "https://www.hwupgrade.it/i/n/MacBookAir_720.jpg",
      "publishedAt": "20250111T08:11:52Z",
      "content": "Il MacBook Air è considerato un computer portatile speciale perché è estremamente sottile e leggero, perfetto per chi ha bisogno di un dispositivo facile da trasportare. Ideale per studenti, professi… [+810 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Hwupgrade.it"
      },
      "author": null,
      "title": "Tutte le offerte Amazon del weekend: SSD esterni, iPhone 16 Pro Max 187, portatili, Tado, Netatmo, Blink e molto altro!",
      "description": "Ecco una lista super aggiornata delle migliori offerte Amazon di questo weekend. Spicca sicuramente iPhone 16 Pro Max 256GB al suo minimo storico, ma anche altre promozioni sono eccezionali, vedere per credere.",
      "url": "https://www.hwupgrade.it/news/multimedia/tutteleofferteamazondelweekendssdesterniiphone16promax187portatilitadonetatmoblinkemoltoaltro_134432.html",
      "urlToImage": "https://www.hwupgrade.it/i/n/amazon_money_720.jpg",
      "publishedAt": "20250111T08:14:26Z",
      "content": "È tornato il 10% sugli articoli Warehouse  seconda mano, nuovi articoli tutti i giorni!\r\nMotorola Moto G85 5G a 208, disponibile \r\noggi in 2 colori, è davvero una scelta intelligente: \r\n12GB di RAM… [+5933 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Hwupgrade.it"
      },
      "author": null,
      "title": "Nuova minaccia per macOS: Banshee sfrutta XProtect per eludere il rilevamento",
      "description": "La nuova variante del malware Banshee per macOS utilizza tecniche di crittografia rubate da XProtect di Apple per eludere il rilevamento, espandendo il suo targeting e rappresentando una minaccia crescente per gli utenti di sistemi Apple",
      "url": "https://www.hwupgrade.it/news/sicurezzasoftware/nuovaminacciapermacosbansheesfruttaxprotectpereludereilrilevamento_134422.html",
      "urlToImage": "https://www.hwupgrade.it/i/n/hacker_720.jpg",
      "publishedAt": "20250111T07:46:52Z",
      "content": "Una nuova variante del malware Banshee per macOS è riuscita a\r\n eludere il rilevamento negli ultimi due mesi adottando la crittografia\r\n delle stringhe derivata da XProtect di Apple. Banshee è un\r\n i… [+2456 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Hwupgrade.it"
      },
      "author": null,
      "title": "Eccezionale: sconto di 187 su Amazon per iPhone 16 Pro Max 256GB in tutti i colori!",
      "description": "iPhone 16 Pro Max è l'unico con il chip A18 Pro, insieme ad iPhone 16 Pro, il modello di dimensioni leggermente più contenute ma con caratteristiche tecniche simili. Costituisce il massimo della tecnologia mobile offerta da Apple nel 2024",
      "url": "https://www.hwupgrade.it/news/apple/eccezionalescontodi187suamazonperiphone16promax256gbintuttiicolori_134434.html",
      "urlToImage": "https://www.hwupgrade.it/i/n/iPhone2024_720_1.jpg",
      "publishedAt": "20250111T07:44:44Z",
      "content": "iPhone 16 Pro Max è uno dei modelli di punta presentati da Apple a settembre 2024 e si distingue per un design raffinato, materiali di alta qualità come il titanio e un display OLED Super Retina XDR … [+1156 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Sapo.pt"
      },
      "author": "Rui Neto",
      "title": "Com a Apple Intelligence à porta, Apple reafirma que a Siri não espia os utilizadores",
      "description": "A Apple está a enfrentar um desafio jurídico relacionado com a Siri. A empresa concordou em pagar 95 milhões de dólares para resolver um processo judicial coletivo que alegava que algumas gravações feitas pela...",
      "url": "https://pplware.sapo.pt/apple/comaappleintelligenceaportaapplereafirmaqueasirinaoespiaosutilizadores/",
      "urlToImage": "https://pplware.sapo.pt/wpcontent/uploads/2017/09/siri_1.jpg",
      "publishedAt": "20250111T15:00:46Z",
      "content": "A Apple está a enfrentar um desafio jurídico relacionado com a Siri. A empresa concordou em pagar 95 milhões de dólares para resolver um processo judicial coletivo que alegava que algumas gravações f… [+3780 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "SamMobile"
      },
      "author": "Asif Iqbal Shaik",
      "title": "Foldable iPhone won’t be a threat to Galaxy Z Flip 7",
      "description": "Samsung has been launching foldable phones for over five years. As usual, Apple is quite late. While it has reportedly tested foldable phones for years, it has yet to launch a foldable iPhone. Despite some rumors, Apple won't challenge the Galaxy Z Flip 7 thi…",
      "url": "https://www.sammobile.com/news/foldableiphonewontlaunch2025competegalaxyzflip7/",
      "urlToImage": "https://www.sammobile.com/wpcontent/uploads/2024/07/GalaxyZFlip6reviewFlexModecamera720x405.jpg",
      "publishedAt": "20250111T08:10:35Z",
      "content": "Samsung has been launching foldable phones for over five years. As usual, Apple is quite late. While it has reportedly tested foldable phones for years, it has yet to launch a foldable iPhone. Despit… [+2009 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "[Removed]"
      },
      "author": null,
      "title": "[Removed]",
      "description": "[Removed]",
      "url": "https://removed.com",
      "urlToImage": null,
      "publishedAt": "20250111T11:00:17Z",
      "content": "[Removed]"
      },
      {
      "source": {
      "id": null,
      "name": "ZDNet France"
      },
      "author": "Marc Zaffagni",
      "title": "Nouvelle montre Garmin Instinct 3 : un concentré de technologie pour les sportifs, sans se ruiner",
      "description": "La nouvelle série Instinct 3 de Garmin propose des cadrans impressionnants. En plus de son écran Amoled dynamique, il existe une version alimentée par l'énergie solaire pour une plus grande autonomie.",
      "url": "https://www.zdnet.fr/actualites/garminpresenteunenouvellemontreconnecteerobusteavececranamoledaunprixraisonnable404303.htm",
      "urlToImage": "https://www.zdnet.fr/wpcontent/uploads/zdnet/2025/01/garmininstinct3.jpg",
      "publishedAt": "20250111T08:45:38Z",
      "content": "Au CES 2025, Garmin a présenté une nouvelle série de montres connectées robustes. L'Instinct 3 se décline en quatre modèles qui partagent de nombreux composants similaires tout en offrant une poignée… [+4334 chars]"
      },
      {
      "source": {
      "id": "nbcnews",
      "name": "NBC News"
      },
      "author": "Allan Smith, Henry J. Gomez, Matt Dixon",
      "title": "Trump's return to power has old critics and skeptics reconciling with a new 'normal'",
      "description": "Across the spectrum of American society, leaders who once shunned Trump or battled him are now seeking to bolster their ties or extend olive branches.",
      "url": "https://www.nbcnews.com/politics/donaldtrump/trumpreturncriticsskepticsreconcilingnewnormalrcna186146",
      "urlToImage": "https://mediacldnry.snbcnews.com/image/upload/t_nbcnewsfp1200630,f_auto,q_auto:best/rockcms/202501/250103Trumpaa12502a421b.jpg",
      "publishedAt": "20250111T10:00:00Z",
      "content": "In the weeks and months after Donald Trump won his shock election victory in 2016, business and tech leaders began a steady march leftward, adopting policies and postures to counter his influence on … [+14289 chars]"
      }
      ]
      }; */
      setNews(news.data.articles);
      console.log(news.data.articles);
    }
    getNews();
  });
  return (
    <>
    <h1 class="text-center mt-4">Latest News</h1>
      <div class="container">
        <div class="row">
        {
          news.map(article =>
            <div class="col mt-4">
                  <Card style={{ width: '18rem', height: '25rem' }}>
                    <Card.Body>
                    <Card.Img variant="top" src={article.urlToImage}/>
                      <Card.Title>{article.title}</Card.Title>
                      <Card.Text style={{height: '3rem', overflow:'hidden'}}>{article.description}</Card.Text>
                      <a href={article.url} class="btn btn-primary">Read More</a>
                    </Card.Body>
                </Card>
                </div>
          )

        }
      </div>

      </div>
    </>
  );
}
export default NewsStore;
