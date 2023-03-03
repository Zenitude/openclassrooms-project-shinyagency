import Dashboard from './Dashboard';
import { render } from '../../utils/test/Wrapper';

describe('Dashboard component', () => {
    it('should render Dashboard without crash', async () => {
        render(<Dashboard />);
    });
});