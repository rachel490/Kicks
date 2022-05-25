import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'styles/GlobalStyle';
import defaultTheme from 'styles/DefaultTheme';
import {
  AdminLayout,
  AppLayout,
  ContentsEdit,
  KakaoRedirectHandler,
  LoginModal,
  PrivateRoute,
} from 'components';
import {
  AdminUserPage,
  AdminContentPage,
  AdminDashBoard,
  ChatListPage,
  ChatRoomPage,
  MainPage,
  ProfilePage,
  SearchPage,
  VideoUploadPage,
  OnBoardingPage,
  SearchResultPage,
  LoginPage,
  FollowPage,
  PlayPage,
  NotificationPage
} from 'pages';

function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <LoginModal />
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route path="/" element={<PrivateRoute />}>
              <Route path="/chats" element={<ChatListPage />} />
              <Route path="/notice" element={<NotificationPage />} />
            </Route>
            <Route index element={<MainPage />} />
            <Route path="/:username" element={<ProfilePage />} />
            <Route path="search" element={<SearchPage />} />
            <Route path="search_result" element={<SearchResultPage />} />
            <Route path="/:username/:follow/" element={<FollowPage />} />
            <Route path="/video/:videoId" element={<PlayPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/oauth/callback" element={<KakaoRedirectHandler />} />
          </Route>
          <Route path="/" element={<PrivateRoute />}>
            <Route path="/upload" element={<VideoUploadPage />} />
            <Route path="/onboard" element={<OnBoardingPage />} />
            <Route path="/chat/:id" element={<ChatRoomPage />} />
            <Route path="/admin" element={<AdminLayout />}>
              <Route path="contents" element={<AdminContentPage />} />
              <Route path="contents/edit/:videoId" element={<ContentsEdit />} />
              <Route path="users" element={<AdminUserPage />} />
              <Route
                path="users/dashboard/:userId"
                element={<AdminDashBoard />}
              />
            </Route>
          </Route>
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
