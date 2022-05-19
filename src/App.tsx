import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'styles/GlobalStyle';
import defaultTheme from 'styles/DefaultTheme';
import {
  AdminLayout,
  AppLayout,
  ContentsEdit,
  KakaoRedirectHandler
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
  PlayPage
} from 'pages';


function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<MainPage />} />
            <Route path="/:username" element={<ProfilePage />} />
            <Route path="search" element={<SearchPage />} />
            <Route path="search_result" element={<SearchResultPage />} />
            <Route path="chats" element={<ChatListPage />} />
            <Route path="profile/:userId/:follow/" element={<FollowPage />} />
            <Route path="/video/:videoId" element={<PlayPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/oauth/callback" element={<KakaoRedirectHandler />} />
          </Route>
          <Route path="upload" element={<VideoUploadPage />} />
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
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
