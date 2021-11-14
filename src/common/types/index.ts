export type NavigationMenuProps = {
  name: string
  target: string
  icon: string
};

export type NavigationProps = {
  menus: NavigationMenuProps[]
};

export type HeaderProps = {
  menus?: NavigationMenuProps[]
};

export type AboutItem = {
  title: string
  description1: string
  description2: string
};

export type AboutItemProps = {
  aboutItems: AboutItem[]
};

export type SkillsDataProps = {
  id: string,
  name: string,
  level: string
};

export type SkillsProps = {
  id: number
  name: string
  experience: string
  icon: string,
  isActive: boolean,
  subSkill: SkillsDataProps[]
};

export type QualificationDataProps = {
  index: number,
  id: number
  name: string
  place: string
  start_year: string
  end_year: string
};

export type ServicesProps = {
  id: number
  name1: string
  name2: string
  icon: string
  content: string[]
};
