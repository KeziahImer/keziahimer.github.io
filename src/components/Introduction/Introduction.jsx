import { useEffect, useState } from 'react';
import './Introduction.css'

const Introduction = () => {
  const [inAnimation, setInAnimation] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setInAnimation(true);
    }, 500)
  }, [])
  return (
    <div class={"text" + (inAnimation ? " in" : "")}>
      Welcome !
      <br />
      I'm Kéziah IMER. I'm a French computer science student. I'm currently studying at EPITECH. I'm searching for freelance missions from September 2024 to June 2025.
    </div>
  );
};

export default Introduction;
