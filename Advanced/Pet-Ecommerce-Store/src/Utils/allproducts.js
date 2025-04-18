let all_products = [
  {
    id: 1,
    name: 'Chicken Flavored Dog Treats',
    category: 'Food',
    image: 'https://img.freepik.com/free-photo/shrimp-ball_1339-478.jpg',
    image1: 'https://img.freepik.com/free-photo/shrimp-ball_1339-478.jpg',
    image2: 'https://img.freepik.com/free-photo/shrimp-ball_1339-478.jpg',
    image3: 'https://img.freepik.com/free-photo/shrimp-ball_1339-478.jpg',
    new_price: 5.99,
    old_price: 8.99,
  },
  {
    id: 2,
    name: 'Chicken Jerky Dog Treats',
    category: 'Food',
    image:
      'https://img.freepik.com/free-photo/delicious-chewing-sticks_23-2147799857.jpg',
    image1:
      'https://img.freepik.com/free-photo/delicious-chewing-sticks_23-2147799857.jpg',
    image2:
      'https://img.freepik.com/free-photo/delicious-chewing-sticks_23-2147799857.jpg',
    image3:
      'https://img.freepik.com/free-photo/delicious-chewing-sticks_23-2147799857.jpg',
    new_price: 6.49,
    old_price: 9.99,
  },
  {
    id: 3,
    name: 'Chew Sticks',
    category: 'Food',
    image:
      'https://img.freepik.com/free-photo/colored-treats-dog-white-surface_23-2148181701.jpg',
    image1:
      'https://img.freepik.com/free-photo/colored-treats-dog-white-surface_23-2148181701.jpg',
    image2:
      'https://img.freepik.com/free-photo/colored-treats-dog-white-surface_23-2148181701.jpg',
    image3:
      'https://img.freepik.com/free-photo/colored-treats-dog-white-surface_23-2148181701.jpg',
    new_price: 4.75,
    old_price: 7.99,
  },
  {
    id: 4,
    name: 'Organic Sweet Potato Treats',
    category: 'Food',
    image:
      'https://img.freepik.com/free-photo/turkish-delights-bowl-trivet-marble-surface_114579-83761.jpg',
    image1:
      'https://img.freepik.com/free-photo/turkish-delights-bowl-trivet-marble-surface_114579-83761.jpg',
    image2:
      'https://img.freepik.com/free-photo/turkish-delights-bowl-trivet-marble-surface_114579-83761.jpg',
    image3:
      'https://img.freepik.com/free-photo/turkish-delights-bowl-trivet-marble-surface_114579-83761.jpg',
    new_price: 5.25,
    old_price: 7.5,
  },
  {
    id: 5,
    name: 'Dry Dog Food with Chicken & Rice',
    category: 'Food',
    image:
      'https://img.freepik.com/free-photo/dry-dog-food-bowl-dark-wooden-surface_1150-42123.jpg',
    image1:
      'https://img.freepik.com/free-photo/dry-dog-food-bowl-dark-wooden-surface_1150-42123.jpg',
    image2:
      'https://img.freepik.com/free-photo/dry-dog-food-bowl-dark-wooden-surface_1150-42123.jpg',
    image3:
      'https://img.freepik.com/free-photo/dry-dog-food-bowl-dark-wooden-surface_1150-42123.jpg',
    new_price: 21.99,
    old_price: 28.99,
  },
  {
    id: 6,
    name: 'Wet Dog Food - Veggie Stew',
    category: 'Food',
    image:
      'https://img.freepik.com/free-photo/carrots-broccoli-bowl-chicken-soup-blue-surface_114579-91122.jpg',
    image1:
      'https://img.freepik.com/free-photo/carrots-broccoli-bowl-chicken-soup-blue-surface_114579-91122.jpg',
    image2:
      'https://img.freepik.com/free-photo/carrots-broccoli-bowl-chicken-soup-blue-surface_114579-91122.jpg',
    image3:
      'https://img.freepik.com/free-photo/carrots-broccoli-bowl-chicken-soup-blue-surface_114579-91122.jpg',
    new_price: 3.99,
    old_price: 5.49,
  },
  {
    id: 7,
    name: 'Salmon & Brown Rice Dry Food',
    category: 'Food',
    image:
      'https://img.freepik.com/free-photo/blue-wooden-board-with-slice-chicken-meat-mint_114579-86346.jpg',
    image1:
      'https://img.freepik.com/free-photo/blue-wooden-board-with-slice-chicken-meat-mint_114579-86346.jpg',
    image2:
      'https://img.freepik.com/free-photo/blue-wooden-board-with-slice-chicken-meat-mint_114579-86346.jpg',
    image3:
      'https://img.freepik.com/free-photo/blue-wooden-board-with-slice-chicken-meat-mint_114579-86346.jpg',
    new_price: 24.99,
    old_price: 30.5,
  },
  {
    id: 8,
    name: 'Chicken & Liver Wet Food',
    category: 'Food',
    image:
      'https://img.freepik.com/free-photo/healthy-fresh-pet-food-ingredients-white-wooden-surface_1150-42117.jpg',
    image1:
      'https://img.freepik.com/free-photo/healthy-fresh-pet-food-ingredients-white-wooden-surface_1150-42117.jpg',
    image2:
      'https://img.freepik.com/free-photo/healthy-fresh-pet-food-ingredients-white-wooden-surface_1150-42117.jpg',
    image3:
      'https://img.freepik.com/free-photo/healthy-fresh-pet-food-ingredients-white-wooden-surface_1150-42117.jpg',
    new_price: 4.25,
    old_price: 5.99,
  },
  {
    id: 9,
    name: 'Turkey & Sweet Potato Dry Food',
    category: 'Food',
    image:
      'https://img.freepik.com/free-photo/healthy-fresh-pet-food-ingredients-dark-surface_1150-42125.jpg',
    image1:
      'https://img.freepik.com/free-photo/healthy-fresh-pet-food-ingredients-dark-surface_1150-42125.jpg',
    image2:
      'https://img.freepik.com/free-photo/healthy-fresh-pet-food-ingredients-dark-surface_1150-42125.jpg',
    image3:
      'https://img.freepik.com/free-photo/healthy-fresh-pet-food-ingredients-dark-surface_1150-42125.jpg',
    new_price: 22.99,
    old_price: 29.99,
  },
  {
    id: 10,
    name: 'Vegetable Wet Food',
    category: 'Food',
    image:
      'https://img.freepik.com/free-photo/arrangement-frozen-food-table_23-2148969435.jpg',
    image1:
      'https://img.freepik.com/free-photo/arrangement-frozen-food-table_23-2148969435.jpg',
    image2:
      'https://img.freepik.com/free-photo/arrangement-frozen-food-table_23-2148969435.jpg',
    image3:
      'https://img.freepik.com/free-photo/arrangement-frozen-food-table_23-2148969435.jpg',
    new_price: 3.95,
    old_price: 6.95,
  },
  {
    id: 11,
    name: 'Venison & Pumpkin Dry Dog Food',
    category: 'Food',
    image:
      'https://img.freepik.com/free-photo/yellow-bucket-full-pumpkin-peeled-seeds-with-fresh-sliced-pumpkin-marble-wall_114579-30303.jpg',
    image1:
      'https://img.freepik.com/free-photo/yellow-bucket-full-pumpkin-peeled-seeds-with-fresh-sliced-pumpkin-marble-wall_114579-30303.jpg',
    image2:
      'https://img.freepik.com/free-photo/yellow-bucket-full-pumpkin-peeled-seeds-with-fresh-sliced-pumpkin-marble-wall_114579-30303.jpg',
    image3:
      'https://img.freepik.com/free-photo/yellow-bucket-full-pumpkin-peeled-seeds-with-fresh-sliced-pumpkin-marble-wall_114579-30303.jpg',
    new_price: 26.99,
    old_price: 33.5,
  },
  {
    id: 12,
    name: 'Duck & Potato Wet Dog Food',
    category: 'Food',
    image:
      'https://img.freepik.com/free-photo/purple-beetroot-carrot-salad-wooden-board_114579-56764.jpg',
    image1:
      'https://img.freepik.com/free-photo/purple-beetroot-carrot-salad-wooden-board_114579-56764.jpg',
    image2:
      'https://img.freepik.com/free-photo/purple-beetroot-carrot-salad-wooden-board_114579-56764.jpg',
    image3:
      'https://img.freepik.com/free-photo/purple-beetroot-carrot-salad-wooden-board_114579-56764.jpg',
    new_price: 4.35,
    old_price: 6.75,
  },

  // Dog Toys (6 items)
  {
    id: 13,
    name: 'Rubber Bone Chew Toy',
    category: 'Toys',
    image:
      'https://img.freepik.com/free-photo/dental-dog-snacks-collar_23-2147828989.jpg',
    image1:
      'https://img.freepik.com/free-photo/dental-dog-snacks-collar_23-2147828989.jpg',
    image2:
      'https://img.freepik.com/free-photo/dental-dog-snacks-collar_23-2147828989.jpg',
    image3:
      'https://img.freepik.com/free-photo/dental-dog-snacks-collar_23-2147828989.jpg',
    new_price: 7.99,
    old_price: 11.5,
  },
  {
    id: 14,
    name: 'Plush Squeaky Dog Toy',
    category: 'Toys',
    image:
      'https://img.freepik.com/free-photo/cute-dog-playing-with-little-rubber-balls_23-2148366917.jpg',
    image1:
      'https://img.freepik.com/free-photo/cute-dog-playing-with-little-rubber-balls_23-2148366917.jpg',
    image2:
      'https://img.freepik.com/free-photo/cute-dog-playing-with-little-rubber-balls_23-2148366917.jpg',
    image3:
      'https://img.freepik.com/free-photo/cute-dog-playing-with-little-rubber-balls_23-2148366917.jpg',
    new_price: 6.49,
    old_price: 9.99,
  },
  {
    id: 15,
    name: 'Soft Toy',
    category: 'Toys',
    image:
      'https://img.freepik.com/free-psd/view-children-s-stuffed-animal_23-2151517699.jpg',
    image1:
      'https://img.freepik.com/free-psd/view-children-s-stuffed-animal_23-2151517699.jpg',
    image2:
      'https://img.freepik.com/free-psd/view-children-s-stuffed-animal_23-2151517699.jpg',
    image3:
      'https://img.freepik.com/free-psd/view-children-s-stuffed-animal_23-2151517699.jpg',
    new_price: 4.99,
    old_price: 6.99,
  },
  {
    id: 16,
    name: 'Interactive Tug Rope Toy',
    category: 'Toys',
    image:
      'https://img.freepik.com/free-photo/beautiful-border-collie-dog-training-with-owner_23-2149304046.jpg?',
    image1:
      'https://img.freepik.com/free-photo/beautiful-border-collie-dog-training-with-owner_23-2149304046.jpg?',
    image2:
      'https://img.freepik.com/free-photo/beautiful-border-collie-dog-training-with-owner_23-2149304046.jpg?',
    image3:
      'https://img.freepik.com/free-photo/beautiful-border-collie-dog-training-with-owner_23-2149304046.jpg?',
    new_price: 5.25,
    old_price: 7.75,
  },
  {
    id: 17,
    name: 'Rubber Treat Dispenser Ball',
    category: 'Toys',
    image:
      'https://img.freepik.com/free-psd/scene-with-brown-white-dog_23-2150179264.jpg',
    image1:
      'https://img.freepik.com/free-psd/scene-with-brown-white-dog_23-2150179264.jpg',
    image2:
      'https://img.freepik.com/free-psd/scene-with-brown-white-dog_23-2150179264.jpg',
    image3:
      'https://img.freepik.com/free-psd/scene-with-brown-white-dog_23-2150179264.jpg',
    new_price: 8.99,
    old_price: 12.5,
  },
  {
    id: 18,
    name: 'Play Games Toy',
    category: 'Toys',
    image:
      'https://img.freepik.com/free-photo/cocker-spaniel-plays-games-home_1303-27279.jpg',
    image1:
      'https://img.freepik.com/free-photo/cocker-spaniel-plays-games-home_1303-27279.jpg',
    image2:
      'https://img.freepik.com/free-photo/cocker-spaniel-plays-games-home_1303-27279.jpg',
    image3:
      'https://img.freepik.com/free-photo/cocker-spaniel-plays-games-home_1303-27279.jpg',
    new_price: 4.75,
    old_price: 6.25,
  },
  {
    id: 19,
    name: 'Beautiful Chew Toy',
    category: 'Toys',
    image:
      'https://img.freepik.com/free-photo/close-up-beautiful-dachshund-dog-with-chewing-toy_23-2149202558.jpg',
    image1:
      'https://img.freepik.com/free-photo/close-up-beautiful-dachshund-dog-with-chewing-toy_23-2149202558.jpg',
    image2:
      'https://img.freepik.com/free-photo/close-up-beautiful-dachshund-dog-with-chewing-toy_23-2149202558.jpg',
    image3:
      'https://img.freepik.com/free-photo/close-up-beautiful-dachshund-dog-with-chewing-toy_23-2149202558.jpg',
    new_price: 4.99,
    old_price: 6.99,
  },
  {
    id: 20,
    name: 'Chew Toys Kit',
    category: 'Toys',
    image:
      'https://img.freepik.com/free-photo/pet-accessories-isolated-white_93675-128961.jpg',
    image1:
      'https://img.freepik.com/free-photo/pet-accessories-isolated-white_93675-128961.jpg',
    image2:
      'https://img.freepik.com/free-photo/pet-accessories-isolated-white_93675-128961.jpg',
    image3:
      'https://img.freepik.com/free-photo/pet-accessories-isolated-white_93675-128961.jpg',
    new_price: 4.99,
    old_price: 6.99,
  },
  {
    id: 21,
    name: 'Tennis Ball Pack (3 pcs)',
    category: 'Toys',
    image:
      'https://img.freepik.com/free-photo/portrait-adorable-cavapoo-dog-holding-tennis-ball-park-sunny-day_181624-59516.jpg',
    image1:
      'https://img.freepik.com/free-photo/portrait-adorable-cavapoo-dog-holding-tennis-ball-park-sunny-day_181624-59516.jpg',
    image2:
      'https://img.freepik.com/free-photo/portrait-adorable-cavapoo-dog-holding-tennis-ball-park-sunny-day_181624-59516.jpg',
    image3:
      'https://img.freepik.com/free-photo/portrait-adorable-cavapoo-dog-holding-tennis-ball-park-sunny-day_181624-59516.jpg',
    new_price: 4.99,
    old_price: 6.99,
  },
];

export default all_products;
