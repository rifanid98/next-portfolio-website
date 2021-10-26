export type Service = {
  id: number
  name: string
  icon: string
  content: string
};

export const newService = (): Service => ({
  id: 0,
  name: '',
  icon: '',
  content: '',
});
