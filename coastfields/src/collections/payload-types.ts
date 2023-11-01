/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export type CardSlider = {
  title?: string;
  image: string | Media;
  caption?: string;
  id?: string;
}[];

export interface Config {
  collections: {
    users: User;
    media: Media;
    pages: Page;
    regions: Region;
    location: Location;
    'location-types': LocationType;
    'location-features': LocationFeature;
    venus: Venu;
    'venue-type': VenueType;
    SelfCateringUnit: SelfCateringUnit;
    SelfCateringUnitTypes: SelfCateringUnitType;
    SelfCateringFeatures: SelfCateringFeature;
    touring: Touring;
    touringfeaturess: Touringfeaturess;
    touringsuitability: Touringsuitability;
    touringunittypes: Touringunittype;
    touringtags: Touringtag;
    stock: Stock;
    'stock-availability': StockAvailability;
    'stock-finance-term': StockFinanceTerm;
    stockfeatures: Stockfeature;
    Attraction: Attraction;
    Event: Event;
    Promotion: Promotion;
    'payload-preferences': PayloadPreference;
    'payload-migrations': PayloadMigration;
  };
  globals: {};
}
export interface User {
  id: string;
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string;
  resetPasswordExpiration?: string;
  salt?: string;
  hash?: string;
  loginAttempts?: number;
  lockUntil?: string;
  password: string;
}
export interface Media {
  id: string;
  alt?: string;
  updatedAt: string;
  createdAt: string;
  url?: string;
  filename?: string;
  mimeType?: string;
  filesize?: number;
  width?: number;
  height?: number;
  sizes?: {
    thumbnail?: {
      url?: string;
      width?: number;
      height?: number;
      mimeType?: string;
      filesize?: number;
      filename?: string;
    };
    card?: {
      url?: string;
      width?: number;
      height?: number;
      mimeType?: string;
      filesize?: number;
      filename?: string;
    };
    tablet?: {
      url?: string;
      width?: number;
      height?: number;
      mimeType?: string;
      filesize?: number;
      filename?: string;
    };
  };
}
export interface Page {
  id: string;
  content?: {
    [k: string]: unknown;
  }[];
  updatedAt: string;
  createdAt: string;
}
export interface Region {
  id: string;
  name?: string;
  locations?: string[] | Location[];
  slider?: CardSlider;
  updatedAt: string;
  createdAt: string;
}
export interface Location {
  id: string;
  name?: string;
  locationType?: string | LocationType;
  contactDetails: ContactDetails;
  locationAddress: LocationAddress;
  parkOpeningTimes?: ParkOpeningTimes;
  shortDescription: string;
  longDescription: string;
  URL?: string;
  Tab2: {
    locationFeaturesGroup?: {
      locationFeatures?: string[] | LocationFeature[];
    };
    venueGroup?: {
      locationVenue?: string[] | Venu[];
    };
  };
  Images: {
    featuredImage: string | Media;
    locationMap?: string | Media;
    slider?: CardSlider;
  };
  updatedAt: string;
  createdAt: string;
}
export interface LocationType {
  id: string;
  name?: string;
  updatedAt: string;
  createdAt: string;
}
export interface ContactDetails {
  contact: string;
  phone: string;
  website?: string;
}
export interface LocationAddress {
  Address1: string;
  City: string;
  County: string;
  Postcode: string;
}
export interface ParkOpeningTimes {
  attractionOpenDate?: string;
  attractionCloseDate?: string;
}
export interface LocationFeature {
  id: string;
  name?: string;
  updatedAt: string;
  createdAt: string;
}
export interface Venu {
  id: string;
  name?: string;
  type?: string | VenueType;
  locationActive?: boolean;
  shortDescription: string;
  location?: string | Location;
  featuredImage: string | Media;
  slider?: CardSlider;
  venueContent?: {
    [k: string]: unknown;
  }[];
  layout?: QuoteBlock[];
  updatedAt: string;
  createdAt: string;
}
export interface VenueType {
  id: string;
  name?: string;
  updatedAt: string;
  createdAt: string;
}
export interface QuoteBlock {
  quoteHeader: string;
  quoteText?: string;
  id?: string;
  blockName?: string;
  blockType: 'quote';
}
export interface SelfCateringUnit {
  id: string;
  name: string;
  unitType?: string | SelfCateringUnitType;
  locations?: string[] | Location[];
  unitFeatures?: string[] | SelfCateringFeature[];
  URL?: string;
  price?: number;
  checkIn?: string;
  checkOut?: string;
  shortDescription: string;
  longDescription: string;
  extras?: string;
  flashMessage?: string;
  optionsTab: {
    selfCateringOptions?: Meta;
    selfCateringContent?: SelfCateringContent;
  };
  imagesTab: {
    featuredImage: string | Media;
    floorPlan?: string | Media;
    slider?: CardSlider;
  };
  reviewTab: {
    reviews?: string;
  };
  updatedAt: string;
  createdAt: string;
}
export interface SelfCateringUnitType {
  id: string;
  name?: string;
  updatedAt: string;
  createdAt: string;
}
export interface SelfCateringFeature {
  id: string;
  name?: string;
  updatedAt: string;
  createdAt: string;
}
export interface Meta {
  shortDescription: string;
  longDescription: string;
}
export interface SelfCateringContent {
  sleepCapacity?: number;
  bathrooms?: number;
  bedrooms?: number;
  Beds?: number;
  pets?: number;
}
export interface Touring {
  id: string;
  name: string;
  unitType: string | Touringunittype;
  locations: string[] | Location[];
  touringFeatures?: string[] | Touringfeaturess[];
  touringSuitability?: string[] | Touringsuitability[];
  featured?: boolean;
  Capacity: {
    maxPeople: number;
    pitchesAvailable: number;
    pets: number;
  };
  URL?: string;
  price: number;
  checkIn?: string;
  checkOut?: string;
  shortDescription: string;
  longDescription: string;
  extras?: string;
  flashMessage?: string;
  OptionsTab: {
    TouringOptions?: Meta;
  };
  imagesTab: {
    featuredImage: string | Media;
    sitePlan?: string | Media;
    slider?: CardSlider;
  };
  tagsTab: {
    touringTags?: string[] | Touringtag[];
  };
  reviewsTab: {
    reviews?: string;
  };
  updatedAt: string;
  createdAt: string;
}
export interface Touringunittype {
  id: string;
  name?: string;
  updatedAt: string;
  createdAt: string;
}
export interface Touringfeaturess {
  id: string;
  name?: string;
  updatedAt: string;
  createdAt: string;
}
export interface Touringsuitability {
  id: string;
  name?: string;
  updatedAt: string;
  createdAt: string;
}
export interface Touringtag {
  id: string;
  name?: string;
  updatedAt: string;
  createdAt: string;
}
export interface Stock {
  id: string;
  name: string;
  URL?: string;
  locations?: string[] | Location[];
  availability?: string | StockAvailability;
  stockfeatures?: string[] | Stockfeature[];
  stockPricing?: Meta;
  stockDescription: Meta;
  tabTwo: {
    stock?: Meta;
    stockContent?: StockContent;
  };
  tabThree: {
    featuredImage: string | Media;
    floorPlan?: string | Media;
    slider?: CardSlider;
  };
  sku: {
    slider?: {
      name?: string;
      id?: string;
    }[];
  };
  searchTags: {
    searchTags?: {
      name?: string;
      id?: string;
    }[];
  };
  updatedAt: string;
  createdAt: string;
}
export interface StockAvailability {
  id: string;
  name?: string;
  updatedAt: string;
  createdAt: string;
}
export interface Stockfeature {
  id: string;
  name?: string;
  updatedAt: string;
  createdAt: string;
}
export interface StockContent {
  size?: string;
  width?: number;
  sleepCapacity?: number;
  bathrooms?: number;
  bedrooms?: number;
  Beds?: number;
}
export interface StockFinanceTerm {
  id: string;
  name?: string;
  updatedAt: string;
  createdAt: string;
}
export interface Attraction {
  id: string;
  name?: string;
  contactDetails: ContactDetails;
  AttractionAddress: AttractionAddress;
  parkOpeningTimes?: ParkOpeningTimes;
  shortDescription: string;
  longDescription: string;
  Images: {
    featuredImage: string | Media;
    AttractionMap?: string | Media;
    slider?: CardSlider;
  };
  updatedAt: string;
  createdAt: string;
}
export interface AttractionAddress {
  Address1: string;
  City: string;
  County: string;
  Postcode: string;
}
export interface Event {
  id: string;
  name?: string;
  locations?: string | Location;
  capacity?: number;
  contactDetails: ContactDetails;
  EventAddress: EventAddress;
  eventOpeningTimes?: EventOpeningTimes;
  eventDescription: Meta;
  Images: {
    featuredImage: string | Media;
    EventMap?: string | Media;
    slider?: CardSlider;
  };
  updatedAt: string;
  createdAt: string;
}
export interface EventAddress {
  Address1: string;
  City: string;
  County: string;
  Postcode: string;
}
export interface EventOpeningTimes {
  eventOpenDate?: string;
  event?: string;
}
export interface Promotion {
  id: string;
  name?: string;
  locations?: string | Location;
  offerType?: 'selfCatering' | 'Ownership' | 'Touring' | 'Events';
  linkEvent?: string | Event;
  promoCode?: string;
  eventOpeningTimes?: PromotionOpeningTimes;
  eventDescription: Meta;
  promoDescription?: Apply;
  flashMessage?: string;
  termsConditions?: {
    [k: string]: unknown;
  }[];
  Images: {
    featuredImage: string | Media;
  };
  updatedAt: string;
  createdAt: string;
}
export interface PromotionOpeningTimes {
  eventOpenDate?: string;
  event?: string;
  eventValidStartDate?: string;
  eventValidEndDate?: string;
}
export interface Apply {
  enterApplication?: {
    [k: string]: unknown;
  }[];
}
export interface PayloadPreference {
  id: string;
  user: {
    relationTo: 'users';
    value: string | User;
  };
  key?: string;
  value?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  updatedAt: string;
  createdAt: string;
}
export interface PayloadMigration {
  id: string;
  name?: string;
  batch?: number;
  updatedAt: string;
  createdAt: string;
}


declare module 'payload' {
  export interface GeneratedTypes extends Config {}
}