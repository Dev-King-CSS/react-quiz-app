import styled from "styled-components"
//! Types
import { StyledComponent } from "styled-components"
import { ButtonWrapperProps } from "../utils"

export const Wrapper: StyledComponent<"div", any, {}, never> = styled.div`
  max-width: 68.75rem;
  background: whitesmoke;
  border-radius: 0.625rem;
  padding: 1.25rem;
  box-shadow: 0px 5px 10px #0004;
  text-align: center;

  p {
    font-size: 1rem;
    user-select: none;

    &.number {
      margin-bottom: 1rem;
    }
  }
`

export const ButtonWrapper: StyledComponent<
  "div",
  any,
  ButtonWrapperProps,
  never
> = styled.div<ButtonWrapperProps>`
  transition: all 300ms ease;

  button {
    cursor: pointer;
    user-select: none;
    font-size: 0.8rem;
    width: 100%;
    height: 2.5rem;
    margin: 0.313rem 0;
    background: ${({ correct, userClicked }: ButtonWrapperProps) =>
      correct
        ? "linear-gradient(90deg, #56FFA4, #59BC86)"
        : !correct && userClicked
        ? "linear-gradient(90deg, #FF5656, #C16868)"
        : "linear-gradient(90deg, #56ccff, #6eafb4)"};
    border: none;
    border-radius: 0.625rem;
    color: white;
    transition: all 100ms ease;

    &:hover {
      opacity: 0.8;
      transform: translateY(-1px);
    }

    &:active {
      transform: translateY(0);
    }
  }
`
