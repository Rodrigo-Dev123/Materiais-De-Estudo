import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { render, screen, waitForElementToBeRemoved } from "@testing-library/react";
import { Home } from './index';

const handlers = [
  console.log('a chamada foi interceptada'),
  rest.get('https://jsonplaceholder.typicode.com/posts', async (req, res, ctx) => {
    return res(ctx.json([
      {
        userId: 1,
        id: 1,
        title: "title 1",
        body:
         "body 1",
      },
      {
        userId: 2,
        id: 2,
        title: "title 2",
        body:
         "body 2",
      },
      {
        userId: 3,
        id: 3,
        title: "title 3",
        body:
         "body 3",
      },
    ]));
  })
];

const server = setupServer(...handlers);

describe('<Home />', () => {
  beforeAll(() => {
    server.listen();
  });

  afterEach(() => {
    server.resetHandlers()
  })

  afterAll(() => {
    server.close();
  });

  test('should render search, posts and load more', async () => {
    render(<Home />);
    const noMorePosts = screen.getByText('Não existem posts =(');

    await waitForElementToBeRemoved(noMorePosts);
    const search = screen.getByPlaceholderText(/type your search/i);
    expect(search).toBeInTheDocument();
  });

  test('should render search, posts and load more', async () => {
    render(<Home />);
    const noMorePosts = screen.getByText('Não existem posts =(');

    await waitForElementToBeRemoved(noMorePosts);
    const button = screen.getByRole('button', { name: /load more posts/i });

  });
})
