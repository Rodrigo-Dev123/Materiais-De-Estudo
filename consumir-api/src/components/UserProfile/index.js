import { FaUserAlt } from 'react-icons/fa';

import { Button } from './styled';

export default function UserProfile() {
  function handleClick(e) {
    e.preventDefault();
  }

  return (
    <Button onClick={handleClick}>
      <FaUserAlt size={15} />
    </Button>
  );
}
