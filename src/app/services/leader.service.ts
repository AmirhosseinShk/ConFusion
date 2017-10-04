import { Injectable } from '@angular/core';

import { Leader } from '../shared/leader';
import { LEADERS } from '../shared/leaders';

@Injectable()
export class LeaderService {

  constructor() { }

  getLeaders(): Promise<Leader[]> {
    return new Promise(resolve => {
      //Sumilate server latency with 2 second delay
      setTimeout(() => resolve(LEADERS) , 2000);
    });
  }

  getLeader(id: number): Promise<Leader> {
    return new Promise(resolve => {
      //Sumilate server latency with 2 second delay
      setTimeout(() => resolve(LEADERS.filter((leader) => (leader.id === id))[0]) , 2000);
    });
  }

  getFeaturedLeader() : Promise<Leader> {
    return new Promise(resolve => {
      //Sumilate server latency with 2 second delay
      setTimeout(() => resolve(LEADERS.filter((leader) => (leader.featured))[0]) , 2000);
    });
  }

}
