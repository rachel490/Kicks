import React from 'react';
import GlobalStyle from 'styles/GlobalStyle';
import { Routes, Route } from 'react-router-dom';
import { AppLayout } from 'components';
import { ChatPage, MainPage, MyPage, SearchPage, UploadPage } from 'pages';
import { ThemeProvider } from 'styled-components';
import defaultTheme from 'styles/DefaultTheme';

function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <Routes>
          {/* <Route path="/login" element={} /> */}
          <Route path="/" element={<AppLayout />}>
            <Route index element={<MainPage />} />
            <Route path="search" element={<SearchPage />} />
            <Route path="upload" element={<UploadPage />} />
            <Route path="chat" element={<ChatPage />} />
            <Route path="mypage" element={<MyPage />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
