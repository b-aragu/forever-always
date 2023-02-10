import React, { useState } from 'react';
import './App.css';
import coupleImage from './couple.jpg';

function App() {
  const [bucketList, setBucketList] = useState([]);
  const [completedItems, setCompletedItems] = useState([]);
  const [showCompletedList, setShowCompletedList] = useState(false);

  const addToBucketList = (item, partner) => {
    setBucketList([...bucketList, { item, partner, completed: false, notes: "" }]);
  };

  const markAsCompleted = index => {
    const [completedItem] = bucketList.splice(index, 1);
    setBucketList([...bucketList]);
    setCompletedItems([...completedItems, { ...completedItem, timestamp: new Date().toString() }]);
  };


  const toggleCompletedList = () => {
    setShowCompletedList(!showCompletedList);
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={coupleImage} alt="Couple" />
        <h1>Forever always 💍❤️🥰🌹</h1>
      </header>
      <div className="add-form">
        <form
          onSubmit={e => {
            e.preventDefault();
            addToBucketList(e.target.item.value, e.target.partner.value);
            e.target.item.value = '';
            e.target.partner.value = '';
          }}
        >
          <input type="text" name="item" placeholder="Add item ✌️  " style={{ border: '10px solid neonblue' }} />
          <select name="partner" style={{ border: '10px solid neonblue' }}>
            <option value="baragu😎">baragu😎</option>
            <option value="wifey❤️👑">wifey❤️👑</option>
          </select>
          <br />
          <button className="add-button" type="submit">
            Add to Bucket List
          </button>
        </form>
      </div>
      <h2>Active Bucket List Items✌️  🥰❤️🌹</h2>
      <ul className="bucket-list">
        {bucketList
          .filter(item => !item.completed)
          .map((item, index) => (
            <li key={index}>
              {item.item} added by {item.partner}
              <br />
              <button onClick={() => markAsCompleted(index)}>
                Mark as Completed
              </button>
            </li>
          ))}
      </ul>
      <button className="com" onClick={toggleCompletedList}>View completed items 😁</button>
  {showCompletedList && <CompletedList items={completedItems} />}
</div>
);
}

function CompletedList({ items }) {
return (
<div className="completed-list">
<h2>Completed Bucket List Items 🎉</h2>
<ul>
{items.map((item, index) => (
<li key={index}>
{item.item} added by {item.partner}
{item.notes !== "" && <p>Notes: {item.notes}</p>}
</li>
))}
</ul>
</div>
);
}

export default App;




