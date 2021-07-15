import React, { memo } from 'react';

//props 구조분해해서 쓰는 경우가 더 간편

const Try = memo(({tryInfo}) => {
  return (
    <li>
      <div>{tryInfo.try}</div>
      <div>{tryInfo.result}</div>
    </li>
  );
});

export default Try;