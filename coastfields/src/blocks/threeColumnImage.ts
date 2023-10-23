import { Block } from "payload/types";

export const ThreeColumnImage: Block = {
    slug: 'three-column-image', // required
    imageAltText: 'Three Column Images',
    interfaceName: 'Three Column Images', // optional

      fields: [
        {       
          type: 'row', // required
          fields: [
              {
                name: 'slug',
                label: 'Slug',
                type: 'text',
                required: true,
                validate: (val) => {
                  if (!val) return true;
                  const pattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/ig;
                  return pattern.test(val.toString()) || 'Invalid URL';
                  },
              },
              {
                name: 'bannerHeader',
                label: 'Display as',
                type: 'text',
                required: true,
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
                    width: '33%',
                  },
                },
                {
                  name: 'image2',
                  label: 'Column Two Image',
                  type: 'upload',
                  relationTo: 'media',
                  required: true,
                  admin: {
                    width: '33%',
                  },
                },
                {
                  name: 'image3',
                  label: 'Column Three Image',
                  type: 'upload',
                  relationTo: 'media',
                  required: true,
                  admin: {
                    width: '33%',
                  },
                },
            ]
          },
          {       
            type: 'row', 
            fields: [
              {
                  name: 'paragraph1',
                  label: 'Paragraph1',
                  type: 'textarea',

                },
                {
                  name: 'paragraph2',
                  label: 'Paragraph2',
                  type: 'textarea',

                },
                {
                  name: 'paragraph3',
                  label: 'Paragraph3',
                  type: 'textarea',

                },
            ]
          },           
  
              
      ],
    }
    