import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const userguardGuard: CanActivateFn = (route, state) => {
  let user=JSON.parse(localStorage.getItem('user')!)
  let router=inject(Router)
  if(!user){
router.navigate(['/'])
  }
  return true;
};
