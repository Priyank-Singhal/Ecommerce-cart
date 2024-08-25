'use client';
import './globals.css';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { store } from './slices/store';
import Navbar from '../components/Navbar';


export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <Navbar /> 
          {children}
        </Provider>
      </body>
    </html>
  );
}
