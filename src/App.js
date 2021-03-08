import { PageLayout } from './components/layout'
import { AppRouter } from './router/AppRouter'

const App = () => {
  return (
    <PageLayout>
      <AppRouter></AppRouter>
    </PageLayout>
  );
}

export default App;
