import styled from 'styled-components'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

export const StyledButton = styled(AniLink)`
    color: black;
    transition: opacity ease-in-out 0.2s;

    :hover {
        opacity: 1;
        color: ${({type}) => 
            type === 'solid' && 'white' ||
            'black'
        };

        span.inner {
            border-color: transparent;
        }
    }

    span {
        text-transform: uppercase;
        font-size: 11px;
        letter-spacing: 1.5px;
        font-weight: 700;
        padding: 20px 45px;
        border: 1px solid ${({type}) => 
            type === 'solid' && 'transparent' ||
            'black'
        };
        background-color: ${({type}) => 
            type === 'solid' && 'white' ||
            'transparent'
        };
        transition: all ease-in-out 0.1s;

        :hover {
            background-color: ${({type}) => 
                type === 'solid' && 'transparent' ||
                'white'
            };
            border-color: white;
            opacity: 1;
        }
    }
`
