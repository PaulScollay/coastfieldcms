import { CollectionConfig } from 'payload/types';

export const Touring: CollectionConfig = {
  slug: 'touring',
  labels: {
    singular : 'Touring Unit',
    plural: 'Touring Units'
  },   
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'locations', 'archived'],
    group: 'Touring',
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
          label: "Touring Specification", // required
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
                    relationTo: "touringunittypes",
                    required: true,
                    admin: {
                        width: '40%',
                      },
                  },
                  {
                    name: "locations",
                    type: "relationship",
                    relationTo: "location",
                    required: true,
                    hasMany: true,
                    admin: {
                        width: '100%',
                      },
                  },
                  {
                    name: "touringFeatures",
                    type: "relationship",
                    relationTo: "touringfeaturess",
                    hasMany: true,
                    admin: {
                        width: '50%',
                      },
                  },
                  {
                    name: "touringSuitability",
                    type: "relationship",
                    relationTo: "touringsuitability",
                    hasMany: true,
                    admin: {
                        width: '50%',
                      },
                  },
                ],

              },
              {
                name: 'featured', // required
                type: 'checkbox', // required
                label: 'Featured Unit',
                },
              {
                name: 'Capacity', // required
                type: 'group', // required
                //interfaceName: 'toutingContent', // optional
                fields: [
                    {
                        type: 'row', // required
                        fields: [
                          // required
                          {
                            name: 'maxPeople', // required
                            type: 'number', // required
                            label: 'Max People',
                            required: true,
                            defaultValue: 2,
                          },
                          {
                            name: 'pitchesAvailable', // required
                            type: 'number', // required
                            label: 'No of Pitches Available',
                            required: true,
                            defaultValue: 1,
                          },
                          {
                            name: 'pets', // required
                            type: 'number', // required
                            label: 'Pets',
                            required: true,
                            defaultValue: 1,
                          },
                        ],
                      }, 

                    ]
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
                    label: 'Guide Price',
                    type: 'number',
                    required: true,
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
          name: "OptionsTab",
          label: "Options", 
          interfaceName: "TabTwo", // optional (`name` must be present)
          fields: [
            {
                name: 'TouringOptions', // required
                label: 'Touring Options',
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
                                width: '25%',
                              },
                          },
                          {
                            name: 'adultsOnly', // required
                            type: 'checkbox', // required
                            label: 'AdultsOnly',
                            defaultValue: false,
                            admin: {
                                width: '25%',
                              },
                          },
                          {
                            name: 'allowAwnings', // required
                            type: 'checkbox', // required
                            label: 'Allow Awnings',
                            defaultValue: false,
                            admin: {
                                width: '25%',
                              },
                          },
                          {
                            name: 'carParking', // required
                            type: 'checkbox', // required
                            label: 'Car Parking',
                            defaultValue: false,
                            admin: {
                                width: '25%',
                              },
                          },
                        ],
                      }, 
                      {
                        type: 'row', // required
                        fields: [
                          // required
                          {
                            name: 'collectionGroup', // required
                            type: 'checkbox', // required
                            label: 'Collection Group',
                            defaultValue: false,
                            admin: {
                                width: '25%',
                              },
                          },
                          {
                            name: 'electricCarCharging', // required
                            type: 'checkbox', // required
                            label: 'Electric Car Charging',
                            defaultValue: false,
                            admin: {
                                width: '25%',
                              },
                          },
                          {
                            name: 'electricHookup', // required
                            type: 'checkbox', // required
                            label: 'Electric Hookup',
                            defaultValue: false,
                            admin: {
                                width: '25%',
                              },
                          },
                          {
                            name: 'EPmapping', // required
                            type: 'checkbox', // required
                            label: 'EP mapping',
                            defaultValue: false,
                            admin: {
                                width: '25%',
                              },
                          },
                        ],
                      }, 
                      {
                        type: 'row', // required
                        fields: [
                          // required
                          {
                            name: 'fullyServiced', // required
                            type: 'checkbox', // required
                            label: 'Fully Serviced',
                            defaultValue: false,
                            admin: {
                                width: '25%',
                              },
                          },
                          {
                            name: 'grass', // required
                            type: 'checkbox', // required
                            label: 'Grass',
                            defaultValue: false,
                            admin: {
                                width: '25%',
                              },
                          },
                          {
                            name: 'hardStandting', // required
                            type: 'checkbox', // required
                            label: 'Hard Standing',
                            defaultValue: false,
                            admin: {
                                width: '25%',
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
                name: 'sitePlan', 
                label: 'Site Plan',
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
            name: "tagsTab",
            label: "Tags", 
            interfaceName: "TabFour", // optional (`name` must be present)
            fields: [
                {
                    name: "touringTags",
                    type: "relationship",
                    relationTo: "touringtags",
                    hasMany: true,
                    admin: {
                        width: '100%',
                      },
                },
            ],
        },
        {
          name: "reviewsTab",
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

