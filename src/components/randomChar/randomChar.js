import React, { Component } from 'react';
import styled from 'styled-components';
import gotService from '../../service/gotService';
import Spinner from './spinner';

const RandomBlock = styled.div`
  background-color: #fff;
  padding: 25px 25px 15px 25px;
  margin-bottom: 40px;
  h4 {
    margin-bottom: 20px;
    text-align: center;
  }
`;

const TermBlock = styled.div`
  font-weight: bold;
`;

export default class RandomChar extends Component {
  constructor() {
    super();
    this.updateCharachter();
  }

  state = {
    name: null,
    gender: null,
    born: null,
    died: null,
    culture: null,
    loading: true,
  };

  updateCharachter() {
    const id = Math.floor(Math.random() * 140 + 25);
    gotService
      .getCharacter(id)
      .then(({ name, gender, born, died, culture }) =>
        this.setState({ name, gender, born, died, culture, loading: false }),
      )
      .catch(err => console.error(err));
  }

  render() {
    const { name, gender, born, died, culture, loading } = this.state;
    return (
      <>
        {!loading ? (
          <Spinner />
        ) : (
          <RandomBlock className="rounded">
            <h4>Random Character: {name}</h4>
            <ul className="list-group list-group-flush">
              <li className="list-group-item d-flex justify-content-between">
                <TermBlock className="term">Gender </TermBlock>
                <span>{gender}</span>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <TermBlock className="term">Born </TermBlock>
                <span>{born}</span>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <TermBlock className="term">Died </TermBlock>
                <span>{died}</span>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <TermBlock className="term">Culture </TermBlock>
                <span>{culture}</span>
              </li>
            </ul>
          </RandomBlock>
        )}
      </>
    );
  }
}
