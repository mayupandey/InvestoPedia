import Cont from './components/hey.js';
import Ns from './components/nav.js';
import Bl from './components/sc.js';
import Mem from './components/m1.js'; 
import Foot from './components/footer.js';
import Memberships from './components/membership.js';
function App() {
  return (
<div
style={
  {
 backgroundColor:"black !important"
  }
}>
<Ns/>
     <Cont/>
     <Bl/>
     <Mem/>
     <Memberships/>
     <Foot/>
     </div>
      
  );
}

export default App;
