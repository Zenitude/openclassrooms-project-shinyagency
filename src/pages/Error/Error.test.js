import Error from './Error';
import { render } from '../../utils/test/Wrapper';

describe('The Error component', () => {
    it('should render Error without crash', async () => {
        render(<Error />);
    });
});