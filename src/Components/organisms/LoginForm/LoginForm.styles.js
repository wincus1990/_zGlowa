import styled from "styled-components";

export const StyledFormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 450px;
    min-height: 100px;
    margin: 0 auto;
    font-size: ${({ theme }) => theme.fontSize.xxxs };

    h3{
        padding: -10;
    }
`
export const StyledHeaderWrapper = styled.div`
   margin-bottom: 5%;
   
   span {
    &:hover{
        cursor: pointer;
    }
   }
`

export const RecoveryWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 200px;
`

export const StyledDataWrapper = styled.div`

    form {

        input[type=checkbox]{
            margin-right: 1.5%;
        }

        div {

            span{
                position: absolute;
                margin: 2% auto;

                &:hover{
                    cursor: pointer;
                    color: ${({ theme }) => theme.mainBlue };
                    text-decoration: underline;
                }
            }
        }

        span {
            margin: 2% 0;
            display: flex;
            align-items: center;
        }

        label{
            display: block;
            padding: 5px 0;
        } 
    }
`