import P from 'prop-types';
import './styles.css';

export const Button = ({ text, onClick, disabled = false }) => (
  <button
    className='button'
    onClick={onClick}
    disabled={disabled}
  >
    {text}
  </button>
)

Button.defaultProps = {
  disabled: false,
}

Button.propTypes = {
  text: P.string.isRequired,
  onClick: P.func.isRequired,
  disabled: P.bool,
};

// export class Button extends Component {
//     render() {
//         const { text, onClick, disabled } = this.props;

//         return (
//             <button
//                 className='button'
//                 onClick={onClick}
//                 disabled={disabled}
//             >
//                 {text}
//             </button>
//         );
//     }
// }
