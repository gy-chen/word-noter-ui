import 'rxjs';
import { Observable } from 'rxjs/Observable';
import { combineEpics } from 'redux-observable';
import Types from '../action/type';
import { putWord } from '../action/word';
import wordApi from '../service/wordApi';

const findAll = action$ => {
  return action$.ofType(Types.WORDS_FIND_ALL_REQUEST).switchMap(() => {
    const observable = Observable.create(observer => {
      wordApi.findAll().then(res => {
        if (res.ok) {
          const words = res.data;
          words.map(putWord).map(word => observer.next(word));
          observer.complete();
        } else {
          console.log('error:', res);
        }
      });
    });
    return observable;
  });
};

const put = action$ => {
  return action$.ofType(Types.WORDS_PUT_REQUEST).switchMap(q => {
    const name = q.name;
    const observable = Observable.create(observer => {
      wordApi.put({ name }).then(res => {
        if (res.ok) {
          const word = res.data;
          observer.next(putWord(word));
          observer.complete();
        } else {
          console.log('error:', res);
        }
      });
    });
    return observable;
  });
};

export default combineEpics(findAll, put);
