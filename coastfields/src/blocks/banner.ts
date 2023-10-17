import { Block } from "payload/types";

export const Banner: Block = {
    slug: 'banner', // required
    // imageURL: 'https://google.com/path/to/image.jpg',
    imageAltText: 'A nice thumbnail image to show what this block looks like',
    interfaceName: 'Banner', // optional
    fields: [
      // required
      {
        name: 'bannerHeader',
        type: 'text',
        required: true,
      },
      {
        name: 'quoteText',
        type: 'text',
      },
    ],
  }