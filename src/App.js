import { useEffect, useState } from "react";
import DateInput from "./components/DateInput";
import Hearder from "./components/Header";
import Main from "./components/Main";
import TextInput from "./components/TextInput";
import { getAgeFrom } from "./helpers/dataHelpers";
import { getNewId } from "./services/idServices";
import Timer from "./components/Timer";
import CheckBoxInput from "./components/CheckBoxInput";
import OnlineOffline from "./components/OnlineOffline";

//import Test from "./components/Test";

export default function App() {
  const [name, setName] = useState("Digite aqui");
  const [birthDate, setBirthDate] = useState("");
  const [showTime, setShowTime] = useState(false);
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    document.title = name;
  }, [name]);

  useEffect(() => {
    console.log("IsOline esta como " + isOnline);
    function toggleIsOnline() {
      setIsOnline(true);
    }

    function toggleIsOffline() {
      setIsOnline(true);
    }

    window.addEventListener("online", toggleIsOnline);
    window.addEventListener("offline", toggleIsOffline);

    return () => {
      window.removeEventListener("online", toggleIsOnline);
      window.removeEventListener("offline", toggleIsOffline);
    };
  }, [isOnline]);

  const handleNameChange = (newName) => {
    setName(newName);
  };

  const handleBirthDateChange = (newDate) => {
    setBirthDate(newDate);
  };

  const toggleShowTimer = () => {
    setShowTime((currentShowTimer) => !currentShowTimer);
  };

  return (
    <>
      <Hearder>
        <strong>React Hello</strong>
      </Hearder>

      <Main>
        <OnlineOffline isOnline={isOnline} />
        {showTime && (
          <div className="text-right m-2">
            <Timer />
          </div>
        )}

        <CheckBoxInput
          idInputText={getNewId()}
          labelDescription={"Mostrar cronômetro"}
          inputValue={name}
          onInputChange={toggleShowTimer}
          autoFocus
        />

        <TextInput
          idInputText={getNewId()}
          labelDescription={"Difite seu Nome:"}
          inputValue={name}
          onInputChange={handleNameChange}
          autoFocus
        />

        <DateInput
          idInputDate={getNewId()}
          labelDescription={"Difite sua data de nascimmento:"}
          inputValue={birthDate}
          onInputChange={handleBirthDateChange}
        />

        <p>
          {" "}
          O seu nome é {name}, com {name.length} caracteres e você tem{" "}
          {getAgeFrom(birthDate)} anos
        </p>
      </Main>
    </>
  );
}
