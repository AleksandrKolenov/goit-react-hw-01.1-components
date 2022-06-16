import styled from '@emotion/styled'

export const List = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
max-width: 500px;
margin: 100px auto 100px;
`;

export const Description = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
bakground-color: rgb(80, 128, 128);
background-color: rgba(241, 231, 174, 0.425);
padding: 50px;
`;

export const Avatar = styled.img`
border-radius:50%;
width: 150px;
text-align: center;
margin: 0 0 20px;
`;

export const Name = styled.p`
font-size: 20px;
margin: 0
`;

export const Tag = styled.p`
font-size: 14px;
color: rgb(156, 128, 128);
margin: 10px 0 0;
`;

export const Stats = styled.ul`
list-style: none;
text-align: center;
display: flex;
flex-direction: row;
margin:0;
padding: 0;
background-color: rgba(241, 231, 124, 0.125);
`;

export const Item = styled.li`
display: flex;
flex-direction: column;
padding: 20px;
border: 1px solid #00101030;
width: calc(100%/3);
`;