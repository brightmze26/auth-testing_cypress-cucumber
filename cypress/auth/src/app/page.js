'use client'
import { db } from './config'
import { collection, addDoc } from 'firebase/firestore';
import { useState } from 'react';

async function addDataToFireStore(name, password) {
  try {
    const docRef = await addDoc(collection(db, "message"), {
      name: name,
      password: password,
    });
    console.log("Document written:", docRef.id);
    return true;
  
  } catch (error) {
    console.log("Error Add", error)
    return false;
  }
}

export default function Home() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const added = await addDataToFireStore(name, password);
    if (added) {
      setName("");
      setPassword("");
      setSuccessMessage("Successfully!");
    }
  }
  


  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <form 
        onSubmit={handleSubmit}
        className='max-w-md mx-auto p-4 bg-white shadow-md rounded-lg'
        >
          <div className='mb-4'>
            <label
              htmlFor='name'
              className='block text-gray-700 font-bold mb-2'>
                Name: 
            </label>
              <input
                type='text'
                id='name'
                className='w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500'
                value={name}
                onChange={(e) => setName(e.target.value)}>
              </input>
          </div>
          <div className='mb-4'>
            <label
              htmlFor='password'
              className='block text-gray-700 font-bold mb-2'>
                Password: 
            </label>
              <input
                type='text'
                id='password'
                className='w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500'
                value={password}
                onChange={(e) => setPassword(e.target.value)}>
              </input>
          </div>
          <div className='text-center'>
            <button
              type='submit'
              data-testId='submit-button'
              className='bg-blue-500 text-white py-2 px-2'>
                Login
            </button>
          </div>
        </form>
        <div className="mt-4 text-green-500" data-testid="success-message">
          {successMessage}
        </div>
    </main>
  );
}
