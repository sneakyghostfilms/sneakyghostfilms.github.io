export interface CastMember {
  name: string;
  role: string;
  img: string;
  link?: string;
}

export interface Video {
  title: string;
  youtubeId: string;
}

export interface Film {
  slug: string;
  title: string;
  genre: string;
  categories: ('dark' | 'droll')[];
  image: string;
  heroImage: string;
  accolades: string;
  description: string;
  cast: CastMember[];
  videos: Video[];
}

export const films: Film[] = [
  {
    slug: "time_travelers_graveyard",
    title: "Time Travelers' Graveyard",
    genre: "Sci-Fi Comedy Musical",
    categories: ["droll"],
    image: "/files/uploads/films/time_travelers_graveyard_800x600.jpg",
    heroImage: "/files/uploads/films/time_travelers_graveyard_1690x1100.jpg",
    accolades: "Awarded \"Best Long Short\" at the KinoDrome Film Festival!",
    description: "A tech startup's corner-cutting backfires when their sloppy software screws up time travel.",
    cast: [
      { name: "Lee Blair", role: "as James", img: "/files/uploads/cast/time_travelers_graveyard/lee-200x300.jpg" },
      { name: "Andrea Disch", role: "as Sophia", img: "/files/uploads/cast/time_travelers_graveyard/andrea-200x300.jpg" },
      { name: "Erik Thompson", role: "as Darren", img: "/files/uploads/cast/time_travelers_graveyard/erik-200x300.jpg" },
      { name: "Eric Molina", role: "as Chuck", img: "/files/uploads/cast/time_travelers_graveyard/eric-200x300.jpg" },
      { name: "Stephanie Swift", role: "as Coworker", img: "/files/uploads/cast/time_travelers_graveyard/stephanie-200x300.jpg" },
      { name: "Jenna Chung", role: "as Coworker", img: "/files/uploads/cast/time_travelers_graveyard/jenna-200x300.jpg" },
      { name: "Kevin Mahler", role: "as Coworker", img: "/files/uploads/cast/time_travelers_graveyard/kevin-200x300.jpg" },
    ],
    videos: [
      { title: "Trailer", youtubeId: "3gPTm0t0puo" },
    ],
  },
  {
    slug: "senior_software_engineer",
    title: "Senior Software Engineer",
    genre: "Dark Comedy",
    categories: ["droll"],
    image: "/files/uploads/films/senior_software_engineer_800x600.jpg",
    heroImage: "/files/uploads/films/senior_software_engineer_1690x1100.jpg",
    accolades: "Won Best Comedy and lead actress Judy Millar took Best Actress at DC AFTER DARK International Film Festival; was runner-up for Best Long Short Film at KinoDrome International Film Festival; and was an Official Selection at Erie International Film Festival, Centre Film Festival, The Indie Gathering International Film Festival, and West Virginia Mountaineer Short Film Festival.",
    description: "A grandma programmer allies with the ghost of her predecessor to satisfy her young, trendy influencer boss's latest ultimatum.",
    cast: [
      { name: "Judy Millar", role: "as Marge", img: "/files/uploads/cast/senior_software_engineer/judy-200x300.jpg" },
      { name: "Howard Elson", role: "as Henry", img: "/files/uploads/cast/senior_software_engineer/howard-200x300.jpg" },
      { name: "Aliya Pimental", role: "as Brittany", img: "/files/uploads/cast/senior_software_engineer/aliya-200x300.jpg" },
      { name: "Jeff Monahan", role: "as Patrick", img: "/files/uploads/cast/senior_software_engineer/jeff-200x300.jpg" },
      { name: "Stephanie Swift", role: "as Brittany's Fans", img: "/files/uploads/cast/senior_software_engineer/stephanie-200x300.jpg" },
    ],
    videos: [
      { title: "Trailer", youtubeId: "DFLy7mwv44I" },
      { title: "Full Film", youtubeId: "x8pokHnJ8OU" },
    ],
  },
  {
    slug: "rangers_way",
    title: "A Ranger's Way",
    genre: "Drama",
    categories: ["dark"],
    image: "/files/uploads/films/rangers_way_800x600.jpg",
    heroImage: "/files/uploads/films/rangers_way_1690x1100.jpg",
    accolades: "Awarded \"Best Long Short\" at the KinoDrome Film Festival! Official selection of the West Virginia Mountaineer, Short Sweet, and Creative Connection film festivals!",
    description: "An army ranger tries to record his suicide note while receiving video calls from the dead.",
    cast: [
      { name: "Aaron Frankel", role: "as Eli", img: "/files/uploads/cast/rangers_way/aaron-200x300.jpg" },
      { name: "Cora Wawrzyniak", role: "as Ellie", img: "/files/uploads/cast/rangers_way/cora-200x300.jpg" },
      { name: "Kelly Warren", role: "as Ashley", img: "/files/uploads/cast/rangers_way/kelly-200x300.jpg" },
      { name: "Mary Meyer", role: "as Army Officer", img: "/files/uploads/cast/rangers_way/mary-200x300.jpg" },
      { name: "Jonah Hartman", role: "as Dylan", img: "/files/uploads/cast/rangers_way/jonah-200x300.jpg" },
    ],
    videos: [
      { title: "Full Film", youtubeId: "dgPng3ISUZI" },
    ],
  },
  {
    slug: "medical_divorce",
    title: "Medical Divorce",
    genre: "Comedy Drama",
    categories: ["dark", "droll"],
    image: "/files/uploads/films/medical_divorce_800x600.jpg",
    heroImage: "/files/uploads/films/medical_divorce_1690x1100.jpg",
    accolades: "An Official Selection of the Blackbird Film Festival, the Short. Sweet. Film Fest, the NYC Short Comedy Film Festival and the Red Rose Film Festival! Written about in the Pittsburgh Jewish Chronicle!",
    description: "An elderly Jewish couple debates divorce being the best solution to their medical costs.",
    cast: [
      { name: "Howard Elson", role: "as Noah", img: "/files/uploads/cast/medical_divorce/howard-200x300.jpg" },
      { name: "Judy Millar", role: "as Barbara", img: "/files/uploads/cast/medical_divorce/judy-200x300.jpg" },
      { name: "Patricia Fuchel", role: "as Rachel", img: "/files/uploads/cast/medical_divorce/patricia-200x300.jpg" },
      { name: "Robert DiDonato", role: "as Samuel", img: "/files/uploads/cast/medical_divorce/robert-200x300.jpg" },
      { name: "CK Steele", role: "as Nathan", img: "/files/uploads/cast/medical_divorce/ck-200x300.jpg" },
      { name: "Michelle Stuper", role: "as Hannah", img: "/files/uploads/cast/medical_divorce/michelle-200x300.jpg" },
      { name: "Rabbi Adelson", role: "as the Rabbi", img: "/files/uploads/cast/medical_divorce/rabbi_adelson-200x300.jpg" },
    ],
    videos: [
      { title: "Full Film", youtubeId: "qfB6WuUrZK8" },
    ],
  },
  {
    slug: "dream_state",
    title: "Dream State",
    genre: "Psychological Horror",
    categories: ["dark"],
    image: "/files/uploads/films/dream_state_800x600.jpg",
    heroImage: "/files/uploads/films/dream_state_1690x1100.jpg",
    accolades: "Official selection of the Big Apple Film Festival and NewFilmmakers New York!",
    description: "A man reconnects with his dead wife through his dreams, but then finds new love and his realities conflict.",
    cast: [
      { name: "Merritt Reid", role: "as Brandon", img: "/files/uploads/cast/dream_state/merritt-200x300.jpg", link: "http://www.imdb.com/name/nm3239630/" },
      { name: "Tiffany Hodges", role: "as Kate", img: "/files/uploads/cast/dream_state/tiffany-200x300.jpg", link: "http://tiffanyhodges.com/" },
      { name: "Elizabeth Conway", role: "as Becky", img: "/files/uploads/cast/dream_state/elizabeth-200x300.jpg", link: "https://misselizabethconway.wordpress.com/about/" },
      { name: "Joe Galan", role: "as Steve", img: "/files/uploads/cast/dream_state/joe-200x300.jpg", link: "https://www.joegalan.com/" },
      { name: "Karin Crighton", role: "as Kim", img: "/files/uploads/cast/dream_state/karin-200x300.jpg", link: "http://www.karincrighton.com/" },
      { name: "Seth Clayton", role: "as Ed", img: "/files/uploads/cast/dream_state/seth-200x300.jpg", link: "http://www.sethclayton.com/" },
      { name: "Stephen Reich", role: "as Matt", img: "/files/uploads/cast/dream_state/stephen-200x300.jpg", link: "http://www.stephenreichacting.com/" },
    ],
    videos: [
      { title: "Trailer", youtubeId: "t_WJRJaIk4A" },
      { title: "Full Film", youtubeId: "gwutdvVo-vk" },
    ],
  },
  {
    slug: "our_nature",
    title: "Our Nature",
    genre: "Interpretive Dance",
    categories: ["dark"],
    image: "/files/uploads/films/our_nature_800x600.jpg",
    heroImage: "/files/uploads/films/our_nature_1690x1100.jpg",
    accolades: "Won Award for Outstanding Environmental Film from the Short. Sweet. Film Fest! Won 1st Place for Sound and Motion Based Experimental Cinema at the KinoDrome Festival!",
    description: "A dance film about a hiker befriending a spirit of nature and fighting to protect her.",
    cast: [
      { name: "Chloe Napoletano", role: "as the Hiker", img: "/files/uploads/cast/our_nature/chloe-200x300.jpg" },
      { name: "Alizé Raptou", role: "as the Nature Spirit", img: "/files/uploads/cast/our_nature/alize-200x300.jpg" },
    ],
    videos: [
      { title: "Trailer", youtubeId: "_pHMxelf6u4" },
      { title: "Full Film", youtubeId: "3y_m8EgVnzM" },
    ],
  },
  {
    slug: "toddler_tartare",
    title: "Toddler Tartare",
    genre: "Black Comedy",
    categories: ["droll"],
    image: "/files/uploads/films/toddler_tartare_800x600.jpg",
    heroImage: "/files/uploads/films/toddler_tartare_1690x1100.jpg",
    accolades: "Best New York Film Award at the Blackbird Film Festival! Best New York Short at the Upstate NY Horror Film Festival! Best Actor - Horror at the Brightside Tavern Film Festival!",
    description: "A father, on a date, takes his estranged daughter along. Upon seeing human meat on the menu, he fights to preserve his daughter's innocence.",
    cast: [
      { name: "Caroline Manring", role: "as Violet", img: "/files/uploads/cast/toddler_tartare/caroline-200x300.jpg" },
      { name: "Philip Hart", role: "as Adam", img: "/files/uploads/cast/toddler_tartare/philip-200x300.jpg" },
      { name: "Maria Moga", role: "as Evelyn", img: "/files/uploads/cast/toddler_tartare/maria-200x300.jpg" },
      { name: "Jean Graham", role: "as Charlotte", img: "/files/uploads/cast/toddler_tartare/jean-200x300.jpg" },
      { name: "AJ Sage", role: "as the Chef", img: "/files/uploads/cast/toddler_tartare/aj-200x300.jpg" },
      { name: "Mark Dickinson", role: "as the Guard", img: "/files/uploads/cast/toddler_tartare/mark-200x300.jpg" },
    ],
    videos: [
      { title: "Full Film", youtubeId: "TnZmBmzDCTY" },
    ],
  },
  {
    slug: "sky_paradise",
    title: "Sky Paradise",
    genre: "Dystopian Sci-Fi",
    categories: ["dark"],
    image: "/files/uploads/films/sky_paradise_800x600.jpg",
    heroImage: "/files/uploads/films/sky_paradise_1690x1100.jpg",
    accolades: "Official selection of NewFilmmakers New York and the Philip K. Dick Science Fiction Film Festival",
    description: "Imagine a world engulfed in clinical depression. Julia, a rare exception, is rudely awakened to the horrors around her.",
    cast: [
      { name: "Claire Duncan", role: "as Julia", img: "/files/uploads/cast/sky_paradise/claire-200x300.jpg", link: "https://www.claireduncan.net/" },
      { name: "Kutcha", role: "as Mr. Stone", img: "/files/uploads/cast/sky_paradise/kutcha-200x300.jpg", link: "http://www.imdb.com/name/nm1711593/" },
      { name: "Adam Palumbo", role: "as Ryan", img: "/files/uploads/cast/sky_paradise/adam-200x300.jpg", link: "http://www.imdb.com/name/nm5150938/" },
      { name: "Natalie Swan", role: "as Elizabeth", img: "/files/uploads/cast/sky_paradise/natalie-200x300.jpg", link: "http://www.imdb.com/name/nm1010111/" },
      { name: "Bill Corry", role: "as Harold", img: "/files/uploads/cast/sky_paradise/bill-200x300.jpg", link: "http://www.billcorry.com/" },
      { name: "Thomas Wood", role: "as Earl", img: "/files/uploads/cast/sky_paradise/thomas-200x300.jpg", link: "http://www.thomasdwood.com/" },
      { name: "Melissa Carlile-Price", role: "as the Receptionist", img: "/files/uploads/cast/sky_paradise/melissa-200x300.jpg", link: "https://www.melissacarlileprice.com" },
    ],
    videos: [
      { title: "Trailer", youtubeId: "-mnkJ9pBBz0" },
      { title: "Full Film", youtubeId: "EFW12LSqG68" },
    ],
  },
  {
    slug: "ten",
    title: "Ten",
    genre: "Romantic Drama",
    categories: ["dark"],
    image: "/files/uploads/films/ten_800x600.jpg",
    heroImage: "/files/uploads/films/ten_1690x1100.jpg",
    accolades: "Official selection of the 2020 Lancaster International Short Film Festival!",
    description: "An anxiety-afflicted introvert finally has a chance at true romance, but must overcome her latent insecurities.",
    cast: [
      { name: "Kate Blackwood", role: "as Penelope", img: "/files/uploads/cast/ten/kate-200x300.jpg" },
      { name: "Sylvie Yntema", role: "as Jeanette", img: "/files/uploads/cast/ten/sylvie-200x300.jpg" },
      { name: "Scott Rougeau", role: "as Greg", img: "/files/uploads/cast/ten/scott-200x300.jpg" },
    ],
    videos: [
      { title: "Trailer", youtubeId: "Pio2rY9LyTU" },
      { title: "Full Film", youtubeId: "ohmKRhIKpA0" },
    ],
  },
  {
    slug: "cheshire_cache",
    title: "The Cheshire Cache",
    genre: "Adventure/Horror",
    categories: ["dark"],
    image: "/files/uploads/films/cheshire_cache_800x600.jpg",
    heroImage: "/files/uploads/films/cheshire_cache_1690x1100.jpg",
    accolades: "Official selection of the Crown Heights Film Festival!",
    description: "A single mother, new to the game of geocaching, doesn't find the Wonderland she had hoped for.",
    cast: [
      { name: "Maria Carroll", role: "as Elise", img: "/files/uploads/cast/cheshire_cache/maria_carroll-200x300.jpg", link: "http://www.imdb.com/name/nm7753472/" },
      { name: "Josh Olkowski", role: "as Brian", img: "/files/uploads/cast/cheshire_cache/josh-200x300.jpg", link: "http://www.imdb.com/name/nm4249594/" },
      { name: "Maria Moga", role: "as Carolyn", img: "/files/uploads/cast/cheshire_cache/maria_moga-200x300.jpg", link: "http://www.mariamoga.com/" },
      { name: "Ron Gunczler", role: "as Xavier", img: "/files/uploads/cast/cheshire_cache/ron-200x300.jpg", link: "http://www.imdb.com/name/nm7753471/" },
      { name: "Dana Nauerz", role: "as Georgie", img: "/files/uploads/cast/cheshire_cache/dana-200x300.jpg", link: "http://www.imdb.com/name/nm7753470/" },
      { name: "Dane Cruz", role: "as Chris", img: "/files/uploads/cast/cheshire_cache/dane-200x300.jpg", link: "http://www.imdb.com/name/nm6495367/" },
    ],
    videos: [
      { title: "Full Film", youtubeId: "omMicQCG_7E" },
    ],
  },
  {
    slug: "success",
    title: "Success",
    genre: "Psychological Drama",
    categories: ["dark"],
    image: "/files/uploads/films/success_800x600.jpg",
    heroImage: "/files/uploads/films/success_1690x1100.jpg",
    accolades: "",
    description: "As a man hopes to make it big filming a documentary about successful people, their stories inspire him to make dangerous sacrifices.",
    cast: [
      { name: "AJ Sage", role: "as AJ", img: "/files/uploads/cast/success/aj-200x300.jpg" },
      { name: "Sylvie Yntema", role: "as Sylvie", img: "/files/uploads/cast/success/sylvie-200x300.jpg" },
      { name: "Chelsea Marie Logan", role: "as Chelsea", img: "/files/uploads/cast/success/chelsea-200x300.jpg" },
      { name: "Scott Rougeau", role: "as Maxwell", img: "/files/uploads/cast/success/scott-200x300.jpg" },
      { name: "Ann Sweet", role: "as Allison", img: "/files/uploads/cast/success/ann-200x300.jpg" },
      { name: "Chris Nickerson", role: "as David", img: "/files/uploads/cast/success/chris-200x300.jpg" },
      { name: "John Carey", role: "as the Boss", img: "/files/uploads/cast/success/john-200x300.jpg" },
      { name: "Michael Donato", role: "as Danny", img: "/files/uploads/cast/success/michael-200x300.jpg" },
      { name: "Paige Anderson", role: "as Melanie", img: "/files/uploads/cast/success/paige-200x300.jpg" },
      { name: "David Dean", role: "as Jason", img: "/files/uploads/cast/success/david-200x300.jpg" },
      { name: "Francesca Decker", role: "as Alyssa", img: "/files/uploads/cast/success/francesca-200x300.jpg" },
      { name: "Lisa Dutcher", role: "as the Host", img: "/files/uploads/cast/success/lisa-200x300.jpg" },
      { name: "Andy Horowitz", role: "as the Treasurer", img: "/files/uploads/cast/success/andy-200x300.jpg" },
    ],
    videos: [
      { title: "Trailer", youtubeId: "y6jh0g5V9e8" },
      { title: "Full Film", youtubeId: "ewM--Wk6-LA" },
    ],
  },
  {
    slug: "guy_time",
    title: "Guy Time",
    genre: "Black Comedy/Horror",
    categories: ["droll"],
    image: "/files/uploads/films/guy_time_800x600.jpg",
    heroImage: "/files/uploads/films/guy_time_1690x1100.jpg",
    accolades: "Won Best Editing at the Binghamton Babylon Film Festival. Official selection of the New York Short Film Festival!",
    description: "After dejected Sara scares off yet another boyfriend, she realizes someone is still in her house.",
    cast: [
      { name: "Greta Volkova", role: "as Sara", img: "/files/uploads/cast/guy_time/greta-200x300.jpg", link: "http://www.imdb.com/name/nm6079060/" },
      { name: "Arthur Dashan", role: "as Troy", img: "/files/uploads/cast/guy_time/arthur-200x300.jpg" },
      { name: "Mike Pucek", role: "as the Intruder", img: "/files/uploads/cast/guy_time/mike-200x300.jpg" },
      { name: "Luna", role: "as Herself", img: "/files/uploads/cast/guy_time/luna-200x300.jpg" },
    ],
    videos: [
      { title: "Trailer", youtubeId: "pNoZFbqDx5k" },
      { title: "Full Film", youtubeId: "ARdtBkbM1Lg" },
    ],
  },
  {
    slug: "karma",
    title: "Karma",
    genre: "Comedy",
    categories: ["droll"],
    image: "/files/uploads/films/karma_800x600.jpg",
    heroImage: "/files/uploads/films/karma_1690x1100.jpg",
    accolades: "Official selection of the SHORT to the Point Film Festival and the Binghamton Babylon Film Festival!",
    description: "Just before a talented marketing agent delivers the most important presentation of her career, her daughter calls, armed with a magical book, to talk about a cat she feels has been slighted.",
    cast: [
      { name: "Maria Carroll", role: "as Laura", img: "/files/uploads/cast/karma/maria_carroll-200x300.jpg", link: "http://www.imdb.com/name/nm7753472/" },
      { name: "Maria Moga", role: "as Madelyn", img: "/files/uploads/cast/karma/maria_moga-200x300.jpg", link: "http://www.mariamoga.com/" },
      { name: "Geoff Mays", role: "as Warren", img: "/files/uploads/cast/karma/geoff-200x300.jpg", link: "http://www.imdb.com/name/nm1621211/" },
      { name: "James Cheng", role: "as Mr. Sakamoto", img: "/files/uploads/cast/karma/james-200x300.jpg", link: "http://www.imdb.com/name/nm5489490/" },
      { name: "Justin Prince Moy", role: "as the Assistant", img: "/files/uploads/cast/karma/justin-200x300.jpg", link: "http://justinprincemoy.com/jpm.html" },
      { name: "May", role: "as the Cat", img: "/files/uploads/cast/karma/may-200x300.jpg" },
    ],
    videos: [
      { title: "Full Film", youtubeId: "yxAaRIaq5C4" },
    ],
  },
  {
    slug: "dark_awakening",
    title: "Dark Awakening",
    genre: "Experimental Horror",
    categories: ["dark"],
    image: "/files/uploads/films/dark_awakening_800x600.jpg",
    heroImage: "/files/uploads/films/dark_awakening_1690x1100.jpg",
    accolades: "Now being submitted to film festivals!",
    description: "Awakening in a zombie-infested basement, a concussed, bleeding woman must stay conscious in order to rescue her husband.",
    cast: [
      { name: "Kathleen Regan", role: "as Charlene", img: "/files/uploads/cast/dark_awakening/kathy-200x300.jpg" },
      { name: "David Ogrodowski", role: "as Michael", img: "/files/uploads/cast/dark_awakening/david-200x300.jpg" },
      { name: "John Iwanonkiw", role: "as Zombie", img: "/files/uploads/cast/dark_awakening/john-200x300.jpg" },
      { name: "Cynthia Dallas", role: "as Zombie Leader", img: "/files/uploads/cast/dark_awakening/cindy-200x300.jpg" },
      { name: "Robbie John Dalton", role: "as Zombie", img: "/files/uploads/cast/dark_awakening/robbie-200x300.jpg" },
    ],
    videos: [
      { title: "Full Film", youtubeId: "ArdsQPXxX9A" },
    ],
  },
];
