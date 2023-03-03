import Router from './Router';
import { render } from '../utils/test/Wrapper';

describe('components', () => {
    it('should render Router without crash', async () => {
        render(<Router />);
    });

});