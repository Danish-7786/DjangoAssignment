// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Login from './Login';
// import Dashboard from './Dashboard';
// import Profile from './Profile';
// import ChangePassword from './ChangePassword';
// import PrivateRoute from './PrivateRoute';

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         {/* Public Routes */}
//         <Route path="/login" element={<Login />} />

//         {/* Protected Routes */}
//         <Route
//           path="/dashboard"
//           element={
//             <PrivateRoute>
//               <Dashboard />
//             </PrivateRoute>
//           }
//         />
//         <Route
//           path="/profile"
//           element={
//             <PrivateRoute>
//               <Profile />
//             </PrivateRoute>
//           }
//         />
//         <Route
//           path="/change-password"
//           element={
//             <PrivateRoute>
//               <ChangePassword />
//             </PrivateRoute>
//           }
//         />

//         {/* Default redirect to login */}
//         <Route path="*" element={<Login />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Dashboard from './Dashboard';
import Profile2 from './Profile2';
import ChangePassword from './ChangePassword';
import PrivateRoute from './PrivateRoute';
import Signup from './Signup'; // Importing the Signup component

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} /> 

        {/* Protected Routes */}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile2 />
            </PrivateRoute>
          }
        />
        <Route
          path="/change-password"
          element={
            <PrivateRoute>
              <ChangePassword />
            </PrivateRoute>
          }
        />

        {/* Default redirect to login */}
        <Route path="*" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
