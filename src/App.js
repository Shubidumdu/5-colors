import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Main from './pages/Main';
import PicCrop from './pages/PicCrop';
import PicUpload from './pages/PicUpload';
import Result from './pages/Result';
import ColorPick from './pages/ColorPick';
import ColorEdit from './pages/ColorEdit';
import PictureResult from './pages/PictureResult';
import { useSelector } from 'react-redux';
import Spinner from './components/spinner/Spinner';
import ErrorModal from './components/error/ErrorModal';

const routes = [
  {
    Component: Main,
    path: '/',
  },
  { Component: PicUpload, path: '/upload' },
  { Component: PicCrop, path: '/crop' },
  { Component: ColorPick, path: '/color/pick' },
  { Component: Result, path: '/result' },
  { Component: ColorEdit, path: '/color/edit' },
  { Component: PictureResult, path: '/result/picture' },
];

const ErrorMsg = {
  'Unexpected token u in JSON at position 0': '인식된 인물이 없습니다.',
};

function App() {
  const loading = useSelector((state) => state.result.loading);
  const error = useSelector((state) => state.result.error);

  return (
    <div className="App">
      <Router>
        <Spinner visible={loading} />
        <ErrorModal visible={error}>
          {ErrorMsg[error?.message] || '에러가 발생했습니다.'}
        </ErrorModal>
        {routes.map(({ Component, path }) => (
          <Route key={path} exact path={path}>
            <Component />
          </Route>
        ))}
      </Router>
    </div>
  );
}

export default App;
