import { CollectionConfig } from 'payload/types';

export const SelfCateringUnits: CollectionConfig = {
  slug: 'SelfCateringUnit',
  labels: {
    singular : 'Self Catering Unit',
    plural: 'Self Catering Units'
  },   
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'locations', 'archived'],
    group: 'Self Catering',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      type: "tabs", // required
      tabs: [
        // required
        {
          label: "Unit Specification", // required
          fields: [
            {
                type: 'row', // required
                fields: [
                  // required
                  {
                    name: 'name',
                    type: 'text',
                    required: true,
                    admin: {
                      width: '60%',
                    },
                  },

                  {
                    name: "unitType",
                    type: "relationship",
                    relationTo: "SelfCateringUnitTypes",
                    admin: {
                        width: '40%',
                      },
                  },
                  {
                    name: "locations",
                    type: "relationship",
                    relationTo: "location",
                    hasMany: true,
                    admin: {
                        width: '100%',
                      },
                  },
                  {
                    name: "unitFeatures",
                    type: "relationship",
                    relationTo: "SelfCateringFeatures",
                    hasMany: true,
                    admin: {
                        width: '100%',
                      },
                  },
                ],
              },
              {
                type: 'row', // required
                fields: [
                  {
                    name: 'URL',
                    label: 'Booking URL',
                    type: 'text',
                    admin: {
                        width: '80%',
                      },
                    validate: (val) => {
                    if (!val) return true;
                    const pattern = /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/ig;
                    return pattern.test(val.toString()) || 'Invalid URL';
                    },
                  },
                  {
                    name: 'price',
                    label: 'Price',
                    type: 'number',
                    admin: {
                        width: '20%',
                        step: 1,
                      },
                  },
 
                ]},
              {
                type: 'row', // required
                fields: [
                  {
                    name: 'checkIn',
                    label: 'Check In ',
                    type: 'date',
                    admin: {
                      date: {
                        pickerAppearance: 'timeOnly',
                        displayFormat: 'h:mm a',
                      },
                    },
                  },
                  {
                    name: 'checkOut',
                    label: 'Check Out',
                    type: 'date',
                    admin: {
                      date: {
                        pickerAppearance: 'timeOnly',
                        displayFormat: 'h:mm a',
                      },
                    },
                  },
                ]},
              {
                name: 'shortDescription', // required
                label: 'Short Description',
                type: 'textarea', // required
                required: true,
              },
              {
                name: 'longDescription', // required
                label: 'Long Description',
                type: 'textarea', // required
                required: true,
              },
              {
                name: 'extras', 
                label: 'Extras',
                type: 'textarea', 

              },
              {
                name: 'flashMessage',
                label: 'Flash Message',
                type: 'textarea', 

              },
            ],
        },
        {
          name: "optionsTab",
          label: "Options & Content", 
          interfaceName: "TabTwo", // optional (`name` must be present)
          fields: [
            {
                name: 'selfCateringOptions', // required
                label: 'Self Catering Options',
                type: 'group', // required
                interfaceName: 'Meta', // optional
                fields: [
                    {
                        type: 'row', // required
                        fields: [
                          // required
                          {
                            name: 'active', // required
                            type: 'checkbox', // required
                            label: 'Active',
                            defaultValue: false,
                            admin: {
                                width: '20%',
                              },
                          },
                          {
                            name: 'accessible', // required
                            type: 'checkbox', // required
                            label: 'Accessible',
                            defaultValue: false,
                            admin: {
                                width: '20%',
                              },
                          },
                          {
                            name: 'carParking', // required
                            type: 'checkbox', // required
                            label: 'Car Parking',
                            defaultValue: false,
                            admin: {
                                width: '20%',
                              },
                          },
                          {
                            name: 'electricCarCharging', // required
                            type: 'checkbox', // required
                            label: 'Electric Car Charging',
                            defaultValue: false,
                            admin: {
                                width: '20%',
                              },
                          },
                          {
                            name: 'EPmapping', // required
                            type: 'checkbox', // required
                            label: 'EP mapping',
                            defaultValue: false,
                            admin: {
                                width: '20%',
                              },
                          },
                        ],
                      }, 
                      
                    ]
                },

                {
                    name: 'selfCateringContent', // required
                    label: 'Self Catering Content',
                    type: 'group', // required
                    interfaceName: 'SelfCateringContent', // optional
                    fields: [
                        {
                            type: 'row', // required
                            fields: [
                              // required
                              {
                                name: 'sleepCapacity', // required
                                type: 'number', // required
                                label: 'Sleep Capacity',
                                defaultValue: 1,
                                admin: {
                                    width: '20%',
                                    step: 1,
                                  },
                              },
                              {
                                name: 'bathrooms', // required
                                type: 'number', // required
                                label: 'Bathrooms',
                                defaultValue: 1,
                                admin: {
                                    width: '20%',
                                    step: 1,
                                  },
                              },
                              {
                                name: 'bedrooms', // required
                                type: 'number', // required
                                label: 'bedrooms',
                                defaultValue: 1,
                                admin: {
                                    width: '20%',
                                    step: 1,
                                  },
                              },
                              {
                                name: 'Beds', // required
                                type: 'number', // required
                                label: 'Beds',
                                defaultValue: 1,
                                admin: {
                                    width: '20%',
                                    step: 1,
                                  },
                              },
                              {
                                name: 'pets', // required
                                type: 'number', // required
                                label: 'Pets',
                                defaultValue: 1,
                                admin: {
                                    width: '20%',
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
          name: "imagesTab",
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
                name: 'slider', // required
                type: 'array', // required
                label: 'Image Slider',
                minRows: 2,
                maxRows: 10,
                interfaceName: 'CardSlider', // optional
                labels: {
                  singular: 'Slide',
                  plural: 'Slides',
                },
                fields: [
                  // required
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
          name: "reviewTab",
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