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
    <div class={"text" + ((inAnimation) ? " in" : "")}>
      Welcome !
      <br />
      I'm Kéziah IMER. I'm a French computer science student. I'm currently studying at EPITECH. I'm searching for an internship for 4 months from February 2023.
    </div>
  );
};

export default Introduction;
