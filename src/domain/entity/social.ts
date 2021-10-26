export type Social = {
  id: number
  name: string
  icon: string
  url: string
  type: 'header' | 'footer'
};

export const newSocial = (): Social => ({
  id: 0,
  name: '',
  icon: '',
  url: '',
  type: 'header',
});
