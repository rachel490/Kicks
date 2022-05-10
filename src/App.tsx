import React from 'react';
import GlobalStyle from 'styles/GlobalStyle';
import { Routes, Route } from 'react-router-dom';
import { AdminContents, AdminUser, AppLayout } from 'components';
import {
  AdminPage,
  ChatListPage,
  ChatRoomPage,
  MainPage,
  ProfilePage,
  SearchPage,
  VideoUploadPage,
  OnBoardingPage
} from 'pages';
import { ThemeProvider } from 'styled-components';
import defaultTheme from 'styles/DefaultTheme';

function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<MainPage />} />
            <Route path="search" element={<SearchPage />} />
            <Route path="upload" element={<VideoUploadPage />} />
            <Route path="chats" element={<ChatListPage />} />
            <Route path="profile" element={<ProfilePage />} />
            <Route path="/video/:videoId" element={<MainPage />} />
          </Route>
          <Route path="onboard" element={<OnBoardingPage />} />
          <Route path="/chat/:id" element={<ChatRoomPage />} />
          <Route path="/admin" element={<AdminPage />}>
            <Route path="contents" element={<AdminContents />} />
            <Route path="user" element={<AdminUser />} />
          </Route>
          {/* <Route path="/login" element={} /> */}
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
