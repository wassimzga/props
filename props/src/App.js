
import Profile from './profile/monprofil'
import wassim from './photowassim.jpg'


function App() {
 const handleName = () => {
   alert('this is the profile of wassim')
 }
  return (
    <div style= {{color:"white" , backgroundColor:"grey"}}>
    <Profile fullName="Mohamed Wassim Bouzgarrou" bio="39 years old"  profession="Manager" handleName={handleName}>
      <img src={wassim} alt='wassim'/>   </Profile>
    </div>
  );
}

export default App