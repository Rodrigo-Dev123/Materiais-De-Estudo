import { render, screen } from "@testing-library/react";
import { PostCard } from ".";
import { postCardPropsMock } from "./mock";

const props = postCardPropsMock;

describe('<PostCard />', () => {
  it('Should render PostCard corretly', () => {
    render(<PostCard {...props} />);

    expect(screen.getByRole('img', { name: 'title 1' }))
      .toHaveAttribute('src', 'img/img.png');
    expect(screen.getByRole("heading", { name: 'title 11' })).toBeInTheDocument();
    expect((screen).getByText('body 1')).toBeInTheDocument();
  });

  it('Should render PostCard corretly', () => {
    const { container } = render(<PostCard {...props} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
