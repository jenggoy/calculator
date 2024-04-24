import React from 'react';
import { BrowserRouter as Router, Route, Routes}  from 'react-router-dom';
import './App.css';
import Calculator from './components/Calculator';
import Support from './components/Support';
import styled from 'styled-components';


const Container = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  min-height: 49vw;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <Router>
      <Container>
        <Routes>
          <Route path ="/" element={<Calculator/>} />

          <Route path="/Support" element={<Support/>} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
