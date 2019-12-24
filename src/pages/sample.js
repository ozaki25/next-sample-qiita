import { useState } from 'react';

function Sample({ id }) {
  const [test, setTest] = useState(id);
  console.log({ id, test });

  return (
    <>
      <p>{id}</p>
      <p>{test}</p>
    </>
  );
}

Sample.getInitialProps = ({ query }) => {
  console.log({ query });
  return { id: query.id };
};

export default Sample;
