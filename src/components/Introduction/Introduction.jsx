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
      I'm Kéziah IMER, a French computer science student currently studying at EPITECH. I'm looking for a part-time internship from September 2025 to February 2026, followed by an end-of-study internship from March 2026 to August 2026.
    </div>
  );
};

export default Introduction;
