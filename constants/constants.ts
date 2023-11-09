

export const constant = {
  SPACING: 16,
  borderRadius: 10,
  titleFontSize: 24,
  textFontSize: 16,
  subTextFontSize: 14,
}

type Screen = {
  screen: string;
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
          { screen: "Desk" },
          { screen: "Desk Organization" },
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