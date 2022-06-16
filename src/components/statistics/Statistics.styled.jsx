import styled from "@emotion/styled";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  max-width: 600px;
  width: 100%;
`;

export const Title = styled.h2`
  font-size: 30px;
  text-transform: uppercase;
  text-align: center;
  background-color: #00ffff;
  margin: 0;
  color: #ffff00;
  padding: 25px;
`;

export const StatList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  width: calc(100% / 5);
  text-align: center;
  padding: 15px;
  background-color: ${(props) => {
    switch (props.id) {
      case "id-1":
        return "#90000060";
      case "id-2":
        return "#90600060";
      case "id-3":
        return "#90609060";
      case "id-4":
        return "#60906060";
      case "id-5":
        return "#26262660";
      default:
        return "#FFFFFF";
    }
  }};
`;

export const Label = styled.span`
text-transform: uppercase;
font-size: 16px;
`;

export const Percentage = styled.span`
color: #FFFFFF;
`;
