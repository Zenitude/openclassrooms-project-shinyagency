import Footer from './Footer';
import { screen, fireEvent } from '@testing-library/react';
import { render } from '../../utils/test/Wrapper';

describe('Footer component', () => {
    it('should render Footer without crash', async () => {
        render(<Footer />);
    });

    it('Change Theme on Footer', async () => {
        render(<Footer />);
        const nightModeButton = screen.getByRole('button');
        expect(nightModeButton.textContent).toBe('Changer de mode : ☀️');
        fireEvent.click(nightModeButton);
        expect(nightModeButton.textContent).toBe('Changer de mode : 🌙');
    });
});