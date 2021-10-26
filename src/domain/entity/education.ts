export type Education = {
  id: number
  name: string
  place: string
  start_year: string
  end_year: string
};

export const newEducation = (): Education => ({
  id: 0,
  name: '',
  place: '',
  end_year: '',
  start_year: '',
});
