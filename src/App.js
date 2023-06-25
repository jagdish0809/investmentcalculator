import UserForm from "./Components/UserInput/UserForm";
import Header from "./Components/ShowResult/Header";
import Results from "./Components/ShowResult/Results";
import React, {useState} from 'react';

function App() {
  const [investmentDetails, setInvestmentDetails] = useState([])
  const storeUserData = (DATA) => {
    setInvestmentDetails(DATA)
  };


  return (
    <div>
      <Header />
      <UserForm userData={storeUserData} />
      <Results passData={investmentDetails}/>
    </div>
  );
}

export default App;
