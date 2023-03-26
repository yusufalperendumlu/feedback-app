import PropTypes from 'prop-types'
//import IHeaderProps from '../types/IHeaderProps';

const Header = ({text, bgColor, textColor}) => {
    const styleHeader = {
        backgroundColor: bgColor,
        color: textColor,
    }

    return (
        <header style={styleHeader}>
            <div className='container'>
            <h1>{text}</h1>
            </div>
        </header>    
    )
}

Header.defaultProps = {
    text: 'Feedback UI',
    bgColor: 'rgba(0, 0, 0, 0.4)',
    textColor: '#005670'
}

Header.prototype = {
    text: PropTypes.string,
    bgColor: PropTypes.string,
    textColor: PropTypes.string
}

export default Header;