import Admin from './Admin';
import { render } from '../../utils/test/Wrapper';

describe('The Admin component', () => {
    it('should render Admin without crash', async () => {
        render(<Admin />);
    });
});