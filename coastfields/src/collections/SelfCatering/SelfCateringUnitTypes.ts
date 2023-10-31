import { CollectionConfig } from 'payload/types';
// import {isAdmin, isAdminOrSelf} from '../access/Access';

export const SelfCateringUnitTypes: CollectionConfig = {
  slug: 'SelfCateringUnitTypes',
  labels: {
    singular : 'Self Catering Unit Type',
    plural: 'Self Catering Unit Types'
  }, 
  admin: {
    useAsTitle: 'name',
    //defaultColumns: ['name', 'id', 'archived'],
    group: 'Self Catering',
  },
  access: {
    read: () => true,
  },
  // access: {
  //   read: isAdminOrSelf('id'),
  //   create: isAdminOrSelf('id'),
  //   update: isAdminOrSelf('id'),
  //   delete: isAdmin,
  // },

  fields: [
    {
      name: 'name',
      type: 'text',
      localized: true,
      unique: true,
      label: 'Name',
    },
  ],
};