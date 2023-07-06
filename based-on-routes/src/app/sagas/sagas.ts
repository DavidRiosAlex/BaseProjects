import createSagaMiddleware from 'redux-saga'
import { all } from 'redux-saga/effects';
import homeSagas from '../../Home/sagas/sagas'

/*
    replace this with a real scenario.
*/

function* SagasApp() {
    yield all([ /* ... here all the saga generator */ ...homeSagas ])
}

export default {
    initializer: function () {
        this.middleware.run(SagasApp);
    },
    middleware: createSagaMiddleware()
};