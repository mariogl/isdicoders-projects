export interface SonarInfo {
  coverage: number;
  codeSmells: number;
  bugs: number;
  debt: number;
  securityHotspots: number;
  vulnerabilities: number;
}

export interface Tutor {
  id: string;
  name: string;
}
export interface Project {
  id: string;
  challenge: string;
  name: string;
  student: string;
  trello: string;
  sonarKey: {
    front: string;
    back: string;
  };
  sonarInfoBack: SonarInfo;
  sonarInfoFront: SonarInfo;
  tutor: Tutor;
  repo: {
    front: string;
    back: string;
  };
  prod: {
    front: string;
    back: string;
  };
}

export type WeekNumbers = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
export type WeekStrings =
  | "week1"
  | "week2"
  | "week3"
  | "week4"
  | "week5"
  | "week6"
  | "week7"
  | "week8"
  | "week9";

export interface Challenge {
  id: string;
  name: string;
  week: WeekNumbers;
}

export interface Credentials {
  username: string;
  password: string;
}

export interface User {
  id: string;
  name: string;
}

export interface UserState extends User {
  isLoggedIn: boolean;
}
