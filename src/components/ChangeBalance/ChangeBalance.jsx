import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateBalance } from '../../redux/transactions/operations';
import { StyledForm } from './Styles';

import ModalWindow from '../ModalWindow/ModalWindow';

const ChangeBalance = () => {
  const stateBalance = useSelector(state => state.transactions.newBalance) ?? 0;
  console.log('stateBalance', stateBalance);
  // const [balance, setBalance] = useState(stateBalance ?? 0);
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();
    dispatch(updateBalance({ newBalance: evt.target.balance.value }));
  };
  // const handleChange = evt => {
  //   evt.preventDefault();
  //   if (!Number(evt.target.value.slice(0, -7))) return;
  //   setBalance(Number(evt.target.value.slice(0, -7)));
  // };
  const handleValue = stateBalance + '.00 UAH';

  return (
    <>
      <StyledForm onSubmit={handleSubmit}>
        <h2 className="title">Balance:</h2>
        <input
          className="inputTag"
          type="number"
          name="balance"
          title="Please, enter your balance"
          pattern="[0-9, .UAH]*"
          placeholder={`${stateBalance}.00 UAH`}
          // onChange={handleChange}
          // value={handleValue}
          required
        />
        <button type="submit" className="btn">
          Confirm
        </button>
      </StyledForm>
      {!stateBalance && <ModalWindow />}
    </>
  );
};

export default ChangeBalance;
