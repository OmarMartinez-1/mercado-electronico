// export const constant = {
//   SPACING: 16,
//   borderRadius: 10,
//   titleFontSize: 24,
//   textFontSize: 16,
//   subTextFontSize: 14,
// }


export const heightCardAccessories = 128

type Screen = {
  screen: string;
  path?: string
};

type MenuList = {
  title: string;
  screens: Screen[];
};

type MenuItems = {
  title: string;
  route: string;
  menuList: MenuList[];
};



export const drawerMenu: MenuItems[] = [
  {
    title: "Products",
    route: 'Products',
    menuList: [
      {
        title: 'By Function',
        screens: [
          { screen: "Desk", path: "/collections/woodenDesks" },
          { screen: "Desk Organization", path: "/collections/deskOrganization" },
          { screen: "Charging Docks" },
          { screen: "Wireless charging" },
          { screen: "Sleeves & Cases" },
          { screen: "Stands" }
        ]
      },

      {
        title: 'By Device',
        screens: [
          { screen: "iPhone" },
          { screen: "iPad" },
          { screen: "AirPods" },
          { screen: "MacBook" },
          { screen: "Apple Watch" },
          { screen: "iMac" }
        ]
      },

      {
        title: 'By Collection',
        screens: [
          { screen: "OakyBlocks" },
          { screen: "Slim" },
          { screen: "Geometric" },
          { screen: "Home Office Essentials" },
          { screen: "MagSafe" }
        ]
      },
    ]
  },


  {
    title: "About",
    route: 'About',
    menuList: [
      {
        title: 'Our Story',
        screens: [
          { screen: "Find out more about Oakywood roots" },
        ]

      },
      {
        title: 'Our Materials',
        screens: [
          { screen: "Sustainable design" },
        ]
      },
      {
        title: 'Environmental Initiatives',
        screens: [
          { screen: "We care about the planet and other people" },
        ]
      },
      {
        title: 'Production process',
        screens: [
          { screen: "Inspired by nature" },
        ]
      },
    ]
  },



  {
    title: "Blog",
    route: 'Blog',
    menuList: [
      {
        title: 'Go to our blog',
        screens: [
          { screen: "Read our recent articles and get to know us better" },
        ]
      }
    ]
  },


  {
    title: "Contact",
    route: 'Contact',
    menuList: [
      {
        title: 'Social Media',
        screens: [
          { screen: "Instagram" },
          { screen: "Facebook" },
          { screen: "Pinterest" },
        ]
      },
      {
        title: 'Reach us at',
        screens: [
          {
            screen: `WhatsApp
        Call +48 797 217 197
        contact@oakywood.shop` },
        ]
      },
    ]
  },


  {
    title: "Reviews",
    route: 'Reviews',
    menuList: [
      {
        title: 'Reviews',
        screens: [
          {
            screen: `WhatsApp
        Call +48 797 217 197
        contact@oakywood.shop` },
        ]
      },
    ]
  },
]

type Product = {
  number: {

    name: string,
    price: number,
    image: any,
  }

}


