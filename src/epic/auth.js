import 'rxjs';
import { Observable } from 'rxjs/Observable';
import Types from '../action/type';
import { setCurrentUser } from '../action/auth';
import authApi from '../service/authApi';

const fetchCurrentUser = action$ => {
  return action$.ofType(Types.AUTH_SET_TOKEN).switchMap(() => {
    const observable = Observable.create(observer => {
      authApi.profile().then(res => {
        if (res.ok) {
          const profile = res.data;
          observer.next(setCurrentUser(profile));
          observer.complete();
        } else {
          console.log('error:', res);
        }
      });
    });
    return observable;
  });
};

export default fetchCurrentUser;
