export interface Weather {
  name: string;
  timezone: number;
  weather:[{
    main: string;
    icon: string;
    description: string;
  }];

}
