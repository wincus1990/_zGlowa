import styled from "styled-components";

export const StyledFormWrapper = styled.div`
    margin: 0 auto;
    font-size: ${({ theme }) => theme.fontSize.xxxs };
`
export const StyledHeaderWrapper = styled.div`
    margin-bottom: 5%;
`

export const StyledDataWrapper = styled.div`
    
    form {

        div {
            display: inline-block;
            width: 50%;
        }

        label{
            display: block;
            padding: 5px 0;
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
        width: 100%;
        resize: none;
        border: 0;
    }
`

