// All package content lives here. Cards and the details page are built from this list,
// so adding a new package only needs a new entry below.

const DEFAULT_EXCLUDES = [
    'Personal expenses and tips',
    'Travel insurance',
    'Anything not listed under inclusions'
];

const PACKAGES = [
    {
        id: 'kerala',
        name: 'Kerala Backwaters Escape',
        location: 'Kochi · Munnar · Alleppey',
        photo: 'photo-1602216056096-3b40cc0c9944',
        gradient: 'linear-gradient(135deg, #7fc98f, #14705f)',
        badge: '20% OFF',
        days: 5,
        rating: 4.8,
        reviews: 312,
        price: 18499,
        bestTime: 'Sep - Mar',
        groupSize: '2 - 12 people',
        tags: ['india', 'beach', 'honeymoon'],
        keywords: 'alleppey munnar kochi houseboat',
        chips: ['Hotel', 'Houseboat', 'Breakfast', 'Cab'],
        short: 'Houseboat stay in Alleppey, Munnar tea gardens and Kochi sightseeing.',
        overview: 'Slow down in God\'s Own Country. This trip takes you from the colonial lanes of Fort Kochi to the misty tea hills of Munnar, and ends with a night on a private houseboat drifting through the Alleppey backwaters.',
        highlights: [
            'Overnight stay on a private houseboat',
            'Tea plantation walk and tasting in Munnar',
            'Kathakali performance in Kochi',
            'Sunset at Alleppey beach'
        ],
        itinerary: [
            { title: 'Arrive in Kochi', text: 'Airport pickup, check in and an evening walk past the Chinese fishing nets of Fort Kochi.' },
            { title: 'Kochi to Munnar', text: 'Scenic drive through spice plantations with stops at Cheeyappara and Valara waterfalls.' },
            { title: 'Munnar sightseeing', text: 'Tea museum, Mattupetty Dam, Echo Point and a guided plantation walk.' },
            { title: 'Munnar to Alleppey', text: 'Board your houseboat at noon and cruise the backwaters. Lunch, dinner and stay on board.' },
            { title: 'Departure', text: 'Breakfast on the houseboat, then transfer to Kochi airport.' }
        ],
        includes: ['3 nights in 4-star hotels', '1 night on a private houseboat', 'Daily breakfast, all meals on houseboat', 'Private AC cab for all transfers', 'Kathakali show tickets']
    },
    {
        id: 'ladakh',
        name: 'Ladakh Road Adventure',
        location: 'Leh · Nubra · Pangong',
        photo: 'photo-1581793745862-99fde7fa73d2',
        gradient: 'linear-gradient(135deg, #d9b98f, #4a6f91)',
        badge: 'Bestseller',
        days: 7,
        rating: 4.9,
        reviews: 428,
        price: 27999,
        bestTime: 'May - Sep',
        groupSize: '4 - 14 people',
        tags: ['india', 'mountains'],
        keywords: 'leh nubra pangong bike khardung',
        chips: ['Hotel', 'Camp stay', 'Meals', 'Permits'],
        short: 'Leh, Nubra Valley and Pangong Lake with bike or SUV options.',
        overview: 'High passes, blue lakes and ancient monasteries. Ride or drive across some of the highest motorable roads in the world, sleep under a sky full of stars in Nubra and wake up beside Pangong Lake.',
        highlights: [
            'Cross Khardung La at 17,982 ft',
            'Camel ride on the Hunder sand dunes',
            'Lakeside camp at Pangong Tso',
            'Thiksey and Hemis monasteries'
        ],
        itinerary: [
            { title: 'Arrive in Leh', text: 'Airport pickup and a full day of rest to get used to the altitude.' },
            { title: 'Leh local sightseeing', text: 'Shanti Stupa, Leh Palace, Magnetic Hill and the Indus-Zanskar confluence.' },
            { title: 'Leh to Nubra Valley', text: 'Drive over Khardung La to Hunder. Evening camel ride on the dunes.' },
            { title: 'Nubra to Pangong', text: 'Follow the Shyok river to Pangong Lake. Stay in a lakeside camp.' },
            { title: 'Pangong to Leh', text: 'Sunrise at the lake, then return to Leh via Chang La.' },
            { title: 'Monastery day', text: 'Visit Thiksey, Hemis and Shey Palace. Free evening in Leh market.' },
            { title: 'Departure', text: 'Transfer to Leh airport after breakfast.' }
        ],
        includes: ['4 nights hotel, 2 nights camp stay', 'Breakfast and dinner every day', 'SUV with driver (bike on request)', 'Inner line permits', 'Oxygen cylinder in the vehicle']
    },
    {
        id: 'maldives',
        name: 'Maldives Island Retreat',
        location: 'South Malé Atoll',
        photo: 'photo-1514282401047-d79a71a590e8',
        gradient: 'linear-gradient(135deg, #6fd3e0, #0e7c86)',
        badge: 'Honeymoon',
        days: 4,
        rating: 4.7,
        reviews: 196,
        price: 64999,
        bestTime: 'Nov - Apr',
        groupSize: 'Couples & families',
        tags: ['international', 'beach', 'honeymoon'],
        keywords: 'island water villa snorkelling male',
        chips: ['Water villa', 'All meals', 'Speedboat'],
        short: 'Water villa stay, snorkelling trip and a candlelight dinner by the sea.',
        overview: 'Three nights in an overwater villa with nothing but turquoise water around you. Snorkel over coral reefs, watch dolphins at sunset and end the trip with a private dinner on the beach.',
        highlights: [
            'Overwater villa with a private deck',
            'Guided snorkelling on the house reef',
            'Sunset dolphin cruise',
            'Private candlelight beach dinner'
        ],
        itinerary: [
            { title: 'Arrive in Malé', text: 'Speedboat transfer to the resort, welcome drink and a free evening.' },
            { title: 'Reef and lagoon', text: 'Morning snorkelling trip, afternoon at leisure, sunset dolphin cruise.' },
            { title: 'Island day', text: 'Optional water sports or spa, followed by a candlelight dinner on the beach.' },
            { title: 'Departure', text: 'Breakfast and speedboat transfer back to Malé airport.' }
        ],
        includes: ['3 nights in a water villa', 'Breakfast, lunch and dinner', 'Return speedboat transfers', 'Snorkelling gear and guide', 'One candlelight dinner']
    },
    {
        id: 'goa',
        name: 'Goa Beach Holiday',
        location: 'North & South Goa',
        photo: 'photo-1512343879784-a960bf40e7f2',
        gradient: 'linear-gradient(135deg, #f6a560, #1c9fb0)',
        badge: 'Budget',
        days: 4,
        rating: 4.6,
        reviews: 540,
        price: 8999,
        bestTime: 'Oct - Mar',
        groupSize: '2 - 20 people',
        tags: ['india', 'beach'],
        keywords: 'baga calangute panjim palolem',
        chips: ['Resort', 'Breakfast', 'Cruise', 'Cab'],
        short: 'North and South Goa beaches, a sunset cruise and Old Goa churches.',
        overview: 'Sun, sand and seafood. Spend your days hopping between lively North Goa beaches and the quiet shores of the south, with a sunset cruise on the Mandovi and time to explore Portuguese-era Old Goa.',
        highlights: [
            'Beach resort a short walk from the sea',
            'Sunset cruise on the Mandovi river',
            'Basilica of Bom Jesus and Old Goa',
            'Dudhsagar waterfall trip (optional)'
        ],
        itinerary: [
            { title: 'Arrive in Goa', text: 'Airport or station pickup, check in and an evening at Baga beach.' },
            { title: 'North Goa', text: 'Fort Aguada, Calangute, Anjuna and Vagator, ending with the Mandovi cruise.' },
            { title: 'South Goa', text: 'Old Goa churches, Mangeshi temple, Miramar and Colva beach.' },
            { title: 'Departure', text: 'Free morning for shopping, then transfer to the airport.' }
        ],
        includes: ['3 nights in a beach resort', 'Daily breakfast', 'Sunset cruise tickets', 'AC cab for sightseeing and transfers']
    },
    {
        id: 'manali',
        name: 'Manali Snow Getaway',
        location: 'Manali · Solang · Kullu',
        photo: 'photo-1506905925346-21bda4d32df4',
        gradient: 'linear-gradient(135deg, #8fb7d9, #2d4f6e)',
        badge: 'Snow',
        days: 5,
        rating: 4.7,
        reviews: 389,
        price: 10499,
        bestTime: 'Dec - Feb, Apr - Jun',
        groupSize: '2 - 16 people',
        tags: ['india', 'mountains', 'honeymoon'],
        keywords: 'solang rohtang kullu himachal atal tunnel',
        chips: ['Hotel', 'Breakfast & dinner', 'Volvo'],
        short: 'Solang Valley, Atal Tunnel and Kullu rafting with a riverside stay.',
        overview: 'A classic Himalayan break. Stay beside the Beas river, play in the snow at Solang, drive through the Atal Tunnel to Sissu and finish with river rafting in Kullu.',
        highlights: [
            'Riverside hotel with mountain views',
            'Snow activities in Solang Valley',
            'Atal Tunnel and Sissu waterfall',
            'River rafting in Kullu'
        ],
        itinerary: [
            { title: 'Overnight Volvo from Delhi', text: 'Board an evening AC Volvo from Delhi to Manali.' },
            { title: 'Arrive in Manali', text: 'Check in, rest, then visit Hadimba Temple, Old Manali and Mall Road.' },
            { title: 'Solang and Atal Tunnel', text: 'Snow activities at Solang, then drive through the tunnel to Sissu.' },
            { title: 'Kullu and Manikaran', text: 'River rafting in Kullu and the hot springs at Manikaran. Evening Volvo to Delhi.' },
            { title: 'Back in Delhi', text: 'Reach Delhi in the morning.' }
        ],
        includes: ['2 nights in a riverside hotel', 'Breakfast and dinner', 'Return AC Volvo from Delhi', 'Private cab for sightseeing']
    },
    {
        id: 'golden-triangle',
        name: 'Golden Triangle Tour',
        location: 'Delhi · Agra · Jaipur',
        photo: 'photo-1524492412937-b28074a5d7da',
        gradient: 'linear-gradient(135deg, #e9c9a0, #a8643c)',
        badge: 'Classic',
        days: 6,
        rating: 4.8,
        reviews: 274,
        price: 15999,
        bestTime: 'Oct - Mar',
        groupSize: '2 - 15 people',
        tags: ['india', 'heritage'],
        keywords: 'taj mahal rajasthan amber fort',
        chips: ['Hotel', 'Breakfast', 'Guide', 'Cab'],
        short: 'Delhi, Agra and Jaipur with the Taj Mahal at sunrise and Amber Fort.',
        overview: 'Three cities, three faces of India. Walk through Mughal Delhi, watch the sun rise over the Taj Mahal and explore the forts and bazaars of the Pink City with expert local guides.',
        highlights: [
            'Sunrise visit to the Taj Mahal',
            'Amber Fort and City Palace in Jaipur',
            'Old Delhi rickshaw ride and food walk',
            'Fatehpur Sikri on the way to Jaipur'
        ],
        itinerary: [
            { title: 'Arrive in Delhi', text: 'Airport pickup, check in and an evening at India Gate.' },
            { title: 'Delhi sightseeing', text: 'Red Fort, Jama Masjid, Chandni Chowk, Humayun\'s Tomb and Qutub Minar.' },
            { title: 'Delhi to Agra', text: 'Drive to Agra. Visit Agra Fort and Mehtab Bagh at sunset.' },
            { title: 'Taj Mahal and Jaipur', text: 'Sunrise at the Taj Mahal, then on to Jaipur via Fatehpur Sikri.' },
            { title: 'Jaipur sightseeing', text: 'Amber Fort, City Palace, Jantar Mantar, Hawa Mahal and the local bazaars.' },
            { title: 'Departure', text: 'Drive back to Delhi or fly out from Jaipur.' }
        ],
        includes: ['5 nights in 4-star hotels', 'Daily breakfast', 'Private AC cab with driver', 'Local guide in each city', 'Monument entry tickets']
    },
    {
        id: 'paris',
        name: 'Paris Romantic Week',
        location: 'Paris · Versailles',
        photo: 'photo-1502602898657-3e91760cbb34',
        gradient: 'linear-gradient(135deg, #c9a3c9, #4b4a7a)',
        badge: 'Europe',
        days: 6,
        rating: 4.8,
        reviews: 158,
        price: 89999,
        bestTime: 'Apr - Jun, Sep - Oct',
        groupSize: 'Couples & small groups',
        tags: ['international', 'heritage', 'honeymoon'],
        keywords: 'france eiffel louvre europe versailles',
        chips: ['Flights', 'Hotel', 'Breakfast', 'Visa help'],
        short: 'Eiffel Tower, the Louvre, a Seine river cruise and a day at Versailles.',
        overview: 'The city of light at an easy pace. Stay in a boutique hotel in the heart of Paris, see the great museums without the queues and spend a day in the gardens of Versailles.',
        highlights: [
            'Eiffel Tower summit access',
            'Skip-the-line Louvre entry',
            'Evening Seine river cruise',
            'Day trip to the Palace of Versailles'
        ],
        itinerary: [
            { title: 'Arrive in Paris', text: 'Airport transfer, check in and an evening stroll along the Champs-Élysées.' },
            { title: 'Icons of Paris', text: 'Eiffel Tower summit, Trocadéro and an evening Seine cruise.' },
            { title: 'Art and history', text: 'The Louvre in the morning, Notre-Dame and the Latin Quarter after lunch.' },
            { title: 'Versailles', text: 'Full-day guided trip to the palace and its gardens.' },
            { title: 'Montmartre', text: 'Sacré-Cœur, artists\' square and a free afternoon for shopping.' },
            { title: 'Departure', text: 'Transfer to the airport for your flight home.' }
        ],
        includes: ['Return economy flights from Delhi', '5 nights in a boutique hotel', 'Daily breakfast', 'Airport transfers', 'Schengen visa assistance']
    },
    {
        id: 'bali',
        name: 'Bali Island Explorer',
        location: 'Ubud · Seminyak · Nusa Penida',
        photo: 'photo-1537996194471-e657df975ab4',
        gradient: 'linear-gradient(135deg, #7fc98f, #1f6b55)',
        badge: 'Popular',
        days: 6,
        rating: 4.9,
        reviews: 367,
        price: 45999,
        bestTime: 'Apr - Oct',
        groupSize: '2 - 12 people',
        tags: ['international', 'beach', 'honeymoon'],
        keywords: 'indonesia ubud nusa penida seminyak',
        chips: ['Flights', 'Pool villa', 'Breakfast'],
        short: 'Ubud rice terraces, a Nusa Penida day trip and sunset at Tanah Lot temple.',
        overview: 'Temples, rice terraces and beaches in one trip. Split your stay between a private pool villa in Ubud and the beach clubs of Seminyak, with a day trip to the cliffs of Nusa Penida.',
        highlights: [
            'Private pool villa in Ubud',
            'Tegalalang rice terraces and jungle swing',
            'Nusa Penida island day trip',
            'Sunset at Tanah Lot temple'
        ],
        itinerary: [
            { title: 'Arrive in Bali', text: 'Airport pickup and transfer to your villa in Ubud.' },
            { title: 'Ubud', text: 'Tegalalang rice terraces, Monkey Forest and Tirta Empul temple.' },
            { title: 'Kintamani', text: 'Volcano viewpoint, coffee plantation and Tegenungan waterfall.' },
            { title: 'Nusa Penida', text: 'Fast boat to the island for Kelingking, Broken Beach and Angel\'s Billabong.' },
            { title: 'Seminyak', text: 'Beach day, then sunset at Tanah Lot temple.' },
            { title: 'Departure', text: 'Transfer to the airport for your flight home.' }
        ],
        includes: ['Return economy flights', '3 nights pool villa, 2 nights beach hotel', 'Daily breakfast', 'Private car with driver', 'Nusa Penida boat tickets']
    },
    {
        id: 'dubai',
        name: 'Dubai Family Fun',
        location: 'Dubai · Abu Dhabi',
        photo: 'photo-1512453979798-5ea266f8880c',
        gradient: 'linear-gradient(135deg, #f0c27b, #4b1248)',
        badge: 'Family',
        days: 5,
        rating: 4.7,
        reviews: 221,
        price: 52999,
        bestTime: 'Nov - Mar',
        groupSize: 'Families & groups',
        tags: ['international'],
        keywords: 'uae burj khalifa desert safari abu dhabi',
        chips: ['Flights', 'Hotel', 'Breakfast', 'Visa'],
        short: 'Burj Khalifa, a desert safari with dinner, a dhow cruise and Dubai Mall.',
        overview: 'Big sights at a relaxed, kid-friendly pace. See the city from the top of Burj Khalifa, ride the dunes on a desert safari and take a day trip to Abu Dhabi\'s Grand Mosque.',
        highlights: [
            'Burj Khalifa 124th floor tickets',
            'Desert safari with BBQ dinner',
            'Dhow cruise at Dubai Marina',
            'Abu Dhabi city tour'
        ],
        itinerary: [
            { title: 'Arrive in Dubai', text: 'Airport transfer, check in and an evening dhow cruise with dinner.' },
            { title: 'Dubai city tour', text: 'Old Dubai, Jumeirah, Palm Jumeirah, then Burj Khalifa and the fountain show.' },
            { title: 'Desert safari', text: 'Free morning. Afternoon dune bashing, camel ride and BBQ dinner in the desert.' },
            { title: 'Abu Dhabi', text: 'Sheikh Zayed Grand Mosque, the Corniche and Ferrari World (optional).' },
            { title: 'Departure', text: 'Shopping at Dubai Mall, then transfer to the airport.' }
        ],
        includes: ['Return economy flights', '4 nights in a 4-star hotel', 'Daily breakfast', 'UAE tourist visa', 'All tours and transfers']
    }
];
