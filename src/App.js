import {
  BrowserRouter,
  Route,
  Routes,
  createBrowserRouter,
} from "react-router-dom";
import { Header } from "./Components/Header";
import { Main } from "./Components/Main";
import { VideoPlayerPage } from "./Components/VideoPlayerPage";
import { VideoList } from "./Components/VideoList";
import { Provider } from "react-redux";
import store from "./Store/store";
function App() {
  // const appRouter = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Main />,
  //     children: [
  //       {
  //         path: "/",
  //         element: <VideoList />,
  //       },
  //       {
  //         path: "watch",
  //         element: <VideoPlayerPage />,
  //       },
  //     ],
  //   },
  // ]);
  return (
    <>
      {/* <Header />
      <RouterProvider router={appRouter}/> */}
      <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />}>
            <Route path="/" element={<VideoList/>}></Route>
            <Route path="/watch" element={<VideoPlayerPage/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
