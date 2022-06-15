import React from 'react'
import { Routes, Route } from 'react-router'

import routes from './routes'

export class RootCmp extends React.Component {

    render() {
        return (
            <div>
                <main>
                    <Routes>
                        {routes.map(route => <Route key={route.path} exact={true} element={route.component} path={route.path} />)}
                    </Routes>
                </main>
            </div>
        )
    }
}


// import React from 'react';

// function App() {
//   return (
//     <div className="App">
//       hello
//     </div>
//   );
// }

// export default App;
