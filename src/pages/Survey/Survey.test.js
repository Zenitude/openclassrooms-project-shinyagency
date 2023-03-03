import Survey from './Survey';
import { screen } from '@testing-library/react';
import { render } from '../../utils/test/Wrapper';

describe('The Survey component', () => {
    it('should render Survey without crash', async () => {
        render(<Survey />);
    });

    it('should render Button Yes', async () => {
        render(<Survey />);
        const ButtonYes = screen.getByText(/Oui/i);
        expect(ButtonYes.textContent).toBe('Oui');
    });

    it('should render Button No', async () => {
        render(<Survey />);
        const ButtonNo = screen.getByText(/Non/i);
        expect(ButtonNo.textContent).toBe('Non');
    });
    
});