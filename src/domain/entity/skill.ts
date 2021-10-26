export type Skill = {
  id: number
  name: string
  experience: string
  icon: string
};

export const newSkill = (): Skill => ({
  id: 0,
  name: '',
  experience: '',
  icon: '',
});
