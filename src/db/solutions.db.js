import randomIcon from "../assets/icons/mail.png";

export const solutionsList = [
  {
    name: {
      uz: "Uy",
      ru: "Dom",
      en: "House",
    },
    slug: "home",
  },
  {
    name: {
      uz: "Kvartira",
      ru: "Kvartira",
      en: "Flat",
    },
    slug: "flat",
  },
  {
    name: {
      uz: "Maktab",
      ru: "Shkola",
      en: "school",
    },
    slug: "school",
  },
];

export const singleSolutionWithContent = {
  pageImage:
    "https://knx24.com/local/templates/knx24/assets/images/solutions/s4/s4_light.jpg",
  name: {
    uz: "Maktab",
    ru: "Shkola",
    en: "school",
  },
  servicesForSolution: [
    {
      title: {
        ru: "Управление освещением",
        en: "Lighting control",
        uz: "Yoritishni boshqarish",
      },
      content: {
        uz: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis soluta et repellat iure illum mollitia.",
        ru: "Обеспечиваем комфортное получение знаний и усваивание материала учениками. Автоматизированное освещение, изменяющееся в зависимости от кол-ва света на улице. ",
        en: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis soluta et repellat iure illum mollitia.",
      },
      features: [
        {
          title: {
            uz: "Lorem ipsum",
            ru: "Lorem ipsum",
            en: "Lorem ipsum",
          },
          icon: randomIcon,
        },
        {
          title: {
            uz: "Lorem ipsum",
            ru: "Lorem ipsum",
            en: "Lorem ipsum",
          },
          icon: randomIcon,
        },
      ],
      image: "https://images.com/cat.jpg",
    },
    {
      title: {
        uz: "Temperatura boshqarish",
        en: "Climat control",
        ru: "Управление климатом",
      },
      content: {
        uz: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis soluta et repellat iure illum mollitia.",
        ru: "Обеспечиваем комфортное получение знаний и усваивание материала учениками. Автоматизированное освещение, изменяющееся в зависимости от кол-ва света на улице. ",
        en: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis soluta et repellat iure illum mollitia.",
      },
      features: [
        {
          title: {
            uz: "Lorem ipsum",
            ru: "Lorem ipsum",
            en: "Lorem ipsum",
          },
          icon: randomIcon,
        },

        {
          title: {
            uz: "Lorem ipsum",
            ru: "Lorem ipsum",
            en: "Lorem ipsum",
          },
          icon: randomIcon,
        },
      ],
      image: "https://images.com/cat.jpg",
    },
  ],
  slug: "school",
};
