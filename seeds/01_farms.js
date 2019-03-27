'use strict'
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('farms').del()
    .then(function() {
      // Inserts seed entries
      return knex('farms').insert([{
          id: 1,
          name: "Agricultural Heritage Center",
          subtitle:"at the Lohr/McIntosh Farm",
          location: "8348 Ute Hwy., Longmont",
          contact: "303-776-8688",
          url: "https://www.bouldercounty.org/open-space/education/museums/agricultural-heritage-center/" ,
          website: "bouldercountyopenspace.org/ahc",
          description: "Get a glimpse into the history of agriculture in Boulder County and enjoy the rural surroundings. Interactive exhibits include a farmhouse furnished with items from the 1910s; animals on site April through October including chickens, pigs, draft horses and sheep; two barns; and an heirloom garden. It’s free to visit. Hours: April 1–October 31, every Friday, Saturday and Sunday 10am–5pm; November 1–March 31, the first Saturday of each month 10am–5pm. Check their website for special events, Barnyard Critter Day, and Crafts and Trades of Olden Days.",
          img: "ag-center.jpg",
          lat: 40.203064,
          lng: -105.158956
        },
        {
          id: 2,
          name: "Aspen Moon Farm",
          location: "7927 Hygiene Rd., Longmont",
          contact: "303-684-6848",
          url:"http://www.aspenmoonfarm.com/",
          website: "aspenmoonfarm.com",
          description: "Aspen Moon Farm has a seasonal, open-air roadside farm stand. Fresh, certified organic and biodynamic, everything they sell is 100-percent grown on the farm. Open April-December (weather permitting) 10am–6pm. See website for seasonal hours. Tours by reservation only.",
          img: "aspen-moon.jpg",
          lat: 40.188944,
          lng: -105.168419
        },
        {
          id: 3,
          name: "Boulder Bike Tours",
          subtitle:"Bike-to-Organic Farm Tours",
          location: "1770 13th St, Boulder",
          contact: "303-747-6191",
          url:"https://boulderbiketours.com/",
          website: "boulderbiketours.com",
          description: "Experience all that Boulder has to offer at the forefront of organic farming — local, fresh and accessible via beautiful, easy bike routes. Join a regular weekly tour, choosing between the Thursday Sunset Tour and Sunday Brunch Tour. Both tours include seasoned, local guides, scenic rides on bike paths and country roads, a harvest-fresh meal at the farm, education about organic farming and lifestyle from local growers, and beautiful views of the Rocky Mountains and plains. Thursday evening Sunset Tours to close-in 63rd Street Farm start and end in downtown Boulder (see map) and include a wood-fired pizza dinner on the farm, featuring veggies harvested that day. Sunday Brunch Tours start and end at Sol y Sombra Farm in north Boulder County and include a four-course farm brunch using fresh-harvested produce and products. Bike rentals (including electric bikes) available; reservations required.",
          img: "bike-tours.jpg",
          lat: 40.0154027,
          lng: -105.2772966
        },
        {
          id: 4,
          name: "Boulder County Farmers Market",
          subtitle:"Boulder",
          location: "13th St., between Canyon and Arapahoe, Boulder",
          contact: "303-910-2236",
          url:"https://www.bcfm.org/",
          website: "bcfm.org",
          description: "The Boulder Farmers Market opened in 1987 as a growersonly market and today is a major attraction for both residents and visitors. In fact, it was named Best Farmers Market in the nation by readers of USA TODAY and 10Best. You’ll find beautiful produce, flowers, breads, honey, wine, cheese, prepared foods and more in a lively, festival atmosphere. The market’s season runs from the first Saturday in April through the Saturday preceding Thanksgiving, 8am–2pm. The Wednesday evening market runs from the first Wednesday in May to the first Wednesday in October, 4–8pm.",
          img: "boulder-farmers-market.jpg",
          lat: 40.015674,
          lng: -105.2776803
        },
        {
          id: 5,
          name: "Boulder County Farmers Market",
          subtitle:"Longmont",
          location: "Boulder County Fairgrounds 9595 Nelson Rd., Longmont",
          contact: "303-910-2236",
          url:"https://www.bcfm.org/",
          website: "bcfm.org",
          description: "This Longmont market began in 1989 and the Boulder County Farmers Markets began managing it in 2003, helping it blossom into a destination market, with ample free parking and a pavilion that features family-friendly music events. The market runs from the first Saturday in April through the Saturday preceding Thanksgiving, 8am–1pm.",
          img: "longmont-market.jpg",
          lat: 40.154309,
          lng: -105.129892
        },
        {
          id: 6,
          name: "Cure Organic Farm",
          location: "7450 Valmont Rd., Boulder",
          contact: "cureorganicfarm@yahoo.com",
          url:"https://www.cureorganicfarm.com/",
          website: "cureorganicfarm.com",
          description: "Cure Organic Farm is a family farm that grows 100 different varieties of certified organic vegetables, herbs and flowers on 12 acres. All crops are distributed within 50 miles of the farm through a CSA program, to local restaurants, via farmers’ markets and at the farm’s store (May–December). The farm is also home to several honeybee hives, a flock of hens and ducks, and heritage Berkshire and Mangalitsa pigs. Skeins of wool from Rambouillet sheep are available. Open Wed–Fri 11am–6pm and Sat–Sun 10am–4pm. They also offer classes, volunteer opportunities and tours by reservation.",
          img: "cure.jpg",
          lat: 40.033114,
          lng: -105.179855
        },
        {
          id: 7,
          name: "The Fresh Herb Co.",
          location: "4114 Oxford Rd., Longmont",
          contact: "303-449-5994",
          url:"https://thefreshherbco.com/",
          website: "thefreshherbco.com",
          description: "The Fresh Herb Co. offers culinary herbs, freshly cut flowers and ornamental succulents. Arrange a tour (by reservation only) to see the lovely grounds and maybe meet the resident farm cat, Watson. If you’re interested in renting the farm as a venue for a farm dinner, please inquire.",
          img: "fresh-herb-company.jpg",
          lat: 40.115396,
          lng: -105.257247
        },
        {
          id: 8,
          name: "Growing Gardens",
          location: "1630 Hawthorn Ave., Boulder",
          contact: "303-443-9952",
          url:"https://www.growinggardens.org/",
          website: "growinggardens.org",
          description: "Over the last 20 years, Growing Gardens has enriched thousands of lives through sustainable urban agriculture. They offer a variety of education programs for people of all ages and backgrounds. Their Children’s Peace Garden (ages 3-11) includes summer camps and an after-school garden club, and the Cultiva Youth Project (ages 12-18) provides teens with a leadership program. Seasonal adult classes include gardening, farm-to-table cooking, food preservation, bread making and beekeeping. Their Community Gardens give over 1,000 gardeners the space to grow their own food, and the Growing Gardens Food Project donates over 17,000 pounds of fresh produce annually.",
          img: "growing-gardens.jpg",
          lat: 40.034742,
          lng: -105.276434
        },
        {
          id: 9,
          name: "Hoot ‘n’ Howl Farm",
          location: "6033 Jay Rd., Boulder",
          contact: "303-530-9504",
          description: "Hoot ‘n’ Howl is Boulder County’s largest berry farm, with red, gold and black raspberries, strawberries, blackberries, gooseberries, elderberries, currants, flowers and asparagus. A farm stand also sells peaches, cherries, plums, nectarines, pears and apples from Early Morning Orchard in Palisade, Colorado, as well as 100-percent grass-fed beef from Lasater Ranch in Matheson. Open June– October, 9am–7pm daily.",
          img: "berry-farm.jpg",
          lat: 40.05115,
          lng: -105.212954
        },
        {
          id: 10,
          name: "Lone Hawk Farm",
          location: "10790 N. 49th St., Longmont",
          contact: "303-956-3866",
          url:"https://www.lonehawkfarms.com/",
          website: "lonehawkfarms.com",
          description: "Lone Hawk Farm encompasses 120 rolling acres of gardens, pastures, orchards and wildlife habitat. The farm stand is open daily throughout the growing season. Stop by for fresh, organic veggies, fruit, eggs, flowers and herbs grown in the farm’s Cooperative Community Gardens. The farm stand barn is located just down the road, south of the main farm entrance. They also offer picnicking (sit on the barn balcony!), farm dinners, special events, and opportunities for hikers, birders and photographers.",
          img: "lone-hawk.jpg",
          lat: 40.169958,
          lng: -105.239814
        },
        {
          id: 11,
          name: "Long’s Gardens",
          location: "3240 Broadway, Boulder",
          contact: "303-442-2353",
          url:"http://longsgardens.com/",
          website: "longsgardens.com",
          description: "This third-generation, familyowned and -operated iris farm is located right in the middle of Boulder. It was founded in 1905 by J.D.Long., and today, the farm specializes in bearded iris, sold to visitors as “dig them yourself.” In May and June, you can choose plants from labeled fields or the “anonymous” field for a bit of mystery.",
          img: "longs-farm.jpg",
          lat: 40.034471,
          lng: -105.281373
        },
        {
          id: 12,
          name: "McCauley Family Farm",
          location: "9421 N. 63rd St., Longmont",
          contact: "303-485-7688",
          url:"https://www.fromourfarm.org/",
          website: "fromourfarm.org",
          description: "Nestled into the foothills and irrigated by Rocky Mountain snowmelt, McCauley Family Farms is a whole-farm ecosystem that nourishes people and the planet. They are a certified organic farm offering 80–100 varieties of organic produce for farmers’ markets, restaurants and gourmet goods. In holistically managed pastures, they raise truly pastured chicken for meat and eggs, as well as lamb. Other offerings include culinary and medicinal herbs, seed saving, seasonal ferments and pickled goods. McCauley welcomes visitors to come learn, connect, volunteer and grow",
          img: "mccauley.jpg",
          lat: 40.145373,
          lng: -105.212089
        },
        {
          id: 13,
          name: "Mountain Flower Goat Dairy",
          location: "3240 Broadway, Boulder",
          contact: "518-605-8382",
          url:"https://mountainflowerdairy.com/",
          website: "mountainflowerdairy.com",
          description: "This local dairy “brings goats to people and people to goats.” Being a working dairy farm is at the heart of their nonprofit mission to practice land stewardship, humane treatment of animals and conservation through urban agriculture, education and advocacy. Mountain Flower connects urban dwellers back to the land, back to their food and back to nature. They offer private tours, team building, birthday parties, goat yoga classes, summer camps and raw milk shares. Open to the public every Saturday in June, 10am–1pm, and first Saturdays July-October, 10am–1pm.",
          img: "mtn-flower.jpg",
          lat: 40.034471,
          lng: -105.281373
        },
        {
          id: 14,
          name: "Munson Farms",
          location: "7355 Valmont Rd., Boulder",
          contact: "720-971-8847",
          url:"https://www.munsonfarms.com/",
          website: "munsonfarms.com",
          description: "Munson Farms is a local family farm raising fresh fruit and vegetables for more than 30 years. They are famous for their sweet corn and fall pumpkin patch. The farm stand — which has great views and has been voted the “Best of Boulder” farm stand for the last seven years — is open daily July through Thanksgiving. The produce is harvested daily, ensuring high quality and freshness.",
          img: "munson.jpg",
          lat: 40.033158,
          lng: -105.181935
        },
        {
          id: 15,
          name: "Ollin Farms",
          location: "8627 N. 95th St., Longmont",
          contact: "303-717-0586",
          url:"http://ollinfarms.com/",
          website: "ollinfarms.com",
          description: "Ollin Fams believes in the principle of sustainable agriculture, producing nutrientrich foods with minimum impact on the surrounding environment. They offer youth classes, farm dinners and a farm stand that is open daily June–October. It’s stocked with seasonal vegetables and fruit, and there’s always a helpful attendant on hand.",
          img: "ollin.jpg",
          lat: 40.13111,
          lng: -105.13272
        },
        {
          id: 16,
          name: "OSMP Antique Farm Equipment Exhibit",
          location: "66 S. Cherryvale Rd., Boulder",
          url:"https://bouldercolorado.gov/osmp/cultural-resources-antique-farm-equipment-exhibit",
          website: "https://bouldercolorado.gov/osmp/cultural-resources-antique-farm-equipment-exhibit",
          description: "Every item in this outdoor display at the old Viele/Van Vleet Ranch was used by farmers and ranchers on land that is now owned by the City of Boulder. At one time, each of these implements was essential to the farmers and ranchers who relied on them. Get a look back into how Boulder’s early farmers worked the land.",
          img: "osmp-exhibit.jpg",
          lat: 39.982371,
          lng: -105.217952
        },
        {
          id: 17,
          name: "Oxford Gardens",
          location: "10145 Oxford Rd., Longmont",
          contact: "303-817-9676",
          url:"http://oxfordgardensboulder.com/",
          website: "oxfordgardensboulder.com",
          description: "Oxford Gardens is a six-acre market farm that offers 25 types of vegetables (in more than 100 varieties) to local restaurants, food stores, food trucks and the Boulder Farmers Market. They also provide thousands of pounds of their famous carrots to the children of Boulder through the school district’s food program. Join them on the farm for volunteering, group tours by reservation or for local chef-led farm dinners with mountain views.",
          img: "farm_placeholder.jpg",
          lat: 40.11689,
          lng: -105.116248
        },
        {
          id: 18,
          name: "Pachamama Farm & Wellness",
          location: "10771 N. 49th St., Longmont ",
          contact: "716-860-3594",
          url:"http://pachamamafarm.com/",
          website: "pachamamafarm.com",
          description: "Pachamama Farm & Wellness is a beautiful farm tucked into the foothills of Boulder County. They strive to enhance the well-being of the community by producing pure food and medicinal herbs using organic methods, offering agricultural educational programs and providing healing arts services in nature. Come tour, volunteer in the vegetable fields or herb garden, take a workshop, attend a festival, or meet chickens, cats and a dog. Tours by reservation only.",
          img: "pachamama.jpg",
          lat: 40.168775,
          lng: -105.242317
        },
        {
          id: 19,
          name: "Rock Creek Farm",
          subtitle:"Pumpkin Patch & Corn Maze",
          location: "2005 S. 112th St., Broomfield",
          contact: "303-465-9565",
          url:"http://www.rockcreekfarm.com/",
          website: "rockcreekfarm.com",
          description: "Rock Creek Farm is a working farm offering a cornucopia of autumn fun. Venture into 100 acres of pumpkins waiting to be snipped from the vine; laugh as you explore six miles of fun and challenging corn mazes in three separate patterns; rub elbows with goats, free-ranging chickens, pigs and other farm animals; and take a hay ride to complete your experience. Little ones enjoy the hay-bale maze, a super-slide and more.",
          img: "rock-creek.jpg",
          lat: 39.95256,
          lng: -105.08929
        },
        {
          id: 20,
          name: "Shannon Red Barn Farm",
          location: "1341 95th St., Lafayette",
          contact: "303-651-2180",
          url:"http://shannonredbarnfarm.com/",
          website: "shannonredbarnfarm.com",
          description: "Shannon Red Barn Farm is a historic dairy farm that is listed on the National and State Registers of Historic Places and is a Boulder County Historic Landmark. Buildings include an 1870s grout chicken and milk house, a Victorian farmhouse, a 1919 clay-tile dairy barn, a studs-out granary and a WPA privy. You’ll also find a picturesque windmill, vintage farm and dairy equipment, and heirloom flowers. Farm history and garden tours, catered farm dinners, farm teas and farm photo opportunities are available by reservation.",
          img: "shannon-red-barn.jpg",
          lat: 40.00741,
          lng: -105.13108
        },
        {
          id: 21,
          name: "Three Leaf Farm",
          location: "445 S. 112th St., Lafayette",
          contact: "720-334-4724",
          url:"https://threeleaffarm.com/",
          website: "threeleaffarm.com",
          description: "Run by a husband-and-wife team of restauranteurs, Three Leaf Farm was created in 2010. Tucked along the banks of the Coal Creek with majestic views of the Continental Divide, the little urban farm is a pastoral oasis and home to goats, chickens, horses and honeybees. Almost all of their harvest goes directly to the owners’ six restaurants and their extensive catering services. They also host a full schedule of community farm dinners during the growing months, with menus creatively prepared by restaurant chefs. Visitors can learn about farm skills, homesteading techniques, herbal medicine and beekeeping.",
          img: "three-leaf.jpg",
          lat: 39.979018,
          lng: -105.09316
        }
      ]).then(() => {
        return knex.raw(`SELECT setval('farms_id_seq', (SELECT MAX(id) FROM farms));`
      )
    })
  })
}
