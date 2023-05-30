const DYMMY_DATA = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis maximus turpis. Maecenas sed orci dignissim, consectetur neque aliquet, venenatis velit. Fusce felis lacus, suscipit lacinia ullamcorper in, molestie sed sapien. Suspendisse vel urna aliquam, finibus ipsum sed, iaculis urna. Duis vestibulum non lacus et lobortis. Nam vitae sollicitudin felis. Donec nunc urna, eleifend et pulvinar nec, semper quis tortor. Nam at commodo tellus.

Quisque a imperdiet nisl. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris non dapibus magna, ac tincidunt ligula. Etiam pretium ac metus ac tincidunt. Curabitur nec risus pulvinar nisi sagittis auctor. Aenean vitae ipsum luctus risus condimentum porttitor. Vivamus id fermentum diam, id varius mauris. Morbi ac risus eget massa faucibus tempor.

Cras blandit porttitor consectetur. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec vel ex sit amet ipsum eleifend ultrices quis ac ipsum. In bibendum justo vitae mollis gravida. Praesent eget ullamcorper ligula. Aenean ut tristique neque, dapibus ornare turpis. In non odio ut erat elementum lobortis et condimentum lacus. Pellentesque posuere pulvinar commodo. Quisque magna enim, rutrum vel mi bibendum, facilisis tincidunt tellus. Aenean quis convallis felis. Vestibulum porta ornare dolor at scelerisque. In sem ex, cursus eget nulla vitae, semper hendrerit ante. Pellentesque eget placerat felis. Vivamus vulputate pulvinar diam at efficitur. Aenean mi ipsum, suscipit eu auctor vitae, pharetra eleifend urna. Etiam feugiat metus sit amet pharetra facilisis.

Nulla semper, quam a mollis vestibulum, odio felis vulputate leo, sit amet efficitur nisi eros quis mi. Nullam semper et leo eget euismod. Sed efficitur magna magna, in congue velit luctus in. Nunc rhoncus risus nec lorem bibendum, nec sodales sapien elementum. Nunc rutrum eros vel est pellentesque, sit amet consequat magna varius. Sed id arcu ut quam elementum dictum. Pellentesque gravida enim vestibulum elit condimentum, ac cursus dui egestas. Sed vulputate, lacus id blandit tempor, odio orci cursus metus, ac lobortis purus tellus ut metus. Donec rutrum justo ut augue placerat, at finibus ante finibus. Maecenas est nulla, ornare non tincidunt et, interdum vel tellus. Fusce finibus lectus sit amet arcu tristique euismod.

Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque quis diam fringilla, fermentum sem nec, volutpat est. Nunc non erat magna. Fusce maximus pharetra risus porttitor consequat. Suspendisse egestas nulla orci, id tempus dolor lobortis non. Curabitur et elementum leo. Donec elementum felis in metus dapibus, at laoreet lectus iaculis. Morbi ut urna ac mi viverra pulvinar eget vitae nunc. Sed nec commodo purus. `;

export const news = [
  {
    id: 1,
    slug: "smart-home-systems",
    image: "https://picsum.photos/200/200",
    categories: ["business", "technology"],
    title: {
      en: "Smart home systems are becoming more and more popular",
      ru: "Системы «умный дом» становятся все более популярными",
      uz: "Smart home systems are becoming more and more popular",
    },
    date: "2023-05-05",
    description: {
      en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      ru: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      uz: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    content: `
      <p>${DYMMY_DATA}</p>
      <image src="https://picsum.photos/200/200" alt="something" />
      <p>${DYMMY_DATA}</p>
      <image src="https://picsum.photos/200/200" alt="something" />
    `,
  },
  {
    id: 2,
    slug: "new-product-arrived",
    image: "https://picsum.photos/200/200",
    images: [
      "https://picsum.photos/200/200",
      "https://picsum.photos/200/200",
      "https://picsum.photos/200/200",
      "https://picsum.photos/200/200",
      "https://picsum.photos/200/200",
    ],
    categories: ["what-is-new"],
    title: {
      en: "New Product Arrived in Our Store",
      ru: "Новый продукт появился в нашем магазине",
      uz: "Yangi mahsulotlar do'konimizga yetib keldi",
    },
    date: "2023-05-05",
    description: {
      en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      ru: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      uz: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    content: `
      <p>${DYMMY_DATA}</p>
      <image src="https://picsum.photos/200/200" alt="something" />
      <p>${DYMMY_DATA}</p>
      <image src="https://picsum.photos/200/200" alt="something" />
    `,
  },
  {
    id: 3,
    slug: "our-company-is-growing",
    image: "https://picsum.photos/200/200",
    images: [
      "https://picsum.photos/200/200",
      "https://picsum.photos/200/200",
      "https://picsum.photos/200/200",
      "https://picsum.photos/200/200",
      "https://picsum.photos/200/200",
    ],
    categories: ["articles"],
    title: {
      en: "Our company is growing day by day",
      ru: "Наша компания растет с каждым днем",
      uz: "Bizning kompaniya har kuni o'sayapti",
    },
    date: "2023-01-05",
    description: {
      en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      ru: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      uz: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    content: `
      <p>${DYMMY_DATA}</p>
      <image src="https://picsum.photos/200/200" alt="something" />
      <p>${DYMMY_DATA}</p>
      <image src="https://picsum.photos/200/200" alt="something" />
    `,
  },
];
