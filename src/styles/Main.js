import styled from "styled-components";

export const Container = styled.div`
   display:grid;
   justify-content:center;
   align-content:center;
   width:400px;
   margin:40px auto;
   grid-template-columns:repeat(4,100px);
   grid-template-rows:minmax(120px,auto) repeat(5,100px);
   box-shadow:2px 2px 10px #333;
   border-radius:10px;
`;

export const Screen = styled.div`
  grid-column:1/-1;
  display:flex;
  justify-content:space-around;
  flex-direction:column;
  text-align:right;
  padding:10px;
  word-wrap:break-word;
  break-word:break-all;
  border-top-left-radius:10px;
  border-top-right-radius:10px;
`;

export const Previous = styled.div`
  color:rgba(255,255,255,0.75);
  font-size:1.5rem;
`;

export const Current = styled.div`
  color:white;
  font-size:2.5rem;
`;

export const Button = styled.button`
   cursor: pointer;
   font-size:2rem;
   outline:none;
   border:1px outset;
   border-radius:100px;
   margin:10px;
      background-color: rgba(255,255,255,0.75);
   &:hover {
      background-color: rgba(255, 255, 255, 0.9);
      box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, 
                  rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
   }

   ${({ $gridSpan }) => $gridSpan && `grid-row: span ${$gridSpan};`}
   ${({ $operation }) => $operation && "background: linear-gradient(to right, #CB80AB, #EDE8DC);"}
`;