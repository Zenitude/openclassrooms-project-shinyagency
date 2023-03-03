import Card from './Card';
import { screen, fireEvent } from '@testing-library/react';
import { render } from '../../utils/test/Wrapper';
import DefaultPicture from '../../assets/profile.png';

describe('Card component', () => {
    it('should render Card without crash', async () => {
        render(<Card />);
    });

    it('Card obtain picture props', async () => {
        render(<Card 
            title="Harry Potter"
            label="Magicien frontend"
            picture="/myPicture.png"
        />);
        const CardImage = screen.getByRole('img');
        expect(CardImage.src).not.toBe(DefaultPicture);
    });

    it('Card obtain title props', async () => {
        render(<Card 
            title="Harry Potter"
            label="Magicien frontend"
            picture="/myPicture.png"
        />);
        const CardTitle = screen.getByText(/Harry/i);
        expect(CardTitle.textContent.trim()).toBe('Harry Potter');
    })

    it('Card obtain label props', async () => {
        render(<Card 
            title="Harry Potter"
            label="Magicien frontend"
            picture="/myPicture.png"
        />);
        const CardTitle = screen.getByText(/Magicien/i);
        expect(CardTitle.textContent.trim()).toBe('Magicien frontend');
    })

    it('Click on Article add Star', async () => {
        render(<Card 
            title="Harry Potter"
            label="Magicien frontend"
            picture="/myPicture.png"
        />);
        const CardTitle = screen.getByText(/Harry/i);
        const CardWrapper = CardTitle.closest('article');
        fireEvent.click(CardWrapper);
        expect(CardTitle.textContent).toBe('⭐️ Harry Potter ⭐️');
    });
 
});