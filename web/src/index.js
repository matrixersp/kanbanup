import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from 'app/App';
import store from 'app/store';
import { theme } from 'theme';
import GlobalStyles from 'globalStyles';
import reportWebVitals from 'reportWebVitals';

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <App />
      </ThemeProvider>
    </Provider>
  </StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
