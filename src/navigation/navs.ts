// src/navigation/navs.ts
type RootStackParamList = {
  List: undefined;
  Details: {
    id: number;
    university: string;
    country: string;
    description: string;
    foundedYear: number;
    worldRanking: number;
  };
};
type uni = {
  id: number;
  university: string;
  country: string;
  description: string;
  foundedYear: number;
  worldRanking: number;
};
export type { uni, RootStackParamList };
