import styled from "styled-components";

/* =========================
   Exercise 2: Styled Component with dynamic prop
========================= */

const Card = styled.div`
  padding: 10px;
  color: white;
  margin: 10px 0;

  /* Change background based on type prop */
  background-color: ${(props) =>
    props.type === "success" ? "green" : "red"};
`;

const StatusCard = ({ type }) => {
  return <Card type={type}>{type} message</Card>;
};

export default StatusCard;