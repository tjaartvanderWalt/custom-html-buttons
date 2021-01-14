import React from "react";

import Button from "./Button";

function App() {
  return (
    <>
      <Button type="pill" color="primary" size="small">
        Primary
      </Button>
      <Button type="pill" color="secondary">
        Secondary
      </Button>
      <Button type="pill" size="large">
        Default
      </Button>
    </>
  );
}

export default App;
