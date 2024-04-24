import React, { useState } from 'react';
import styled from 'styled-components';

const Display = styled.div`
    background: black;
    color: white;
    height: 50%;
    width: 70%;
    padding: 10px
`;

const BoxContent = styled.div`
    justify-content: space-between;
    display: flex;
    height: 75%;
    width: 95%;
`;

const Asterik = styled.span`
    color: red;
`;

const InputBox = styled.input`
    background: black;
    border: 2px solid white;
    border-radius: 5px;
    color: white;
    padding: 10px;
    margin: 10px;
    width: 200px;
    font-size: 16px;
`;

const Emailbox = styled.input`
    background: black;
    border: 2px solid white;
    border-radius: 5px;
    color: white;
    padding: 10px;
    margin: 10px;
    width: 90%;
    font-size: 16px;
`;

const Label = styled.div`
    font-size: 20px;
    padding: 10px;
`;

const BoxTopic = styled.div`
    height: 150px;
    width: 370px;
    padding-right: 12%;
    margin: 10px 10px 0px 10px;
    border: 2px dashed white;
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
    padding-left: 30px;
`;

const Kiri = styled.div`
    // background: red;
    width: 50%;
    height: 100%;
`;

const Kanan = styled.div`
    // background: red;
    width: 60vh;
    height: 50vh;
`;

const OptionalText = styled.div`
    font-size: 14px;
    color: grey;
 
`;

const BoxText = styled.div`
    font-size: 15px;
`;

const DescBox = styled.textarea`
    border-color: white;
    background: black;
    height: 100%;
    width: 80%;
    color: white;
`;

const BoxLabel = styled.label`
    margin-top: 2px;
`;

const BoxButton = styled.input`
    margin: 5px
`;

const Btn = styled.div`
    background: black;
    display: flex;
    justify-content: right;
    width: 61vw;
    margin-top: 10px;
`;

const SubmitBtn = styled.button`
    background:  ${props => (props.disabled ? 'gray' : '#FFB000')};
    padding: 10px;
    border-radius: 20px;
    width: 12%;
    font-size: 20px
    cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};

  &:hover {
    background: ${props => (props.disabled ? 'gray' : '#FFD77F')};
  }
`;

const Reciepe = styled.div`
  background: black;
  height: 75%;
  width: 95%;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RespTitle = styled.div`
  color: orange;
  font-size: 27px;
  text-align: center;
`;

const RandomTicket = styled.div`
  color: grey;
  font-size: 24px;
  text-align: center;
`;


const Support: React.FC<{}> = () => {
    const [showBoxContent, setShowInner] = useState(true);
    const [showButton, setShowBtnArea] = useState(true);
    const [showReciepe, setShowInnerBottom] = useState(false);
  
    const [nameFirst, firstName] = useState<string>("");
    const [nameLast, lastName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
    const [ticketNumber, setTicketNumber] = useState<number | null>(null);
  
    const generateNumber = () => {
      return Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
    };
  
    const handleSendClick = () => {
      const isValidEmail = validateEmail(email);
      if (nameFirst.trim() === "" || nameLast.trim() === "" || email.trim() === "" || !isValidEmail || selectedTopic === null) {
        alert("Please fill in all required fields with valid information (Name, Email, Topic).");
        return;
      }
    
      const randomFourDigitNumber = generateNumber();
      setTicketNumber(randomFourDigitNumber);
      setShowInner(false);
      setShowBtnArea(false);
      setShowInnerBottom(true);
    };
    
    // Function to validate email using a regex
    const validateEmail = (email: string) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };
    
    const isSendButtonDisabled = nameFirst.trim() === "" || nameLast.trim() === "" || email.trim() === "" || selectedTopic === null;
  
    return (
        <Display>
            <h2>Support Ticket Form</h2>
            <hr />
            {showBoxContent && (
                <BoxContent>
                <Kiri>
                    <Label>Name<Asterik>*</Asterik></Label>
                    <InputBox type="text" value={nameFirst} onChange={(e) => firstName(e.target.value)}/>
                    <InputBox type="text" value={nameLast} onChange={(e) => lastName(e.target.value)}/>
                    <div style = {{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent:'space-between',
                        width: '267px',
                        marginLeft: '15px',
                        color: 'grey'
                    }}><small>first</small>
                    <small>last</small></div>
    
                    <Label>Email <Asterik>*</Asterik></Label>
                    <Emailbox type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
    
                    <Label>Topic <Asterik>*</Asterik></Label>
                    <BoxTopic>
                        <BoxText>What Can We Help You Today?</BoxText>
                        <BoxLabel>
                            <BoxButton type="radio" name="topic" checked={selectedTopic === 'General'} onChange={() => setSelectedTopic('General')}/>
                            General
                        </BoxLabel>
                        <BoxLabel>
                            <BoxButton type="radio" name="topic" checked={selectedTopic === 'Bug'} onChange={() => setSelectedTopic('Bug')}/>
                            Bug
                        </BoxLabel>
                    </BoxTopic>
                </Kiri>
                
                <Kanan>
                    <Label>Description<OptionalText>Optional</OptionalText></Label>
                    <DescBox placeholder= 'descriotion report'/>
                </Kanan>
                </BoxContent>
            )}
            
            {showButton && (
                <Btn>
                <SubmitBtn onClick={handleSendClick} disabled={isSendButtonDisabled}>SEND</SubmitBtn>
            </Btn>
            )}
            
            {showReciepe && (
          <Reciepe>
            <RespTitle>Thank you for sending us your problem, we will
              <br/>
              track your problem now
              <br/>
              <br/>
              {ticketNumber && <RandomTicket>Ticket number: {ticketNumber}</RandomTicket>}
            </RespTitle>
          </Reciepe>
           )}

        </Display>
    )
};

export default Support;