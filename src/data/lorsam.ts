import type { ILorsamData } from '../types';
import raw from './lorsamData.json';

/**
 * Typed, immutable accessor for the LORSAM content dataset.
 * The raw JSON is cast once here so consumers import a fully typed object.
 */
export const lorsamData: ILorsamData = raw as ILorsamData;
