import React, { useContext } from "react";
import SearchContext from "../context/SearchWordContext";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const SearchWord = () => {
  const { word } = useContext(SearchContext);
  console.log(word);

  return (
    <>
      <Container>
        <Row>
          <Col sm={12}>
            <div className="word-display">
              {word.map((word) => (
                <>
                  <h2>Some Urban definition :</h2>
                  <p key={word.id}>{word.definition}</p>
                  <Col sm={12}>
                    <h2>Examples :</h2>
                    {word.example}
                  </Col>
                </>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SearchWord;
