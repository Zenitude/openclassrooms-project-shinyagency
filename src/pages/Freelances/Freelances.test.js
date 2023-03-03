import { server } from '../../utils/test/server';
import Freelances from './Freelances';
import { waitFor, screen, waitForElementToBeRemoved } from '@testing-library/react';
import { render } from '../../utils/test/Wrapper';

server('freelances','http://localhost:8000/freelances')

describe('The Freelances component', () => {
    it('should render Freelances without crash', async () => {
        render(<Freelances />);
    });

    it('Should render Loader', async () => {
        render(<Freelances />);
        expect(screen.getByTestId('loader')).toBeTruthy();
    });

    it('Should display freelancers names', async () => {
        render(<Freelances />);
        
        await waitForElementToBeRemoved(() => screen.getByTestId('loader'))
        await waitFor(() => {
            expect(screen.getByText('Harry Potter')).toBeTruthy();
            expect(screen.getByText('Hermione Granger')).toBeTruthy();
            expect(screen.getByText('Magicien frontend')).toBeTruthy();
            expect(screen.getByText('Magicienne fullstack')).toBeTruthy();
        });
    });
});