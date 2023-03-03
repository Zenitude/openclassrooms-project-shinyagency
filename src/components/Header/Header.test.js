import Header from './Header';
import { render } from '../../utils/test/Wrapper';

describe('Header component', () => {
    it('should render Header without crash', async () => {
        render(<Header />);
    });
});