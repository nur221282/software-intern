import React from 'react';
import logo from './logo.svg';
import './App.css';
import { constants } from 'buffer';
import { Button } from './Button';

export const Card=()=> {


  return (
    <div>


<div className="col">
          <div className="card">
            <img src="hhttps://card.godsunchained.com/?id=55&q=1&w=1024" className="card-img-top" alt="NFT1" />
            <div className="card-body">
              <p className="card-text">
                BUY<Button/>
              </p>
            </div>
          </div>
        </div>

      <Button/>
    </div>
  );
}