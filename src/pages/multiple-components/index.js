import dynamic from "next/dynamic";
const A = dynamic(() => import("../../components/HereIsJonny"));
const B = dynamic(() => import("../../components/WithoutSSR"));
const C = dynamic(() => import("../../components/WithSSR"));

const mapComponents = { A, B, C };
const App = () => {
  const RenderComponent = mapComponents['A'];
  return <RenderComponent />;
};

export default App