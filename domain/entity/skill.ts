import { SubSkill } from './subskill';

export type Skill = {
  id: number
  name: string
  experience: string
  icon: string,
  subSkill: SubSkill[]
};

export const newSkill = (): Skill => ({
  id: 0,
  name: '',
  experience: '',
  icon: '',
  subSkill: [],
});
