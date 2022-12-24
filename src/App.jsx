import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import './App.css';
import { ShowTables } from './components/ShowTables';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className='App'>
        <ShowTables />
      </div>
    </QueryClientProvider>
  );
}

export default App;
