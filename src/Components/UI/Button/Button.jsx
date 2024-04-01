import {StyledButton} from './Button.styled'

export default function Button({styles, type = 'button', onClick, disabled = false, children}) {
    return (
        <StyledButton
            styles={styles}
            type={type}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </StyledButton>
    );
};