export const Products = [
  {
    id: 1,
    name: "Standing Desk",
    price: 1100,
    image: require("../assets/images/standingDesk.webp"),
  },
  {
    id: 2,
    name: "Classic Desk",
    price: 550,
    image: require("../assets/images/standingDesk.webp"),
  },
  {
    id: 3,
    name: "Desk Shelf",
    price: 180,
    image: require("../assets/images/standingDesk.webp"),
  },
  {
    id: 4,
    name: "Laptop Stand",
    price: 150,
    image: require("../assets/images/standingDesk.webp"),
  },
  {
    id: 5,
    name: "Monitor Stand",
    price: 120,
    image: require("../assets/images/standingDesk.webp"),
  },
  {
    id: 6,
    name: "Felt&Cork Desk Mat",
    price: 70,
    image: require("../assets/images/standingDesk.webp"),
  },
  {
    id: 7,
    name: "Catchall Tray",
    price: 45,
    image: require("../assets/images/standingDesk.webp"),
  },
  {
    id: 8,
    name: "Triple Dock",
    price: 90,
    image: require("../assets/images/standingDesk.webp"),
  },
  {
    id: 9,
    name: "Dual Laptop Dock",
    price: 70,
    image: require("../assets/images/standingDesk.webp"),
  },
  {
    id: 10,
    name: "Laptop Dock",
    price: 60,
    image: require("../assets/images/standingDesk.webp"),
  },
  {
    id: 11,
    name: "2in1 Headphones Stand",
    price: 100,
    image: require("../assets/images/standingDesk.webp"),
  },
  {
    id: 12,
    name: "Headphones Stand",
    price: 60,
    image: require("../assets/images/standingDesk.webp"),
  },
  {
    id: 13,
    name: "Underdesk Organizer",
    price: 150,
    image: require("../assets/images/standingDesk.webp"),
  },
  {
    id: 14,
    name: "Slim Charging Pad",
    price: 70,
    image: require("../assets/images/standingDesk.webp"),
  },
  {
    id: 15,
    name: "Geometric Charging Pad",
    price: 90,
    image: require("../assets/images/standingDesk.webp"),
  },
  {
    id: 16,
    name: "Pen Tray (OakyBlocks)",
    price: 50,
    image: require("../assets/images/standingDesk.webp"),
  },
  {
    id: 17,
    name: "Large Tray (OakyBlocks)",
    price: 50,
    image: require("../assets/images/standingDesk.webp"),
  },
  {
    id: 18,
    name: "Small Tray (OakyBlocks)",
    price: 40,
    image: require("../assets/images/standingDesk.webp"),
  },
  {
    id: 19,
    name: "Sticky Notes Tray (OakyBlocks)",
    price: 40,
    image: require("../assets/images/standingDesk.webp"),
  },
  {
    id: 20,
    name: "Charging Pad (OakyBlocks)",
    price: 70,
    image: require("../assets/images/standingDesk.webp"),
  },
  {
    id: 21,
    name: "Smartphone Stand (OakyBlocks)",
    price: 40,
    image: require("../assets/images/standingDesk.webp"),
  },
  {
    id: 22,
    name: "Combo Dock",
    price: 70,
    image: require("../assets/images/standingDesk.webp"),
  },
  {
    id: 23,
    name: "Dual Dock",
    price: 80,
    image: require("../assets/images/standingDesk.webp"),
  },
  {
    id: 24,
    name: "iPhone Dock",
    price: 50,
    image: require("../assets/images/standingDesk.webp"),
  },
  {
    id: 25,
    name: "Apple Watch Dock",
    price: 40,
    image: require("../assets/images/standingDesk.webp"),
  },
  {
    id: 26,
    name: "Gift Card",
    price: 25,
    image: require("../assets/images/standingDesk.webp"),
  },
  {
    id: 27,
    name: "Felt Cable Ties - Set of 3",
    price: 25,
    image: require("../assets/images/standingDesk.webp"),
  },
  {
    id: 28,
    name: "Felt&Cork Mouse Pad",
    price: 35,
    image: require("../assets/images/standingDesk.webp"),
  },
  {
    id: 29,
    name: "Felt&Cork Coasters",
    price: 30,
    image: require("../assets/images/standingDesk.webp"),
  },
  {
    id: 30,
    name: "Cubic Pot",
    price: 40,
    image: require("../assets/images/standingDesk.webp"),
  },
  {
    id: 31,
    name: "Geometric Pen Pot",
    price: 50,
    image: require("../assets/images/standingDesk.webp"),
  },
  {
    id: 32,
    name: "AirPods Case",
    price: 50,
    image: require("../assets/images/standingDesk.webp"),
  },
  {
    id: 33,
    name: "Felt MacBook Sleeve",
    price: 60,
    image: require("../assets/images/standingDesk.webp"),
  },
  {
    id: 34,
    name: "Felt iPad Sleeve",
    price: 60,
    image: require("../assets/images/standingDesk.webp"),
  },
  {
    id: 35,
    name: "Geometric Dock",
    price: 50,
    image: require("../assets/images/standingDesk.webp"),
  },
  {
    id: 36,
    name: "MagSafe iPhone Wall Mount",
    price: 80,
    image: require("../assets/images/standingDesk.webp"),
  },
  {
    id: 37,
    name: "MagSafe iPhone Stand",
    price: 150,
    image: require("../assets/images/standingDesk.webp"),
  },
  {
    id: 38,
    name: "MagSafe iPhone Desk Shelf Mount",
    price: 90,
    image: require("../assets/images/standingDesk.webp"),
  },
  {
    id: 39,
    name: "Magnetic Charging Apple Watch Stand",
    price: 90,
    image: require("../assets/images/standingDesk.webp"),
  },
  {
    id: 40,
    name: "Dual Slim Charging Pad",
    price: 110,
    image: require("../assets/images/standingDesk.webp"),
  },
  {
    id: 41,
    name: "Casters - Set of 4",
    price: 50,
    image: require("../assets/images/standingDesk.webp"),
  },
  {
    id: 42,
    name: "Maintenance Kit",
    price: 40,
    image: require("../assets/images/standingDesk.webp"),
  },
]




export const woodenDesks: any = {
  topImage: require("../assets/images/woodenDesks.webp"),
  title: "Wooden Desks",
  titleDescription: "A desk tailored to your needs",
  textDescription: "Oakywood desks transform the idea of workplace comfort. The functional design, fine materials, and detail-oriented craftsmanship ensure our desks are perfectly ergonomic. Choose a classic wooden desk or a modern desk with automatic height regulation and enjoy a higher level of comfort in your everyday job.",
  productsIds: [1, 2],
  accessories: [13, 41, 42],
  titleAboutProducts: "Solid Wooden Desks from real, natural wood",
  textAboutProducts: "With the rise of remote and hybrid working, it has become increasingly important to invest in a high-quality computer desk. The perfect desk should be comfortable, ergonomic, and functional. Oakywood’s wooden desks offer all of these benefits while also being aesthetically pleasing and crafted from natural, sustainably sourced materials. They last for years if maintained properly, making them a great option for those who plan on using their desks long-term.",
}

export const desksOrganization: any = {
  topImage: require("../assets/images/woodenDesks.webp"),
  title: "Desk Organization",
  titleDescription: "Optimized desk space",
  textDescription: "Good desk organization facilitates productivity, time management, and helps you concentrate on the task at hand. Oakywood accessories can help you construct and optimize your workspace. Arrange small items, place your laptop at an ergonomic position, charge your smartphone on a stylish wireless charger and start working comfortably.",
  productsIds: [],
  accessories: [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12],
  titleAboutProducts: "Desk Accessories",
  textAboutProducts: "Desk clutter can be not just annoying but also productivity-inhibiting. In an effort to regain order, accessories such as Desk Shelf, Monitor Stand, Mouse Pad, or a variety of desk organizers can prove invaluable. With these tools, the task of desk organization is made infinitely easier. If you use laptop or tablet as a work tool on a daily basis, a Laptop Stand will place devices at eye level so you wont have to hunch over your desk. Accessories like desk mat, wooden tray, wireless charging pad, or phone stand will allow you to work in an environment thats not just orderly but conducive to productivity – giving you all the resources you need right at your fingertips.",
}


