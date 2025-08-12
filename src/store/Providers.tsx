"use client"
import { Provider } from 'react-redux';
import {store} from './Store';


const Providers = ({ children }: { children: any }) => {
      return (
            <Provider store={store}>
                  {children}
            </Provider>
      )
}


export default Providers;