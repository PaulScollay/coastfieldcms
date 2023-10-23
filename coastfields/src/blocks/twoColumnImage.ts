import { Block } from "payload/types";

export const TwoColumnImage: Block = {
    slug: 'two-column-image', // required
    // imageURL: 'https://google.com/path/to/image.jpg',
    imageAltText: 'Two Column Images',
    interfaceName: 'Two Column Images', // optional
    fields: [

      {
        type: 'row', // required
        fields: [
            {
              name: 'bannerHeader',
              label: 'Display as',
              type: 'text',
              required: true,
              admin: {
                width: '70%',
              },
            },

          ],
      },
      {
        name: 'imageOnly',
        label: 'Show Image only',
        type: 'checkbox',
        defaultValue: false,
        admin: {
          width: '30%',
        },
      },
        {       
          type: 'row', // required
          fields: [
            {
                name: 'image1',
                label: 'Column One Image',
                type: 'upload',
                relationTo: 'media',
                required: true,
                admin: {
                    width: '50%',
                  },
              },
              {
                name: 'image2',
                label: 'Column Two Image',
                type: 'upload',
                relationTo: 'media',
                required: true,
                admin: {
                    width: '50%',
                  },
              },
          ]
        },
        {       
          type: 'row', 
          fields: [
            {
                name: 'paragraph1',
                label: 'Paragraph',
                type: 'textarea',
                admin: {
                    width: '50%',
                  },
              },
              {
                name: 'paragraph2',
                label: 'Paragraph',
                type: 'textarea',
                admin: {
                    width: '50%',
                  },
              },
          ]
        },           

            
    ],
  }