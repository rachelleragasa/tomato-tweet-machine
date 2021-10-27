import React, { useEffect } from "react"
import styled from "styled-components"

const TextArea = ({ label, id, handleChange, value, placeholder, className, ...rest }) => {

    useEffect(() => {
        const element = document.getElementById(`${id}`)
        const offset = element.offsetHeight - element.clientHeight;
        element.addEventListener('input', (event) => {
            event.target.style.height = 'auto';
            event.target.style.height = event.target.scrollHeight + offset + 'px';
        });

        return () => {
            element.removeEventListener('input', (event) => {
                event.target.style.height = 'auto';
                event.target.style.height = event.target.scrollHeight + offset + 'px';
            });
        }
    }, [id]);


    return (
        <Wrapper>
            <label htmlFor={id}>{label}</label>
            <StyledTextArea id={id} onChange={handleChange} value={value} placeholder={placeholder} className={className} {...rest}>{value}</StyledTextArea>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    margin: 40px 0;
`

const StyledTextArea = styled.textarea`
    display: block;
    width: 100%;
    min-height: 100px;
    resize: none;
    background-color: var(--offWhite);
    padding: 10px;
    margin: 10px 0;
    border-radius: 4px;
    border: none;
`

export default TextArea;