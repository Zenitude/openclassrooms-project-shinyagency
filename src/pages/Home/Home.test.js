import Home from './Home';
import { screen } from '@testing-library/react';
import { render } from '../../utils/test/Wrapper';

describe('The Home component', () => {
    it('should render Header without crash', async () => {
        render(<Home />);
    });

    it('should render title', () => {
        render(<Home />);
        expect(
            screen.getByRole(
                'heading', 
                {
                    level: 2, 
                    text: "Repérez vos besoins, on s'occupe du reste, avec les meilleurs talents"
                }
            )
        ).toBeTruthy()
    })

    it('should render link', () => {
        render(<Home />);
        const HomeTitle = screen.getByRole('heading', {level: 2});
        const HomeLink = HomeTitle.nextElementSibling;
        expect(HomeLink.textContent).toBe('Faire le test');
    });
})