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
            width: 95%;
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

