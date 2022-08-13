import React, { useState, useEffect, Suspense, lazy } from 'react';

const Button = lazy(() => import('lib/Button'));

const Home = () => {
  const [getMessage, setGetMessage] = useState();
  const [canRender, setCanRender] = useState(false);

  useEffect(() => {
    import('lib/utils').then(({ func1, func2 }) => {
      console.log(func1());
      console.log(func2());

      setGetMessage(() => func1);
    });

    setCanRender(true);
  }, []);

  return (
    <div>
      <h1>Home Page</h1>

      <Suspense fallback="Loading...">
        {canRender && (
          <Button
            onClick={() => {
              console.log(getMessage());
            }}
          />
        )}
      </Suspense>
    </div>
  );
};

export default Home;
