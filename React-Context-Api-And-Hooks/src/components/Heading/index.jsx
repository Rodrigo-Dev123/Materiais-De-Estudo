import P from 'prop-types';
import { useCounterContext } from '../../contexts/CounterContext';

export const Heading = () => {
  const [state, actions] = useCounterContext();

  return (
    <div>
      <h1 style={{ fontSize: '60px' }}>
        {state.counter}
      </h1>
    </div>
  )
}

