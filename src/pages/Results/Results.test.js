import { server } from '../../utils/test/server';
import Results, { formatJobList, formatQueryParams } from './Results';
import { screen, waitForElementToBeRemoved } from '@testing-library/react';
import { render } from '../../utils/test/Wrapper';

server('results', 'http://localhost:8000/results/');

describe('The formatJobList function', () => {
    it('should add a comma to a word', () => {
        const expectedState = 'item2,';
        expect(formatJobList('item2', 3, 1)).toEqual(expectedState);
    });
 
    it('should not add a comma to the last element of the list', () => {
        const expectedState = 'item3';
        expect(formatJobList('item3', 3, 2)).toEqual(expectedState);
    });
});

describe('The formatQueryParams function', () => {
    it('should add & after first element', () => {
        const expectedState = 'a1=0';
        const answers = {
            1 : 0,
        }
        expect(formatQueryParams(answers)).toEqual(expectedState);
    });
    it('should add & after first element', () => {
        const expectedState = 'a1=0&a2=1&a3=0';
        const answers = {
            1 : 0,
            2 : 1,
            3 : 0
        }
        expect(formatQueryParams(answers)).toEqual(expectedState);
    });
});

describe('The Results component', () => {
    it('should render Results without crash', async () => {
        render(<Results />);
    });

    it('Sould render heading', () => {
        render(<Results />);
        const Title = screen.getByRole('heading', { level: 1});
        expect(Title.textContent).toBe("Résultats");
    });

    it('Should display results title', async () => {
        render(<Results />);
        
        await waitForElementToBeRemoved(() => screen.getByTestId('loader'));
        
        const jobTitles = screen.getAllByTestId('job-title');
        const jobDescs = screen.getAllByTestId('job-description');
        
        expect(jobTitles.length).toBe(2);
        expect(jobTitles[0].textContent).toBe('backend');
        expect(jobTitles[1].textContent).toBe('seo');
        
        expect(jobDescs.length).toBe(2);
        expect(jobDescs[0].textContent).toBe("Le backend consiste en la partie émergée de l'iceberg : ce qui permet de faire tourner une application mais qui n'est pas visible par l'utilisateur");
        expect(jobDescs[1].textContent).toBe("Le SEO est en charge du référencement web d'une page");
            
       
    });
});