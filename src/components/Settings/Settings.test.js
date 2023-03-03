import Settings from './Settings';
import { render } from '../../utils/test/Wrapper';

describe('Settings component', () => {
    it('should render Settings without crash', async () => {
        render(<Settings />);
    });
});