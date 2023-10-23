import { CollectionConfig } from 'payload/types';

export const Events: CollectionConfig = {
  slug: 'Event',
  labels: {
    singular : 'Event',
    plural: 'Events'
  },    
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'EventType', 'contact'],
    group: 'Events',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      type: "tabs", 
      tabs: [
        {
          label: "Event Details", 
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
                      width: '50%',
                    },
                  },
                  {
                    name: "locations",
                    label: 'Location',
                    type: "relationship",
                    relationTo: "location",
                    hasMany: false,
                    admin: {
                        width: '35%',
                      },
                  },
                  {
                    name: 'capacity',
                    type: 'number',
                    localized: true,
                    unique: true,
                    label: 'Event Capacity',
                    admin: {
                      width: '15%',
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
                        width: '33%',
                      },
                    },
                    {
                      name: 'phone',
                      type: 'text',
                      required: true,
                      minLength: 10,
                      admin: {
                        width: '33%',
                      },
                    },
                    {
                      name: 'website',
                      type: 'text',
                      required: false,
                      minLength: 10,
                      validate: (val) => {
                        if (!val) return true;
                        const pattern = /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/ig;
                        return pattern.test(val.toString()) || 'Invalid web address';
                        },
                      admin: {
                        width: '33%',
                      },
                    },
                  ]},
              ],
            },
            {
              name: 'EventAddress',
              type: 'group', 
              interfaceName: 'EventAddress', // optional
              label: 'Event Address',
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
              name: 'eventOpeningTimes',
              type: 'group', 
              interfaceName: 'EventOpeningTimes', 
              label: 'Event Times',
              fields: [
                {
                  type: 'row', 
                  fields: [
                    {
                      name: 'eventOpenDate',
                      type: 'date',
                      label: 'Event Start',
                      admin: {
                        date: {
                          pickerAppearance: 'dayAndTime',
                          displayFormat: 'd MMM yyy h:mm',
                        },
                      },
                    },
                    {
                      name: 'event',
                      type: 'date',
                      label: 'Event End',
                      admin: {
                        date: {
                          pickerAppearance: 'dayAndTime',
                          displayFormat: 'd MMM yyy h:mm',
                        },
                      },
                    },
                  ]},
                ]
              },
              {
                name: 'eventDescription', 
                label: 'Description',
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
                        ],
                },
          ]
        },
        {
          name: "Images",
          label: "Event Images",
          interfaceName: "EventImages", // optional (`name` must be present)
          fields: [
            {
                name: 'featuredImage', 
                label: 'Featured Image',
                type: 'upload', 
                relationTo: 'media', 
                required: true,
            },
            {
                name: 'EventMap', 
                label: 'Event Plan',
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
              },
          ],
        },
  
      ]
    }
  ]
}

