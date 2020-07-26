import * as React from 'react';
import './App.css';

// import VeryBigJokesList from './VeryBigJokesList';
const VeryBigJokesList = React.lazy(() => import('./VeryBigJokesList'));

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div style={{ maxWidth: 600 }}>
          <React.Suspense fallback={<p>Loading list...</p>}>
            <VeryBigJokesList />
          </React.Suspense>

          {/* <VeryBigJokesList /> */}
        </div>
      </header>
    </div>
  );
}

export default App;
