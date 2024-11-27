import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor() { }

public msg='I am going to the market'
public lastname='Owolabi'
public firstname='Oyindamola'
public age=12


public getlastname(){
  return this.age
}

public getage(){
return this.age
}


}
