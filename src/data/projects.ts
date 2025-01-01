export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  image?: string;
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
  features: string[];
  technologies: string[];
  previewImageSmall?: string; // projects/:id/images/preview-sm.jpg (>398 x 192)
  previewImageLarge?: string; // projects/:id/images/preview-lg.jpg (>1248 x 256)
  images?: string[]; // projects/:id/images
  videos?: string[]; // Youtube embeded id
}

export const projects: Project[] = [
  {
    id: 'contact-fear',
    title: 'Contact Fear',
    description: 'A thrilling horror game in a hounted house',
    fullDescription: `
      “CONTACT FEAR” is a horror game where the player takes control of Enzo, a young urban explorer venturing into an old abandoned house.
      Fleeing from a strange figure pursuing him, he slips through a hole and ends up in the basement.
      Enzo then decides to search for another way out. He must explore and solve puzzles by collecting three family relics to unlock the main door and escape. However, something evil resides in the house...
      Will Enzo make it out alive?
    `,
    tags: ['Unity', 'C#'],
    features: [
      'Exploration: Navigate a detailed, abandoned house with various rooms and areas.',
      'Puzzles: Solve intricate puzzles to progress through the game.',
      'Item Collection: Gather key items, like the three family relics, to unlock doors and objectives.',
      'Chase Mechanics: Avoid or escape from a pursuing entity for added tension.',
      'Atmospheric Horror: Immersive environments with a dark, eerie ambiance.',
      'Storytelling: Uncover a narrative through the house\'s history and relics.',
      'Survival Elements: Find ways to outwit or avoid the malevolent presence.',
      'Single-player Experience: A focused, solo adventure.',
      'Dynamic Level Design: Areas like the basement add to the complexity and depth of the map.',
    ],
    technologies: [
      'Unity 2022.3.41f1',
      'C#',
      '3D Max',
    ],
    demoUrl: 'https://saguiar2804.itch.io/contact-fear',
    // githubUrl: 'https://github.com/uy-acabrera/HorrorGame',
    previewImageSmall: 'preview-sm.png',
    previewImageLarge: 'preview-lg.png',
    videos: [
      'as9Afv0nrDg',
    ]
  },
  {
    id: 'depo-quick',
    title: 'DepoQuick',
    description: 'A storage rental platform, making it as easy as ordering online',
    fullDescription: `
      DepoQuick is an emerging project aiming to revolutionize the storage rental market by providing an efficient and user-friendly solution for those in need of extra storage space.
      DepoQuick's mission is to simplify the storage rental process, making it as easy as placing an online order.
    `,
    tags: ['Razor', 'C#', 'Azure SQL', 'Docker'],
    features: [
      'Create and register new storage units with details like size, location, and promotions.',
      'Delete deposits that are no longer available.',
      'View and manage the status of all listed deposits.',
      'Register new users.',
      'Create special offers or discounts for specific deposits or time periods.',
      'Update existing promotions to adjust availability or terms.',
      'Delete expired or irrelevant promotions from the system.',
      'Customers can browse and create reservations for available deposits.',
      'Administrators can view, accept, or deny incoming reservation requests.',
    ],
    technologies: [
      'Razor',
      'C#',
      'Azure SQL',
      'Docker',
    ],
    githubUrl: 'https://github.com/uy-acabrera/DepoQuick',
    previewImageSmall: 'preview-sm.png',
    previewImageLarge: 'preview-lg.png',
    videos: [
      'XtxAhw38A1s',
    ]
  },
  {
    id: 'uru-air',
    title: 'Uru Air',
    description: 'A travel agency platform',
    fullDescription: 'UruAir is an innovative travel agency platform designed to simplify travel planning by offering seamless client registration, hotel and package management, and an intuitive search and reservation system. The platform allows users to explore tailored travel packages, book their ideal getaways, and manage reservations effortlessly. Administrators can oversee packages, track reservation distribution through dynamic charts, and maintain a comprehensive view of all bookings, ensuring a smooth and efficient experience for both travelers and agency staff.',
    tags: ['JQuery', 'Javascript', 'HTML', 'CSS'],
    features: [
      'Easy sign-up process for clients with personal details and travel preferences.',
      'Register and manage hotel details, including location, amenities, and availability.',
      'Update hotel listings to reflect current offers or changes.',
      'Create tailored travel packages, combining flights, hotels, and activities.',
      'Add pricing, descriptions, and special offers to packages.',
      'Intuitive search functionality for clients to find travel packages by destination, dates, or preferences.',
      'View and manage all reservations in a centralized interface.',
      'Visual representation of reservations based on criteria such as destinations, dates, or customer demographics.',
    ],
    technologies: [
      'JQuery',
      'Javascript',
      'HTML',
      'CSS',
    ],
    demoUrl: 'https://uy-acabrera.github.io/uru-air/',
    githubUrl: 'https://github.com/uy-acabrera/uru-air',
    previewImageSmall: 'preview-sm.png',
    previewImageLarge: 'preview-lg.png',
    videos: [
      'EmkBXWxGONs'
    ]
  }
];

export const featureProjects: Project[] = [
  projects[0],
  projects[1],
];
