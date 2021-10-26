export type SubSkill = {
  id: number
  name: string
  level: 'basic' | 'intermediate' | 'expert'
};

export const newSubSkill = (): SubSkill => ({
  id: 0,
  name: '',
  level: 'basic',
});
