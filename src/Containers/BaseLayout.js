import React from "react";
import bookingMachine from "../Machines/bookingMachine";
import {useMachine} from '@xstate/react'
import './BaseLayout.css'
import {StepsLayout} from './StepsLayout';
import {Nav} from '../components/Nav'
const BaseLayout = () => {
  const [state, send] = useMachine(bookingMachine)

  console.log('nuestra maquina', state.value, state.context);  
  // console.log('Matches true:', state.matches('initial'));
  // console.log('tickets true?:', state.matches('tickets'));
  // console.log('finish?:', state.can('Finish'));


  return (
    <div className="BaseLayout">
      <Nav state={state} send={send} />
      <StepsLayout state={state} send={send} />
    </div>
  );
};

export default BaseLayout;
