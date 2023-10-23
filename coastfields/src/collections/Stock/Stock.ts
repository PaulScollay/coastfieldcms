import { CollectionConfig } from 'payload/types';

export const Stock: CollectionConfig = {
  slug: 'stock',
  labels: {
    singular : 'Stock',
    plural: 'Stock'
  },   
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'locations', 'archived'],
    group: 'Stock',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      type: "tabs", 
      tabs: [
        
        {
          label: "Stock Specification", 
          fields: [
            {
                type: 'row', 
                fields: [
                  
                  {
                    name: 'name',
                    type: 'text',
                    required: true,
                    admin: {
                      width: '40%',
                    },
                  },

                  {
                    name: 'URL',
                    label: '3D Tour',
                    type: 'text',
                    validate: (val) => {
                    if (!val) return true;
                    const pattern = /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/ig;
                    return pattern.test(val.toString()) || 'Invalid URL';
                    },
                    admin: {
                        width: '60%',
                      },
                  },
                  {
                    type: 'row', 
                    fields: [
                          {
                            name: "locations",
                            type: "relationship",
                            relationTo: "location",
                            hasMany: true,
                            admin: {
                                width: '33%',
                              },
                          },
                          {
                            name: "availability",
                            type: "relationship",
                            relationTo: "stock-availability",
                            admin: {
                                width: '33%',
                              },
                          },
                          {
                            name: "stockfeatures",
                            label: 'Stock Features',
                            type: "relationship",
                            hasMany: true,
                            relationTo: "stockfeatures",
                            admin: {
                                width: '33%',
                              },
                          },
                        ]
                    },
                  {
                    name: 'stockPricing', 
                    label: 'Stock Pricing',
                    type: 'group', 
                    interfaceName: 'Meta', // optional
                    fields: [
                        {
                            type: 'row', 
                            fields: [
                                {
                                    name: 'guidePrice',
                                    label: 'Guide Price',
                                    type: 'number',
                                    admin: {
                                        width: '20%',
                                        step: 1,
                                      },
                                },
                                {
                                    name: 'retailPrice',
                                    label: 'Retail Price',
                                    type: 'number',
                                    admin: {
                                        width: '20%',
                                        step: 1,
                                      },
                                },
                                {
                                    name: 'wasPrice',
                                    label: 'Was Price',
                                    type: 'number',
                                    admin: {
                                        width: '20%',
                                        step: 1,
                                      },
                                },
                                {
                                    name: 'deposit',
                                    label: 'Deposit',
                                    type: 'number',
                                    admin: {
                                        width: '20%',
                                        step: 1,
                                      },
                                },
                                {
                                    name: "financeterm",
                                    label: 'Finance Term',
                                    type: "relationship",
                                    relationTo: "stock-finance-term",
                                    admin: {
                                        width: '20%',
                                      },
                                  },
                                {
                                    name: 'POA', 
                                    type: 'checkbox', 
                                    label: 'Price On Application',
                                    defaultValue: false,
                                    admin: {
                                        width: '20%',
                                      },
                                  },

                            ],
                          }, 
                          
                          
                        ]
                    },
                ],
              },
              {
                name: 'stockDescription', 
                label: 'Stock Description',
                type: 'group', 
                interfaceName: 'Meta', // optional
                fields: [
                          {
                            name: 'shortDescription', 
                            label: 'Short Description',
                            type: 'textarea', 
                            required: true,
                          },
                          {
                            name: 'longDescription', 
                            label: 'Long Description',
                            type: 'textarea', 
                            required: true,
                          },
                          {
                            name: 'flashMessage',
                            label: 'Flash Message',
                            type: 'textarea', 
            
                          },
                        ],
                    },
            ],
        },
        {
          name: "tabTwo",
          label: "Options & Content", 
          interfaceName: "TabTwo", // optional (`name` must be present)
          fields: [
            {
                name: 'stock', 
                label: 'Stock Options',
                type: 'group', 
                interfaceName: 'Meta', // optional
                fields: [
                    {
                        type: 'row', 
                        fields: [
                          
                          {
                            name: 'isFeatured', 
                            type: 'checkbox', 
                            label: 'Featured Stock',
                            defaultValue: true,
                            admin: {
                                width: '10%',
                              },
                          },
                          {
                            name: 'active', 
                            type: 'checkbox', 
                            label: 'Active',
                            defaultValue: false,
                            admin: {
                                width: '10%',
                              },
                          },
                          {
                            name: 'accessible', 
                            type: 'checkbox', 
                            label: 'Accessible',
                            defaultValue: false,
                            admin: {
                                width: '10%',
                              },
                          },
                          {
                            name: 'carParking', 
                            type: 'checkbox', 
                            label: 'Car Parking',
                            defaultValue: false,
                            admin: {
                                width: '10%',
                              },
                          },
                          {
                            name: 'electricCarCharging', 
                            type: 'checkbox', 
                            label: 'Electric Car Charging',
                            defaultValue: false,
                            admin: {
                                width: '10%',
                              },
                          },
                          {
                            name: 'hotTub', 
                            type: 'checkbox', 
                            label: 'Hot Tub',
                            defaultValue: false,
                            admin: {
                                width: '10%',
                              },
                          },
                        ],
                      }, 
                      
                    ]
                },

                {
                    name: 'stockContent', 
                    label: 'Stock Content',
                    type: 'group', 
                    interfaceName: 'stockContent', // optional
                    fields: [
                        {
                            type: 'row', 
                            fields: [
                              
                              {
                                name: 'size', 
                                type: 'text', 
                                label: 'Size',
                                admin: {
                                    width: '10%',
                                  },
                              },
                              {
                                name: 'width', 
                                type: 'number', 
                                label: 'Width',
                                admin: {
                                    width: '10%',
                                    step: 1,
                                  },
                              },
                              {
                                name: 'sleepCapacity', 
                                type: 'number', 
                                label: 'Sleep Capacity',
                                defaultValue: 1,
                                admin: {
                                    width: '10%',
                                    step: 1,
                                  },
                              },
                              {
                                name: 'bathrooms', 
                                type: 'number', 
                                label: 'Bathrooms',
                                defaultValue: 1,
                                admin: {
                                    width: '10%',
                                    step: 1,
                                  },
                              },
                              {
                                name: 'bedrooms', 
                                type: 'number', 
                                label: 'bedrooms',
                                defaultValue: 1,
                                admin: {
                                    width: '10%',
                                    step: 1,
                                  },
                              },
                              {
                                name: 'Beds', 
                                type: 'number', 
                                label: 'Beds',
                                defaultValue: 1,
                                admin: {
                                    width: '10%',
                                    step: 1,
                                  },
                              },
                            ],
                          }, 

                        ]
                    },
          ],
        },
        {
          name: "tabThree",
          label: "Unit Images",
          interfaceName: "TabThree", // optional (`name` must be present)
          fields: [
            {
                name: 'featuredImage', 
                label: 'Featured Image',
                type: 'upload', 
                relationTo: 'media', 
                required: true,
            },
            {
                name: 'floorPlan', 
                label: 'Floor Plan',
                type: 'upload', 
                relationTo: 'media', 
                required: false,
            },

            {
                name: 'slider', 
                type: 'array', 
                label: 'Image Slider',
                minRows: 2,
                maxRows: 10,
                interfaceName: 'CardSlider', // optional
                labels: {
                  singular: 'Slide',
                  plural: 'Slides',
                },
                fields: [
                  
                  {
                    name: 'title',
                    type: 'text',
                  },
                  {
                    name: 'image',
                    type: 'upload',
                    relationTo: 'media',
                    required: true,
                  },
                  {
                    name: 'caption',
                    type: 'text',
                  },
                ],
                // admin: {
                //   components: {
                //     RowLabel: ({ data, index }) => {
                //       return data?.title || `Slide ${String(index).padStart(2, '0')}`
                //     },
                //   },
                // },
              },
          ],
        },
        {
          name: "sku",
          label: "Sku", 
          interfaceName: "sku", // optional (`name` must be present)
          fields: [
            {
                name: 'slider', // required
                type: 'array', // required
                label: 'SKUs',
                labels: {
                    singular: 'SKU',
                    plural: 'SKUs',
                  },
                  fields: [
                    // required
                    {
                      name: 'name',
                      type: 'text',
                    },
                ]
              },
          ],
        },
        {
          name: "tabFour",
          label: "Reviews", 
          interfaceName: "TabFour", // optional (`name` must be present)
          fields: [
            {
                name: 'reviews', 
                label: 'Reviews',
                type: 'textarea', 
              },
          ],
        },
      ],
    },
  ],

}

// export default SelfCateringUnits;

// {
//     name: 'membership',
//     type: 'select',
//     options: [
//       { label: 'Premium', value: 'premium' },
//       { label: 'Basic', value: 'basic' },
//     ],
//     defaultValue: 'basic',
//   },