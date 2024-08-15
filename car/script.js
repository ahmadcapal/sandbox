const car = {
  toyota: {
    suv: [
      'Fortuner',
      'RAV4',
      'Highlander',
      'Land Cruiser',
      '4Runner',
      'Sequoia',
    ],
    coupe: ['86', 'Supra'],
    minivan: ['Sienna', 'Alphard', 'Voxy', 'Noah', 'Esquire'],
    van: ['Hiace', 'Granvia', 'ProAce'],
    sedan: ['Camry', 'Corolla', 'Avalon', 'Yaris Sedan', 'Mirai'],
    hatchback: ['Yaris', 'Auris', 'Corolla Hatchback', 'Prius C'],
    pickup: ['Hilux', 'Tacoma', 'Tundra'],
    offRoad: ['Land Cruiser', '4Runner', 'FJ Cruiser'],
  },
  hyundai: {
    suv: ['Tucson', 'Santa Fe', 'Palisade', 'Kona', 'Venue'],
    coupe: ['Veloster', 'Genesis Coupe', 'Tuscani'],
    minivan: ['Staria', 'H-1', 'Grand Starex'],
    van: ['H-1', 'Starex', 'Porter'],
    sedan: ['Sonata', 'Elantra', 'Accent', 'Azera'],
    hatchback: ['i30', 'i20', 'Veloster', 'Getz'],
    pickup: ['Santa Cruz', 'Porter'],
    offRoad: ['Galloper', 'Terracan'],
  },
  ford: {
    suv: ['Explorer', 'Escape', 'Edge', 'Expedition', 'Bronco Sport'],
    coupe: ['Mustang', 'GT', 'Thunderbird'],
    minivan: ['Tourneo Connect', 'Transit Connect'],
    van: ['Transit', 'E-Series', 'Transit Custom'],
    sedan: ['Fusion', 'Taurus', 'Focus Sedan', 'Mondeo'],
    hatchback: ['Focus', 'Fiesta', 'Ka'],
    pickup: ['Ranger', 'F-150', 'Super Duty', 'Maverick'],
    offRoad: ['Bronco', 'Raptor', 'Everest'],
  },
  honda: {
    suv: ['CR-V', 'HR-V', 'Pilot', 'Passport'],
    coupe: ['Civic Coupe', 'Accord Coupe', 'NSX'],
    minivan: ['Odyssey', 'Stepwgn', 'Elysion'],
    van: ['Acty', 'Mobilio', 'N-Van'],
    sedan: ['Accord', 'Civic', 'City', 'Inspire'],
    hatchback: ['Civic Hatchback', 'Fit', 'Jazz'],
    pickup: ['Ridgeline', 'Acty Truck'],
    offRoad: ['Passport', 'Element'],
  },
  nissan: {
    suv: ['X-Trail', 'Murano', 'Rogue', 'Pathfinder', 'Armada'],
    coupe: ['370Z', 'GT-R', 'Silvia'],
    minivan: ['Serena', 'Elgrand', 'Quest'],
    van: ['NV350', 'Caravan', 'NV200'],
    sedan: ['Altima', 'Maxima', 'Sentra', 'Versa'],
    hatchback: ['Leaf', 'Micra', 'Note'],
    pickup: ['Navara', 'Titan', 'Frontier'],
    offRoad: ['Patrol', 'Armada', 'Xterra'],
  },
};

console.log(car);
