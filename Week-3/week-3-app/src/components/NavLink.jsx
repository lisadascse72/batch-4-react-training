import styled from "styled-components";

/* =========================
   Exercise 4: Styled Component with hover + media query
========================= */

const StyledLink = styled.a`
  color: black;
  text-decoration: none;

  /* Hover effect */
  &:hover {
    color: red;
  }

  /* Hide on mobile */
  @media (max-width: 600px) {
    display: none;
  }
`;

const NavLink = () => {
  return <StyledLink href="#">Home</StyledLink>;
};

export default NavLink;