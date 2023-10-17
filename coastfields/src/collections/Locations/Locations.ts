import { CollectionConfig } from 'payload/types';

export const Locations: CollectionConfig = {
  slug: 'location',
  labels: {
    singular : 'Location',
    plural: 'Locations'
  },    
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'locationType', 'contact'],
    group: 'Locations',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      type: "tabs", 
      tabs: [
        {
          label: "Location Details", 
          fields: [
            {
                type: 'row',
                fields: [
                  {
                    name: 'name',
                    type: 'text',
                    localized: true,
                    unique: true,
                    label: 'Name',
                    admin: {
                      width: '60%',
                    },
                  },
              
                  {
                    name: "locationType",
                    type: "relationship",
                    relationTo: "location-types",
                    admin: {
                        width: '40%',
                      },
                  },
                ]
            },
            {
              name: 'contactDetails',
              type: 'group', 
              interfaceName: 'ContactDetails', // optional
              label: 'Contact Details',
              fields: [
                {
                  type: 'row', 
                  fields: [
                    {
                      name: 'contact',
                      type: 'email', 
                      label: 'Contact Email Address',
                      required: true,
                      admin: {
                        width: '70%',
                      },
                    },
                    {
                      name: 'phone',
                      type: 'text',
                      required: true,
                      minLength: 10,
                      admin: {
                        width: '30%',
                      },
                    },
                  ]},
              ],
            },
            {
              name: 'locationAddress',
              type: 'group', 
              interfaceName: 'LocationAddress', // optional
              label: 'Location Address',
              fields: [
                {
                  name: 'Address1',
                  type: 'text', 
                  label: 'Address',
                  required: true,
                },
                {
                  type: 'row', 
                  fields: [
                    {
                      name: 'City',
                      type: 'text', 
                      label: 'City',
                      required: true,
                      admin: {
                        width: '33%',
                      },
                    },
                    {
                      name: 'County',
                      type: 'text', 
                      label: 'County',
                      required: true,
                      admin: {
                        width: '33%',
                      },
                    },
                    {
                      name: 'Postcode',
                      type: 'text', 
                      label: 'Postcode',
                      required: true,
                      admin: {
                        width: '33%',
                      },
                    },
                  ]},
              ],
            },
            {
              name: 'parkOpeningTimes',
              type: 'group', 
              interfaceName: 'ParkOpeningTimes', 
              label: 'Park Opening Times',
              fields: [
                {
                  type: 'row', 
                  fields: [
                    {
                      name: 'parkOpenDate',
                      type: 'date',
                      admin: {
                        date: {
                          pickerAppearance: 'dayOnly',
                          displayFormat: 'd MMM yyy',
                        },
                      },
                    },
                    {
                      name: 'parkCloseDate',
                      type: 'date',
                      admin: {
                        date: {
                          pickerAppearance: 'dayOnly',
                          displayFormat: 'd MMM yyy',
                        },
                      },
                    },
                  ]},
                ]
              },
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
          ]
        },
        {
          name: "Tab2",
          label: "Features & Venues",
          interfaceName: "Tab2", // optional (`name` must be present)
          fields: [
            {
              name: 'locationFeaturesGroup', 
              label: 'Location Features',
              type: 'group', 
              fields: [
                  {
                      type: 'row', 
                      fields: [
                        {
                          name: "locationFeatures",
                          type: "relationship",
                          label: " ",
                          relationTo: "location-features",
                          hasMany: true,
                          admin: {
                              width: '100%',
                            },
                        },
                      ],
                    }, 
                    
                  ]
              },
            {
              name: 'venueGroup', 
              label: 'Location Venues',
              type: 'group', 
              fields: [
                  {
                      type: 'row', 
                      fields: [
                        {
                          name: "locationVenue",
                          type: "relationship",
                          label: "Venues",
                          relationTo: "venus",
                          hasMany: true,
                          admin: {
                              width: '100%',
                            },
                        },
                      ],
                    }, 
                    
                  ]
              },
          ],
        },
        {
          name: "Images",
          label: "Location Images",
          interfaceName: "LocationImages", // optional (`name` must be present)
          fields: [
            {
                name: 'featuredImage', 
                label: 'Featured Image',
                type: 'upload', 
                relationTo: 'media', 
                required: true,
            },
            {
                name: 'locationMap', 
                label: 'Location Plan',
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
  
      ]
    }
  ]
}

