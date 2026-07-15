/**
 * Domain types for LORSAM content.
 * Interfaces are prefixed with `I` and enums with `E` per project convention.
 * These mirror the shape of `src/data/lorsamData.json`.
 */

/** Application route paths. */
export enum ERoute {
  Home = '/',
  Servicios = '/servicios',
  Historia = '/historia',
  Clientes = '/clientes',
  Contacto = '/contacto',
}

/** Company identity and headline figures. */
export interface ICompany {
  name: string;
  legalName: string;
  slogan: string;
  foundedYear: number;
  yearsExperience: string;
  unitsInstalled: number;
  regionsCovered: string;
}

/** A core corporate value. `icon` is a lucide-react icon name. */
export interface IValue {
  title: string;
  description: string;
  icon: string;
}

/** A milestone in the company history timeline. `year` may be empty for undated stages. */
export interface ITimelineEvent {
  year: string;
  stage: string;
  name: string;
  description: string;
}

/** A technical-evolution capability entry. */
export interface ITechnicalCapability {
  category: string;
  detail: string;
  icon: string;
}

/** Aggregated company history. */
export interface IHistory {
  headline: string;
  intro: string[];
  timeline: ITimelineEvent[];
  technicalEvolution: ITechnicalCapability[];
}

/** A service offering card. */
export interface IService {
  title: string;
  description: string;
  icon: string;
}

/** A catalog entry within "Nuestra Especialidad". */
export interface ISpecialtyItem {
  title: string;
  detail: string;
  icon: string;
}

/** The specialty (VRF/TVR) section content. */
export interface ISpecialty {
  headline: string;
  description: string;
  nationalBacking: string;
  catalog: ISpecialtyItem[];
}

/** A value-added differentiator ("Por qué elegirnos"). */
export interface IDifferentiator {
  title: string;
  description: string;
  icon: string;
}

/** A single named client with a short descriptor. */
export interface IClient {
  name: string;
  detail: string;
}

/** A client sector grouping. */
export interface IClientSector {
  name: string;
  description: string;
  icon: string;
  clients: IClient[];
}

/** Clients section wrapper. */
export interface IClients {
  intro: string;
  sectors: IClientSector[];
}

/** Structured postal address. */
export interface IAddress {
  street: string;
  neighborhood: string;
  city: string;
  state: string;
  country: string;
  full: string;
}

/** Contact channels. Phone values are raw national digits (10-digit MX). */
export interface IContact {
  office: string[];
  whatsapp: string[];
  email: string;
  facebook: string;
  address: IAddress;
}

/** Root shape of the LORSAM content dataset. */
export interface ILorsamData {
  company: ICompany;
  mission: string;
  vision: string;
  values: IValue[];
  history: IHistory;
  services: IService[];
  servicesEquipment: string[];
  specialty: ISpecialty;
  whyChooseUs: IDifferentiator[];
  clients: IClients;
  contact: IContact;
}

/** Per-route SEO metadata used by the `<Seo>` component. */
export interface ISeoMeta {
  title: string;
  description: string;
  path: ERoute;
  /** Absolute or root-relative image used for Open Graph / Twitter cards. */
  image?: string;
  keywords?: string[];
}

/** A primary navigation entry. */
export interface INavLink {
  label: string;
  to: ERoute;
}
