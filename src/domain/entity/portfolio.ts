export type Portfolio = {
  id: number
  name: string
  description: string
  image_url: string
};

export const newPortfolio = (): Portfolio => ({
  id: 0,
  name: '',
  description: '',
  image_url: '',
});
