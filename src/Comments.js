import styled from "styled-components";

function Comments({ id, email, comment }) {
  return (
    <Container>
      <Line>
        <Title>Comment Id</Title> <Content>{id}</Content>
      </Line>
      <Line>
        <Title>Email</Title> {email}
      </Line>
      <Title>Comment</Title> {comment}
    </Container>
  );
}

const Container = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 500px;
  height: 193px;
  padding: 20px;
  margin: 12px;

  background: #f8f9fa;
  border: 0.5px solid #ced4da;
  box-sizing: border-box;
  border-radius: 20px;
`;

const Line = styled("div")``;

const Title = styled("span")`
  font-family: SFProDisplay;
  font-size: 18px;
  line-height: 21px;
  font-weight: bold;
  /* identical to box height */

  color: #212529;
`;

const Content = styled("span")`
  font-family: SFProDisplay;
  font-size: 18px;
  line-height: 21px;
  /* identical to box height */

  color: #212529;
`;

export default Comments;
