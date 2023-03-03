import { rest } from 'msw';
import { setupServer } from 'msw/node';

const freelancersMockedData = [
    {
        name: 'Harry Potter',
        job: 'Magicien frontend',
        picture: '',
    },
    {
        name: 'Hermione Granger',
        job: 'Magicienne fullstack',
        picture: '',
    },
]

const resultsMockedData = [
    {
        "title":"backend",
        "description":"Le backend consiste en la partie émergée de l'iceberg : ce qui permet de faire tourner une application mais qui n'est pas visible par l'utilisateur"
    },
    {
        "title":"seo",
        "description":"Le SEO est en charge du référencement web d'une page"
    },
]

export const server = (test, url) => {
    const server = setupServer(
        rest.get(url, (req, res, ctx) => {
            if(test === 'freelances') {
                return res(ctx.json({ freelancersList: freelancersMockedData }));
            } else if(test === 'results') {
                return res(ctx.json({ resultsData: resultsMockedData }));
            }
        })
    );

    beforeAll(() => server.listen());
    afterEach(() => server.resetHandlers());
    afterAll(() => server.close());
}


