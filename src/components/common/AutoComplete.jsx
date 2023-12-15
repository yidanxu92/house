import React, { useState } from 'react';
import Autosuggest from 'react-autosuggest';


const AutoComplete=({value, onChange, suggestions,
    placeholder, onSuggestionSelected}) =>{const[input,setInput]=useState('');
    const[filteredSuggestions, setFilteredSuggestions]=useState([]);

const onSuggestionsFetchRequested = ({value})=>{
    const inputValueLowerCase=value.trim().toLowerCase();
    const filterSuggestions=suggestions.filter(item=>item.toLowerCase().
    includes(inputValueLowerCase));
    setFilteredSuggestions(filterSuggestions);

}

const onSuggestionsClearRequested =()=>{
    setFilteredSuggestions([]);

};

const handleChange=(event,{newValue})=>{
    setInput(newValue);
    onChange(newValue);
};

const inputProps ={
    placeholder,
    value:input,
    onChange:handleChange,

};

return(
    <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={onSuggestionsFetchRequested}
        onSuggestionsClearRequested={onSuggestionsClearRequested}
        onSuggestionSelected={onSuggestionSelected}
        getSuggestionValue={(suggestion)=>suggestion}
        renderSuggestion={(suggestion)=><div>{suggestion}</div>}
        inputProps={inputProps}
        />
);
};

export default AutoComplete;



