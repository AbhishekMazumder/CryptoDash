import React from 'react';
import styled from 'styled-components';
import {backgroundColor2, fontSize2} from '../Shared/Styles';

const SearchGrid= styled.div`
  display: grid;
  grid-template-columns: 200px 1fr;
  align-items: center;
  justify-content: center;
`

const SearchInput= styled.input`
  ${backgroundColor2};
  color: #1163c9;
  ${fontSize2};
  border: 1px solid;
  height: 20px;
  place-self: left;
  padding: 10px;
`

export default function Search() {
  return (
    <SearchGrid>
      <h3>Search Coins</h3>
      <SearchInput/>
    </SearchGrid>
  )
}
