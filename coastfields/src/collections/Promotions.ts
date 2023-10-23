import { CollectionConfig } from 'payload/types';

export const Promotions: CollectionConfig = {
  slug: 'Promotion',
  labels: {
    singular : 'Promotion',
    plural: 'Promotions'
  },    
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'PromotionType', 'contact'],
    group: 'Promotions',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      type: "tabs", 
      tabs: [
        {
          label: "Promotion Details", 
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
                        width: '50%',
                      },
                  },
                  {
                    name: 'offerType', // required
                    type: 'select', // required
                    admin: {
                      isClearable: true,
                      isSortable: true, // use mouse to drag and drop different values, and sort them according to your choice
                      width: '40%',
                    },
                    options: [
                      {
                        label: 'Self Catering',
                        value: 'selfCatering',
                      },
                      {
                        label: 'Ownership',
                        value: 'Ownership',
                      },
                      {
                        label: 'Touring',
                        value: 'Touring',
                      },
                      {
                        label: 'Events',
                        value: 'Events',
                      },
                    ],
                  },
                  {
                    name: "linkEvent",
                    label: 'Link Event',
                    type: "relationship",
                    relationTo: "Event",
                    admin: {
                        width: '40%',
                      },
                },
                  {
                    name: 'promoCode',
                    type: 'text',
                    localized: true,
                    unique: true,
                    label: 'Promo Code',
                    admin: {
                      width: '20%',
                    },
                  },


                ]
            },
            {
              name: 'eventOpeningTimes',
              type: 'group', 
              interfaceName: 'PromotionOpeningTimes', 
              label: 'Promotion Dates',
              fields: [
                {
                  type: 'row', 
                  fields: [
                    {
                      name: 'eventOpenDate',
                      type: 'date',
                      label: 'Promotion Start',
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
                      label: 'Promotion End',
                      admin: {
                        date: {
                          pickerAppearance: 'dayAndTime',
                          displayFormat: 'd MMM yyy h:mm',
                        },
                      },
                    },
                    {
                        name: 'eventValidStartDate',
                        type: 'date',
                        label: 'Start Date',
                        admin: {
                          date: {
                            pickerAppearance: 'dayAndTime',
                            displayFormat: 'd MMM yyy h:mm',
                          },
                        },
                    },
                    {
                        name: 'eventValidEndDate',
                        type: 'date',
                        label: 'End Date',
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
                {
                    name: 'promoDescription', 
                    label: 'How to Apply',
                    type: 'group', 
                    interfaceName: 'apply', // optional
                    fields: [
                        {
                            name: 'enterApplication', 
                            type: 'richText', 
                            required: false,
                        },  
                    ]
                },
                {
                    name: 'flashMessage',
                    label: 'Flash Message',
                    type: 'textarea', 
    
                  },
                {
                    name: 'termsConditions', 
                    label: 'Terms and Conditions',
                    type: 'richText', 
                    required: false,
                },             
          ]
        },
        {
          name: "Images",
          label: "Promotion Images",
          interfaceName: "PromotionImages", // optional (`name` must be present)
          fields: [
            {
                name: 'featuredImage', 
                label: 'Featured Image',
                type: 'upload', 
                relationTo: 'media', 
                required: true,
            },
          ],
        },
  
      ]
    }
  ]
}

