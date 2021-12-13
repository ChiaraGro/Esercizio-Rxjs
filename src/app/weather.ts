export interface Weather {
  name: string;
  timezone: number; //cambiare con date??
  weather:[{
    icon: string;
    description: string;
  }];
  main: {
    temp: number;
  }
  dt: number;

}
