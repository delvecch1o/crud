import styled from 'styled-components'


export const Select = styled.select`
    margin-left: .5rem;
    border:1px solid #333;
    border-radius: .3em;
    padding: .25rem;
    width: 6.5em;
    
`

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  min-width: 100vw;
  background-color: #383838
`

export const Form = styled.form`
  display: flex;
  padding: 3rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #201d1d;
  border-radius: 5px;
  width: 100%;
  max-width: 450px;
  gap: 30px 0px;
  h1 {
    color: white;
    font-size: 20px;
    font-weight: light;
  }
  p {
    color: white;
    font-size: 16px;
    font-weight: bold; 
  }
  a {
    color: white;
    font-size: 14px;
  }
`

export const Button = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`

export const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: palevioletred ;
  background: papayawhip;
  border: none;
  border-radius: 3px;
`

