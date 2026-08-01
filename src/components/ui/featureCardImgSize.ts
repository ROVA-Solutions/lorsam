/** Grid col/row span preset for {@link FeatureCardImg}. */
export enum EFeatureCardImgSize {
  Sm = 'sm',
  Md = 'md',
  Lg = 'lg',
  Xl = 'xl',
}

export const FEATURE_CARD_IMG_SIZE_CLASSES: Record<EFeatureCardImgSize, string> = {
  [EFeatureCardImgSize.Sm]: '',
  [EFeatureCardImgSize.Md]: 'sm:col-span-2',
  [EFeatureCardImgSize.Lg]: 'sm:row-span-2',
  [EFeatureCardImgSize.Xl]: 'sm:col-span-2 sm:row-span-2',
};
