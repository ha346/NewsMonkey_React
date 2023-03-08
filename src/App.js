// React Function Based Component

import './App.css';
import React,{useState} from 'react';
import NavBar from './Components/NavBar';
import News from './Components/News'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';
 
const App=()=> {
  //  const a="Harsh"
  const apiKey=process.env.REACT_APP_NEWS_API
  const pageSize = 10 
  const [progress, setProgress] = useState(0)  
  
    return <div>
      <Router>
        <NavBar />
        <LoadingBar 
          height={3}
        color="#f11946"
        progress={progress}
        />
        <Routes>
        <Route exact element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} category="general" country="in" />} path="/" />  
        <Route exact element={<News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize}  category="business" country="in" />} path="/business" />
        <Route exact element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} category="entertainment" country="in" />} path="/entertainment" />
        <Route exact element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} category="general" country="in" />}  path="/general" />
        <Route exact element={<News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} category="health" country="in" />}  path="/health" />
        <Route exact element={<News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} category="science" country="in" />}  path="/science" />
        <Route exact element={<News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} category="sports" country="in" />}  path="/sports" />
        <Route exact element={<News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} category="technology" country="in" />}  path="/technology" />
        </Routes>
      </Router>
    </div>;
  } 

 

export default App;



// API Key: d7ef701adfdc4this.pageSize9b9ff8470c2this.pageSize98fdthis.pageSizee









// // React Class Based Components

// import './App.css';
// import React from 'react';
// import NavBar from './Components/NavBar';
// import News from './Components/News'; 
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import LoadingBar from 'react-top-loading-bar';
 
// class App extends React.Component {
//   //  a="Harsh"
//   apiKey=process.env.REACT_APP_NEWS_API
//   pageSize = 10
//   state = {
//     progress:0
//   }
//   setProgress = (progress) => {
//     setState({ progress: progress })
//   }
//   render() {
//     return <div>
//       <Router>
//         <NavBar />
//         <LoadingBar 
//           height={3}
//         color="#f11946"
//         progress={state.progress}
//         />
//         <Routes>
//         <Route exact element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} category="general" country="in" />} path="/" />  
//         <Route exact element={<News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize}  category="business" country="in" />} path="/business" />
//         <Route exact element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} category="entertainment" country="in" />} path="/entertainment" />
//         <Route exact element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} category="general" country="in" />}  path="/general" />
//         <Route exact element={<News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} category="health" country="in" />}  path="/health" />
//         <Route exact element={<News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} category="science" country="in" />}  path="/science" />
//         <Route exact element={<News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} category="sports" country="in" />}  path="/sports" />
//         <Route exact element={<News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} category="technology" country="in" />}  path="/technology" />
//         </Routes>
//       </Router>
//     </div>;
//   }
// }

 

// export default App;



// API Key: d7ef701adfdc4this.pageSize9b9ff8470c2this.pageSize98fdthis.pageSizee

  
