
import './NoisyContainer.css'

function NoisyContainer({ children }) {
    return (
        <div className='noise-container'>
            {children}
        </div>
    );
}

export default NoisyContainer;
