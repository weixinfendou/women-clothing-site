// Brand configuration - all values are configurable
export const brandConfig = {
  // Brand identity
  brandName: '天衣服饰',
  brandSlogan: '以衣为语，温柔以待',
  brandDescription: '为30-40岁知性女性打造优雅日常的女装品牌',

  // Contact
  contactPhone: '400-888-6688',
  contactEmail: 'service@tianyi-fashion.com',
  contactWeChat: 'tianyi_fashion',

  // External links
  taobaoUrl: 'https://shop00000000.taobao.com',
  taobaoStoreName: '天衣服饰旗舰店',

  // Feature toggles
  enableAlipay: true,
  enableWechatPay: true,

  // Price range display
  priceRange: {
    min: 59,
    max: 99,
    currency: '¥',
  },

  // Categories
  categories: [
    { id: 'dress', name: '连衣裙', icon: 'dress' },
    { id: 'top', name: '上衣', icon: 'shirt' },
    { id: 'skirt', name: '半裙', icon: 'layers' },
    { id: 'pants', name: '裤装', icon: 'pants' },
    { id: 'outerwear', name: '外套', icon: 'coat' },
  ],
} as const;

export type BrandConfig = typeof brandConfig;
