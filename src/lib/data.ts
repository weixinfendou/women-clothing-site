export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  images: string[];
  category: string;
  colors: Array<{ name: string; hex: string }>;
  sizes: string[];
  description: string;
  fabric: string;
  isNew?: boolean;
}

export const products: Product[] = [
  {
    id: '1',
    name: '法式复古碎花连衣裙',
    price: 89,
    originalPrice: 129,
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&h=800&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&h=1000&fit=crop',
      'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=800&h=1000&fit=crop',
      'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=800&h=1000&fit=crop',
    ],
    category: 'dress',
    colors: [
      { name: '米白', hex: '#FAF8F5' },
      { name: '雾粉', hex: '#E8D5CC' },
      { name: '炭黑', hex: '#2D2926' },
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    description: '轻盈雪纺面料，优雅碎花印花，适合春夏穿着。法式复古剪裁，展现温柔知性气质。',
    fabric: '100%聚酯纤维（雪纺）',
    isNew: true,
  },
  {
    id: '2',
    name: '简约真丝衬衫',
    price: 99,
    originalPrice: 159,
    image: 'https://images.unsplash.com/photo-1598554747436-c9293d6a588f?w=600&h=800&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1598554747436-c9293d6a588f?w=800&h=1000&fit=crop',
      'https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=800&h=1000&fit=crop',
      'https://images.unsplash.com/photo-1551163943-3f6a855d1153?w=800&h=1000&fit=crop',
    ],
    category: 'top',
    colors: [
      { name: '米白', hex: '#FAF8F5' },
      { name: '浅杏', hex: '#E8C9A8' },
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    description: '桑蚕丝面料，亲肤透气，简约百搭。通勤休闲两相宜，知性优雅必备单品。',
    fabric: '60%桑蚕丝 40%聚酯纤维',
    isNew: true,
  },
  {
    id: '3',
    name: '高腰A字半身裙',
    price: 69,
    image: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=600&h=800&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=800&h=1000&fit=crop',
      'https://images.unsplash.com/photo-1577900232427-18219b9166a0?w=800&h=1000&fit=crop',
      'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800&h=1000&fit=crop',
    ],
    category: 'skirt',
    colors: [
      { name: '雾粉', hex: '#E8D5CC' },
      { name: '藏蓝', hex: '#2D3748' },
    ],
    sizes: ['S', 'M', 'L'],
    description: '高腰设计拉长比例，A字版型修饰身形。面料垂坠有质感，日常通勤皆宜。',
    fabric: '100%聚酯纤维',
  },
  {
    id: '4',
    name: '轻薄针织开衫',
    price: 79,
    originalPrice: 109,
    image: 'https://images.unsplash.com/photo-1434389677669-e08b4cead0e2?w=600&h=800&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1434389677669-e08b4cead0e2?w=800&h=1000&fit=crop',
      'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=800&h=1000&fit=crop',
      'https://images.unsplash.com/photo-1525507119028-d4c98b370028?w=800&h=1000&fit=crop',
    ],
    category: 'outerwear',
    colors: [
      { name: '焦糖', hex: '#C4956A' },
      { name: '米白', hex: '#FAF8F5' },
      { name: '雾粉', hex: '#E8D5CC' },
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    description: '轻薄柔软的针织面料，春秋外搭首选。温柔色调，百搭不挑人。',
    fabric: '70%腈纶 30%羊毛',
    isNew: true,
  },
  {
    id: '5',
    name: '阔腿休闲西装裤',
    price: 89,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=600&h=800&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800&h=1000&fit=crop',
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&h=1000&fit=crop',
      'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=800&h=1000&fit=crop',
    ],
    category: 'pants',
    colors: [
      { name: '炭黑', hex: '#2D2926' },
      { name: '米白', hex: '#FAF8F5' },
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    description: '高腰阔腿版型，修饰腿型。面料挺括有垂感，通勤休闲两不误。',
    fabric: '95%聚酯纤维 5%氨纶',
  },
  {
    id: '6',
    name: '优雅雪纺衬衫裙',
    price: 79,
    image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600&h=800&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800&h=1000&fit=crop',
      'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=800&h=1000&fit=crop',
      'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=800&h=1000&fit=crop',
    ],
    category: 'dress',
    colors: [
      { name: '浅杏', hex: '#E8C9A8' },
      { name: '雾粉', hex: '#E8D5CC' },
    ],
    sizes: ['S', 'M', 'L'],
    description: '雪纺面料轻盈飘逸，衬衫领设计干练优雅。腰带收腰，勾勒优美曲线。',
    fabric: '100%聚酯纤维（雪纺）',
    isNew: true,
  },
  {
    id: '7',
    name: '复古波点泡泡袖上衣',
    price: 59,
    image: 'https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=600&h=800&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=800&h=1000&fit=crop',
      'https://images.unsplash.com/photo-1551163943-3f6a855d1153?w=800&h=1000&fit=crop',
      'https://images.unsplash.com/photo-1598554747436-c9293d6a588f?w=800&h=1000&fit=crop',
    ],
    category: 'top',
    colors: [
      { name: '米白', hex: '#FAF8F5' },
      { name: '炭黑', hex: '#2D2926' },
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    description: '复古波点元素，泡泡袖设计甜美减龄。轻薄透气，夏日必备。',
    fabric: '100%棉',
  },
  {
    id: '8',
    name: '气质百褶长裙',
    price: 89,
    originalPrice: 119,
    image: 'https://images.unsplash.com/photo-1577900232427-18219b9166a0?w=600&h=800&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1577900232427-18219b9166a0?w=800&h=1000&fit=crop',
      'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=800&h=1000&fit=crop',
      'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800&h=1000&fit=crop',
    ],
    category: 'skirt',
    colors: [
      { name: '雾粉', hex: '#E8D5CC' },
      { name: '藏蓝', hex: '#2D3748' },
      { name: '米白', hex: '#FAF8F5' },
    ],
    sizes: ['S', 'M', 'L'],
    description: '细密百褶工艺，行走间裙摆飘逸。松紧腰设计，舒适不勒腰。',
    fabric: '100%聚酯纤维',
  },
];

export interface CartItem {
  product: Product;
  quantity: number;
  selectedColor: string;
  selectedSize: string;
}

export const defaultCartItems: CartItem[] = [
  {
    product: products[0],
    quantity: 1,
    selectedColor: '米白',
    selectedSize: 'M',
  },
  {
    product: products[3],
    quantity: 1,
    selectedColor: '焦糖',
    selectedSize: 'S',
  },
  {
    product: products[4],
    quantity: 1,
    selectedColor: '炭黑',
    selectedSize: 'M',
  },
];
