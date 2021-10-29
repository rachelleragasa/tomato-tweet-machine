import React, { useEffect } from "react"
import styled from "styled-components"

const TextArea = ({ label, id, handleChange, value, placeholder, showCharacterCount, className, ...rest }) => {
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
        <>
            <Label htmlFor={id}>{label}</Label>
            <StyledTextArea id={id} onChange={handleChange} value={value} placeholder={placeholder} className={className} {...rest}>{value}</StyledTextArea>
        </>
    )
}

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

    &:focus {
        outline: 2px solid var(--black);
    }
`

const Label = styled.label`
    font-weight: 400;
`

export default TextArea;