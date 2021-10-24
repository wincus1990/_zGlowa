import styled from "styled-components";

export const StyledFormWrapper = styled.div`
    width: 100%;
    font-size: ${({ theme }) => theme.fontSize.xxxs };
`
export const StyledHeaderWrapper = styled.div`
   margin-bottom: 4%;
`

export const StyledDataWrapper = styled.div`
    
    form {

        div{
            display: flex;
            align-items: center;

            @media (max-width: 800px) {
                    display: block;             
                }

        }
        label{
            width: 50%;
            margin: 1% 0;
            padding: 0;

            @media (max-width: 800px) {
                width: 100%;      
                display: block     
                }
        }

        textarea{
            background-color: ${({ theme }) => theme.lightGrey };
            resize: none;
            border: 0;
            width: 100%;
            height: 200px;
            margin-bottom: 4%;
        }
    }
   
`

export const StyledTextAreaWrapper = styled.div`
    textarea{
        background-color: ${({ theme }) => theme.lightGrey };
        width: 99%;
        resize: none;
        border: 0;
        margin: 1px;
    }
`

