export type Service = {
  id: number
  name1: string
  name2: string
  icon: string
  content: string[]
};

export const newService = (): Service => ({
  id: 0,
  name1: '',
  name2: '',
  icon: '',
  content: [],
});
