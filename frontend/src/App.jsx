import { useState, useEffect } from "react";
import { Card } from "./components/Card";
import { InputForm } from "./components/form";


function App() {
  const [input, setInput] = useState(false)
  const [cards, setCard] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:3000/cards')
      const detail = await response.json()
      setCard(detail)
    }
    fetchData()
  }, [input])



  function AddCard() {
    setInput(true)
  }

  function OnClose() {
    setInput(false)
  }

  return (
    <div style={{ width: "100%", height: "auto", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
      <div style={{ padding: "0 5rem", display: "flex", width: "100%", gap: "2rem", flexWrap: "wrap" }}>

        {cards.map((card, index) => (
          <Card
            key={index}
            name={card.name}
            description={card.description}
            interest={card.interest}
            links={card.links}
          />
        ))}
      </div>

      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", margin: "3rem 0 0 0" }}>
        <button onClick={AddCard} style={{ width: "10rem" }}>Add</button><br />
        {input && <InputForm onClose={OnClose} />}
      </div>
    </div>

  );

}

export default App