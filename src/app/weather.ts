export interface Weather {
  name: string;
  timezone: number;
  weather:[{
    icon: string;
    description: string;
  }];
  main: {
    temp: number;
  }

}
