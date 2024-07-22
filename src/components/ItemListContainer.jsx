import Container from "react-bootstrap/Container";

export const ItemListContainer = (props) => {
  return (
    <Container id="ItemContainer" className="pt-20">
      <h2>{props.greeting}</h2>
    </Container>
  );
};
