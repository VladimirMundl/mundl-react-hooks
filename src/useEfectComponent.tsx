import { useState, useEffect } from "react";

export interface IUseEffectComponentProps {}

export default function UseEffectComponent(props: IUseEffectComponentProps) {
  const [val, valSet] = useState<number>(1);

  useEffect(() => {
    const timer = window.setInterval(() => {
      valSet((v) => v + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return <div>{val}</div>;
}
