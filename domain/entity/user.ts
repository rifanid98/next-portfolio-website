export type User = {
  id: number
  name: string
  profession: string
  summary: string
  description: string
  experience: string
};

export const newUser = (): User => ({
  id: 0,
  name: '',
  profession: '',
  summary: '',
  description: '',
  experience: '',
});
