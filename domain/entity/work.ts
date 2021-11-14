export type Work = {
  id: number
  name: string
  place: string
  start_year: string
  end_year: string
};

export const newWork = (): Work => ({
  id: 0,
  name: '',
  place: '',
  start_year: '',
  end_year: '',
});
